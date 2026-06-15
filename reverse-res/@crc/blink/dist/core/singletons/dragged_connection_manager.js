"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraggedConnectionManager = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../di");
var interfaces_1 = require("../interfaces");
/**
 * @fileoverview Class that controls updates to connections during drags.
 */
var DraggedConnectionManager = /** @class */ (function () {
    function DraggedConnectionManager() {
        /**
         * The top block in the stack being dragged.
         * Does not change during a drag.
         */
        this.top_block = undefined;
        /**
         * The workspace on which these connections are being dragged.
         * Does not change during a drag.
         * @private
         */
        this._workspace = undefined;
        /**
         * The connection that would connect to this.closestConnection if this block
         * were released immediately.
         * Updated on every mouse move.
         * This is on the top block that is being dragged or the las block in the dragging stack.
         */
        this.local_connection = undefined;
        /**
         * Whether the block would be deleted if it were droppedimmediately.
         * Updated on every mouse move.
         */
        this.would_delete_block_ = false;
        /**
         * The connections on the dragging blocks that are available to connect to
         * other blocks.  This includes all open connections on the top block, as well
         * as the last connection on the block stack.
         * Does not change during a drag.
         */
        this._available_connections = [];
        /**
         * The connection that this block would connect to if released immediately.
         * Updated on every mouse move.
         * This is not on any of the blocks that are being dragged.
         */
        this.closest_connection = undefined;
        /**
         * The distance between this.closestConnection_ and this.localConnection_,
         * in workspace units.
         * Updated on every mouse move.
         */
        this.radius_connection = 0;
    }
    DraggedConnectionManager.prototype.would_delete_block = function () {
        return this.would_delete_block_;
    };
    /**
     * Init the manager with block
     */
    DraggedConnectionManager.prototype.init = function (block) {
        this.runtime_data.selected = block;
        this.top_block = block;
        this._workspace = block.get_workspace();
        this._available_connections = this._init_available_connections(block);
    };
    /**
     * Sever all links from this object.
     */
    DraggedConnectionManager.prototype.dispose = function () {
        this.top_block = undefined;
        this._workspace = undefined;
        this._available_connections.length = 0;
        this.closest_connection = undefined;
        this.local_connection = undefined;
    };
    DraggedConnectionManager.prototype.apply_connections = function () {
        if (this.closest_connection && this.local_connection) {
            // Connect two blocks together.
            this.local_connection.connect(this.closest_connection);
            if (this.top_block && this.top_block.rendered) {
                // Trigger a connection animation.
                // Determine which connection is inferior (lower in the source stack).
                var inferiorConnection = this.local_connection.is_superior() ?
                    this.closest_connection : this.local_connection;
                this.block_animations.connection_ui_effect(inferiorConnection.get_source_block());
                this.connection_effect();
            }
            this.remove_highlighting();
        }
    };
    DraggedConnectionManager.prototype.connection_effect = function () {
        // overrride in an external project
    };
    DraggedConnectionManager.prototype.disconnection_effect = function () {
        // overrride in an external project
    };
    DraggedConnectionManager.prototype.update = function (dxy, deleteArea) {
        var oldClosestConnection = this.closest_connection;
        var closestConnectionChanged = this.update_closest(dxy);
        if (closestConnectionChanged && oldClosestConnection) {
            oldClosestConnection.unhighlight();
        }
        // Prefer connecting over dropping into the trash can, but prefer dragging to
        // the toolbox over connecting to other blocks.
        var wouldConnect = !!this.closest_connection &&
            deleteArea != interfaces_1.DeleteArea.DELETE_AREA_TOOLBOX;
        if (this.top_block) {
            var wouldDelete = !!deleteArea && !this.top_block.get_parent() &&
                this.top_block.is_deletable();
            this.would_delete_block_ = wouldDelete && !wouldConnect;
        }
        if (!this.would_delete_block_ && closestConnectionChanged &&
            this.closest_connection) {
            this.add_highlighting();
        }
    };
    /**
     * Remove highlighting from the currently highlighted connection, if it exists.
     * @private
     */
    DraggedConnectionManager.prototype.remove_highlighting = function () {
        if (this.closest_connection) {
            this.closest_connection.unhighlight();
        }
    };
    /**
     * Add highlighting to the closest connection, if it exists.
     * @private
     */
    DraggedConnectionManager.prototype.add_highlighting = function () {
        if (this.closest_connection) {
            this.closest_connection.highlight();
        }
    };
    DraggedConnectionManager.prototype._init_available_connections = function (top_block) {
        var available = top_block.get_connections(false);
        // Also check the last connection on this stack
        var lastOnStack = top_block.last_connection_in_stack();
        if (lastOnStack && lastOnStack != top_block.next_connection) {
            available.push(lastOnStack);
        }
        return available.filter(function (conn) { return conn.in_db; });
    };
    DraggedConnectionManager.prototype.update_closest = function (dxy) {
        var oldClosestConnection = this.closest_connection;
        this.closest_connection = undefined;
        this.local_connection = undefined;
        this.radius_connection = this.theme.blink_params.SNAP_RADIUS;
        for (var i = 0; i < this._available_connections.length; i++) {
            var myConnection = this._available_connections[i];
            var neighbour = myConnection.closest(this.radius_connection, dxy);
            if (neighbour.connection) {
                this.closest_connection = neighbour.connection;
                this.local_connection = myConnection;
                this.radius_connection = neighbour.radius;
            }
        }
        return oldClosestConnection != this.closest_connection;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.block_animations)
    ], DraggedConnectionManager.prototype, "block_animations", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.runtime_data)
    ], DraggedConnectionManager.prototype, "runtime_data", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.theme)
    ], DraggedConnectionManager.prototype, "theme", void 0);
    DraggedConnectionManager = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], DraggedConnectionManager);
    return DraggedConnectionManager;
}());
exports.DraggedConnectionManager = DraggedConnectionManager;
