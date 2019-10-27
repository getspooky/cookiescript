import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar(props) {
  const {history} = props;
  return (
    <div className="ui stackable menu ">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="item" onClick={() => history.push('/')}>
        <img alt="logo" src={require('../logo.svg')} />
      </div>
      <Link to="/login" className="item">
        Login
      </Link>
      <Link to="/register" className="item">
        Register
      </Link>
    </div>
  );
}

Navbar.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Navbar);
