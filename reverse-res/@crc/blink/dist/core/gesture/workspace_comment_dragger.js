"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceCommentDragger = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var base_1 = require("../utils/base");
var workspace_element_dragger_1 = require("./workspace_element_dragger");
var WorkspaceCommentDragger = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(WorkspaceCommentDragger, _super);
    /**
     * Creates an instance of BlockDragger.
     * It moves blocks around the workspace when they
     * are being dragged by a mouse or touch.
     */
    function WorkspaceCommentDragger(o) {
        var _this = _super.call(this, o.target, o.workspace) || this;
        _this.type = 'comment_dragger';
        _this.start_relative_position = o.target.get_relative_position();
        return _this;
    }
    WorkspaceCommentDragger.prototype.drag_related = function (dxy) {
        if (!(0, base_1.is_workspace_comment)(this._dragging_block)) {
            return;
        }
        var relative_position = gl_matrix_1.vec2.add(gl_matrix_1.vec2.create(), this.start_relative_position, dxy);
        this._dragging_block.set_relative_position(relative_position);
        this._dragging_block.draw_line();
    };
    /**
     * End Block Drag
     * @override handle block comment move event.
     */
    WorkspaceCommentDragger.prototype.end_block_drag = function (e, current_drag_delta_xy) {
        if (this._workspace == undefined || this._dragging_block == undefined) {
            throw new Error('Comment dragger has been disposed.');
        }
        // Make sure internal state is fresh.
        this.drag_block(e, current_drag_delta_xy);
        // Clear the timeout of the disconnectUiEffect.
        // And prevent flash blocks when the time between
        // startDrag and endDrag are less than 100ms
        this.block_animations.disconnect_ui_effect_stop(this._dragging_block);
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
        this._dragging_block.set_mouse_through_style(false);
        var delta = this.pixels_to_workspace_units(current_drag_delta_xy);
        var new_loc = gl_matrix_1.vec2.add(gl_matrix_1.vec2.create(), this._start_xy, delta);
        this._dragging_block.move_off_drag_surface(new_loc);
        this._dragging_block.bring_to_front();
        var deleted = this.maybe_delete_block();
        if (!deleted) {
            // These are expensive and don't need to be done if we're deleting.
            this._dragging_block.set_dragging(false);
            // 这里的移动事件记录了坐标的变化，
            // apply_connections会触发连接事件。
            // 移动事件需要在连接事件之前fire。
            if (this.events.is_enabled()) {
                var move_event = this.move_event_factory({ block: this._dragging_block });
                move_event.set_old_coord(this.start_relative_position); // Use relative position as old coord
                move_event.record_new();
                this.events.fire(move_event);
            }
        }
        this._workspace.set_resizes_enabled(true);
        if (this._dragging_block.is_deletable()) {
            var toolbox = this._workspace.get_toolbox();
            if (toolbox != undefined) {
                toolbox.remove_delete_style();
            }
        }
        this.redo_stack_before_drag = [];
        this.undo_stack_before_drag = [];
        this.dispose();
        end_drag_event && this.events.fire(end_drag_event);
        this.events.set_group(false);
    };
    WorkspaceCommentDragger = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], WorkspaceCommentDragger);
    return WorkspaceCommentDragger;
}(workspace_element_dragger_1.ElementDragger));
exports.WorkspaceCommentDragger = WorkspaceCommentDragger;
