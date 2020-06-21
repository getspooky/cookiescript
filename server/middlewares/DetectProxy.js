/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const headers = [
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

// Detect proxies.
export function detectProxy(req, res, next) {
  try {
    if (
      Array.isArray(headers) &&
      headers.some(header => typeof req.headers[header] !== 'undefined')
    ) {
      throw new TypeError('Proxy detected');
    }
    next();
  } catch (err) {
    next(err);
  }
}
