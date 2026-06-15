"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldIcon = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var dom_1 = require("../../../../utils/dom");
var utils_1 = require("../../../../utils");
var maths_1 = require("../../../../utils/maths");
var field_image_1 = require("./field_image");
var FieldIcon = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(FieldIcon, _super);
    function FieldIcon(o) {
        var _this = _super.call(this, o) || this;
        _this.field_type = 'FieldIcon';
        _this.width_ = _this.theme.renderer.HEAD_ICON_WIDTH;
        _this.height_ = _this.theme.renderer.HEAD_ICON_WIDTH;
        _this.size_ = new maths_1.Size(0, 0);
        _this.opt_is_head_ = o.opt_is_head || false;
        _this.set_value(_this.utils.replace_message_references(o.src));
        return _this;
    }
    FieldIcon.prototype.is_head = function () {
        return this.opt_is_head_;
    };
    /**
     * Codemao: init
     */
    FieldIcon.prototype.init = function () {
        if (this.field_group) {
            // Image has already been initialized once.
            return;
        }
        if (this.opt_is_head_ === false &&
            this.source_block != undefined) {
            if (this.text_ === '*' || this.text_ === '') {
                return;
            }
            else {
                // Codemao: only 'restart' block step into up to date
                this.size_ = new maths_1.Size(this.width_, this.height_);
            }
        }
        // Build the DOM.
        this.field_group = (0, dom_1.create_svg_element)('g', {
            transform: "translate(-" + this.theme.renderer.HEAD_ICON_WRAP_WIDTH / 2 + ", -" + (this.theme.renderer.HEAD_ICON_WRAP_WIDTH - this.theme.renderer.MIN_HEIGHT) + ")",
        });
        if (!this.visible_) {
            this.field_group.style.display = 'none';
        }
        var wrap_radius = this.theme.renderer.HEAD_ICON_WRAP_WIDTH / 2;
        (0, dom_1.create_svg_element)('circle', {
            cx: wrap_radius,
            cy: wrap_radius,
            r: wrap_radius,
            fill: this.source_block != undefined ? this.source_block.get_colour() : '',
            stroke: this.source_block != undefined ?
                this.source_block.get_border_colour() :
                this.theme.block_color.DEFAULT.border,
            class: "blockly_head_icon_wrapper" /* HEAD_ICON_BACKGROUND */,
        }, this.field_group);
        this.image_element = (0, dom_1.create_svg_element)('image', {
            height: this.height_ + "px",
            width: this.width_ + "px",
            x: wrap_radius - this.width_ / 2,
            y: wrap_radius - this.height_ / 2,
            class: "blockly_head_icon" /* HEAD_ICON */
        }, this.field_group);
        this.set_value(this.src_);
        if (utils_1.is.Gecko()) {
            /**
             * Due to a Firefox bug which eats mouse events on image elements,
             * a transparent rectangle needs to be placed on top of the image.
             */
            (0, dom_1.create_svg_element)('rect', { 'height': this.height_ + "px",
                'width': this.width_ + "px",
                'fill-opacity': 0 }, this.field_group);
        }
        if (this.source_block == undefined) {
            throw new ReferenceError('Field should have source block when init.');
        }
        var svg_root = this.source_block.get_svg_root();
        if (svg_root == undefined) {
            throw new ReferenceError('Field should have svg root when init.');
        }
        svg_root.appendChild(this.field_group);
    };
    FieldIcon.prototype.layout = function (cursor_xy) {
        // Head icons have fixed layout.
        return cursor_xy;
    };
    FieldIcon = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], FieldIcon);
    return FieldIcon;
}(field_image_1.FieldImage));
exports.FieldIcon = FieldIcon;
