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
  tokenVerification
} from 'server/middlewares/TokenIsVerified';
import {
  register
} from 'server/controllers/auth/Authenticate';
import {
  Validator as RegisterValidator
} from 'server/validators/auth/Register'
import {
  mountDatabase,
  unmountDatabase
} from 'internals/testing/database';
import {
  index
} from 'server/controllers/Profile';

var url = {
  profile: '/api/v1/profile',
  register: '/api/v1/register'
};

var JWTtoken = null;

beforeAll(function () {
  app.use(url['register'], RegisterValidator(), register);
  // adding /hello route
  app.use(url['profile'], tokenVerification, index);
});

beforeEach(async function () {
  // connect database instance.
  await mountDatabase();
});

afterAll(async function () {
  // destroy and close database.
  await unmountDatabase();
});


test('should create new user and return token', done => {
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
      JWTtoken = res.body.data;
      if (err) return done(err);
      done();
    });
});

test('should return 401', done => {
  request(app)
    .get(url.profile)
    .expect(401)
    .end(function (err, res) {
      if (err) return done(err);
      done();
    });
});

test('should return User data', done => {
  request(app)
    .get(url.profile)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .set('authorization', 'Bearer ' + JWTtoken)
    .expect(200)
    .end(function (err, res) {
      if (err) return done(err);
      done();
    });
});
