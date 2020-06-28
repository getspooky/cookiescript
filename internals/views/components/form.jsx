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
import { withNamespaces } from 'react-i18next';

function Form(props) {
  const { children, t: lang, submit: HandleSubmit } = props;
  return (
    <div className="max-w-screen-md mx-auto">
      <form className="bg-white shadow-md rounded mt-24 px-8 pt-4 pb-8 mb-4">
        {children}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={HandleSubmit}
          type="button"
        >
          {lang('Shared.submit')}
        </button>
      </form>
      <p className="text-center text-gray-500 text-xs">
        {lang('Shared.license')}
      </p>
    </div>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.func.isRequired,
};

export default withNamespaces()(Form);
