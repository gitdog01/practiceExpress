const Service = require('./Service');

class TestService extends Service {
    constructor(logger, header, body, response) {
        super(logger, header, body, response);
        this.DefaultResponse = 'ok';
    }

    response(request, response) {
        super.checking(request);
        const { statusCode, json } = super.responseList[this.DefaultResponse];
        /*
         * service logic
         * json.data = func();
         * json.status = func();
         */

        response.status(statusCode);
        response.json(json);
    }
}
module.exports = TestService;
