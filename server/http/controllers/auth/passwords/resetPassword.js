import {User} from 'server/models/user';
import {hash} from 'bcrypt';
import {validationResult} from 'express-validator';
import {ERR_HTTP_BAD_REQUEST} from 'server/custom/exceptions/ERR_HTTP_ BAD_REQUEST';
import hashConfig from 'config/hashing';

const {salt} = hashConfig;

/**
 * Reset the given user's password.
 *
 * @export
 * @async
 * @function
 * @name reset
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*>}
 */
export async function reset(req, res, next) {
  try {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    }
    // Get the password reset credentials from the request.
    const {password, token} = req.body;
    // Here we will attempt to hash given password.
    const attemptHashPassword = await hash(password, salt);
    // Here we will attempt to reset the user's password. If it is successful we
    // will update the password on an actual user model and persist it to the
    // database. Otherwise we will parse the error and return the response.
    const attemptRestPassword = await User.findOneAndUpdate(
      {
        reset: {
          token,
        },
      },
      {password: attemptHashPassword}
    );
    //
    // If the password was successfully reset, we will return user data.
    // If there is an error we will return error message.
    if (attemptRestPassword) {
      return res.status(200).json({
        response: {
          data: attemptRestPassword,
        },
      });
    } else {
      throw new ERR_HTTP_BAD_REQUEST('Something went wrong!');
    }
  } catch (err) {
    // Handle Error.
    next(err);
  }
}
