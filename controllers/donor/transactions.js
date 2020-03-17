const db = require('../../database');

module.exports.set = function(app) {
    // GET '/donor/transactions' # Individual donor transactions
    app.get('/donor/transactions', (req, res) => {
        let donorId = req.get('donorId');
        db.getAllDonorTransactions(donorId, function(result) {
            res.send(result);
        });
    });
}