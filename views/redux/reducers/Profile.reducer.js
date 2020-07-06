/*
 * This file is part of the mern-boilerplate project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
  LOAD_PROFILE
} from 'views/global-vars';

// initial state
const initState = {
  Profile: {
    username: null,
    email: null,
  },
};

// Profile Reducer
function profileReducer(state = initState, {
  type,
  payload
}) {
  switch (type) {
    case LOAD_PROFILE:
      state = {
        Profile: {
          ...state,
          ...payload.data,
        },
      };
      break;
  }
  return state;
}

export default profileReducer;
