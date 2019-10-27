## Authentication

Authentication is the process of identifying the user credentials. In web applications, authentication is managed by sessions which take the input parameters such as email or username and password, for user identification. If these parameters match, the user is said to be authenticated.

## Authentication Quickstart

Most websites will need a way to allow users to log in so that they can access resources, update information, and so on. Some boilerplates like [mern-starter](https://github.com/Hashnode/mern-starter) do not have a built in authentication system. In a scenario like that, you would have to write your own, or implement a third party solution. With Mernless, user authentication is baked right in.
Mernless ships with several pre-built authentication controllers, which are located in the `server/http/controllers/auth` . The `authenticate` handles new user registration and authentication. The `passwords/sendPasswordResetEmails` handles e-mailing links for resetting passwords, and the `resetPassword` contains the logic to reset passwords.

## Routing

All routes for all authentication end-points are stored in `server/routes/auth.js`

| Url                  | Method        |
| -------------------- | ------------- |
| /login               | `POST`        |
| /register            | `POST`        |
| /password/forgot     | `PUT`         |
| /password/reset      | `PUT`         |

