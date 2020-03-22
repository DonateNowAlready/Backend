const db = require('../../database');
const moment = require('moment');

module.exports.set = function(app) {
    /**
     * @swagger
     * /donor/charge:
     *    post:
     *      tags:
     *        - Donor
     *      description: Retrieves donor's transaction history for the day
     *      parameters:
     *        - name: donorId
     *          in: header
     *          description: Donor identification number
     *          required: true
     *          schema:
     *            type: string
     *            format: string
     *        - name: amount
     *          in: header
     *          description: Charge amount to donor's card
     *          required: true
     *          schema:
     *            type: string
     *            format: string
     *      responses:
     *        '200':
     *          description: A successful response
     */
    app.post('/donor/charge', (req, res) => {
        // TOOD: Loop through transactions and obtain daily total
        // Should we go through our database of transactions for the day and charge based on that?
        let donorId = req.get('donorId');
        let amount = req.get('amount');
        let date = moment().format("YYYY-MM-DD HH:mm:ss");
        console.log(donorId, date, amount);
        db.addChargeEntry(donorId, date, amount, function(result_msg) {
            res.send(result_msg);
        });
    });
}