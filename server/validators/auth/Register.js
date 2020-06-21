/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
  check
} from 'express-validator';

// Get the validation rules that apply to the request.
export function Validator() {
  return [
    check('username')
    .not()
    .isEmpty()
    .withMessage('Username is missing')
    .isLength({
      min: 10,
    })
    .withMessage('Username must have more than 10 characters'),
    check('email')
    .not()
    .isEmpty()
    .withMessage('Email is missing')
    .isEmail()
    .withMessage('Email is not valid'),
    check('password')
    .not()
    .isEmpty()
    .withMessage('Password is missing')
    .isLength({
      min: 10,
    }),
  ];
}
