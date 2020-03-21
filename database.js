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
var DB_NAME = 'sadaqa';
if (process.env.NODE_ENV == 'test') {
    DB_NAME = 'test';
}
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

exports.nonProfitSignUp = function(NonprofitID, Name, fullAddress, mainContactName,mainContactEmail,mainContactPhoneNumber,bankAccountNumber,bankRoutingNumber,username,password, callback) {
        let query = `INSERT INTO ${DB_NAME}.nonProfit
        values ('${NonprofitID}','${Name}', '${fullAddress}', '${mainContactName}','${mainContactEmail}','${mainContactPhoneNumber}','${bankAccountNumber}','${bankRoutingNumber}','${username}','${password}')`;
    
        db.query(query, (err, result) => {
            if(err) throw err;
            console.log(`Added entry into charges table for Nonprofit ${NonprofitID}`);
            callback('Success');
        });
    
    }

exports.NonprofitLogin = function(username, password, callback) {
        let query = `SELECT * 
        FROM ${DB_NAME}.nonProfit
        WHERE username='${username}' and password='${password}'`;
    
        db.query(query, (err, result) => {
            if(err) throw err;
            console.log(`Successfully logged in!`);
            callback(result);
        });
    }
exports.nonProfitDonations= function(nonprofitName, password, callback) {
    let nonprofitID=`SELECT NonprofitID
    FROM ${DB_NAME}.nonProfit
    WHERE name='${nonprofitName}'`

    let query = `SELECT SUM(donationAmount) 
    FROM ${DB_NAME}.transactions
    WHERE nonProfitID='${nonprofitID}'`;

    db.query(query, (err, result) => {
        if(err) throw err;
        console.log(`Successfully logged in!`);
        callback(result);
    });
}

