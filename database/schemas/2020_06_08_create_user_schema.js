/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import mongoose from 'mongoose';
import config from 'internals/utils/config';

// mailer configuration
var expires = config('mailer@token.expiration');
var length = config('mailer@token.lenght');

/* User Schema 2020_06_08_create_user_schema */
const CreateUserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 10,
    },
    email: {
      type: String,
      required: true,
      minLength: 5,
      validate: {
        validator(v) {
          return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(v);
        },
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 10,
    },
    email_verified_at: {
      type: Boolean,
      required: false,
      default: false,
    },
    // Reset Password Schema
    reset: {
      token: {
        type: String,
        required: false,
        length: length,
        expires,
      },
    },
  },
  {
    timestamps: true
  }
);

export default CreateUserSchema;
