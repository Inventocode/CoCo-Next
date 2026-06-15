"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertionMarkerManager = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../di");
var interfaces_1 = require("../interfaces");
/**
 * Class that controls updates to connections during drags.
 * It is primarily responsible for finding the closest eligible
 * connection and highlighting or unhiglighting it as needed during a drag.
 *
 * @export
 * @class InsertionMarkerManager
 */
var InsertionMarkerManager = /** @class */ (function () {
    function InsertionMarkerManager() {
        /**
         * The top block in the stack being dragged.
         * Does not change during a drag.
         */
        this.top_block = undefined;
        /**
         * The workspace on which these connections are being dragged.
         * Does not change during a drag.
         */
        this._workspace = undefined;
        /**
         * The last connection on the stack, if it's not the last connection on the
         * first block.
         * Set in initAvailableConnections, if at all.
         */
        this.last_on_stack = undefined;
        /**
         * The insertion marker corresponding to the last block in the stack, if
         * that's not the same as the first block in the stack.
         * Set in initAvailableConnections, if at all
         */
        this.last_marker = undefined;
        /**
         * The connection that this block would connect to if released immediately.
         * Updated on every mouse move.
         * This is not on any of the blocks that are being dragged.
         */
        this.closest_connection = undefined;
        /**
         * The insertion marker that shows up between blocks to show where a block
         * would go if dropped immediately.
         * This is the scratch-blocks equivalent of connection highlighting.
         */
        this.first_marker = undefined;
        /**
         * The connection that would connect to this.closestConnection if this block
         * were released immediately.
         * Updated on every mouse move.
         * This is on the top block that is being dragged or the las block in the dragging stack.
         */
        this.local_connection = undefined;
        /**
         * Whether the block would be deleted if it were dropped immediately.
         * Updated on every mouse move.
         */
        this.would_delete_block_ = false;
        /**
         * Connection on the insertion marker block that corresponds to
         * this.localConnection_ on the currently dragged block.
         * This is part of the scratch-blocks equivalent of connection highlighting.
         */
        this.marker_connection = undefined;
        /**
         * Whether we are currently highlighting the block (shadow or real) that would
         * be replaced if the drag were released immediately.
         */
        this.highlighting_block = false;
        /**
         * The block that is being highlighted for replacement, or undefined.
         */
        this.highlighted_block = undefined;
        /**
         * The connections on the dragging blocks that are available to connect to
         * other blocks.  This includes all open connections on the top block, as well
         * as the last connection on the block stack.
         * Does not change during a drag.
         */
        this._available_connections = [];
    }
    /**
     * Init the manager with block
     */
    InsertionMarkerManager.prototype.init = function (block) {
        this.runtime_data.selected = block;
        this.top_block = block;
        this._workspace = block.get_workspace();
        if (!this.top_block.output_connection) {
            this.first_marker = this.create_marker_block(this.top_block);
        }
        this._available_connections = this._init_available_connections(block);
    };
    /**
     * Create an insertion marker that represents the given block.
     * @param source_block The block that the insertion marker
     *     will represent.
     * @return The insertion marker that represents the given
     *     block.
     */
    InsertionMarkerManager.prototype.create_marker_block = function (source_block) {
        var im_type = source_block.type;
        this.events.disable();
        var result;
        try {
            if (this._workspace == undefined) {
                throw new ReferenceError('Trying to create marker before init the insertion marker manager.');
            }
            result = this.block_factory({
                prototype_name: im_type,
                workspace: this._workspace,
                is_insertion_marker: true,
            });
            result.set_insertion_marker(true); // TODO 为什么要再单独设置一次？
            // if (
            //   source_block.mutationToDom &&
            //   result.domToMutation instanceof Function) {
            //   const old_mutation_dom = source_block.mutationToDom();
            //   result.domToMutation(old_mutation_dom);
            // }
            // 这里是针对那些 message0: '' 且由 mutation 生成主要结构的积木
            // inputList 为 0 的时候会生成错误的 insertion_marker block
            if (result.inputList.length === 0) {
                // 添加一个 dummy input
                result.appendDummyInput();
            }
            result.init_svg();
        }
        finally {
            this.events.enable();
        }
        return result;
    };
    /**
     * Return whether the block would be deleted if dropped immediately, based on
     * information from the most recent move event.
     * @return true if the block would be deleted if dropped immediately.
     */
    InsertionMarkerManager.prototype.would_delete_block = function () {
        return this.would_delete_block_;
    };
    /**
     * Populate the list of available connections on this block stack.  This should
     * only be called once, at the beginning of a drag.
     * If the stack has more than one block, this function will populate
     * lastOnStack_ and create the corresponding insertion marker.
     * @return a list of available connections.
     */
    InsertionMarkerManager.prototype._init_available_connections = function (top_block) {
        var available = top_block.get_connections(false);
        // Also check the last connection on this stack when not collapsed under a event block
        var last_on_stack = top_block.last_connection_in_stack();
        if (last_on_stack) {
            available.push(last_on_stack);
            this.last_on_stack = last_on_stack;
            this.last_marker = this.create_marker_block(last_on_stack.get_source_block());
        }
        return available.filter(function (conn) { return conn.in_db; });
    };
    /**
     * Decide the radius at which to start searching for the closest connection.
     * @return The radius at which to start the search for the closest connection.
     */
    InsertionMarkerManager.prototype.get_start_radius = function () {
        // If there is already a connection highlighted,
        // increase the radius we check for making new connections.
        // Why? When a connection is highlighted, blocks move around when the insertion
        // marker is created, which could cause the connection became out of range.
        // By increasing radiusConnection when a connection already exists,
        // we never "lose" the connection from the offset.
        if (this.closest_connection && this.local_connection) {
            return this.theme.blink_params.CONNECTING_SNAP_RADIUS;
        }
        return this.theme.blink_params.SNAP_RADIUS;
    };
    /**
     * Find the nearest valid connection, which may be the same as the current
     * closest connection.
     * @param  dxy Position relative to drag start, in workspace units.
     * @return candidate An object containing a local connection, a closest
     *     connection, and a radius.
     */
    InsertionMarkerManager.prototype._get_candidate = function (dxy) {
        var radius = this.get_start_radius();
        var candidate_closest = undefined;
        var candidate_local = undefined;
        for (var i = 0; i < this._available_connections.length; i++) {
            var myConnection = this._available_connections[i];
            var neighbour = myConnection.closest(radius, dxy);
            if (neighbour.connection) {
                candidate_closest = neighbour.connection;
                candidate_local = myConnection;
                radius = neighbour.radius;
            }
        }
        return {
            closest: candidate_closest,
            local: candidate_local,
            radius: radius,
        };
    };
    /**
     * Whether ending the drag would delete the block.
     * @param candidate An object containing a local connection, a closest
     *     connection, and a radius.
     * @param delete_area
     * @return True if dropping the block immediately would replace
     *     delete the block.  False otherwise.
     */
    InsertionMarkerManager.prototype.should_delete = function (candidate, delete_area) {
        if (this.top_block == undefined) {
            throw new ReferenceError('Deleting block not found.');
        }
        // Prefer connecting over dropping into the trash can,
        // but prefer dragging to the toolbox over connecting to other blocks.
        var would_connect = candidate &&
            !!candidate.closest &&
            delete_area !== interfaces_1.DeleteArea.DELETE_AREA_TOOLBOX;
        var wouldDelete = !!delete_area &&
            !this.top_block.get_parent() &&
            this.top_block.is_deletable();
        return wouldDelete && !would_connect;
    };
    /**
     * Whether the previews (insertion marker and replacement marker) should be
     * updated based on the closest candidate and the current drag distance.
     * @param  candidate An object containing a local connection, a closest connection, and a radius.
     * @param dxy Position relative to drag start in workspace units.
     * @return whether the preview should be updated.
     */
    InsertionMarkerManager.prototype.should_update_previews = function (candidate, dxy) {
        var candidateLocal = candidate.local;
        var candidateClosest = candidate.closest;
        var radius = candidate.radius;
        // Found a connection!
        if (candidateLocal && candidateClosest) {
            if (candidateLocal.type === interfaces_1.CONNECTION_TYPE.OUTPUT_VALUE) {
                // Always update previews for output connections.
                return true;
            }
            // We're already showing an insertion marker.
            // Decide whether the new connection has higher priority.
            if (this.local_connection && this.closest_connection) {
                // The connection was the same as the current connection.
                if (this.closest_connection == candidateClosest) {
                    return false;
                }
                var xDiff = this.local_connection.get_xy()[0] + dxy[0] - this.closest_connection.get_xy()[0];
                var yDiff = this.local_connection.get_xy()[1] + dxy[1] - this.closest_connection.get_xy()[1];
                var curDistance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
                // Slightly prefer the existing preview over a new preview.
                return !(candidateClosest && radius > curDistance -
                    this.theme.blink_params.CURRENT_CONNECTION_PREFERENCE);
            }
            else if (!this.local_connection && !this.closest_connection) {
                // We weren't showing a preview before, but we should now.
                return true;
            }
            else {
                console.error('Only one of localConnection_ and closestConnection_ was set.');
            }
        }
        else { // No connection found.
            // Only need to update if we were showing a preview before.
            return !!(this.local_connection && this.closest_connection);
        }
        console.error('Returning true from shouldUpdatePreviews, but it\'s not clear why.');
        return true;
    };
    /**
     * Get rid of the highlighting marking the block that will be replaced.
     * Scratch-specific code, where "highlighting" applies to a block rather than
     * a connection.
     */
    InsertionMarkerManager.prototype.unhighlight_block = function () {
        var closest = this.closest_connection;
        var highlighted = this.highlighted_block;
        if (closest == undefined || highlighted == undefined) {
            throw new ReferenceError('Connection not found for unhighlight.');
        }
        // If there's no block in place, but we're still connecting to a value input,
        // then we must have been highlighting an input shape.
        highlighted.highlight_for_replacement(false);
        this.highlighted_block = undefined;
        this.highlighting_block = false;
    };
    /**
     * Disconnect the insertion marker block in a manner that returns the stack to
     * original state.
     * @private
     */
    InsertionMarkerManager.prototype.disconnect_marker = function () {
        if (!this.marker_connection) {
            // console.warn('No insertion marker connection to disconnect');
            return;
        }
        var imConn = this.marker_connection;
        var imBlock = imConn.get_source_block();
        var markerNext = imBlock.next_connection;
        var markerPrev = imBlock.previous_connection;
        // The insertion marker is the first block in a stack,
        // either because it doesn't have a previous connection or
        // because the previous connection is not connected.
        // Unplug won't do anything in that case.  Instead, unplug the following block.
        if (imConn == markerNext &&
            !(markerPrev && markerPrev.get_targe_connection())) {
            var block = imConn.targetBlock();
            if (block == undefined) {
                throw new ReferenceError('Target block not found when disconnect marger.');
            }
            block.unplug(false);
        }
        else if (imConn.type == interfaces_1.CONNECTION_TYPE.NEXT_STATEMENT &&
            imConn != markerNext) {
            // Inside of a C-block, first statement connection.
            var innerConnection = imConn.get_targe_connection();
            if (innerConnection == undefined) {
                throw new ReferenceError('Connection not found when disconnect marker.');
            }
            innerConnection.get_source_block().unplug(false);
            var previousBlockNextConnection = markerPrev ?
                markerPrev.get_targe_connection() :
                undefined;
            imBlock.unplug(true);
            if (previousBlockNextConnection) {
                previousBlockNextConnection.connect(innerConnection);
            }
        }
        else {
            imBlock.unplug(true);
        }
        if (imConn.get_targe_connection()) {
            throw new Error('markerConnection_ still connected at the end of disconnectInsertionMarker');
        }
        this.marker_connection = undefined;
        var svg_root = imBlock.get_svg_root();
        if (svg_root != undefined) {
            svg_root.setAttribute('visibility', 'hidden');
        }
    };
    /**
     * A preview should be hidden.  This function figures out if it is a block
     *  highlight or an insertion marker, and hides the appropriate one.
     */
    InsertionMarkerManager.prototype.hide_preview = function () {
        if (this.highlighting_block) {
            this.unhighlight_block();
        }
        else if (this.marker_connection) {
            this.disconnect_marker();
        }
    };
    /**
     * Show an insertion marker or replacement highlighting during a drag, if
     * needed.
     * At the end of this function, this.localConnection_ and
     * this.closestConnection_ should both be undefined.
     * @param candidate An object containing a local connection, a closest
     *     connection, and a radius.
     */
    InsertionMarkerManager.prototype.maybe_hide_preview = function (candidate) {
        // If there's no new preview, remove the old one but don't bother deleting it.
        // We might need it later, and this saves disposing of it and recreating it.
        if (!candidate.closest) {
            this.hide_preview();
        }
        // If there's a new preview and there was an preview before, and either
        // connection has changed, remove the old preview.
        var hadPreview = this.closest_connection && this.local_connection;
        var closestChanged = this.closest_connection != candidate.closest;
        var localChanged = this.local_connection != candidate.local;
        // Also hide if we had a preview before but now we're going to delete instead.
        if (hadPreview && (closestChanged || localChanged || this.would_delete_block_)) {
            this.hide_preview();
        }
        // Either way, clear out old state.
        this.marker_connection = undefined;
        this.closest_connection = undefined;
        this.local_connection = undefined;
    };
    /**
     * Whether ending the drag would replace a block or insert a block.
     * @return True if dropping the block immediately would replace another block.
     *    False if dropping the block immediately would result in the block being
     *    inserted in a block stack.
     */
    InsertionMarkerManager.prototype.should_replace = function () {
        var closest = this.closest_connection;
        var local = this.local_connection;
        if (local == undefined) {
            throw new ReferenceError('Local connection not found when trying replace/insert block.');
        }
        if (this.top_block == undefined) {
            throw new ReferenceError('Block not found when trying replace/insert block.');
        }
        // Dragging a block over an existing block in an input should replace the
        // existing block and bump it out.
        if (local.type == interfaces_1.CONNECTION_TYPE.OUTPUT_VALUE) {
            return true; // Replace.
        }
        // Connecting to a statement input of c-block is an insertion, even if that
        // c-block is terminal (e.g. forever).
        if (local == local.get_source_block().get_first_statement_connection()) {
            return false; // Insert.
        }
        // Dragging a terminal block over another (connected) terminal block will
        // replace, not insert.
        var isTerminalBlock = !this.top_block.next_connection;
        var isConnectedTerminal = isTerminalBlock &&
            local.type == interfaces_1.CONNECTION_TYPE.PREVIOUS_STATEMENT &&
            closest != undefined && closest.is_connected();
        if (isConnectedTerminal) {
            return true; // Replace.
        }
        // Otherwise it's an insertion.
        return false;
    };
    /**
     * Add highlighting showing which block will be replaced.
     * Scratch-specific code, where "highlighting" applies to a block rather than
     * a connection.
     */
    InsertionMarkerManager.prototype.highlight_block = function () {
        var closest = this.closest_connection;
        var local = this.local_connection;
        if (closest == undefined) {
            // console.warn(
            //     'Trying to highlight block without closest connection.');
            return;
        }
        if (local == undefined) {
            // console.warn(
            //     'Trying to highlight block without local connection.');
            return;
        }
        var block = closest.targetBlock();
        if (block) {
            this.highlighted_block = block;
            block.highlight_for_replacement(true);
        }
        this.highlighting_block = true;
    };
    /**
     * Add an insertion marker connected to the appropriate blocks.
     * @private
     */
    InsertionMarkerManager.prototype.connect_marker = function () {
        var local = this.local_connection;
        var closest = this.closest_connection;
        if (closest == undefined) {
            // console.warn('Trying to connect marker without any closest connection to connect.');
            return;
        }
        var isLastInStack = this.last_on_stack && local == this.last_on_stack;
        var imBlock = isLastInStack ? this.last_marker : this.first_marker;
        if (imBlock == undefined) {
            // console.warn('Block not found when connect marker.');
            return;
        }
        if (local == undefined) {
            // console.warn('Trying to connect marker without any connection.');
            return;
        }
        var imConn = imBlock.get_matching_connection(local.get_source_block(), local);
        if (imConn == undefined) {
            // console.warn('Insertion marker connection not found.');
            return;
        }
        if (imConn == this.marker_connection) {
            throw new Error('Made it to connect_marker even though the marker isn\'t changing');
        }
        // Render disconnected from everything else so that we have a valid
        // connection location.
        imBlock.render();
        var svg_root = imBlock.get_svg_root();
        if (svg_root != undefined) {
            svg_root.setAttribute('visibility', 'visible');
        }
        imBlock.position_new_block(imBlock, imConn, closest);
        // Connect() also renders the insertion marker.
        imConn.connect(closest);
        this.marker_connection = imConn;
    };
    /**
     * A preview should be shown.  This function figures out if it should be a block
     * highlight or an insertion marker, and shows the appropriate one.
     * @private
     */
    InsertionMarkerManager.prototype.show_preview = function () {
        if (this.should_replace()) {
            this.highlight_block();
        }
        else {
            this.connect_marker();
        }
    };
    /**
     * Show an insertion marker or replacement highlighting during a drag, if
     * needed.
     * At the beginning of this function, this.localConnection_ and
     * this.closestConnection_ should both be undefined.
     * @param {!Object} candidate
     * An object containing a local connection, a closest connection, and a radius.
     * @private
     */
    InsertionMarkerManager.prototype.maybe_show_preview = function (candidate) {
        // Nope, don't add a marker.
        if (this.would_delete_block_) {
            return;
        }
        var closest = candidate.closest;
        var local = candidate.local;
        // Nothing to connect to.
        if (!closest) {
            return;
        }
        // Something went wrong and we're trying to connect to an invalid connection.
        if (closest == this.closest_connection ||
            closest.source_block.is_insertion_marker()) {
            return;
        }
        // Add an insertion marker or replacement marker.
        this.closest_connection = closest;
        this.local_connection = local;
        this.show_preview();
    };
    // Update highlighted connections based on the most recent move location.
    InsertionMarkerManager.prototype.update = function (dxy, delete_area) {
        var candidate = this._get_candidate(dxy);
        this.would_delete_block_ = this.should_delete(candidate, delete_area);
        var shouldUpdate = this.would_delete_block_ ||
            this.should_update_previews(candidate, dxy);
        if (shouldUpdate) {
            // Don't fire events for insertion marker creation or movement.
            this.events.disable();
            this.maybe_hide_preview(candidate);
            this.maybe_show_preview(candidate);
            this.events.enable();
        }
    };
    /**
     * Connect to the closest connection and render the results.
     * This should be called at the end of a drag.
     * @package
     */
    InsertionMarkerManager.prototype.apply_connections = function () {
        var _a, _b;
        if (this.top_block == undefined) {
            throw new ReferenceError('Top block not found when applying connections.');
        }
        // insertion_marker或高亮积木，指示了积木将会连接到的位置
        // 如果前者与closest_conn不同，以前者为准进行连接
        if (this.highlighting_block && this.highlighted_block) {
            this.closest_connection =
                ((_a = this.highlighted_block.output_connection) === null || _a === void 0 ? void 0 : _a.target_connection) ||
                    ((_b = this.highlighted_block.previous_connection) === null || _b === void 0 ? void 0 : _b.target_connection);
        }
        else if (this.marker_connection) {
            this.closest_connection = this.marker_connection.target_connection;
        }
        if (this.closest_connection) {
            // Don't fire events for insertion markers.
            this.events.disable();
            this.hide_preview();
            this.events.enable();
            // Connect two blocks together.
            this.local_connection && this.local_connection.connect(this.closest_connection);
            if (this.top_block.is_rendered()) {
                // Trigger a connection animation.
                // Determine which connection is inferior (lower in the source stack).
                if (this.local_connection) {
                    var inferiorConnection = this.local_connection.is_superior() ?
                        this.closest_connection : this.local_connection;
                    this.block_animations.connection_ui_effect(inferiorConnection.get_source_block());
                }
                // Bring the just-edited stack to the front.
                var rootBlock = this.top_block.get_root_block();
                rootBlock.bring_to_front();
            }
            return true;
        }
        return false;
    };
    /**
     * Sever all links from this object.
     * @package
     */
    InsertionMarkerManager.prototype.dispose = function () {
        this.top_block = undefined;
        this._workspace = undefined;
        this._available_connections.length = 0;
        this.closest_connection = undefined;
        this.local_connection = undefined;
        this.events.disable();
        try {
            if (this.first_marker) {
                this.first_marker.dispose();
                this.first_marker = undefined;
            }
            if (this.last_marker) {
                this.last_marker.dispose();
                this.last_marker = undefined;
            }
        }
        finally {
            this.events.enable();
        }
        this.highlighted_block = undefined;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.block_animations)
    ], InsertionMarkerManager.prototype, "block_animations", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], InsertionMarkerManager.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.runtime_data)
    ], InsertionMarkerManager.prototype, "runtime_data", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.theme)
    ], InsertionMarkerManager.prototype, "theme", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.BlockSvg)
    ], InsertionMarkerManager.prototype, "block_factory", void 0);
    InsertionMarkerManager = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], InsertionMarkerManager);
    return InsertionMarkerManager;
}());
exports.InsertionMarkerManager = InsertionMarkerManager;
