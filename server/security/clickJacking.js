/**
 * Deny X-Frame-Options.
 *
 * @export
 * @function
 * @name frameguard
 * @param req
 * @param res
 * @param next
 * @returns {void}
 */
export function frameguard(req, res, next) {
  // The X-Frame-Options HTTP response header can be used to indicate whether or not a browser
  // should be allowed to render a page in a <frame>, <iframe>, <embed> or <object> . Sites can use
  // this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites.
  res.setHeader('X-Frame-Options', 'deny');
  next();
}