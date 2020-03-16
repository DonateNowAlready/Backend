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

## Testing
Make sure that all of the libraries for this project are installed by running the command:
```
npm install
```

To test that this route works on your localhost, run the following command in the `backend` directory.
```
nodemon
```

## Submitting your Feature
Stage and push all of your completed code into Github under your respective branch. Then create a pull request and add the other two developers as reviewers.
