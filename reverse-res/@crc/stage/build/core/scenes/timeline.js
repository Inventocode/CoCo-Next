import { CURVE_TYPE } from '../di/interfaces/scenes';
import { TwistFilter } from '../pixi';
import { ease_out_bounce, ease_out_quad } from '../utils/bezier_curve';
var ATTRIBUTES;
(function (ATTRIBUTES) {
    ATTRIBUTES[ATTRIBUTES["X"] = 0] = "X";
    ATTRIBUTES[ATTRIBUTES["Y"] = 1] = "Y";
    ATTRIBUTES[ATTRIBUTES["ALPHA"] = 2] = "ALPHA";
    ATTRIBUTES[ATTRIBUTES["ANGLE"] = 3] = "ANGLE";
})(ATTRIBUTES || (ATTRIBUTES = {}));
var Timeline = /** @class */ (function () {
    function Timeline(app) {
        this.handler_cache = new Set();
        this.app = app;
    }
    Timeline.prototype.update_attributes = function (target, to_value, attr_type) {
        var original_value;
        var vector;
        if (!(target instanceof TwistFilter)) {
            switch (attr_type) {
                case ATTRIBUTES.X:
                    vector = to_value - target.x;
                    original_value = target.x;
                    return function (completion) {
                        target.position.set(original_value + (vector * completion), target.position.y);
                    };
                case ATTRIBUTES.Y:
                    vector = to_value - target.y;
                    original_value = target.y;
                    return function (completion) {
                        target.position.set(target.position.x, original_value + (vector * completion));
                    };
                case ATTRIBUTES.ALPHA:
                    vector = to_value - target.alpha;
                    original_value = target.alpha;
                    return function (completion) {
                        target.alpha = original_value + (vector * completion);
                    };
            }
            ;
        }
        ;
        if (attr_type === ATTRIBUTES.ANGLE) {
            vector = to_value - target.angle;
            original_value = target.angle;
            return function (completion) {
                target.angle = original_value + (vector * completion);
            };
        }
        ;
        return;
    };
    Timeline.prototype.create_tween = function (tween_opt) {
        var _this = this;
        var _a;
        var target = tween_opt.target; // 目标对象
        var duration = tween_opt.duration * 1000; // 转成毫秒
        var start_time = performance.now(); // 时间戳
        var ease = ((_a = tween_opt.to_options) === null || _a === void 0 ? void 0 : _a.ease) || CURVE_TYPE.QUAD;
        var to_options = tween_opt.to_options;
        var delay = tween_opt.delay ? tween_opt.delay * 1000 : 0;
        var ease_transform;
        switch (ease) {
            case CURVE_TYPE.QUAD:
                ease_transform = ease_out_quad;
                break;
            case CURVE_TYPE.BOUNCE:
                ease_transform = ease_out_bounce;
                break;
        }
        var update_handler = {};
        if (!(target instanceof TwistFilter)) {
            (to_options.x !== undefined) && (to_options.x - target.position.x) !== 0 &&
                (update_handler.update_x = this.update_attributes(target, to_options.x, ATTRIBUTES.X));
            (to_options.y !== undefined) && (to_options.y - target.position.y) !== 0 &&
                (update_handler.update_y = this.update_attributes(target, to_options.y, ATTRIBUTES.Y));
            (to_options.visible !== undefined) && (target.visible = to_options.visible);
            (to_options.alpha !== undefined) &&
                (update_handler.update_alpha = this.update_attributes(target, to_options.alpha, ATTRIBUTES.ALPHA));
        }
        (to_options.angle !== undefined) &&
            (update_handler.update_angle = this.update_attributes(target, to_options.angle, ATTRIBUTES.ANGLE));
        var handler = function () {
            var timer = performance.now();
            if (delay > 0 && (start_time + delay > timer))
                return;
            var t = (timer - start_time - delay) / duration;
            var transform_data = ease_transform(t);
            if (t > 1) {
                _this.update_target(update_handler, transform_data);
                _this.remove_ticker(handler);
                return;
            }
            ;
            _this.update_target(update_handler, transform_data);
        };
        this.handler_cache.add(handler);
        this.app.get_app().ticker.add(handler);
    };
    Timeline.prototype.update_target = function (handler, transform_data) {
        handler.update_x && handler.update_x(transform_data);
        handler.update_y && handler.update_y(transform_data);
        handler.update_alpha && handler.update_alpha(transform_data);
        handler.update_angle && handler.update_angle(transform_data);
    };
    Timeline.prototype.to = function (target, duration, to_options, delay) {
        this.create_tween({
            target: target,
            duration: duration,
            to_options: to_options,
            delay: delay,
        });
        return this;
    };
    Timeline.prototype.from = function (target, duration, from_options, delay) {
        var to_options = {
            angle: target.angle,
        };
        if (!(target instanceof TwistFilter)) {
            to_options.x = target.position.x;
            to_options.y = target.position.x;
            to_options.visible = target.visible;
            to_options.alpha = target.alpha;
        }
        this.set_target_initial_state(target, from_options);
        this.create_tween({
            target: target,
            duration: duration,
            to_options: to_options,
            delay: delay,
        });
        return this;
    };
    Timeline.prototype.from_to = function (target, duration, from_options, to_options, delay) {
        this.set_target_initial_state(target, from_options);
        this.create_tween({
            target: target,
            duration: duration,
            to_options: to_options,
            delay: delay,
        });
        return this;
    };
    Timeline.prototype.set_target_initial_state = function (target, initial_state) {
        if (!(target instanceof TwistFilter)) {
            initial_state.x !== undefined && (target.position.x = initial_state.x);
            initial_state.y !== undefined && (target.position.y = initial_state.y);
            initial_state.alpha !== undefined && (target.alpha = initial_state.alpha);
            initial_state.visible !== undefined && (target.visible = initial_state.visible);
        }
        initial_state.angle !== undefined && (target.angle = initial_state.angle);
    };
    Timeline.prototype.set_complete_handler = function (on_complete) {
        this.on_complete = on_complete;
    };
    Timeline.prototype.get_cache_size = function () {
        return this.handler_cache.size;
    };
    Timeline.prototype.clear = function () {
        var _this = this;
        this.handler_cache.forEach(function (handler) {
            _this.app.get_app().ticker.remove(handler);
        });
        this.handler_cache.clear();
        this.on_complete = undefined;
    };
    Timeline.prototype.remove_ticker = function (handler) {
        this.app.get_app().ticker.remove(handler);
        this.handler_cache.delete(handler);
        if (this.handler_cache.size === 0) {
            this.on_complete && this.on_complete();
            this.on_complete = undefined;
        }
    };
    return Timeline;
}());
export { Timeline };
;
//# sourceMappingURL=timeline.js.map