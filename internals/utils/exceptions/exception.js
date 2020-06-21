/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Defines the base CookieScript HTTP exception.
 */
export class HttpException extends Error {
  /**
   * Instantiate a plain HTTP Exception.
   *
   * @example
   * `throw new HttpException()`
   *
   * @usageNotes
   * The constructor arguments define the response and the HTTP response status code.
   * - The `message` argument (required) defines the response body.
   * - The `status` argument (required) defines the HTTP Status Code.
   *
   * The `status` argument is required, and should be a valid HTTP status code.
   *
   * @param message string describing the error condition.
   * @param status HTTP response status code.
   */
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }

  /**
   * Get the underlying response instance.
   * @return string
   */
  getResponse() {
    return this.message;
  }

  /**
   * Get HTTP response status code.
   * @return number
   */
  getStatus() {
    return this.status;
  }

}
