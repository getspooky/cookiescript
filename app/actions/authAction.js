import {AUTH_LOGIN, AUTH_REGISTER, CLEAR_ERRORS} from 'app/constants/actionTypes';
import {HTTP_REQUEST_LOGIN, HTTP_REQUEST_REGISTER} from 'app/services/httpClient/auth.service';
import * as helpers from 'support/helpers/front';

const {setActionType} = helpers;

/**
 * Login action.
 *
 * @export
 * @async
 * @function
 * @name LOGIN_ACTION
 * @returns {Function}
 */
export function LOGIN_ACTION(payload) {
  return async (dispatch, getState) => {
    const LOGIN_RESPONSE = await HTTP_REQUEST_LOGIN(payload);
    // Dispatch Action.
    dispatch({
      type: setActionType(LOGIN_RESPONSE.status, AUTH_LOGIN),
      payload: await LOGIN_RESPONSE.json(),
    });
  };
}

/**
 * Register action.
 *
 * @export
 * @function
 * @name REGISTER_ACTION
 * @param payload
 * @returns {Function}
 */
export function REGISTER_ACTION(payload) {
  return async (dispatch, getState) => {
    const REGISTER_RESPONSE = await HTTP_REQUEST_REGISTER(payload);
    // Dispatch Action.
    dispatch({
      type: setActionType(REGISTER_RESPONSE.status, AUTH_REGISTER),
      payload: await REGISTER_RESPONSE.json(),
    });
  };
}

/**
 * Clear auth action.
 *
 * @export
 * @function
 * @name CLEAR_AUTH_ACTION
 * @returns {Function}
 */
export function CLEAR_AUTH_ACTION() {
  return async (dispatch, getState) => {
    // dispatch action.
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
}
