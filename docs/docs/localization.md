## Localization

As your business scales, it may reach the international level. In order to cater to the needs of a global audience and to provide your customers with user-friendly service, your app will need to support multiple languages.

Mernless localization features provide a convenient way to retrieve strings in various languages, allowing us to support the multiple languages within your application quickly. Language strings are stored in the files within the `app/lang` directory. Within that directory, there should be a subdirectory for each language supported by the application.

    lang
    ├── chinese               
    ├── deutsch     
    ├── english
    ├── french     
    ├── i18n.js             
    └── register.js

All language files return an object of keyed strings. For example:    

```JS
// app/lang/english/login.js
{
  "login.email"    : "E-mail address",
  "login.password" : "Password",
  "login.submit"   : "Login"
}
```

## Register languages

All languages are registered in `providers/localizationProvider.js` : 

```JS
export const resources = {
  en: {
    translation: {
      ...require('./english/register.json'),
      ...require('./english/login.json'),
      ...require('./english/home.json'),
      ...require('./english/forgot.json'),
      ...require('./english/reset.json'),
    },
  },
  fr: {
    translation: {
      ...require('./french/register.json'),
      ...require('./french/login.json'),
      ...require('./french/home.json'),
      ...require('./french/forgot.json'),
      ...require('./french/reset.json'),
    },
  },
  zh: {
    translation: {
      ...require('./chinese/register.json'),
      ...require('./chinese/login.json'),
      ...require('./chinese/home.json'),
      ...require('./chinese/forgot.json'),
      ...require('./chinese/reset.json'),
    },
  },
  de: {
    translation: {
      ...require('./deutsch/register.json'),
      ...require('./deutsch/login.json'),
      ...require('./deutsch/home.json'),
      ...require('./deutsch/forgot.json'),
      ...require('./deutsch/reset.json'),
    },
  },
};

```

## Retrieving Translation Strings

You may retrieve lines from language files using the `lang` function.
For example, let's retrieve the login translation string from the `app/lang/login.js` language file:

```JS
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
```

