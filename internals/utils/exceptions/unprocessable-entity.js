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
 * Defines an HTTP exception for *UnprocessableEntity* type errors.
 */
export class UnprocessableEntityException extends HttpException {
  /**
   * Instantiate a ` UnprocessableEntityException` Exception.
   *
   * @example
   * `throw new  UnprocessableEntityException()`
   *
   * @usageNotes
   * The HTTP response status code will be 422.
   *
   * @param response string describing the error condition..
   * @param status HTTP response status code.
   */
  constructor(
    response = STATUS_TEXT.get(Status.UnprocessableEntity),
    status = Status.UnprocessableEntity) {
    super(response, status);
  }
}
