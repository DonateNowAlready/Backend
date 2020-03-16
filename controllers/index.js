var sample = require('./sample.js');

module.exports.set = function(app) {
    // START - Sample Routing
    app.get('/', (req, res) => {
        res.send("<h2>Sadaqa<h2>")
    });

    app.get('/createdb', (req, res) => {
        let sql_query = 'CREATE DATABASE sampledb';
        db.query(sql_query, (err, result) => {
            if(err) throw err;
            // console.log(result);
            console.log('Database created...');
            res.send('Database created...');
        });
    });
    // END - Sample Routing

    // Let sample.js set routes
    sample.set(app);
 }