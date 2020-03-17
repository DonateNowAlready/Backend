const db = require('../../database');

module.exports.set = function(app) {
    // POST '/donor/charge' # Charging donors daily
    app.post('/donor/charge', (req, res) => {
        db.createDB('sampledb');
        res.send('Transactions ready.');
    });
}