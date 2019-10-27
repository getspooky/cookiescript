import {ERR_HTTP_CONFLICTING_HEADERS} from 'server/custom/exceptions/ERR_HTTP_CONFLICTING_HEADERS';

/**
 * Detect Proxies with a node js Header.
 *
 * @var {Array}
 */
export const headers = [
  'HTTP_VIA',
  'VIA',
  'Proxy-Connection',
  'HTTP_X_FORWARDED_FOR',
  'HTTP_FORWARDED_FOR',
  'HTTP_X_FORWARDED',
  'HTTP_FORWARDED',
  'HTTP_CLIENT_IP',
  'HTTP_FORWARDED_FOR_IP',
  'X-PROXY-ID',
  'MT-PROXY-ID',
  'X-TINYPROXY',
  'X_FORWARDED_FOR',
  'FORWARDED_FOR',
  'X_FORWARDED',
  'FORWARDED',
  'CLIENT-IP',
  'CLIENT_IP',
  'PROXY-AGENT',
  'HTTP_X_CLUSTER_CLIENT_IP',
  'FORWARDED_FOR_IP',
  'HTTP_PROXY_CONNECTION',
];

/**
 * Detect proxies.
 *
 * @export
 * @function
 * @name detectProxy
 * @param req
 * @param res
 * @param next
 * @returns {void}
 */
export function detectProxy(req, res, next) {
  try {
    if (
      Array.isArray(headers) &&
      headers.some(header => typeof req.headers[header] !== 'undefined')
    ) {
      // tests whether at least one element in the array passes the test
      throw new ERR_HTTP_CONFLICTING_HEADERS();
    }
    next();
  } catch (err) {
    next(err);
  }
}
