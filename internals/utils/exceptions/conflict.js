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
 * Defines an HTTP exception for *Conflict* type errors.
 */
export class ConflictException extends HttpException {
  /**
   * Instantiate a `ConflictException` Exception.
   *
   * @example
   * `throw new ConflictException()`
   *
   * @usageNotes
   * The HTTP response status code will be 409.
   *
   * @param response string describing the error condition..
   * @param status HTTP response status code.
   */
  constructor(
    response = STATUS_TEXT.get(Status.Conflict),
    status = Status.Conflict) {
    super(response, status);
  }
}
