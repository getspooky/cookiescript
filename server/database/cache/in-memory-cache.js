import {Query} from 'mongoose';
import util from 'util';
import {env} from 'support/helpers';
// eslint-disable-next-line no-undef
redis.hget = util.promisify(redis.hget);

const {exec} = Query.prototype;

/**
 * Indicate that the query should be cached.
 *
 * @function
 * @name cache
 * @param options
 * @returns {Query}
 */
Query.prototype.cache = function(options = {}) {
  this.useRedisCache = true;
  // If the query is requested to be cached, we will cache it using a unique key.
  this.hashKey = JSON.stringify(options.keys || this.getQuery());
  return this;
};

/**
 * Indicate that the query should be cached for specified time.
 *
 * @function
 * @name cache
 * @param {number} seconds
 * @returns {Query}
 */
Query.prototype.remember = function(seconds) {
  // Setting expiry time for a collection in mongodb.
  this.expiration = env('DB_EXPIRATION', seconds);
  return this;
};

/**
 * Overwrite exec function in order to manipulate or execute query.
 *
 * @function
 * @name exec
 * @returns {Promise}
 */
Query.prototype.exec = async function() {
  if (!this.useRedisCache) return;

  const key = JSON.stringify(
    //
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name,
    })
  );
  // See if we have a value for 'key' in redis
  // eslint-disable-next-line no-undef
  const cacheValue = await redis.hget(this.hashKey, key);

  // If we do, return that
  if (cacheValue) {
    const doc = JSON.parse(cacheValue);

    return Array.isArray(doc) ? doc.map(d => new this.model(d)) : new this.model(doc);
  }

  // Otherwise, issue the query and store the result in redis
  const result = await exec.apply(this, arguments);

  // eslint-disable-next-line no-undef
  redis.hset(this.hashKey, key, JSON.stringify(result), 'EX', this.expiration || 2800);

  return result;
};
