/*
 * This file is part of the mern-boilerplate project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// Cross-Origin Resource Sharing.
export function cors(req, res, next) {
  // "*" wildcard, to tell browsers to allow any origin to rules the resource.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  // The Access-Control-Allow-Methods header specifies the method or methods allowed when
  // accessing the resource
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
}

// Disable X-Powered-By header.
export function hidePoweredBy(req, res, next) {
  // removes the X-Powered-By header
  res.removeHeader('X-Powered-By');
  next();
}

// Block X-XSS-Protection.
export function xssFilter(req, res, next) {
  // The HTTP X-XSS-Protection response header is a feature of Internet Explorer,
  // Chrome and Safari that stops pages from loading when they detect reflected cross-site scripting (XSS) attacks
  // Learn more : https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
}
