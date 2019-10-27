import {
  AUTH_LOGIN_URL,
  AUTH_REGISTER_URL,
  FORGOT_PASSWORD_URL,
  RESET_PASSWORD_URL,
} from 'app/constants/url';

/**
 * Send login request to the application.
 *
 * @export
 * @function
 * @name HTTP_REQUEST_LOGIN
 * @param payload
 * @returns {Promise<Response>}
 */
export async function HTTP_REQUEST_LOGIN(payload) {
  return await fetch(AUTH_LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

/**
 * Send register request to the application.
 *
 * @export
 * @function
 * @name HTTP_REQUEST_REGISTER
 * @param payload
 * @returns {Promise<Response>}
 */
export async function HTTP_REQUEST_REGISTER(payload) {
  return await fetch(AUTH_REGISTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

/**
 * Send forgot password request to the application.
 *
 * @export
 * @function
 * @name HTTP_REQUEST_FORGOT_PASSWORD
 * @param payload
 * @returns {Promise<Response>}
 */
export async function HTTP_REQUEST_FORGOT_PASSWORD(payload) {
  return await fetch(FORGOT_PASSWORD_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

/**
 * Send reset password request to the application.
 *
 * @export
 * @function
 * @name HTTP_REQUEST_RESET_PASSWORD
 * @param payload
 * @returns {Promise<Response>}
 */
export async function HTTP_REQUEST_RESET_PASSWORD(payload) {
  return await fetch(RESET_PASSWORD_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}
