import clamp from 'ramda/es/clamp';
import { Graphics, Container, Rectangle } from '../../core/pixi';
import { ErrorMsg } from '../../core/result';
var Pivot = /** @class */ (function () {
    function Pivot(app, data, events) {
        var _this = this;
        this.PATH_EFFECT = [12, 4];
        this.is_dragging = false;
        this.drag_start = function (e) {
            if (!_this.actor) {
                return;
            }
            _this.is_dragging = true;
            var pos = e.data.getLocalPosition(_this.app.get_app().stage);
            _this.move(pos);
            _this.events.fire('pivot:drag_start', { target_id: _this.actor.id });
        };
        this.drag_move = function (e) {
            if (_this.is_dragging && _this.actor) {
                var pos = e.data.getLocalPosition(_this.app.get_app().stage);
                _this.move(pos);
                _this.events.fire('pivot:drag_move', { target_id: _this.actor.id });
            }
        };
        this.drag_end = function (e) {
            if (!_this.is_dragging) {
                return;
            }
            _this.is_dragging = false;
            var pos = e.data.getLocalPosition(_this.app.get_app().stage);
            _this.clamp_pos(pos);
            if (!_this.actor) {
                return;
            }
            _this.actor.set_pivot_by_stage_point(pos.x, -pos.y);
            _this.events.fire('pivot:drag_end', { target_id: _this.actor.id });
        };
        this.on_actor_change = function (e) {
            if (e.pivot && _this.actor) {
                _this.move(_this.actor.position);
            }
        };
        this.on_stage_resize = function (e) {
            if (e.target_id !== _this.app.get_app().stage.name) {
                return;
            }
            var _a = _this.app.get_app().view, width = _a.width, height = _a.height;
            _this.pivot.hitArea = new Rectangle(-width / 2, -height / 2, width, height);
        };
        this.app = app;
        this.data = data;
        this.events = events;
        this.pivot = new Container();
        this.center = new Graphics();
        this.crosshair = new Graphics();
        this.pivot.addChild(this.center);
        this.pivot.addChild(this.crosshair);
        this.pivot.interactive = true;
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        this.pivot.hitArea = new Rectangle(-width / 2, -height / 2, width, height);
        this.pivot.addListener('mousedown', this.drag_start);
        this.pivot.addListener('mousemove', this.drag_move);
        this.pivot.addListener('mouseup', this.drag_end);
        this.pivot.addListener('mouseupoutside', this.drag_end);
        this.pivot.addListener('touchstart', this.drag_start);
        this.pivot.addListener('touchmove', this.drag_move);
        this.pivot.addListener('touchend', this.drag_end);
        this.pivot.addListener('touchendoutside', this.drag_end);
        this.events.add_listener('stage:resize', this.on_stage_resize);
        this.app.get_app().stage.addListener('touchendoutside', this.drag_end);
    }
    Pivot.prototype.move = function (pos) {
        this.clamp_pos(pos);
        this.center.position.set(pos.x, pos.y);
        this.draw_crosshair();
        this.app.render();
    };
    Pivot.prototype.clamp_pos = function (pos) {
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        pos.set(clamp(-width / 2, width / 2, pos.x), clamp(-height / 2, height / 2, pos.y));
    };
    Pivot.prototype.set_target_actor = function (actor_id) {
        var actor = this.data.get_internal_actor(actor_id);
        if (!actor) {
            return new ErrorMsg("Cannot find actor " + actor_id);
        }
        this.get_displayed() && this.hide();
        var scene_container_index = this.app.get_app().stage.getChildIndex(this.app.get_scene_container());
        // 设置中心点模式组件在背景容器上面一层
        this.app.get_app().stage.addChildAt(this.pivot, scene_container_index + 1);
        this.actor = actor;
        this.draw_center();
        this.draw_crosshair();
        this.actor.add_listener('change', this.on_actor_change);
        return;
    };
    Pivot.prototype.hide = function () {
        if (!this.actor) {
            return;
        }
        this.app.get_app().stage.removeChild(this.pivot);
        this.actor.remove_listener('change', this.on_actor_change);
        this.actor = undefined;
    };
    Pivot.prototype.get_displayed = function () {
        return !!this.actor;
    };
    Pivot.prototype.destroy = function () {
        this.events.remove_listener('stage:resize', this.on_stage_resize);
        this.pivot.destroy({ children: true, texture: true, baseTexture: true });
        this.actor = undefined;
    };
    Pivot.prototype.draw_center = function () {
        this.center.clear();
        if (!this.actor) {
            return;
        }
        this.center.position.set(this.actor.position.x, this.actor.position.y);
        this.center.lineStyle(4, 0x5B3BA9, 1);
        this.center.beginFill(0x6236FF, 0.3);
        this.center.drawCircle(0, 0, 18);
        this.center.endFill();
        this.center.lineStyle(4, 0xFFFFFF, 0.6);
        this.center.drawCircle(0, 0, 12);
        this.center.lineStyle(4, 0x5B3BA9, 1);
        this.center.beginFill(0x5B3BA9, 1);
        this.center.drawCircle(0, 0, 4);
        this.center.endFill();
    };
    Pivot.prototype.draw_crosshair = function () {
        this.crosshair.clear();
        this.draw_vertical_line();
        this.draw_horizontal_line();
    };
    Pivot.prototype.draw_vertical_line = function () {
        var icon = this.center;
        var height = this.app.get_app().view.height;
        var start_x = icon.position.x;
        var start_y = icon.position.y;
        this.crosshair.lineStyle(4, 0x5B3BA9);
        var l = 0;
        this.crosshair.moveTo(start_x, start_y - l);
        while (l < height) {
            l = Math.min(this.PATH_EFFECT[0] + l, height);
            this.crosshair.lineTo(start_x, start_y - l);
            l = Math.min(this.PATH_EFFECT[1] + l, height);
            this.crosshair.moveTo(start_x, start_y - l);
        }
        l = 0;
        this.crosshair.moveTo(start_x, start_y + l);
        while (l < height) {
            l = Math.min(this.PATH_EFFECT[0] + l, height);
            this.crosshair.lineTo(start_x, start_y + l);
            l = Math.min(this.PATH_EFFECT[1] + l, height);
            this.crosshair.moveTo(start_x, start_y + l);
        }
    };
    Pivot.prototype.draw_horizontal_line = function () {
        var icon = this.center;
        var width = this.app.get_app().view.width;
        var start_x = icon.position.x;
        var start_y = icon.position.y;
        this.crosshair.lineStyle(4, 0x5B3BA9);
        var l = 0;
        this.crosshair.moveTo(start_x + l, start_y);
        while (l < width) {
            l = Math.min(this.PATH_EFFECT[0] + l, width);
            this.crosshair.lineTo(start_x + l, start_y);
            l = Math.min(this.PATH_EFFECT[1] + l, width);
            this.crosshair.moveTo(start_x + l, start_y);
        }
        l = 0;
        this.crosshair.moveTo(start_x - l, start_y);
        while (l < width) {
            l = Math.min(this.PATH_EFFECT[0] + l, width);
            this.crosshair.lineTo(start_x - l, start_y);
            l = Math.min(this.PATH_EFFECT[1] + l, width);
            this.crosshair.moveTo(start_x - l, start_y);
        }
    };
    return Pivot;
}());
export { Pivot };
//# sourceMappingURL=pivot.js.map