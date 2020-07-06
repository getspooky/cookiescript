/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
  PROFILE_URL
} from 'views/global-vars';
import request from 'internals/views/request';

// Fetch the user's profile.
export async function HTTP_REQUEST_PROFILE(token) {
  return await request(PROFILE_URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
  });
}
