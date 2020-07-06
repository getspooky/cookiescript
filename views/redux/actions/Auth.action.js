/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
  HTTP_REQUEST_LOGIN,
  HTTP_REQUEST_REGISTER
} from 'views/services/Auth.service';
import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  CLEAR_ERRORS
} from 'views/global-vars';

// Login action.
export function loginAction(payload) {
  return async (dispatch, getState) => {
    const data = await HTTP_REQUEST_LOGIN(payload);
    // Dispatch Action.
    dispatch({
      type: AUTH_LOGIN,
      payload: data,
    });
  };
}

// Register action.
export function registerAction(payload) {
  return async (dispatch, getState) => {
    const data = await HTTP_REQUEST_REGISTER(payload);
    // Dispatch Action.
    dispatch({
      type: AUTH_REGISTER,
      payload: data,
    });
  };
}

// Clear auth action.
export function clearAction() {
  return async (dispatch, getState) => {
    // dispatch action.
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
}
