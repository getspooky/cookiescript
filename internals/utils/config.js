/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

// The config function gets the value of a configuration variable.
// The configuration values may be accessed using "@" syntax,
// which includes the name of the file and the option you wish to access
// example :
//    config('app@url.host')
function config(value) {
  if(typeof value === 'undefined' || typeof value !== 'string' || value === ''){
    throw new TypeError('The path is required');
  }
  const extract = value.split('@');
  const config_path = path.join(__dirname,`../../config/${extract[0]}.yml`);
  const fileContents = fs.readFileSync(config_path, 'utf8');
  const data = yaml.safeLoad(fileContents);
  return getValue(data, extract[1]);
}

// return value from given object
function getValue(obj,keys) {
  return keys.split('.').reduce((o, k) => (o || {})[k], obj);
}

export default config;
