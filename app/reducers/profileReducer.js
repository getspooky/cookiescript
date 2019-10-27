import {PROFILE} from 'app/constants/actionTypes';

const initState = {
  Profile: {
    username: null,
    email: null,
    password: null,
    updatedAt: null,
  },
};

/**
 * Profile Reducer.
 *
 * @function
 * @name ProfileReducer
 * @param state
 * @param type
 * @param payload
 * @returns {object}
 */
export function ProfileReducer(state = initState, {type, payload}) {
  switch (type) {
    case PROFILE:
      state = {
        Profile: {
          ...payload.response.data,
        },
      };
      break;
  }
  return state;
}
