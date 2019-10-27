import {log} from 'server/utils/logger';

/**
 * Handling Errors.
 *
 * @export
 * @function
 * @name errorHandler
 * @param err
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */

export function errorHandler({message, statusCode, fileName}, req, res, next) {
  // If err has no specified error code, set error code to 'Internal Server Error (500)'
  if (!statusCode) statusCode = 500;
  // If we're in development mode then log to the `console-handler` with the format:
  // ${timestamp} ${level}: ${message}
  if (process.env.NODE_ENV === 'development') log(message, statusCode);
  return res.status(statusCode).json({
    errors: {message, fileName},
  });
}
