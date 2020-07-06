#!/usr/bin/env node

/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   /!\ DO NOT MODIFY THIS FILE /!\
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// The only job of this is to init the repository and then
// forward all the commands to the local version of CookieScript.
//
// The only reason to modify this file is to add more warnings and
// troubleshooting information for the `CookieScript` command.
//

var currentNodeVersion = process.versions.node;

if (currentNodeVersion < 10) {
  console.error(
    'You are running Node ' +
    currentNodeVersion +
    '.\n' +
    'CookieScript requires Node 10 or higher. \n' +
    'Please update your version of Node.'
  );
  process.exit(1);
}

require('./CookieScript');
