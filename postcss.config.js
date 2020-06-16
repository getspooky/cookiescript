/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./internals/views/tailwindcss/configuration.js'),
    require('autoprefixer')
  ],
};
