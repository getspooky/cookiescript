/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

// Dynamically injects a actions in addition CookieScript inject withNamespaces.
function InjectRedux(WrappedComponent, mapStateToProps = null) {
  if (typeof WrappedComponent !== 'function') {
    throw new TypeError("Args must be a function");
  }
  const injector = (props) => <WrappedComponent {...props} />
  // resolving action. Make sure that all actions must located at redux/action folder.
  const mapDispatchToProps = { ...require('../../views/redux/actions/') };
  return connect(mapStateToProps, mapDispatchToProps)(withNamespaces()(injector));
}

export default InjectRedux;
