import {sign} from 'jsonwebtoken';
import {validationResult} from 'express-validator';
import {User} from 'server/models/user';
import {ERR_HTTP_NOT_FOUND} from 'server/custom/exceptions/ERR_HTTP_NOT_FOUND';
import jwtConfig from 'config/jwt';

const {expiration, private_Key} = jwtConfig;

/**
 * Handle a login request to the application.
 *
 * @export
 * @async
 * @function
 * @name login
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*>}
 */
export const login = async function(req, res, next) {
  try {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    }
    // Get the login credentials from the request.
    const {email, password} = req.body;
    // Attempt to log the user into the application.
    const attemptLogin = await User.findOne({email});
    // Verify if the user exists.
    if (attemptLogin && (await User.comparePassword(password, attemptLogin.password))) {
      const token = await generateToken(attemptLogin);
      // return json web token.
      return res.status(200).json({
        response: {
          data: token,
        },
      });
    }
    throw new ERR_HTTP_NOT_FOUND('Account does not exist!');
  } catch (err) {
    // Handle Error.
    next(err);
  }
};

/**
 * Handle a register request to the application.
 *
 * @export
 * @async
 * @function
 * @name register
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*>}
 */
export const register = async function(req, res, next) {
  try {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    }
    // Get the register credentials from the request.
    const {email, username, password} = req.body;
    // Verify if the user already exists.
    if (await User.findOne({email})) {
      throw new ERR_HTTP_NOT_FOUND('Account already exists!');
    } else {
      // Create a new Instance.
      const attemptRegister = await new User({email, username, password}).save();
      const token = await generateToken(attemptRegister);
      // Return User data.
      return res.status(201).json({
        response: {
          data: token,
        },
      });
    }
  } catch (err) {
    // Handle error.
    next(err);
  }
};

/**
 * Generate Json web token.
 *
 * @export
 * @function
 * @name generateToken
 * @param _id
 * @param email
 * @returns {void}
 */
export async function generateToken({_id, email}) {
  return await sign(
    {
      _id,
      email,
    },
    private_Key,
    {
      expiresIn: expiration,
    }
  );
}
