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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import { ErrorMsg } from '../result';
import { SceneWorld } from './scene_world';
var Physics = /** @class */ (function () {
    function Physics(app, data) {
        this.app = app;
        this.data = data;
        this.world_list = new Map();
    }
    Physics.prototype.init = function (debug) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, stage_canvas, canvas_1, Draw, DrawFlags, flags;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!!this.box2d) return [3 /*break*/, 2];
                        _b = this;
                        return [4 /*yield*/, import('@crc/box2d')];
                    case 1:
                        _b.box2d = _c.sent();
                        _c.label = 2;
                    case 2:
                        if (!(debug && !this.debug_draw)) return [3 /*break*/, 4];
                        stage_canvas = this.app.get_app().view;
                        if (!stage_canvas.parentElement)
                            return [2 /*return*/];
                        canvas_1 = document.createElement('canvas');
                        canvas_1.width = stage_canvas.width;
                        canvas_1.height = stage_canvas.height;
                        canvas_1.style.width = stage_canvas.style.width;
                        canvas_1.style.height = stage_canvas.style.height;
                        canvas_1.style.position = 'absolute';
                        canvas_1.style.top = '0';
                        canvas_1.style.left = '0';
                        canvas_1.style.pointerEvents = 'none';
                        stage_canvas.parentElement.appendChild(canvas_1);
                        return [4 /*yield*/, import('./debug_draw')];
                    case 3:
                        Draw = (_c.sent()).DebugDraw;
                        this.debug_draw = new Draw(canvas_1);
                        DrawFlags = this.box2d.DrawFlags;
                        flags = DrawFlags.e_none;
                        flags |= DrawFlags.e_shapeBit; // draw body shapes
                        flags |= DrawFlags.e_particleBit; // draw particles
                        // flags |= DrawFlags.e_particleTriadBit; // draw triangles inside particle groups
                        (_a = this.debug_draw) === null || _a === void 0 ? void 0 : _a.SetFlags(flags);
                        this.draw_handler = function (dt) {
                            var _a, _b, _c;
                            (_b = (_a = _this.debug_draw) === null || _a === void 0 ? void 0 : _a.m_ctx) === null || _b === void 0 ? void 0 : _b.clearRect(0, 0, canvas_1.width, canvas_1.height);
                            dt && ((_c = _this.latest_world) === null || _c === void 0 ? void 0 : _c.world.DebugDraw());
                        };
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Physics.prototype.create_world = function (scene_id, gravity) {
        var scene = this.data.get_internal_scene(scene_id);
        if (!this.box2d || !scene) {
            return;
        }
        var world = new SceneWorld(this.app, this.data, scene, this.box2d, gravity);
        if (this.debug_draw) {
            world.world.SetDebugDraw(this.debug_draw);
            if (this.world_list.size === 0 && this.draw_handler) {
                this.app.get_app().ticker.add(this.draw_handler);
            }
        }
        this.world_list.set(scene_id, world);
        this.latest_world = world;
        return world;
    };
    Physics.prototype.destroy_world = function (scene_id) {
        var _a;
        var world = this.world_list.get(scene_id);
        if (!world) {
            return new ErrorMsg("Can not find world with id " + scene_id);
        }
        this.world_list.delete(scene_id);
        world.destroy();
        if (this.latest_world === world) {
            this.latest_world = undefined;
        }
        if (this.draw_handler && this.world_list.size === 0) {
            this.app.get_app().ticker.remove(this.draw_handler);
            (_a = this.draw_handler) === null || _a === void 0 ? void 0 : _a.call(this, 0);
        }
        return;
    };
    Physics.prototype.destroy_all_worlds = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.world_list.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                this.destroy_world(id);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Physics.prototype.get_world = function (scene_id) {
        var world = this.world_list.get(scene_id);
        this.latest_world = world || this.latest_world;
        return world;
    };
    return Physics;
}());
export { Physics };
//# sourceMappingURL=model.js.map