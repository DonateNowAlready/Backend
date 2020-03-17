const moment = require('moment');
const db = require('../../database');

module.exports.set = function(app) {
    app.get('/donor/transactions', (req, res) => {
        let donorId = req.get('donorId');
        db.getAllDonorTransactions(donorId, function(result) {
            res.send(result);
        });
    });

    app.get('/donor/transactions/today', (req, res) => {
        let donorId = req.get('donorId');
        let today = moment().format("YYYY-MM-DD");
        let tomorrow = moment().add(1, "day").format("YYYY-MM-DD");
        db.getRangeTransactions(donorId, today, tomorrow, function(result) {
            res.send(result);
        });
    });

    app.get('/donor/transactions/this-month', (req, res) => {
        let donorId = req.get('donorId');
        let thisMonth = moment().format("YYYY-MM-01");
        let nextMonth = moment().add(1, "month").format("YYYY-MM-01");
        db.getRangeTransactions(donorId, thisMonth, nextMonth, function(result) {
            res.send(result);
        });
    });

    app.get('/donor/transactions/ytd', (req, res) => {
        let donorId = req.get('donorId');
        let firstOfTheYear = moment().format("YYYY-01-01");
        let tomorrow = moment().add(1, "day").format("YYYY-MM-DD");
        db.getRangeTransactions(donorId, firstOfTheYear, tomorrow, function(result) {
            res.send(result);
        });
    });
}