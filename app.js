const express = require('express');
const mysql = require('mysql');
const db = require('./database');
const controllers = require('./controllers');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();


controllers.set(app);

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Sadaqa API",
        description: "Backend API for Sadaqa",
        contact: {
          name: "Omar Elbarmawi"
        },
        servers: ["http://localhost:5000"]
      }
    },
    apis: ['app.js', './controllers/*.js', './controllers/*/*.js', ]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const port = process.env.PORT || '5000';
app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});