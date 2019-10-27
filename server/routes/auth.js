import {
  login as loginController,
  register as registerController,
} from 'server/http/controllers/auth/authenticate';
import registerValidator from 'server/validators/auth/register';
import loginValidator from 'server/validators/auth/login';
import forgotPasswordValidator from 'server/validators/auth/passwords/forgotPassword';
import resetPasswordValidator from 'server/validators/auth/passwords/resetPassword';
// eslint-disable-next-line max-len
import {
  sendResetLinkResponse as sendResetLinkResponseController
} from 'server/http/controllers/auth/passwords/sendPasswordResetEmails';
import {
  reset as resetController
} from 'server/http/controllers/auth/passwords/resetPassword';

/**
 * Helper function that helps generate all the routes required for user authentication.
 *
 * @export
 * @function
 * @name AuthRoutes
 * @param Route
 * @returns {void}
 */
export function AuthRoutes(Route) {
  // AuthRoutes() create some routes by default which are not shown in the
  // routes/api.js file. In fact, AuthRoutes() is a helper function that helps
  // you generate all the routes required for user authentication.
  /**
   * @swagger
   * /login:
   *    post:
   *      tags:
   *      - auth
   *      description: This should authenticate the user
   *      parameters:
   *      - in: "body"
   *        name: "body"
   *        description: "Object that needs to be added to the login"
   *        required: true
   *        schema:
   *          $ref: '#/definitions/Login'
   */
  Route.post('/login', loginValidator(), loginController);
  /**
   * @swagger
   * /register:
   *    post:
   *      description: This should create new user
   *      tags:
   *      - auth
   *      parameters:
   *      - in: "body"
   *        name: "body"
   *        description: "Object that needs to be added to the register"
   *        required: true
   *        schema:
   *          $ref: '#/definitions/Register'
   */
  Route.post('/register', registerValidator(), registerController);
  /**
   * @swagger
   * /password/forgot:
   *    put:
   *      description: This should send a reset link to the given user.
   *      tags:
   *      - auth
   *      parameters:
   *      - in: "body"
   *        name: "body"
   *        description: "Object that needs to be added to the forgot"
   *        required: true
   *        schema:
   *          $ref: '#/definitions/Forgot'
   */
  Route.put('/password/forgot', forgotPasswordValidator(), sendResetLinkResponseController);
  /**
   * @swagger
   * /password/reset:
   *    put:
   *      description: This should create new user
   *      tags:
   *      - auth
   *      parameters:
   *      - in: "body"
   *        name: "body"
   *        description: "Object that needs to be added to the reset"
   *        required: true
   *        schema:
   *          $ref: '#/definitions/Reset'
   */
  Route.put('/password/reset', resetPasswordValidator(), resetController);
}