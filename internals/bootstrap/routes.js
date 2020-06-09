/*
 * This file is part of the mern-boilerplate project.
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
| Here is where all mern-boilerplate routes are build.
| To add new routes feel free to open the routes.yml file located in
| path => server/Routes.yml
*/

(function registerRoutes() {
  const routes = parseYmlRoutes();
  for (let [key, value] of Object.entries(routes)) {
    let method = 'get';
    let validator  = () => (req,res,next) => next();
    const middlewares = [];
    if(!value.hasOwnProperty('controller') || !value.hasOwnProperty('path')) {
      throw new TypeError('controller or path is required');
    }
    if(typeof value.controller !== 'function') {
      throw new TypeError('controller must be function');
    }
    // check if method exists if not we use GET by default.
    // push middlewares and validator
    if(value.hasOwnProperty('method')) {
      method = value.method;
    }
    if(value.hasOwnProperty('middlewares')) {
       middlewares.push(value.controller);
    }
    if(value.hasOwnProperty('validator')) {
      validator = value.validator;
    }
    const scan_controller = value.controller.split('@');
    const new_controller_path = require(path.resolve(__dirname,'../../', scan_controller[0]));
    // init routes
    Route[method](value.path, ...middlewares ,validator() , new_controller_path[scan_controller[1]]);
  }
})();

// return all content from Routes.yml
function parseYmlRoutes() {
  const routes_content = path.join(__dirname,'../../server/Routes.yml');
  const fileContents = fs.readFileSync(routes_content, 'utf8');
  const data = yaml.safeLoad(fileContents);
  return data;
}

export default Route;
