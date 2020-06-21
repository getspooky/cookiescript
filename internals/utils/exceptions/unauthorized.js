/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
  HttpException
} from './exception';
import {
  Status,
  STATUS_TEXT
} from 'internals/utils/httpStatus';

/**
 * Defines an HTTP exception for *Unauthorized* type errors.
 */
export class UnauthorizedException extends HttpException {
  /**
   * Instantiate a `UnauthorizedException` Exception.
   *
   * @example
   * `throw new  UnauthorizedException()`
   *
   * @usageNotes
   * The HTTP response status code will be 401.
   *
   * @param response string describing the error condition..
   * @param status HTTP response status code.
   */
  constructor(
    response = STATUS_TEXT.get(Status.Unauthorized),
    status = Status.Unauthorized) {
    super(response, status);
  }
}
