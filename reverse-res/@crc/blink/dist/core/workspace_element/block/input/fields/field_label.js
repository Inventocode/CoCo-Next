"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldLabel = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var maths_1 = require("../../../../utils/maths");
var dom_1 = require("../../../../utils/dom");
var is_1 = require("../../../../utils/is");
var field_1 = require("./field");
/**
 * Class for a non-editable field.
 */
var FieldLabel = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(FieldLabel, _super);
    function FieldLabel(o) {
        var _this = _super.call(this, o.text) || this;
        _this.editable = false;
        _this.field_type = 'FieldLabel';
        _this.size_ = new maths_1.Size(0, _this.theme.renderer.SHADOW_FIELD_HEIGHT);
        _this.class_ = o.opt_class;
        _this.set_value(o.text);
        return _this;
    }
    FieldLabel.prototype.init = function () {
        if (this.text_element) {
            // Text has already been initialized once.
            return;
        }
        // Build the DOM.
        if (is_1.is.safari() || is_1.is.mobile()) {
            this.text_element = (0, dom_1.create_svg_element)('text', {
                'class': 'blocklyText',
                'font-size': this.theme.font.SIZE,
                'dy': '.4em',
            });
        }
        else {
            this.text_element = (0, dom_1.create_svg_element)('text', {
                'class': 'blocklyText',
                'font-size': this.theme.font.SIZE,
                'dominant-baseline': 'central',
            });
        }
        if (this.class_) {
            (0, dom_1.add_class)(this.text_element, this.class_);
        }
        if (!this.visible_) {
            this.text_element.style.display = 'none';
        }
        if (this.source_block == undefined) {
            throw new ReferenceError('Field should have source block when init.');
        }
        // Append the element
        if (this.source_block != undefined) {
            var svg_parent = this.source_block.get_svg_root();
            if (svg_parent == undefined) {
                throw new ReferenceError('Field should have svg root when init.');
            }
            svg_parent.appendChild(this.text_element);
        }
        if (!this.source_block) {
            return;
        }
        // Force a render.
        this.render_();
    };
    /**
     * Layout the field, update the field_xy
     * @param cursor_xy
     */
    FieldLabel.prototype.layout = function (cursor_xy, row_height) {
        cursor_xy[0] += this.render_sep;
        // Center align
        if (this.text_element) {
            this.text_element.setAttribute('transform', "translate(" + cursor_xy[0] + "," + (cursor_xy[1] + row_height / 2) + ")");
            cursor_xy[0] += this.size_.width;
        }
    };
    FieldLabel = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], FieldLabel);
    return FieldLabel;
}(field_1.Field));
exports.FieldLabel = FieldLabel;
