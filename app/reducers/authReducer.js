import {AUTH_LOGIN, AUTH_REGISTER, AUTH_LOGOUT} from 'app/constants/actionTypes';

const initState = {
  Auth: {
    isAuthenticated: false,
    // Get token from localStorage.
    token: localStorage.getItem('_token'),
  },
};

/**
 * Auth Reducer.
 *
 * @function
 * @name AuthReducer
 * @param state
 * @param type
 * @param payload
 * @returns {object}
 */
export function AuthReducer(state = initState, {type, payload}) {
  switch (type) {
    case AUTH_REGISTER:
    case AUTH_LOGIN:
      state = {
        Auth: {isAuthenticated: true, token: payload.response.data},
      };
      break;
    case AUTH_LOGOUT:
      // Remove token from localStorage.
      localStorage.removeItem('_token');
      state = {
        Auth: {isAuthenticated: false, token: null},
      };
      break;
  }
  return state;
}
