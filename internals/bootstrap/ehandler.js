/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import logger from 'internals/utils/logging';

// Handling Errors.
export default function ({
  message,
  status,
  fileName
}, req, res, next) {
  // If err has no specified error code, set error code to 'Internal Server Error (500)'
  if (!status) status = 500;
  // If we're in development mode then log to the `console-handler` with the format:
  // ${timestamp} ${level}: ${message}
  if (process.env.NODE_ENV === 'development') logger.log(message, status);
  return res.status(status).json({
    errors: {
      message,
      fileName
    },
  });
}
