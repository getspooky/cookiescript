import {
  ERR_HTTP_BAD_REQUEST,
  ERR_HTTP_FORBIDDEN,
  ERR_HTTP_NOT_FOUND,
  ERR_HTTP_UNAUTHORIZED,
  ERR_HTTP_UNPROCESSABLE_ENTITY,
  ERR_SERVER,
} from 'app/constants/actionTypes';

/**
 * The hasErrors function may be used to determine if any error messages exist.
 *
 * @export
 * @function
 * @name hasErrors
 * @param value
 * @returns {boolean}
 */
export function hasErrors(value) {
  return value.length !== 0;
}
/**
 * Remove user from local storage to log user out.
 *
 * @export
 * @function
 * @name logout
 * @param history
 * @returns {void}
 */
export function logout(history) {
  localStorage.removeItem('token');
  history.push('/');
}
/**
 * Set Errors type if the http response return error.
 *
 * @export
 * @function
 * @name handleResponse
 * @param STATUS
 * @param SUCCESS_TYPE
 * @returns {string}
 */
export function setActionType(STATUS, SUCCESS_TYPE) {
  switch (STATUS) {
    case 400:
      return ERR_HTTP_BAD_REQUEST;
    case 404:
      return ERR_HTTP_NOT_FOUND;
    case 401:
      return ERR_HTTP_UNAUTHORIZED;
    case 403:
      return ERR_HTTP_FORBIDDEN;
    case 422:
      return ERR_HTTP_UNPROCESSABLE_ENTITY;
    case 500:
      return ERR_SERVER;
    case 200:
    case 201:
      return SUCCESS_TYPE;
  }
}