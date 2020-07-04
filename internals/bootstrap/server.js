/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import http from 'http';
import app from 'server/App';
import helmet from 'helmet';
import config from 'internals/utils/config';
import cors from 'cors';
import routes from './routes'
import logger from './logger';
import ehandler from './ehandler';
import database from './dbcon';

/*
|------------------------------------------------------------------------------
| Register Routes and Create The Nodejs Server
|------------------------------------------------------------------------------
|
| By default CookieScript uses http protocol but you can use http2 or https.
| learn more : https://nodejs.org/api/http2.html
| leanr more : https://nodejs.org/api/https.html
|
*/

// enable CORS with various options.
// see documentation: https://www.npmjs.com/package/cors
app.use(cors(config('cors@options')));

// set various HTTP headers to help protect your server
app.use(helmet());

app.use(routes);

// handle Errors
app.use(ehandler);

const httpServer = http.createServer(app);
const httpHost = config('app@url.host');
const httpPort = config('app@url.port');

httpServer.listen(httpPort, function (err) {
  if (err) {
    logger.error(err);
  }
  logger.appStarted(httpPort, httpHost, false);
});
