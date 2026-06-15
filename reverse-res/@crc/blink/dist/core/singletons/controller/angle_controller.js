"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AngleController = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var svg_symbol_1 = require("../../svg_symbol");
var dom_1 = require("../../utils/dom");
var color_1 = require("../../utils/color");
var _1 = require(".");
var AngleController = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(AngleController, _super);
    function AngleController() {
        var _this = _super.call(this) || this;
        /**
         * 指针的组成元素
         */
        _this.pointer_elements = [];
        // 从owner获取的属性
        _this.base_color = new color_1.Color('#000000');
        _this.mod = undefined;
        /**
         * 角度盘中心点的坐标
         */
        _this.center_position = undefined;
        /**
         * 0度线的高度，来自设计稿
         */
        _this.base_line_height = 1;
        /**
         * 最小角度间隔
         * 与背景图中的刻度间保持一致，后续可以开放背景图片和最小间隔的配置。
         */
        _this.angle_interval = 15;
        /**
         * 角度盘可显示的最小角度，与owner设置的最小值无关。
         */
        _this.min_degree = -180;
        /**
         * 角度盘可显示的最大角度，与owner设置的最大值无关。
         */
        _this.max_degree = 180;
        return _this;
    }
    AngleController.prototype.show = function (owner, controller) {
        var _a, _b, _c;
        controller;
        var source_block = ((_a = owner.source_block) === null || _a === void 0 ? void 0 : _a.is_shadow())
            ? owner.source_block.parent_block
            : owner.source_block;
        if (!source_block) {
            return;
        }
        if (!this.angle_scale) {
            this.init();
        }
        this.owner = owner;
        this.mod = owner.mod_;
        this.base_color = source_block.get_colour();
        this.update_angle_scale();
        this.container.style.display = 'block';
        // 对滑块进行定位前先渲染，获得slider宽度
        this.position();
        // 获得中心点位置
        if (!this.base_line) {
            return;
        }
        var scale = ((_c = (_b = this.owner) === null || _b === void 0 ? void 0 : _b.source_block) === null || _c === void 0 ? void 0 : _c.get_workspace().get_scale()) || 1;
        var base_line_position = this.base_line.getBoundingClientRect();
        this.center_position = {
            left: base_line_position.left,
            top: base_line_position.top + this.base_line_height / 2 * scale,
        };
    };
    AngleController.prototype.init = function () {
        this.angle_scale = document.createElement('div');
        this.angle_scale.classList.add('blockly-controller', 'angle-controller');
        this.angle_scale.setAttribute('tabindex', '-1');
        // 90度间隔刻度盘
        var svg_major = (0, dom_1.create_svg_element)('svg', {
            'class': 'blocklyIcon degree-mark-major',
        }, this.angle_scale);
        this.degree_mark_major = (0, dom_1.create_svg_element)('use', {}, svg_major);
        this.degree_mark_major.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#" + svg_symbol_1.SYMBOL.DEGREE_MARK_MAJOR);
        // 15度间隔刻度盘
        var svg_minor = (0, dom_1.create_svg_element)('svg', {
            'class': 'blocklyIcon degree-mark-minor',
        }, this.angle_scale);
        this.degree_mark_minor = (0, dom_1.create_svg_element)('use', {}, svg_minor);
        this.degree_mark_minor.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#" + svg_symbol_1.SYMBOL.DEGREE_MARK_MINOR);
        var wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        this.angle_scale.appendChild(wrapper);
        // 背景大的灰色圆
        var grey_circle = document.createElement('div');
        grey_circle.classList.add('grey-circle');
        wrapper.appendChild(grey_circle);
        // 角度线之间的颜色遮罩
        this.mask = document.createElement('div');
        this.mask.classList.add('mask-wrapper');
        wrapper.appendChild(this.mask);
        this.mask_top_clip = document.createElement('div');
        this.mask_top_clip.classList.add('mask-clip');
        this.mask.appendChild(this.mask_top_clip);
        this.mask_bottom_clip = document.createElement('div');
        this.mask_bottom_clip.classList.add('mask-clip');
        this.mask.appendChild(this.mask_bottom_clip);
        var white_circle = document.createElement('div');
        white_circle.classList.add('white-circle');
        this.mask.appendChild(white_circle);
        // 0度线
        this.base_line = document.createElement('div');
        this.base_line.classList.add('base-line');
        wrapper.appendChild(this.base_line);
        // 圆心
        this.center = document.createElement('div');
        this.center.classList.add('center');
        wrapper.appendChild(this.center);
        // 指针
        this.pointer = document.createElement('div');
        this.pointer.classList.add('pointer');
        wrapper.appendChild(this.pointer);
        var pointer_line = document.createElement('div');
        pointer_line.classList.add('pointer-line');
        this.pointer.appendChild(pointer_line);
        this.pointer_elements.push(pointer_line);
        var pointer_arrow_wrapper = document.createElement('div');
        pointer_arrow_wrapper.classList.add('pointer-arrow-wrapper');
        this.pointer.appendChild(pointer_arrow_wrapper);
        var pointer_arrow_circle = document.createElement('div');
        pointer_arrow_circle.classList.add('pointer-arrow-circle');
        pointer_arrow_wrapper.appendChild(pointer_arrow_circle);
        this.pointer_elements.push(pointer_arrow_circle);
        var degree_pointer = (0, dom_1.create_svg_element)('svg', {
            'class': 'blocklyIcon pointer-icon',
        }, pointer_arrow_circle);
        var pointer_icon = (0, dom_1.create_svg_element)('use', {}, degree_pointer);
        pointer_icon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#" + svg_symbol_1.SYMBOL.DEGREE_POINTER);
        pointer_icon.setAttribute('fill', '#ffffff');
        this.angle_scale.addEventListener('mousedown', this.bind_angle_event.bind(this));
        this.angle_scale.addEventListener('mouseup', this.set_pointer_position.bind(this));
        this.container.appendChild(this.angle_scale);
        document.body.appendChild(this.container);
    };
    AngleController.prototype.update_angle_scale = function () {
        var _this = this;
        if (!this.degree_mark_major
            || !this.degree_mark_minor
            || !this.base_line
            || !this.center
            || !this.pointer
            || !this.mask
            || !this.owner) {
            return;
        }
        this.degree_mark_major.style.fill = this.base_color.toString();
        this.base_line.style.backgroundColor = this.base_color.toString();
        this.center.style.backgroundColor = this.base_color.toString();
        this.pointer_elements.forEach(function (ele) { return ele.style.backgroundColor = _this.base_color.toString(); });
        var medium_color = new color_1.Color({
            r: this.base_color.r,
            g: this.base_color.g,
            b: this.base_color.b,
            a: 0.4,
        });
        this.degree_mark_minor.style.fill = medium_color.toString();
        var light_color = new color_1.Color({
            r: this.base_color.r,
            g: this.base_color.g,
            b: this.base_color.b,
            a: 0.2,
        });
        this.mask.style.backgroundColor = light_color.toString();
        var angle_value = this.field_to_angle_value(Number(this.owner.get_value()));
        this.set_angle_value(angle_value);
    };
    AngleController.prototype.update_value = function (value) {
        var angle_value = this.field_to_angle_value(value);
        this.set_angle_value(angle_value);
    };
    /**
     * 把field当前所显示的值转化为角度转盘中的值。
     * 在controller首次显示，或通过普通输入框输入值时，会调用此方法。
     *
     * 在input失去焦点之前，允许输入不合法的数值，需要对角度进行转换。转换后的精度为1.
     */
    AngleController.prototype.field_to_angle_value = function (field_value) {
        var mod = this.max_degree - this.min_degree;
        var value = field_value % mod;
        if (this.mod === true) {
            // mod_为true，取模运算的range是(min, max]
            if (value <= this.min_degree) {
                value += mod;
            }
            else if (value > this.max_degree) {
                value -= mod;
            }
        }
        else {
            // mod_为true，取模运算的range是[min, max)
            if (value < this.min_degree) {
                value += mod;
            }
            else if (value >= this.max_degree) {
                value -= mod;
            }
        }
        return Math.round(value);
    };
    /**
     * 绑定角度转盘的事件。
     */
    AngleController.prototype.bind_angle_event = function () {
        var move_pointer = this.move_pointer.bind(this);
        var remove_event = function () {
            document.removeEventListener('mousemove', move_pointer);
            document.removeEventListener('mouseup', remove_event);
        };
        document.addEventListener('mousemove', move_pointer);
        document.addEventListener('mouseup', remove_event);
    };
    /**
     * 拖动指针时，更新指针的位置及owner field上显示的值。
     */
    AngleController.prototype.move_pointer = function (e) {
        e.stopPropagation();
        this.update_angle_and_field_value(e.clientX, e.clientY);
    };
    /**
     * 点击刻度盘区域时，更新指针位置及owner field上显示的值。
     */
    AngleController.prototype.set_pointer_position = function (e) {
        this.update_angle_and_field_value(e.clientX, e.clientY);
    };
    /**
     * 同步更新转盘和field的值。
     * 拖动角度指针，或点击角度盘区域时调用。
     */
    AngleController.prototype.update_angle_and_field_value = function (mouse_x, mouse_y) {
        if (!this.center_position) {
            return;
        }
        // 以圆心为原点，0度线为x正半轴，建立坐标系。
        // (x,y)为鼠标位置在该坐标系中的坐标。
        var mouse_position = { left: mouse_x, top: mouse_y };
        var x = mouse_position.left - this.center_position.left;
        var y = this.center_position.top - mouse_position.top;
        // 计算点(x,y)与原点连线（即指针）与0度线的夹角，单位为弧度
        var rad = Math.atan2(y, x);
        // 换算为角度
        var degrees = rad / Math.PI * 180;
        // 调整精确度
        degrees = Math.round(degrees / this.angle_interval) * this.angle_interval;
        if (this.mod !== undefined) {
            if (this.mod && degrees === this.min_degree) {
                // mod_为true，取模运算的range是(min, max]
                degrees += this.angle_interval;
            }
            if (!this.mod && degrees === this.max_degree) {
                // mod_为true，取模运算的range是[min, max)
                degrees -= this.angle_interval;
            }
        }
        this.set_angle_value(degrees);
        // 更新field上html input所显示的值，且角度值可能是超出field本身限定范围的。
        // 在失焦时才会对值进行校验
        if (this.owner) {
            this.owner.set_html_input_value(degrees.toString());
            this.owner.on_html_input_change();
        }
    };
    /**
     * 设置角度转盘的值（实际上是设置指针、遮罩的样式）。
     */
    AngleController.prototype.set_angle_value = function (degrees) {
        if (!this.pointer || !this.mask_top_clip || !this.mask_bottom_clip) {
            return;
        }
        this.pointer.style.transform = "translateY(-50%) rotate(" + -degrees + "deg)";
        if (degrees > 0) {
            this.mask_top_clip.style.transform = "rotate(-" + degrees + "deg)";
            this.mask_bottom_clip.style.transform = 'rotate(180deg)';
        }
        else {
            this.mask_top_clip.style.transform = 'rotate(0deg)';
            this.mask_bottom_clip.style.transform = "rotate(" + (180 - degrees) + "deg)";
        }
    };
    AngleController = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], AngleController);
    return AngleController;
}(_1.Controller));
exports.AngleController = AngleController;
