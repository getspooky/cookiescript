## About Swagger

Documentation is the backbone of an application. It allows developers after you to understand how the application works without having to read through the entire implementation.
`Swagger` is a framework that allows real-time authorization and endpoint testing for developers and testers alike.

## Mernless API documentation

When developing APIs with Mernless you tend to write my API endpoints in route files (usually also stored under a routes folder) which contains the rules to attend requests and, because of this, it is a perfect location to document the endpoints of my API, for example:

```JS
/**
  * @swagger
  * /login:
  *    post:
  *      tags:
  *      - auth
  *      description: This should authenticate the user
  *      parameters:
  *      - in: "body"
  *        name: "body"
  *        description: "Object that needs to be added to the login" 
  *        required: true
  *        schema:
  *          $ref: '#/definitions/Login'
  */

  Route.post('/login', loginValidator(), loginController);
```
Mernless use the `swagger-ui-express` to add a new endpoint where your user can see the documentation.

## Swagger UI

Swagger UI allows anyone to visualize a RESTful API. Visualization is automatically generated from the Swagger specification. So Swagger UI takes an existing JSON or YAML document and creates interactive documentation. That documentation can be used by anyone who has permission to access it. Documentation could look like this:

<img src="https://swagger.io/swagger/media/Images/Tools/Opensource/Swagger_UI.png?ext=.png">