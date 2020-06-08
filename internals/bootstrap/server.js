/*
 * This file is part of the mern-boilerplate project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import http from 'http';
import app from 'server/App';
import routes from 'internals/bootstrap/routes'
import logger from 'internals/bootstrap/logger';
import config from 'internals/utils/config';

/*
|------------------------------------------------------------------------------
| Register Routes and Create The Nodejs Server
|------------------------------------------------------------------------------
|
| By default mern-boilerplate uses http protocol but you can use http2 or https.
| learn more : https://nodejs.org/api/http2.html
| leanr more : https://nodejs.org/api/https.html
|
*/

app.use(routes);

const httpServer = http.createServer(app);
const httpHost = config('app@url.host');
const httpPort = config('app@url.port');

httpServer.listen(httpPort, function(err) {
  if(err) {
    logger.error(err);
  }
  logger.appStarted(httpPort, httpHost, false);
});
