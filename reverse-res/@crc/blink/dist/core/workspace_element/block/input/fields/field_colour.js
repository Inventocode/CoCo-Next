"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldColour = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../../../../di");
var dom_1 = require("../../../../utils/dom");
var base_1 = require("../../../../utils/base");
var style_1 = require("../../../../utils/style");
var maths_1 = require("../../../../utils/maths");
var field_1 = require("./field");
var FieldColour = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(FieldColour, _super);
    function FieldColour(options) {
        var _this = _super.call(this, options.colour, options.opt_validator) || this;
        _this.field_type = 'FieldColour';
        _this.colour_ = FieldColour_1.OVERRIDE_COLOR || '#cc33cc';
        _this.size_ = new maths_1.Size(40, 30);
        _this.colour_ = options.colour;
        return _this;
    }
    FieldColour_1 = FieldColour;
    /**
     * Install this field on a block.
     */
    FieldColour.prototype.init = function () {
        var _this = this;
        var _a;
        _super.prototype.init.call(this, false);
        if (!this.border_rect) {
            this.border_rect = (0, dom_1.create_svg_element)('rect', { 'rx': 4, 'ry': 4 }, this.field_group);
        }
        this.border_rect.setAttribute('width', String(this.size_.width));
        this.border_rect.setAttribute('height', String(this.size_.height));
        this.border_rect.setAttribute('stroke', '#fff');
        this.border_rect.setAttribute('stroke-width', '1.5');
        this.border_rect.setAttribute('rx', '15');
        this.border_rect.setAttribute('ry', '15');
        this.border_rect.addEventListener('mouseover', function () {
            if (_this.runtime_data.editing === _this || !_this.border_rect) {
                return;
            }
            _this.border_rect.setAttribute('stroke-width', '3');
        });
        this.border_rect.addEventListener('mouseleave', function () {
            if (_this.runtime_data.editing === _this || !_this.border_rect) {
                return;
            }
            _this.border_rect.setAttribute('stroke-width', '1.5');
        });
        if (!this.background_transparent_element) {
            this.background_transparent_element = (0, dom_1.create_svg_element)('rect', {
                rx: 15,
                ry: 15,
                width: 40,
                height: 30,
                fill: 'url(#transparentPattern)',
            });
            (_a = this.field_group) === null || _a === void 0 ? void 0 : _a.insertBefore(this.background_transparent_element, this.border_rect);
        }
        this.set_value(this.get_value());
    };
    /**
     * Return the current colour.
     * @return Current colour in '#rrggbb' format.
     */
    FieldColour.prototype.get_value = function () {
        return this.colour_;
    };
    /**
     * Set the colour.
     * @param colour The new colour in '#rrggbb' format.
     */
    FieldColour.prototype.set_value = function (colour) {
        var _a;
        var event;
        if (this.source_block && this.events.is_enabled() && this.colour_ != colour) {
            event = this.change_event_factory('field', {
                block: this.source_block,
                old_value: this.colour_,
                new_value: colour,
                name: this.name,
            });
        }
        this.colour_ = colour;
        (_a = this.border_rect) === null || _a === void 0 ? void 0 : _a.setAttribute('fill', this.colour_);
        if (event) {
            this.events.fire(event);
        }
    };
    FieldColour.prototype.render_ = function () {
        if ((0, base_1.is_nil)(this.field_group)) {
            // insertion_marker no need render
            return;
        }
        if (this.border_rect) {
            this.field_group.appendChild(this.border_rect);
        }
    };
    /**
     * Create a palette under the colour field.
     * @private
     */
    FieldColour.prototype.show_editor = function () {
        var _this = this;
        var _a;
        this.widget_div.show(this, this.widget_dispose.bind(this));
        if (this.border_rect) {
            this.border_rect.setAttribute('stroke-width', '3');
            this.border_rect.setAttribute('filter', 'url(#hiblur)');
        }
        var color_selector = document.createElement('div');
        color_selector.classList.add('color_selector', 'clearfix');
        FieldColour_1.COLOURS.forEach(function (color) {
            var color_selector_item = document.createElement('i');
            color_selector_item.classList.add('color_selector_item');
            color_selector_item.dataset.value = color;
            color_selector_item.style.background = color;
            color_selector.appendChild(color_selector_item);
        });
        // Position the palette to line up with the field.
        // Record windowSize and scrollOffset before adding the palette.
        var windowSize = (0, dom_1.get_viewport_size)();
        var scrollOffset = (0, style_1.get_viewport_page_offset)(document);
        var xy = this.get_absolute_xy();
        var borderBBox = this.get_scaled_bbox();
        var div = this.widget_div.DIV;
        div.appendChild(color_selector);
        // Record paletteSize after adding the palette.
        var paletteSize = (0, style_1.get_size)(color_selector);
        // Flip the palette vertically if off the bottom.
        if (xy[1] + paletteSize.height + borderBBox.height >= windowSize.height + scrollOffset[1]) {
            xy[1] -= paletteSize.height - 1;
        }
        else {
            xy[1] += borderBBox.height - 1;
        }
        // Don't go offscreen right.
        if (xy[0] > windowSize.width + scrollOffset[0] - paletteSize.width) {
            xy[0] = windowSize.width + scrollOffset[0] - paletteSize.width;
        }
        this.widget_div.position(xy[0], xy[1], windowSize, scrollOffset, (_a = this.source_block) === null || _a === void 0 ? void 0 : _a.RTL);
        color_selector.addEventListener('click', function (e) {
            var target = e.target;
            if (target.classList.contains('color_selector_item')) {
                var colour = target.dataset.value;
                // if (!U.base.is_nil(color_picker)) {
                //   color_picker.hide();
                // }
                _this.widget_div.hide();
                if (_this.source_block) {
                    // Call any validation function, and allow it to override.
                    colour = _this.call_validator(colour);
                }
                if (!(0, base_1.is_nil)(colour)) { // In case somewhere still using undefined.
                    _this.set_value(colour);
                }
            }
        });
    };
    /**
     * Hide the colour palette.
     */
    FieldColour.prototype.widget_dispose = function () {
        this.focus(false);
        if (this.border_rect) {
            this.border_rect.setAttribute('stroke-width', '1.5');
            this.border_rect.removeAttribute('filter');
        }
        this.events.set_group(false);
    };
    /**
     * Layout the field, update the field_xy
     * @param cursor_xy
     */
    FieldColour.prototype.layout = function (cursor_xy, row_height) {
        if (this.field_group == undefined) {
            // Some of fields may not have fieldGroup
            return;
        }
        cursor_xy[0] += this.render_sep;
        // Center align
        this.field_group.setAttribute('transform', "translate(" + cursor_xy[0] + ", " + (cursor_xy[1] + (row_height - this.size_.height) / 2) + ")");
        cursor_xy[0] += this.size_.width;
    };
    var FieldColour_1;
    FieldColour.COLUMNS = 7;
    FieldColour.COLOURS = [
        // grays
        '#ffffff', '#cccccc', '#c0c0c0', '#999999', '#666666', '#333333', '#000000',
        // reds
        '#ffcccc', '#ff6666', '#ff0000', '#cc0000', '#990000', '#660000', '#330000',
        // oranges
        '#ffcc99', '#ff9966', '#ff9900', '#ff6600', '#cc6600', '#993300', '#663300',
        // yellows
        '#ffff99', '#ffff66', '#ffcc66', '#ffcc33', '#cc9933', '#996633', '#663333',
        // olives
        '#ffffcc', '#ffff33', '#ffff00', '#ffcc00', '#999900', '#666600', '#333300',
        // greens
        '#99ff99', '#66ff99', '#33ff33', '#33cc00', '#009900', '#006600', '#003300',
        // turquoises
        '#99ffff', '#33ffff', '#66cccc', '#00cccc', '#339999', '#336666', '#003333',
        // blues
        '#ccffff', '#66ffff', '#33ccff', '#3366ff', '#3333ff', '#000099', '#000066',
        // purples
        '#ccccff', '#9999ff', '#6666cc', '#6633ff', '#6600cc', '#333399', '#330099',
        // violets
        '#ffccff', '#ff99ff', '#cc66cc', '#cc33cc', '#993399', '#663366', '#330033',
    ];
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.widget_div)
    ], FieldColour.prototype, "widget_div", void 0);
    FieldColour = FieldColour_1 = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], FieldColour);
    return FieldColour;
}(field_1.Field));
exports.FieldColour = FieldColour;
