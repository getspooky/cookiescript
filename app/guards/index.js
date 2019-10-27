import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Protect private routes for unauthorized access.
 *
 * @export
 * @function
 * @name PrivateRoute
 * @param component
 * @param rest
 * @returns {*}
 */
function PrivateRoute({component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('_token') !== null ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
};

export default withRouter(PrivateRoute);
