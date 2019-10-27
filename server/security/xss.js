/**
 * Block X-XSS-Protection.
 *
 * @export
 * @function
 * @name xss
 * @param req
 * @param res
 * @param next
 * @returns {void}
 */
export function xssFilter(req, res, next) {
  // The HTTP X-XSS-Protection response header is a feature of Internet Explorer,
  // Chrome and Safari that stops pages from loading when they detect reflected cross-site scripting (XSS) attacks
  // Learn more : https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
}
