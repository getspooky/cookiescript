import {env} from 'support/helpers/common';

export default {
  // Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
  // Docs: (https://github.com/Automattic/mongoose)
  mongoose: {
    db_host: env('DB_HOST'),
    db_name: env('DB_NAME'),
    db_user: env('DB_USER'),
    db_password: env('DB_PASS'),
    // you only need to check whether your app successfully connects. Once Mongoose has successfully connected,
    // the URL parser is no longer important. If you can't connect with { useNewUrlParser: true }.
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  // Redis is an open source, fast, and advanced key-value store.
  // Docs: (https://github.com/antirez/redis)
  redis: {
    cache: null,
    expiration: 32400,
  },
};
