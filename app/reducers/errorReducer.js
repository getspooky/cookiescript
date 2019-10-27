import {
  ERR_HTTP_BAD_REQUEST,
  ERR_HTTP_NOT_FOUND,
  ERR_HTTP_UNAUTHORIZED,
  ERR_HTTP_FORBIDDEN,
  ERR_HTTP_UNPROCESSABLE_ENTITY,
  CLEAR_ERRORS,
  ERR_SERVER,
} from 'app/constants/actionTypes';

const initState = {
  Errors: [],
};

/**
 * Error Reducer.
 *
 * @function
 * @name ErrorReducer
 * @param state
 * @param type
 * @param payload
 * @returns {object}
 */
export function ErrorReducer(state = initState, {type, payload}) {
  switch (type) {
    case ERR_SERVER:
    case ERR_HTTP_BAD_REQUEST:
    case ERR_HTTP_NOT_FOUND:
    case ERR_HTTP_UNAUTHORIZED:
    case ERR_HTTP_FORBIDDEN:
      state = {
        Errors: [payload.errors],
      };
      break;
    case ERR_HTTP_UNPROCESSABLE_ENTITY:
      state = {
        Errors: [...payload.errors],
      };
      break;
    case CLEAR_ERRORS:
      state = {
        Errors: [],
      };
      break;
  }
  return state;
}
