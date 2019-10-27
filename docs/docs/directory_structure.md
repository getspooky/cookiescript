## Directory Structure
In this chapter, we will cover the project folder structure that is convenient for any Mernless application.
By default, the directory structure of Mernless is meant to meet the requirement for both large and small application development. 
But there is a provision to organize your application according to the way you like.

### The Root Directory
The Mernless directory structure may feel overwhelming at first glance since there are a handful of pre-configured directories.
Gradually you’ll understand the benefit of separating your entities into multiple directories, keeping your code maintainable and easy to search.

    .
    ├── app               
    ├── build             
    ├── config           
    ├── docker 
    ├── console           
    ├── coverage         
    |── e2e               
    |── providers         
    |── public            
    |── server            
    |── storage            
    |── support
    |── tools
    |── webpack
    |── .dockerignore
    |── .env.example
    |── .eslintignore
    |── .eslintrc
    |── .nvmrc
    |── .prettierrc
    |── .geek
    |── .jest.config
    |── setupTests
    |── travis.yml
    |── webpack.config.js
    └── README.md
    
## The App Directory
This app directory contains the JavaScript that will be processed by webpack and is the heart of the React app. Browsing this folder, you see the main App JavaScript component (App.js), its associated styles (App.css), and test suite (App.test.js). index.js and its styles (index.css) provide an entry into the App. This directory also houses all of your language files.

    app
    ├── actions               
    ├── assets                    
    ├── components             
    ├── constants 
    ├── data     
    ├── guards         
    |── lang            
    |── layouts         
    |── pages            
    |── reducers            
    |── scss            
    |── services
    |── App.js
    |── App.scss
    |── App.test.js
    |── index.jsx
    |── logo.svg
    └── store.js

## The Build Directory
This build directory contains assets that will be served directly without additional processing by webpack. index.html provides the entry point for the web app.

## The Console Directory
The console directory contains all of the custom commands for your application. These commands may be generated using the `generate:command` command.

## The Config Directory
In general, the work of configuring means configuring the components of Mernless such as database , mail and hashing . It's a great idea to read through all of these files and familiarize yourself with all of the options available to you.

## The Public Directory
The public folder contains the HTML file so you can tweak it, for example, to set the page title. The `<script>` tag with the compiled code will be added to it automatically during the build process.

## The Server Directory
The server directory is the home of your Node.js server-side application logic. We'll explore this directory in more detail soon.

## The Storage Directory
The storage directory may be used to store user-generated files, such as `profile avatars` and `videos`.

## The Support Directory
The support directory, as the name implies, contains variety of `helper` functions. Many of these functions are used by the Mernless itself; however, you are free to use them in your own applications if you find them convenient.

