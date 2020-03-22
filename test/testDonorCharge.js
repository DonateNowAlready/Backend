const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');
const should = chai.should();

chai.use(chaiHttp);

describe('Charges API', () => {
    describe('/POST basic charge', () => {
        it('should return a success message and a charge to donor', (done) => {
          chai.request(server)
              .post('/donor/charge')
              .set('donorId', "3")
              .set('amount', "12.43")
              .end((err, res) => {  
                    res.should.have.status(200);
                    // res.body.should.be.a('array');
                    // res.body.length.should.be.eql(4);
                done();
              });
        });
    });
});
