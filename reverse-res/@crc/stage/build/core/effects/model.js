import clamp from 'ramda/es/clamp';
import { Sprite, Point, PixelateFilter, TwistFilter, AsciiFilter, ColorMatrixFilter, DisplacementFilter, } from '../pixi';
import { angle_to_radian, is_internal_scene, } from '../utils';
import { ErrorMsg } from '../result';
var Effects = /** @class */ (function () {
    function Effects(app, target) {
        var _this = this;
        this.hue_degree = 0;
        this.brightness = 100;
        this.saturation = 0;
        this.pixelate_size = 0;
        this.twist_angle = 0;
        this.ascii_size = 0;
        this.displacement_img = '';
        this.displacement_speed = 0;
        this.update_twist_offset = function () {
            var cur_twist_filter = _this.effect_filter_list[4 /* TWIST */];
            if (_this.is_twist_filter(cur_twist_filter) && cur_twist_filter.enabled) {
                var _a = _this.app.get_app().view, width = _a.width, height = _a.height;
                var position = _this.get_target_position();
                cur_twist_filter.offset = new Point(position.x + width / 2, -position.y + height / 2);
            }
        };
        this.update_displacement_position = function () {
            var cur_displacement_filter = _this.effect_filter_list[3 /* DISPLACEMENT */];
            if (cur_displacement_filter &&
                cur_displacement_filter.enabled &&
                _this.is_displacement_filter(cur_displacement_filter) &&
                _this.displacement_sprite) {
                var stage_width = _this.app.get_app().view.width;
                var half_stage_width = stage_width / 2;
                var half_sprite_width = _this.displacement_sprite.width / 2;
                var is_sprite_out_of_stage = _this.displacement_sprite.position.x - half_sprite_width > -half_stage_width;
                if (is_sprite_out_of_stage) {
                    _this.displacement_sprite.position.x -= _this.displacement_sprite.width / 2;
                }
                _this.displacement_sprite.position.x += _this.displacement_speed;
            }
        };
        this.app = app;
        this.effect_filter_list = [];
        this.target = target;
        var remove_on_destroy = function () {
            _this.remove_effects();
        };
        if (is_internal_scene(target)) {
            this.target_sprite = target.background;
            target.add_listener('destroy', remove_on_destroy);
            this.get_target_position = function () { return target.background.get_position(); };
        }
        else {
            this.target_sprite = target;
            target.add_listener('destroy', remove_on_destroy);
            this.get_target_position = function () { return target.get_position(); };
        }
    }
    Effects.prototype.get_effect_filter = function (type) {
        var _this = this;
        var filter = this.effect_filter_list[type];
        if (!filter) {
            var update_twist_on_change = function (evt) {
                if (evt.position) {
                    _this.update_twist_offset();
                }
            };
            switch (type) {
                case 0 /* HUE */:
                case 1 /* BRIGHTNESS */:
                case 5 /* SATURATE */:
                    filter = new ColorMatrixFilter();
                    break;
                case 2 /* PIXELATE */:
                    filter = new PixelateFilter();
                    break;
                case 3 /* DISPLACEMENT */:
                    if (!this.displacement_sprite) {
                        throw new Error('Displacement sprite should be init first.');
                    }
                    filter = new DisplacementFilter(this.displacement_sprite);
                    this.app.get_app().ticker.add(this.update_displacement_position);
                    break;
                case 4 /* TWIST */:
                    filter = new TwistFilter();
                    if (is_internal_scene(this.target)) {
                        this.target.add_listener('change', update_twist_on_change);
                    }
                    else {
                        this.target.add_listener('change', update_twist_on_change);
                    }
                    break;
                case 6 /* ASCII */:
                    filter = new AsciiFilter();
                    break;
            }
            this.effect_filter_list[type] = filter;
            this.update_target_filter();
        }
        filter.enabled = true;
        return filter;
    };
    Effects.prototype.update_target_filter = function () {
        this.target_sprite.filters = this.effect_filter_list.filter(function (filter) { return !!filter; });
    };
    Effects.prototype.is_color_matrix_filter = function (filter) {
        return filter instanceof ColorMatrixFilter;
    };
    Effects.prototype.is_pixelate_filter = function (filter) {
        return filter instanceof PixelateFilter;
    };
    Effects.prototype.is_displacement_filter = function (filter) {
        return filter instanceof DisplacementFilter;
    };
    Effects.prototype.is_twist_filter = function (filter) {
        return filter instanceof TwistFilter;
    };
    Effects.prototype.is_ascii_filter = function (filter) {
        return filter instanceof AsciiFilter;
    };
    Effects.prototype.update_displacement_sprite = function (img) {
        if (img &&
            this.displacement_img === img &&
            this.displacement_sprite) {
            return;
        }
        if (this.displacement_sprite) {
            this.displacement_sprite.destroy();
        }
        this.displacement_img = img;
        this.displacement_sprite = Sprite.from(img);
        this.displacement_sprite.anchor.set(0.5, 0.5);
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        this.displacement_sprite.width = width * 2;
        this.displacement_sprite.height = height * 2;
        this.target_sprite.parent.addChild(this.displacement_sprite);
    };
    Effects.prototype.set_hue = function (degree) {
        var hue_filter = this.get_effect_filter(0 /* HUE */);
        if (!this.is_color_matrix_filter(hue_filter)) {
            return;
        }
        this.hue_degree = degree;
        hue_filter.hue(this.hue_degree, false);
        return;
    };
    Effects.prototype.get_hue = function () {
        return this.hue_degree;
    };
    Effects.prototype.set_brightness = function (brightness) {
        var brightness_filter = this.get_effect_filter(1 /* BRIGHTNESS */);
        if (!this.is_color_matrix_filter(brightness_filter)) {
            return;
        }
        this.brightness = brightness;
        var value = clamp(-1, 1, brightness / 100 - 1);
        /**
         * filter的矩阵是一个5 * 4的结构。
         * 大致结构如下：
         *
         *  R  G  B  A  offset
         * [1, 0, 0, 0, 0, // red
         *  0, 1, 0, 0, 0, // green
         *  0, 0, 1, 0, 0, // blue
         *  0, 0, 0, 1, 0] // alpha
         *
         * 以以上结构为例，red通道的值: [1, 0, 0, 0, 0]表示，R通道的乘数是1（完全保留）。
         * 其他通道的乘数是0（不加入别的颜色）。
         * 色彩偏移量offset是0。
         * 亮度实际上就是通过修改通道的偏移量offset实现的。
         */
        brightness_filter.matrix = [
            1, 0, 0, 0, value,
            0, 1, 0, 0, value,
            0, 0, 1, 0, value,
            0, 0, 0, 1, 0,
        ];
    };
    Effects.prototype.get_brightness = function () {
        return this.brightness;
    };
    Effects.prototype.set_saturate = function (amount) {
        var saturate_filter = this.get_effect_filter(5 /* SATURATE */);
        if (!this.is_color_matrix_filter(saturate_filter)) {
            return;
        }
        this.saturation = clamp(-100, 100, amount);
        saturate_filter.saturate(this.saturation / 100, false);
    };
    Effects.prototype.get_saturate = function () {
        return this.saturation;
    };
    Effects.prototype.set_pixelate = function (size) {
        var pixelate_filter = this.get_effect_filter(2 /* PIXELATE */);
        if (!this.is_pixelate_filter(pixelate_filter)) {
            return;
        }
        var max_size = Math.min(this.target_sprite.width, this.target_sprite.height);
        this.pixelate_size = clamp(1, max_size, size);
        pixelate_filter.size = this.pixelate_size;
    };
    Effects.prototype.get_pixelate = function () {
        return this.pixelate_size;
    };
    Effects.prototype.set_displacement = function (speed, displacement_img) {
        try {
            this.update_displacement_sprite(displacement_img);
            var displacement_filter = this.get_effect_filter(3 /* DISPLACEMENT */);
            if (!this.is_displacement_filter(displacement_filter)) {
                return;
            }
            this.displacement_speed = clamp(0, 100, speed);
            return;
        }
        catch (err) {
            return new ErrorMsg('Init displacement filter failed.');
        }
    };
    Effects.prototype.get_displacement = function () {
        return this.displacement_speed;
    };
    Effects.prototype.set_twist = function (angle) {
        var twist_filter = this.get_effect_filter(4 /* TWIST */);
        if (!this.is_twist_filter(twist_filter)) {
            return;
        }
        this.twist_angle = clamp(0, 100, angle);
        twist_filter.angle = angle_to_radian(this.twist_angle * 10);
        twist_filter.radius = Math.sqrt(Math.pow(this.target_sprite.width / 2, 2) + Math.pow(this.target_sprite.height / 2, 2));
        this.update_twist_offset();
    };
    Effects.prototype.get_twist = function () {
        return this.twist_angle;
    };
    Effects.prototype.set_ascii = function (size) {
        var ascii_filter = this.get_effect_filter(6 /* ASCII */);
        if (!this.is_ascii_filter(ascii_filter)) {
            return;
        }
        var max_size = Math.min(this.target_sprite.width, this.target_sprite.height);
        this.ascii_size = clamp(1, max_size, size);
        ascii_filter.size = this.ascii_size;
    };
    Effects.prototype.get_ascii = function () {
        return this.ascii_size;
    };
    Effects.prototype.reset_default_value = function (type) {
        switch (type) {
            case 0 /* HUE */:
                this.hue_degree = 0;
                break;
            case 1 /* BRIGHTNESS */:
                this.brightness = 100;
                break;
            case 5 /* SATURATE */:
                this.saturation = 0;
                break;
            case 2 /* PIXELATE */:
                this.pixelate_size = 0;
                break;
            case 3 /* DISPLACEMENT */:
                this.displacement_speed = 0;
                break;
            case 4 /* TWIST */:
                this.twist_angle = 0;
                break;
            case 6 /* ASCII */:
                this.ascii_size = 0;
                break;
        }
    };
    Effects.prototype.disable_effects = function () {
        var _this = this;
        this.effect_filter_list.forEach(function (filter, idx) {
            if (filter) {
                filter.enabled = false;
                _this.reset_default_value(idx);
            }
        });
    };
    Effects.prototype.remove_effects = function () {
        var _this = this;
        this.effect_filter_list.forEach(function (filter, idx) {
            _this.reset_default_value(idx);
            if (idx === 3 /* DISPLACEMENT */) {
                _this.app.get_app().ticker.remove(_this.update_displacement_position);
            }
        });
        this.effect_filter_list = [];
        this.update_target_filter();
    };
    Effects.prototype.clone_to = function (actor) {
        var _this = this;
        var target_effect = actor.get_effects();
        var target_effect_value = target_effect.value;
        if (target_effect.is_error(target_effect_value)) {
            return;
        }
        this.effect_filter_list.forEach(function (filter, idx) {
            if (filter && filter.enabled) {
                switch (idx) {
                    case 0 /* HUE */:
                        target_effect_value.set_hue(_this.hue_degree);
                        break;
                    case 1 /* BRIGHTNESS */:
                        target_effect_value.set_brightness(_this.brightness);
                        break;
                    case 5 /* SATURATE */:
                        target_effect_value.set_saturate(_this.saturation);
                        break;
                    case 2 /* PIXELATE */:
                        target_effect_value.set_pixelate(_this.pixelate_size);
                        break;
                    case 3 /* DISPLACEMENT */:
                        target_effect_value.set_displacement(_this.displacement_speed, _this.displacement_img);
                        break;
                    case 4 /* TWIST */:
                        target_effect_value.set_twist(_this.twist_angle);
                        break;
                    case 6 /* ASCII */:
                        target_effect_value.set_ascii(_this.ascii_size);
                        break;
                }
            }
        });
    };
    return Effects;
}());
export { Effects };
//# sourceMappingURL=model.js.map