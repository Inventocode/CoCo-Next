"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldTextInput = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../../../../di");
var maths_1 = require("../../../../utils/maths");
var dom_1 = require("../../../../utils/dom");
var is_1 = require("../../../../utils/is");
var field_1 = require("./field");
var FieldTextInput = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(FieldTextInput, _super);
    function FieldTextInput(o) {
        var _this = _super.call(this, o.text, o.opt_validator) || this;
        _this.field_type = 'FieldTextInput';
        /**
         * Allow browser to spellcheck this field.
         */
        _this.spellcheck_ = true;
        _this.is_composition_inputting = false;
        _this.on_start_composition = function () { _this.is_composition_inputting = true; };
        _this.on_end_composition = function () { _this.is_composition_inputting = false; };
        _this.size_ = new maths_1.Size(0, 30);
        return _this;
    }
    FieldTextInput_1 = FieldTextInput;
    /**
     * Resize the editor and the underlying block to fit the text.
     */
    FieldTextInput.prototype.resize_editor = function () {
        var _a;
        if (!this.source_block || !this.workspace_)
            return;
        var div = this.widget_div.DIV;
        if (!this.field_group || !div) {
            return;
        }
        var size;
        var xy;
        if (!this.source_block.is_shadow()) {
            size = (0, dom_1.get_size_attr)(this.border_rect || this.field_group);
            xy = (0, dom_1.get_page_offset)(this.field_group);
        }
        else {
            size = { width: this.source_block.width, height: this.source_block.height },
                xy = (0, dom_1.get_page_offset)(this.source_block.svg_group);
        }
        div.style.width = size.width + "px";
        div.style.height = size.height + "px";
        div.style.left = xy[0] + "px";
        div.style.top = xy[1] + "px";
        div.style.transformOrigin = 'top left';
        div.style.transform = "scale(" + ((_a = this.workspace_.get_scale()) !== null && _a !== void 0 ? _a : 1) + ")";
    };
    /**
     * Show the inline free-text editor on top of the text.
     * @param opt_quietInput True if editor should be created without
     *     focus.  Defaults to false.
     */
    FieldTextInput.prototype.show_editor = function (e, dispose_cb) {
        var _this = this;
        e;
        if (!this.source_block) {
            throw new ReferenceError('source_block is undefined');
        }
        this.workspace_ = this.source_block.get_workspace();
        // Note:
        // Nemo overrides the funtion to show editor inside the project
        // So handle pc here only, mobile-related codes are deleted
        var hide_widget_and_panel = function () {
            _this.focus(false);
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
        return this.html_input;
    };
    FieldTextInput.prototype.update_width = function () {
        if (!this.text_element || !this.source_block) {
            return;
        }
        var width = this.utils.get_cached_width(this.text_element);
        if (!this.source_block.is_shadow()) {
            // 直接在积木上的纯输入框，需要调整自身左右间距及位置。
            // 为了让短字符居中，需要根据字符的长度进行调整padding
            var padding_x = width >= this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD
                ? this.theme.renderer.TEXT_PADDING_IN_FIELD
                : (this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD + 2 * this.theme.renderer.TEXT_PADDING_IN_FIELD - width) / 2;
            this.text_element.setAttribute('x', "" + padding_x);
            width += 2 * padding_x;
        }
        this.size_.width = width;
    };
    FieldTextInput.prototype.update_height = function () {
        var _a;
        _super.prototype.update_height.call(this);
        (_a = this.text_element) === null || _a === void 0 ? void 0 : _a.setAttribute('y', String(this.size_.height / 2));
    };
    FieldTextInput.prototype.layout = function (cursor_xy, row_height) {
        if (!this.field_group || !this.text_element) {
            return;
        }
        cursor_xy[0] += this.render_sep;
        // Center align
        this.field_group.setAttribute('transform', "translate(" + cursor_xy[0] + ", " + (cursor_xy[1] + (row_height - this.size_.height) / 2) + ")");
        cursor_xy[0] += this.size_.width;
    };
    /**
     * Check to see if the contents of the editor validates.
     * Style the editor accordingly.
     */
    FieldTextInput.prototype.validate_ = function () {
        var valid = 'true';
        if (!this.html_input) {
            return;
        }
        if (this.source_block) {
            valid = this.call_validator(this.html_input.value);
        }
        if (valid == undefined) {
            (0, dom_1.add_class)(this.html_input, 'blocklyInvalidInput');
        }
        else {
            (0, dom_1.remove_class)(this.html_input, 'blocklyInvalidInput');
        }
    };
    /**
     * Close the editor, save the results, and dispose of the editable
     * text field's elements.
     * @return Closure to call on destruction of the WidgetDiv.
     */
    FieldTextInput.prototype.widget_dispose = function (text) {
        var _this = this;
        return function () {
            var _a, _b;
            if (!_this.source_block || !_this.workspace_ || !_this.html_input)
                return;
            if (!text) {
                text = _this.html_input.value;
            }
            var current_group = _this.events.get_group();
            _this.events.set_group(current_group || true);
            var event;
            if (text !== _this.html_input.defaultValue && _this.events.is_enabled()) {
                event = _this.change_event_factory('field', {
                    block: _this.source_block,
                    old_value: _this.html_input.defaultValue,
                    new_value: text,
                    name: _this.name,
                });
            }
            _this.set_text(text);
            ((_a = _this.source_block) === null || _a === void 0 ? void 0 : _a.rendered) && _this.source_block.render();
            _this.html_input.onKeyDownWrapper_ && _this.events.unbind_event(_this.html_input.onKeyDownWrapper_);
            _this.html_input.onKeyUpWrapper_ && _this.events.unbind_event(_this.html_input.onKeyUpWrapper_);
            _this.html_input.onKeyPressWrapper_ && _this.events.unbind_event(_this.html_input.onKeyPressWrapper_);
            _this.html_input.onInputWrapper_ && _this.events.unbind_event(_this.html_input.onInputWrapper_ || []);
            _this.html_input.onWorkspaceChangeWrapper_ && ((_b = _this.workspace_) === null || _b === void 0 ? void 0 : _b.remove_change_listener(_this.html_input.onWorkspaceChangeWrapper_));
            _this.html_input.on_composition_start_wrapper_ && _this.events.unbind_event(_this.html_input.on_composition_start_wrapper_);
            _this.html_input.on_composition_end_wrapper_ && _this.events.unbind_event(_this.html_input.on_composition_end_wrapper_);
            delete _this.html_input;
            // Delete style properties.
            var style = _this.widget_div.DIV.style;
            style.width = 'auto';
            style.height = 'auto';
            style.fontSize = '';
            style.transition = '';
            style.boxShadow = '';
            style.borderRadius = '';
            if (event) {
                _this.events.fire(event);
            }
            _this.events.set_group(false);
        };
    };
    /**
     * Handle key down to the editor.
     * @param {!Event} e Keyboard event.
     * @private
     */
    FieldTextInput.prototype.on_html_input_keydown = function (e) {
        var _a;
        if (!this.html_input)
            return;
        var tabKey = 9;
        var enterKey = 13;
        var escKey = 27;
        if (e.keyCode == enterKey) {
            this.widget_div.hide();
        }
        else if (e.keyCode == escKey) {
            this.html_input.value = this.html_input.defaultValue;
            this.widget_div.hide();
        }
        else if (e.keyCode == tabKey) {
            this.widget_div.hide();
            (_a = this.source_block) === null || _a === void 0 ? void 0 : _a.tab(this, !e.shiftKey);
            e.preventDefault();
        }
    };
    FieldTextInput.prototype.on_html_input_change = function () {
        var _a;
        if (!this.html_input)
            return;
        // Update source block.
        var text = this.html_input.value;
        if (text !== this.html_input.oldValue_) {
            this.html_input.oldValue_ = text;
            this.set_value(text);
            this.validate_();
        }
        else if (is_1.is.webkit()) {
            // Cursor key.  Render the source block to show the caret moving.
            // Chrome only (version 26, OS X).
            (_a = this.source_block) === null || _a === void 0 ? void 0 : _a.render();
        }
        this.resize_editor();
    };
    FieldTextInput.prototype.widget_create = function (tag_name, class_name) {
        var _a;
        if (tag_name === void 0) { tag_name = 'input'; }
        if (class_name === void 0) { class_name = 'blocklyHtmlInput'; }
        var div = this.widget_div.DIV;
        if (!this.source_block || !this.workspace_ || !div) {
            throw new Error('Trying to create a field editor without a source block.');
        }
        var html_input = (0, dom_1.create_dom)(tag_name, class_name);
        html_input.setAttribute('spellcheck', String(this.spellcheck_));
        html_input.style.fontSize = FieldTextInput_1.FONTSIZE + "pt";
        html_input.value = html_input.defaultValue = this.text_;
        html_input.oldValue_ = undefined;
        html_input.style.webkitAppearance = 'none';
        div.appendChild(html_input);
        this.resize_editor();
        this.validate_();
        if (this.source_block.workspace.options.theme === 'dark') {
            return html_input;
        }
        if (this.source_block.is_shadow()) {
            div.style.borderRadius = FieldTextInput_1.FONTSIZE + "pt";
            html_input.style.borderRadius = FieldTextInput_1.FONTSIZE + "pt";
            var border_color = ((_a = this.source_block.parent_block) === null || _a === void 0 ? void 0 : _a.get_colour()) || '#fff';
            html_input.style.boxShadow = "inset " + border_color + " 0px 0px 0px 2px";
        }
        else {
            div.style.borderRadius = "4px";
            html_input.style.borderRadius = "4px";
            var border_color = this.source_block.get_colour() || '#fff';
            html_input.style.boxShadow = "inset " + border_color + " 0px 0px 0px 2px";
        }
        div.style.transition = 'box-shadow 0.25s ease 0s';
        div.style.boxShadow = "rgba(255, 255, 255, 1) 0px 0px 0px 3px";
        return html_input;
    };
    FieldTextInput.prototype.bind_input_events = function () {
        var _a;
        if (!this.html_input)
            return;
        // Bind to keydown -- trap Enter without IME and Esc to hide.
        this.html_input.onKeyDownWrapper_ = this.events.bind_event_with_checks(this.html_input, 'keydown', this, this.on_html_input_keydown);
        // Bind to keyup -- trap Enter; resize after every keystroke.
        this.html_input.onKeyUpWrapper_ = this.events.bind_event_with_checks(this.html_input, 'keyup', this, this.on_html_input_change);
        // Bind to keyPress -- repeatedly resize when holding down a key.
        this.html_input.onKeyPressWrapper_ = this.events.bind_event_with_checks(this.html_input, 'keypress', this, this.on_html_input_change);
        this.html_input.onInputWrapper_ = this.events.bind_event(this.html_input, 'input', this, this.on_html_input_change);
        this.html_input.onWorkspaceChangeWrapper_ = this.resize_editor.bind(this);
        (_a = this.workspace_) === null || _a === void 0 ? void 0 : _a.add_change_listener(this.html_input.onWorkspaceChangeWrapper_);
        this.html_input.on_composition_start_wrapper_ = this.events.bind_event_with_checks(this.html_input, 'compositionstart', this, this.on_start_composition);
        this.html_input.on_composition_end_wrapper_ = this.events.bind_event_with_checks(this.html_input, 'compositionend', this, this.on_end_composition);
    };
    /**
     * Set whether this field is spellchecked by the browser.
     * @param {boolean} check True if checked.
     */
    FieldTextInput.prototype.set_spell_check = function (check) {
        this.spellcheck_ = check;
    };
    /**
     * Set the value of this field.
     * @param {?string} newValue New value.
     * @override
     */
    FieldTextInput.prototype.set_value = function (newValue) {
        if (newValue == undefined) {
            return; // No change if undefined.
        }
        if (this.source_block) {
            var validated = this.call_validator(newValue);
            // If the new value is invalid, validation returns undefined.
            // In this case we still want to display the illegal result.
            if (validated != undefined) {
                newValue = validated;
            }
        }
        _super.prototype.set_value.call(this, newValue);
    };
    FieldTextInput.prototype.init = function () {
        var _a;
        _super.prototype.init.call(this, true);
        if ((_a = this.source_block) === null || _a === void 0 ? void 0 : _a.is_shadow()) {
            this.source_block.get_svg_root().classList.add('blocklyShadowTextInput');
        }
        this.field_group && this.field_group.classList.add('blocklyFieldTextInput');
    };
    var FieldTextInput_1;
    FieldTextInput.FONTSIZE = 12;
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.widget_div)
    ], FieldTextInput.prototype, "widget_div", void 0);
    FieldTextInput = FieldTextInput_1 = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], FieldTextInput);
    return FieldTextInput;
}(field_1.Field));
exports.FieldTextInput = FieldTextInput;
