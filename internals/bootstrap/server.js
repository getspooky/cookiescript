/*
 * This file is part of the mern-boilerplate project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import http from 'http';
import app from 'server/App.js';

/*
|------------------------------------------------------------------------------
| Create The Server
|------------------------------------------------------------------------------
|
| By default mern-boilerplate uses http protocol but you can use http2 or https.
| learn more : https://nodejs.org/api/http2.html
| leanr more : https://nodejs.org/api/https.html
|
*/

const httpServer = http.createServer(app);
httpServer.listen(3000);
