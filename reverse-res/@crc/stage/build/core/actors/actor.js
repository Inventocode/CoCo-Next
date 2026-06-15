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
import clamp from 'ramda/es/clamp';
import clone from 'ramda/es/clone';
import includes from 'ramda/es/includes';
import { Sprite, Texture, Point, RenderTexture, utils, RENDERER_TYPE, BaseRenderTexture, } from '../pixi';
import { ObjectType, RotationType, EdgeBinary } from '../di/interfaces/const';
import { get_actor_center, map_actor_px_to_local_point, map_local_point_to_actor_px, make_rotate, mod_rotation, hex_to_rgb, throttle, RESIZE_THROTTLE, get_collision_optimization_scaled_size, get_screenshot_area_transform_matrix, collision_opti_scaled_to_origin_point, origin_to_collision_opti_scaled_point, } from '../utils';
import { Result, ErrorMsg } from '../result';
import { Effects } from '../effects/model';
import { ActorHitArea } from './hitarea';
import { Brush } from './brush';
import { PixelDetector } from './pixel_detector';
import { ActorWrapper } from './wrapper';
/**
 * 拓展pixi Sprite并且添加Codemao独有数据后的：Actor类
 * 舞台上每个角色是一个Actor实例
 * 该类型不可被暴露至外部
 * 否则可能出现用户直接调用pixi的方法
 * @param init 初始化所需的数据
 */
var Actor = /** @class */ (function (_super) {
    __extends(Actor, _super);
    function Actor(options) {
        var _this = _super.call(this) || this;
        _this.type = ObjectType.Actor;
        _this.rotation_type = RotationType.ALL;
        _this.rotation_value = 0;
        _this.is_vertical_flipped = false;
        _this.is_horizontal_flipped = false;
        _this.is_rotation_flipped = false;
        _this.styles = {};
        _this.is_clone = false;
        /**
         * 最小有效碰撞像素点积累数目
         * 累计超过5个像素点重叠即视为碰撞
         */
        _this.min_points_for_collision = 5;
        _this.mouse_down_time = 0;
        _this.is_draggable = true;
        _this.has_drag_protection = false;
        _this.on_resize = function (e) {
            if (e.target_id !== _this.app.get_app().stage.name) {
                return;
            }
            _this.hitArea = new ActorHitArea(_this, function (pixi_global_pos) { return _this.is_touching(new Point(pixi_global_pos.x - e.data.width / 2, pixi_global_pos.y - e.data.height / 2)); });
        };
        _this.drag_start = function (e) {
            _this.mouse_down_time = new Date().getTime();
            _this.events.fire('actor:selected', {
                target_id: _this.id,
            });
            if (_this.is_draggable) {
                _this.drag_data = {
                    event_data: e.data,
                    old_pos: e.data.getLocalPosition(_this.parent),
                };
                _this.events.fire('actor:drag_start', {
                    target_id: _this.id,
                    data: {
                        position: {
                            x: _this.position.x,
                            y: -_this.position.y,
                        },
                    },
                });
            }
        };
        _this.drag_move = function () {
            if (_this.is_draggable && _this.drag_data) {
                var drag_pos = _this.drag_data.event_data.getLocalPosition(_this.parent);
                var _a = _this.app.get_app().view, width = _a.width, height = _a.height;
                // 拖拽作用域在舞台范围内
                if (drag_pos.x < -width / 2 ||
                    drag_pos.x > width / 2 ||
                    drag_pos.y < -height / 2 ||
                    drag_pos.y > height / 2) {
                    return;
                }
                var new_target_pos = new Point(_this.position.x + drag_pos.x - _this.drag_data.old_pos.x, _this.position.y + drag_pos.y - _this.drag_data.old_pos.y);
                _this.drag_data.old_pos = drag_pos;
                // 开启角色拖拽保护，角色质心不离开舞台。默认为不开启
                if (_this.has_drag_protection) {
                    var protection_value = get_actor_center(_this, new_target_pos);
                    new_target_pos.set(clamp(-width / 2, width / 2, protection_value.x), clamp(-height / 2, height / 2, protection_value.y));
                }
                _this.set_pixi_position(new_target_pos.x, new_target_pos.y);
                _this.app.render();
                _this.events.fire('actor:drag_move', {
                    target_id: _this.id,
                    data: {
                        position: {
                            x: _this.position.x,
                            y: -_this.position.y,
                        },
                    },
                });
                _this.events.fire('actor:update', {
                    target_id: _this.id,
                    data: {
                        position: {
                            x: _this.position.x,
                            y: -_this.position.y,
                        },
                    },
                });
            }
        };
        _this.drag_end = function (e) {
            var current_time = new Date().getTime();
            var is_outside_event = e && includes(e.type, ['touchendoutside', 'mouseupoutside']);
            /**
             * Two conditions for firing click event:
             * 1. Event is not touchendoutside or mouseupoutside.
             * 2. Duration between mousedown/touchstart and mouseup/touchend is less than 1000ms.
             */
            if (!is_outside_event && current_time - _this.mouse_down_time < 1000) {
                _this.events.fire('actor:click', { target_id: _this.id });
            }
            if (!_this.drag_data)
                return;
            _this.drag_data = undefined;
            if (_this.is_draggable) {
                _this.events.fire('actor:drag_end', {
                    target_id: _this.id,
                    data: {
                        position: {
                            x: _this.position.x,
                            y: -_this.position.y,
                        },
                    },
                });
                _this.emit_event('change', {
                    position: _this.position,
                });
                _this.app.render();
            }
        };
        _this.on_break = function (e) {
            if (!e || e === _this.id) {
                _this.drag_data = undefined;
            }
        };
        _this.events = options.events;
        _this.app = options.app;
        _this.data = options.data;
        _this.parent_scene = options.parent_scene;
        _this.id = options.actor_id;
        _this.name = options.actor_id;
        // 默认的Sprite中心点在左上角，设置Sprite中心点在中间
        _this.anchor.set(0.5, 0.5);
        _this.interactive = true;
        _this.wrapper = new ActorWrapper(_this, _this.parent_scene);
        var _a = _this.app.get_app().view, width = _a.width, height = _a.height;
        _this.hitArea = new ActorHitArea(_this, function (pixi_global_pos) { return _this.is_touching(new Point(pixi_global_pos.x - width / 2, pixi_global_pos.y - height / 2)); });
        _this.render_texture = new RenderTexture(new BaseRenderTexture());
        _this.brush = new Brush(_this.app, _this);
        _this.pixel_detector = new PixelDetector(_this, _this.app, _this.data);
        if (_this.app.get_renderer_type() === RENDERER_TYPE.WEBGL) {
            _this.effects = new Effects(_this.app, _this);
        }
        _this.addListener('mousedown', _this.drag_start);
        _this.addListener('mousemove', throttle(_this.drag_move, RESIZE_THROTTLE));
        _this.addListener('mouseup', _this.drag_end);
        _this.addListener('mouseupoutside', _this.drag_end);
        _this.addListener('touchstart', _this.drag_start);
        _this.addListener('touchmove', throttle(_this.drag_move, RESIZE_THROTTLE));
        _this.addListener('touchend', _this.drag_end);
        _this.addListener('touchendoutside', _this.drag_end);
        _this.addListener('mousedown', function () { return _this.emit_mouse_event('actor:mousedown'); });
        _this.addListener('mouseup', function () { return _this.emit_mouse_event('actor:mouseup'); });
        _this.addListener('mouseupoutside', function () { return _this.emit_mouse_event('actor:mouseupoutside'); });
        _this.addListener('mouseover', function () { return _this.emit_mouse_event('actor:mouseover'); });
        _this.addListener('mouseout', function () { return _this.emit_mouse_event('actor:mouseout'); });
        _this.addListener('rightclick', function () { return _this.emit_mouse_event('actor:rightclick'); });
        _this.addListener('touchstart', function () { return _this.emit_mouse_event('actor:touchstart'); });
        _this.addListener('touchend', function () { return _this.emit_mouse_event('actor:touchend'); });
        _this.addListener('touchendoutside', function () { return _this.emit_mouse_event('actor:touchendoutside'); });
        _this.add_listener('change', function (e) {
            // 当角色主动更新自身位置的时候，解除围绕某角色旋转的跟随关系
            if (e.position && _this.current_rotate_around_actor && !_this.current_rotate_around_actor.is_rotating) {
                _this.current_rotate_around_actor = undefined;
            }
        });
        _this.events.event_emitter.addListener('break', _this.on_break);
        _this.events.add_listener('stage:resize', _this.on_resize);
        return _this;
    }
    Actor.prototype.emit_event = function (type, data) {
        this.emit(type, data);
    };
    Actor.prototype.add_listener = function (type, listener) {
        this.on(type, listener);
    };
    Actor.prototype.remove_listener = function (type, listener) {
        this.off(type, listener);
    };
    Actor.prototype.destroy = function () {
        this.emit_event('destroy', undefined);
        this.wrapper.destroy();
        _super.prototype.destroy.call(this, { children: true });
        this.data.clear_actor_cache(this.id);
        this.events.event_emitter.removeListener('break', this.on_break);
        this.events.remove_listener('stage:resize', this.on_resize);
    };
    Actor.prototype.clone = function (new_id) {
        var clone_id = new_id ? new_id : "cloned_" + utils.uid();
        var cloned = new Actor({
            actor_id: clone_id,
            parent_scene: this.parent_scene,
            app: this.app,
            data: this.data,
            events: this.events,
        });
        cloned.styles = clone(this.styles);
        cloned.current_style = clone(this.current_style);
        cloned.texture = this.texture;
        cloned.position.set(this.position.x, this.position.y);
        cloned.scale.set(this.scale.x, this.scale.y);
        cloned.pivot.set(this.pivot.x, this.pivot.y);
        cloned.alpha = this.alpha;
        cloned.visible = this.visible;
        cloned.rotation = this.rotation;
        cloned.rotation_type = this.rotation_type;
        cloned.rotation_value = this.rotation_value;
        cloned.is_draggable = this.is_draggable;
        cloned.has_drag_protection = this.has_drag_protection;
        cloned.is_vertical_flipped = this.is_vertical_flipped;
        cloned.is_horizontal_flipped = this.is_horizontal_flipped;
        cloned.group = this.group;
        cloned.is_clone = true;
        cloned.prototype_actor_id = this.id;
        this.effects && this.effects.clone_to(cloned);
        return cloned;
    };
    Actor.prototype.set_pixi_texture = function (texture) {
        this.texture = texture;
        // 若actor未指定宽高，actor的宽高会自适应texture宽高
        this.emit_event('change', {
            texture: this.texture,
            width: this.width,
            height: this.height,
        });
    };
    Actor.prototype.add_style = function (style) {
        this.styles[style.style_id] = clone(style);
    };
    Actor.prototype.get_style = function (style_id) {
        return clone(this.styles[style_id]);
    };
    Actor.prototype.set_current_style = function (style_id) {
        var style = this.styles[style_id];
        if (!style) {
            return new ErrorMsg("Cannot find style " + style_id + ", You should add style first");
        }
        var texture = this.data.get_texture(style.texture_id);
        if (!texture) {
            return new ErrorMsg("Cannot find texture " + style.texture_id);
        }
        this.current_style = style;
        this.set_pixi_texture(texture);
        this.set_pixi_pivot(style.pivot.x, style.pivot.y);
        return;
    };
    Actor.prototype.update_texture_of_style = function (style_id, texture_id) {
        var style = this.styles[style_id];
        if (!style) {
            return new ErrorMsg("Cannot find style " + style_id + ", You should add style first");
        }
        var texture = this.data.get_texture(texture_id);
        if (!texture) {
            return new ErrorMsg("Cannot find texture " + texture_id);
        }
        style.texture_id = texture_id;
        if (this.current_style && style_id === this.current_style.style_id) {
            this.set_pixi_texture(texture);
        }
        return;
    };
    Actor.prototype.update_pivot_of_style = function (style_id, pivot) {
        var style = this.styles[style_id];
        if (!style) {
            return new ErrorMsg("Cannot find style " + style_id + ", You should add style first");
        }
        style.pivot = clone(pivot);
        if (this.current_style && style_id === this.current_style.style_id) {
            this.set_pixi_pivot(style.pivot.x, style.pivot.y);
        }
        return;
    };
    Actor.prototype.get_current_style = function () {
        return clone(this.current_style);
    };
    Actor.prototype.get_style_ids = function () {
        return Object.keys(this.styles);
    };
    Actor.prototype.remove_style = function (style_id) {
        if (this.current_style && style_id === this.current_style.style_id) {
            this.current_style = undefined;
            this.set_pixi_texture(Texture.EMPTY);
            this.set_pixi_pivot(0, 0);
        }
        delete this.styles[style_id];
    };
    Actor.prototype.set_z_index = function (z_index) {
        var scene_actor_container = this.parent_scene.get_actor_container();
        var new_z_index = clamp(0, scene_actor_container.children.length - 1, z_index);
        scene_actor_container.setChildIndex(this.wrapper, new_z_index);
    };
    ;
    Actor.prototype.set_position_x = function (x) {
        this.set_pixi_position(x, this.position.y);
    };
    Actor.prototype.set_position_y = function (y) {
        this.set_pixi_position(this.position.x, -y); // y轴相反
    };
    Actor.prototype.set_position = function (x, y) {
        this.set_pixi_position(x, y ? -y : y);
    };
    Actor.prototype.set_pixi_position = function (x, y) {
        this.position.set(x, y);
        this.emit_event('change', { position: this.position });
    };
    Actor.prototype.move_forward = function (distance) {
        var x = this.position.x + Math.cos(this.rotation_value) * distance;
        var y = -this.position.y + Math.sin(this.rotation_value) * distance;
        this.set_pixi_position(x, -y);
    };
    Actor.prototype.set_pixi_scale = function (x, y) {
        this.scale.set(x, y);
        this.emit_event('change', {
            width: this.width,
            height: this.height,
            scale: this.scale,
        });
    };
    Actor.prototype.set_scale = function (x, y) {
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
    Actor.prototype.set_alpha = function (alpha) {
        this.alpha = alpha;
        this.emit_event('change', { alpha: this.alpha });
    };
    Actor.prototype.set_visible = function (visible) {
        this.visible = visible;
        this.emit_event('change', { visible: this.visible });
    };
    Actor.prototype.set_pixi_rotation = function (rotation) {
        this.rotation = rotation;
        this.emit_event('change', { rotation: this.rotation });
    };
    Actor.prototype.set_rotation_value = function (rotation_value) {
        this.rotation_value = rotation_value;
    };
    Actor.prototype.set_rotation = function (rotation) {
        var mod_rotation_value = mod_rotation(rotation);
        this.set_rotation_value(mod_rotation_value);
        var is_in_opposite_range = false;
        var new_rotation = 0;
        var to_flip = false;
        switch (this.rotation_type) {
            case RotationType.ALL:
                new_rotation = -mod_rotation_value;
                to_flip = this.is_rotation_flipped;
                break;
            case RotationType.LEFT_RIGHT:
                new_rotation = 0;
                is_in_opposite_range = this.rotation_value >= Math.PI / 2 || this.rotation_value < -Math.PI / 2;
                to_flip = is_in_opposite_range !== this.is_rotation_flipped;
                break;
            case RotationType.NONE:
                new_rotation = 0;
                to_flip = this.is_rotation_flipped;
                break;
        }
        this.set_pixi_rotation(new_rotation);
        if (to_flip) {
            this.is_rotation_flipped = !this.is_rotation_flipped;
            this.set_pixi_scale(this.scale.x * -1, this.scale.y);
        }
    };
    Actor.prototype.set_rotation_type = function (type) {
        this.rotation_type = type;
        this.set_rotation(this.rotation_value);
    };
    Actor.prototype.set_flipped = function (direction) {
        switch (direction) {
            case 'vertical':
                this.set_pixi_scale(this.scale.x * -1, this.scale.y);
                this.is_vertical_flipped = !this.is_vertical_flipped;
                return;
            case 'horizontal':
                this.set_pixi_scale(this.scale.x, this.scale.y * -1);
                this.is_horizontal_flipped = !this.is_horizontal_flipped;
                return;
        }
    };
    Actor.prototype.set_cursor = function (cursor) {
        this.cursor = cursor;
    };
    Actor.prototype.set_group = function (group) {
        this.group = group;
    };
    Actor.prototype.clear_group = function () {
        this.group = undefined;
    };
    Actor.prototype.set_pivot_by_stage_point = function (x, y) {
        var _this = this;
        var local_point = new Point(x, -y);
        // 每个造型更新一遍造型中心点
        Object.keys(this.styles).forEach(function (style_id) {
            var style = _this.styles[style_id];
            var new_style_pivot = _this.map_local_point_to_pivot(local_point, new Point(style.pivot.x, style.pivot.y));
            style.pivot.x = new_style_pivot.x;
            style.pivot.y = new_style_pivot.y;
        });
        // 若当前并未选择某造型，依然需要设置中心点
        // 如果current style为undefined，需要再算一遍当前要设置中心点的值
        var new_pivot = this.current_style ? this.current_style.pivot : this.map_local_point_to_pivot(local_point, this.pivot);
        this.set_pixi_position(x, -y);
        this.set_pixi_pivot(new_pivot.x, new_pivot.y);
    };
    Actor.prototype.reset_pivot = function () {
        var _this = this;
        // 每个造型更新一遍造型中心点
        Object.keys(this.styles).forEach(function (style_id) {
            var style = _this.styles[style_id];
            style.pivot.x = 0;
            style.pivot.y = 0;
        });
        var center = get_actor_center(this, this.position);
        this.set_pixi_position(center.x, center.y);
        this.set_pixi_pivot(0);
    };
    /**
     * 将全局坐标系中的某个点（point），投影到本角色的坐标系中【以角色质心为（0，0）点的坐标系】
     * 并获取该点在该本角色坐标系中的位置（returns）
     * point和returns为：同一个点在不同坐标系上的不同数值体现
     * 该方法用于全局落点转换为角色中心点
     * @param point 以全局为坐标的某个点
     * @param old_pivot 角色旧的中心点
     * @returns 换算后的角色中心点
     */
    Actor.prototype.map_local_point_to_pivot = function (point, old_pivot) {
        var origin_center = new Point(this.position.x - old_pivot.x * this.scale.x, this.position.y - old_pivot.y * this.scale.y);
        // 取得point在角色旋转前的位置
        var origin_point = make_rotate(point, this.position, -this.rotation);
        var x = origin_point.x - origin_center.x;
        var y = origin_point.y - origin_center.y;
        return new Point(x / this.scale.x, y / this.scale.y);
    };
    Actor.prototype.set_pixi_pivot = function (x, y) {
        this.pivot.set(x, y);
        this.emit_event('change', { pivot: this.pivot });
    };
    Actor.prototype.get_position = function () {
        return {
            x: this.position.x,
            y: -this.position.y,
        };
    };
    Actor.prototype.get_center_position = function () {
        var center = get_actor_center(this, this.position);
        return {
            x: center.x,
            y: -center.y,
        };
    };
    Actor.prototype.get_width = function () {
        return this.width;
    };
    Actor.prototype.get_height = function () {
        return this.height;
    };
    Actor.prototype.get_scale = function () {
        return {
            x: Math.abs(this.scale.x),
            y: Math.abs(this.scale.y),
        };
    };
    Actor.prototype.get_alpha = function () {
        return this.alpha;
    };
    Actor.prototype.get_visible = function () {
        return this.visible;
    };
    Actor.prototype.get_rotation = function () {
        return this.rotation_value;
    };
    Actor.prototype.get_rotation_type = function () {
        return this.rotation_type;
    };
    Actor.prototype.get_pixi_rotation = function () {
        return this.rotation;
    };
    Actor.prototype.get_vertical_flipped = function () {
        return this.is_vertical_flipped;
    };
    Actor.prototype.get_horizontal_flipped = function () {
        return this.is_horizontal_flipped;
    };
    Actor.prototype.get_pivot = function () {
        return {
            x: this.pivot.x,
            y: this.pivot.y,
        };
    };
    Actor.prototype.get_group = function () {
        return this.group;
    };
    Actor.prototype.get_z_index = function () {
        return this.parent_scene.get_actor_container()
            .getChildIndex(this.wrapper);
    };
    Actor.prototype.get_parent_scene = function () {
        return this.parent_scene;
    };
    Actor.prototype.get_brush = function () {
        return this.brush;
    };
    Actor.prototype.get_is_clone = function () {
        return this.is_clone;
    };
    Actor.prototype.get_prototype_actor_id = function () {
        return this.prototype_actor_id;
    };
    Actor.prototype.get_effects = function () {
        if (!this.effects) {
            return Result.error('Effect not available. It needs support of WebGL.');
        }
        else {
            return Result.success(this.effects);
        }
    };
    Actor.prototype.set_draggable = function (draggable) {
        this.is_draggable = draggable;
    };
    Actor.prototype.get_draggable = function () {
        return this.is_draggable;
    };
    Actor.prototype.is_dragging = function () {
        return !!this.drag_data;
    };
    Actor.prototype.set_drag_protection = function (protection) {
        this.has_drag_protection = protection;
    };
    Actor.prototype.check_bumped = function (actor_id) {
        var checked_target = this.data.get_internal_actor(actor_id);
        if (!checked_target) {
            return Result.error("Cannot find actor " + actor_id);
        }
        return Result.success(this.check_bumped_other(checked_target));
    };
    Actor.prototype.hit_test = function (x, y) {
        // 业务方y轴数值和stage内部相反
        return this.is_touching(new Point(x, -y));
    };
    Actor.prototype.get_bounds_LTRB = function () {
        var vertices = this.get_vertices();
        // 暴露给业务方的接口，处理了y轴相反的副作用
        return {
            left: vertices.min_x,
            top: -vertices.min_y,
            right: vertices.max_x,
            bottom: -vertices.max_y,
        };
    };
    Actor.prototype.check_bumped_other = function (actor) {
        // 任意角色不可见皆视为没有碰撞
        if (!this.visible || !actor.get_visible()) {
            return false;
        }
        // 任意角色离开舞台皆视为没有碰撞
        if (this.has_left_stage() || actor.has_left_stage()) {
            return false;
        }
        // 跨屏幕间的碰撞皆视为没有碰撞
        if (this.parent_scene.id !== actor.parent_scene.id) {
            return false;
        }
        var box_a = this.get_vertices();
        var box_b = actor.get_vertices();
        // 若两个角色横接矩形边缘未碰到，则为没有碰撞
        var AABB_test = (box_a.min_x < box_b.max_x) &&
            (box_a.max_x > box_b.min_x) &&
            (box_a.min_y < box_b.max_y) &&
            (box_a.max_y > box_b.min_y);
        if (!AABB_test) {
            return false;
        }
        // AB角色相交的矩形
        var bounds = {
            left: Math.round(Math.max(box_a.min_x, box_b.min_x)),
            right: Math.round(Math.min(box_a.max_x, box_b.max_x)),
            top: Math.round(Math.min(box_a.max_y, box_b.max_y)),
            bottom: Math.round(Math.max(box_a.min_y, box_b.min_y)),
        };
        // 检测相交矩形的像素点
        var point = new Point(0, 0);
        var collision_pixels = 0;
        /**
         * 碰撞优化在存储一个素材的像素点颜色信息时，将该素材缩小至原大小的0.7倍再进行存储。
         * 原素材图上的两个点的相对距离在缩放后变小了，点变得密集了。
         * 因此我们可以在检测相交矩形区域的点的时候跳过一些点且不损失过多的精度。
         * 当前优化后的取点间隔为水平方向每2个点检测一次，竖直方向每2个点检测一次。
         */
        var step = 2;
        for (var x = bounds.left; x < bounds.right; x = x + step) {
            point.x = x;
            for (var y = bounds.top; y > bounds.bottom; y = y - step) {
                point.y = y;
                if (this.is_touching(point)) {
                    if (actor.is_touching(point)) {
                        collision_pixels++;
                        // 小于10个像素点的角色相交即视为碰撞
                        if (this.is_tiny_sprite(this) || this.is_tiny_sprite(actor)) {
                            return true;
                        }
                    }
                }
                if (collision_pixels === this.min_points_for_collision) {
                    return true;
                }
            }
        }
        return false;
    };
    Actor.prototype.check_bumped_color = function (color) {
        return Result.success(this.bumped_color(color));
    };
    Actor.prototype.bumped_color = function (color) {
        /**
         * 以下情况皆视为没有颜色碰撞：
         * 1. 角色离开舞台。
         * 2. 角色没有造型。
         * 3. 角色的大小为0。
         */
        if (this.has_left_stage() || !this.current_style) {
            return false;
        }
        var bounds = this.get_bounds_in_stage();
        if (bounds.width === 0 || bounds.height === 0) {
            return false;
        }
        var texture_points = this.data.get_texture_points_position(this.current_style.texture_id);
        if (!texture_points || texture_points.length === 0) {
            return false;
        }
        return this.color_match_texture_points(bounds, texture_points, color);
    };
    Actor.prototype.color_match_texture_points = function (bounds, texture_points, color) {
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        /**
         * 获取缩放后的截图区域的宽高
         */
        var scaled_bounds_size = get_collision_optimization_scaled_size({ width: bounds.width, height: bounds.height });
        /**
         * 先把本角色隐藏，把除了本角色以外的stage渲染到render_texture上
         */
        var prev_visibility = this.get_visible();
        this.visible = false;
        /**
         * 取角色所在位置的截图pixels：
         */
        var transform = get_screenshot_area_transform_matrix(bounds, { width: width, height: height });
        this.render_texture.resize(scaled_bounds_size.width, scaled_bounds_size.height, true);
        this.app.get_app().renderer.render(this.app.get_app().stage, { renderTexture: this.render_texture, transform: transform });
        var pixels = this.app.get_extract_module().pixels(this.render_texture);
        /**
         * 再把本角色显示回来
         */
        this.visible = prev_visibility;
        // 每个点进行颜色比对
        var color_rgb = hex_to_rgb(color);
        for (var index = void 0, i = 0; i < texture_points.length; i++) {
            var origin_point = collision_opti_scaled_to_origin_point(texture_points[i]);
            var local_p = map_actor_px_to_local_point(origin_point, this);
            var scaled_point = origin_to_collision_opti_scaled_point(new Point(local_p.x - bounds.x, local_p.y - bounds.y));
            // x和y的值使用floor取值，保证是整数的同时又不会超出原有区域。
            var x = Math.floor(scaled_point.x);
            var y = Math.floor(scaled_point.y);
            if (x >= scaled_bounds_size.width || y >= scaled_bounds_size.height) {
                continue;
            }
            /**
             * 颜色取rgb比对，从r开始取。因此index必须为4的倍数。
             * 才能正确地从pixels数组中正确依序获取rgb数值。
             * bounds已经在get_bounds_in_stage中处理过，为整数。
             */
            index = x * 4 + y * scaled_bounds_size.width * 4;
            if (this.color_match(color_rgb, pixels, index)) {
                return true;
            }
        }
        return false;
    };
    Actor.prototype.color_match = function (color, pixels, pixel_offset) {
        if (pixels[pixel_offset] === undefined ||
            pixels[pixel_offset + 1] === undefined ||
            pixels[pixel_offset + 2] === undefined) {
            return false;
        }
        // 按位与，取前几位，粗略比较颜色
        return (color[0] & 248) === (pixels[pixel_offset] & 248) &&
            (color[1] & 248) === (pixels[pixel_offset + 1] & 248) &&
            (color[2] & 240) === (pixels[pixel_offset + 2] & 240);
    };
    Actor.prototype.get_bounds_in_stage = function () {
        var box = this.get_vertices();
        // 扩大五个像素位检测
        var EXTEND_PIXELS = 5;
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        var box_in_stage = {
            left: clamp(-width / 2, width / 2, box.min_x - EXTEND_PIXELS),
            right: clamp(-width / 2, width / 2, box.max_x + EXTEND_PIXELS),
            top: clamp(-height / 2, height / 2, box.min_y - EXTEND_PIXELS),
            bottom: clamp(-height / 2, height / 2, box.max_y + EXTEND_PIXELS),
        };
        return {
            x: Math.round(box_in_stage.left),
            y: Math.round(box_in_stage.top),
            width: Math.abs(Math.floor(box_in_stage.right - box_in_stage.left)),
            height: Math.abs(Math.floor(box_in_stage.bottom - box_in_stage.top)),
        };
    };
    Actor.prototype.check_relation_with_edge = function (type, edge) {
        var bound_vertices = this.get_vertices();
        /**
         * 在外接矩形判定阶段，情况如下：
         * 1. 要检测角色是否碰到边缘。此时如果外接矩形没有碰到，就不需要进一步检测角色像素轮廓。
         * 2. 要检测角色是否离开边缘（完全与边缘重叠）。此时，先判断外接矩形是否已经离开。
         *    如果是，则不需要进一步判断角色像素轮廓。如果否，需要进一步判断角色轮廓。
         */
        var bound_result = this.pixel_detector.check_relation_by_vertices(bound_vertices, type);
        var bound_result_contains_edge = this.pixel_detector.contains_edge(bound_result, edge);
        switch (type) {
            case 'collision':
                if (!bound_result_contains_edge) {
                    return false;
                }
                break;
            case 'overstep':
                if (bound_result_contains_edge) {
                    return true;
                }
                break;
        }
        var texture_bound_vertices = this.pixel_detector.get_texture_bounds_points_vertices();
        if (!texture_bound_vertices) {
            return false;
        }
        /**
         * 当素材图包含2个或以上的完全闭合图形时，像素轮廓点只存储了第一个被检测到的完全闭合图形的轮廓点。
         * 像素轮廓点判定阶段，情况如下：
         * 1. 要检测角色是否碰到边缘。此时如果轮廓点已经碰到，则返回true。否则需要进行内部点的检测，因为其他未被采集到轮廓点的图形有可能碰到边缘。
         * 2. 要检测角色是否离开边缘。此时如果轮廓点尚未离开边缘，则返回false。否则需要进行内部点的检测，因为其他未被采集到轮廓点的图形有可能尚未离开边缘。
         */
        var texture_bound_result = this.pixel_detector.check_relation_by_vertices(texture_bound_vertices, type);
        var texture_bound_result_contains_edge = this.pixel_detector.contains_edge(texture_bound_result, edge);
        switch (type) {
            case 'collision':
                if (texture_bound_result_contains_edge) {
                    return true;
                }
                break;
            case 'overstep':
                if (!texture_bound_result_contains_edge) {
                    return false;
                }
                break;
        }
        var texture_internal_points_vertices = this.pixel_detector.get_texture_internal_points_vertices();
        if (!texture_internal_points_vertices) {
            return false;
        }
        var texture_internal_points_result = this.pixel_detector.check_relation_by_vertices(texture_internal_points_vertices, type);
        return this.pixel_detector.contains_edge(texture_internal_points_result, edge);
    };
    Actor.prototype.bounce_if_collision_with_edge = function () {
        var bound_vertices = this.get_vertices();
        var bound_result = this.pixel_detector.check_relation_by_vertices(bound_vertices, 'collision');
        if (!bound_result) {
            return;
        }
        var texture_vertices = this.pixel_detector.get_texture_internal_points_vertices();
        if (!texture_vertices) {
            return;
        }
        var texture_result = this.pixel_detector.check_relation_by_vertices(texture_vertices, 'collision');
        if (!texture_result) {
            return;
        }
        var _a = this.app.get_app().renderer, width = _a.width, height = _a.height;
        var half_stage_width = width / 2;
        var half_stage_height = height / 2;
        // 添加间距，使角色在调整位移后不会再次触发“碰到边缘的判定”。
        var margin = 10;
        var direction_x = Math.cos(this.rotation_value);
        var direction_y = Math.sin(this.rotation_value);
        var collision_edges = [];
        if (this.pixel_detector.contains_edge(texture_result, EdgeBinary.RIGHT)) {
            direction_x = -Math.abs(direction_x);
            collision_edges.push(EdgeBinary.RIGHT);
        }
        if (this.pixel_detector.contains_edge(texture_result, EdgeBinary.LEFT)) {
            direction_x = Math.abs(direction_x);
            collision_edges.push(EdgeBinary.LEFT);
        }
        if (this.pixel_detector.contains_edge(texture_result, EdgeBinary.TOP)) {
            direction_y = -Math.abs(direction_y);
            collision_edges.push(EdgeBinary.TOP);
        }
        if (this.pixel_detector.contains_edge(texture_result, EdgeBinary.BOTTOM)) {
            direction_y = Math.abs(direction_y);
            collision_edges.push(EdgeBinary.BOTTOM);
        }
        var new_rotation = Math.atan2(direction_y, direction_x);
        /**
         * 在Stage构建的坐标系中，对外提供角度数值rotation_value在顺时针方向为负，逆时针方向为正。
         * 因此实际计算中如果用新数值减去旧数值，需要取反，即-(new_rotation - rotation_value)。
         * 所以代码中直接用旧的值减去新的值。
         */
        var delta_rotation = this.rotation_value - new_rotation;
        var distance_x = 0;
        var distance_y = 0;
        var current_vertices = texture_vertices;
        if (delta_rotation % (Math.PI * 2) !== 0) {
            /**
             * 反弹时的角度变化，是以质心为中心点进行旋转。
             * 此时角色的所有造型中心点相对位置（pivot）都不会改变，改变的是角色的位置（position）。
             */
            if (this.pivot.x !== 0 && this.pivot.y !== 0) {
                var current_center = get_actor_center(this, this.position);
                var new_position = make_rotate(this.position, current_center, delta_rotation);
                this.set_pixi_position(new_position.x, new_position.y);
            }
            this.set_rotation(new_rotation);
            /**
             * 发生旋转后，像素轮廓顶点数据需要更新。
             */
            var new_texture_vertices = this.pixel_detector.get_texture_internal_points_vertices();
            current_vertices = new_texture_vertices ? new_texture_vertices : current_vertices;
        }
        collision_edges.forEach(function (edge) {
            switch (edge) {
                case EdgeBinary.RIGHT:
                    distance_x = half_stage_width - (current_vertices.max_x + margin);
                    break;
                case EdgeBinary.LEFT:
                    distance_x = -half_stage_width - (current_vertices.min_x - margin);
                    break;
                case EdgeBinary.TOP:
                    distance_y = -half_stage_height - (current_vertices.min_y - margin);
                    break;
                case EdgeBinary.BOTTOM:
                    distance_y = half_stage_height - (current_vertices.max_y + margin);
                    break;
            }
        });
        this.set_pixi_position(this.position.x + distance_x, this.position.y + distance_y);
    };
    Actor.prototype.get_id = function () {
        return this.id;
    };
    Actor.prototype.emit_mouse_event = function (event) {
        this.events.fire(event, {
            target_id: this.id,
        });
    };
    Actor.prototype.is_touching = function (pos) {
        if (!this.current_style) {
            return false;
        }
        var pos_data = this.data.get_texture_points_color_data(this.current_style.texture_id);
        if (!pos_data) {
            return false;
        }
        var point = map_local_point_to_actor_px(pos, this);
        var scaled_texture_size = get_collision_optimization_scaled_size({ width: this.texture.width, height: this.texture.height });
        var scaled_point = origin_to_collision_opti_scaled_point(point);
        // 点不在texture宽高范围内，返回false
        if (scaled_point.x > scaled_texture_size.width ||
            scaled_point.y > scaled_texture_size.height ||
            scaled_point.x < 0 ||
            scaled_point.y < 0) {
            return false;
        }
        // & 255 取到的是 r
        // >>> 8 & 255 取到的是 g
        // >>> 16 & 255 取到的是 b
        // >>> 24 取到的是a
        // 这里要比较的是alpha值，所以是>>> 24
        return pos_data[(scaled_point.y * scaled_texture_size.width) + scaled_point.x] >>> 24 > 0;
    };
    Actor.prototype.get_vertices = function () {
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        var half_view_width = width / 2;
        var half_view_height = height / 2;
        var box = this.getBounds();
        return {
            max_x: box.x + box.width - half_view_width,
            min_x: box.x - half_view_width,
            max_y: box.y + box.height - half_view_height,
            min_y: box.y - half_view_height,
        };
    };
    Actor.prototype.has_left_stage = function () {
        var box = this.getBounds();
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        var top_gap = box.y + box.height;
        var bottom_gap = height - box.y;
        var left_gap = box.x + box.width;
        var right_gap = width - box.x;
        return top_gap <= 0 || bottom_gap <= 0 || left_gap <= 0 || right_gap <= 0;
    };
    Actor.prototype.is_tiny_sprite = function (actor) {
        return actor.width * actor.height < 2 * this.min_points_for_collision;
    };
    Actor.prototype.rotate_around_actor = function (actor_id, rotation) {
        var _a;
        var actor = this.data.get_internal_actor(actor_id);
        if (!actor) {
            return new ErrorMsg("Cannot find actor " + actor_id);
        }
        // 如果并无设置当前围绕某角色旋转，需要重新计算两个角色坐标差值
        if (!this.current_rotate_around_actor || this.current_rotate_around_actor.actor_id !== actor_id) {
            this.current_rotate_around_actor = {
                actor_id: actor_id,
                offset: new Point(this.get_position().x - actor.get_position().x, this.get_position().y - actor.get_position().y),
                is_rotating: true,
            };
        }
        // 设置角色正在围绕某角色旋转
        // 因为围绕某角色旋转时候设置位置属于被动跟随，不需要解除跟随关系
        // 需要在位置变化监听发送前设置flag为true，监听发送后设回false
        this.current_rotate_around_actor.is_rotating = true;
        // 当两个角色互相围绕的时候，跟随关系随两个角色的围绕方法调用顺序影响，后调用的角色跟随前一个，前一个角色则会原地不动
        // 因此这里特殊处理，两个角色互相围绕的时候并无跟随关系，动态取各自的位置进行计算
        if (this.id === ((_a = actor.current_rotate_around_actor) === null || _a === void 0 ? void 0 : _a.actor_id)) {
            var _b = make_rotate(this.get_position(), actor.get_position(), rotation), x = _b.x, y = _b.y;
            this.set_position(x, y);
        }
        else {
            // 此为增量方法，需要动态更新差值
            this.current_rotate_around_actor.offset = make_rotate(this.current_rotate_around_actor.offset, { x: 0, y: 0 }, rotation);
            this.set_position(this.current_rotate_around_actor.offset.x + actor.get_position().x, this.current_rotate_around_actor.offset.y + actor.get_position().y);
        }
        // 此方法为增量方法，旋转效果需要叠加自身旋转度数
        this.set_rotation(this.get_rotation() + rotation);
        this.current_rotate_around_actor.is_rotating = false;
        return;
    };
    return Actor;
}(Sprite));
export { Actor };
//# sourceMappingURL=actor.js.map