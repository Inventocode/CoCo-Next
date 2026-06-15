var Result = /** @class */ (function () {
    function Result(value) {
        this.value = value;
    }
    Result.prototype.is_error = function (value) {
        return value && value.type === 'error_msg';
    };
    Result.error = function (msg) {
        return new Result(new ErrorMsg(msg));
    };
    Result.success = function (value) {
        return new Result(value);
    };
    return Result;
}());
export { Result };
var ErrorMsg = /** @class */ (function () {
    function ErrorMsg(msg) {
        this.error = {
            message: '',
        };
        this.type = 'error_msg';
        this.error.message = msg;
        ErrorMsg.log_enabled && console.error(msg);
    }
    /**
     * 设置是否开启控制台打印
     * @param is_enabled 是否开启控制台打印
     */
    ErrorMsg.set_log_enabled = function (is_enabled) {
        this.log_enabled = is_enabled;
    };
    /**
     * 是否开启控制台打印
     */
    ErrorMsg.log_enabled = false;
    return ErrorMsg;
}());
export { ErrorMsg };
//# sourceMappingURL=result.js.map