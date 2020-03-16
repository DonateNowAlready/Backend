var sample = require('./sample.js');

var db = require('../database.js');

module.exports.set = function(app) {
    // START - Sample Routing
    app.get('/', (req, res) => {
        res.send("<h2>Sadaqa<h2>")
    });

    app.get('/createdb', (req, res) => {
        db.createDB('sampleDB');
        res.send('Database created!');
    });
    // END - Sample Routing

    // Let sample.js set routes
    sample.set(app);
 }