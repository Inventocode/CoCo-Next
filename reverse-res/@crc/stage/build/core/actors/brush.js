import clamp from 'ramda/es/clamp';
import { Point } from '../pixi';
import { hsl_to_hex, hex_to_hsl, get_actor_center } from '../utils';
var Brush = /** @class */ (function () {
    function Brush(app, actor) {
        var _this = this;
        this.ctx = null;
        this.update_pen_on_change = function (evt) {
            if (evt.position) {
                _this.draw_line(evt.position.x, evt.position.y);
            }
        };
        this.update_fill_point_on_change = function (evt) {
            if (evt.position) {
                _this.update_fill_point(evt.position.x, evt.position.y);
            }
        };
        this.app = app;
        this.actor = actor;
        this.size = 1;
        this.stroke_color = '000000';
        this.alpha = 1;
        this.hsl = [0, 0, 0];
        this.ctx = this.actor.parent_scene.get_brush_ctx();
        this.fill_path = [];
        this.is_recording_fill_path = false;
    }
    Brush.prototype.set_pen_down = function () {
        if (!this.origin_x || !this.origin_y) {
            var _a = this.actor, x = _a.x, y = _a.y;
            this.origin_x = x;
            this.origin_y = y;
            this.draw_line(x, y);
            this.actor.add_listener('change', this.update_pen_on_change);
        }
    };
    Brush.prototype.set_pen_up = function () {
        this.origin_x = undefined;
        this.origin_y = undefined;
        this.actor.remove_listener('change', this.update_pen_on_change);
    };
    Brush.prototype.draw_line = function (new_x, new_y) {
        if (this.origin_x === undefined || this.origin_y === undefined) {
            return;
        }
        var ctx = this.ctx;
        if (!ctx) {
            return;
        }
        ctx.save();
        ctx.lineWidth = this.size;
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = "#" + this.stroke_color;
        ctx.fillStyle = "#" + this.stroke_color;
        this.canvas_draw_circle(ctx, this.origin_x, this.origin_y);
        this.canvas_draw_line(ctx, this.origin_x, this.origin_y, new_x, new_y);
        ctx.restore();
        this.actor.parent_scene.should_update_brush();
        this.origin_x = new_x;
        this.origin_y = new_y;
    };
    Brush.prototype.canvas_draw_line = function (ctx, x, y, new_x, new_y) {
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        var center_x = width / 2;
        var center_y = height / 2;
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(center_x + x, center_y + y);
        ctx.lineTo(center_x + new_x, center_y + new_y);
        ctx.closePath();
        ctx.stroke();
    };
    Brush.prototype.canvas_draw_circle = function (ctx, x, y) {
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        var center_x = width / 2;
        var center_y = height / 2;
        var r = this.size / 2;
        ctx.beginPath();
        ctx.arc(center_x + x, center_y + y, r, 0, Math.PI * 2);
        ctx.fill();
    };
    Brush.prototype.render = function () {
        this.actor.parent_scene.update_brush();
        this.app.render();
    };
    Brush.prototype.set_size = function (size) {
        this.size = clamp(1, 10000, size);
    };
    Brush.prototype.set_color = function (color) {
        this.stroke_color = color;
        this.hsl = hex_to_hsl(color);
    };
    Brush.prototype.set_alpha = function (alpha) {
        this.alpha = clamp(0, 1, alpha);
    };
    Brush.prototype.set_hue = function (hue) {
        hue %= 360;
        if (hue < 0) {
            hue += 360;
        }
        this.hsl[0] = hue;
        this.stroke_color = hsl_to_hex(this.hsl[0], this.hsl[1], this.hsl[2]);
    };
    Brush.prototype.set_saturation = function (saturation) {
        this.hsl[1] = clamp(0, 1, saturation);
        this.stroke_color = hsl_to_hex(this.hsl[0], this.hsl[1], this.hsl[2]);
    };
    Brush.prototype.set_brightness = function (brightness) {
        this.hsl[2] = clamp(0, 1, brightness);
        this.stroke_color = hsl_to_hex(this.hsl[0], this.hsl[1], this.hsl[2]);
    };
    Brush.prototype.get_size = function () {
        return this.size;
    };
    Brush.prototype.get_color = function () {
        return this.stroke_color;
    };
    Brush.prototype.get_alpha = function () {
        return this.alpha;
    };
    Brush.prototype.get_hue = function () {
        return this.hsl[0];
    };
    Brush.prototype.get_saturation = function () {
        return this.hsl[1];
    };
    Brush.prototype.get_brightness = function () {
        return this.hsl[2];
    };
    Brush.prototype.clear = function () {
        if (!this.ctx) {
            return;
        }
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        this.ctx.clearRect(0, 0, width, height);
        this.actor.parent_scene.should_update_brush();
    };
    Brush.prototype.set_fill_color = function (color) {
        this.fill_color = color;
    };
    Brush.prototype.set_fill_start = function () {
        if (!this.is_recording_fill_path) {
            this.is_recording_fill_path = true;
            this.actor.add_listener('change', this.update_fill_point_on_change);
        }
        this.fill_path = [];
        this.update_fill_point(this.actor.position.x, this.actor.position.y);
    };
    Brush.prototype.update_fill_point = function (x, y) {
        if (!this.is_recording_fill_path) {
            return;
        }
        var point = new Point(x, y);
        this.fill_path.push(this.app.get_app().stage.toGlobal(point));
    };
    Brush.prototype.draw_fill_pattern = function () {
        if (!this.is_recording_fill_path) {
            return;
        }
        var ctx = this.ctx;
        if (!ctx) {
            return;
        }
        var start = this.fill_path.shift();
        if (!start) {
            return;
        }
        ctx.save();
        ctx.fillStyle = this.fill_color ? "#" + this.fill_color : "#" + this.stroke_color;
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        this.fill_path.forEach(function (point) {
            ctx.lineTo(point.x, point.y);
        });
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        this.actor.parent_scene.should_update_brush();
        this.fill_path = [];
        this.is_recording_fill_path = false;
        this.actor.remove_listener('change', this.update_fill_point_on_change);
    };
    Brush.prototype.draw_text_stamp = function (text, size, align, rotation) {
        var ctx = this.ctx;
        if (!ctx) {
            return;
        }
        var _a = this.app.get_app().stage
            .toGlobal(this.actor.position), x = _a.x, y = _a.y;
        var stamp_rotation = rotation !== undefined ? rotation : this.actor.rotation;
        ctx.save();
        ctx.font = "bold " + size + "px Arial , Microsoft YaHei";
        ctx.fillStyle = "#" + this.stroke_color;
        ctx.globalAlpha = this.alpha;
        ctx.textBaseline = 'middle';
        ctx.textAlign = align;
        ctx.translate(x, y);
        ctx.rotate(stamp_rotation);
        ctx.fillText(text, 0, 0);
        ctx.restore();
        this.actor.parent_scene.should_update_brush();
    };
    Brush.prototype.draw_image_stamp = function () {
        var ctx = this.ctx;
        if (!ctx) {
            return;
        }
        var actor = this.actor;
        var center_point = get_actor_center(actor, actor.position);
        var rotation = this.actor.rotation;
        var _a = this.app.get_app().view, view_height = _a.height, view_width = _a.width;
        ctx.save();
        ctx.translate(center_point.x + view_width / 2, center_point.y + view_height / 2);
        ctx.rotate(rotation);
        ctx.scale(actor.scale.x < 0 ? -1 : 1, actor.scale.y < 0 ? -1 : 1);
        var source = actor.texture.baseTexture.getDrawableSource && actor.texture.baseTexture.getDrawableSource();
        if (!source) {
            return;
        }
        ctx.drawImage(source, Math.floor(-actor.width / 2), Math.floor(-actor.height / 2), Math.floor(actor.width), Math.floor(actor.height));
        ctx.restore();
        actor.parent_scene.should_update_brush();
    };
    return Brush;
}());
export { Brush };
//# sourceMappingURL=brush.js.map