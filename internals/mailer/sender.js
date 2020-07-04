/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
  createTransport,
  getTestMessageUrl
} from 'nodemailer';
import config from 'internals/utils/config';

var sender = config('mailer@sender.address');

export async function send(to, subject, html) {
  // create reusable transporter object using the default SMTP transport
  const transporter = createTransport({
    host: config('mailer@host'),
    port: config('mailer@port'),
    auth: config('mailer@auth'),
    secure: config('mailer@secure')
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"👻" <${sender}> 👻`, // sender address
    to, // list of receivers
    subject, // Subject line
    html, // html body
  });

  return getTestMessageUrl(info);

};
