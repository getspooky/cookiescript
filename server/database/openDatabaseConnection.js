import {createClient} from 'redis';
import {connect} from 'mongoose';
import dbConfig from 'config/database';

const {log} = console;
const {error} = console;

/**
 * Open database connection.
 *
 * @export
 * @function
 * @name dbOnInit
 * @returns {void}
 */
export function dbConnection() {
  // mongoose connection.
  const {db_host, db_name, useCreateIndex, useFindAndModify, useNewUrlParser} = dbConfig.mongoose;
  // If you need to create additional connections, use mongoose.createConnection.
  connect(
    `mongodb://${db_host}/${db_name}`,
    {
      useFindAndModify,
      useCreateIndex,
      useNewUrlParser,
      useUnifiedTopology: true,
    }
  )
    .then(() => log('✅ MongoDB %s Connected successfully ', db_name))
    .catch(err => error(err));
  // redis connection.
  const {cache} = dbConfig.redis;
  if (cache !== null) {
    // redis can be accessed anywhere.
    global.redis = createClient();
    // emit connect as soon as the stream is connected to the server.
    // eslint-disable-next-line no-undef
    redis.on('connect', () => {
      log('✅ Redis Connected successfully ');
    });
    // display redis errors.
    // eslint-disable-next-line no-undef
    redis.on('error', err => {
      error(err);
    });
  }
}
