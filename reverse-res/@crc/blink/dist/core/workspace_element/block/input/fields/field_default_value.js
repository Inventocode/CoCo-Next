"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldDefaultValue = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../../../../di");
var dom_1 = require("../../../../utils/dom");
var field_textinput_1 = require("./field_textinput");
var FieldDefaultValue = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(FieldDefaultValue, _super);
    function FieldDefaultValue(o) {
        var _this = _super.call(this, {
            text: o.enable_empty ? o.default_value : o.default_value || '0',
            opt_validator: o.opt_validator,
        }) || this;
        _this.has_been_edited = false;
        _this.enable_empty = false;
        _this.field_type = 'FieldDefaultValue';
        if (o.enable_empty !== undefined) {
            _this.enable_empty = o.enable_empty;
        }
        return _this;
    }
    FieldDefaultValue.prototype.get_has_been_edited = function () {
        return this.has_been_edited;
    };
    FieldDefaultValue.prototype.set_has_been_edited = function (new_status) {
        if (new_status !== this.has_been_edited) {
            if (this.source_block && this.events.is_enabled()) {
                var current_group = this.events.get_group();
                this.events.set_group(current_group || true);
                this.events.fire(this.change_event_factory('field_default_value', {
                    block: this.source_block,
                    old_value: this.has_been_edited,
                    new_value: new_status,
                    name: this.name,
                }));
            }
            this.has_been_edited = new_status;
            this.rerender();
        }
    };
    FieldDefaultValue.prototype.rerender = function () {
        if (!this.text_element) {
            return;
        }
        if (this.has_been_edited) {
            (0, dom_1.remove_class_if_necessary)(this.text_element, 'blocklyTextDefault');
        }
        else {
            (0, dom_1.add_class)(this.text_element, 'blocklyTextDefault');
        }
    };
    FieldDefaultValue.prototype.on_html_input_change = function () {
        this.set_has_been_edited(true);
        _super.prototype.on_html_input_change.call(this);
    };
    FieldDefaultValue.prototype.get_validated_value = function (text, default_value) {
        if (!this.enable_empty && !text) {
            return default_value;
        }
        return text;
    };
    FieldDefaultValue.prototype.widget_dispose = function () {
        var _this = this;
        return function () {
            if (!_this.html_input)
                return;
            var text = _this.get_validated_value(_this.html_input.value, _this.html_input.defaultValue);
            _super.prototype.widget_dispose.call(_this, text)();
        };
    };
    FieldDefaultValue.prototype.init = function () {
        _super.prototype.init.call(this);
        if (!this.text_element) {
            return;
        }
        if (!this.has_been_edited) {
            (0, dom_1.add_class)(this.text_element, 'blocklyTextDefault');
        }
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.widget_div)
    ], FieldDefaultValue.prototype, "widget_div", void 0);
    FieldDefaultValue = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], FieldDefaultValue);
    return FieldDefaultValue;
}(field_textinput_1.FieldTextInput));
exports.FieldDefaultValue = FieldDefaultValue;
