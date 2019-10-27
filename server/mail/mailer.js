import {createTransport, getTestMessageUrl} from 'nodemailer';
import mailConfig from 'config/mail';

const {host, port, sender, user, pass} = mailConfig;

/**
 * Sending Email.
 *
 * @async
 * @function
 * @name sendMail
 * @param to
 * @param subject
 * @param html
 * @returns {Promise<boolean|*>}
 */
export async function sendMail(to, subject, html) {
  // create reusable transporter object using the default SMTP transport
  const transporter = createTransport({
    host,
    port,
    secure: false, // true for 465, false for other ports
    auth: {
      user,
      pass,
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"Fred Foo 👻" <${sender}> 👻`, // sender address
    to, // list of receivers
    subject, // Subject line
    html, // html body
  });
  return getTestMessageUrl(info);
}
