/*
 * This file is part of the mern-boilerplate project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import vars from 'views/global-vars';
import request from 'internals/views/request';

// Send login request to the application.
export async function HTTP_REQUEST_LOGIN(payload) {
  return await request(vars.AUTH_LOGIN_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// Send register request to the application.
export async function HTTP_REQUEST_REGISTER(payload) {
  return await request(vars.AUTH_REGISTER_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// Send forgot password request to the application.
export async function HTTP_REQUEST_FORGOT_PASSWORD(payload) {
  return await fetch(vars.FORGOT_PASSWORD_URL, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
}

// Send reset password request to the application.
export async function HTTP_REQUEST_RESET_PASSWORD(payload) {
  return await fetch(vars.RESET_PASSWORD_URL, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
}
