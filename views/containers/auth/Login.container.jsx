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
import Form from 'internals/views/components/form';
import InjectRedux from 'internals/views/injector';
import { Helmet } from 'react-helmet';

function Login(props) {
  // @state
  const [value, setValue] = React.useState({
    email: null,
    password: null,
  });

  const { t: lang, loginAction, history } = props;

  const onInputChange = e => {
    return setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitLogin = e => {
    return loginAction(value)
      .then(() =>
        history.push('/profile')
      ).catch(({ message }) =>
        alert(message)
      );
  };

  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta
          name="description"
          content="CookieScript Login Page"
        />
      </Helmet>
      <Form submit={onSubmitLogin}>
        <h1 className="text-gray-700 text-center font-sans text-2xl font-bold mb-2">{lang('login.title')}</h1>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">{lang('login.email')}</label>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            required={true}
            autoComplete="off"
            onChange={onInputChange}
            placeholder="@gmail.com"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">{lang('login.password')}</label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            required={true}
            autoComplete="off"
            onChange={onInputChange}
            placeholder="********"
          />
        </div>
      </Form>
    </>
  );
}

Login.propTypes = {
  t: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default InjectRedux(Login);
