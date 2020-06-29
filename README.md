<img src="docs/media/Hello.png" width="100%">

<sub>Created by <a href="https://github.com/getspooky">getspooky</a> and maintained with ❤️ by an amazing <a href="https://github.com/getspooky/CookieScript/graphs/contributors">team of developers</a>.</sub>

![GitHub](https://img.shields.io/github/license/getspooky/CookieScript?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/getspooky/CookieScript?style=for-the-badge)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/getspooky/CookieScript?style=for-the-badge)

CookieScript Boilerplate uses familiar tools and implements best practices around them to provide you a SOLID development experience.
This project does not impose a specific development philosophy or framework, so you're free to architect your code in the way that you want.

## Features

<dl>
  <dt>Quick scaffolding</dt>
  <dd>CookieScript offers a built-in tool for the command line is known as Geek which allows performing the majority of those tedious and repetitive programming tasks that many JavaScript developers avoid performing manually.</dd>

 <dt>Next generation JavaScript</dt>
 <dd>Use template strings, object destructuring, arrow functions, JSX syntax and more.</dd>
 
 <dt>No Lock-In</dt>
 <dd>Under the hood, we use webpack, Babel, ESLint, and other amazing projects to power your app.</dd>

 <dt>UI built with Tailwind CSS</dt>
  <dd>CookieScript uses <a href="https://tailwindcss.com/" target="_blank">tailwindcss</a>
   . An elegant and simple solution to solving the issues we all face when refactoring or removing dead HTML
  </dd>

 <dt>Less to Learn</dt>
 <dd>You don't need to learn and configure many build tools. Instant reloads help you focus on development. When it's time to deploy, your bundles are optimized automatically.</dd>

   <dt>SEO friendly</dt>
  <dd>There are a few problems for search engine rankings when it comes to a vanilla `React app`. We follow best practices to make your web app attractive to `Google`.  
  </dd>

 <dt>Intact Security</dt>
  <dd>Application security is one of the most important factors in web application development. While developing an application, a programmer needs to take effective ways to secure the application.</dd>

 <dt>Authentication</dt>
  <dd>Authentication is the most important factor in a web application, and developers need to spend a lot of time writing the authentication code. CookieScript contains an inbuilt authentication system, you only need to configure models, views, and controllers to make the application work.</dd>

 <dt>Offline-first</dt>
 <dd>The next frontier in performant web apps: availability without a network connection from the instant your users load the app.</dd>

 <dt>Mail Integration</dt>
 <dd>CookieScript uses free feature-rich library NodeMailer to send emails. Using the library function, we can easily send emails without too many hassles. The e-mail templates are loaded in the same way as views, which means you can use the Blade syntax and inject data into your templates.</dd>

<dt>Database Caching</dt>
<dd>CookieScript uses redis caching service in order to create high performance services</dd>

</dl>

<sub><i>Keywords: `React.js`, Redux, Hot Reloading, ESNext, Babel, react-router, Offline First, `Nodejs`, `express`, `mongoDB` ,cli and more...</i></sub>

## System Requirements

Before you install `CookieScript`, you should check to make sure that your system has the proper prerequisites installed. These include:

- Node >= 8.0.0
- npm >= 6.10.3
- mongoDB >= 3.6.8

## Browser support

- Google Chrome
- Microsoft Edge
- Firefox
- Opera
- Safari

>This doesn't mean that `CookieScript` cannot be used in older browsers, just that we'll ensure compatibility with the ones mentioned above.

## Quick start

2.  Clone this repo using `git clone --depth=1 https://github.com/getspooky/CookieScript.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm run dev` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:8080`._
5.  Run `npm run clean` to delete the example app.

## Usage 

> The official guide assumes intermediate level knowledge of React, NodeJs, and MongoDB. If you are totally new to MERN development, it might not be the best idea to jump right into a boilerplate as your first step.

🍵 Let us discuss the categories included in the configuration. All of the configuration files for the `CookieScript` boilerplate are stored in the config directory. Each option is documented, so feel free to look through the files and get familiar with the options available to you. <br />
Example: 
```yml
# Application Configuration

# This value is the name of your application. This value is used when the
# mern-boilerplate needs to place the application's name in a web browser
# or notification.

default:
  name: mern-boilerplate

# Application URL
url:
  host: 127.0.0.1
  port: 4200

# Application Environment
# This value determines the "environment" your application is currently
# running in.
# Supported Application Env: production, developement, test
env:
  type: environment

```

You may easily access your configuration values using `config` helper function from anywhere in your application. The configuration values may be accessed using "dot" and "At sign" syntax, which includes the 
name of the file and option you wish to access.
A error will be thrown if the configuration option or file does not exist:

```js
// Retrieve the server's port.
value = config('app@url.port');
```

> 🚨 `config` helper function does not provide a way to set configuration values at runtime.

## Contributing 

We'd love to have your helping hand on `CookieScript`! See CONTRIBUTING.md for more information on what we're looking for and how to get started.

## How Can I Help?

- Contribute to the core repository.
- Ask your employer to use `CookieScript` in projects.
- Make a tutorial that you explain it.
- Follow our repository.

## Code of Conduct

In order to ensure that the CookieScript community is welcoming to all, please review and abide by the `Code of Conduct`.

## License

This project is licensed under the MIT license, Copyright (c) 2019 Yasser Ameur El Idrissi. For more information see `LICENSE.md`.
