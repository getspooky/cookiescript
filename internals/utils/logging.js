/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import winston from 'winston';
import config from 'internals/utils/config';

const file = config('logging@file');
const clog = config('logging@console');
const exitOnError = config('logging@exitOnError');

// Log args into .keep file
export function log(...args) {
  const logger = new winston.Logger({
    transports: [
      new winston.transports.File(file),
      new winston.transports.Console(clog)
    ],
    exitOnError
  });
}
