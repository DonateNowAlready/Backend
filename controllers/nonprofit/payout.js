const db = require('../../database');

module.exports.set = function(app) {
    app.get('/nonprofit/payout', (req, res) => {
        let nonprofitId = req.get('nonprofitId'); 
    });
}