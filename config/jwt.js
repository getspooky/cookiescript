import {env} from 'support/helpers/common';

export default {
  // eslint-disable-next-line no-tabs
  algorithm: 'RS256', // HS256	, HS384 , HS512 , RS256 , RS384 , RS512 , PS256 , PS384 , PS512 , ES256 , ES384 , ES512
  private_Key: env('JWT_SECRET_KEY'),
  expiration: '5h',
};
