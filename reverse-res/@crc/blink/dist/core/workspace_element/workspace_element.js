"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceElement = void 0;
var tslib_1 = require("tslib");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("../di");
var interfaces_1 = require("../interfaces");
var dom_1 = require("../utils/dom");
var svg_filter_1 = require("../svg_filter");
var WorkspaceElement = /** @class */ (function () {
    /**
     * Class for a element's SVG representation.
     * Not normally called directly.
     * @param workspace The element's workspace.
     */
    function WorkspaceElement(workspace) {
        this.id = '';
        this.width = 0;
        this.height = 0;
        /**
         * 该属性指明了当前元素是否已经被渲染，
         *
         * 实际上，其主要的用途是，决定在某些操作（如append input、remove input）发生时，元素是否需要重新渲染。
         * 当该值为true时，表明元素已经被渲染，则形状上的改变应该造成重新渲染；
         * 当该值为false时，元素形状的改变不应该造成未渲染的元素被渲染。
         *
         * 当有一系列的渲染需要接连发生时，可能会在改变开始时将该值设为false，再在改变结束后调用render方法，
         *  以避免过程中的重复渲染。
         */
        this.rendered = false;
        this.deletable_ = true;
        this.movable_ = true;
        this.editable_ = true;
        this.disabled = false;
        /**
         * 当前元素相对workspace坐标原点的位置。
         * 即translate的数值。
         */
        this.location_ = gl_matrix_1.vec2.create();
        this.visibility_ = interfaces_1.BlockVisibility.VISIBLE;
        this.event_initialized = false;
        this.svg_group = (0, dom_1.create_svg_element)('g', {});
        this.svg_group.translate_ = '';
        this.workspace = workspace;
        this.is_in_flyout = workspace.is_flyout;
        this.RTL = workspace.RTL;
    }
    WorkspaceElement.prototype.get_svg_root = function () {
        return this.svg_group;
    };
    WorkspaceElement.prototype.set_workspace = function (ws) {
        this.workspace = ws;
    };
    WorkspaceElement.prototype.get_workspace = function () {
        return this.workspace;
    };
    WorkspaceElement.prototype.set_deletable = function (deletable) {
        this.deletable_ = deletable;
    };
    WorkspaceElement.prototype.is_deletable = function () {
        return this.deletable_ &&
            !(this.workspace && this.workspace.get_options().readOnly);
    };
    WorkspaceElement.prototype.set_delete_style = function (enable) {
        if (this.svg_group == undefined) {
            console.warn('Cannot set delete style for block without init.');
            return;
        }
        if (enable) {
            (0, dom_1.add_class_if_necessary)(this.svg_group, 'blocklyDraggingDelete');
        }
        else {
            (0, dom_1.remove_class_if_necessary)(this.svg_group, 'blocklyDraggingDelete');
        }
    };
    WorkspaceElement.prototype.set_movable = function (movable) {
        this.movable_ = movable;
    };
    WorkspaceElement.prototype.is_movable = function () {
        return this.movable_;
    };
    WorkspaceElement.prototype.update_movable = function () {
        if (this.svg_group == undefined) {
            throw new ReferenceError('Cannot update movable to block without svg group.');
        }
        var class_list = this.svg_group.classList;
        if (this.is_movable()) {
            class_list.add('blocklyDraggable');
        }
        else {
            class_list.remove('blocklyDraggable');
        }
    };
    WorkspaceElement.prototype.set_editable = function (enable) {
        this.editable_ = enable;
    };
    WorkspaceElement.prototype.is_editable = function () {
        return this.editable_;
    };
    WorkspaceElement.prototype.set_disabled = function (disabled) {
        this.disabled = disabled;
    };
    WorkspaceElement.prototype.get_location = function () {
        return this.location_;
    };
    WorkspaceElement.prototype.move_by = function (dxy) {
        var event;
        if (this.events.is_enabled()) {
            event = this.move_event_factory({
                block: this,
            });
        }
        var xy = this.get_relative_to_surface_xy();
        this.translate(gl_matrix_1.vec2.add(this.location_, xy, dxy));
        event && event.record_new();
        this.workspace.resize_contents();
        event && this.events.fire(event);
    };
    WorkspaceElement.prototype.dispose = function (healStack, show_animate) {
        healStack;
        if (!this.workspace) {
            // The block has already been deleted.
            return;
        }
        // Save the block's workspace temporarily so we can resize the
        // contents once the block is disposed.
        var block_workspace = this.workspace;
        // If this element is being dragged, unlink the mouse events.
        if (this.runtime_data.selected === this) {
            this.unselect();
            block_workspace.cancel_current_gesture();
        }
        // If this block has a context menu open, close it.
        if (this.context_menu.current_block == this) {
            this.context_menu.hide();
        }
        if (show_animate && this.rendered) {
            this.block_animations.dispose_ui_effect(this);
        }
        // Stop rerendering.
        this.rendered = false;
        (0, dom_1.remove_node)(this.svg_group);
        (0, dom_1.remove_children)(this.svg_group);
        block_workspace.resize_contents();
        // Sever JavaScript to DOM connections.
    };
    /**
     * Handle a mouse-down on an SVG block.
     * @param e Mouse down event or touch start event.
     */
    WorkspaceElement.prototype.on_mouse_down = function (e) {
        if (!this.workspace) {
            return;
        }
        var gesture = this.workspace.get_gesture(e);
        if (gesture) {
            gesture.handle_block_start(e, this);
        }
    };
    Object.defineProperty(WorkspaceElement.prototype, "use_drag_surface", {
        get: function () {
            return !!this.workspace.get_block_drag_surface();
        },
        enumerable: false,
        configurable: true
    });
    WorkspaceElement.prototype.get_relative_to_surface_xy = function () {
        // The drawing surface is relative to either the workspace canvas
        // or to the drag surface group.
        var _a, _b;
        var drag_surface_group = this.use_drag_surface ?
            (_a = this.workspace.get_block_drag_surface()) === null || _a === void 0 ? void 0 : _a.get_group() : undefined;
        var element = this.svg_group;
        if (element == undefined) {
            return gl_matrix_1.vec2.create();
        }
        var xy = gl_matrix_1.vec2.create();
        do {
            // Loop through this block and every parent.
            gl_matrix_1.vec2.add(xy, xy, this.utils.get_relative_xy(element));
            // If this element is the current element on the drag surface, include
            // the translation of the drag surface itself.
            if (this.use_drag_surface &&
                ((_b = this.workspace.get_block_drag_surface()) === null || _b === void 0 ? void 0 : _b.get_current_block()) == element) {
                var surface_translation = this.workspace.get_block_drag_surface().get_surface_translation();
                gl_matrix_1.vec2.add(xy, xy, [surface_translation[0], surface_translation[1]]);
            }
            // if (!(element.parentNode instanceof Element)) {
            //   throw new Error('Parent node of block is not an Element!');
            // }
            element = element.parentNode;
        } while (element && element != this.workspace.get_canvas() && element != drag_surface_group);
        return xy;
    };
    WorkspaceElement.prototype.translate = function (xy) {
        var svg_root = this.svg_group;
        if (svg_root == undefined) {
            throw new ReferenceError('Block should have svg root when translating.');
        }
        svg_root.setAttribute('transform', "translate(" + xy[0] + ", " + xy[1] + ")");
        this.location_ = xy;
    };
    WorkspaceElement.prototype.move_off_drag_surface = function (new_xy) {
        var _a;
        if (!this.svg_group || !this.workspace.svg_block_canvas_)
            return;
        var filter = this.svg_group.getAttribute('filter');
        if (filter && filter.includes(svg_filter_1.FILTER.DRAG_SHADOW)) {
            this.svg_group.removeAttribute('filter');
        }
        if (!this.use_drag_surface) {
            this.location_ = new_xy;
            return;
        }
        // Translate to current position, turning off 3d.
        this.translate(new_xy);
        (_a = this.workspace.get_block_drag_surface()) === null || _a === void 0 ? void 0 : _a.clear_and_hide(this.workspace.svg_block_canvas_);
    };
    WorkspaceElement.prototype.set_mouse_through_style = function (let_mouse_through) {
        if (this.svg_group == undefined) {
            console.warn('Cannot set the style for block without init.');
            return;
        }
        if (let_mouse_through) {
            (0, dom_1.add_class_if_necessary)(this.svg_group, "blocklyDraggingMouseThrough" /* DRAGGING_MOUSE_THROUGH */);
        }
        else {
            (0, dom_1.remove_class_if_necessary)(this.svg_group, "blocklyDraggingMouseThrough" /* DRAGGING_MOUSE_THROUGH */);
        }
    };
    WorkspaceElement.prototype.set_dragging = function (adding) {
        if (this.svg_group == undefined) {
            console.warn('Cannot set delete style for block without init.');
            return;
        }
        var group = this.svg_group;
        if (adding) {
            group.translate_ = '';
            group.skew_ = '';
            (0, dom_1.add_class_if_necessary)(group, "blocklyDragging" /* DRAGGING */);
        }
        else {
            (0, dom_1.remove_class_if_necessary)(group, "blocklyDragging" /* DRAGGING */);
        }
    };
    WorkspaceElement.prototype.move_during_drag = function (new_loc) {
        var _a;
        if (!this.svg_group)
            return;
        if (this.use_drag_surface) {
            (_a = this.workspace.get_block_drag_surface()) === null || _a === void 0 ? void 0 : _a.translate_surface(new_loc[0], new_loc[1]);
        }
        else {
            this.svg_group.translate_ = "translate(" + new_loc[0] + ", " + new_loc[1] + ")";
            this.svg_group.setAttribute('transform', this.svg_group.translate_ + this.svg_group.skew_);
        }
    };
    WorkspaceElement.prototype.bring_to_front = function () {
        var root = this.svg_group;
        if (root != undefined && root.parentNode != undefined) {
            root.parentNode.appendChild(root);
        }
    };
    WorkspaceElement.prototype.select = function () {
        if (this.runtime_data.selected == this) {
            return;
        }
        var old_id = undefined;
        if (this.runtime_data.selected) {
            old_id = this.runtime_data.selected.id;
            // Unselect any previously selected block.
            this.events.disable();
            try {
                this.runtime_data.selected.unselect();
            }
            catch (e) {
                // 如果unselect出现问题，会报错但不影响使用
                console.error(e);
            }
            finally {
                this.events.enable();
            }
        }
        var event = this.ui_event_factory({
            type: interfaces_1.UIEventType.SELECTED,
            workspace_id: this.workspace.id,
            old_value: old_id,
            new_value: this.id,
        });
        this.runtime_data.selected = this;
        this.events.fire(event);
    };
    WorkspaceElement.prototype.unselect = function () {
        if (this.runtime_data.selected != this) {
            return;
        }
        var event = this.ui_event_factory({
            type: interfaces_1.UIEventType.SELECTED,
            workspace_id: this.workspace.id,
            old_value: this.id,
            new_value: undefined,
        });
        this.runtime_data.selected = undefined;
        this.events.fire(event);
    };
    WorkspaceElement.prototype.move_to_drag_surface = function () {
        var _a;
        if (!this.svg_group) {
            return;
        }
        if (!this.use_drag_surface) {
            (_a = this.workspace.svg_block_canvas_) === null || _a === void 0 ? void 0 : _a.appendChild(this.svg_group);
            return;
        }
        // The translation for drag surface blocks,
        // is equal to the current relative-to-surface position,
        // to keep the position in sync as it move on/off the surface.
        // This is in workspace coordinates.
        var xy = this.get_relative_to_surface_xy();
        this.clear_transform_attributes();
        var drag_surface = this.workspace.get_block_drag_surface();
        drag_surface === null || drag_surface === void 0 ? void 0 : drag_surface.translate_surface(xy[0], xy[1]);
        // Execute the move on the top-level SVG component
        drag_surface === null || drag_surface === void 0 ? void 0 : drag_surface.set_blocks_and_show(this.svg_group);
    };
    /**
     * Clear the block of transform="..." attributes.
     * Used when the block is switching from 3d to 2d transform or vice versa.
     */
    WorkspaceElement.prototype.clear_transform_attributes = function () {
        if (!this.svg_group)
            return;
        (0, dom_1.remove_attribute)(this.svg_group, 'transform');
    };
    WorkspaceElement.prototype.get_bounding_rectangle = function () {
        var element_xy = this.get_relative_to_surface_xy();
        var element_bounds = this.get_height_width();
        var top_left = element_xy;
        var bottom_right = gl_matrix_1.vec2.fromValues(element_xy[0] + element_bounds.width, element_xy[1] + element_bounds.height);
        return { topLeft: top_left, bottomRight: bottom_right };
    };
    WorkspaceElement.prototype.get_height_width = function () {
        return { height: this.height, width: this.width };
    };
    WorkspaceElement.prototype.get_visibility = function () {
        return this.visibility_;
    };
    WorkspaceElement.prototype.init_events = function () {
        if (this.workspace.get_options().readOnly || this.event_initialized) {
            return;
        }
        var root = this.get_svg_root();
        if (root == undefined) {
            return;
        }
        this.events.bind_event_with_checks(root, 'mousedown', this, this.on_mouse_down);
        this.event_initialized = true;
    };
    WorkspaceElement.prototype.get_top_parent = function () {
        return this;
    };
    WorkspaceElement.prototype.for_each_descendant_element = function (cb) {
        cb(this);
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.context_menu)
    ], WorkspaceElement.prototype, "context_menu", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.runtime_data)
    ], WorkspaceElement.prototype, "runtime_data", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.block_animations)
    ], WorkspaceElement.prototype, "block_animations", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], WorkspaceElement.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], WorkspaceElement.prototype, "utils", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.theme)
    ], WorkspaceElement.prototype, "theme", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.MoveEvent)
    ], WorkspaceElement.prototype, "move_event_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.CreateEvent)
    ], WorkspaceElement.prototype, "create_event_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.DeleteEvent)
    ], WorkspaceElement.prototype, "delete_event_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.UIEvent)
    ], WorkspaceElement.prototype, "ui_event_factory", void 0);
    return WorkspaceElement;
}());
exports.WorkspaceElement = WorkspaceElement;
