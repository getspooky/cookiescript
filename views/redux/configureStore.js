/*
 * This file is part of the mern-boilerplate project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from 'views/redux/reducers/';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

//
export const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);
