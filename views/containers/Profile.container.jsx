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
import InjectRedux from 'internals/views/injector';
import { Helmet } from 'react-helmet';

function Profile(props) {
  // @props
  const { t: lang, profile, profileAction } = props;

  React.useEffect(() => {
    async function fetchData() {
      await profileAction();
    }
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Profile Page</title>
        <meta
          name="description"
          content="CookieScript Profile Page"
        />
      </Helmet>
      <div className="m-12 p-10 border-2 border-dashed">
        <p className="font-normal text-gray-500 text-center text-xl">
          <i className="fa fa-star-o" />
          {lang('Profile.sayHello').replace(':name', profile.username)}
        </p>
      </div>
    </>
  );

}

Profile.propTypes = {
  t: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    profile: state.ProfileReducer.Profile,
    auth: state.AuthReducer.Auth
  }
}

export default InjectRedux(Profile, mapStateToProps);
