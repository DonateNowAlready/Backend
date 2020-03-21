var sample = require('./sample.js');
const nonProfitSignUP = require('./nonprofit/signup');
const nonProfitLogin=require('./nonprofit/login')
const nonProfitTotalDonations=require('./nonprofit/totalDonations')

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
    nonProfitSignUP.set(app)
    nonProfitLogin.set(app)
    nonProfitTotalDonations.set(app)

 }