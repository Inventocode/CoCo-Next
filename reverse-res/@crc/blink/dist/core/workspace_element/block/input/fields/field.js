"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("../../../../di");
var interfaces_1 = require("../../../../interfaces");
var maths_1 = require("../../../../utils/maths");
var dom_1 = require("../../../../utils/dom");
var utils_1 = require("../../../../utils");
/**
 * Abstract class for an editable field.
 * @param text The initial content of the field.
 * @param opt_validator An optional function that is called
 *     to validate any constraints on what the user entered.  Takes the new
 *     text as an argument and returns either the accepted text, a replacement
 *     text, or undefined to abort the change.
 */
var Field = /** @class */ (function () {
    function Field(text, opt_validator) {
        if (text === void 0) { text = ''; }
        var _a;
        this.field_type = 'Field';
        /**
         * 当前Field的值是否可被用户操作更改，发挥了 'serializable' 的作用。
         *
         * 如果为true，则说明用户操作可能更改该field的值，因此该field的值应该在序列化（转换到json/xml中）时被存储。
         *  （除此之外，还需要该field的name不为空，作为存储结构中的标识符）
         *
         * 如果为false，则说明该field的value值会被积木配置锁死，不会发生更改。
         *
         * 目前实现逻辑中，该属性不能被动态更改。如果为false则用户永远不能编辑该field， 如果为true，则当前field的可编辑性
         *  由所属积木的可编辑性决定（见is_currently_editable方法）。
         */
        this.editable = true;
        this.visible_ = true;
        this.size_ = new maths_1.Size(0, 0);
        /**
         * Visible text to display.
         * Used by Block when converting block to string.
         */
        this.text_ = '';
        this.name = undefined;
        this.margin_left = this.theme.renderer.SEP_SPACE_X;
        this.render_sep = this.margin_left;
        this.validator_ = undefined;
        this.set_value(text);
        this.validator_ = opt_validator;
        this.max_display_length =
            ((_a = this.workspace_db.current) === null || _a === void 0 ? void 0 : _a.get_options().field_max_length)
                || 50;
        this.value_before_editing = undefined;
    }
    Field.prototype.set_validator = function (handler) {
        this.validator_ = handler;
    };
    Field.prototype.get_validator = function () {
        return this.validator_;
    };
    Field.prototype.set_value = function (new_value, render) {
        render;
        var old_value = this.get_value();
        if (old_value == new_value) {
            return;
        }
        var event;
        if (this.source_block && this.events.is_enabled() && this.runtime_data.editing !== this) {
            event = this.change_event_factory('field', {
                block: this.source_block,
                old_value: old_value,
                new_value: new_value,
                name: this.name,
            });
        }
        this.set_text(new_value);
        if (event) {
            this.events.fire(event);
        }
    };
    Field.prototype.set_text = function (new_text) {
        if (new_text === this.text_) {
            return;
        }
        this.text_ = new_text;
        this.force_rerender();
    };
    Field.prototype.force_rerender = function () {
        // Set width to 0 to force a rerender of this field.
        this.size_.width = 0;
        if (this.source_block && this.source_block.rendered) {
            if (this.source_block.is_collapsed()) {
                this.source_block.update_collapsed(true);
            }
            else {
                this.source_block.render();
            }
            // this.source_block.bump_neighbours();
        }
    };
    Field.prototype.get_text = function () {
        return this.text_;
    };
    Field.prototype.get_value = function () {
        return this.text_;
    };
    Field.prototype.init = function (need_text, prevent_render) {
        if (need_text === void 0) { need_text = true; }
        if (this.field_group || !this.source_block) {
            return;
        }
        this.field_group = (0, dom_1.create_svg_element)('g', {});
        if (!this.visible_) {
            this.field_group.style.display = 'none';
        }
        if (!this.source_block.is_shadow()) {
            this.border_rect = (0, dom_1.create_svg_element)('rect', { 'rx': 4, 'ry': 4 }, this.field_group);
        }
        if (need_text) {
            this.input_element = (0, dom_1.create_svg_element)('g', {
                class: 'blocklyInputElement',
            }, this.field_group);
            if (utils_1.is.safari() || utils_1.is.mobile()) {
                this.text_element = (0, dom_1.create_svg_element)('text', {
                    'class': 'blocklyText',
                    'dy': '.4em',
                    'font-size': this.theme.font.SIZE, // Nemo font-size is bigger, 1 pt = px * 96/72 = px * 4/3
                }, this.input_element);
            }
            else {
                this.text_element = (0, dom_1.create_svg_element)('text', {
                    'class': 'blocklyText',
                    'dominant-baseline': 'central',
                    'font-size': this.theme.font.SIZE, // Nemo font-size is bigger, 1 pt = px * 96/72 = px * 4/3
                }, this.input_element);
            }
        }
        this.update_editable();
        if (this.source_block != undefined) {
            var svg_root = this.source_block.get_svg_root();
            if (svg_root == undefined) {
                throw new ReferenceError('Field should have svg root when init.');
            }
            svg_root.appendChild(this.field_group);
        }
        this.bind_field_click_event();
        !prevent_render && this.render_();
    };
    Field.prototype.bind_field_click_event = function () {
        if (!this.field_group || !this.source_block) {
            return;
        }
        var click_node = this.source_block.is_shadow() ? this.field_group.parentElement : this.field_group;
        if (!click_node) {
            console.warn('Field has no parent element.');
            return;
        }
        this.mouse_down_wrapper = this.events.bind_event_with_checks(click_node, 'mouseup', this, this.on_mouse_down);
    };
    /**
     * Returns the height and width of the field,
     * accounting for the workspace scaling.
     * @return Height and width.
     */
    Field.prototype.get_scaled_bbox = function () {
        if (this.source_block == undefined) {
            throw new ReferenceError('Field has not been insert to workspace.');
        }
        var workspace = this.source_block.get_workspace();
        if (workspace == undefined) {
            throw new ReferenceError('Field\'s source block has not been insert to workspace.');
        }
        if (!this.field_group) {
            return new maths_1.Size(0, 0);
        }
        var bBox = (0, dom_1.get_size_attr)(this.border_rect || this.field_group);
        var scale = workspace.get_scale();
        // Create new object, as getBBox can return an uneditable SVGRect in IE.
        return new maths_1.Size(bBox.width * scale, bBox.height * scale);
    };
    Field.prototype.update_editable = function () {
        var group = this.field_group;
        if (!this.editable || !group) {
            return;
        }
        if (!this.source_block ||
            !this.field_group) {
            throw new Error('no necessary elements.');
        }
        var TEXT_EDITABLE_CLASS = 'blocklyEditable';
        var TEXT_NON_EDITABLE_CLASS = 'blocklyNonEditable';
        if (this.source_block.is_editable()) {
            (0, dom_1.add_class)(group, TEXT_EDITABLE_CLASS);
            (0, dom_1.remove_class)(group, TEXT_NON_EDITABLE_CLASS);
            // this.field_group.style.cursor = this.CURSOR || null;
        }
        else {
            (0, dom_1.add_class)(group, TEXT_NON_EDITABLE_CLASS);
            (0, dom_1.remove_class)(group, TEXT_EDITABLE_CLASS);
            this.field_group.style.cursor = '';
        }
    };
    Field.prototype.on_mouse_down = function (e) {
        if (!this.source_block || !this.source_block.get_workspace()) {
            return;
        }
        if (this.source_block.is_in_flyout) {
            return;
        }
        if (this.tooltip) {
            this.tooltip.hide();
        }
        var gesture = this.source_block.get_workspace().get_gesture(e);
        if (gesture) {
            gesture.set_start_field(this);
        }
    };
    Field.prototype.is_currently_editable = function () {
        return this.editable && !!this.source_block && this.source_block.is_editable();
    };
    Field.prototype.get_size = function () {
        if (!this.size_.width) {
            this.render_();
        }
        return this.size_;
    };
    Field.prototype.layout = function (cursor_xy, row_height) {
        if (this.field_group == undefined) {
            // Some of fields may not have fieldGroup
            return;
        }
        cursor_xy[0] += this.render_sep;
        var new_x = cursor_xy[0];
        var new_y = cursor_xy[1] + (row_height - this.size_.height) / 2;
        var original_translate = (0, dom_1.get_translate)(this.field_group);
        if (!(original_translate && original_translate.x === new_x && original_translate.y === new_y)) {
            // Center align
            this.field_group.setAttribute('transform', "translate(" + new_x + "," + new_y + ")");
        }
        cursor_xy[0] += this.size_.width;
    };
    Field.prototype.dispose = function () {
        if (this.mouse_down_wrapper) {
            this.events.unbind_event(this.mouse_down_wrapper);
            this.mouse_down_wrapper = undefined;
        }
        // this.sourceBlock_ = undefined;
        delete this.source_block;
        if (this.field_group != undefined) {
            (0, dom_1.remove_node)(this.field_group);
            this.field_group = undefined;
        }
        if (this.input_element || this.text_element) {
            this.input_element && (0, dom_1.remove_node)(this.input_element);
            this.text_element && (0, dom_1.remove_node)(this.text_element);
            // this.textElement_ = undefined;
            delete this.text_element;
            delete this.input_element;
        }
        this.validator_ = undefined;
    };
    /**
     * Draws the border with the correct width.
     * Saves the computed width in a property.
     */
    Field.prototype.render_ = function () {
        var _a, _b;
        if (!this.visible_) {
            this.size_.width = 0;
            return;
        }
        if (this.image_element) {
            this.size_.width = parseFloat(this.image_element.getAttribute('width') || '0') || 0;
            return;
        }
        if (!this.text_element) {
            this.size_.width = 0;
            return;
        }
        (0, dom_1.remove_children)(this.text_element);
        this.text_element.appendChild(document.createTextNode(this.get_display_text()));
        this.update_width();
        this.update_height();
        (_a = this.border_rect) === null || _a === void 0 ? void 0 : _a.setAttribute('width', "" + this.size_.width);
        (_b = this.border_rect) === null || _b === void 0 ? void 0 : _b.setAttribute('height', "" + this.size_.height);
    };
    /**
     * 按照纯文字field的默认规则更新宽度，即完全以text_element的宽度作为自身宽度。
     * 只在render_的最后调用。
     * 对于需要动态变化宽度的field，需要重写该方法，或重写render_，直接在render_过程中同步计算宽度。
     **/
    Field.prototype.update_width = function () {
        if (!this.text_element) {
            return;
        }
        this.size_.width = this.utils.get_cached_width(this.text_element);
    };
    /**
     * 按照单行field的默认规则更新高度。
     * 只在render_的最后调用。
     * 对于需要动态变化高度的field，需要重写该方法，或直接在render_()同步计算高度。
     */
    Field.prototype.update_height = function () {
        if (!this.source_block) {
            return;
        }
        this.size_.height = this.source_block.is_shadow() ? this.theme.renderer.SHADOW_FIELD_HEIGHT : this.theme.renderer.FIELD_HEIGHT;
    };
    Field.prototype.get_absolute_xy = function () {
        var el = this.border_rect || this.field_group;
        if (!el) {
            return gl_matrix_1.vec2.create();
        }
        return (0, dom_1.get_page_offset)(el);
    };
    Field.prototype.get_svg_root = function () {
        return this.field_group;
    };
    Field.prototype.show_editor = function (e, dispose_cb) {
        e;
        dispose_cb;
        throw new ReferenceError('show_editor 不能在 field 中调用，需要由子类实现');
    };
    Field.prototype.set_visible = function (visible) {
        if (this.visible_ == visible) {
            return;
        }
        this.visible_ = visible;
        var root = this.get_svg_root();
        var text = this.input_element || this.text_element;
        if (root) {
            root.style.display = visible ? 'block' : 'none';
            this.render_();
        }
        if (text) {
            text.style.display = visible ? 'block' : 'none';
            this.render_();
        }
    };
    Field.prototype.get_display_text = function () {
        var NBSP = '\u00A0';
        var text = this.text_;
        if (!text) {
            // Prevent the field from disappearing if empty.
            return NBSP;
        }
        if (text.length > this.max_display_length) {
            // Truncate displayed string and add an ellipsis ('...').
            text = text.substring(0, this.max_display_length - 2) + "\u2026";
        }
        // Replace whitespace with non-breaking spaces so the text doesn't collapse.
        text = text.replace(/\s/g, NBSP);
        return text;
    };
    Field.prototype.call_validator = function (text) {
        if (text == undefined) {
            // Class validator rejects value.  Game over.
            return undefined;
        }
        if (!this.validator_) {
            return text;
        }
        var user_result = this.validator_.call(this, text);
        if (user_result == undefined) {
            // User validator rejects value.  Game over.
            return undefined;
        }
        return user_result;
    };
    Field.prototype.set_html_input_value = function (value) {
        if (this.html_input) {
            this.html_input.value = value;
        }
    };
    Field.prototype.focus = function (is_focused) {
        if (is_focused === void 0) { is_focused = true; }
        if (!this.source_block)
            return;
        var ori_editing = this.runtime_data.editing;
        if (is_focused) {
            this.value_before_editing = this.get_value();
            this.runtime_data.editing = this;
        }
        else {
            this.value_before_editing = undefined;
            this.runtime_data.editing = undefined;
        }
        var current_editing = this.runtime_data.editing;
        if (ori_editing && ori_editing !== current_editing && this.events.is_enabled()) {
            // 错误情况，上一次被编辑的field没有清除编辑状态
            if (ori_editing.value_before_editing) {
                ori_editing.value_before_editing = undefined;
            }
            this.events.fire(this.ui_event_factory({
                type: interfaces_1.UIEventType.FIELD_FOCUS_CHANGE,
                workspace_id: this.source_block.workspace.id,
                old_value: this.name,
                new_value: undefined,
                block_id: this.source_block.id,
            }));
        }
        if (current_editing && current_editing !== ori_editing && this.events.is_enabled()) {
            this.events.fire(this.ui_event_factory({
                type: interfaces_1.UIEventType.FIELD_FOCUS_CHANGE,
                workspace_id: this.source_block.workspace.id,
                old_value: undefined,
                new_value: this.name,
                block_id: this.source_block.id,
            }));
        }
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], Field.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.theme)
    ], Field.prototype, "theme", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], Field.prototype, "utils", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.workspace_db)
    ], Field.prototype, "workspace_db", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.runtime_data)
    ], Field.prototype, "runtime_data", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.tooltip)
    ], Field.prototype, "tooltip", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.ChangeEvent)
    ], Field.prototype, "change_event_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.UIEvent)
    ], Field.prototype, "ui_event_factory", void 0);
    Field = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Field);
    return Field;
}());
exports.Field = Field;
