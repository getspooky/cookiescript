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
  for (let [key, value] of Object.entries(routes)) {
    let method = 'get';
    let validate  = () => (req,res,next) => next();
    const middlewares = [];
    // check yml stracture
    if(!value.hasOwnProperty('controller') || !value.hasOwnProperty('path')) {
      throw new TypeError('controller or path is required');
    }
    if(typeof value.controller !== 'string') {
      throw new TypeError('controller must be string');
    }
    // check if method exists if not we use GET by default.
    // push middlewares and validator
    if(value.hasOwnProperty('method')) {
      method = value.method;
    }
    if(value.hasOwnProperty('middlewares')) {
       const { path: path_middleware, fun: fun_middleware } = extractFunPath(value.controller);
       const new_middleware_path = require(path.resolve(__dirname,'../../', path_middleware));
       middlewares.push(new_middleware_path[fun_middleware]);
    }
    if(value.hasOwnProperty('validator')) {
       validate = require(path.resolve(__dirname, '../../', value.validator)).Validator;
    }
    // extract controller path and function
    const { path: path_controller, fun: fun_controller } = extractFunPath(value.controller);
    const new_controller_path = require(path.resolve(__dirname,'../../', path_controller));

    // init routes
    Route[method](value.path,...middlewares ,validate() ,new_controller_path[fun_controller]);
  }
})();

// return all content from Routes.yml
function parseYmlRoutes() {
  const routes_content = path.join(__dirname,'../../server/Routes.yml');
  const fileContents = fs.readFileSync(routes_content, 'utf8');
  const data = yaml.safeLoad(fileContents);
  return data;
}

// extract function and path
function extractFunPath(value) {
  const extract_data = value.split('@');
  return {
    path: extract_data[0],
    fun: extract_data[1]
  }
}

export default Route;
