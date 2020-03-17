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

exports.getAllDonorTransactions = function(donorId, callback) {
    let query = `SELECT * 
    FROM sadaqa.transactions 
    WHERE donor_id = '${donorId}';`
    db.query(query, (err, result) => {
        if(err) throw err;
        console.log(`Obtained transactions for donor ${donorId}`);
        callback(result);
    });
}

exports.getRangeTransactions = function(donorId, startDate, endDate, callback) {
    let query = `SELECT * 
    FROM sadaqa.transactions
    WHERE CAST(transaction_date as DATETIME) between '${startDate}' and '${endDate}' and donor_id = '${donorId}';`

    db.query(query, (err, result) => {
        if(err) throw err;
        console.log(`Obtained transactions for donor ${donorId} in the date range ${startDate} - ${endDate}`);
        callback(result);
    });
}

exports.addChargeEntry = function(donorId, date, amount, callback) {
    let query = `INSERT INTO sadaqa.charges
    values ('${donorId}' , '${date}', '${amount}')`;

    db.query(query, (err, result) => {
        if(err) throw err;
        console.log(`Added entry into charges table for donor ${donorId} for the amount ${amount}`);
        callback('Success');
    });

}