const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');
const should = chai.should();

chai.use(chaiHttp);

describe('Transactions API', () => {
    describe('/GET basic transactions', () => {
        it('should return all transactions for donor 1', (done) => {
          chai.request(server)
              .get('/donor/transactions')
              .set('donorId', "1")
              .end((err, res) => {  
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(4);
                done();
              });
        });
    });

    describe('/GET basic transactions', () => {
        it('should return all transactions for donor 1', (done) => {
          chai.request(server)
              .get('/donor/transactions/custom-range')
              .set('donorId', "2")
              .set('startDate', "2020-03-15")
              .set('endDate', "2020-03-16")
              .end((err, res) => {  
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(2);
                done();
              });
        });
    });

});
