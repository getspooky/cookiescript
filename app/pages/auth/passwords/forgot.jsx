import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import sweetAlert from 'sweetalert2';
import {withNamespaces} from 'react-i18next';
import {HTTP_REQUEST_FORGOT_PASSWORD} from 'app/services/httpClient/auth.service';

class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Payload: {
        email: null,
      },
      GET_ERRORS_STATE: [],
    };
    // bind event handlers in class components.
    this.HandleInputChange = this.HandleInputChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  UNSAFE_componentWillReceiveProps(nextProps) {}

  HandleInputChange(event) {
    this.setState({
      Payload: {
        [event.target.name]: event.target.value,
      },
    });
  }

  async HandleSubmit(event) {
    event.preventDefault();
    const {t: lang} = this.props;
    const {Payload} = this.state;
    const response = await HTTP_REQUEST_FORGOT_PASSWORD(Payload);
    if (response.status === 200) {
      await sweetAlert.fire('Good job!', lang('forgot.success'), 'success');
    } else {
      const {errors} = await response.json();
      this.setState({
        GET_ERRORS_STATE: Array.isArray(errors) ? [...errors] : [errors],
      });
    }
  }

  render() {
    const {t: lang} = this.props;
    const {GET_ERRORS_STATE} = this.state;
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
            <label htmlFor="email">{lang('forgot.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.HandleInputChange}
              placeholder="@gmail.com"
            />
          </div>
          <button className="ui button" onClick={this.HandleSubmit} type="submit">
            {lang('forgot.submit')}
          </button>
        </form>
      </Fragment>
    );
  }
}

Forgot.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Forgot);
