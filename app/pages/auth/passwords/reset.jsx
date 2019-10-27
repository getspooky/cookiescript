import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import sweetAlert from 'sweetalert2';
import {withNamespaces} from 'react-i18next';
import {HTTP_REQUEST_RESET_PASSWORD} from 'app/services/httpClient/auth.service';

class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Payload: {
        password: null,
        confirm_password: null,
        token: null,
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
        ...this.state.Payload,
        [event.target.name]: event.target.value,
        // eslint-disable-next-line react/prop-types
        token: this.props.match.params.token,
      },
    });
  }

  async HandleSubmit(event) {
    event.preventDefault();
    const {t: lang, history} = this.props;
    const {Payload} = this.state;
    const response = await HTTP_REQUEST_RESET_PASSWORD(Payload);
    if (response.status === 200) {
      await sweetAlert.fire('Good job!', lang('reset.success'), 'success');
      history.push('/login');
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
            <label htmlFor="password">{lang('reset.password')}</label>
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
            <label htmlFor="confirm_password">{lang('reset.confirm_password')}</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              autoComplete="off"
              onChange={this.HandleInputChange}
              placeholder="********"
            />
          </div>
          <button className="ui button" onClick={this.HandleSubmit} type="submit">
            {lang('reset.submit')}
          </button>
        </form>
      </Fragment>
    );
  }
}

Reset.propTypes = {
  t: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withNamespaces()(Reset);
