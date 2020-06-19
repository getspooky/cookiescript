/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import mongoose from 'mongoose';
import config from 'internals/utils/config';

// connecting mongodb database.
export async function mountDatabase() {
  const db_host = config('database@connections.mongodb.db_host');
  const db_port = config('database@connections.mongodb.db_port');
  const db_name = config('database@connections.mongodb.db_test_name');
  const db_options = config('database@connections.mongodb.options');
  // If you need to create additional connections, use mongoose.createConnection.
  const connecting = await mongoose.connect(`mongodb://${db_host}:${db_port}/${db_name}`, db_options);
  if (!connecting) {
    throw new TypeError('Something went wrong');
  }
}

// destroy mongodb database.
export async function unmountDatabase() {
  // drop current database.
  await mongoose.connection.dropDatabase();
  // close connection.
  await mongoose.connection.close();
}
