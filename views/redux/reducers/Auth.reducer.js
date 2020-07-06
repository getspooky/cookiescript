/*
 * This file is part of the mern-boilerplate project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
  AUTH_REGISTER,
  AUTH_LOGIN,
  AUTH_LOGOUT
} from 'views/global-vars';

// initial state.
const initState = {
  Auth: {
    isAuthenticated: false,
    isLoaded: false,
    // Get token from localStorage.
    token: localStorage.getItem('_token'),
  },
};

// Auth Reducer.
function authReducer(state = initState, {
  type,
  payload
}) {
  switch (type) {
    case AUTH_REGISTER:
    case AUTH_LOGIN:
      state = {
        Auth: {
          ...state,
          isAuthenticated: true,
          isLoaded: true,
          token: payload.data,
        },
      };
      // Set the token in localStorage
      localStorage.setItem('_token', payload.data);
      break;
    case AUTH_LOGOUT:
      // Remove token from localStorage.
      localStorage.removeItem('_token');
      state = {
        Auth: {
          isAuthenticated: false,
          token: null
        },
      };
      break;
  }
  return state;
}

export default authReducer;
