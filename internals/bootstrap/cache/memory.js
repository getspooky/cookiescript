/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import mongoose from 'mongoose';

const {
  exec
} = mongoose.Query.prototype;

// Indicate that the query should be cached.
mongoose.Query.prototype.cache = function (options = {}) {
  this.useRedisCache = true;
  // If the query is requested to be cached, we will cache it using a unique key.
  this.hashKey = JSON.stringify(options.keys || this.getQuery());
  return this;
};

// Indicate that the query should be cached for specified time.
Query.prototype.remember = function (seconds) {
  // Setting expiry time for a collection in mongodb.
  this.expiration = env('DB_EXPIRATION', seconds);
  return this;
};

// Overwrite exec function in order to manipulate or execute query.
Query.prototype.exec = async function () {
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

  redis.hset(this.hashKey, key, JSON.stringify(result), 'EX', this.expiration || 2800);

  return result;
};
