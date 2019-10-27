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
    check('email')
      .not()
      .isEmpty()
      .withMessage('Email is missing')
      .isEmail()
      .withMessage('Email is not valid'),
  ];
}
