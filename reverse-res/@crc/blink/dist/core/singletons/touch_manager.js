"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchManager = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../di");
var base_1 = require("../utils/base");
/**
 * Touch handling. Singleton.
 */
var TouchManager = /** @class */ (function () {
    function TouchManager() {
        /**
         * Which touch events are we currently paying attention to?
         */
        this._touch_identifier = undefined;
        this.TOUCH_MAP = base_1.BrowserFeature.TOUCH_ENABLED ? {
            'mousedown': ['touchstart'],
            'mousemove': ['touchmove'],
            'mouseup': ['touchend', 'touchcancel'],
        } : {};
        /**
         * PID of queued long-press task.
         */
        this._long_pid = 0;
        this.is_touch_event = function (evt) { return evt.type.startsWith('touch'); };
    }
    TouchManager.prototype.long_start = function (e, gesture) {
        this.long_stop();
        // Punt on multitouch events.
        if (e.changedTouches.length != 1) {
            return;
        }
        this._long_pid = window.setTimeout(function () {
            var event = e;
            event.button = 2; // Simulate a right button click.
            // e was a touch event.  It needs to pretend to be a mouse event.
            event.clientX = e.changedTouches[0].clientX;
            event.clientY = e.changedTouches[0].clientY;
            // Let the gesture route the right-click correctly.
            if (gesture) {
                gesture.handle_right_click(event);
            }
        }, this.theme.blink_params.LONGPRESS);
    };
    TouchManager.prototype.long_stop = function () {
        if (this._long_pid) {
            clearTimeout(this._long_pid);
            this._long_pid = 0;
        }
    };
    TouchManager.prototype.clear_touch_identifier = function () {
        this._touch_identifier = undefined;
    };
    TouchManager.prototype.should_handle_event = function (e) {
        return !this.is_mouse_or_touch_event(e) ||
            this.check_touch_identifier(e);
    };
    TouchManager.prototype.get_touch_identifier_from_event = function (e) {
        var identifier = this.is_touch_event(e)
            && e.changedTouches
            && e.changedTouches[0]
            && e.changedTouches[0].identifier;
        return identifier ? identifier : 'mouse';
    };
    TouchManager.prototype.check_touch_identifier = function (e) {
        var identifier = this.get_touch_identifier_from_event(e);
        // if (this.touchIdentifier_ )is insufficient because Android touch
        // identifiers may be zero.
        if (this._touch_identifier != undefined) {
            // We're already tracking some touch/mouse event.  Is this from the same
            // source?
            return this._touch_identifier == identifier;
        }
        if (e.type == 'mousedown' || e.type == 'touchstart') {
            // No identifier set yet, and this is the start of a drag.  Set it and
            // return.
            this._touch_identifier = identifier;
            return true;
        }
        // There was no identifier yet, but this wasn't a start event so we're going
        // to ignore it.  This probably means that another drag finished while this
        // pointer was down.
        return false;
    };
    TouchManager.prototype.set_client_from_touch = function (e) {
        if (this.is_touch_event(e)) {
            // Map the touch event's properties to the event.
            var touch_point = e.changedTouches[0];
            e.clientX = touch_point.clientX;
            e.clientY = touch_point.clientY;
        }
    };
    TouchManager.prototype.is_mouse_or_touch_event = function (e) {
        return e.type.startsWith('touch') ||
            e.type.startsWith('mouse');
    };
    TouchManager.prototype.split_event_by_touches = function (e) {
        var events = [];
        if (this.is_touch_event(e)) {
            for (var i = 0; i < e.changedTouches.length; i++) {
                // TODO:
                // 打断点到这里，直接查看e是正常的，
                // 但执行 Object.assign({}, e) 得到的结果是 {isTrusted:true}，
                // 也就是除了isTrusted以外其他属性都丢失了，因此需要手动补全需要的其他属性。
                // 疑似浏览器bug？
                // 之前js时是直接创建了一个对象放入了需要的属性，但ts下无法通过类型检查。
                var new_event = Object.assign({}, e, {
                    type: e.type,
                    changedTouches: [e.changedTouches[i]],
                    target: e.target,
                    stopPropagation: function () { e.stopPropagation(); },
                    preventDefault: function () {
                        if (e.cancelable == false) {
                            return;
                        }
                        e.preventDefault();
                    },
                });
                events[i] = new_event;
            }
        }
        else {
            events.push(e);
        }
        return events;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.theme)
    ], TouchManager.prototype, "theme", void 0);
    TouchManager = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], TouchManager);
    return TouchManager;
}());
exports.TouchManager = TouchManager;
