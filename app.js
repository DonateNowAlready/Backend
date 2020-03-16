const express = require('express');
const mysql = require('mysql');
const controllers = require('./controllers');
const db = require('./database');

const app = express();

controllers.set(app);

const port = process.env.PORT || '5000';
app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});