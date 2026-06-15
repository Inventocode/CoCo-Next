"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutationRemoveButton = exports.MutationAddButton = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var dom_1 = require("../../../../utils/dom");
var field_image_1 = require("./field_image");
var FieldMutation = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(FieldMutation, _super);
    function FieldMutation(is_add, index_, size) {
        if (size === void 0) { size = 20; }
        var _this = _super.call(this, {
            src: '',
            width: size,
            height: size,
        }) || this;
        _this.is_add = is_add;
        _this.index_ = index_;
        _this.field_type = 'FieldMutation';
        return _this;
    }
    FieldMutation.prototype.init = function () {
        var _this = this;
        var _a;
        if (this.field_group) {
            // Image has already been initialized once.
            return;
        }
        // Build the DOM.
        this.field_group = (0, dom_1.create_svg_element)('g', {}, undefined);
        if (!this.visible_) {
            this.field_group.style.display = 'none';
        }
        this.image_element = (0, dom_1.create_svg_element)('g', {
            width: this.width_,
            height: this.height_,
            'class': 'fieldButton',
        }, this.field_group);
        this.rect_element = (0, dom_1.create_svg_element)('rect', {
            width: this.width_,
            height: this.height_,
            rx: this.width_ / 2,
            ry: this.width_ / 2,
            'stroke': 'rgba(0, 0, 0, .15)',
            'fill': 'rgba(255, 255, 255, .15)',
        }, this.image_element);
        (0, dom_1.create_svg_element)('line', {
            'stroke': '#fff',
            'stroke-width': 2,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-miterlimit': 10,
            'x1': this.width_ / 3,
            'y1': this.height_ / 2,
            'x2': this.width_ * 2 / 3,
            'y2': this.height_ / 2,
        }, this.image_element);
        if (this.is_add) {
            (0, dom_1.create_svg_element)('line', {
                'stroke': '#fff',
                'stroke-width': 2,
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-miterlimit': 10,
                'x1': this.width_ / 2,
                'y1': this.height_ / 3,
                'x2': this.width_ / 2,
                'y2': this.height_ * 2 / 3,
            }, this.image_element);
        }
        this.events.bind_event_with_checks(this.field_group, 'mousedown', this, function () {
            _this.rect_element && (_this.rect_element.style.fill = 'rgba(0, 0, 0, .15)');
        });
        var svg_root = (_a = this.source_block) === null || _a === void 0 ? void 0 : _a.get_svg_root();
        if (svg_root == undefined) {
            throw new ReferenceError('Field should have svg root when init.');
        }
        svg_root.appendChild(this.field_group);
        this.events.bind_event_with_checks(this.field_group, 'mouseup', this, this.on_click);
        this.mouse_down_wrapper = this.events.bind_event_with_checks(this.field_group, 'mousedown', this, this.on_mouse_down);
    };
    // Should not be override
    FieldMutation.prototype.get_img_scale = function () {
        return 1;
    };
    FieldMutation.prototype.on_click = function (e) {
        var _a, _b;
        if (!this.source_block) {
            return;
        }
        this.rect_element && (this.rect_element.style.fill = 'rgba(255, 255, 255, .15)');
        // Check if the mouse event is handled by gesture.
        var gesture = this.source_block.get_workspace().get_gesture(e);
        if (gesture) {
            if (gesture.is_dragging_block) {
                // Manually handle the gesture's mouseup event and prevent the
                // mutation_add button callback.
                gesture.handle_up(e);
                return;
            }
        }
        if (!this.source_block.is_in_flyout && !this.utils.is_right_button(e)) {
            if (gesture) {
                gesture.update_is_mutation_click(true);
                gesture.handle_up(e);
            }
            if (!this.events.is_enabled()) {
                return;
            }
            var current_group = this.events.get_group();
            this.events.set_group(current_group || true);
            var source_block = this.source_block;
            if (this.is_add) {
                (_a = source_block.addMutation) === null || _a === void 0 ? void 0 : _a.call(source_block, this.index_, this.name);
            }
            else {
                (_b = source_block.removeMutation) === null || _b === void 0 ? void 0 : _b.call(source_block, this.index_, this.name);
            }
            source_block.bump_neighbours();
            this.events.set_group(current_group);
        }
    };
    /**
     * Used when updateShape_
     */
    FieldMutation.prototype.set_index = function (index) {
        this.index_ = index;
    };
    return FieldMutation;
}(field_image_1.FieldImage));
var MutationAddButton = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(MutationAddButton, _super);
    function MutationAddButton() {
        return _super.call(this, true) || this;
    }
    MutationAddButton = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], MutationAddButton);
    return MutationAddButton;
}(FieldMutation));
exports.MutationAddButton = MutationAddButton;
var MutationRemoveButton = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(MutationRemoveButton, _super);
    function MutationRemoveButton(index) {
        if (index === void 0) { index = undefined; }
        return _super.call(this, false, index) || this;
    }
    MutationRemoveButton = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], MutationRemoveButton);
    return MutationRemoveButton;
}(FieldMutation));
exports.MutationRemoveButton = MutationRemoveButton;
