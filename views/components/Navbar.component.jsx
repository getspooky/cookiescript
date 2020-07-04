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
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { items } = props;
  return (
    <ul className="flex">
      {items.map(({ href, text }, index) => {
        return (<li className="mr-6" key={index}>
          <Link to={href} className="text-blue-500 hover:text-blue-800">{text}</Link>
        </li>)
      })}
    </ul>
  );
}

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })),
};

export default Navbar;
