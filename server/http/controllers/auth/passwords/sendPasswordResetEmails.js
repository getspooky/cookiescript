import path from 'path';
import {
  compileFile
} from 'pug';
import {
  generate
} from 'randomstring';
import {
  validationResult
} from 'express-validator';
import {
  User
} from 'server/models/user';
import {
  sendMail as toMail
} from 'server/mail/mailer';
import {
  ERR_HTTP_NOT_FOUND
} from 'server/custom/exceptions/ERR_HTTP_NOT_FOUND';

/**
 * Send a reset link to the given user.
 *
 * @export
 * @async
 * @function
 * @name sendResetLinkResponse
 * @param req
 * @param res
 * @param next
 */
export async function sendResetLinkResponse(req, res, next) {
  try {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array()
      });
    }
    // Get the email reset credentials from the request.
    const {
      email
    } = req.body;
    // Verify if the user exists.
    if (!(await User.findOne({
        email
      }))) {
      throw new ERR_HTTP_NOT_FOUND('Account does not exist!');
    }
    // We will send the password reset link to this user.
    const attemptStoreToken = await User.findOneAndUpdate({
      email
    }, {
      reset: {
        token: setRememberToken(),
      },
    }, {
      new: true,
    }).populate();
    // Compile reset_password template.
    const compiledFunction = compileFile(
      // eslint-disable-next-line no-undef
      path.join($__basedir, '/mail/template/auth/passwords/reset_password.pug'),
      null
    );
    const {
      token
    } = await attemptStoreToken.reset;
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

/**
 * Generate random token.
 *
 * @export
 * @function
 * @name setRememberToken
 * @returns {*}
 */
function setRememberToken() {
  return generate({
    length: 90,
    charset: 'alphanumeric',
    capitalization: 'lowercase',
  });
}
