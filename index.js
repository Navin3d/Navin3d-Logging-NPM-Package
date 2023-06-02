const fs = require("fs");
const process = require("process");

class Logging {

    constructor() {
        this.timeStamp = null;
        const packageJsonPath = './package.json';
        try {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
            this.projectName = packageJson.name;
        } catch (error) {
            this.projectName = "UNKNOWN";
        }
    }

    log(message) {
        this.dateObj = new Date();
        const timeStamp = `${this.dateObj.getFullYear()}-${this.dateObj.getMonth()}-${this.dateObj.getDate()} ${this.dateObj.getHours()}:${this.dateObj.getMinutes()}:${this.dateObj.getSeconds()}:${this.dateObj.getMilliseconds()}`;
        const messageType = `[LOG]`;
        const processId = process.pid;
        let filePath = "FileName";
        var _pst = Error.prepareStackTrace
        Error.prepareStackTrace = function (err, stack) { return stack; };
        try {
            var err = new Error();
            var callerfile;
            var currentfile;
            currentfile = err.stack.shift().getFileName();
            while (err.stack.length) {
                callerfile = err.stack.shift().getFileName();
                if (currentfile !== callerfile) {
                    filePath = callerfile.split("/");
                    break;
                }
            }
        } catch (err) { }
        Error.prepareStackTrace = _pst;
        const fileName = `${filePath[filePath.length - 2]}/${filePath[filePath.length - 1]}`;
        const out = `${timeStamp}  ${messageType} ${processId} ===> [${this.projectName}] ${fileName} : ${message}`;
        console.log(out);
    }

    info(message) {
        this.dateObj = new Date();
        const timeStamp = `${this.dateObj.getFullYear()}-${this.dateObj.getMonth()}-${this.dateObj.getDate()} ${this.dateObj.getHours()}:${this.dateObj.getMinutes()}:${this.dateObj.getSeconds()}:${this.dateObj.getMilliseconds()}`;
        const messageType = `[INFO]`;
        const processId = process.pid;
        let filePath = "FileName";
        var _pst = Error.prepareStackTrace
        Error.prepareStackTrace = function (err, stack) { return stack; };
        try {
            var err = new Error();
            var callerfile;
            var currentfile;
            currentfile = err.stack.shift().getFileName();
            while (err.stack.length) {
                callerfile = err.stack.shift().getFileName();
                if (currentfile !== callerfile) {
                    filePath = callerfile.split("/");
                    break;
                }
            }
        } catch (err) { }
        Error.prepareStackTrace = _pst;
        const fileName = `${filePath[filePath.length - 2]}/${filePath[filePath.length - 1]}`;
        const out = `${timeStamp}  ${messageType} ${processId} ===> [${this.projectName}] ${fileName} : ${message}`;
        console.info(out);
    }

    warn(message) {
        this.dateObj = new Date();
        const timeStamp = `${this.dateObj.getFullYear()}-${this.dateObj.getMonth()}-${this.dateObj.getDate()} ${this.dateObj.getHours()}:${this.dateObj.getMinutes()}:${this.dateObj.getSeconds()}:${this.dateObj.getMilliseconds()}`;
        const messageType = `[WARN]`;
        const processId = process.pid;
        let filePath = "FileName";
        var _pst = Error.prepareStackTrace
        Error.prepareStackTrace = function (err, stack) { return stack; };
        try {
            var err = new Error();
            var callerfile;
            var currentfile;
            currentfile = err.stack.shift().getFileName();
            while (err.stack.length) {
                callerfile = err.stack.shift().getFileName();
                if (currentfile !== callerfile) {
                    filePath = callerfile.split("/");
                    break;
                }
            }
        } catch (err) { }
        Error.prepareStackTrace = _pst;
        const fileName = `${filePath[filePath.length - 2]}/${filePath[filePath.length - 1]}`;
        const out = `${timeStamp}  ${messageType} ${processId} ===> [${this.projectName}] ${fileName} : ${message}`;
        console.warn(out);
    }

    trace(message) {
        this.dateObj = new Date();
        const timeStamp = `${this.dateObj.getFullYear()}-${this.dateObj.getMonth()}-${this.dateObj.getDate()} ${this.dateObj.getHours()}:${this.dateObj.getMinutes()}:${this.dateObj.getSeconds()}:${this.dateObj.getMilliseconds()}`;
        const messageType = `[TRACE]`;
        const processId = process.pid;
        let filePath = "FileName";
        var _pst = Error.prepareStackTrace
        Error.prepareStackTrace = function (err, stack) { return stack; };
        try {
            var err = new Error();
            var callerfile;
            var currentfile;
            currentfile = err.stack.shift().getFileName();
            while (err.stack.length) {
                callerfile = err.stack.shift().getFileName();
                if (currentfile !== callerfile) {
                    filePath = callerfile.split("/");
                    break;
                }
            }
        } catch (err) { }
        Error.prepareStackTrace = _pst;
        const fileName = `${filePath[filePath.length - 2]}/${filePath[filePath.length - 1]}`;
        const out = `${timeStamp}  ${messageType} ${processId} ===> [${this.projectName}] ${fileName} : ${message}`;
        console.trace(out);
    }

    debug(message) {
        this.dateObj = new Date();
        const timeStamp = `${this.dateObj.getFullYear()}-${this.dateObj.getMonth()}-${this.dateObj.getDate()} ${this.dateObj.getHours()}:${this.dateObj.getMinutes()}:${this.dateObj.getSeconds()}:${this.dateObj.getMilliseconds()}`;
        const messageType = `[DEBUG]`;
        const processId = process.pid;
        let filePath = "FileName";
        var _pst = Error.prepareStackTrace
        Error.prepareStackTrace = function (err, stack) { return stack; };
        try {
            var err = new Error();
            var callerfile;
            var currentfile;
            currentfile = err.stack.shift().getFileName();
            while (err.stack.length) {
                callerfile = err.stack.shift().getFileName();
                if (currentfile !== callerfile) {
                    filePath = callerfile.split("/");
                    break;
                }
            }
        } catch (err) { }
        Error.prepareStackTrace = _pst;
        const fileName = `${filePath[filePath.length - 2]}/${filePath[filePath.length - 1]}`;
        const out = `${timeStamp}  ${messageType} ${processId} ===> [${this.projectName}] ${fileName} : ${message}`;
        console.debug(out);
    }

    error(message) {
        this.dateObj = new Date();
        const timeStamp = `${this.dateObj.getFullYear()}-${this.dateObj.getMonth()}-${this.dateObj.getDate()} ${this.dateObj.getHours()}:${this.dateObj.getMinutes()}:${this.dateObj.getSeconds()}:${this.dateObj.getMilliseconds()}`;
        const messageType = `[ERROR]`;
        const processId = process.pid;
        let filePath = "FileName";
        var _pst = Error.prepareStackTrace
        Error.prepareStackTrace = function (err, stack) { return stack; };
        try {
            var err = new Error();
            var callerfile;
            var currentfile;
            currentfile = err.stack.shift().getFileName();
            while (err.stack.length) {
                callerfile = err.stack.shift().getFileName();
                if (currentfile !== callerfile) {
                    filePath = callerfile.split("/");
                    break;
                }
            }
        } catch (err) { }
        Error.prepareStackTrace = _pst;
        const fileName = `${filePath[filePath.length - 2]}/${filePath[filePath.length - 1]}`;
        const out = `${timeStamp}  ${messageType} ${processId} ===> [${this.projectName}] ${fileName} : ${message}`;
        console.error(out);
    }

}

const log = new Logging();
module.exports = log;
