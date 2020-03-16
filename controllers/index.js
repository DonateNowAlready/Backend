const sample = require('./sample.js');
const transactions = require('./transactions.js');
const db = require('../database');

module.exports.set = function(app) {
    // ** START **  Sample Routing
    app.get('/', (req, res) => {
        res.send("<h2>Sadaqa<h2>")
    });

    app.get('/createdb', (req, res) => {
        db.createDB('sampleDB');
        res.send('Database created!');
    });
    // ** END ** Sample Routing

    // Let sample.js set routes
    sample.set(app);
    transactions.set(app);
 }