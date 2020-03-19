module.exports.set = function(app) {
    /**
     * @swagger
     * /sample:
     *    get:
     *      tags:
     *        - Sample
     *      description: Sample route
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
    app.get('/sample', (req, res) => {
        res.send(['Sample is working.']);
    });
}