/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
  HTTP_REQUEST_PROFILE
} from 'views/services/Profile.service';
import {
  LOAD_PROFILE
} from 'views/global-vars';

// Profile Action.
export function profileAction() {
  return async (dispatch, getState) => {
    const token = getState().AuthReducer.Auth.token;
    const data = await HTTP_REQUEST_PROFILE(token);
    // Dispatch Action.
    dispatch({
      type: LOAD_PROFILE,
      payload: data
    });
  };
}
