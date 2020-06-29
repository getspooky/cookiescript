/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
  AUTH_REGISTER_URL,
  AUTH_LOGIN_URL,
  FORGOT_PASSWORD_URL,
  RESET_PASSWORD_URL
} from 'views/global-vars';
import request from 'internals/views/request';

// Send login request to the application.
export async function HTTP_REQUEST_LOGIN(payload) {
  return await request(AUTH_LOGIN_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// Send register request to the application.
export async function HTTP_REQUEST_REGISTER(payload) {
  return await request(AUTH_REGISTER_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// Send forgot password request to the application.
export async function HTTP_REQUEST_FORGOT_PASSWORD(payload) {
  return await request(FORGOT_PASSWORD_URL, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
}

// Send reset password request to the application.
export async function HTTP_REQUEST_RESET_PASSWORD(payload) {
  return await request(RESET_PASSWORD_URL, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
}
