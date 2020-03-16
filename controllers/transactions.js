module.exports.set = function(app) {
    app.get('/transactions', (req, res) => {
        res.send('Transactions ready.');
    });
}