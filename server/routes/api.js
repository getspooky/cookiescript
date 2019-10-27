import {Router} from 'express';
import {tokenVerification} from 'server/http/middlewares/tokenIsVerified';
import * as profileController from 'server/http/controllers/profile';
import {AuthRoutes} from './auth';

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

const Route = Router();

AuthRoutes(Route);

Route.get('/', (req, res) => {
  res.status(200).send('Welcome to Orbit.js v1.0');
});

/**
 * @swagger
 * /profile:
 *    get:
 *      tags:
 *      - profile
 *      description: This should return the user's profile
 */
Route.get('/profile', tokenVerification, profileController.index);

export default Route;
