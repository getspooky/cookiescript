import {check} from 'express-validator';

/**
 * Get the validation rules that apply to the request.
 *
 * @export
 * @function
 * @returns {[ValidationChain]}
 */
export default function() {
  return [
    check('username')
      .not()
      .isEmpty()
      .withMessage('Username is missing')
      .isLength({
        min: 10,
      })
      .withMessage('Username must have more than 10 characters'),
    check('email')
      .not()
      .isEmpty()
      .withMessage('Email is missing')
      .isEmail()
      .withMessage('Email is not valid'),
    check('password')
      .not()
      .isEmpty()
      .withMessage('Password is missing')
      .isLength({
        min: 10,
      })
      .withMessage('Password must have more than 10 characters')
      .custom((value, {req, loc, path}) => {
        const {confirm_password} = req.body;
        if (value !== confirm_password) {
          // trow error if passwords do not match
          throw new Error("Passwords don't match");
        } else {
          return value;
        }
      }),
  ];
}
