const db = require('../../database');

module.exports.set = function(app) {
    // GET '/donor/transactions' # Individual donor transactions
    app.get('/donor/transactions', (req, res) => {
        db.createDB('sampledb');
        res.send('Transactions ready.');
    });
}