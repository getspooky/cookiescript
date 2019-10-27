import request from 'supertest';
import app from './App';

describe('GET /api', () => {
  it('should return 200', done => {
    request(app)
      .get('/api')
      .expect(200, done);
  });
});
