class CustomError {
    constructor(message, name, stack) {
        this.message = message;
        this.name = name;
        this.stack = stack;
    }
}

export class BadRequestError extends CustomError {
    constructor(message, name, stack) {
        super(message, name, stack);
        this.statusCode = 400;
    }

    onError() {
        // something do
    }
}

export class ForbiddenError extends CustomError {
    constructor(message, name, stack) {
        super(message, name, stack);
        this.statusCode = 403;
    }

    onError() {
        // something do
    }
}

export class NotFoundError extends CustomError {
    constructor(message, name, stack) {
        super(message, name, stack);
        this.statusCode = 404;
    }

    onError() {
        // something do
    }
}

export class InternalServerError extends CustomError {
    constructor(message, name, stack) {
        super(message, name, stack);
        this.statusCode = 500;
    }

    onError() {
        // something do
    }
}
