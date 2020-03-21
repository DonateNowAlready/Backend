const db = require('../../database');
const moment = require('moment');

module.exports.set = function(app) {
 /**
     * swagger
     * '/nonprofit/donations:
     *    get:
     *      tags:
     *        - Nonprofit
     *      description: Retrieves nonprofits login info
     *      parameters:
     *        name: username
     *          in: header
     *          description: username for the nonprofit
     *          required: true
     *          schema:
     *            type: string
     *            format: string
     *          name: password
     *          in: header
     *          description: password for the nonprofit
     *          required: true
     *          schema:
     *            type: string
     *            format: string
     *      responses:
     *        '200':
     *          description: A successful response
     */
    app.get('/nonprofit/donations', (req, res) => {
        let nonprofitName = req.get('nonprofitName');
        db.nonProfitDonations(nonprofitName, function(result) {
            res.send(result);
        });
    });
}