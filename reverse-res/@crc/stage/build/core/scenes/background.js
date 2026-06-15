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
import { TilingSprite } from '../pixi';
import { Adaption, ObjectType, RotationType } from '../di/interfaces/const';
import { mod_rotation } from '../utils';
import { ErrorMsg } from '../result';
var Background = /** @class */ (function (_super) {
    __extends(Background, _super);
    function Background(texture, texture_id, width, height, emit_scene_event, app, data, events, id) {
        var _this = _super.call(this, texture, width, height) || this;
        _this.type = ObjectType.Background;
        _this.rotation_type = RotationType.ALL;
        _this.rotation_value = 0;
        _this.is_horizontal_flipped = false;
        _this.is_vertical_flipped = false;
        _this.is_rotation_flipped = false;
        /**
         * 记录background中心点数据偏移量。
         * TilingSprite操作的是tileTransform。默认中心点是左上角。
         * 需要通过修改pivot和position的相对位置来调整中心点，使中心点默认和舞台中心点重合，更符合业务需求。
         */
        _this.transform_offset = {
            pivot: { x: 0, y: 0 },
            position: { x: 0, y: 0 },
        };
        /**
         * 业务方需要的额外偏移的中心点
         * TilingSprite默认中心点在左上角
         * 按照统一坐标系规定需要将中心点移至texture质心，这个偏移量本库静默计算
         * 业务方需要基于texture质心再偏移的中心点为custom_pivot
         */
        _this.custom_pivot = {
            x: 0,
            y: 0,
        };
        /**
         * 背景图片适配需要的scale数值
         * 根据adaption进行适配
         * 默认为1，即不适配不变化
         */
        _this.adaptive_scale = {
            x: 1,
            y: 1,
        };
        /**
         * 记录实际上背景图片的平铺位移
         * 传给tileTransform.position的其实是”取余“后的位移
         * See: https://www.tapd.cn/34474075/bugtrace/bugs/view?bug_id=1134474075001051094 方案二
         */
        _this.transform_position = {
            x: 0,
            y: 0,
        };
        _this.on_resize = function (e) {
            if (e.target_id !== _this.app.get_app().stage.name) {
                return;
            }
            _this.width = e.data.width;
            _this.height = e.data.height;
        };
        _this.id = id;
        _this.name = id;
        _this.texture_id = texture_id;
        _this.anchor.set(0.5);
        _this.interactive = true;
        _this.emit_scene_event = emit_scene_event;
        _this.app = app;
        _this.data = data;
        _this.events = events;
        _this.events.add_listener('stage:resize', _this.on_resize);
        return _this;
    }
    Background.prototype.set_position = function (x, y) {
        this.update_pixi_position(x, y);
        this.emit_scene_event('change', {
            position: this.transform_position,
        });
    };
    Background.prototype.set_position_x = function (x) {
        var y = this.get_position().y;
        this.set_position(x, y);
    };
    Background.prototype.set_position_y = function (y) {
        var x = this.get_position().x;
        this.set_position(x, y);
    };
    Background.prototype.move_forward = function (distance) {
        var origin_position = this.get_position();
        var rotation_value = this.get_rotation();
        var x = origin_position.x + Math.cos(rotation_value) * distance;
        var y = origin_position.y + Math.sin(rotation_value) * distance;
        this.set_position(x, y);
    };
    Background.prototype.get_position = function () {
        var offset = this.transform_offset.position;
        return {
            x: this.transform_position.x - offset.x,
            y: -this.transform_position.y + offset.y,
        };
    };
    Background.prototype.set_scale = function (x, y) {
        /**
         * 数值处理遵守两个原则：
         * 1. 限制有效数值范围在[0, Infinity]。
         * 2. 不修改scale的正负性，所以需要参照之前的scale正负性来做判定。
         * 但有特殊情况，scale为0的时候，会丢失正负性，这时：
         * scale.x需要综合“外观左右翻转”和“旋转模式的左右翻转以及角度”来判定正负性。
         * scale.y需要根据“外观上下翻转”来判定正负性。
         */
        var new_x = x;
        if (new_x !== undefined) {
            new_x = Math.max(0, new_x);
            new_x = this.is_rotation_flipped !== this.is_vertical_flipped ? new_x * -1 : new_x;
        }
        var new_y = y === undefined ? x : y;
        if (new_y !== undefined) {
            new_y = Math.max(0, new_y);
            new_y = this.is_horizontal_flipped ? new_y * -1 : new_y;
        }
        this.set_pixi_scale(new_x, new_y);
    };
    Background.prototype.get_scale = function () {
        var _a = this.get_pixi_scale(), x = _a.x, y = _a.y;
        return {
            x: Math.abs(x),
            y: Math.abs(y),
        };
    };
    Background.prototype.set_rotation = function (rotation) {
        var mod_rotation_value = mod_rotation(rotation);
        this.rotation_value = mod_rotation_value;
        var is_in_opposite_range = false;
        var to_flip = false;
        switch (this.rotation_type) {
            case RotationType.ALL:
                /**
                 * codemao业务的旋转方向与pixi设定相反。
                 * codemao业务以数学坐标轴为准，rotation正数为逆时针旋转。
                 * pixi设定rotation正数为顺时针旋转。
                 * 在此处做正负转换
                 */
                this.set_pixi_rotation(-this.rotation_value);
                to_flip = this.is_rotation_flipped;
                break;
            case RotationType.LEFT_RIGHT:
                this.set_pixi_rotation(0);
                is_in_opposite_range = this.rotation_value >= Math.PI / 2 || this.rotation_value < -Math.PI / 2;
                to_flip = is_in_opposite_range !== this.is_rotation_flipped;
                break;
            case RotationType.NONE:
                this.set_pixi_rotation(0);
                to_flip = this.is_rotation_flipped;
                break;
        }
        if (to_flip) {
            var _a = this.get_pixi_scale(), x = _a.x, y = _a.y;
            this.is_rotation_flipped = !this.is_rotation_flipped;
            this.set_pixi_scale(x * -1, y);
        }
    };
    Background.prototype.set_flipped = function (direction) {
        var _a = this.get_pixi_scale(), x = _a.x, y = _a.y;
        switch (direction) {
            case 'vertical':
                this.set_pixi_scale(x * -1, y);
                this.is_vertical_flipped = !this.is_vertical_flipped;
                return;
            case 'horizontal':
                this.set_pixi_scale(x, y * -1);
                this.is_horizontal_flipped = !this.is_horizontal_flipped;
                return;
        }
    };
    Background.prototype.set_rotation_type = function (type) {
        this.rotation_type = type;
        this.set_rotation(this.rotation_value);
    };
    Background.prototype.set_visible = function (visible) {
        this.visible = visible;
        this.emit_scene_event('change', { visible: this.visible });
    };
    Background.prototype.set_alpha = function (alpha) {
        this.alpha = alpha;
        this.emit_scene_event('change', { alpha: this.alpha });
    };
    Background.prototype.get_rotation = function () {
        return this.rotation_value;
    };
    ;
    Background.prototype.get_rotation_type = function () {
        return this.rotation_type;
    };
    Background.prototype.get_visible = function () {
        return this.visible;
    };
    Background.prototype.get_alpha = function () {
        return this.alpha;
    };
    Background.prototype.get_texture_id = function () {
        return this.texture_id;
    };
    Background.prototype.get_vertical_flipped = function () {
        return this.is_vertical_flipped;
    };
    Background.prototype.get_horizontal_flipped = function () {
        return this.is_horizontal_flipped;
    };
    Background.prototype.set_texture = function (texture_id, opt) {
        var texture = this.data.get_texture(texture_id);
        if (!texture) {
            return new ErrorMsg("Cannot find texture " + texture_id + ". Please load texture first");
        }
        this.texture = texture;
        this.texture_id = texture_id;
        if (opt) {
            opt.pivot && (this.custom_pivot = opt.pivot);
            opt.adaption !== undefined && (this.adaption = opt.adaption);
        }
        this.on_texture_updated();
        return;
    };
    /**
     * 根据adaption决定适配模式
     * 如果adaption是undefined则不做适配
     */
    Background.prototype.update_adaptive_scale = function () {
        if (this.adaption) {
            var _a = this.app.get_app().view, width = _a.width, height = _a.height;
            var scale_x = width / this.texture.width;
            var scale_y = height / this.texture.height;
            var scale = void 0;
            switch (this.adaption) {
                case Adaption.CONTAIN:
                    scale = Math.min(scale_x, scale_y);
                    this.adaptive_scale = { x: scale, y: scale };
                    this.width = this.texture.width * this.adaptive_scale.x;
                    this.height = this.texture.height * this.adaptive_scale.y;
                    this.transform_offset.position = { x: this.width / 2, y: this.height / 2 };
                    break;
                case Adaption.COVER:
                    scale = Math.max(scale_x, scale_y);
                    this.adaptive_scale = { x: scale, y: scale };
                    this.width = width;
                    this.height = height;
                    this.transform_offset.position = { x: width / 2, y: height / 2 };
                    break;
                case Adaption.STRETCH:
                    this.adaptive_scale = { x: scale_x, y: scale_y };
                    this.width = width;
                    this.height = height;
                    this.transform_offset.position = { x: width / 2, y: height / 2 };
                    break;
                default:
                    return;
            }
        }
        else {
            this.adaptive_scale = { x: 1, y: 1 };
        }
        this.update_pixi_position();
        this.tileTransform.scale.set(this.adaptive_scale.x, this.adaptive_scale.y);
    };
    Background.prototype.set_adaption_mode = function (adaption) {
        if (this.adaption === adaption || !this.data.get_texture(this.texture_id)) {
            return;
        }
        this.adaption = adaption;
        this.on_texture_updated();
    };
    Background.prototype.update_pixi_position = function (x, y) {
        var offset = this.transform_offset.position;
        this.transform_position = {
            x: x ? x + offset.x : offset.x,
            // y轴数据相反，所以做取反处理
            y: y ? -y + offset.y : offset.y,
        };
        // 对位移总数做”取余“处理，在安卓端平铺数值过大会导致背景马赛克化。背景的“中心点”会被限制。
        this.tileTransform.position.set(this.transform_position.x % (this.texture.width * this.adaptive_scale.x), this.transform_position.y % (this.texture.height * this.adaptive_scale.y));
    };
    Background.prototype.destroy = function () {
        this.events.remove_listener('stage:resize', this.on_resize);
        _super.prototype.destroy.call(this);
    };
    return Background;
}(TilingSprite));
var WebglBackground = /** @class */ (function (_super) {
    __extends(WebglBackground, _super);
    function WebglBackground(texture, texture_id, width, height, emit_scene_event, app, data, events, id) {
        var _this = _super.call(this, texture, texture_id, width, height, emit_scene_event, app, data, events, id) || this;
        _this.update_transform = function (e) {
            _this.transform_offset.position = {
                x: e.width / 2,
                y: e.height / 2,
            };
            _this.update_pixi_position();
            _this.update_transform_pivot();
            _this.update_adaptive_scale();
        };
        _this.on_stage_resize = function (e) {
            if (e.target_id !== _this.app.get_app().stage.name) {
                return;
            }
            _this.update_transform(e.data);
        };
        /**
         * tileTransform中心点位置默认为背景角色的左上角。
         * 修改position属性，，使tileTransform中心点和舞台中心重合，并记录为偏移量。
         * 后续修改tileTransform.position（位置）时，基于此偏移量计算坐标。
         */
        var _a = app.get_app().view, stage_width = _a.width, stage_height = _a.height;
        _this.update_transform({ width: stage_width, height: stage_height });
        _this.events.add_listener('stage:resize', _this.on_stage_resize);
        return _this;
    }
    WebglBackground.prototype.set_pixi_rotation = function (rotation) {
        this.tileTransform.rotation = rotation;
        this.emit_scene_event('change', {
            rotation: this.get_pixi_rotation(),
        });
    };
    WebglBackground.prototype.get_pixi_rotation = function () {
        return this.tileTransform.rotation;
    };
    WebglBackground.prototype.set_pixi_scale = function (x, y) {
        // 适配缩放的是tileScale，
        // 设置scale的值时需要将额外的适配副作用加上
        this.tileTransform.scale.set(x === undefined ? undefined : x * this.adaptive_scale.x, y === undefined ? undefined : y * this.adaptive_scale.y);
        this.emit_scene_event('change', {
            scale: this.tileTransform.scale,
        });
    };
    WebglBackground.prototype.get_pixi_scale = function () {
        var _a = this.tileTransform.scale, x = _a.x, y = _a.y;
        // 适配缩放的是tileScale，
        // 获取scale时需要将额外的适配副作用去掉
        return {
            x: x / this.adaptive_scale.x,
            y: y / this.adaptive_scale.y,
        };
    };
    WebglBackground.prototype.on_texture_updated = function () {
        this.update_transform_pivot();
        this.update_adaptive_scale();
    };
    /**
     * 更新tileTransform.pivot，使背景角色的素材维持居中+custom_pivot偏移效果
     */
    WebglBackground.prototype.update_transform_pivot = function () {
        var _a = this.texture, texture_width = _a.width, texture_height = _a.height;
        this.transform_offset.pivot = {
            x: texture_width / 2 + this.custom_pivot.x,
            y: texture_height / 2 + this.custom_pivot.y,
        };
        this.tileTransform.pivot.set(this.transform_offset.pivot.x, this.transform_offset.pivot.y);
    };
    WebglBackground.prototype.destroy = function () {
        this.events.remove_listener('stage:resize', this.on_stage_resize);
        _super.prototype.destroy.call(this);
    };
    return WebglBackground;
}(Background));
export { WebglBackground };
/**
 * CanvasBackground为原先处理Pixi.CanvasRenderer中平铺精灵的bug而存在。
 * 目前该bug已修复，这个类已经没有存在的必要了。暂时保留代码，以防万一。
 */
var CanvasBackground = /** @class */ (function (_super) {
    __extends(CanvasBackground, _super);
    function CanvasBackground(texture, texture_id, width, height, emit_scene_event, app, data, events, id) {
        var _this = _super.call(this, texture, texture_id, width, height, emit_scene_event, app, data, events, id) || this;
        _this.update_transform = function (e) {
            if (e.target_id !== _this.app.get_app().stage.name) {
                return;
            }
            _this.on_texture_updated();
        };
        _this.update_transform_position(0, 0);
        _this.events.add_listener('stage:resize', _this.update_transform);
        return _this;
    }
    CanvasBackground.prototype.set_pixi_rotation = function (rotation) {
        this.rotation = rotation;
        this.emit_scene_event('change', {
            rotation: this.get_pixi_rotation(),
        });
    };
    CanvasBackground.prototype.get_pixi_rotation = function () {
        return this.rotation;
    };
    CanvasBackground.prototype.set_pixi_scale = function (x, y) {
        this.scale.set(x, y);
        this.emit_scene_event('change', {
            scale: this.get_pixi_scale(),
        });
    };
    CanvasBackground.prototype.get_pixi_scale = function () {
        var _a = this.scale, x = _a.x, y = _a.y;
        return { x: x, y: y };
    };
    CanvasBackground.prototype.on_texture_updated = function () {
        /**
         * 记录当前tileTransform.position的位移偏差，也就是更换素材前，背景移动的距离。
         * 在更换素材更新tileTransform.position后，保持相同的背景移动距离
         */
        this.update_adaptive_scale();
        var _a = this.tileTransform.position, x = _a.x, y = _a.y;
        var offset_x = x - this.transform_offset.position.x;
        var offset_y = y - this.transform_offset.position.y;
        this.update_transform_position(offset_x, offset_y);
    };
    /**
     * 更新当前平铺素材的位置，偏移量为0时居中，偏移量不为0时，在居中基础上加偏移量。
     * @param offset_x x轴方向偏移量
     * @param offset_y y轴方向偏移量
     */
    CanvasBackground.prototype.update_transform_position = function (offset_x, offset_y) {
        var _a = this.app.get_app().view, stage_width = _a.width, stage_height = _a.height;
        var _b = this.texture, texture_width = _b.width, texture_height = _b.height;
        /**
         * x轴方向需要往左移，所以为负值，除数取-2
         */
        var x = (texture_width * this.adaptive_scale.x - stage_width) / -2 - this.custom_pivot.x;
        /**
         * y轴方向需要往上移，所以为负值，除数取-2
         */
        var y = (texture_height * this.adaptive_scale.y - stage_height) / -2 - this.custom_pivot.y;
        this.transform_offset.position = { x: x, y: y };
        this.tileTransform.position.set(this.transform_offset.position.x + offset_x, this.transform_offset.position.y + offset_y);
    };
    CanvasBackground.prototype.destroy = function () {
        this.events.remove_listener('stage:resize', this.update_transform);
        _super.prototype.destroy.call(this);
    };
    return CanvasBackground;
}(Background));
export { CanvasBackground };
//# sourceMappingURL=background.js.map