/*
 * This file is part of the mern-boilerplate project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import Router from 'react-router-dom';
import PropTypes from 'prop-types';

// Protect private routes for unauthorized access.
function PrivateRoute({component: Component, ...rest}) {
  return (
    <Router.Route
      {...rest}
      render={ props =>
        localStorage.getItem('_token') !== null ?
          <Component {...props} />
          :
          <Router.Redirect to="/" />
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
};

export default Router.withRouter(PrivateRoute);
