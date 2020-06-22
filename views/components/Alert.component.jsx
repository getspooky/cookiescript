/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
  const { className, message, details } = props;
  return (
    <div className={`${className} border-l-4 p-4`} data-testid='testing-root'>
      <div className="header" data-testid="testing-header">{message}</div>
      <p data-testid="testing-details">{details}</p>
    </div>
  );
}

Alert.propTypes = {
  className: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Alert;
