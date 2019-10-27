import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import {compose} from 'compose-middleware';
import notifier from 'node-notifier';
import handler from 'errorhandler';
import swaggerUi from 'swagger-ui-express';
import './global';
import './environment';
import specs from './swagger/setup';
import Routes from './routes/api';
import {errorHandler} from './http/middlewares/errorHandler';
import {detectProxy} from './http/middlewares/detectProxy';
import {cors, xssFilter, hidePoweredBy, frameguard, noCache} from './security';

// Create Express server
const app = express();

/*
|-----------------------------------------------------------------------------
| OrbitJS configuration
|-----------------------------------------------------------------------------
*/

if (process.env.APP_ENV === 'development') {
  // only use in development
  app.use(
    handler({
      log: errorNotification,
    })
  );
}

/**
 * Send cross platform native notifications.
 *
 * @function
 * @name errorNotification
 * @param err
 * @param str
 * @param req
 * @returns {void}
 */
function errorNotification(err, str, req) {
  const title = `Error in ${req.method} ${req.url}`;
  notifier.notify({
    title,
    message: str,
  });
}

// set various HTTP headers to help protect your server
app.use(
  // Here you can register all security staff
  compose(
    cors,
    xssFilter,
    hidePoweredBy,
    frameguard,
    noCache
  )
);

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// parse application/json
app.use(bodyParser.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// add a new endpoint where your user can see the documentation.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// load API Routes
app.use(
  '/api',
  compose(
    detectProxy,
    Routes
  )
);

// handle Errors
app.use(errorHandler);

export default app;
