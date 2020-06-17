/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { check } from 'express-validator';

// Get the validation rules that apply to the request.
export function Validator() {
  return [
    check('email')
      .not()
      .isEmpty()
      .withMessage('Email is missing')
      .isEmail()
      .withMessage('Email is not valid'),
  ];
}
