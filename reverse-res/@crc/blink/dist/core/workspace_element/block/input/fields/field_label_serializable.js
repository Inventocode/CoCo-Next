"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldLabelSerializable = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var field_label_1 = require("./field_label");
var FieldLabelSerializable = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(FieldLabelSerializable, _super);
    function FieldLabelSerializable(o) {
        var _this = _super.call(this, o) || this;
        _this.editable = true;
        _this.field_type = 'FieldLabelSerializable';
        return _this;
    }
    FieldLabelSerializable.prototype.get_display_text = function () {
        var NBSP = '\u00A0';
        var text = this.text_;
        if (text.length > this.max_display_length) {
            // Truncate displayed string and add an ellipsis ('...').
            text = text.substring(0, this.max_display_length - 2) + "\u2026";
        }
        // Replace whitespace with non-breaking spaces so the text doesn't collapse.
        text = text.replace(/\s/g, NBSP);
        return text;
    };
    FieldLabelSerializable = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], FieldLabelSerializable);
    return FieldLabelSerializable;
}(field_label_1.FieldLabel));
exports.FieldLabelSerializable = FieldLabelSerializable;
