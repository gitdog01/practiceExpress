const Service = require('./Service');
const userModel = require('../models/UserModel');
const bcrypt = require('bcrypt');

class SignupService extends Service {
    constructor(logger, header, body, response) {
        super(logger, header, body, response);
        this.DefaultResponse = 'ok';
    }

    response(request, response) {
        super.checking(request);
        const { statusCode, json } = super.responseList[this.DefaultResponse];
        const { email, name, key } = request.body;

        const duplicatedResult = userModel.find({ email });
        if (duplicatedResult) {
            response.status(200);
            response.json({
                status: 'user_duplicate'
            });
            return;
        }

        const encryptedPassowrd = bcrypt.hashSync(key, process.env.SALT);
        const insertResult = userModel.insert({
            email,
            name,
            key: encryptedPassowrd
        });
        console.log(insertResult);

        response.status(statusCode);
        response.json(json);
    }
}
module.exports = SignupService;
