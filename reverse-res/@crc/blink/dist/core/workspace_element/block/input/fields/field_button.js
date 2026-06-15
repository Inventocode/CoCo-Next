"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldButton = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var base_1 = require("../../../../utils/base");
var dom_1 = require("../../../../utils/dom");
var utils_1 = require("../../../../utils");
var field_image_1 = require("./field_image");
var FieldButton = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(FieldButton, _super);
    function FieldButton(options) {
        var _this = _super.call(this, options) || this;
        _this.field_type = 'FieldButton';
        _this.image_width = _this.width_;
        _this.image_height = _this.height_;
        _this.has_circle = options.has_circle;
        _this.click_handler_ = options.opt_callback;
        if (_this.has_circle) {
            _this.image_width = _this.width_ * 0.6;
            _this.image_height = _this.height_ * 0.6;
        }
        return _this;
    }
    FieldButton.prototype.update_height = function () {
        this.size_.height = this.height_;
    };
    /**
     * Install this image button on a block.
     */
    FieldButton.prototype.init = function () {
        var _this = this;
        if (this.field_group) {
            // Image has already been initialized once.
            return;
        }
        // Build the DOM.
        this.field_group = (0, dom_1.create_svg_element)('g', {
            'class': 'fieldButton',
            'cursor': 'default',
        }, undefined);
        if (!this.visible_) {
            this.field_group.style.display = 'none';
        }
        if (this.has_circle) {
            this.circle_element = (0, dom_1.create_svg_element)('rect', {
                width: this.width_,
                height: this.height_,
                rx: this.width_ / 2,
                ry: this.width_ / 2,
                'stroke': 'rgba(0, 0, 0, .15)',
                'fill': 'rgba(255, 255, 255, .15)',
            }, this.field_group);
            this.events.bind_event_with_checks(this.field_group, 'mousedown', this, function () {
                _this.circle_element && (_this.circle_element.style.fill = 'rgba(0, 0, 0, .15)');
            });
        }
        if (typeof this.src_ === 'string') {
            this.image_element = (0, dom_1.create_svg_element)('image', {
                'height': this.image_height + "px",
                'width': this.image_width + "px",
            }, this.field_group);
            this.set_value(this.src_);
        }
        else {
            this.image_element = (0, dom_1.create_svg_element)('g', {
                'height': this.height_ + "px",
                'width': this.width_ + "px",
            }, this.field_group);
            this.image_element.appendChild(this.src_);
        }
        if (utils_1.is.firefox()) {
            /**
             * Due to a Firefox bug which eats mouse events on image elements,
             * a transparent rectangle needs to be placed on top of the image.
             */
            this.rect_element = (0, dom_1.create_svg_element)('rect', {
                'height': this.height_ + "px",
                'width': this.width_ + "px",
                'fill-opacity': 0,
            }, this.field_group);
        }
        if (this.source_block == undefined) {
            throw new ReferenceError('Field should have source block when init.');
        }
        var svg_root = this.source_block.get_svg_root();
        svg_root.appendChild(this.field_group);
        this.events.bind_event_with_checks(this.field_group, 'mouseup', this, this.on_click);
        this.mouse_down_wrapper = this.events.bind_event_with_checks(this.field_group, 'mousedown', this, this.on_mouse_down);
    };
    FieldButton.prototype.on_click = function (e) {
        if (!this.source_block) {
            return;
        }
        this.circle_element && (this.circle_element.style.fill = 'rgba(255, 255, 255, .15)');
        var gesture = this.source_block.get_workspace().get_gesture(e);
        if (gesture) {
            if (gesture.is_dragging_block) {
                gesture.handle_up(e);
                return;
            }
        }
        if (!this.source_block.is_in_flyout && !this.utils.is_right_button(e)) {
            if (gesture) {
                gesture.update_is_mutation_click(true);
                gesture.handle_up(e);
            }
            if (this.click_handler_) {
                this.click_handler_(this);
            }
        }
    };
    // Should not be override
    FieldButton.prototype.get_img_scale = function () {
        return 1;
    };
    FieldButton.prototype.layout = function (cursor_xy, row_height) {
        if (!this.source_block)
            return;
        cursor_xy[0] += this.render_sep;
        if ((0, base_1.is_nil)(this.image_element)) {
            return;
        }
        var scale = this.get_img_scale();
        var t_offset = Number((((1 - scale) * this.size_.width) / 2).toFixed(2));
        var x_offset = this.source_block.previous_connection ? 4 * t_offset : 3 * t_offset;
        var y_offset = t_offset * 1.5;
        var image_x_offset = (this.width_ - this.image_width) / 2;
        var image_y_offset = (this.height_ - this.image_height) / 2;
        if (this.circle_element) {
            this.circle_element.setAttribute('transform', "scale(" + scale + ") translate(" + (cursor_xy[0] + x_offset) + ", " + (cursor_xy[1] + row_height / 2 - this.height_ / 2 + y_offset) + ")");
        }
        this.image_element.setAttribute('transform', "scale(" + scale + ") translate(" + (cursor_xy[0] + x_offset + image_x_offset) + ", " + (cursor_xy[1] + row_height / 2 - this.height_ / 2 + y_offset + image_y_offset) + ")");
        cursor_xy[0] += this.size_.width;
    };
    FieldButton = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], FieldButton);
    return FieldButton;
}(field_image_1.FieldImage));
exports.FieldButton = FieldButton;
