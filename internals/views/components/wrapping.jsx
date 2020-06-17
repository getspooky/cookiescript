/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import { Route } from 'react-router-dom';
import Routes from 'views/Routes';
import Guards from './guards';

// Registering all given routes as public or private route.
// If the route is private make sure to add private property
// example :
//    { path:'/login',component:Login,private:true }
function WrappingRoutes() {
  return Routes.map(element =>
    !element.hasOwnProperty('private') ? (
      <Route
        key={element.name}
        exact
        path={element.path}
        component={element.component}
      />
    ) : (
      <Guards
        key={element.name}
        exact
        path={element.path}
        component={element.component}
      />
    ),
  );
}

export default WrappingRoutes;
