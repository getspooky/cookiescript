import {PROFILE} from 'app/constants/actionTypes';
import {HTTP_REQUEST_PROFILE} from 'app/services/httpClient/profile.service';
import {setActionType} from 'support/helpers/front';

/**
 * Profile action.
 *
 * @export
 * @async
 * @function
 * @name PROFILE_ACTION
 * @param token
 * @returns {Function}
 */
export function PROFILE_ACTION(token) {
  return async (dispatch, getState) => {
    const PROFILE_RESPONSE = await HTTP_REQUEST_PROFILE(token);
    // Dispatch Action.
    dispatch({
      type: setActionType(PROFILE_RESPONSE.status, PROFILE),
      payload: await PROFILE_RESPONSE.json(),
    });
  };
}
