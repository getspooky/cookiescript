/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import jwt from 'jsonwebtoken';
import config from 'internals/utils/config';
import {
  UnauthorizedException
} from 'internals/utils/exceptions/unauthorized';

const secret = config('jwt@jwt.secret');

// Verify if the given jwt token is not expired.
export function tokenVerification(req, res, next) {
  try {
    const token = req.header('Authorization') || 'Bearer ';
    // set the json web token.
    req.jwtPayload = jwt.verify(
      token
      .split('Bearer')[1]
      .trim()
      .toString(),
      secret,
      (err, decoded) => {
        if (err) {
          throw new UnauthorizedException();
        }
        return decoded;
      }
    );
    next();
  } catch (err) {
    // Handle Error.
    next(err);
  }
}
