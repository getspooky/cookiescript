/*
 * This file is part of the mern-boilerplate project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

//Cross-Origin Resource Sharing.
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
