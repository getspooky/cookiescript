import {PROFILE_URL} from 'app/constants/url';

/**
 * Fetch the user's profile.
 *
 * @export
 * @function
 * @name HTTP_REQUEST_PROFILE
 * @param token
 * @returns {Promise<Response>}
 */
export async function HTTP_REQUEST_PROFILE(token) {
  return await fetch(PROFILE_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
