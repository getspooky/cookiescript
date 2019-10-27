import {env} from 'support/helpers/common';

export default {
  driver: env('MAIL_DRIVE'),
  host: env('MAIL_HOST'),
  port: env('MAIL_PORT'),
  user: env('MAIL_USERNAME'),
  pass: env('MAIL_PASSWORD'),
  // You may wish for all e-mails sent by your application to be sent from
  // the same address. Here, you may specify a name and address that is
  // used globally for all e-mails that are sent by your application.
  sender: env('MAIL_FROM'),
};
