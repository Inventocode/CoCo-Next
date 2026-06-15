"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorController = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var maths_1 = require("../../utils/maths");
var color_1 = require("../../utils/color");
var interfaces_1 = require("../../interfaces");
var di_1 = require("../../di");
var _1 = require(".");
var ColorController = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(ColorController, _super);
    function ColorController() {
        var _this = _super.call(this) || this;
        _this.color_handle_element = null;
        _this.current_color_panel_element = null;
        _this.color_review_element = null;
        _this.color_strip_width = 190 - 8;
        _this.min = 0;
        _this.max = 100;
        return _this;
    }
    ColorController.prototype.show = function (owner, controller) {
        var _a;
        var source_block = ((_a = owner.source_block) === null || _a === void 0 ? void 0 : _a.is_shadow())
            ? owner.source_block.parent_block
            : owner.source_block;
        if (!source_block) {
            return;
        }
        this.owner = owner;
        this.color_format = controller.color_format;
        this.line = controller.line;
        this.color = source_block.color_;
        if (!this.color_format || !this.line || !this.color) {
            return;
        }
        this.init();
        this.update_color();
        this.container.style.display = 'block';
        this.position();
    };
    ColorController.prototype.hide = function () {
        var _a;
        this.container.style.display = 'none';
        (_a = this.color_element) === null || _a === void 0 ? void 0 : _a.remove();
    };
    ColorController.prototype.init = function () {
        var _this = this;
        this.color_element = document.createElement('div');
        this.color_element.classList.add('blockly-controller', 'color-controller');
        this.color_element.setAttribute('tabindex', '-1');
        var color_panel = document.createElement('div');
        var color_panel_item = '';
        var Msg = this.Blink.Msg;
        if (this.color_format === interfaces_1.EColorControllerFormat.HSVA) {
            color_panel_item = this.create_color_panel([['h', "H " + Msg.HUE], ['s', "S " + Msg.SATURATION], ['v', "V " + Msg.BRIGHTNESS], ['a', "A " + Msg.OPACITY]]);
        }
        else if (this.color_format === interfaces_1.EColorControllerFormat.RGBA) {
            color_panel_item = this.create_color_panel([['r', "R " + Msg.RED], ['g', "G " + Msg.GREEN], ['b', "B " + Msg.BLUE], ['a', "A " + Msg.OPACITY]]);
        }
        color_panel.innerHTML = color_panel_item;
        color_panel.classList.add('color-panel');
        this.color_element.appendChild(color_panel);
        color_panel.childNodes.forEach(function (node) {
            var _a, _b, _c;
            var item = node;
            _this.set_color_panel_item_left(item);
            item.addEventListener('mousedown', _this.bind_color_strip_event.bind(_this, item));
            (_a = item.querySelector('.color-handle')) === null || _a === void 0 ? void 0 : _a.addEventListener('mousedown', _this.bind_color_event.bind(_this));
            (_b = item.querySelector('.color-strip-panel')) === null || _b === void 0 ? void 0 : _b.addEventListener('mousedown', _this.bind_color_event.bind(_this));
            item.querySelector('.color-strip-panel').addEventListener('mouseup', _this.set_color_handle_position.bind(_this));
            if (((_c = _this.line) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === item.getAttribute('data')) {
                _this.color_handle_element = item.querySelector('.color-handle');
                _this.current_color_panel_element = item.querySelector('.color-strip-panel');
            }
        });
        var review_panel = "\n      <div>\n        " + Msg.COLOR_PREVIEW + "\n      </div>\n      <div class=\"color-preview\">\n      </div>\n    ";
        var review_panel_element = document.createElement('div');
        review_panel_element.classList.add('preview-panel');
        review_panel_element.innerHTML = review_panel;
        this.color_review_element = review_panel_element.querySelector('.color-preview');
        this.color_element.appendChild(review_panel_element);
        this.container.appendChild(this.color_element);
        document.body.appendChild(this.container);
    };
    ColorController.prototype.update_color = function () {
        if (!this.color
            || !this.color_element
            || !this.color_format
            || !this.line
            || !this.owner) {
            return;
        }
        if (typeof this.owner.min_ !== 'number' || typeof this.owner.max_ !== 'number') {
            return;
        }
        this.min = this.owner.min_;
        this.max = this.owner.max_;
        var color_value = this.field_to_color_value(Number(this.owner.get_value()), this.min, this.max);
        this.set_color_value(color_value);
        this.update_dropdown_color();
    };
    ColorController.prototype.set_color_panel_item_left = function (item) {
        var _a, _b, _c, _d, _e, _f;
        var block = (_b = (_a = this.owner) === null || _a === void 0 ? void 0 : _a.source_block) === null || _b === void 0 ? void 0 : _b.parent_block;
        var data = item.getAttribute('data');
        var color_handle_element = item.querySelector('.color-handle');
        if (!block || !data || !color_handle_element) {
            return;
        }
        var value = this.get_field_value(block, data.toUpperCase());
        var firstChild = (_f = (_e = (_d = (_c = block.get_input_target_block(data.toUpperCase())) === null || _c === void 0 ? void 0 : _c.output_connection) === null || _d === void 0 ? void 0 : _d.target_connection) === null || _e === void 0 ? void 0 : _e.get_shadow_dom()) === null || _f === void 0 ? void 0 : _f.firstChild;
        var constraints = firstChild.getAttribute('constraints');
        if (constraints) {
            var _g = constraints.split(','), min = _g[0], max = _g[1];
            var color_value = this.field_to_color_value(value, min, max);
            color_handle_element.style.left = color_value + "px";
        }
    };
    ColorController.prototype.create_color_panel = function (arr) {
        var panel = arr.map(function (item) {
            return "<div data=\"" + item[0] + "\" id=\"" + item[0] + "_panel\" class=\"color-panel-item\">\n    <div class=\"color-label\">" + item[1] + "</div>\n    <div class=\"color-strip-panel\">\n      <div id=\"" + item[0] + "_panel_strip\" class=\"color-strip\"></div>\n      <div class=\"color-handle\"></div>\n    </div>\n  </div>";
        });
        return panel.join('');
    };
    ColorController.prototype.get_linear_gradient_rgba = function (color, type, max_value) {
        var start_color = (0, tslib_1.__assign)({}, color);
        var end_color = (0, tslib_1.__assign)({}, color);
        start_color[type] = 0;
        end_color[type] = max_value;
        var start_color_hex = (0, color_1.rgba_to_hex)(start_color);
        var end_color_hex = (0, color_1.rgba_to_hex)(end_color);
        return "linear-gradient(90deg, " + start_color_hex + ", " + end_color_hex + ")";
    };
    ColorController.prototype.get_linear_gradient_hsva = function (color, type, max_value) {
        var _a, _b;
        var block = (_b = (_a = this.owner) === null || _a === void 0 ? void 0 : _a.source_block) === null || _b === void 0 ? void 0 : _b.parent_block;
        if (!block) {
            return '';
        }
        var h = this.get_field_value(block, 'H');
        var s = this.get_field_value(block, 'S');
        var v = this.get_field_value(block, 'V');
        var hsv_color = { h: h, s: s, v: v };
        if (type === 'h') {
            return "linear-gradient(90deg, \n        " + (0, color_1.rgba_to_hex)((0, color_1.hsva_to_rgba)((0, tslib_1.__assign)((0, tslib_1.__assign)({}, hsv_color), { a: color.a, h: 0 }))) + ",\n        " + (0, color_1.rgba_to_hex)((0, color_1.hsva_to_rgba)((0, tslib_1.__assign)((0, tslib_1.__assign)({}, hsv_color), { a: color.a, h: 60 }))) + ",\n        " + (0, color_1.rgba_to_hex)((0, color_1.hsva_to_rgba)((0, tslib_1.__assign)((0, tslib_1.__assign)({}, hsv_color), { a: color.a, h: 120 }))) + ",\n        " + (0, color_1.rgba_to_hex)((0, color_1.hsva_to_rgba)((0, tslib_1.__assign)((0, tslib_1.__assign)({}, hsv_color), { a: color.a, h: 180 }))) + ",\n        " + (0, color_1.rgba_to_hex)((0, color_1.hsva_to_rgba)((0, tslib_1.__assign)((0, tslib_1.__assign)({}, hsv_color), { a: color.a, h: 240 }))) + ",\n        " + (0, color_1.rgba_to_hex)((0, color_1.hsva_to_rgba)((0, tslib_1.__assign)((0, tslib_1.__assign)({}, hsv_color), { a: color.a, h: 300 }))) + ",\n        " + (0, color_1.rgba_to_hex)((0, color_1.hsva_to_rgba)((0, tslib_1.__assign)((0, tslib_1.__assign)({}, hsv_color), { a: color.a, h: 360 }))) + ")";
        }
        else {
            var start_color = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, hsv_color), { a: color.a });
            var end_color = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, hsv_color), { a: color.a });
            start_color[type] = 0;
            end_color[type] = max_value;
            var start_color_hex = (0, color_1.rgba_to_hex)((0, color_1.hsva_to_rgba)(start_color));
            var end_color_hex = (0, color_1.rgba_to_hex)((0, color_1.hsva_to_rgba)(end_color));
            return "linear-gradient(90deg, " + start_color_hex + ", " + end_color_hex + ")";
        }
    };
    ColorController.prototype.update_dropdown_color = function () {
        var _this = this;
        var color = this.color;
        if (!color) {
            return;
        }
        if (this.color_review_element) {
            this.color_review_element.style.background = color.toString();
        }
        var color_type = 'rgba';
        var color_list = [['r', 255], ['g', 255], ['b', 255], ['a', 1]];
        if (this.color_format === interfaces_1.EColorControllerFormat.HSVA) {
            color_type = 'hsva';
            color_list = [['h', 360], ['s', 100], ['v', 100], ['a', 1]];
        }
        color_list.forEach(function (item) {
            var _a, _b, _c, _d, _e;
            var ele = document.getElementById(item[0] + "_panel_strip");
            if (!ele) {
                return;
            }
            var value = (_d = (_c = (_b = (_a = _this.owner) === null || _a === void 0 ? void 0 : _a.source_block) === null || _b === void 0 ? void 0 : _b.parent_block) === null || _c === void 0 ? void 0 : _c.get_input_target_block(item[0].toString().toUpperCase())) === null || _d === void 0 ? void 0 : _d.get_field_value('NUM');
            if (!value) {
                var current_panel = document.getElementById(item[0] + "_panel");
                current_panel.style.opacity = '0.2';
                (_e = current_panel === null || current_panel === void 0 ? void 0 : current_panel.querySelector('.color-handle')) === null || _e === void 0 ? void 0 : _e.remove();
                ele.style.cursor = 'not-allowed';
            }
            ele.style.background = color_type === 'rgba' ?
                _this.get_linear_gradient_rgba(color, item[0], item[1]) :
                _this.get_linear_gradient_hsva(color, item[0], item[1]);
        });
    };
    ColorController.prototype.update_value = function (value) {
        var _a, _b;
        if (!this.color || !this.line) {
            return;
        }
        if (this.line === 'A') {
            this.color.a = value / 100;
        }
        else if (this.color_format === interfaces_1.EColorControllerFormat.RGBA) {
            this.color[this.line.toLowerCase()] = value;
        }
        else if (this.color_format === interfaces_1.EColorControllerFormat.HSVA) {
            var block = (_b = (_a = this.owner) === null || _a === void 0 ? void 0 : _a.source_block) === null || _b === void 0 ? void 0 : _b.parent_block;
            if (!block) {
                return;
            }
            var h = this.get_field_value(block, 'H');
            var s = this.get_field_value(block, 'S');
            var v = this.get_field_value(block, 'V');
            // 嵌入积木移除不改变颜色值
            if (!h || !s || !v) {
                return;
            }
            var hsv_color = { h: h, s: s, v: v };
            hsv_color[this.line.toLowerCase()] = value;
            var _c = (0, color_1.hsv_to_rgb)(hsv_color), r = _c[0], g = _c[1], b = _c[2];
            this.color.r = r;
            this.color.g = g;
            this.color.b = b;
        }
        var color_value = this.field_to_color_value(value, this.min, this.max);
        this.set_color_value(color_value);
        this.update_dropdown_color();
    };
    ColorController.prototype.get_field_value = function (block, name) {
        var _a, _b, _c, _d, _e;
        var value = ((_a = block.get_input_target_block(name)) === null || _a === void 0 ? void 0 : _a.get_field_value('NUM')) ||
            ((_e = (_d = (_c = (_b = block.get_input_target_block(name)) === null || _b === void 0 ? void 0 : _b.output_connection) === null || _c === void 0 ? void 0 : _c.target_connection) === null || _d === void 0 ? void 0 : _d.get_shadow_dom()) === null || _e === void 0 ? void 0 : _e.textContent);
        return value;
    };
    /**
     * 把field当前所显示的值转化为滑动条的值。
     * 在controller首次显示，或通过普通输入框输入值时，会调用此方法。
     *
     * 在input失去焦点之前，允许输入不合法的数值，因此需要检查是否满足最大和最小值限制。
     */
    ColorController.prototype.field_to_color_value = function (field_value, min, max) {
        var value = (0, maths_1.clamp)(field_value, min, max);
        var validated_value = min < 0 ? value - min : value;
        var range = max - min;
        return Math.round(validated_value / range * this.color_strip_width);
    };
    ColorController.prototype.bind_color_strip_event = function (item) {
        var _a, _b, _c, _d;
        var data = item.getAttribute('data');
        if (!data) {
            return;
        }
        var owner = (_d = (_c = (_b = (_a = this.owner) === null || _a === void 0 ? void 0 : _a.source_block) === null || _b === void 0 ? void 0 : _b.parent_block) === null || _c === void 0 ? void 0 : _c.get_input_target_block(data.toUpperCase())) === null || _d === void 0 ? void 0 : _d.get_field('NUM');
        if (!owner) {
            this.color_handle_element = null;
            return;
        }
        this.owner = owner;
        this.line = data.toUpperCase();
        this.color_handle_element = item.querySelector('.color-handle');
        this.current_color_panel_element = item.querySelector('.color-strip-panel');
        this.update_color();
    };
    /**
     * 绑定滑动条控制按钮事件。
     */
    ColorController.prototype.bind_color_event = function (ev) {
        var _this = this;
        ev.preventDefault();
        if (!this.current_color_panel_element) {
            return;
        }
        this.current_color_panel_item_left = this.current_color_panel_element.getBoundingClientRect().left;
        var move_color_handle = this.move_color_handle.bind(this);
        var remove_color_event = function () {
            _this.current_color_panel_item_left = undefined;
            document.removeEventListener('mousemove', move_color_handle);
            document.removeEventListener('mouseup', remove_color_event);
        };
        document.addEventListener('mousemove', move_color_handle);
        document.addEventListener('mouseup', remove_color_event);
    };
    /**
     * 拖动滑动条按钮时，更新滑动条样式及owner field上显示的值。
     */
    ColorController.prototype.move_color_handle = function (e) {
        e.stopPropagation();
        this.update_color_and_field_value(e.clientX);
    };
    /**
     * 点击滑动条区域时，更新滑动条样式及owner field上显示的值。
     */
    ColorController.prototype.set_color_handle_position = function (e) {
        if (!this.current_color_panel_element) {
            return;
        }
        this.current_color_panel_item_left = this.current_color_panel_element.getBoundingClientRect().left;
        this.update_color_and_field_value(e.clientX);
    };
    ColorController.prototype.update_color_and_field_value = function (client_x) {
        var _a, _b;
        if (!this.current_color_panel_item_left || !this.color_handle_element) {
            return;
        }
        var scale = ((_b = (_a = this.owner) === null || _a === void 0 ? void 0 : _a.source_block) === null || _b === void 0 ? void 0 : _b.get_workspace().get_scale()) || 1;
        // 把鼠标移动距离转化为滑动条的值，需要检查移动距离是否超过滑动条的最大和最小长度
        var move_length = (client_x - this.current_color_panel_item_left) / scale;
        var color_value = (0, maths_1.clamp)(move_length, 0, this.color_strip_width);
        // 把滑动条的值转化为field当前需要显示的值
        var range = this.max - this.min;
        var value = Math.round(color_value / this.color_strip_width * range);
        var field_value = this.min < 0 ? value + this.min : value;
        this.set_color_value(color_value);
        // 更新field上html input所显示的值，不修改field保存的值，即不会产生change事件，在协作场景下也不会发生同步
        // 同时需要resize html input
        if (this.owner) {
            this.owner.set_html_input_value(field_value.toString());
            this.owner.on_html_input_change();
            // 当前下拉改变另外的值需要同步
            if (this.owner.get_value() !== field_value.toString()) {
                this.owner.set_value(field_value.toString());
            }
        }
    };
    ColorController.prototype.set_color_value = function (color_value) {
        if (!this.color_handle_element) {
            return;
        }
        this.color_handle_element.style.left = color_value + "px";
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Blink)
    ], ColorController.prototype, "Blink", void 0);
    ColorController = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], ColorController);
    return ColorController;
}(_1.Controller));
exports.ColorController = ColorController;
