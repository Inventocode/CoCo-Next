"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldImage = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var base_1 = require("../../../../utils/base");
var maths_1 = require("../../../../utils/maths");
var dom_1 = require("../../../../utils/dom");
var field_1 = require("./field");
var FieldImage = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(FieldImage, _super);
    function FieldImage(options) {
        var _this = _super.call(this, options.opt_alt) || this;
        _this.field_type = 'FieldImage';
        _this.editable = false;
        _this.src_ = options.src;
        _this.width_ = isNaN(Number(options.width)) ? FieldImage_1.DEFAULT_WIDTH : Number(options.width);
        _this.height_ = isNaN(Number(options.height)) ? _this.width_ : Number(options.height);
        _this.size_ = new maths_1.Size(_this.width_, _this.height_ + 2 * _this.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_VALUE_BLOCK);
        _this.text_ = '';
        _this.tag = options.opt_tag || undefined;
        return _this;
    }
    FieldImage_1 = FieldImage;
    FieldImage.prototype.update_width = function () {
        this.size_.width = this.width_;
    };
    FieldImage.prototype.update_height = function () {
        // TODO：按照constructor写的，不知道为什么要加边距，可能后续会修改
        this.size_.height = this.height_ + 2 * this.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_VALUE_BLOCK;
    };
    /**
     * Set the source URL of this image.
     * @param src New source.
     * @override
     */
    FieldImage.prototype.set_value = function (src) {
        if (src == undefined) {
            // Codemao: No change if undefined, we can't use undefined.
            return;
        }
        this.src_ = src;
        if (this.image_element) {
            this.image_element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', src || '');
        }
    };
    /**
     * Install this image on a block.
     */
    FieldImage.prototype.init = function () {
        if (this.field_group) {
            // Image has already been initialized once.
            return;
        }
        // Build the DOM.
        this.field_group = (0, dom_1.create_svg_element)('g', {});
        if (!this.visible_) {
            this.field_group.style.display = 'none';
        }
        if (typeof this.src_ === 'string') {
            this.image_element = (0, dom_1.create_svg_element)('image', {
                'height': this.height_ + "px",
                'width': this.width_ + "px",
            }, this.field_group);
            this.set_value(this.src_);
        }
        else {
            this.image_element = this.src_;
            this.field_group.appendChild(this.image_element);
        }
        if (this.source_block == undefined) {
            throw new ReferenceError('Field should have source block before init.');
        }
        if (this.source_block != undefined) {
            var svg_root = this.source_block.get_svg_root();
            if (svg_root == undefined) {
                throw new ReferenceError('Field should have svg root before init.');
            }
            svg_root.appendChild(this.field_group);
        }
    };
    /**
     * Layout the field, update the field_xy
     * @param cursor_xy
     */
    FieldImage.prototype.layout = function (cursor_xy, row_height) {
        if (!this.source_block)
            return;
        cursor_xy[0] += this.render_sep;
        if ((0, base_1.is_nil)(this.image_element)) {
            return;
        }
        if (this.tag === 'quote_left' || this.tag === 'quote_right') {
            var translate_x = this.tag == 'quote_left'
                ? cursor_xy[0] - 4
                : cursor_xy[0] - 6;
            this.image_element.classList.add('blocklyQuote');
            this.image_element.setAttribute('transform', "translate(" + translate_x + ", " + (cursor_xy[1] + 6) + ")");
            return;
        }
        var scale = this.get_img_scale();
        var t_offset = Number((((1 - scale) * this.size_.width) / 2).toFixed(2));
        var x_offset = this.source_block.previous_connection ? 4 * t_offset : 3 * t_offset;
        var y_offset = t_offset * 1.5;
        this.image_element.setAttribute('transform', 
        // Center align
        "scale(" + scale + ") translate(" + (cursor_xy[0] + x_offset) + ", " + (cursor_xy[1] + row_height / 2 - this.height_ / 2 + y_offset) + ")");
        cursor_xy[0] += this.size_.width;
    };
    // Override in other projects
    FieldImage.prototype.get_img_scale = function () {
        return 1;
    };
    FieldImage.prototype.on_mouse_down = function (e) {
        e.preventDefault();
        e.stopPropagation();
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
    var FieldImage_1;
    FieldImage.DEFAULT_WIDTH = 20;
    FieldImage = FieldImage_1 = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], FieldImage);
    return FieldImage;
}(field_1.Field));
exports.FieldImage = FieldImage;
