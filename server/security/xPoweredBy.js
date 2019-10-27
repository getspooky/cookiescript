/**
 * Disable X-Powered-By header.
 *
 * @export
 * @function
 * @name hidePoweredBy
 * @param req
 * @param res
 * @param next
 * @returns {void}
 */
export function hidePoweredBy(req, res, next) {
  // removes the X-Powered-By header
  res.removeHeader('X-Powered-By');
  next();
}
