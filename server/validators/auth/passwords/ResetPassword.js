/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { check } from 'express-validator';

export function Validator() {
  return [
    check('token')
      .not()
      .isEmpty()
      .withMessage('Token is missing')
      .matches(/^[a-zA-Z0-9]{90}$/, 'i')
      .withMessage('Token must have 90 characters'),
    check('password')
      .not()
      .isEmpty()
      .withMessage('Password is missing')
      .isLength({
        min: 10,
      })
      .withMessage('Password must have more than 10 characters')
      .custom((value, {req, loc, path}) => {
        const {confirm_password} = req.body;
        if (value !== confirm_password) {
          // trow error if passwords do not match
          throw new TypeError(
            "Passwords don't match! Please Try Again"
          );
        }
        return value;
      }),
  ];
}
