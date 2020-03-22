const moment = require('moment');
const db = require('../../database');

module.exports.set = function(app) {
    /**
     * @swagger
     * /donor/transactions:
     *    get:
     *      tags:
     *        - Donor
     *      description: Retrieves donor's complete transaction history
     *      parameters:
     *        - name: donorId
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
    app.get('/donor/transactions', (req, res) => {
        let donorId = req.get('donorId');
        db.getAllDonorTransactions(donorId, function(result) {
            res.send(result);
        });
    });

    /**
     * @swagger
     * /donor/transactions/today:
     *    get:
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
     *      responses:
     *        '200':
     *          description: A successful response
     */
    app.get('/donor/transactions/today', (req, res) => {
        let donorId = req.get('donorId');
        let today = moment().format("YYYY-MM-DD");
        let tomorrow = moment().add(1, "day").format("YYYY-MM-DD");
        db.getRangeTransactions(donorId, today, tomorrow, function(result) {
            res.send(result);
        });
    });

    /**
     * @swagger
     * /donor/transactions/this-month:
     *    get:
     *      tags:
     *        - Donor
     *      description: Retrieves donor's transaction history for the current month
     *      parameters:
     *        - name: donorId
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
    app.get('/donor/transactions/this-month', (req, res) => {
        let donorId = req.get('donorId');
        let thisMonth = moment().format("YYYY-MM-01");
        let nextMonth = moment().add(1, "month").format("YYYY-MM-01");
        db.getRangeTransactions(donorId, thisMonth, nextMonth, function(result) {
            res.send(result);
        });
    });

    /**
     * @swagger
     * /donor/transactions/ytd:
     *    get:
     *      tags:
     *        - Donor
     *      description: Retrieves donor's transaction history for the Year-to-Date.
     *      parameters:
     *        - name: donorId
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
    app.get('/donor/transactions/ytd', (req, res) => {
        let donorId = req.get('donorId');
        let firstOfTheYear = moment().format("YYYY-01-01");
        let tomorrow = moment().add(1, "day").format("YYYY-MM-DD");
        db.getRangeTransactions(donorId, firstOfTheYear, tomorrow, function(result) {
            res.send(result);
        });
    });

    /**
     * @swagger
     * /donor/transactions/custom-range:
     *    get:
     *      tags:
     *        - Donor
     *      description: Retrieves donor's transaction history for a custom range of dates
     *      parameters:
     *        - name: donorId
     *          in: header
     *          description: Donor identification number
     *          required: true
     *          schema:
     *            type: string
     *            format: string
     *        - name: startDate
     *          in: header
     *          description: Starting date "YYYY-MM-DD"
     *          required: true
     *          schema:
     *            type: string
     *            format: string
     *        - name: endDate
     *          in: header
     *          description: End date "YYYY-MM-DD"
     *          required: true
     *          schema:
     *            type: string
     *            format: string
     *      responses:
     *        '200':
     *          description: A successful response
     */    
    app.get('/donor/transactions/custom-range', (req, res) => {
        let donorId = req.get('donorId');
        // Dates must be in the format "YYYY-MM-DD"
        let startDate = req.get('startDate');
        let endDate = req.get('endDate');
        db.getRangeTransactions(donorId, startDate, endDate, function(result) {
            res.send(result);
        });
    });
}