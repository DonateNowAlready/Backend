const db = require('../../database');
const moment = require('moment');

module.exports.set = function(app) {
        /**
     * swagger
     * nonprofit/signup:
     *    post:
     *      tags:
     *        Nonprofit
     *      description: Signup for nonprofit. Fills in the data for this table
     *      parameters:
     *         name: donorId
     *          in: header
     *          description: Donor identification number
     *          required: true
     *          schema:
     *            type: string
     *            format: string
     *      responses:
     *        '200':
     *          description: A successful response
     */

    //  * /nonprofit/signup:
    //  *    post:
    //  *      tags:
    //  *        nonprofit
    //  *      description: Create Nonprofit account
    //  *      parameters:
    //  *         in:
    //  *              Header
    //  * 
    //  *         Nonprofit ID
    //  *              format:int
    //  *         Name
    //  *              format: str
    //  *         full address
    //  *         main contact name
    //  *              format: str
    //  *         main contact email
    //  *              format: str
    //  *         main contact phone number
    //  *              format: int
    //  *         bank account number**
    //  *              format: int (hidden)     
    //  *         bank routing number**
    //  *              format: int (hidden)
    //  *         username
    //  *              format: str
    //  *         password**
    //  *            format: Hidden  (not sure)
    //  *      responses:
    //  *        '200':
    //  *          description: A successful response
    //  */
    app.post('/nonprofit/signup', (req, res) => {
        let NonprofitID=req.get('nonProfitID');
        let Name=req.get('nameOfNonProfit');
        let fullAddress=req.get('Address');
        let mainContactName=req.get('contactName');
        let mainContactEmail=req.get('contactEmail');
        let mainContactPhoneNumber=req.get('contactNumber');
        let bankAccountNumber= req.get('bankAccountNumber');
        let bankRoutingNumber=req.get('bankRoutingNumber');
        let username=req.get('username');
        let password=req.get('password');
        // let date = moment().format("YYYY-MM-DD HH:mm:ss");
        // console.log(donorId, date, amount);
        db.nonProfitSignUp(NonprofitID, Name, fullAddress, mainContactName,mainContactEmail,mainContactPhoneNumber,bankAccountNumber,bankRoutingNumber,username,password,function(result) {
            res.send(result);
        });
    });


}