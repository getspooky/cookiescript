import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withNamespaces} from 'react-i18next';
import {logout, hasErrors} from 'support/helpers/front';
import {Hero} from 'app/components/hero';
import {PROFILE_ACTION} from 'app/actions/profileAction';

function mapStateToProps(state) {
  return {
    GET_AUTH_STATE: state.AUTH_REDUCER.Auth,
    GET_PROFILE_STATE: state.PROFILE_REDUCER.Profile,
    GET_ERRORS_STATE: state.ERROR_REDUCER.Errors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    DISPATCH_PROFILE: token => dispatch(PROFILE_ACTION(token)),
  };
}

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {
    const {DISPATCH_PROFILE, GET_AUTH_STATE} = this.props;
    DISPATCH_PROFILE(GET_AUTH_STATE.token);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {GET_ERRORS_STATE, history} = nextProps;
    if (hasErrors(GET_ERRORS_STATE)) {
      logout(history);
    }
  }

  render() {
    const {t: lang, history, GET_PROFILE_STATE} = this.props;
    return (
      <Hero
        title={lang('hero.title').replace(':username', GET_PROFILE_STATE.username)}
        subtitle={lang('hero.subtitle')}>
        <br />
        <button
          type="button"
          className="ui labeled icon m-t-15 button"
          onClick={() => logout(history)}>
          <i className="lock icon" />
          Log Out
        </button>
      </Hero>
    );
  }
}

Profile.propTypes = {
  DISPATCH_PROFILE: PropTypes.func.isRequired,
  GET_AUTH_STATE: PropTypes.object.isRequired,
  GET_PROFILE_STATE: PropTypes.object.isRequired,
  GET_ERRORS_STATE: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNamespaces()(Profile));
