const express = require('express');
const router = express.Router();
const path = require('path');
const routerParser = () => {
    const apiRequirement = require('./api.json');
    Object.entries(apiRequirement).forEach(([key, vaule]) => {
        try {
            const serviceClass = require(path.resolve(
                __dirname,
                `../services/${key}.service.js`
            ));
            const service = new serviceClass({ ...vaule });
            const { method, url } = vaule;

            router[method](url, service.response);
            console.log('connect', key);
        } catch (error) {
            switch (error.code) {
                case 'MODULE_NOT_FOUND':
                    console.log('MODULE_NOT_FOUND');
                    break;
                default:
                    console.log(error);
                    console.log('realError');
                    break;
            }
            return;
        } finally {
            console.log(key);
        }
    });
};

routerParser();

module.exports = router;
