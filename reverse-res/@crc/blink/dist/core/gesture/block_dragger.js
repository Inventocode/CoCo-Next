"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockDragger = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("../di");
var workspace_element_dragger_1 = require("./workspace_element_dragger");
var BlockDragger = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(BlockDragger, _super);
    /**
     * Creates an instance of BlockDragger.
     * It moves blocks around the workspace when they
     * are being dragged by a mouse or touch.
     */
    function BlockDragger(o) {
        var _this = _super.call(this, o.target, o.workspace) || this;
        _this.type = 'block_dragger';
        var block = o.target, workspace = o.workspace;
        var connection_effect = workspace.get_options().connection_effect;
        if (connection_effect) {
            _this._dragged_connection_manager = connection_effect.type === 'default'
                ? _this.dragged_connection_manager
                : _this.insertion_marker_manager;
        }
        else {
            _this._dragged_connection_manager = _this.insertion_marker_manager;
        }
        _this._dragged_connection_manager.init(block);
        _this._drag_icon_data = _this.generate_icon_data(block);
        return _this;
    }
    /**
     * Make a list of all of the icons (comment, warning) that are
     * on this block and its descendants.  Moving an icon moves the bubble that
     * extends from it if that bubble is open.
     */
    BlockDragger.prototype.generate_icon_data = function (block) {
        // Build a list of icons that need to be moved and where they started.
        var drag_icon_data = [];
        var descendants = block.get_descendants();
        for (var i = 0; i < descendants.length; i++) {
            var descendant = descendants[i];
            var icons = descendant.get_icons();
            for (var j = 0; j < icons.length; j++) {
                var data = {
                    location: icons[j].get_location(),
                    icon: icons[j],
                };
                drag_icon_data.push(data);
            }
        }
        return drag_icon_data;
    };
    /**
     * @override use this._dragged_connection_manager.would_delete_block() to
     *  decide whether the block should be deleted.
     *  When a block is at a position that can either be deleted or connected,
     *  the final action should be decided by corresponding manager.
     */
    BlockDragger.prototype.update_cursor_during_block_drag = function (is_outside) {
        if (this._workspace == undefined || this._dragging_block == undefined) {
            console.error('Block dragger has been disposed.');
            return;
        }
        if (!this._dragging_block.is_deletable()) {
            return;
        }
        this._would_delete_block = this._dragged_connection_manager.would_delete_block();
        this._dragging_block.set_delete_style(this._would_delete_block);
        // Let mouse events through to GUI
        this._dragging_block.set_mouse_through_style(is_outside);
    };
    /**
     * Start dragging a block.  This includes moving it to the drag surface.
     * @param current_drag_delta_xy
     */
    BlockDragger.prototype.start_block_drag = function (current_drag_delta_xy) {
        if (this._workspace == undefined || this._dragging_block == undefined) {
            throw new Error('Block dragger has been disposed.');
        }
        this.redo_stack_before_drag = this._workspace.get_redo_stack().slice();
        this.undo_stack_before_drag = this._workspace.get_undo_stack().slice();
        if (!this.events.get_group()) {
            this.events.set_group(true);
        }
        this.parent_before_drag = this._dragging_block.get_parent();
        if (this.parent_before_drag) {
            // Remove the top block's filter before disconnect(only excute when the ).
            this._dragging_block.get_root_block().svg_group.removeAttribute('filter');
            this._dragging_block.unplug();
            // const delta = this.pixels_to_workspace_units(current_drag_delta_xy);
            // const new_loc = vec2.create();
            // vec2.add(new_loc, this._start_xy, delta);
            // this._dragging_block.translate(new_loc);
            this.block_animations.disconnect_ui_effect(this._dragging_block);
            // this.dragged_connection_manager.disconnection_effect();
        }
        // events group will be closed in super.start_block_drag
        _super.prototype.start_block_drag.call(this, current_drag_delta_xy);
    };
    BlockDragger.prototype.drag_block = function (e, current_drag_delta_xy) {
        var delta = _super.prototype.drag_block.call(this, e, current_drag_delta_xy);
        this._dragged_connection_manager.update(delta, this._delete_area);
        return delta;
    };
    /**
     * End Block Drag
     * @override handle connections and icon data.
     */
    BlockDragger.prototype.end_block_drag = function (e, current_drag_delta_xy) {
        if (this._workspace == undefined || this._dragging_block == undefined) {
            throw new Error('Block dragger has been disposed.');
        }
        // Make sure internal state is fresh.
        this.drag_block(e, current_drag_delta_xy);
        this._drag_icon_data = [];
        // Clear the timeout of the disconnectUiEffect.
        // And prevent flash blocks when the time between
        // startDrag and endDrag are less than 100ms
        this.block_animations.disconnect_ui_effect_stop(this._dragging_block);
        this._dragging_block.set_mouse_through_style(false);
        var toolbox = this._workspace.get_toolbox();
        if (toolbox != undefined) {
            toolbox.remove_delete_style();
        }
        var end_drag_event = undefined;
        if (this.events.is_enabled()) {
            var current_gesture = this._workspace.current_gesture_;
            end_drag_event = this.end_drag_event_factory({
                block: this._dragging_block,
                is_outside: this._was_outside,
                mouse_position: gl_matrix_1.vec2.fromValues(e.clientX, e.clientY),
                is_from_flyout: (current_gesture === null || current_gesture === void 0 ? void 0 : current_gesture.is_start_from_flyout()) || false,
                redo_stack_before_drag: this.redo_stack_before_drag,
            });
        }
        var delta = this.pixels_to_workspace_units(current_drag_delta_xy);
        var new_loc = gl_matrix_1.vec2.add(gl_matrix_1.vec2.create(), this._start_xy, delta);
        this._dragging_block.move_off_drag_surface(new_loc);
        this._dragging_block.bring_to_front();
        var deleted = this.maybe_delete_block();
        if (!deleted) {
            // These are expensive and don't need to be done if we're deleting.
            this._dragging_block.move_connections(delta);
            this._dragging_block.set_dragging(false);
            // 这里的移动事件记录了坐标的变化，
            // apply_connections会触发连接事件。
            // 移动事件需要在连接事件之前fire。
            if (this.events.is_enabled()) {
                var move_event = this.move_event_factory({ block: this._dragging_block });
                move_event.set_old_coord(this._start_xy); // Reset the coord to old one.
                move_event.record_new();
                this.events.fire(move_event);
            }
            this._dragged_connection_manager.apply_connections();
            this._dragging_block.render();
            this._dragging_block.schedule_snap_and_bump();
        }
        this.redo_stack_before_drag = [];
        this.undo_stack_before_drag = [];
        this.parent_before_drag = undefined;
        var workspace = this._workspace;
        this.dispose();
        workspace === null || workspace === void 0 ? void 0 : workspace.set_resizes_enabled(true);
        this.events.fire(end_drag_event);
        this.events.set_group(false);
    };
    /**
     * Move all of the icons connected to this drag.
     * @param dxy How far to move the icons from their original positions, in workspace units.
     */
    BlockDragger.prototype.drag_related = function () {
        // Moving icons moves their associated bubbles.
        for (var i = 0; i < this._drag_icon_data.length; i++) {
            var data = this._drag_icon_data[i];
            data.icon.reposition();
        }
    };
    /**
     * Sever all links from this object.
     */
    BlockDragger.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._drag_icon_data.length = 0;
        if (this._dragged_connection_manager) {
            this._dragged_connection_manager.dispose();
        }
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.insertion_marker_manager)
    ], BlockDragger.prototype, "insertion_marker_manager", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.dragged_connection_manager)
    ], BlockDragger.prototype, "dragged_connection_manager", void 0);
    BlockDragger = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], BlockDragger);
    return BlockDragger;
}(workspace_element_dragger_1.ElementDragger));
exports.BlockDragger = BlockDragger;
