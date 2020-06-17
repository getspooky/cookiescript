/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import rootReducer from './reducers/';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

//
const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
