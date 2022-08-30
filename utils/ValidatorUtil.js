export default class ValidatorUtil {
    constructor() {}

    email(input) {
        const regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
        return input.test(regex);
    }

    password() {
        let numberExists = false;
        let lowerCaseExists = false;
        let upperCaseExists = false;
        let specialCharExists = false;

        return (
            numberExists &&
            lowerCaseExists &&
            upperCaseExists &&
            specialCharExists
        );
    }
}
