/**
 * Cross-Origin Resource Sharing.
 *
 * @export
 * @function
 * @name cors
 * @param req
 * @param res
 * @param next
 */
export function cors(req, res, next) {
  // "*" wildcard, to tell browsers to allow any origin to rules the resource.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  // The Access-Control-Allow-Methods header specifies the method or methods allowed when
  // accessing the resource
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
}
