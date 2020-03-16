const mysql = require('mysql');

const db = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'password'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

exports.createDB = function(dbName) {
    let sql_query = 'CREATE DATABASE ' + dbName;
    db.query(sql_query, (err, result) => {
        if(err) throw err;
        // console.log(result);
        console.log(`'${dbName}' database created.`);
    });
}

exports.deleteDB = function(dbName) {
    let sql_query = 'DROP DATABASE ' + dbName;
    db.query(sql_query, (err, result) => {
        if(err) throw err;
        console.log(`'${dbName}' database dropped.`);
    });
}