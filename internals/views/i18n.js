/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import i18n from 'i18next';
import i18nextBrowser from 'i18next-browser-languagedetector';
import react18Next from 'react-i18next';

i18n
  .use(i18nextBrowser.detector)
  .use(react18Next.reactI18nextModule)
  .init({
    lng: 'en',
    fallbackLng: 'en', // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
