const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');

chai.use(chaiHttp);

describe('Sample', () => {
    describe('/GET sample', () => {
        it('should run the sample route', (done) => {
          chai.request(server)
              .get('/sample')
              .set('donorId', "1")
              .end((err, res) => {  
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                done();
              });
        });
    });
});
