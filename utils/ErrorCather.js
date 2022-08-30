export default class ErrorCather {
    constructor(stdOutFunc, fileOutFunc, mailOutFunc) {
        this.stdOutFunc = stdOutFunc;
        this.fileOutFunc = fileOutFunc;
        this.mailOut = mailOutFunc;
    }

    async asyncFuncWrapper(asyncFunc) {
        try {
            await asyncFunc();
        } catch (err) {
            console.log(err);
            // 여기서 무언가 분기 처리
        }
    }
}
