# How to Contribute a Backend Route

## Setup

Start by creating a new branch off of the `dev` branch using the naming structure `feature-{sample-route}`. 

## Adding a Route

Start by creating a `.js` file in the controllers folder. To add any routes, use the following code structure:
```
module.exports.set = function(app) {
    // your routes here
}
```
**NOTE:** See `backend/controllers/sample.js` for an example.

In order for your new routes to be recognized, you will need to modify the `backend/controllers/index.js` with the following code changes:
```
var sample = require('./sample.js');

module.exports.set = function(app) {
    // Some routes

    // Let sample.js set routes
    sample.set(app);
 }
```

## Starting the Server
Make sure that all of the libraries for this project are installed by running the command:
```
npm install
```

To test that this route works on your localhost, run the following command in the `backend` directory.
```
nodemon
```
You can either go onto localhost on your browswer or submit and http request in Postman.

## Writing Test Cases
To test the REST API we'll use the node modules `mocha`, `chai`, and `chai-http`. 

Follow the example in the file `test/testSample.js`.

After writing tests for your route, run the following command in terminal:
```
npm test
```

## Documentation
All of the documentation for routes will be implemented with `swagger-jsdoc` and `swagger-ui-express` libraries. When running the backend server.  

To visualize and try out the routes currently implemented, navigate to [http://localhost:5000/api-docs](http://localhost:5000/api-docs).  

To add your own route to the api-docs, copy the comments about the `/sample` route starting with the **@swagger** annotation.

## Submitting your Feature
Stage and push all of your completed code into Github under your respective branch. Then create a pull request and add the other two developers as reviewers.
