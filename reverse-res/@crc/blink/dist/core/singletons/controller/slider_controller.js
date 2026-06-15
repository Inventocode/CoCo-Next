"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderController = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var maths_1 = require("../../utils/maths");
var color_1 = require("../../utils/color");
var _1 = require(".");
var SliderController = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(SliderController, _super);
    function SliderController() {
        var _this = _super.call(this) || this;
        // 从owner获取的属性
        _this.base_color = new color_1.Color('#000000');
        _this.left_text = '';
        _this.right_text = '';
        _this.min = 0;
        _this.max = 100;
        /**
         * 滑块轨道的宽度，来自设计稿。该值不因缩放而重新计算，而是在移动滑块时考虑鼠标移动距离的按比例缩放。
         */
        _this.slider_width = 140;
        return _this;
    }
    SliderController.prototype.show = function (owner, controller) {
        var _a;
        if (typeof owner.min_ !== 'number' || typeof owner.max_ !== 'number') {
            return;
        }
        var source_block = ((_a = owner.source_block) === null || _a === void 0 ? void 0 : _a.is_shadow())
            ? owner.source_block.parent_block
            : owner.source_block;
        if (!source_block) {
            return;
        }
        if (!this.slider) {
            this.init();
        }
        this.owner = owner;
        this.min = owner.min_;
        this.max = owner.max_;
        this.left_text = controller.left_text;
        this.right_text = controller.right_text;
        this.base_color = source_block.get_colour();
        this.update_slider();
        this.container.style.display = 'block';
        // 对滑块进行定位前先渲染，获得slider宽度
        this.position();
    };
    SliderController.prototype.init = function () {
        this.slider = document.createElement('div');
        this.slider.classList.add('blockly-controller', 'slider-controller');
        this.slider.setAttribute('tabindex', '-1');
        // 滑块左侧文字
        this.left_text_ele = document.createElement('span');
        this.left_text_ele.classList.add('slider-text');
        this.left_text_ele.innerText = this.left_text;
        this.slider.appendChild(this.left_text_ele);
        // 滑块部分
        var slider_wrapper = document.createElement('div');
        slider_wrapper.classList.add('slider-wrapper');
        this.slider.appendChild(slider_wrapper);
        // 滑块底部轨道
        this.slider_rail = document.createElement('div');
        this.slider_rail.classList.add('slider-rail');
        this.slider_rail.style.backgroundColor = this.base_color.toString();
        slider_wrapper.appendChild(this.slider_rail);
        // 滑块已选中部分
        this.slider_track = document.createElement('div');
        this.slider_track.classList.add('slider-track');
        this.slider_track.style.backgroundColor = this.base_color.toString();
        slider_wrapper.appendChild(this.slider_track);
        // 滑块控制按钮
        this.slider_handle = document.createElement('div');
        this.slider_handle.classList.add('slider-handle');
        this.slider_handle.style.backgroundColor = this.base_color.toString();
        slider_wrapper.appendChild(this.slider_handle);
        // 滑块右侧文字
        this.right_text_ele = document.createElement('span');
        this.right_text_ele.classList.add('slider-text');
        this.right_text_ele.innerText = this.right_text;
        this.slider.appendChild(this.right_text_ele);
        this.slider_handle.addEventListener('mousedown', this.bind_slider_event.bind(this));
        slider_wrapper.addEventListener('mousedown', this.bind_slider_event.bind(this));
        slider_wrapper.addEventListener('mouseup', this.set_slider_handle_position.bind(this));
        this.container.appendChild(this.slider);
        document.body.appendChild(this.container);
    };
    /**
     * field显示滑动条控件后，根据field的信息更新滑动条的属性。
     * 比如两端文案、颜色等。
     */
    SliderController.prototype.update_slider = function () {
        if (!this.slider_track
            || !this.slider_handle
            || !this.slider_rail
            || !this.left_text_ele
            || !this.right_text_ele
            || !this.owner) {
            return;
        }
        this.slider_handle.style.backgroundColor = this.base_color.toString();
        var track_color = new color_1.Color({
            r: this.base_color.r,
            g: this.base_color.g,
            b: this.base_color.b,
            a: 0.6,
        });
        this.slider_track.style.backgroundColor = track_color.toString();
        var rail_color = new color_1.Color({
            r: this.base_color.r,
            g: this.base_color.g,
            b: this.base_color.b,
            a: 0.2,
        });
        this.slider_rail.style.backgroundColor = rail_color.toString();
        this.left_text_ele.innerText = this.left_text;
        this.right_text_ele.innerText = this.right_text;
        var slider_value = this.field_to_slider_value(Number(this.owner.get_value()));
        this.set_slider_value(slider_value);
    };
    SliderController.prototype.update_value = function (value) {
        var slider_value = this.field_to_slider_value(value);
        this.set_slider_value(slider_value);
    };
    /**
     * 把field当前所显示的值转化为滑动条的值。
     * 在controller首次显示，或通过普通输入框输入值时，会调用此方法。
     *
     * 在input失去焦点之前，允许输入不合法的数值，因此需要检查是否满足最大和最小值限制。
     */
    SliderController.prototype.field_to_slider_value = function (field_value) {
        var value = (0, maths_1.clamp)(field_value, this.min, this.max);
        var validated_value = this.min < 0 ? value - this.min : value;
        var range = this.max - this.min;
        return Math.round(validated_value / range * this.slider_width);
    };
    /**
     * 绑定滑动条控制按钮事件。
     */
    SliderController.prototype.bind_slider_event = function () {
        var _this = this;
        if (!this.slider_rail) {
            return;
        }
        this.slider_rail_left = this.slider_rail.getBoundingClientRect().left;
        var move_slider_handle = this.move_slider_handle.bind(this);
        var remove_slider_event = function () {
            _this.slider_rail_left = undefined;
            document.removeEventListener('mousemove', move_slider_handle);
            document.removeEventListener('mouseup', remove_slider_event);
        };
        document.addEventListener('mousemove', move_slider_handle);
        document.addEventListener('mouseup', remove_slider_event);
    };
    /**
     * 拖动滑动条按钮时，更新滑动条样式及owner field上显示的值。
     */
    SliderController.prototype.move_slider_handle = function (e) {
        e.stopPropagation();
        this.update_slider_and_field_value(e.clientX);
    };
    /**
     * 点击滑动条区域时，更新滑动条样式及owner field上显示的值。
     */
    SliderController.prototype.set_slider_handle_position = function (e) {
        if (!this.slider_rail) {
            return;
        }
        this.slider_rail_left = this.slider_rail.getBoundingClientRect().left;
        this.update_slider_and_field_value(e.clientX);
    };
    /**
     * 同步更新slider和field的值。
     * 拖动滑动条控制按钮，或点击滑动条时调用。
     */
    SliderController.prototype.update_slider_and_field_value = function (client_x) {
        var _a, _b;
        if (!this.slider_rail_left) {
            return;
        }
        var scale = ((_b = (_a = this.owner) === null || _a === void 0 ? void 0 : _a.source_block) === null || _b === void 0 ? void 0 : _b.get_workspace().get_scale()) || 1;
        // 把鼠标移动距离转化为滑动条的值，需要检查移动距离是否超过滑动条的最大和最小长度
        var move_length = (client_x - this.slider_rail_left) / scale;
        var slider_value = (0, maths_1.clamp)(move_length, 0, this.slider_width);
        // 把滑动条的值转化为field当前需要显示的值
        var range = this.max - this.min;
        var value = Math.round(slider_value / this.slider_width * range);
        var field_value = this.min < 0 ? value + this.min : value;
        // 更新滑动条样式
        this.set_slider_value(slider_value);
        // 更新field上html input所显示的值，不修改field保存的值，即不会产生change事件，在协作场景下也不会发生同步
        // 同时需要resize html input
        if (this.owner) {
            this.owner.set_html_input_value(field_value.toString());
            this.owner.on_html_input_change();
        }
    };
    /**
     * 设置滑动条的值（实际上就是滑动条的样式）。
     */
    SliderController.prototype.set_slider_value = function (slider_value) {
        if (!this.slider_handle || !this.slider_track) {
            return;
        }
        this.slider_handle.style.left = slider_value + "px";
        this.slider_track.style.width = slider_value + "px";
    };
    SliderController = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], SliderController);
    return SliderController;
}(_1.Controller));
exports.SliderController = SliderController;
