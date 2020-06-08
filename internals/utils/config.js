/*
 * This file is part of the mern-boilerplate project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import fs from 'fs';
import yml from 'js-yaml';

// The config function gets the value of a configuration variable.
// The configuration values may be accessed using "@" syntax,
// which includes the name of the file and the option you wish to access
// example :
//    config('app@url.host')
export function config(path) {
  if(typeof path === 'undefined' || typeof path !== 'string' || path === ''){
    throw new TypeError('The path is required');
  }
  const extract = path.split('@');
  const fileContents = fs.readFileSync(`./${extract[0]}.yml`, 'utf8');
  const data = yaml.safeLoad(fileContents);
  return getValue(data, extract[1]);
}

// return value from given object
function getValue(obj,keys) {
  return keys.split('.').reduce((o, k) => (o || {})[k], object);
}
