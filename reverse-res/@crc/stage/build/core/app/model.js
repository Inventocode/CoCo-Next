var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
import { Manager, Swipe, DIRECTION_ALL } from 'hammerjs';
import { injectable, inject } from 'inversify';
import { Container, Application, Rectangle } from '../pixi';
import { TYPES } from '../di/symbols';
import { is_touch_event } from '../utils';
import { ErrorMsg } from '../result';
/**
 * 舞台最底层容器相关
 * 在Stage系列库中内部使用，不暴露给业务方
 */
var App = /** @class */ (function () {
    function App(events) {
        var _this = this;
        this.mouse_down_time = 0;
        this.cancel_multi_touch = false;
        this.on_stage_swipe = function (e) {
            var stage = _this.get_app().stage;
            stage.name && _this.events.fire('stage:swipe', {
                target_id: stage.name,
                data: e,
            });
        };
        this.events = events;
    }
    App.prototype.init = function (opt) {
        var _this = this;
        if (this.app) {
            console.warn('Application cannot be reinitialized.');
            return;
        }
        this.app = new Application(opt.renderer);
        this.app.stage.name = opt.id ? opt.id : 'stage';
        this.cancel_multi_touch = opt.cancel_multi_touch === undefined ? false : opt.cancel_multi_touch;
        /**
         * 设置舞台坐标。由原本的左上角为(0, 0)点，变为中心点为(0, 0)点
         * 如图
         * 以前:
         * |------------->
         * |
         * |
         * |
         * |
         * \/
         *
         * 现在:
         *         |
         *         |
         *         |
         * --------|-------->
         *         |
         *         |
         *         \/
         *
         * 但是真正想实现的视觉坐标效果是:
         *         /\
         *         |
         *         |
         * --------|--------->
         *         |
         *         |
         *         |
         * 因此，惊天巨坑出现。y轴是反的。这里在stage库中处理所有相反的效果，业务方无感知正常使用视觉坐标。
         */
        this.app.stage.pivot.set(-this.app.renderer.width / 2, -this.app.renderer.height / 2);
        this.app.stage.interactive = true;
        this.app.stage.hitArea = new Rectangle(-this.app.renderer.width / 2, -this.app.renderer.height / 2, this.app.renderer.width, this.app.renderer.height);
        this.app.ticker.autoStart = false;
        this.app.ticker.stop();
        this.scene_container = new Container();
        this.scene_container.name = 'scenes';
        this.scene_container.interactive = true;
        this.app.stage.addChild(this.scene_container);
        /**
         * 手势事件管理，未来可拓展多指操作
         * 暂时只有手势滑动事件
         */
        var hammer = new Manager(this.app.view, {
            recognizers: [
                [Swipe, { direction: DIRECTION_ALL }],
            ],
        });
        hammer.on('swipe', this.on_stage_swipe);
        this.app.stage.addListener('mousedown', function (e) { return _this.emit_mouse_event(e, 'stage:mousedown'); });
        this.app.stage.addListener('mousemove', function (e) { return _this.emit_mouse_event(e, 'stage:mousemove'); });
        this.app.stage.addListener('mouseup', function (e) { return _this.emit_mouse_event(e, 'stage:mouseup'); });
        this.app.stage.addListener('mouseupoutside', function (e) { return _this.emit_mouse_event(e, 'stage:mouseupoutside'); });
        this.app.stage.addListener('touchstart', function (e) { return _this.emit_mouse_event(e, 'stage:touchstart'); });
        this.app.stage.addListener('touchmove', function (e) { return _this.emit_mouse_event(e, 'stage:touchmove'); });
        this.app.stage.addListener('touchend', function (e) { return _this.emit_mouse_event(e, 'stage:touchend'); });
        this.app.stage.addListener('touchendoutside', function (e) { return _this.emit_mouse_event(e, 'stage:touchendoutside'); });
        this.app.stage.addListener('rightclick', function (e) { return _this.emit_mouse_event(e, 'stage:rightclick'); });
        if (opt.development) {
            ErrorMsg.set_log_enabled(true);
        }
    };
    App.prototype.get_app = function () {
        if (!this.app) {
            throw new Error('Application needs init before using.');
        }
        return this.app;
    };
    App.prototype.get_scene_container = function () {
        if (!this.scene_container) {
            throw new Error('Scene container needs init before using.');
        }
        return this.scene_container;
    };
    App.prototype.render = function () {
        !this.get_app().ticker.started && this.get_app().render();
    };
    App.prototype.get_renderer_type = function () {
        return this.get_app().renderer.type;
    };
    App.prototype.get_interaction_manager = function () {
        return this.get_app().renderer.plugins.interaction;
    };
    App.prototype.get_extract_module = function () {
        return this.get_app().renderer.plugins.extract;
    };
    App.prototype.screenshot = function (opt) {
        return __awaiter(this, void 0, void 0, function () {
            var SCALE, MIME_TYPE, QUALITY, _a, width, height, temp_canvas, context, w, h, img;
            return __generator(this, function (_b) {
                SCALE = opt && opt.scale !== undefined ? opt.scale : 0.5;
                MIME_TYPE = opt && opt.type;
                QUALITY = opt && opt.quality !== undefined ? opt.quality : 1;
                _a = this.get_app().view, width = _a.width, height = _a.height;
                temp_canvas = document.createElement('canvas');
                context = temp_canvas.getContext('2d');
                w = width * SCALE;
                h = height * SCALE;
                temp_canvas.width = w;
                temp_canvas.height = h;
                img = new Image();
                img.src = this.get_app().view.toDataURL(MIME_TYPE, QUALITY);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        img.onload = function () {
                            if (context) {
                                context.drawImage(img, 0, 0, w, h);
                                if (opt && opt.handstand) {
                                    // TODO Adapt more browser
                                    // Safari flip the screen shot
                                    // Update pixi and check whether is canvas or webgl maybe fix it
                                    context.clearRect(0, 0, w, h);
                                    context.translate(w / 2, h / 2);
                                    context.rotate(Math.PI);
                                    context.translate(-w / 2, -h / 2);
                                    context.scale(-1, 1);
                                    context.drawImage(img, 0, 0, -w, h);
                                }
                                var url = temp_canvas.toDataURL(MIME_TYPE, QUALITY);
                                resolve(url);
                            }
                        };
                        img.onerror = function (e) {
                            reject(e);
                        };
                    })];
            });
        });
    };
    App.prototype.get_screenshot = function (opt) {
        return __awaiter(this, void 0, void 0, function () {
            var renderer;
            var _this = this;
            return __generator(this, function (_a) {
                renderer = this.get_app().renderer;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        renderer.once('postrender', function () {
                            _this.screenshot(opt).then(function (res) { return resolve(res); }).catch(function (e) { return reject(e); });
                        });
                        renderer.render(_this.get_app().stage);
                    })];
            });
        });
    };
    App.prototype.resize = function (width, height) {
        var _a = this.get_app(), stage = _a.stage, renderer = _a.renderer;
        stage.pivot.set(-width / 2, -height / 2);
        stage.hitArea = new Rectangle(-width / 2, -height / 2, width, height);
        renderer.resize(width, height);
        stage.name && this.events.fire('stage:resize', {
            target_id: stage.name,
            data: {
                width: width,
                height: height,
            },
        });
    };
    App.prototype.destroy = function () {
        this.get_app().destroy(true, true);
        this.app = undefined;
    };
    App.prototype.emit_mouse_event = function (e, event) {
        var stage = this.get_app().stage;
        var _a = e.data.getLocalPosition(stage), x = _a.x, y = _a.y;
        switch (event) {
            case 'stage:mousedown':
            case 'stage:touchstart':
                this.mouse_down_time = new Date().getTime();
                break;
            case 'stage:mouseup':
            case 'stage:touchend':
                if (new Date().getTime() - this.mouse_down_time < 1000) {
                    stage.name && this.events.fire('stage:click', {
                        target_id: stage.name,
                        data: {
                            position: {
                                x: x,
                                y: -y,
                            },
                        },
                    });
                }
                break;
            default:
                break;
        }
        stage.name && this.events.fire(event, {
            target_id: stage.name,
            data: {
                position: {
                    x: x,
                    y: -y,
                },
            },
        });
        if (this.cancel_multi_touch) {
            var origin_event = e.data.originalEvent;
            if (is_touch_event(origin_event) && origin_event.touches.length > 1) {
                this.events.emit_break_event();
            }
        }
    };
    App = __decorate([
        injectable(),
        __param(0, inject(TYPES.Events)),
        __metadata("design:paramtypes", [Object])
    ], App);
    return App;
}());
export { App };
//# sourceMappingURL=model.js.map