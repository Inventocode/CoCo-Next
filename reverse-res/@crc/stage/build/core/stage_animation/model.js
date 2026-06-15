var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import clone from 'ramda/es/clone';
import includes from 'ramda/es/includes';
import { mod_rotation } from '../utils';
import { TweenVariation } from '../di/interfaces/const';
var StageAnimation = /** @class */ (function () {
    function StageAnimation(data) {
        this.data = data;
    }
    StageAnimation.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = !this.cmao_gsap;
                        if (!_a) return [3 /*break*/, 2];
                        _b = this;
                        return [4 /*yield*/, import('@cmao/gsap')];
                    case 1:
                        _a = (_b.cmao_gsap = _e.sent());
                        _e.label = 2;
                    case 2:
                        _a;
                        _c = !this.cmao_custom_ease;
                        if (!_c) return [3 /*break*/, 4];
                        _d = this;
                        return [4 /*yield*/, import('@cmao/gsap/CustomEase')];
                    case 3:
                        _c = (_d.cmao_custom_ease = _e.sent());
                        _e.label = 4;
                    case 4:
                        _c;
                        if (this.cmao_gsap && this.cmao_custom_ease) {
                            this.cmao_gsap.gsap.registerPlugin(this.cmao_custom_ease.CustomEase);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StageAnimation.prototype.create_ease_function = function (id, data) {
        if (!this.cmao_custom_ease)
            return;
        return this.cmao_custom_ease.CustomEase.create(id, data);
    };
    StageAnimation.prototype.compose_timeline = function (actor_id, timeline_opts, timeline_vars) {
        var _this = this;
        if (!this.cmao_gsap)
            return;
        var target = this.data.get_internal_actor(actor_id);
        if (!target) {
            return;
        }
        var onStart;
        var onUpdate;
        var onComplete;
        if (timeline_vars) {
            onStart = timeline_vars.on_start;
            onUpdate = timeline_vars.on_update;
            onComplete = timeline_vars.on_complete;
        }
        var tl = new this.cmao_gsap.TimelineLite({
            onStart: onStart,
            onUpdate: onUpdate,
            onComplete: onComplete,
        });
        timeline_opts.forEach(function (opt) {
            var tween_opt = opt.tween_opt, timeline_pos = opt.timeline_pos;
            var tw = _this.compose_tween(actor_id, tween_opt);
            tw && tl.add(tw, timeline_pos);
        });
        return tl;
    };
    StageAnimation.prototype.compose_tween = function (actor_id, tween_opt) {
        var target = this.data.get_internal_actor(actor_id);
        if (!this.cmao_gsap)
            return;
        if (!target) {
            return;
        }
        var tween;
        var target_params;
        switch (tween_opt.variation_type) {
            case TweenVariation.TO:
                target_params = this.manufacture_tween_vars(target, [tween_opt.tween_vars]);
                tween = this.cmao_gsap.TweenLite.to(target_params.target, target_params.vars[0]);
                break;
            case TweenVariation.FROM:
                target_params = this.manufacture_tween_vars(target, [tween_opt.tween_vars]);
                tween = this.cmao_gsap.TweenLite.from(target_params.target, target_params.vars[0]);
                break;
            case TweenVariation.FROM_TO:
                target_params = this.manufacture_tween_vars(target, [tween_opt.tween_vars.from, tween_opt.tween_vars.to]);
                tween = this.cmao_gsap.TweenLite.fromTo(target_params.target, target_params.vars[0], target_params.vars[1]);
                break;
        }
        target.on('destroy', function () { return tween.kill(); });
        return tween;
    };
    /**
     * 加工外部传入的动画参数，使其能正确作用于Stage内部的角色或背景。比如消除y轴相反的副作用，rotation的限制等。
     * @param target 动画执行的角色或背景
     * @param tween_vars 动画参数数组
     */
    StageAnimation.prototype.manufacture_tween_vars = function (target, tween_vars) {
        var _this = this;
        /**
         * 初始化一个供gsap更新数据的对象，避免直接更新到sprite中，因为可能需要对数据做处理。
         */
        var tw_targets = {};
        /**
         * 记录加工后的参数配置。
         */
        var tw_vars = [];
        /**
         * 从Hook工厂中获取对应“属性字段”的“初始化Hook”、“更新Hook”以及可能存在的“modifier”。
         */
        var hook_factory_keys = Object.keys(StageAnimation.HOOK_FACTORY);
        tween_vars.forEach(function (vars) {
            var user_on_start = vars.on_start, user_on_update = vars.on_update, user_on_complete = vars.on_complete, omitted_vars = __rest(vars, ["on_start", "on_update", "on_complete"]);
            /**
             * 克隆传入的配置，避免直接修改入参。
             */
            var new_vars = clone(omitted_vars);
            /**
             * 生成一个id用于标记tween。并且生成一个调用tween.invalidate的钩子函数。
             * 作用大致如下：
             * 假设有两个动画A，B。
             * 当执行 A -> B时，我们会希望B是在A执行结果上去继续执行。
             * 而我们为了避免动画直接更新sprite属性（把sprite的position、scale直接作为Tween的target），生成的每个tw_target是独立的。
             * 因此，需要在动画开始时(onStart)，更新下动画的初始数据，调用下invalidate函数让gsap从新计算动画的相关数据。
             * 详见：https://greensock.com/docs/v3/GSAP/Tween/invalidate()
             */
            var id = Math.random().toString();
            new_vars.id = id;
            var invalidated = false;
            if (!_this.cmao_gsap)
                return;
            var cmao_gsap = _this.cmao_gsap;
            var invalidate_tween = function () {
                invalidated = true;
                var animation = cmao_gsap.gsap.getById(id);
                animation && animation.invalidate();
            };
            /**
             * 记录所有需要添加的onStart和onUpdate钩子。
             * modifier则是一个“数据拦截器”，允许我们在gsap实际执行update前，对数据做些处理。
             */
            var on_start_hooks = [];
            var on_update_hooks = [];
            var modifiers = {};
            var keys = Object.keys(omitted_vars);
            hook_factory_keys.forEach(function (hook_key) {
                if (includes(hook_key, keys)) {
                    if (typeof tw_targets[hook_key] === 'undefined') {
                        tw_targets[hook_key] = 0;
                    }
                    var _a = __read(StageAnimation.HOOK_FACTORY[hook_key](target, tw_targets), 3), start_hook = _a[0], update_hook = _a[1], modifier_hook = _a[2];
                    on_start_hooks.push(start_hook);
                    on_update_hooks.push(update_hook);
                    modifier_hook && (modifiers[hook_key] = modifier_hook);
                }
            });
            on_start_hooks.push(invalidate_tween);
            user_on_start && on_start_hooks.push(user_on_start);
            user_on_update && on_update_hooks.push(user_on_update);
            tw_vars.push(__assign(__assign({}, new_vars), { modifiers: modifiers, onStart: function () {
                    on_start_hooks.forEach(function (fn) { return fn(); });
                }, onUpdate: function () {
                    if (!invalidated) {
                        return;
                    }
                    on_update_hooks.forEach(function (fn) { return fn(); });
                }, onComplete: user_on_complete }));
        });
        return {
            target: tw_targets,
            vars: tw_vars,
        };
    };
    StageAnimation.HOOK_FACTORY = {
        position_x: function (target, data) { return [
            function () {
                data.position_x = target.position.x;
            },
            function () {
                var pos_y = target.position.y;
                target.set_pixi_position(data.position_x, pos_y);
            },
        ]; },
        position_y: function (target, data) { return [
            function () {
                data.position_y = -target.position.y;
            },
            function () {
                var pos_x = target.position.x;
                target.set_pixi_position(pos_x, -data.position_y);
            },
        ]; },
        scale_x: function (target, data) { return [
            function () {
                data.scale_x = target.scale.x;
            },
            function () {
                var scale_y = target.scale.y;
                target.set_pixi_scale(data.scale_x, scale_y);
            },
        ]; },
        scale_y: function (target, data) { return [
            function () {
                data.scale_y = target.scale.y;
            },
            function () {
                var scale_x = target.scale.x;
                target.set_pixi_scale(scale_x, data.scale_y);
            },
        ]; },
        rotation: function (target, data) { return [
            function () {
                data.rotation = target.rotation_value;
            },
            function () {
                target.set_rotation(data.rotation);
            },
            function (raw_rotation) { return mod_rotation(raw_rotation); },
        ]; },
        pixi_rotation: function (target, data) { return [
            function () {
                data.pixi_rotation = target.rotation;
            },
            function () {
                target.set_pixi_rotation(data.pixi_rotation);
            },
            function (raw_rotation) { return mod_rotation(raw_rotation); },
        ]; },
        alpha: function (target, data) { return [
            function () {
                data.alpha = target.alpha;
            },
            function () {
                target.set_alpha(data.alpha);
            },
        ]; },
    };
    return StageAnimation;
}());
export { StageAnimation };
//# sourceMappingURL=model.js.map