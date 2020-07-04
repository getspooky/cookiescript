/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import WrappingRoutes from 'internals/views/components/wrapping';
import Store from './redux/configureStore';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <WrappingRoutes />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
