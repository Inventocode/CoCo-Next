"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyoutButton = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("../di");
var dom_1 = require("../utils/dom");
/**
 * Class for a button in the flyout.
 */
var FlyoutButton = /** @class */ (function () {
    function FlyoutButton(options) {
        var _this = this;
        this.position_ = gl_matrix_1.vec2.fromValues(0, 0);
        this.svg_group = undefined;
        this.width = 0;
        this.width_ratio = undefined;
        this.height = 0;
        this.margin_right = 0;
        /**
         * Do something when the button is clicked.
         */
        this.on_mouse_up = function (e) {
            var _a;
            var gesture = (_a = _this.target_workspace) === null || _a === void 0 ? void 0 : _a.get_gesture(e);
            if (gesture) {
                gesture.cancel();
            }
            if (_this.callback_) {
                _this.callback_(_this, e);
            }
        };
        // Labels behave the same as buttons, but are styled differently.
        this.workspace_ = options.workspace;
        this.target_workspace = options.target_workspace;
        this.text_ = options.xml.getAttribute('text') || '';
        this.position_ = gl_matrix_1.vec2.fromValues(0, 0);
        this.is_label = options.is_label;
        this.flyout_padding_left = options.flyout_padding_left;
        this.flyout_padding_right = options.flyout_padding_right;
        this.callback_ = undefined;
        var xml = options.xml, target_workspace = options.target_workspace;
        // 回调相关
        var callback_key = xml.getAttribute('callbackkey');
        if (this.is_label && callback_key) {
            console.warn("Labels should not have callbacks. Label text: " + this.text_);
        }
        if (!this.is_label) {
            if (!(callback_key && target_workspace.get_button_callback(callback_key))) {
                console.warn("Buttons should have callbacks. Button text: " + this.text_);
            }
            else {
                this.callback_ = target_workspace.get_button_callback(callback_key);
            }
        }
        this.relation = xml.getAttribute('relation') || undefined;
        // 外观相关
        this.css_class = xml.getAttribute('web-class') || undefined;
        this.default_display = xml.getAttribute('display') || undefined;
        this.type = xml.getAttribute('type') || undefined;
        // 尺寸相关
        this.height = parseInt(xml.getAttribute('height') || '0') || this.height;
        var width_attr = xml.getAttribute('width');
        if (width_attr) {
            var percent = width_attr.match(/[0-9]+%/);
            if (percent && percent[0]) {
                this.width_ratio = parseInt(percent[0]) / 100;
            }
            else {
                this.width = parseInt(width_attr) || 0;
            }
        }
        if (this.type === 'line') {
            this.width_ratio = this.width_ratio || 1;
            this.height = this.height || 11;
        }
        var parse_attr = function (attr) {
            if (typeof attr !== 'string') {
                return undefined;
            }
            var num = parseFloat(attr);
            return isNaN(num) ? undefined : num;
        };
        // 定位相关
        this.position = xml.getAttribute('position') || 'relative';
        this.left = parse_attr(xml.getAttribute('left'));
        this.top = parse_attr(xml.getAttribute('top'));
        this.right = parse_attr(xml.getAttribute('right'));
        this.bottom = parse_attr(xml.getAttribute('bottom'));
        this.align = xml.getAttribute('align') || undefined;
        this.inline = xml.getAttribute('inline') || undefined;
        this.margin_right = parse_attr(xml.getAttribute('margin_right')) || 0;
        // Normal Button 配置项
        this.img_url = xml.getAttribute('img_url') || undefined;
        this.img_width = parse_attr(xml.getAttribute('img_width')) || 0;
        this.img_height = parse_attr(xml.getAttribute('img_height')) || 0;
        this.img_margin_right = parse_attr(xml.getAttribute('img_margin_right')) || 0;
        this.vertical_padding = parse_attr(xml.getAttribute('vertical_padding')) || 0;
        this.option = xml.getAttribute('option') || undefined;
        this.title = xml.getAttribute('title') || undefined;
    }
    FlyoutButton.prototype.get_svg_group = function () {
        return this.svg_group;
    };
    FlyoutButton.prototype.get_target_workspace = function () {
        return this.target_workspace;
    };
    /**
     * Correctly position the flyout button and make it visible.
     */
    FlyoutButton.prototype.show = function (is_show) {
        if (is_show === void 0) { is_show = true; }
        if (!this.svg_group) {
            return;
        }
        this.svg_group.setAttribute('display', is_show ? 'block' : 'none');
        is_show && this.update_callback && this.update_callback(this);
    };
    /**
     * Move the button to the given x, y coordinates.
     * @param x The new x coordinate, in svg (not px).
     * @param y The new y coordinate, in svg (not px).
     */
    FlyoutButton.prototype.move_to = function (x, y) {
        if (!this.workspace_)
            return;
        var scale = this.position === 'fixed' ? this.workspace_.get_scale() : 1;
        this.position_ = gl_matrix_1.vec2.fromValues(x * scale, y * scale);
        this.update_transform();
    };
    /**
     * Update svg attributes to match internal state.
     */
    FlyoutButton.prototype.update_transform = function () {
        if (!this.svg_group || !this.workspace_)
            return;
        var scale = this.position === 'fixed' ? ", scale(" + this.workspace_.get_scale() + ")" : '';
        this.svg_group.setAttribute('transform', "translate(" + this.position_[0] + ", " + this.position_[1] + ")" + scale);
    };
    /**
     * 把button从当前workspace中抽出（但仍然保存在内存中），
     * 仅在flyout中clear_old_blocks时被调用。
     */
    FlyoutButton.prototype.detach = function () {
        if (this.svg_group) {
            (0, dom_1.remove_node)(this.svg_group);
        }
        this.workspace_ = undefined;
    };
    /**
     * 把完整存在内存中的button插入workspace，
     * 仅在flyout显示已缓存按钮时调用。
     * @param new_workspace 指定workspace
     */
    FlyoutButton.prototype.retach = function (new_workspace) {
        this.workspace_ = new_workspace;
        if (this.svg_group && this.workspace_.svg_block_canvas_) {
            this.workspace_.svg_block_canvas_.appendChild(this.svg_group);
        }
    };
    /**
     * Dispose of this button.
     */
    FlyoutButton.prototype.dispose = function () {
        if (this.on_mouse_up_wrapper) {
            this.event.unbind_event(this.on_mouse_up_wrapper);
        }
        if (this.svg_group) {
            // 从 DOM 层级移除 svg_group
            (0, dom_1.remove_node)(this.svg_group);
            this.svg_group = undefined;
        }
        delete this.workspace_;
        delete this.target_workspace;
    };
    /**
     * Create the svg group of the button.
     * @param flyout_width final width of flyout **in svg**.
     */
    FlyoutButton.prototype.create_dom = function (flyout_width) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g;
        var position_and_bind = function () {
            if (!_this.svg_group) {
                return;
            }
            if (!_this.is_label) {
                _this.svg_group.classList.add('blocklyFlyoutClickable');
            }
            _this.update_transform();
            // 1. [bind_event_with_checks + mouseup] requires a mousedown event that also binded with checks,
            //  (check touch_manager.should_handle_event method)
            // 2. [bind_event + mouseup] will trigger the binding event when contextmenu.
            // 3. [bind_event_with_checks + mousedown] in flyout will prevent click evnets from fired..
            //  (check events.bind_event_with_checks)
            // Hence choose 'mouseup', and ensure all buttons are binded a mousedown event with checks.
            _this.on_mouse_up_wrapper = _this.event.bind_event_with_checks(_this.svg_group, 'mouseup', _this, _this.on_mouse_up);
            if ((_this.width <= 0 && !_this.width_ratio) || _this.height <= 0) {
                console.warn('[FlyoutButton] A button without width or height declaration may cause layout error. ', "Please indicate both width and height in the xml of button type: [" + _this.type + "].");
            }
        };
        // 完全自定义的button
        var generate_custom_svg_group = (_a = this.target_workspace) === null || _a === void 0 ? void 0 : _a.get_custom_flyout_button(this.type || '');
        if (generate_custom_svg_group) {
            var custom_button = generate_custom_svg_group(flyout_width);
            if (custom_button instanceof Element) {
                this.svg_group = custom_button;
            }
            else {
                var svg_group = custom_button.svg_group, update_callback = custom_button.update_callback;
                this.svg_group = svg_group;
                this.update_callback = update_callback;
            }
            (_c = (_b = this.workspace_) === null || _b === void 0 ? void 0 : _b.svg_block_canvas_) === null || _c === void 0 ? void 0 : _c.appendChild(this.svg_group);
            this.svg_group.cachedWidth_ && (this.width = this.svg_group.cachedWidth_);
            this.svg_group.cachedHeight_ && (this.height = this.svg_group.cachedHeight_);
            position_and_bind();
            return this.svg_group;
        }
        // 内置类型的button
        switch (this.type) {
            case 'line':
                if (typeof flyout_width !== 'number') {
                    throw Error('Flyout line should be draw when reflow. ');
                }
                this.svg_group = (0, dom_1.create_svg_element)('g', { 'class': 'blocklyLine' });
                (_e = (_d = this.workspace_) === null || _d === void 0 ? void 0 : _d.svg_block_canvas_) === null || _e === void 0 ? void 0 : _e.appendChild(this.svg_group);
                var rect_line = (0, dom_1.create_svg_element)('rect', {
                    'rx': 0,
                    'ry': 0,
                    'height': 0,
                    'width': 0,
                }, this.svg_group);
                this.width = flyout_width - this.flyout_padding_left - this.flyout_padding_right;
                rect_line.setAttribute('y', '5');
                rect_line.setAttribute('width', "" + this.width);
                rect_line.setAttribute('height', '1');
                break;
            case 'normal':
            default:
                if (this.type !== 'normal') {
                    console.warn("Flyout button type [" + this.type + "] is not defined. ", "Rendering " + this + " as a normal button. ");
                }
                var height = this.height || 32;
                var width = this.vertical_padding;
                this.svg_group = (0, dom_1.create_svg_element)('g', { 'class': this.css_class });
                (_g = (_f = this.workspace_) === null || _f === void 0 ? void 0 : _f.svg_block_canvas_) === null || _g === void 0 ? void 0 : _g.appendChild(this.svg_group);
                var rect = (0, dom_1.create_svg_element)('rect', { 'class': 'flyoutButtonNormalRect', 'rx': 4, 'ry': 4 }, this.svg_group);
                if (this.img_url) {
                    var image = (0, dom_1.create_svg_element)('image', {
                        'class': 'flyoutButtonNormalIcon',
                        'height': this.img_height,
                        'width': this.img_width,
                        x: width,
                        y: (height - this.img_height) / 2,
                    }, this.svg_group);
                    image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.img_url);
                    width += this.img_width + this.img_margin_right;
                }
                if (this.text_) {
                    var svg_text = (0, dom_1.create_svg_element)('text', {
                        'class': 'blocklyText',
                        'dominant-baseline': 'middle',
                        x: width,
                        y: height / 2 + 1,
                    }, this.svg_group);
                    svg_text.textContent = this.text_;
                    var text_length = 0;
                    try {
                        text_length = svg_text.getComputedTextLength();
                    }
                    catch (e) {
                        text_length = this.text_.length * 8;
                    }
                    width += text_length;
                }
                width += this.vertical_padding;
                rect.setAttribute('width', "" + width);
                rect.setAttribute('height', "" + height);
                this.width = width;
                this.height = height;
                if (this.option) {
                    var svg_text = (0, dom_1.create_svg_element)('text', {
                        'class': 'blocklyButtonTip',
                        'dominant-baseline': 'middle',
                        x: width + 3,
                        y: height / 2 + 1,
                    }, this.svg_group);
                    svg_text.textContent = "* " + this.option;
                }
                if (this.title) {
                    var title_text = (0, dom_1.create_svg_element)('title', {}, this.svg_group);
                    title_text.textContent = this.title;
                }
                break;
        }
        position_and_bind();
        return this.svg_group;
    };
    FlyoutButton.MARGIN = 5;
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], FlyoutButton.prototype, "event", void 0);
    FlyoutButton = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], FlyoutButton);
    return FlyoutButton;
}());
exports.FlyoutButton = FlyoutButton;
