## Configuration

In the previous chapter, we have seen that the basic configuration files of Mernless are included in the `config` directory. In this chapter, let us discuss the categories included in the configuration.
Each option is documented, so feel free to look through the files and get familiar with the options available to you.

## Environment Configuration

Environment variables are those which provide a list of web services to your web application. All the environment variables are declared in the `.env` file which includes the parameters required for initializing the configuration.
You should rename the file `.env.example` to `.env` and run the command mentioned below where you've installed the Mernless:

```sh
 $ node geek generate:key
```

You can see in the `.env` file the newly generated key. By default, the .env file includes following parameters :

```
APP_NAME=
APP_KEY=
APP_ENV=
APP_HOST=
APP_PORT=
APP_DEBUG=

DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
DB_EXPIRATION=

PASSWORD_HASH_SALT=
JWT_SECRET_KEY=

REDIS_HOST=
REDIS_PASSWORD=
REDIS_PORT=

MAIL_DRIVER=
MAIL_HOST=
MAIL_PORT=
MAIL_FROM=
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_SECURE=
MAIL_ENCRYPTION=

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_BUCKET=

RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=
RECAPTCHA_LANG=

# React Environment variables are embedded into the build, meaning anyone can view them by inspecting your app's files.
REACT_APP_HOST=
REACT_APP_STRIPE_PUBLIC_KEY=
REACT_APP_STRIPE_SECRET_KEY=


```

#### Important Points

While working with basic configuration files of Mernless, the following points are to be noted :

- The `.env` file should not be committed to the application source control, since each developer or user has some predefined environment configuration for the web application
- For backup options, the development team should include the `.env.example` file, which should contain the default configuration.

## Retrieving Environment Configuration

All the environment variables declared in the `.env` file can be accessed by env functions which will call the respective parameter.
You can access the environment variable as shown below :

```
db_name: env('DB_NAME','MernlessDB')
```
