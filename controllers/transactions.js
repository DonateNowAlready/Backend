var db = require('../database');

module.exports.set = function(app) {
    // GET '/donor/transactions' # Individual donor transactions
    // db.query()
    app.get('/donor/transactions', (req, res) => {
        db.createDB('sampledb')
        db.createDB('ugly');
        db.deleteDB('ugly');
        res.send('Transactions ready.');
    });
}