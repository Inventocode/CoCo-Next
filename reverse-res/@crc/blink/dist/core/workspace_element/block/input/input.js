"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../../../di");
var base_1 = require("../../../utils/base");
/**
 * Class for an input with an optional field.
 */
var Input = /** @class */ (function () {
    function Input(options) {
        this.field_width = 0;
        this.field_height = 0;
        this.margin_left = this.theme.renderer.SEP_SPACE_X;
        this.render_width = 0;
        this.render_height = 0;
        this.width = 0;
        this.height = 0;
        /**
         * Is the input visible?
         */
        this.visible_ = true;
        this.setCheck = this.set_check;
        this.appendField = this.append_field;
        this.type = options.type;
        this.name = options.name;
        this.source_block = options.block;
        this.connection = options.connection;
        this.fieldRow = [];
    }
    Input.prototype.is_visible = function () {
        return this.visible_;
    };
    Input.prototype.init = function () {
        if (this.source_block == undefined) {
            console.warn('Trying to init an input without its source block.');
            return;
        }
        var ws = this.source_block.get_workspace();
        if (ws == undefined || !ws.rendered) {
            return; // Headless blocks don't need fields initialized.
        }
        for (var i = 0; i < this.fieldRow.length; i++) {
            this.fieldRow[i].init();
        }
    };
    Input.prototype.dispose = function () {
        for (var i = 0; i < this.fieldRow.length; i++) {
            var field = this.fieldRow[i];
            field.dispose();
        }
        if (this.connection) {
            this.connection.dispose();
        }
        // this.sourceBlock_ = undefined;
        delete this.source_block;
    };
    Input.prototype.set_visible = function (visible) {
        var renderList = [];
        if (this.visible_ == visible) {
            return renderList;
        }
        this.visible_ = visible;
        for (var y = 0; y < this.fieldRow.length; y++) {
            var field = this.fieldRow[y];
            if (field.opt_is_head_) {
                // hat_icon no need hidden when collapse
            }
            else {
                field.set_visible(visible);
            }
        }
        if (this.connection) {
            // Has a connection.
            if (visible) {
                renderList = this.connection.unhide_all();
            }
            else {
                this.connection.hide_all();
            }
            var child = this.connection.targetBlock();
            child && child.set_visible_as_child(visible);
        }
        return renderList;
    };
    Input.prototype.set_check = function (check) {
        if (!this.connection) {
            throw new Error('This input does not have a connection.');
        }
        this.connection.set_check(check);
        return this;
    };
    Input.prototype.append_field = function (field, opt_name) {
        this.insert_field_at(this.fieldRow.length, field, opt_name);
        return this;
    };
    Input.prototype.insert_field_at = function (index, field, opt_name) {
        if (index < 0 || index > this.fieldRow.length) {
            throw new Error("index " + index + " out of bounds.");
        }
        // Empty string, Null or undefined generates no field, unless field is named.
        if (!field && !opt_name) {
            // UNKNOW: why return this?
            // return this;
            return 0;
        }
        // Generate a FieldLabel when given a plain text field.
        if ((0, base_1.is_string)(field)) {
            field = this.field_label_factory({
                text: this.utils.replace_message_references(field),
            });
        }
        field.source_block = this.source_block;
        if (opt_name != undefined) {
            field.name = opt_name;
        }
        if (this.source_block != undefined && this.source_block.rendered) {
            field.init();
        }
        if ((0, base_1.is_field_dropdown)(field) && field.prefix_field) {
            // Add any prefix.
            index = this.insert_field_at(index, field.prefix_field);
        }
        // Add the field to the field row.
        this.fieldRow.splice(index, 0, field);
        ++index;
        if ((0, base_1.is_field_dropdown)(field) && field.suffix_field) {
            // Add any suffix.
            index = this.insert_field_at(index, field.suffix_field);
        }
        if (this.source_block != undefined && this.source_block.rendered) {
            this.source_block.render();
            // Adding a field will cause the block to change shape.
            // this.source_block.bump_neighbours();
        }
        return index;
    };
    Input.prototype.remove_field = function (name) {
        var _a, _b;
        for (var i = 0, l = this.fieldRow.length; i < l; i++) {
            var field = this.fieldRow[i];
            if (field.name === name) {
                field.dispose();
                this.fieldRow.splice(i, 1);
                if ((_a = this.source_block) === null || _a === void 0 ? void 0 : _a.rendered) {
                    (_b = this.source_block) === null || _b === void 0 ? void 0 : _b.render();
                }
                return true;
            }
        }
        return false;
    };
    Input.prototype.get_field = function (name) {
        for (var i = 0, l = this.fieldRow.length; i < l; i++) {
            var field = this.fieldRow[i];
            if (field.name === name) {
                return field;
            }
        }
        return undefined;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], Input.prototype, "utils", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.theme)
    ], Input.prototype, "theme", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.FieldLabel)
    ], Input.prototype, "field_label_factory", void 0);
    Input = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Input);
    return Input;
}());
exports.Input = Input;
