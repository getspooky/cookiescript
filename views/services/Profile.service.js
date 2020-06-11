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

// Fetch the user's profile.
async function HTTP_REQUEST_PROFILE(token) {
  return await request(vars.PROFILE_URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export default HTTP_REQUEST_PROFILE;
