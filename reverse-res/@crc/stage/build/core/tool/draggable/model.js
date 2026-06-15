var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import clamp from 'ramda/es/clamp';
import { Container, Texture, Point, utils, } from '../../pixi';
import { RESIZE_THROTTLE, throttle } from '../../utils';
var BaseDraggable = /** @class */ (function (_super) {
    __extends(BaseDraggable, _super);
    function BaseDraggable(id, parent, app, events) {
        var _this = _super.call(this) || this;
        _this.is_draggable = true;
        _this.is_origin_in_center = false;
        _this.drag_start = function (e) {
            if (_this.is_draggable) {
                _this.drag_data = {
                    event_data: e.data,
                    old_pos: e.data.getLocalPosition(_this.parent),
                };
                _this.emit_event('drag_start', undefined);
            }
        };
        _this.drag_move = function () {
            if (_this.is_draggable && _this.drag_data) {
                var drag_pos = _this.drag_data.event_data.getLocalPosition(_this.parent);
                var _a = _this.app.get_app().view, width = _a.width, height = _a.height;
                // 拖拽作用域在舞台范围内
                drag_pos.set(clamp(-width / 2, width / 2, drag_pos.x), clamp(-height / 2, height / 2, drag_pos.y));
                var new_target_pos = new Point(_this.position.x + drag_pos.x - _this.drag_data.old_pos.x, _this.position.y + drag_pos.y - _this.drag_data.old_pos.y);
                _this.drag_data.old_pos = drag_pos;
                // 拖拽组件边缘不离开舞台
                var bounds = _this.getBounds();
                var cmpt_offset = {
                    left: 0,
                    right: -bounds.width,
                    top: 0,
                    bottom: -bounds.height,
                };
                // 如果组件中心点在其质心的话，拖拽范围需要修改
                if (_this.is_origin_in_center) {
                    cmpt_offset.left = bounds.width / 2;
                    cmpt_offset.right = -bounds.width / 2;
                    cmpt_offset.top = bounds.height / 2;
                    cmpt_offset.bottom = -bounds.height / 2;
                }
                var left_pos = -width / 2 + cmpt_offset.left;
                var right_pos = width / 2 + cmpt_offset.right;
                var top_pos = -height / 2 + cmpt_offset.top;
                var bottom_pos = height / 2 + cmpt_offset.bottom;
                // 如果组件宽大于舞台宽度or组件高大于舞台高度，拖拽范围为组件边缘不进入舞台
                new_target_pos.x = clamp(Math.min(left_pos, right_pos), Math.max(left_pos, right_pos), new_target_pos.x);
                new_target_pos.y = clamp(Math.min(top_pos, bottom_pos), Math.max(top_pos, bottom_pos), new_target_pos.y);
                _this.position.set(new_target_pos.x, new_target_pos.y);
                _this.emit_event('change', { position: _this.position });
                _this.emit_event('drag_move', undefined);
                _this.app.render();
            }
        };
        _this.drag_end = function () {
            if (!_this.drag_data)
                return;
            _this.drag_data = undefined;
            _this.app.render();
            _this.is_draggable && _this.emit_event('drag_end', undefined);
        };
        _this.on_break = function (e) {
            if (!e || e === _this.id) {
                _this.drag_data = undefined;
            }
        };
        _this.app = app;
        _this.events = events;
        _this.id = id;
        _this.interactive = true;
        _this.setParent(parent);
        _this.addListener('mousedown', _this.drag_start);
        _this.addListener('mousemove', throttle(_this.drag_move, RESIZE_THROTTLE));
        _this.addListener('mouseup', _this.drag_end);
        _this.addListener('mouseupoutside', _this.drag_end);
        _this.addListener('touchstart', _this.drag_start);
        _this.addListener('touchmove', throttle(_this.drag_move, RESIZE_THROTTLE));
        _this.addListener('touchend', _this.drag_end);
        _this.addListener('touchendoutside', _this.drag_end);
        _this.events.event_emitter.addListener('break', _this.on_break);
        _this.app.get_app().stage.addListener('touchendoutside', _this.drag_end);
        return _this;
    }
    BaseDraggable.prototype.emit_event = function (type, data) {
        this.emit(type, data);
    };
    BaseDraggable.prototype.add_listener = function (type, listener) {
        this.on(type, listener);
    };
    BaseDraggable.prototype.remove_listener = function (type, listener) {
        this.off(type, listener);
    };
    BaseDraggable.prototype.load_texture = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var texture;
            return __generator(this, function (_a) {
                if (url && utils.TextureCache[url]) {
                    return [2 /*return*/, utils.TextureCache[url]];
                }
                if (url && utils.BaseTextureCache[url]) {
                    return [2 /*return*/, new Texture(utils.BaseTextureCache[url])];
                }
                texture = url ? Texture.from(url) : Texture.EMPTY;
                if (texture.valid) {
                    return [2 /*return*/, texture];
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        texture.baseTexture.on('loaded', function () {
                            resolve(texture);
                        });
                        texture.baseTexture.on('update', function () {
                            resolve(texture);
                        });
                        texture.baseTexture.on('error', function (e) {
                            texture.destroy(true);
                            reject(e);
                        });
                    })];
            });
        });
    };
    /**
     * 拖拽小组件的中心点默认在左上角
     * 可选择设置组件中心点在质心
     * 此条件影响拖拽范围的计算
     * @param is_in_center 是否设置在组件中心
     */
    BaseDraggable.prototype.set_origin_in_center = function (is_in_center) {
        this.is_origin_in_center = is_in_center;
    };
    BaseDraggable.prototype.set_draggable = function (draggable) {
        this.is_draggable = draggable;
        this.emit_event('change', { draggable: this.is_draggable });
    };
    BaseDraggable.prototype.set_visible = function (visible) {
        this.visible = visible;
        this.emit_event('change', { visible: this.visible });
    };
    BaseDraggable.prototype.get_draggable = function () {
        return this.is_draggable;
    };
    BaseDraggable.prototype.get_visible = function () {
        return this.visible;
    };
    BaseDraggable.prototype.get_size = function () {
        return {
            width: this.width,
            height: this.height,
        };
    };
    BaseDraggable.prototype.is_dragging = function () {
        return !!this.drag_data;
    };
    BaseDraggable.prototype.destroy = function (options) {
        this.emit_event('destroy', undefined);
        _super.prototype.destroy.call(this, options);
        this.events.event_emitter.removeListener('break', this.on_break);
    };
    return BaseDraggable;
}(Container));
export { BaseDraggable };
//# sourceMappingURL=model.js.map