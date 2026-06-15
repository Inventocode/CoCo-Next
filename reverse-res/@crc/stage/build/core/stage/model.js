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
import { injectable, inject } from 'inversify';
import clamp from 'ramda/es/clamp';
import { BaseRenderTexture, Rectangle, RENDERER_TYPE, RenderTexture } from '../pixi';
import { TYPES } from '../di/symbols';
var Stage = /** @class */ (function () {
    function Stage(app, data_factory, textures_factory, scenes_factory, actors_factory, stage_animation_factory, physics_animation_factory, events) {
        this.app = app;
        this.data = data_factory(app);
        this.textures = textures_factory(this.data);
        this.scenes = scenes_factory(app, this.data);
        this.actors = actors_factory(app, this.data);
        this.stage_animation = stage_animation_factory(this.data);
        this.physics = physics_animation_factory(app, this.data);
        this.events = events;
    }
    Stage.prototype.init = function (options) {
        this.app.init(options);
    };
    Stage.prototype.render = function () {
        this.app.render();
    };
    Stage.prototype.start_rendering = function () {
        this.app.get_app().ticker.start();
    };
    Stage.prototype.stop_rendering = function () {
        this.app.get_app().ticker.stop();
    };
    Stage.prototype.get_view = function () {
        return this.app.get_app().view;
    };
    Stage.prototype.get_screenshot = function (opt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.app.get_screenshot(opt).then(resolve).catch(reject);
                    })];
            });
        });
    };
    Stage.prototype.extract_pixels = function (x, y, w, h) {
        var _a = this.get_view(), width = _a.width, height = _a.height;
        var render_texture = new RenderTexture(new BaseRenderTexture({ width: width, height: height }));
        this.app.get_app().renderer.render(this.app.get_app().stage, { renderTexture: render_texture });
        if (this.app.get_renderer_type() === RENDERER_TYPE.WEBGL) {
            render_texture.frame = this.get_render_texture_frame(x, y, w, h);
            return this.app.get_extract_module().pixels(render_texture);
        }
        var canvas = this.app.get_extract_module().canvas(render_texture);
        var ctx = canvas.getContext('2d');
        return ctx ? ctx.getImageData(x, y, w, h).data : undefined;
    };
    Stage.prototype.extract_canvas = function (x, y, w, h) {
        var _a = this.get_view(), width = _a.width, height = _a.height;
        var render_texture = new RenderTexture(new BaseRenderTexture({ width: width, height: height }));
        this.app.get_app().renderer.render(this.app.get_app().stage, { renderTexture: render_texture });
        render_texture.frame = this.get_render_texture_frame(x, y, w, h);
        var canvas = this.app.get_extract_module().canvas(render_texture);
        return canvas;
    };
    Stage.prototype.get_render_texture_frame = function (x, y, w, h) {
        var _a = this.get_view(), width = _a.width, height = _a.height;
        x = clamp(0, width - 1, x);
        w = clamp(1, width - x, w);
        y = clamp(0, height - 1, y);
        h = clamp(1, height - y, h);
        return new Rectangle(x, y, w, h);
    };
    Stage.prototype.resize = function (width, height) {
        this.app.resize(width, height);
    };
    Stage.prototype.set_background_color = function (color) {
        this.app.get_app().renderer.backgroundColor = color;
    };
    Stage.prototype.set_background_alpha = function (alpha) {
        this.app.get_app().renderer.backgroundAlpha = alpha;
    };
    Stage.prototype.add_rendering_update_listener = function (listener) {
        this.app.get_app().ticker.add(listener);
    };
    Stage.prototype.remove_rendering_update_listener = function (listener) {
        this.app.get_app().ticker.remove(listener);
    };
    Stage.prototype.destroy = function () {
        this.data.clear_all_actors_cache();
        this.data.clear_all_scenes_cache();
        this.data.clear_all_sprite_sheet_cache();
        this.data.clear_all_textures_points_cache();
        this.app.destroy();
    };
    Stage = __decorate([
        injectable(),
        __param(0, inject(TYPES.App)),
        __param(1, inject(TYPES.Data)),
        __param(2, inject(TYPES.Textures)),
        __param(3, inject(TYPES.Scenes)),
        __param(4, inject(TYPES.Actors)),
        __param(5, inject(TYPES.StageAnimation)),
        __param(6, inject(TYPES.Physics)),
        __param(7, inject(TYPES.Events)),
        __metadata("design:paramtypes", [Object, Function, Function, Function, Function, Function, Function, Object])
    ], Stage);
    return Stage;
}());
export { Stage };
//# sourceMappingURL=model.js.map