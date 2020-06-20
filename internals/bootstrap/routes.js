/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import express from 'express';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { compose } from 'compose-middleware';

const Route = express.Router();

/*
|--------------------------------------------------------------------------
| Register Routes
|--------------------------------------------------------------------------
|
| Here is where all CookieScript routes are build.
| To add new routes feel free to open the routes.yml file located in
| path => server/Routes.yml
*/

(function registerRoutes() {
  const routes = parseYmlRoutes();
  for (let value of Object.values(routes)) {
    // default values that each route need.
    const initState = {
      method: 'get',
      controller: (req, res) =>
        res.send('👋 Hi, Welcome to <b>CookieScript</b>'),
      validate: () => (req, res, next) => next(),
      middlewares: [],
    };
    // check yml stracture.
    if (!value.hasOwnProperty('controller')) {
      throw new TypeError('controller is required');
    }
    if (!value.hasOwnProperty('path')) {
      throw new TypeError('path is required');
    }
    // check if method exists if not we use GET by default.
    // push middlewares and validator.
    if (value.hasOwnProperty('method')) {
      initState.method = value['method'];
    }
    // each route should have one single controller.
    // registering middlewares.
    if (value.hasOwnProperty('middlewares')) {
      if (!Array.isArray(value.middlewares)) {
        throw new TypeError('Middlewares must be an array');
      }
      value.middlewares.forEach(middleware => {
        const {
          fun: funMiddleware,
          path: pathMiddleware,
        } = extractFunctionPath(middleware);
        initState.middlewares.push(
          require(path.resolve(__dirname, '../../', pathMiddleware))[
            funMiddleware
          ],
        );
      });
    }
    if (value.hasOwnProperty('controller')) {
      const { fun: funController, path: pathController } = extractFunctionPath(
        value.controller,
      );
      initState.controller = require(path.resolve(
        __dirname,
        '../../',
        pathController,
      ))[funController];
    }
    if (value.hasOwnProperty('validator')) {
      // each validator should have an exported function called Validator.
      initState.validate = require(path.resolve(
        __dirname,
        '../../',
        value.validator,
      )).Validator;
    }
    // init routes
    Route[initState.method](
      value.path,
      compose(initState.middlewares),
      initState.validate(),
      initState.controller,
    );
  }
})();

// extract function and path from given string.
function extractFunctionPath(value) {
  const extractData = value.split('@');
  return {
    fun: extractData[1],
    path: extractData[0],
  };
}

// return all content from Routes.yml
function parseYmlRoutes() {
  const routesPath = path.join(__dirname, '../../server/Routes.yml');
  const fileContent = fs.readFileSync(routesPath, 'utf8');
  return yaml.safeLoad(fileContent);
}

export default Route;
