module.exports.set = function(app) {
    app.get('/sample', (req, res) => {
        res.send('Sample is working.');
    });
}