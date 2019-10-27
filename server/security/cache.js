/**
 *
 * @type {string[]}
 */
const noCacheRoutes = ['/admin/login', '/admin/dashboard'];

/**
 * Disable Cache Control Attack.
 *
 * @export
 * @function
 * @name noCache
 * @param req
 * @param res
 * @param next
 * @returns {void}
 */
export function noCache(req, res, next) {
  if (noCacheRoutes.includes(req.url.trim())) {
    res.setHeader('Cache-Control', 'no-store');
  }
  next();
}