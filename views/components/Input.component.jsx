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

function Input(props) {
  const { type, name, label, placeholder, handle } = props;
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={`grid-${name}`}
          data-testid='testing-label' >
          {label}
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id={`grid-${name}`}
          type={type}
          name={name}
          onChange={handle}
          data-testid='testing-input'
          placeholder={placeholder} />
      </div>
    </div >
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'tel', 'number']).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
