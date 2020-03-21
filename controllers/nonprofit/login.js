const db = require('../../database');
const moment = require('moment');

module.exports.set = function(app) {
           /**
     * swagger
     * /nonprofit/login:
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
    app.get('/nonprofit/login', (req, res) => {
        let username = req.get('username');
        let password = moment().format("password");
        db.NonprofitLogin(username, password, function(result) {
            res.send(result);
        });
    });

}