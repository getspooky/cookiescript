/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import request from 'supertest';
import app from 'server/App';
import {
  SayHello
} from 'server/controllers/Hello';

var url = '/api/v1/hello';

beforeAll(function () {
  // adding /hello route
  app.use(url, SayHello);
});

test('should return 200', done => {
  request(app)
    .get(url)
    .expect(200)
    .end(function (err, res) {
      if (err) return done(err);
      done();
    });
});

test('check Content-Type', done => {
  request(app)
    .get(url)
    .set('Accept', 'application/json')
    .expect('Content-Type', "text/html; charset=utf-8")
    .end(function (err, res) {
      if (err) return done(err);
      done();
    });
});
