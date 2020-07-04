/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import jwt from 'jsonwebtoken';
import {
  validationResult
} from 'express-validator';
import User from 'server/models/User';
import {
  UnprocessableEntityException,
  ConflictException
} from 'internals/utils/exceptions';
import config from 'internals/utils/config';

const expiration = config('jwt@jwt.expiration');
const secret = config('jwt@jwt.secret');

// Handle a login request to the application.
export const login = async function (req, res, next) {
  try {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new UnprocessableEntityException("Failure! Please check your inputs");
    }
    // Get the login credentials from the request.
    const {
      email,
      password
    } = req.body;
    // Attempt to log the user into the application.
    const attemptLogin = await User.findOne({
      email
    });
    // Verify if the user exists.
    if (attemptLogin && (await User.comparePassword(password, attemptLogin.password))) {
      const token = await generateToken(attemptLogin);
      // return json web token.
      return res.status(200).json({
        data: token
      });
    }
    throw new TypeError(
      'Account does not exist!, Please Try Again'
    );
  } catch (err) {
    // Handle Error.
    next(err);
  }
};

// Handle a register request to the application.
export const register = async function (req, res, next) {
  try {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new UnprocessableEntityException("Failure! Please check your inputs");
    }
    // Get the register credentials from the request.
    const {
      email,
      username,
      password
    } = req.body;
    // Verify if the user already exists.
    if (await User.findOne({
        email
      })) {
      throw new ConflictException(
        'Account already exists!, Please Try Again'
      );
    } else {
      // Create a new Instance.
      const attemptRegister = await new User({
        email,
        username,
        password
      }).save();
      const token = await generateToken(attemptRegister);
      // Return User data.
      return res.status(201).json({
        data: token
      });
    }
  } catch (err) {
    // Handle error.
    next(err);
  }
};

// Generate Json web token.
export async function generateToken({
  _id,
  email
}) {
  return await jwt.sign({
      _id,
      email,
    },
    secret, {
      expiresIn: expiration,
    }
  );
}
