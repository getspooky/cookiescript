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
  mountDatabase,
  unmountDatabase,
} from 'internals/testing/database';
import {
  login,
  register
} from 'server/controllers/auth/Authenticate';
import {
  Validator as RegisterValidator
} from 'server/validators/auth/Register'
import {
  Validator as LoginValidator
} from 'server/validators/auth/Login'

var url = {
  login: '/api/v1/login',
  register: '/api/v1/register'
}

// adding /login & /register routes.
app.use(url['login'], LoginValidator(), login);
app.use(url['register'], RegisterValidator(), register);

beforeAll(async function () {
  // connect database instance.
  await mountDatabase();
});

afterAll(async function () {
  // destroy and close database.
  await unmountDatabase();
});


test('should return 201', done => {

  request(app)
    .post(url.register)
    .send({
      username: 'test123456789',
      email: 'test@gmail.com',
      password: 'cookiscript_admin'
    })
    .set('Accept', 'application/json')
    .expect(201)
    .end(function (err, res) {
      if (err) return done(err);
      done();
    });
});



test('should return 200', done => {

  request(app)
    .post(url.login)
    .send({
      email: 'test@gmail.com',
      password: 'cookiscript_admin'
    })
    .set('Accept', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) return done(err);
      done();
    });
});
