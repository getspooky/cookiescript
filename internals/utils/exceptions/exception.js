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
   * - The `response` argument (required) defines the response body.
   * - The `status` argument (required) defines the HTTP Status Code.
   *
   * By default, the response body contains two properties:
   * - `statusCode`: the Http Status Code.
   * - `message`: a short description of the HTTP error by default; override this
   * by supplying a string in the `response` parameter.
   *
   * The `status` argument is required, and should be a valid HTTP status code.
   *
   * @param response string describing the error condition.
   * @param status HTTP response status code.
   */
  constructor(response, status) {
    super();
  }

  /**
   * Get the underlying response instance.
   * @return string
   */
  getResponse() {
    return this.response;
  }

  /**
   * Get HTTP response status code.
   * @return number
   */
  getStatus() {
    return this.status;
  }

}
