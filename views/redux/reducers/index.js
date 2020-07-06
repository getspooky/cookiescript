/*
 * This file is part of the mern-boilerplate project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
  combineReducers
} from 'redux';
import AuthReducer from './Auth.reducer';
import ProfileReducer from './Profile.reducer';

// Combine all reducers
const rootReducer = combineReducers({
  AuthReducer,
  ProfileReducer
});

export default rootReducer;
