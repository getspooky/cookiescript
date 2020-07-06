/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// Base URL
const BASE_URL = null;

// Auth URLs
export const AUTH_LOGIN_URL = `${BASE_URL}/login`;
export const AUTH_REGISTER_URL = `${BASE_URL}/register`;
export const FORGOT_PASSWORD_URL = `${BASE_URL}/password/forgot`;
export const RESET_PASSWORD_URL = `${BASE_URL}/password/reset`;
export const PROFILE_URL = `${BASE_URL}/profile`;

// Authentication Types
export const AUTH_REGISTER = 'AUTH_REGISTER';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const LOAD_PROFILE = 'LOAD_PROFILE';
