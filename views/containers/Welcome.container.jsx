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
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Welcome(props) {
  const { t: lang } = props;
  return (
    <>
      <Helmet>
        <title>Welcome Page</title>
        <meta
          name="description"
          content="CookieScript Welcome Page"
        />
      </Helmet>
      <div className="bg-white m-16 shadow">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-5 font-medium tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
            {lang('welcome.title')}
            <br />
            <span className="text-red-900">
              {lang('welcome.subtitle')}
            </span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/register" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-900 hover:bg-text-red-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                {lang('welcome.register')}
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link to="/login" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-red-900 bg-white hover:text-red-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                {lang('welcome.login')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Welcome.propTypes = {
  t: PropTypes.func.isRequired
};

export default withNamespaces()(Welcome);
