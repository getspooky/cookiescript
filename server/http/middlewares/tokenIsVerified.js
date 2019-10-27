import {verify} from 'jsonwebtoken';
import jwtConfig from 'config/jwt';
import {ERR_HTTP_UNAUTHORIZED} from 'server/custom/exceptions/ERR_HTTP_UNAUTHORIZED';

/**
 * Verify if the given jwt token is not expired.
 *
 * @export
 * @function
 * @name tokenVerification
 * @param req
 * @param res
 * @param next
 * @returns {void}
 */
export function tokenVerification(req, res, next) {
  try {
    const token = req.header('Authorization') || 'Bearer ';
    // set the json web token.
    req.jwtPayload = verify(
      token
        .split('Bearer')[1]
        .trim()
        .toString(),
      jwtConfig.private_Key,
      (err, decoded) => {
        if (err) throw new ERR_HTTP_UNAUTHORIZED('The Token provided is invalid');
        return decoded;
      }
    );
    next();
  } catch (err) {
    // Handle Error.
    next(err);
  }
}
