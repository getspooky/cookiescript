/**
 * Register languages.
 * @type {*}
 */
export const resources = {
    en: {
        translation: {
            ...require('app/lang/english/register.json'),
            ...require('app/lang/english/login.json'),
            ...require('app/lang/english/home.json'),
            ...require('app/lang/english/forgot.json'),
            ...require('app/lang/english/reset.json'),
        },
    },
    fr: {
        translation: {
            ...require('app/lang/french/register.json'),
            ...require('app/lang/french/login.json'),
            ...require('app/lang/french/home.json'),
            ...require('app/lang/french/forgot.json'),
            ...require('app/lang/french/reset.json'),
        },
    },
    zh: {
        translation: {
            ...require('app/lang/chinese/register.json'),
            ...require('app/lang/chinese/login.json'),
            ...require('app/lang/chinese/home.json'),
            ...require('app/lang/chinese/forgot.json'),
            ...require('app/lang/chinese/reset.json'),
        },
    },
    de: {
        translation: {
            ...require('app/lang/deutsch/register.json'),
            ...require('app/lang/deutsch/login.json'),
            ...require('app/lang/deutsch/home.json'),
            ...require('app/lang/deutsch/forgot.json'),
            ...require('app/lang/deutsch/reset.json'),
        },
    },
};