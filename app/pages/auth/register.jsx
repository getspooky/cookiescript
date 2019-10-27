import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withNamespaces} from 'react-i18next';
import {REGISTER_ACTION, CLEAR_AUTH_ACTION} from 'app/actions/authAction';

function mapStateToProps(state) {
  return {
    GET_AUTH_STATE: state.AUTH_REDUCER.Auth,
    GET_ERRORS_STATE: state.ERROR_REDUCER.Errors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    DISPATCH_REGISTER: payload => dispatch(REGISTER_ACTION(payload)),
    DISPATCH_CLEAR_AUTH: () => dispatch(CLEAR_AUTH_ACTION()),
  };
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Payload: {
        username: null,
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
    const {DISPATCH_REGISTER} = this.props;
    DISPATCH_REGISTER(this.state.Payload);
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
        <form className="ui large form m-t-20 m-b-25 m-r-35">
          <div className="field">
            <label htmlFor="username">{lang('register.username')}</label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              onChange={this.HandleInputChange}
              placeholder="Yasser"
            />
          </div>
          <div className="field">
            <label htmlFor="email">{lang('register.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              onChange={this.HandleInputChange}
              placeholder="@gmail.com"
            />
          </div>
          <div className="field">
            <label htmlFor="password">{lang('register.password')}</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              onChange={this.HandleInputChange}
              placeholder="********"
            />
          </div>
          <div className="field">
            <label htmlFor="confirm_password">{lang('register.confirm_password')}</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              autoComplete="off"
              onChange={this.HandleInputChange}
              placeholder="********"
            />
          </div>
          <div className="field">
            <div className="ui slider checkbox">
              <input type="checkbox" id="agreement" name="newsletter" />
              <label htmlFor="agreement">{lang('register.agreement')}</label>
            </div>
          </div>
          <button className="ui button" onClick={this.HandleSubmit} type="submit">
            {lang('register.submit')}
          </button>
        </form>
      </Fragment>
    );
  }
}

Register.propTypes = {
  DISPATCH_REGISTER: PropTypes.func.isRequired,
  DISPATCH_CLEAR_AUTH: PropTypes.func.isRequired,
  GET_ERRORS_STATE: PropTypes.array.isRequired,
  GET_AUTH_STATE: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNamespaces()(Register));
