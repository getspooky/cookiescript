## Mail

Mernless uses free feature-rich library `Nodemailer` to send emails. Using the library function, we can easily send emails without too many hassles. The e-mail templates are stored in `server/mail/template` which means you can use the [pug](https://pugjs.org/api/getting-started.html) syntax and inject data into your templates.

## About Nodemailer

Nodemailer is a module for Node.js applications to allow easy as cake email sending. The project got started back in 2010 when there was no sane option to send email messages, today it is the solution most Node.js users turn to by default.
Nodemailer is licensed under MIT license. See license details in the License page.


## sendMail Function

The following table shows the syntax and attributes of sendMail function :

| Syntax               | sendMail(to, subject, html)     |
| -------------------- | --------------------------------|
| Parameters           | `to`   : list of receivers      |
|                      | `from` : sender address         |
|                      | `html` : html body              |
| Description          | Sends email.                    |


## Example 

This is a complete example to send an email with plain text and HTML body

`server/http/controllers/auth/passwords/sendPasswordResetEmails` :
```JS
export async function sendResetLinkResponse(req, res, next) {
  try {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    }
    // Get the password reset credentials from the request.
    const {email} = req.body;
    // Verify if the user exists.
    if (!(await User.findOne({email}))) {
      throw new ERR_HTTP_NOT_FOUND('Account does not exist!');
    }
    // We will send the password reset link to this user.
    const attemptStoreToken = await User.findOneAndUpdate(
      {email},
      {
        reset: {
          token: setRememberToken(),
        },
      },
      {
        new: true,
      }
    ).populate();
    // Compile reset_password template.
    const compiledFunction = compileFile(
      // eslint-disable-next-line no-undef
      path.join($__basedir, '/mail/template/auth/passwords/reset_password.pug'),
      null
    );
    const {token} = await attemptStoreToken.reset;
    // Sending Mail.
    await toMail(
      email,
      'Orbit.js : Forgotten Password Reset',
      compiledFunction({
        token,
        url: 'http://localhost:3000/password/reset',
      })
    );
    // If the password was successfully reset, we will return attemptStoreToken data.
    return res.status(200).json({
      response: {
        data: attemptStoreToken,
      },
    });
  } catch (err) {
    // Handle error
    next(err);
  }
}

```