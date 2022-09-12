class Service {
    constructor(logger, header, body, response) {
        this.logger = logger;
        this.headerTypes = header;
        this.bodyTypes = body;
        this.responseList = response;

        this.headerChecker = this.headerChecker.bind(this);
        this.bodyChecker = this.bodyChecker.bind(this);
        this.checking = this.checking.bind(this);
    }

    headerChecker() {}

    bodyChecker(reqeust) {
        const { body: reqeustBody } = reqeust;
        const { bodyTypes } = this;
        return Object.entries(reqeustBody).some(
            ([key, type]) => typeof bodyTypes[key] === type
        );
    }

    checking(reqeust) {
        if (this.headerChecker(reqeust)) {
            throw 'headerError';
        }
        if (this.bodyChecker(reqeust)) {
            throw 'bodyError';
        }
    }
}
module.exports = Service;
