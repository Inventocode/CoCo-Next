"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerHandler = void 0;
/**
 * 用于判断当前的 Timer 队列是否为空
 * 不为空的时候禁用 Blink 的撤销重做功能
 *
 * @export
 * @class TimerHandler
 */
var TimerHandler = /** @class */ (function () {
    function TimerHandler() {
        this.timers = [];
        this.override_timer();
    }
    TimerHandler.prototype.push = function (timer) {
        this.timers.push(timer);
    };
    TimerHandler.prototype.pop = function (timer) {
        var index = this.timers.findIndex(function (item) { return item === timer; });
        if (index >= 0) {
            this.timers.splice(index, 1);
        }
    };
    TimerHandler.prototype.is_empty = function () {
        return this.timers.length === 0;
    };
    TimerHandler.prototype.override_timer = function () {
        var _this = this;
        var set_timeout = window.setTimeout.bind(window);
        window.setTimeout = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var timer = set_timeout.apply(window, args);
            var delay = args[1], is_clear = args[2];
            if (!is_clear) {
                _this.push(timer);
            }
            set_timeout(function () { _this.pop(timer); }, delay, true);
            return timer;
        });
        var clear_timerout = window.clearTimeout.bind(window);
        window.clearTimeout = (function (timer) {
            clear_timerout(timer);
            if (typeof timer === 'number') {
                _this.pop(timer);
            }
        });
    };
    TimerHandler.prototype.show = function () {
        console.log(this.timers);
    };
    return TimerHandler;
}());
exports.TimerHandler = TimerHandler;
