"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldNumber = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../../../../di");
var interfaces_1 = require("../../../../interfaces");
var constants_1 = require("../../../../constants");
var maths_1 = require("../../../../utils/maths");
var dom_1 = require("../../../../utils/dom");
var utils_1 = require("../../../../utils");
var field_textinput_1 = require("./field_textinput");
var FieldNumber = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(FieldNumber, _super);
    function FieldNumber(o) {
        var _this = _super.call(this, {
            text: (o.opt_value && !isNaN(o.opt_value))
                ? String(o.opt_value) : '0',
            opt_validator: o.opt_validator,
        }) || this;
        _this.controller_option = undefined;
        _this.controller = undefined;
        _this.min_ = -Infinity;
        _this.max_ = Infinity;
        _this.precision_ = 0;
        /**
         * The function render_() is called both on change and on dispose.
         * The visibility of quotes should be updated on dispose **and on undo or redo**
         * This parameter is used to indicate whether
         */
        _this.should_show_quote = false;
        _this.field_type = 'FieldNumber';
        _this.set_constraints(o.opt_min, o.opt_max, o.opt_precision);
        _this.allow_text = undefined; // will be override
        _this.controller_option = o.opt_controller || undefined;
        o.opt_controller && _this.set_controller_option(o.opt_controller);
        return _this;
    }
    FieldNumber_1 = FieldNumber;
    /**
     * TODO:
     * 以后会在外部业务中被覆盖，用于显示特殊的输入组件
     * @param set_num 设置新的输入到ui
     */
    FieldNumber.prototype.show_input_controller = function (set_num) {
        set_num;
    };
    /**
     * TODO:
     * 在外部业务中被覆盖。
     * 隐藏特殊的输入组件，应该要在widget_dispose中被调用。
     */
    FieldNumber.prototype.hide_input_controller = function () { };
    // 放在这里更新是因为撤销到积木消失 + 重做会产生新的Field
    // 会有不触发widget_dispose但更改内容为text的情况
    // 这里更新 allow_text及input 可以保证运行结果正确
    FieldNumber.prototype.init = function () {
        if (this.field_group || !this.source_block) {
            return;
        }
        this.update_allow_text();
        this.field_group = (0, dom_1.create_svg_element)('g', {});
        if (!this.visible_) {
            this.field_group.style.display = 'none';
        }
        if (!this.source_block.is_shadow()) {
            this.border_rect = (0, dom_1.create_svg_element)('rect', { 'rx': 4, 'ry': 4 }, this.field_group);
            this.field_group && this.field_group.classList.add('blocklyFieldTextInput');
        }
        this.input_element = (0, dom_1.create_svg_element)('g', { class: 'blocklyInputElement' }, this.field_group);
        this.text_element = (0, dom_1.create_svg_element)('text', {
            'class': 'blocklyText',
            'font-size': this.theme.font.SIZE,
            'dominant-baseline': 'central',
        }, this.input_element);
        this.update_editable();
        this.source_block.get_svg_root().appendChild(this.field_group);
        this.bind_field_click_event();
        this.update_input();
        this.render_();
    };
    /**
     * Set the maximum, minimum and precision constraints on this field.
     * Any of these properties may be undefiend or NaN to be disabled.
     * Setting precision (usually a power of 10) enforces a minimum step between
     * values. That is, the user's value will rounded to the closest multiple of
     * precision. The least significant digit place is inferred from the precision.
     * Integers values can be enforces by choosing an integer precision.
     * @param {number|string|undefined} min Minimum value.
     * @param {number|string|undefined} max Maximum value.
     * @param {number|string|undefined} precision Precision for value.
     */
    FieldNumber.prototype.set_constraints = function (min, max, precision) {
        precision = parseFloat(precision);
        this.precision_ = isNaN(precision) ? 0 : precision;
        min = parseFloat(min);
        this.min_ = isNaN(min) ? -Infinity : min;
        max = parseFloat(max);
        this.max_ = isNaN(max) ? Infinity : max;
        this.set_value(this.get_validated_value(this.get_value()));
    };
    /**
     * Validation function of a number field.
     * @param text current text
     * @returns validated text according to block setting
     */
    FieldNumber.prototype.get_validated_value = function (text) {
        // Check wheter the input is a number
        if (!(0, maths_1.is_valid_number)(text)) {
            if (!this.allow_text) {
                return '';
            }
            return text;
        }
        // Number handling
        var n = parseFloat(text); // TODO use customized parseFloat
        // Round to nearest multiple of precision.
        if (this.precision_) {
            n = Math.round(n / Number(this.precision_)) * Number(this.precision_);
        }
        // Get the value in range.
        if (!this.exceptions || this.exceptions.indexOf(n) === -1) {
            // value 为 Infinity 或者 -Infinity 的时候不进行模运算
            if (this.mod_ != undefined && n !== Infinity && n !== -Infinity) {
                var max = Number(this.max_);
                var min = Number(this.min_);
                var mod = max - min;
                n = n % mod;
                if (this.mod_) {
                    // mod_为true，range是(min, max]
                    if (n <= min) {
                        n += mod;
                    }
                    else if (n > max) {
                        n -= mod;
                    }
                }
                else {
                    // mod_为true，range是[min, max)
                    if (n < min) {
                        n += mod;
                    }
                    else if (n >= max) {
                        n -= mod;
                    }
                }
            }
            n = (0, maths_1.clamp)(n, this.min_, this.max_);
        }
        return String(n);
        // let final_text = String(n);
        // Codemao: Here is used to deal with number precision error
        // if (this.precision_ && final_text.indexOf('.') !== -1) {
        //   let digit = final_text.indexOf('.');
        //   digit = digit + 1 + Math.log10(1 / Number(this.precision_));
        //   if (final_text.length >= digit) {
        //     final_text = final_text.substring(0, digit);
        //   }
        // }
        // return final_text;
    };
    /**
     * Set allow_text parameter of current instance of field_numebr.
     * See the comments to this.allow_text to know more.
     * @param allow_text whether this field accepts text input or not
     */
    FieldNumber.prototype.set_allow_text = function (allow_text) {
        if (typeof this.allow_text !== 'undefined' || allow_text === undefined) {
            return;
        }
        this.allow_text = allow_text;
    };
    /**
     * 通过白名单，更新field的allow_text属性。
     */
    FieldNumber.prototype.update_allow_text = function () {
        var _a, _b;
        if (typeof this.allow_text !== 'undefined' || !((_a = this.source_block) === null || _a === void 0 ? void 0 : _a.parent_block)) {
            return;
        }
        var allow_text = false;
        var parent_block = this.source_block.parent_block;
        var input_name = (_b = parent_block.get_input_with_block(this.source_block)) === null || _b === void 0 ? void 0 : _b.name;
        if (FieldNumber_1.WHITE_LIST_BLOCKS.includes(parent_block.type)) {
            allow_text = true;
        }
        else if (Object.keys(FieldNumber_1.WHITE_LIST_SPECIAL).includes(parent_block.type) &&
            FieldNumber_1.WHITE_LIST_SPECIAL[parent_block.type] === input_name) {
            allow_text = true;
        }
        this.set_allow_text(allow_text);
    };
    FieldNumber.prototype.set_mod = function (mode) {
        if (!mode) {
            this.mod_ = undefined;
            return;
        }
        this.mod_ = mode === 'true';
    };
    FieldNumber.prototype.set_exceptions = function (e) {
        if (!e) {
            this.exceptions = undefined;
            return;
        }
        this.exceptions = e;
    };
    FieldNumber.prototype.widget_dispose = function () {
        var _this = this;
        return function () {
            if (!_this.html_input)
                return;
            var text = _this.get_validated_value(_this.html_input.value) || _this.html_input.defaultValue;
            _super.prototype.widget_dispose.call(_this, text)();
            if (_this.controller) {
                _this.controller.hide();
            }
        };
    };
    /**
     * Draws the border with the correct width.
     * Saves the computed width in a property.
     */
    FieldNumber.prototype.reset_text_element = function () {
        var _this = this;
        if (!this.input_element || !this.text_element) {
            return;
        }
        (0, dom_1.remove_children)(this.input_element);
        var append_text_element = function () {
            if (utils_1.is.safari() || utils_1.is.mobile()) {
                _this.text_element = (0, dom_1.create_svg_element)('text', {
                    'class': 'blocklyText',
                    'dy': '.4em',
                    'font-size': _this.theme.font.SIZE, // Nemo font-size is bigger, 1 pt = px * 96/72 = px * 4/3
                }, _this.input_element);
            }
            else {
                _this.text_element = (0, dom_1.create_svg_element)('text', {
                    'class': 'blocklyText',
                    'dominant-baseline': 'central',
                    'font-size': _this.theme.font.SIZE, // Nemo font-size is bigger, 1 pt = px * 96/72 = px * 4/3
                }, _this.input_element);
            }
        };
        if (this.should_show_quote) {
            // Left
            (0, dom_1.create_svg_element)('path', {
                d: constants_1.ICON.LEFT_QUOTA,
                transform: "translate(" + FieldNumber_1.LEFT_QUOTE_X + ", " + FieldNumber_1.QUOTE_Y + ")",
                'class': 'blocklyQuote',
            }, this.input_element);
            // Text
            append_text_element();
            // Right
            this.quote_right = (0, dom_1.create_svg_element)('path', {
                d: constants_1.ICON.RIGHT_QUOTA,
                'class': 'blocklyQuote',
            }, this.input_element);
        }
        else {
            delete this.quote_right;
            append_text_element();
        }
    };
    FieldNumber.prototype.add_quote_input = function () {
        var _a;
        if (!this.visible_ || !this.text_element) {
            this.size_.width = 0;
            return;
        }
        if (!this.quote_right) {
            this.reset_text_element();
        }
        // Replace the text
        (0, dom_1.remove_children)(this.text_element);
        var textNode = document.createTextNode(this.get_display_text());
        this.text_element.appendChild(textNode);
        this.update_width();
        // Locate right quote
        var RIGHT_QUOTE_X = FieldNumber_1.LEFT_QUOTE_X +
            FieldNumber_1.QUOTE_WIDTH +
            this.size_.width;
        (_a = this.quote_right) === null || _a === void 0 ? void 0 : _a.setAttribute('transform', "translate(" + RIGHT_QUOTE_X + ", " + FieldNumber_1.QUOTE_Y + ")");
    };
    FieldNumber.prototype.remove_quote_input = function () {
        if (this.quote_right) {
            this.reset_text_element();
        }
    };
    FieldNumber.prototype.update_input = function () {
        this.should_show_quote = !!this.allow_text && !(0, maths_1.is_valid_number)(this.get_display_text());
        if (this.should_show_quote) {
            this.add_quote_input();
        }
        else {
            this.remove_quote_input();
        }
    };
    FieldNumber.prototype.set_text = function (new_text) {
        if (new_text === null) {
            // No change if null.
            return;
        }
        new_text = String(new_text);
        if (new_text === this.text_) {
            // No change.
            return;
        }
        this.text_ = new_text;
        this.update_input();
        this.force_rerender();
        if (this.controller) {
            this.controller.update_value(Number(new_text));
        }
    };
    FieldNumber.prototype.set_controller_option = function (controller) {
        this.controller_option = controller;
        switch (controller.type) {
            case interfaces_1.ControllerType.SLIDER:
                this.controller = this.slider_controller;
                break;
            case interfaces_1.ControllerType.ANGLE_SCALE:
                this.controller = this.angle_controller;
                break;
            case interfaces_1.ControllerType.COLOR_PICKER:
                this.controller = this.color_controller;
                break;
            default:
                break;
        }
    };
    FieldNumber.prototype.get_controller_option = function () {
        return this.controller_option;
    };
    FieldNumber.prototype.show_editor = function (e, dispose_cb) {
        var _this = this;
        e;
        if (!this.source_block) {
            throw new ReferenceError('source_block is undefined');
        }
        this.workspace_ = this.source_block.get_workspace();
        var hide_widget_and_panel = function () {
            _this.focus(false);
            // dispose时重置状态
            if (_this.runtime_data.editing === _this) {
                _this.focus(false);
            }
            dispose_cb && dispose_cb();
            _this.widget_dispose()();
        };
        this.widget_div.show(this, hide_widget_and_panel);
        var div = this.widget_div.DIV;
        if (div == undefined) {
            throw new Error('DIV is undefined');
        }
        // Create the input.
        this.html_input = this.widget_create();
        this.bind_input_events();
        this.html_input.focus();
        this.html_input.select();
        if (this.controller && this.controller_option) {
            this.controller.show(this, this.controller_option);
        }
        return this.html_input;
    };
    var FieldNumber_1;
    FieldNumber.QUOTE_WIDTH = 10;
    FieldNumber.LEFT_QUOTE_X = -10;
    FieldNumber.QUOTE_Y = 0;
    /**
     * All field_number inside these blocks should support text.
     * TODO: 找一个更优的方案，extension / 业务方migration
     */
    FieldNumber.WHITE_LIST_BLOCKS = [
        'math_arithmetic',
        'logic_compare',
        'variables_set',
        'change_variable',
        'cloud_variables_set',
        'change_cloud_variable',
        'lists_append',
        'lists_index_of',
        'lists_is_exist',
        'cloud_lists_append',
        'cloud_lists_index_of',
        'cloud_lists_is_exist',
        'procedures_2_callnoreturn',
        'procedures_2_callreturn',
        'procedures_2_return_value',
        'wood_block_set',
        'wood_block_get',
        'auto_player_set_feature',
    ];
    /**
     * Some field_number (indicated by the value) inside these blocks should support text.
     */
    FieldNumber.WHITE_LIST_SPECIAL = {
        'lists_insert_value': 'VALUE',
        'lists_replace': 'VALUE',
        'cloud_lists_insert_value': 'VALUE',
        'cloud_lists_replace': 'VALUE',
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.slider_controller)
    ], FieldNumber.prototype, "slider_controller", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.angle_controller)
    ], FieldNumber.prototype, "angle_controller", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.color_controller)
    ], FieldNumber.prototype, "color_controller", void 0);
    FieldNumber = FieldNumber_1 = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], FieldNumber);
    return FieldNumber;
}(field_textinput_1.FieldTextInput));
exports.FieldNumber = FieldNumber;
