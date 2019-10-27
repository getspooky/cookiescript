import {env} from 'support/helpers/common';

export default {
  // Here you may specify the configuration options that should be used when passwords are hashed.
  salt: env('PASSWORD_HASH_SALT'),
};
