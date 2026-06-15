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
import { TweenLite } from '@cmao/gsap';
import { Sprite, Graphics, Rectangle, Point, DropShadowFilter, } from '../../core/pixi';
import { BaseActorEditor } from '../../core/tool/actor_editor/model';
import { RotationType } from '../../core/di/interfaces/const';
import { position_to_rotation, get_actor_center, mod_rotation, angle_to_radian, radian_to_angle, } from '../../core/utils';
import { ActorEditorName } from '../di/interfaces/const';
/**
 * 角色编辑框按钮图标间的最小距离
 */
var MIN_BTN_ICON_DISTANCE = 30;
var ActorEditor = /** @class */ (function (_super) {
    __extends(ActorEditor, _super);
    function ActorEditor(opt, app, data, events) {
        var _this = _super.call(this, app, data) || this;
        _this.old_rotation = 0;
        _this.old_scale = new Point();
        _this.old_mouse_r = 0;
        _this.is_dragging_scale_btn = false;
        _this.is_dragging_rotate_btn = false;
        _this.is_touching_remove_btn = false;
        _this.on_actor_change = function (e) {
            if (!_this.actor) {
                return;
            }
            if (e.visible !== undefined) {
                _this.actor_editor.visible = e.visible;
            }
            if (e.position) {
                _this.update_editor_position(_this.actor);
            }
            if (e.rotation !== undefined || e.scale || e.pivot || e.texture) {
                _this.draw_editor(_this.actor);
            }
        };
        _this.drag_start_scale_btn = function (mouse_pos) {
            _this.is_dragging_scale_btn = true;
            var target = _this.actor_editor.name && _this.data.get_internal_actor(_this.actor_editor.name);
            if (!target) {
                return;
            }
            var centre = get_actor_center(target, target.position);
            _this.old_mouse_r = Math.hypot(mouse_pos.x - centre.x, mouse_pos.y - centre.y);
            _this.old_scale.set(target.scale.x, target.scale.y);
            _this.events.fire('editor_scale_btn:drag_start', { target_id: target.id });
        };
        _this.drag_move_scale_btn = function (mouse_pos) {
            var target = _this.actor_editor.name && _this.data.get_internal_actor(_this.actor_editor.name);
            if (!target) {
                return;
            }
            var origin_actor_r = _this.get_actor_r(target.width / target.scale.x / 2, target.height / target.scale.y / 2);
            // 缩放比例以角色质心与鼠标位置的距离为准
            var centre = get_actor_center(target, target.position);
            var new_mouse_r = _this.get_actor_r(mouse_pos.x - centre.x, mouse_pos.y - centre.y);
            var incremental_scale = (new_mouse_r - _this.old_mouse_r) / origin_actor_r;
            var get_new_scale = function (old_scale) {
                // 限制角色最小缩放规模为1%
                var new_scale = Math.max(Math.abs(old_scale) + incremental_scale, 0.01);
                return old_scale < 0 ? -new_scale : new_scale;
            };
            var new_scale_x = get_new_scale(_this.old_scale.x);
            var new_scale_y = get_new_scale(_this.old_scale.y);
            // 固定position不固定pivot缩放，视觉效果上是中心点的位置被固定
            target.set_pixi_pivot(target.pivot.x * target.scale.x / new_scale_x, target.pivot.y * target.scale.y / new_scale_y);
            target.set_pixi_scale(new_scale_x, new_scale_y);
            _this.events.fire('actor:update', {
                target_id: target.id,
                data: {
                    scale: target.get_scale(),
                },
            });
            _this.events.fire('editor_scale_btn:drag_move', { target_id: target.id });
            _this.app.render();
        };
        _this.drag_start_rotate_btn = function (event) {
            _this.is_dragging_rotate_btn = true;
            var target = _this.actor_editor.name && _this.data.get_internal_actor(_this.actor_editor.name);
            if (!target) {
                return;
            }
            var mouse_pos = event.data.getLocalPosition(_this.app.get_app().stage);
            var rotation = position_to_rotation(mouse_pos.x - target.x, mouse_pos.y - target.y);
            _this.old_rotation = rotation - target.rotation;
            _this.events.fire('editor_rotate_btn:drag_start', { target_id: target.id });
        };
        _this.drag_move_rotate_btn = function (mouse_pos) {
            var target = _this.actor_editor.name && _this.data.get_internal_actor(_this.actor_editor.name);
            if (!target) {
                return;
            }
            var mouse_rotation = position_to_rotation(mouse_pos.x - target.x, mouse_pos.y - target.y);
            var new_rotation = _this.debounce_rotation(mod_rotation(_this.old_rotation - mouse_rotation));
            var rotation_value = target.is_rotation_flipped
                ? mod_rotation(new_rotation + Math.PI)
                : new_rotation;
            target.set_rotation_value(rotation_value);
            target.set_pixi_rotation(-new_rotation);
            _this.events.fire('actor:update', {
                target_id: target.id,
                data: {
                    rotation: target.rotation_value,
                },
            });
            _this.events.fire('editor_rotate_btn:drag_move', { target_id: target.id });
            _this.app.render();
        };
        _this.drag_end_rotate_btn = function (event) {
            _this.is_dragging_rotate_btn = false;
            var target = _this.actor_editor.name && _this.data.get_internal_actor(_this.actor_editor.name);
            if (!target) {
                return;
            }
            target.set_rotation(target.rotation_value);
            _this.events.fire('actor:update', {
                target_id: target.id,
                data: {
                    rotation: target.rotation_value,
                },
            });
            _this.events.fire('editor_rotate_btn:drag_end', { target_id: target.id });
            _this.app.render();
        };
        _this.drag_start = function (event) {
            var mouse_pos = event.data.getLocalPosition(_this.app.get_app().stage);
            switch (event.target.name) {
                // 点到缩放按钮
                case ActorEditorName.SCALE_BTN:
                    _this.drag_start_scale_btn(mouse_pos);
                    return;
                // 点到旋转按钮
                case ActorEditorName.ROTATE_BTN:
                    _this.drag_start_rotate_btn(event);
                    return;
                // 点到删除按钮
                case ActorEditorName.REMOVE_BTN:
                    return;
            }
            var hit_target = _this.get_hit_target(event);
            if (!hit_target) {
                return;
            }
            hit_target.drag_start(event);
        };
        _this.drag_move = function (event) {
            if (!_this.check_mouse_pos_is_in_stage(event)) {
                return;
            }
            var mouse_pos = event.data.getLocalPosition(_this.app.get_app().stage);
            // 拖拽缩放按钮
            if (_this.is_dragging_scale_btn) {
                _this.drag_move_scale_btn(mouse_pos);
                return;
            }
            // 拖拽旋转按钮
            if (_this.is_dragging_rotate_btn) {
                _this.drag_move_rotate_btn(mouse_pos);
                return;
            }
            // 拖拽角色，改变角色位置
            var actor = _this.actor_editor.name && _this.data.get_internal_actor(_this.actor_editor.name);
            if (!actor) {
                return;
            }
            actor.drag_move();
        };
        _this.drag_end = function (event) {
            var actor = _this.actor_editor.name && _this.data.get_internal_actor(_this.actor_editor.name);
            if (!actor) {
                return;
            }
            if (_this.is_dragging_scale_btn) {
                _this.is_dragging_scale_btn = false;
                // 更新所有style在缩放后的中心点变化
                Object.keys(actor.styles).forEach(function (style_id) {
                    var style = actor.styles[style_id];
                    style.pivot.x = style.pivot.x * _this.old_scale.x / actor.scale.x;
                    style.pivot.y = style.pivot.y * _this.old_scale.y / actor.scale.y;
                });
                _this.events.fire('actor:update', {
                    target_id: actor.id,
                    data: {
                        scale: actor.get_scale(),
                    },
                });
                _this.events.fire('editor_scale_btn:drag_end', { target_id: actor.id });
                _this.app.render();
                return;
            }
            if (_this.is_dragging_rotate_btn) {
                _this.drag_end_rotate_btn(event);
                return;
            }
            actor.drag_end(event);
        };
        _this.emit_remove_btn_event = function (evt) {
            switch (evt.type) {
                case 'mousedown':
                case 'touchstart':
                    _this.is_touching_remove_btn = true;
                    return;
                case 'mouseup':
                case 'touchend':
                    if (_this.is_touching_remove_btn) {
                        _this.is_touching_remove_btn = false;
                        _this.actor_editor.name && _this.events.fire('editor_remove_btn:click', { target_id: _this.actor_editor.name });
                    }
                    return;
                case 'mouseupoutside':
                case 'touchendoutside':
                    _this.is_touching_remove_btn = false;
                    return;
            }
        };
        _this.on_break = function (e) {
            var _a;
            if (!e || e === ((_a = _this.actor) === null || _a === void 0 ? void 0 : _a.id)) {
                _this.is_dragging_scale_btn = false;
                _this.is_dragging_rotate_btn = false;
            }
        };
        _this.events = events;
        _this.editor_box = new Graphics();
        _this.editor_box.name = ActorEditorName.EDITOR_BOX;
        _this.editor_box.interactive = true;
        _this.editor_box.setParent(_this.actor_editor);
        _this.scale_btn = Sprite.from(opt.scale_btn_img);
        _this.scale_btn.name = ActorEditorName.SCALE_BTN;
        _this.scale_btn.anchor.set(0.5);
        _this.scale_btn.interactive = true;
        _this.scale_btn.setParent(_this.actor_editor);
        _this.rotate_btn = Sprite.from(opt.rotate_btn_img);
        _this.rotate_btn.name = ActorEditorName.ROTATE_BTN;
        _this.rotate_btn.anchor.set(0.5);
        _this.rotate_btn.interactive = true;
        _this.rotate_btn.setParent(_this.actor_editor);
        _this.remove_btn = Sprite.from(opt.remove_btn_img);
        _this.remove_btn.name = ActorEditorName.REMOVE_BTN;
        _this.remove_btn.anchor.set(0.5);
        _this.remove_btn.interactive = true;
        _this.remove_btn.setParent(_this.actor_editor);
        _this.rotation_centre = new Graphics();
        _this.rotation_centre.name = ActorEditorName.ROTATION_CENTRE;
        _this.rotation_centre.setParent(_this.actor_editor);
        _this.actor_editor.filters = [new DropShadowFilter({
                rotation: 0,
                distance: 0,
                blur: 3,
                alpha: 0.3,
            })];
        _this.actor_editor.on('mousedown', _this.drag_start);
        _this.actor_editor.on('mousemove', _this.drag_move);
        _this.actor_editor.on('mouseup', _this.drag_end);
        _this.actor_editor.on('mouseupoutside', _this.drag_end);
        _this.actor_editor.on('touchstart', _this.drag_start);
        _this.actor_editor.on('touchmove', _this.drag_move);
        _this.actor_editor.on('touchend', _this.drag_end);
        _this.actor_editor.on('touchendoutside', _this.drag_end);
        _this.remove_btn.on('mousedown', _this.emit_remove_btn_event);
        _this.remove_btn.on('touchstart', _this.emit_remove_btn_event);
        _this.remove_btn.on('mouseup', _this.emit_remove_btn_event);
        _this.remove_btn.on('touchend', _this.emit_remove_btn_event);
        _this.remove_btn.on('mouseupoutside', _this.emit_remove_btn_event);
        _this.remove_btn.on('touchendoutside', _this.emit_remove_btn_event);
        _this.events.event_emitter.addListener('break', _this.on_break);
        _this.app.get_app().stage.addListener('touchendoutside', _this.drag_end);
        return _this;
    }
    ActorEditor.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.events.event_emitter.removeListener('break', this.on_break);
    };
    ActorEditor.prototype.set_target_actor = function (actor_id) {
        var _this = this;
        if (this.actor && this.actor.id === actor_id) {
            return;
        }
        var result = _super.prototype.set_target_actor.call(this, actor_id);
        if (!result) {
            /**
             * 角色编辑器选中动效，原版是用rAF实现的一个11帧动画。
             * 取每一帧间隔16ms，计算可得11 * 16 = 176ms。
             */
            this.tween = TweenLite.fromTo(this.actor_editor.scale, 0.176, { x: 0, y: 0 }, { x: 1, y: 1, onUpdate: function () { return _this.app.render(); } });
        }
        return result;
    };
    ActorEditor.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.tween && this.tween.kill();
        this.tween = undefined;
    };
    ActorEditor.prototype.update_editor_position = function (actor) {
        // 编辑器的缩放不变，中心点和位置跟随角色变化
        this.actor_editor.pivot.set(actor.pivot.x * actor.scale.x, actor.pivot.y * actor.scale.y);
        this.actor_editor.position.set(actor.position.x, actor.position.y);
    };
    ActorEditor.prototype.draw_centre = function () {
        this.rotation_centre.clear();
        this.rotation_centre.lineStyle(4, 0xFFFFFF, 1);
        this.rotation_centre.drawCircle(this.actor_editor.pivot.x, this.actor_editor.pivot.y, 12);
        this.rotation_centre.beginFill(0xFFFFFF, 1);
        this.rotation_centre.drawCircle(this.actor_editor.pivot.x, this.actor_editor.pivot.y, 4);
        this.rotation_centre.endFill();
    };
    ActorEditor.prototype.draw_editor = function (actor) {
        this.update_editor_position(actor);
        if (this.is_dragging_rotate_btn || actor.rotation_type === RotationType.ALL) {
            this.actor_editor.rotation = -actor.rotation_value;
        }
        else {
            switch (actor.rotation_type) {
                case RotationType.LEFT_RIGHT:
                    this.actor_editor.rotation = actor.is_rotation_flipped ? Math.PI : 0;
                    break;
                case RotationType.NONE:
                    this.actor_editor.rotation = 0;
                    break;
            }
        }
        /**
         * 触发角度防抖校准时，需要改变选中框颜色
         */
        var editor_box_color = 0xFFFFFF;
        if (this.is_dragging_rotate_btn) {
            var abs_actor_angle = Math.abs(radian_to_angle(actor.rotation_value));
            editor_box_color = (abs_actor_angle + 3) % 90 <= 6 ? 0xFFDA00 : editor_box_color;
        }
        // 限制角色编辑框最小宽高
        var editor_width = Math.max(actor.width, MIN_BTN_ICON_DISTANCE + this.remove_btn.width / 2 + this.rotate_btn.width / 2);
        var editor_height = Math.max(actor.height, MIN_BTN_ICON_DISTANCE + this.rotate_btn.width / 2 + this.scale_btn.width / 2);
        this.editor_box.clear();
        this.editor_box.lineStyle(2, editor_box_color, 1);
        this.editor_box.drawRect(-editor_width / 2, -editor_height / 2, editor_width, editor_height);
        this.editor_box.endFill();
        this.editor_box.hitArea = new Rectangle(-this.editor_box.width / 2, -this.editor_box.height / 2, this.editor_box.width, this.editor_box.height);
        this.scale_btn.position.set(editor_width / 2, editor_height / 2);
        this.rotate_btn.position.set(editor_width / 2, -editor_height / 2);
        this.remove_btn.position.set(-editor_width / 2, -editor_height / 2);
        this.draw_centre();
    };
    ActorEditor.prototype.set_remove_btn_visible = function (visible) {
        this.remove_btn.visible = visible;
    };
    ActorEditor.prototype.set_scale_btn_visible = function (visible) {
        this.scale_btn.visible = visible;
    };
    ActorEditor.prototype.set_rotate_btn_visible = function (visible) {
        this.rotate_btn.visible = visible;
    };
    ActorEditor.prototype.set_rotation_centre_visible = function (visible) {
        this.rotation_centre.visible = visible;
    };
    ActorEditor.prototype.get_actor_r = function (half_width, half_height) {
        return Math.pow(half_width * half_width + half_height * half_height, 0.5);
    };
    /**
     * 角度防抖校准。0度，90度，180度，270度，左右 3 度不可选择
     * @param rotation 弧度
     */
    ActorEditor.prototype.debounce_rotation = function (rotation) {
        var angle = radian_to_angle(rotation);
        var abs_angle = Math.abs(angle);
        /**
         * 由于范围是左右3度，偏差范围是[-3°, 3°]，因此在原有角度值上加3，调整范围为[0°, 6°]，方便计算。
         * 记录调整后的偏差值，后面计算可以复用。
         */
        var ceiling_offset = (abs_angle + 3) % 90;
        if (ceiling_offset <= 6) {
            var offset = abs_angle % 90;
            var angle_gap = offset <= 3 ? offset : ceiling_offset - 3;
            angle = angle > 0 ? angle - angle_gap : angle + angle_gap;
            return angle_to_radian(angle);
        }
        return rotation;
    };
    return ActorEditor;
}(BaseActorEditor));
export { ActorEditor };
//# sourceMappingURL=actor_editor.js.map