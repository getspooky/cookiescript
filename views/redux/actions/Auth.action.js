/*
 * This file is part of the mern-boilerplate project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import vars from 'views/global-vars';
import services from 'views/services/auth.service';
import setActionType from 'intenals/views/types';

// Login action.
export function loginAction(payload) {
  return async (dispatch, getState) => {
    const data = await services.HTTP_REQUEST_LOGIN(payload);
    // Dispatch Action.
    dispatch({
      type: setActionType(data.status, vars.AUTH_LOGIN),
      payload: await data.json(),
    });
  };
}

// Register action.
export function registerAction(payload) {
  return async (dispatch, getState) => {
    const data = await HTTP_REQUEST_REGISTER(payload);
    // Dispatch Action.
    dispatch({
      type: setActionType(data.status, vars.AUTH_REGISTER),
      payload: await data.json(),
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
