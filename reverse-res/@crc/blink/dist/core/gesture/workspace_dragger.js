"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceDragger = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("../di");
var WorkspaceDragger = /** @class */ (function () {
    /**
     * Creates an instance of WorkspaceDragger.
     *
     * @param workspace workspace to drag
     */
    function WorkspaceDragger(workspace) {
        /**
         * The scroll position of the workspace at the beginning of the drag.
         * Coordinate system: pixel coordinates.
         *
         * @protected
         */
        this.start_scroll_xy_ = gl_matrix_1.vec2.create();
        this.workspace_ = workspace;
        this.start_drag_metrics_ = workspace.get_metrics();
        gl_matrix_1.vec2.copy(this.start_scroll_xy_, workspace.scroll_xy);
    }
    /**
     * Sever all links from this object.
     */
    WorkspaceDragger.prototype.dispose = function () {
        this.workspace_ = undefined;
    };
    /**
     * Start dragging the workspace.
     */
    WorkspaceDragger.prototype.start_drag = function () {
        if (this.runtime_data && this.runtime_data.selected) {
            this.runtime_data.selected.unselect();
        }
        if (this.workspace_ != undefined) {
            this.workspace_.setup_drag_surface();
        }
    };
    /**
     * Finish dragging the workspace and put everything back where it belongs.
     *
     * @param {vec2} delta_xy How far the pointer has
     * moved from the position at the start of the drag, in pixel coordinates.
     */
    WorkspaceDragger.prototype.end_drag = function (delta_xy) {
        // Make sure everything is up to date.
        this.drag(delta_xy);
        if (this.workspace_ != undefined) {
            this.workspace_.reset_drag_surface();
        }
        this.dispose();
    };
    /**
     * Move the workspace based on the most recent mouse movements.
     *
     * @param {vec2} delta_xy How far the pointer has
     * moved from the position at the start of the drag, in pixel coordinates.
     */
    WorkspaceDragger.prototype.drag = function (delta_xy) {
        var metrics = this.start_drag_metrics_;
        var new_xy = gl_matrix_1.vec2.add(gl_matrix_1.vec2.create(), this.start_scroll_xy_, delta_xy);
        // Bound the new XY based on workspace bounds.
        gl_matrix_1.vec2.min(new_xy, new_xy, [-metrics.contentLeft, -metrics.contentTop]);
        gl_matrix_1.vec2.max(new_xy, new_xy, [
            metrics.viewWidth - metrics.contentLeft - metrics.contentWidth,
            metrics.viewHeight - metrics.contentTop - metrics.contentHeight,
        ]);
        gl_matrix_1.vec2.scaleAndAdd(new_xy, [
            -metrics.contentLeft,
            -metrics.contentTop,
        ], new_xy, -1);
        this.update_scroll(new_xy);
    };
    /**
     * Move the scrollbars to drag the workspace.
     * x and y are in pixels.
     *
     * @protected
     * @param {vec2} xy The new position to move the scrollbar to.
     */
    WorkspaceDragger.prototype.update_scroll = function (xy) {
        if (this.workspace_ == undefined) {
            // console.warn('Trying to update scroll but workspace not found.');
            return;
        }
        this.workspace_.get_scrollbar().set(xy[0], xy[1]);
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.runtime_data)
    ], WorkspaceDragger.prototype, "runtime_data", void 0);
    WorkspaceDragger = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
        /**
         * Class for a workspace dragger.  It moves the workspace around when it is
         * being dragged by a mouse or touch.
         * Note that the workspace itself manages whether or not it has a drag surface
         * and how to do translations based on that.  This simply passes the right
         * commands based on events.
         */
    ], WorkspaceDragger);
    return WorkspaceDragger;
}());
exports.WorkspaceDragger = WorkspaceDragger;
