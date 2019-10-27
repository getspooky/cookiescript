import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withNamespaces} from 'react-i18next';
import {Link} from 'react-router-dom';
import {LOGIN_ACTION, CLEAR_AUTH_ACTION} from 'app/actions/authAction';

function mapStateToProps(state) {
  return {
    GET_AUTH_STATE: state.AUTH_REDUCER.Auth,
    GET_ERRORS_STATE: state.ERROR_REDUCER.Errors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    DISPATCH_LOGIN: payload => dispatch(LOGIN_ACTION(payload)),
    DISPATCH_CLEAR_AUTH: () => dispatch(CLEAR_AUTH_ACTION()),
  };
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Payload: {
        email: null,
        password: null,
      },
    };
    // bind event handlers in class components.
    this.HandleInputChange = this.HandleInputChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {
    const {GET_ERRORS_STATE, DISPATCH_CLEAR_AUTH} = this.props;
    if (GET_ERRORS_STATE.length !== 0) {
      DISPATCH_CLEAR_AUTH();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {isAuthenticated, token} = nextProps.GET_AUTH_STATE;
    if (isAuthenticated && token !== null) {
      localStorage.setItem('_token', token);
      this.props.history.push('/profile');
    }
  }

  HandleInputChange(event) {
    this.setState({
      Payload: {
        ...this.state.Payload,
        [event.target.name]: event.target.value,
      },
    });
  }

  HandleSubmit(event) {
    event.preventDefault();
    const {DISPATCH_LOGIN} = this.props;
    DISPATCH_LOGIN(this.state.Payload);
  }

  render() {
    const {t: lang, GET_ERRORS_STATE} = this.props;
    const displayErrors = GET_ERRORS_STATE.map(({msg, message}, index) => (
      <li key={index}>{msg || message}</li>
    ));
    return (
      <Fragment>
        {displayErrors.length !== 0 ? (
          <div className="ui negative message m-b-25">
            <div className="header">There were some errors with your submission</div>
            <ul className="list">{displayErrors}</ul>
          </div>
        ) : null}
        <form className="ui large form m-t-35 m-r-35">
          <div className="field">
            <label htmlFor="email">{lang('login.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.HandleInputChange}
              placeholder="@gmail.com"
            />
          </div>
          <div className="field">
            <label htmlFor="password">{lang('login.password')}</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.HandleInputChange}
              placeholder="password"
            />
          </div>
          <div className="field">
            <Link to="/password/forgot">Forgot password?</Link>
          </div>
          <button className="ui button" onClick={this.HandleSubmit} type="submit">
            {lang('login.submit')}
          </button>
        </form>
      </Fragment>
    );
  }
}

Login.propTypes = {
  DISPATCH_LOGIN: PropTypes.func.isRequired,
  DISPATCH_CLEAR_AUTH: PropTypes.func.isRequired,
  GET_ERRORS_STATE: PropTypes.array.isRequired,
  GET_AUTH_STATE: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNamespaces()(Login));
