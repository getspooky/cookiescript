/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import mongoose from 'mongoose';
import redis from 'redis';
import config from 'internals/utils/config';
import logger from 'internals/bootstrap/logger';

/*
|------------------------------------------------------------------------------
| Open databases connections.
|------------------------------------------------------------------------------
|
| This file is responsible for starting database connections.
| "mongodb" | "redis"
|
*/

// starting databases.
(async function onDatabaseStart() {
  // By default CookieScript uses mongodb.
  const db_default = config('database@default.name');
  switch (db_default) {
    case 'mongodb':
      await onMongodbStart();
      break;
    case 'redis':
      await onRedisStart();
      break;
  }
})();


// starting MongoDB database.
async function onMongodbStart() {
  const driver = 'mongodb';
  const db_host = config('database@connections.mongodb.db_host');
  const db_port = config('database@connections.mongodb.db_port');
  const db_name = config('database@connections.mongodb.db_name');
  const db_options = config('database@connections.mongodb.options');
  // If you need to create additional connections, use mongoose.createConnection.
  const connecting = await mongoose.connect(`mongodb://${db_host}:${db_port}/${db_name}`, db_options);
  if (connecting) {
    logger.dbStarted(driver, db_name);
  }
}

// starting Redis database.
async function onRedisStart() {
  const driver = 'redis';
  const db_expiration = config('database@redis.expiration');
  // redis can be accessed anywhere.
  // emit connect as soon as the stream is connected to the server.
  redis.on('connect', () => {
    logger.dbStarted(driver, null);
  });
}
