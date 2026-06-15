"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementDragger = void 0;
var tslib_1 = require("tslib");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("../di");
var interfaces_1 = require("../interfaces");
var ElementDragger = /** @class */ (function () {
    /**
     * Creates an instance of BlockDragger.
     * It moves blocks around the workspace when they
     * are being dragged by a mouse or touch.
     * @param block The block to drag.
     * @param workspace The workspace to drag on.
     */
    function ElementDragger(block, workspace) {
        this.parent_before_drag = undefined;
        /**
         * Which delete area the mouse pointer is over, if any.
         */
        this._delete_area = interfaces_1.DeleteArea.DELETE_AREA_NONE;
        /**
         * Whether the block would be deleted if dropped immediately.
         */
        this._would_delete_block = false;
        /**
         * Whether the currently dragged block is outside of the workspace. Keep
         * track so that we can fire events only when this changes.
         */
        this._was_outside = false;
        /**
         * Whether the currently dragged block is outside of the workspace, excluding
         * toolbox and flyout area. Keep track so that we can fire events only when
         * this changes.
         */
        this._was_workspace = true;
        this.redo_stack_before_drag = [];
        this.undo_stack_before_drag = [];
        this._dragging_block = block;
        this._workspace = workspace;
        this._start_xy = block.get_relative_to_surface_xy();
    }
    /**
     * Update the cursor to reflect whether the dragging block would be deleted if released immediately.
     * @param is_outside True if the cursor is outside of the blocks workspace
     * @param event
     * @returns return if block dragger has been disposed
     */
    ElementDragger.prototype.update_cursor_during_block_drag = function (is_outside) {
        if (this._workspace == undefined || this._dragging_block == undefined) {
            console.error('Block dragger has been disposed.');
            return;
        }
        if (!this._dragging_block.is_deletable()) {
            return;
        }
        this._would_delete_block =
            this._delete_area === interfaces_1.DeleteArea.DELETE_AREA_TOOLBOX;
        this._dragging_block.set_delete_style(this._would_delete_block);
        // Let mouse events through to GUI
        this._dragging_block.set_mouse_through_style(is_outside);
    };
    /**
     * Start dragging a block.  This includes moving it to the drag surface.
     * @param current_drag_delta_xy
     */
    ElementDragger.prototype.start_block_drag = function (current_drag_delta_xy) {
        if (this._workspace == undefined || this._dragging_block == undefined) {
            throw new Error('Block dragger has been disposed.');
        }
        if (!this.redo_stack_before_drag && !this.undo_stack_before_drag) {
            this.redo_stack_before_drag = this._workspace.get_redo_stack().slice();
            this.undo_stack_before_drag = this._workspace.get_undo_stack().slice();
        }
        if (!this.events.get_group()) {
            this.events.set_group(true);
        }
        this._workspace.set_resizes_enabled(false);
        this.tooltip.hide();
        var delta = this.pixels_to_workspace_units(current_drag_delta_xy);
        var new_loc = gl_matrix_1.vec2.create();
        gl_matrix_1.vec2.add(new_loc, this._start_xy, delta);
        this._dragging_block.translate(new_loc);
        this._dragging_block.set_dragging(true);
        this._dragging_block.bring_to_front();
        // For future consideration: we may be able to put moveToDragSurface inside
        // the block dragger, which would also let the block not track the block drag
        // surface.
        this._dragging_block.move_to_drag_surface();
        if (this._dragging_block.is_deletable()) {
            var toolbox = this._workspace.get_toolbox();
            if (toolbox != undefined) {
                toolbox.add_delete_style();
            }
        }
        if (this.events.is_enabled()) {
            var current_gesture = this._workspace.current_gesture_;
            this.events.fire(this.start_drag_event_factory({
                block: this._dragging_block,
                is_from_flyout: (current_gesture === null || current_gesture === void 0 ? void 0 : current_gesture.is_start_from_flyout()) || false,
            }));
        }
    };
    /**
     * Execute a step of block dragging, based on the given event.
     * Update the display accordingly.
     * @param e The most recent move event.
     * @param current_drag_delta_xy How far the pointer has moved from the position
     * at the start of the drag, in pixel units.
     */
    ElementDragger.prototype.drag_block = function (e, current_drag_delta_xy) {
        if (this._workspace == undefined || this._dragging_block == undefined) {
            throw new Error('Block dragger has been disposed.');
        }
        var delta = this.pixels_to_workspace_units(current_drag_delta_xy);
        var new_loc = gl_matrix_1.vec2.create();
        gl_matrix_1.vec2.add(new_loc, this._start_xy, delta);
        this._dragging_block.move_during_drag(new_loc);
        this.drag_related(delta);
        this.handle_dragging_around_delete_area(e);
        this.handle_dragging_around_blocks_area(e);
        this.handle_dragging_around_workspace(e);
        return delta;
    };
    ElementDragger.prototype.handle_dragging_around_delete_area = function (e) {
        if (this._workspace == undefined || this._dragging_block == undefined) {
            throw new Error('Block dragger has been disposed.');
        }
        var delete_area = this._workspace.is_delete_area(e);
        var drag_into_delete_area_e;
        if (!!delete_area !== !!this._delete_area
            && this.events.is_enabled()) {
            drag_into_delete_area_e = this.drag_area_change_event_factory({
                block: this._dragging_block,
                area: interfaces_1.DragArea.DELETE_AREA,
                is_in: !!delete_area,
            });
        }
        this._delete_area = delete_area;
        this.events.fire(drag_into_delete_area_e);
    };
    ElementDragger.prototype.handle_dragging_around_blocks_area = function (e) {
        if (this._workspace == undefined || this._dragging_block == undefined) {
            throw new Error('Block dragger has been disposed.');
        }
        var is_outside = !this._workspace.is_inside_blocks_area(e);
        var event;
        if (is_outside !== this._was_outside) {
            if (this.events.is_enabled()) {
                event = this.drag_area_change_event_factory({
                    block: this._dragging_block,
                    area: interfaces_1.DragArea.INJECTION_DIV,
                    is_in: !is_outside,
                });
            }
            this._was_outside = is_outside;
        }
        this.update_cursor_during_block_drag(is_outside);
        this.events.fire(event);
    };
    ElementDragger.prototype.handle_dragging_around_workspace = function (e) {
        if (this._workspace == undefined || this._dragging_block == undefined) {
            throw new Error('Block dragger has been disposed.');
        }
        var is_workspace = this._workspace.is_inside_workspace_area(e);
        var w_event;
        if (is_workspace !== this._was_workspace) {
            if (this.events.is_enabled()) {
                w_event = this.drag_area_change_event_factory({
                    block: this._dragging_block,
                    area: interfaces_1.DragArea.WORKSPACE,
                    is_in: is_workspace,
                });
            }
            this._was_workspace = is_workspace;
        }
        this.events.fire(w_event);
    };
    /**
     * If necessary, delete the dragging block. Should be called at the end of a block drag.
     * @returns whether the block was deleted.
     */
    ElementDragger.prototype.maybe_delete_block = function () {
        if (this._workspace == undefined || this._dragging_block == undefined) {
            throw new Error('Block dragger has been disposed.');
        }
        if (!this._dragging_block.is_deletable()) {
            return false;
        }
        if (this._would_delete_block) {
            if (this.events.is_enabled()) {
                // Fire a move event, so we know where to go back to for an undo.
                var event_1 = this.move_event_factory({ block: this._dragging_block });
                event_1.set_old_coord(this._start_xy); // Reset the coord to old one.
                event_1.record_new();
                this.events.fire(event_1);
            }
            // A delete event will be fired by dispose after the move event.
            this._dragging_block.dispose(false, true);
        }
        return this._would_delete_block;
    };
    /**
     * Convert a coordinate object from pixels to workspace units.
     * This function does not consider differing origins.
     * It simply scales the input's x and y values.
     * @param pixel_coord A coordinate with x and y values in css pixel units.
     */
    ElementDragger.prototype.pixels_to_workspace_units = function (pixel_coord) {
        var result = gl_matrix_1.vec2.create();
        if (this._workspace == undefined) {
            console.error('Block dragger has been disposed.');
            return gl_matrix_1.vec2.create();
        }
        var scale = this._workspace.get_scale();
        gl_matrix_1.vec2.scale(result, pixel_coord, 1 / scale);
        return result;
    };
    /**
     * Sever all links from this object.
     */
    ElementDragger.prototype.dispose = function () {
        this._dragging_block = undefined;
        this._workspace = undefined;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], ElementDragger.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.block_animations)
    ], ElementDragger.prototype, "block_animations", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.tooltip)
    ], ElementDragger.prototype, "tooltip", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.DragAreaChangeEvent)
    ], ElementDragger.prototype, "drag_area_change_event_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.EndDragEvent)
    ], ElementDragger.prototype, "end_drag_event_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.MoveEvent)
    ], ElementDragger.prototype, "move_event_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.StartDragEvent)
    ], ElementDragger.prototype, "start_drag_event_factory", void 0);
    return ElementDragger;
}());
exports.ElementDragger = ElementDragger;
