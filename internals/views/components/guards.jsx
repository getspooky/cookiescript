/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Protect private routes for unauthorized access.
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('_token') !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
};

export default withRouter(PrivateRoute);
