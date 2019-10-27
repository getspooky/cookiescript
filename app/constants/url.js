const BASE_URL = `${process.env.REACT_APP_HOST}/api`;

/*
|-----------------------------------------------------------------------------
| Auth URLs
|-----------------------------------------------------------------------------
*/
export const AUTH_LOGIN_URL = `${BASE_URL}/login`;
export const AUTH_REGISTER_URL = `${BASE_URL}/register`;
export const FORGOT_PASSWORD_URL = `${BASE_URL}/password/forgot`;
export const RESET_PASSWORD_URL = `${BASE_URL}/password/reset`;
export const PROFILE_URL = `${BASE_URL}/profile`;
