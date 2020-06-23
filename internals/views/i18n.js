/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import {
  reactI18nextModule
} from 'react-i18next';

// Register all languages.
const resources = {
  en: {
    translation: {
      ...require('views/lang/en.json'),
    },
  },
};

i18n
  .use(detector)
  .use(reactI18nextModule)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en', // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
