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

function Register(props) {
  // @state
  const [value, setValue] = React.useState({
    username: null,
    email: null,
    password: null,
  });

  const { t: lang, history, registerAction } = props;

  const onInputChange = e => {
    return setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitRegister = e => {
    return registerAction(value)
      .then(() =>
        history.push('/profile')
      ).catch(({ message }) =>
        alert(message)
      );
  };

  return (
    <>
      <Helmet>
        <title>Register Page</title>
        <meta
          name="description"
          content="CookieScript Register Page"
        />
      </Helmet>
      <Form submit={onSubmitRegister}>
        <h1 className="text-gray-700 text-center font-sans text-2xl font-bold mb-2">{lang('register.title')}</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">{lang('register.username')}</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            required={true}
            autoComplete="off"
            onChange={onInputChange}
            placeholder="getspooky"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">{lang('register.email')}</label>
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">{lang('register.password')}</label>
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

Register.propTypes = {
  t: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default InjectRedux(Register);
