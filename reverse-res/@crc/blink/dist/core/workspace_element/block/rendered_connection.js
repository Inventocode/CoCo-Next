"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderedConnection = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var animejs_1 = (0, tslib_1.__importDefault)(require("animejs"));
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("../../di");
var interfaces_1 = require("../../interfaces");
var base_1 = require("../../utils/base");
var dom_1 = require("../../utils/dom");
var constants_1 = require("../../constants");
var RenderedConnection = /** @class */ (function () {
    /**
     * Class for a connection between blocks that may be rendered on screen.
     */
    function RenderedConnection(o) {
        var _this = this;
        /**
         * Horizontal location of this connection.
         */
        this.x_ = 0;
        /**
         * Vertical location of this connection.
         */
        this.y_ = 0;
        this.hidden_ = false;
        this.in_db = false;
        /**
         * DOM representation of a shadow block, or undefined if none.
         */
        this.shadow_dom = undefined;
        /**
         * Check if the two connections can be dragged to connect to each other.
         * This is used by the connection database when searching for the closest
         * connection.
         * @param candidate A nearby connection to check, which
         *     must be a previous connection.
         * @return True if the connection is allowed, false otherwise.
         */
        this.can_connect_to_previous = function (candidate) {
            if (_this.target_connection) {
                // This connection is already occupied.
                // A next connection will never disconnect itself mid-drag.
                return false;
            }
            // Don't let blocks try to connect to themselves or ones they nest.
            if (_this.runtime_data.dragging_connections.indexOf(candidate) != -1) {
                return false;
            }
            var firstStatementConnection = _this.source_block.get_first_statement_connection();
            // Is it a C-shaped (e.g. repeat) or E-shaped (e.g. if-else) block?
            var isComplexStatement = firstStatementConnection != undefined;
            var isFirstStatementConnection = _this == firstStatementConnection;
            var isNextConnection = _this == _this.source_block.next_connection;
            // Scratch-specific behaviour: can connect to the first statement input of a
            // C-shaped or E-shaped block, or to the next connection of any statement
            // block, but not to the second statement input of an E-shaped block.
            if (isComplexStatement && !isFirstStatementConnection && !isNextConnection) {
                return false;
            }
            // Complex blocks with no previous connection will not be allowed to connect
            // mid-stack.
            var sourceHasPreviousConn = _this.source_block.previous_connection != undefined;
            if (isFirstStatementConnection && sourceHasPreviousConn) {
                return true;
            }
            if (isNextConnection ||
                (isFirstStatementConnection && !sourceHasPreviousConn)) {
                // If the candidate is the first connection in a stack, we can connect.
                if (!candidate.target_connection) {
                    return true;
                }
                var target_block = candidate.targetBlock();
                if (!target_block) {
                    return false;
                }
                // If it is connected a real block, game over.
                if (!target_block.is_insertion_marker()) {
                    return false;
                }
                // If it's connected to an insertion marker but that insertion marker
                // is the first block in a stack, it's still fine.  If that insertion
                // marker is in the middle of a stack, it won't work.
                return !target_block.get_previous_block();
            }
            return false;
        };
        this.source_block = o.source;
        this.type = o.type;
        this.context = o.context;
        var workspace = o.source.get_workspace();
        if (workspace && workspace.connectionDBList) {
            this.db_ = workspace.connectionDBList[o.type];
            this.db_opposite = workspace.connectionDBList[interfaces_1.OPPOSITE_TYPE[o.type]];
            this.hidden_ = !this.db_;
        }
        this.offset_in_block = gl_matrix_1.vec2.create();
    }
    RenderedConnection_1 = RenderedConnection;
    /**
     * Update two connections to target each other.
     * @param first The first connection to update.
     * @param second The second connection to update.
     */
    RenderedConnection.connect_reciprocally = function (first, second) {
        if (!(first && second)) {
            console.error('Cannot connect undefined connections.');
        }
        first.target_connection = second;
        second.target_connection = first;
    };
    RenderedConnection.prototype.get_targe_connection = function () {
        return this.target_connection;
    };
    /**
     * Change the connection's coordinates.
     * @param x New absolute x coordinate.
     * @param y New absolute y coordinate.
     */
    RenderedConnection.prototype.move_to = function (xy) {
        var _a, _b;
        // Remove it from its old location in the database (if already present)
        if (this.in_db) {
            (_a = this.db_) === null || _a === void 0 ? void 0 : _a.remove_connection(this);
        }
        this.x_ = xy[0];
        this.y_ = xy[1];
        // Insert it into its new location in the database.
        if (!this.hidden_) {
            (_b = this.db_) === null || _b === void 0 ? void 0 : _b.add_connection(this);
        }
    };
    RenderedConnection.prototype.move_by = function (dxy) {
        this.move_to(gl_matrix_1.vec2.fromValues(dxy[0] + this.x_, dxy[1] + this.y_));
    };
    RenderedConnection.prototype.highlight = function () {
        var _a;
        var connect_effect = (_a = this.workspace_db.current) === null || _a === void 0 ? void 0 : _a.get_options().connection_effect;
        var highlight_color = connect_effect ? connect_effect.color : '#fff';
        if (this.type == interfaces_1.CONNECTION_TYPE.INPUT_VALUE ||
            this.type === interfaces_1.CONNECTION_TYPE.OUTPUT_VALUE) {
            this.highlight_input(highlight_color);
        }
        else if (this.type === interfaces_1.CONNECTION_TYPE.NEXT_STATEMENT) {
            this.highlight_statement(highlight_color, true);
        }
        else if (this.type === interfaces_1.CONNECTION_TYPE.PREVIOUS_STATEMENT) {
            this.highlight_statement(highlight_color, false);
        }
    };
    RenderedConnection.prototype.highlight_input = function (highlight_color) {
        var xy = this.source_block.get_relative_to_surface_xy();
        var x = this.x_ - xy[0];
        var y = this.y_ - xy[1];
        var d = '';
        if (this.target_connection) {
            var svg_path_el = this.target_connection.source_block.svg_path;
            var svg_path_d = undefined;
            if (svg_path_el != undefined) {
                svg_path_d = svg_path_el.getAttribute('d');
            }
            if (typeof svg_path_d === 'string') {
                d = svg_path_d;
            }
        }
        RenderedConnection_1.highlighted_path = (0, dom_1.create_svg_element)('path', {
            filter: 'url(#blur-1px)',
            'class': 'blocklyHighlightedConnectionCover',
            transform: "translate(" + x + ", " + y + ")",
            fill: highlight_color,
            d: d,
        }, this.source_block.get_svg_root());
    };
    RenderedConnection.prototype.highlight_statement = function (highlight_color, is_next_statement) {
        var sourceBlock_ = this.source_block;
        var offset_x = this.offset_in_block[0];
        var offset_in_block = is_next_statement
            ? this.offset_in_block[1] - 1
            : -3;
        RenderedConnection_1.highlighted_path = (0, dom_1.create_svg_element)('g', {
            class: 'g_blockly_next_statement_underline',
            transform: "translate(0, " + offset_in_block + ")",
        }, this.source_block.get_svg_root());
        (0, dom_1.create_svg_element)('circle', { 'r': '4', 'cx': offset_x, 'cy': '2', fill: highlight_color }, RenderedConnection_1.highlighted_path);
        (0, dom_1.create_svg_element)('circle', { 'r': '8', 'cx': offset_x, 'cy': '2', 'fill': highlight_color, 'fill-opacity': '0.3', filter: 'url(#blur-1px)' }, RenderedConnection_1.highlighted_path);
        var $highlight_light = (0, dom_1.create_svg_element)('rect', { 'x': offset_x, 'y': '0', 'rx': '2', 'width': '0', 'height': '3', 'fill': highlight_color }, RenderedConnection_1.highlighted_path);
        var line_width = this.get_path_top_length(sourceBlock_) - offset_x ||
            sourceBlock_.width - sourceBlock_.block_renderer.padding_r - offset_x;
        if (this.offset_in_block[1] >= 80) {
            line_width = 75;
        }
        if (this.source_block.type === 'controls_if') {
            if (this.offset_in_block[1] >= 100) {
                line_width = 55;
            }
            if (this.offset_in_block[1] >= 140) {
                line_width = 75;
            }
        }
        (0, animejs_1.default)({
            targets: $highlight_light,
            width: {
                value: line_width,
                duration: 200,
                easing: 'easeOutQuad',
            },
        });
    };
    RenderedConnection.prototype.get_path_top_length = function (block) {
        var block_el = block.get_svg_root();
        var block_path = block_el.querySelector('path');
        if (block_path) {
            var d = block_path.getAttribute('d');
            var h_list = d.match(/H\s.*?\s/gi);
            if (h_list == undefined) {
                return 0;
            }
            var h_list_trim = h_list.map(function (item) { return item.match(/\d+(.\d+)?/g); });
            var result = Math.max.apply(Math, h_list_trim);
            return result;
        }
        else {
            return 0;
        }
    };
    RenderedConnection.prototype.unhighlight = function () {
        if (RenderedConnection_1.highlighted_path) {
            (0, dom_1.remove_node)(RenderedConnection_1.highlighted_path);
            delete RenderedConnection_1.highlighted_path;
        }
    };
    RenderedConnection.prototype.set_offset_in_block = function (x, y) {
        this.offset_in_block[0] = x;
        this.offset_in_block[1] = y;
    };
    RenderedConnection.prototype.move_to_offset = function (block_tl) {
        this.move_to(gl_matrix_1.vec2.fromValues(block_tl[0] + this.offset_in_block[0], block_tl[1] + this.offset_in_block[1]));
    };
    RenderedConnection.prototype.tighten = function () {
        if (this.target_connection == undefined) {
            throw new ReferenceError('Target connection not found.');
        }
        // this.x_, this.y_ 当前块连接点的坐标，左下角
        // target_xy: 目标连接块当前的左上角坐标
        var target_xy = this.target_connection.get_xy();
        // target_xy: 连接块与目标连接块的相对距离 rx、ry
        gl_matrix_1.vec2.sub(target_xy, target_xy, [this.x_, this.y_]);
        if (target_xy[0] !== 0 || target_xy[1] !== 0) { // 已经在积木内的积木就不挪了
            var block = this.targetBlock();
            var svg_root = block.get_svg_root();
            // Workspace coordinates.
            var xy = this.utils.get_relative_xy(svg_root); // target_block offset from block
            gl_matrix_1.vec2.sub(xy, xy, target_xy);
            svg_root.setAttribute('transform', "translate(" + xy[0] + ", " + xy[1] + ")");
            block.move_connections(gl_matrix_1.vec2.negate(target_xy, target_xy));
        }
    };
    RenderedConnection.prototype.targetBlock = function () {
        if (this.is_connected() && this.target_connection != undefined) {
            return this.target_connection.get_source_block();
        }
        return undefined;
    };
    RenderedConnection.prototype.closest = function (max_limit, dxy) {
        if (!this.db_opposite)
            return { connection: undefined, radius: max_limit };
        return this.db_opposite.search_for_closest(this, max_limit, dxy);
    };
    RenderedConnection.prototype.connect_to_inferior = function (childConnection) {
        parent_connect_.call(this, childConnection);
        var parentConnection = this;
        var parentBlock = parentConnection.get_source_block();
        var childBlock = childConnection.get_source_block();
        if (parentBlock.rendered) {
            parentBlock.update_disabled();
            parentBlock.update_collapsed();
        }
        if (childBlock.rendered) {
            childBlock.update_disabled();
        }
        if (parentBlock.rendered && childBlock.rendered) {
            if (parentConnection.type == interfaces_1.CONNECTION_TYPE.NEXT_STATEMENT ||
                parentConnection.type == interfaces_1.CONNECTION_TYPE.PREVIOUS_STATEMENT) {
                // Child block may need to square off its corners if it is in a stack.
                // Rendering a child will render its parent.
                childBlock.render();
            }
            else {
                // Child block does not change shape.  Rendering the parent node will
                // move its connected children into position.
                parentBlock.render();
            }
        }
        function parent_connect_(child_connection) {
            var _this = this;
            // 不能直接在此处disable event。
            // 因为【insert】这种操作，除了插入积木的input替换掉shadow（此时需要disable shadow的事件）以外，
            // 还有拖动积木插入某积木stack中间，此时上下积木的断开事件需要记录，否则在撤销时会找不到断开的位置。
            var parent_connection = this; // this: IRenderedConnection
            var parent_block = parent_connection.get_source_block();
            var child_block = child_connection.get_source_block();
            var isSurroundingC = false;
            var previousparentConnection;
            if (parent_connection == parent_block.get_first_statement_connection()) {
                isSurroundingC = true;
            }
            // Disconnect any existing parent on the child connection.
            if (child_connection.is_connected()) {
                // Scratch-specific behaviour:
                // If we're using a c-shaped block to surround a stack, remember where the
                // stack used to be connected.
                if (isSurroundingC) {
                    previousparentConnection = child_connection.target_connection;
                }
                child_connection.disconnect();
            }
            if (parent_connection.is_connected()) {
                // Other connection is already connected to something.
                // Disconnect it and reattach it or bump it as needed.
                var orphanBlock_1 = parent_connection.targetBlock();
                var shadowDom = parent_connection.get_shadow_dom();
                // Temporarily set the shadow DOM to undefined so it does not respawn.
                parent_connection.set_shadow_dom(undefined);
                // Displaced shadow blocks dissolve rather than reattaching or bumping.
                if (orphanBlock_1 && orphanBlock_1.is_shadow()) {
                    this.events.disable();
                    // Save the shadow block so that field values are preserved.
                    // 如果用shadow替换shadow，则取新嵌入的shadow积木来做记录。
                    if (child_block.is_shadow()) {
                        shadowDom = this.xml.block_to_dom(child_block);
                    }
                    else {
                        shadowDom = this.xml.block_to_dom(orphanBlock_1);
                    }
                    orphanBlock_1.dispose();
                    orphanBlock_1 = undefined;
                    this.events.enable();
                }
                else if (parent_connection.type == interfaces_1.CONNECTION_TYPE.NEXT_STATEMENT) {
                    // Statement connections.
                    // Statement blocks may be inserted into the middle of a stack.
                    // Split the stack.
                    if (orphanBlock_1 && !orphanBlock_1.previous_connection) {
                        throw new Error('Orphan block does not have a previous connection.');
                    }
                    // Attempt to reattach the orphan at the bottom of the newly inserted
                    // block.  Since this block may be a stack, walk down to the end.
                    var new_block = child_block;
                    while (new_block.next_connection) {
                        var nextBlock = new_block.get_next_block();
                        if (nextBlock && !nextBlock.is_shadow()) {
                            new_block = nextBlock;
                        }
                        else {
                            if (orphanBlock_1 &&
                                orphanBlock_1.previous_connection &&
                                orphanBlock_1.previous_connection.check_type(new_block.next_connection)) {
                                new_block.next_connection.connect(orphanBlock_1.previous_connection);
                                orphanBlock_1 = undefined;
                            }
                            break;
                        }
                    }
                }
                if (orphanBlock_1) {
                    // Unable to reattach orphan.
                    parent_connection.disconnect();
                    if (this.events.is_record_undo()) {
                        // Bump it off to the side after a moment.
                        var group_1 = this.events.get_group();
                        window.setTimeout(function () {
                            if (_this.events.get_group() && _this.events.get_group() !== group_1) {
                                console.error("current group " + _this.events.get_group() + ", blocking scheduled bump");
                                return;
                            }
                            // Verify orphan hasn't been deleted or reconnected (user on meth).
                            if (orphanBlock_1 && orphanBlock_1.get_workspace() && !orphanBlock_1.get_parent()) {
                                // 与move事件使用同一个分组
                                _this.events.set_group(group_1);
                                if (orphanBlock_1.output_connection) {
                                    orphanBlock_1.output_connection.bump_away_from(parent_connection);
                                }
                                else if (orphanBlock_1.previous_connection) {
                                    orphanBlock_1.previous_connection.bump_away_from(parent_connection);
                                }
                                _this.events.set_group(false);
                            }
                        }, this.theme.blink_params.BUMP_DELAY);
                    }
                }
                // Restore the shadow DOM.
                if (shadowDom) {
                    parent_connection.set_shadow_dom(shadowDom);
                }
            }
            if (isSurroundingC && previousparentConnection) {
                if (parent_block.previous_connection) {
                    previousparentConnection.connect(parent_block.previous_connection);
                }
            }
            // save current visibility for undo
            child_block.visibility_for_undo = child_block.get_visibility();
            // （已解决）增加这个移动事件会导致积木拼接上之后撤销位置回不到刚开始拖动的那个点
            // 因为在block_dragger中，end_block_drag方法里，aplly_connections发生在fire_move_event之前
            // 于是在fire_move_event时，block已经有了parent，recore_new不会返回新的坐标，无法正确记录位置变化
            var event;
            if (this.events.is_enabled()) {
                event = this.move_event_factory({
                    block: child_block,
                });
            }
            // Establish the connections.
            RenderedConnection_1.connect_reciprocally(parent_connection, child_connection);
            // Demote the inferior block so that one is a child of the superior one.
            child_block.set_parent(parent_block);
            // 必须在上面拼接完成后再 fire 事件，会记录一个 new_input_name
            if (event) {
                event.record_new();
                this.events.fire(event);
            }
        }
    };
    /**
     * Disconnect two blocks that are connected by this connection.
     * @param parentBlock The superior block.
     * @param childBlock The inferior block.
     */
    RenderedConnection.prototype.disconnect_internal = function (parentBlock, childBlock) {
        var event;
        if (this.events.is_enabled()) {
            event = this.move_event_factory({
                block: childBlock,
            });
        }
        var otherConnection = this.target_connection;
        if (!otherConnection) {
            return;
        }
        otherConnection.target_connection = undefined;
        this.target_connection = undefined;
        childBlock.set_parent(undefined);
        if (event) {
            event.record_new();
            this.events.fire(event);
        }
        // 如果当前进行的是撤销操作，恢复积木拼接前的可见性
        // 如果是手动断开连接，不需要恢复
        if (childBlock.visibility_for_undo && this.events.is_undoing()) {
            childBlock.set_chunk_visibility(childBlock.visibility_for_undo);
            childBlock.update_chunk_visibility();
            childBlock.visibility_for_undo = undefined;
        }
        // Rerender the parent so that it may reflow.
        if (parentBlock.is_rendered()) {
            parentBlock.render();
        }
        if (childBlock.is_rendered()) {
            childBlock.update_disabled();
            childBlock.render();
        }
    };
    RenderedConnection.prototype.respawn_shadow = function () {
        var _a;
        var parent_block = this.get_source_block();
        // Respawn the shadow block if there is one.
        var shadow = this.get_shadow_dom();
        if (!parent_block.get_workspace() || this.is_connected() || !shadow) {
            return;
        }
        this.events.disable();
        var type = shadow.getAttribute('type');
        var block_shadow = type === 'color_picker' ? this.xml.dom_to_block(shadow, parent_block.get_workspace()) : this.xml.dom_to_block_headless(shadow, parent_block.get_workspace());
        // 积木id的查重的范围是workspace + workspace相关的flyout。
        // 在dom_to_block_headless过程中，shadow的id可能由于遇到重复id而发生改变。
        // 此处需要更新shadow dom的id。
        shadow.setAttribute('id', block_shadow.id);
        this.set_shadow_dom(shadow);
        if (block_shadow.output_connection) {
            this.connect(block_shadow.output_connection);
        }
        else if (block_shadow.previous_connection) {
            this.connect(block_shadow.previous_connection);
        }
        else {
            throw new Error('Child block does not have output or previous statement.');
        }
        // 业务中存在一些【联动变化】积木，其中，某些 shadow 上 field dropdown 值的可选范围依赖于shadow父积木的其他field的值。
        // 比如 【设置 [databaseA] (x) 的值为 () 】，其中 [databaseA] 为dropdown，(x) 为shadow积木，其中携带一个dropdown。
        // (x) 表示数据库中的键，其选项范围依赖于前面关于数据库的选项。
        // 这一类 field dropdown，在get_options 时需要读取 source_block 及其 parent_block。
        // 目前的shadow重建顺序 创建积木及设置field值 -> 连接，此时选项内容会丢失。
        // 因此在完成连接后，再处理一次field的值。
        this.xml.parse_fields(shadow, block_shadow);
        if (parent_block.rendered) {
            block_shadow.init_svg();
            block_shadow.render();
        }
        // 如果父积木是折叠状态，隐藏shadow积木和shadow积木的连接
        if (this.type === interfaces_1.CONNECTION_TYPE.INPUT_VALUE && this.source_block.is_collapsed()) {
            (_a = this.target_connection) === null || _a === void 0 ? void 0 : _a.hide_all();
            block_shadow.set_visible_as_child(false);
        }
        this.events.enable();
    };
    RenderedConnection.prototype.neighbours_ = function (maxLimit) {
        var _a;
        return ((_a = this.db_opposite) === null || _a === void 0 ? void 0 : _a.get_neighbours(this, maxLimit)) || [];
    };
    RenderedConnection.prototype.bump_away_from = function (staticConnection) {
        // 不可连接的积木不触发bump。
        if (!this.source_block.is_stack_connectable() ||
            !staticConnection.get_source_block().is_stack_connectable())
            return;
        var workspace = this.source_block.get_workspace();
        if (workspace && workspace.is_dragging()) {
            // Don't move blocks around while the user is doing the same.
            return;
        }
        // Move the root block.
        var rootBlock = this.source_block.get_root_block();
        if (rootBlock.is_in_flyout) {
            // Don't move blocks around in a flyout.
            return;
        }
        var reverse = false;
        if (!rootBlock.is_movable()) {
            // Can't bump an uneditable block away.
            // Check to see if the other block is movable.
            rootBlock = staticConnection.get_source_block().get_root_block();
            if (!rootBlock.is_movable()) {
                return;
            }
            // Swap the connections and move the 'static' connection instead.
            staticConnection = this;
            reverse = true;
        }
        // Raise it to the top for extra visibility.
        var selected = this.runtime_data.selected == rootBlock;
        selected || rootBlock.add_select();
        var dx = (staticConnection.x_ + this.theme.blink_params.SNAP_RADIUS) - this.x_;
        var dy = (staticConnection.y_ + this.theme.blink_params.SNAP_RADIUS) - this.y_;
        if (reverse) {
            // When reversing a bump due to an uneditable block, bump up.
            dy = -dy;
        }
        if (rootBlock.RTL) {
            dx = -dx;
        }
        rootBlock.move_by(gl_matrix_1.vec2.fromValues(dx, dy));
        selected || rootBlock.remove_select();
    };
    RenderedConnection.prototype.unhide_all = function () {
        this.set_hidden(false);
        // All blocks that need unhiding must be unhidden before any rendering takes
        // place, since rendering requires knowing the dimensions of lower blocks.
        // Also, since rendering a block renders all its parents, we only need to
        // render the leaf nodes.
        var renderList = [];
        if (this.type != interfaces_1.CONNECTION_TYPE.INPUT_VALUE &&
            this.type != interfaces_1.CONNECTION_TYPE.NEXT_STATEMENT) {
            // Only spider down.
            return renderList;
        }
        var block = this.targetBlock();
        if (block) {
            var connections = void 0;
            if (block.is_collapsed()) {
                // This block should only be partially revealed since it is collapsed.
                connections = [];
                block.output_connection && connections.push(block.output_connection);
                block.next_connection && connections.push(block.next_connection);
                block.previous_connection && connections.push(block.previous_connection);
            }
            else {
                // Show all connections of this block.
                connections = block.get_connections(true);
            }
            for (var i = 0; i < connections.length; i++) {
                renderList.push.apply(renderList, connections[i].unhide_all());
            }
            if (!renderList.length) {
                // Leaf block.
                renderList[0] = block;
            }
        }
        return renderList;
    };
    RenderedConnection.prototype.hide_all = function () {
        var _a;
        this.set_hidden(true);
        if (this.target_connection) {
            var target_block = this.targetBlock();
            if (target_block == undefined) {
                throw new Error('target_block should not be undefined');
            }
            var blocks = target_block.get_descendants();
            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                // Hide all connections of all children.
                var connections = block.get_connections(true);
                for (var j = 0; j < connections.length; j++) {
                    connections[j].set_hidden(true);
                }
                // Close all bubbles of all children.
                // 不需要这样静默收起积木注释。
                (_a = block.warning) === null || _a === void 0 ? void 0 : _a.set_expanded(false);
            }
        }
    };
    RenderedConnection.prototype.is_connection_allowed = function (candidate, maxRadius) {
        if (!candidate.source_block.is_stack_connectable()) {
            return false;
        }
        if (this.distance_from(candidate) > maxRadius) {
            return false;
        }
        return is_connection_allowed.call(this, candidate);
        function is_connection_allowed(candidate_) {
            // Don't consider insertion markers.
            if (candidate_.get_source_block().is_insertion_marker()) {
                return false;
            }
            // Don't consider no rendered blocks
            if (!candidate_.get_source_block().is_rendered()) {
                return false;
            }
            // Don't consider blocks collapsed with its children
            if (constants_1.NEED_COLLAPSE_CHILDREN_BLOCKS.includes(candidate_.get_source_block().type)
                && candidate_.get_source_block().is_collapsed()) {
                return false;
            }
            // Dont consider blocks under a collapsed parent
            if (candidate_.get_source_block().get_collapsed_surround_parent()) {
                return false;
            }
            // Don't allow to connect procedures_2_defnoreturn_block with procedures_2_stable_parameter
            // TODO 之后对函数积木做修改，使用 param_block 插件，就可以去掉这一段奇葩判定了
            if (candidate_.source_block.type == 'procedures_2_defnoreturn' &&
                candidate_.target_connection &&
                candidate_.target_connection.source_block.type == 'procedures_2_stable_parameter') {
                return false;
            }
            // Don't allow to disconnect shadow param block from its parent
            if (candidate_.target_connection &&
                candidate_.target_connection.source_block.is_shadow() &&
                candidate_.target_connection.source_block.element_type === 'param') {
                return false;
            }
            // Type checking.
            var canConnect = this.can_connect_with_reason(candidate_);
            if (canConnect != interfaces_1.CONNECTABLE_TYPE.CAN_CONNECT) {
                return false;
            }
            // const firstStatementConnection = this.source_block.get_first_statement_connection();
            switch (candidate_.type) {
                case interfaces_1.CONNECTION_TYPE.PREVIOUS_STATEMENT:
                    return this.can_connect_to_previous(candidate_);
                case interfaces_1.CONNECTION_TYPE.OUTPUT_VALUE: {
                    // Can't drag an input to an output--you have to move the inferior block.
                    return false;
                }
                case interfaces_1.CONNECTION_TYPE.INPUT_VALUE: {
                    // Offering to connect the left (male) of a value block to an already
                    // connected value pair is ok, we'll splice it in.
                    // However, don't offer to splice into an unmovable block.
                    var target_block = candidate_.targetBlock();
                    if (target_block && candidate_.target_connection &&
                        !target_block.is_movable() &&
                        !target_block.is_shadow()) {
                        return false;
                    }
                    break;
                }
                case interfaces_1.CONNECTION_TYPE.NEXT_STATEMENT: {
                    // Scratch-specific behaviour:
                    // If this is a c-block,
                    // we can't connect this block's previous connection unless we're connecting
                    // to the end of the last block on a stack or there's already a block connected inside the c.
                    // UNKNOW: check if need
                    // if (firstStatementConnection &&
                    //     this == this.sourceBlock_.previousConnection &&
                    //     candidate_.is_connected_to_non_insertion_marker() &&
                    //     !firstStatementConnection.targetConnection) {
                    //   return false;
                    // }
                    // Don't let a block with no next connection bump other blocks out of the
                    // stack.  But covering up a shadow block or stack of shadow blocks is
                    // fine.  Similarly, replacing a terminal statement with another terminal
                    // statement is allowed.
                    var target_block = candidate_.targetBlock();
                    if (target_block && candidate_.is_connected_to_non_insertion_marker() &&
                        !this.source_block.next_connection &&
                        !target_block.is_shadow() &&
                        target_block.next_connection) {
                        return false;
                    }
                    break;
                }
                default:
                    throw new Error('Unknown connection type in is_connection_allowed');
            }
            // Don't let blocks try to connect to themselves or ones they nest.
            if (this.runtime_data.dragging_connections.indexOf(candidate_) != -1) {
                return false;
            }
            return true;
        }
    };
    RenderedConnection.prototype.distance_from = function (otherConnection) {
        var xDiff = this.x_ - otherConnection.x_;
        var yDiff = this.y_ - otherConnection.y_;
        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    };
    RenderedConnection.prototype.get_shadow_dom = function () {
        if (!this.shadow_dom) {
            return undefined;
        }
        if (typeof this.shadow_dom === 'string') {
            // 如果当前保存的shadow为字符串，则先生成对应Element再返回
            this.shadow_dom = this.utils.string_to_dom(this.shadow_dom);
        }
        return this.shadow_dom;
    };
    RenderedConnection.prototype.get_shadow_string = function () {
        if (!this.shadow_dom || typeof this.shadow_dom === 'string') {
            return this.shadow_dom;
        }
        return this.xml.dom_to_text(this.shadow_dom);
    };
    RenderedConnection.prototype.set_shadow_dom = function (shadow) {
        this.shadow_dom = shadow;
    };
    RenderedConnection.prototype.set_shadow_from_string = function (shadow) {
        this.shadow_dom = shadow;
    };
    RenderedConnection.prototype.connect = function (other_connection, opt_no_log) {
        if (opt_no_log === void 0) { opt_no_log = false; }
        if (this.target_connection == other_connection) {
            // Already connected together.  NOP.
            return false;
        }
        // Codemao: add a is_connectable flag
        var is_connectable = true;
        // Check connection
        // Codemao: try/catch
        try {
            this.check_connection(other_connection);
        }
        catch (e) {
            if (!opt_no_log) {
                console.error(e);
            }
            is_connectable = false;
        }
        if (!is_connectable)
            return false;
        // Determine which block is superior (higher in the source stack).
        var superior = this.is_superior() ? this : other_connection;
        var inferior = this.is_superior() ? other_connection : this;
        superior.connect_to_inferior(inferior);
        inferior.source_block.update_layer_colour();
        return true;
    };
    /**
     * Function to be called when this connection's compatible types have changed.
     */
    RenderedConnection.prototype.on_check_changed = function () {
        // The new value type may not be compatible with the existing connection.
        if (this.is_connected() && this.target_connection && !this.check_type(this.target_connection)) {
            var child = this.is_superior() ? this.targetBlock() : this.source_block;
            if (child == undefined) {
                throw new ReferenceError('Connection source block not found.');
            }
            child.unplug();
            // Codemao: Bump away.
            this.source_block.bump_neighbours();
        }
    };
    RenderedConnection.prototype.get_output_shape = function () {
        if (!this.check_) {
            return interfaces_1.OutputShape.ROUND;
        }
        if (this.check_.length == 1 && this.check_[0] == 'Boolean') {
            return interfaces_1.OutputShape.HEXAGONAL;
        }
        return interfaces_1.OutputShape.ROUND;
    };
    RenderedConnection.prototype.get_xy = function () {
        return gl_matrix_1.vec2.fromValues(this.x_, this.y_);
    };
    RenderedConnection.prototype.set_hidden = function (hidden) {
        this.hidden_ = hidden;
        if (this.db_) {
            if (hidden && this.in_db) {
                this.db_.remove_connection(this);
            }
            else if (!hidden && !this.in_db) {
                this.db_.add_connection(this);
            }
        }
    };
    RenderedConnection.prototype.get_source_block = function () {
        return this.source_block;
    };
    RenderedConnection.prototype.dispose = function () {
        if (this.is_connected()) {
            throw new Error('Disconnect connection before disposing of it.');
        }
        if (this.in_db && this.db_) {
            this.db_.remove_connection(this);
        }
        delete this.db_;
        delete this.db_opposite;
    };
    RenderedConnection.prototype.is_connected_to_non_insertion_marker = function () {
        var target_block = this.targetBlock();
        if (!target_block) {
            return false;
        }
        return !target_block.is_insertion_marker();
    };
    RenderedConnection.prototype.disconnect = function () {
        var other_connection = this.target_connection;
        if (!other_connection) {
            return;
        }
        if (other_connection.target_connection !== this) {
            console.error('Target connection not connected to source connection.');
        }
        var parent_block;
        var child_block;
        var parent_connection;
        if (this.is_superior()) {
            // Superior block.
            parent_block = this.source_block;
            child_block = other_connection.get_source_block();
            parent_connection = this;
        }
        else {
            // Inferior block.
            parent_block = other_connection.get_source_block();
            child_block = this.source_block;
            parent_connection = other_connection;
        }
        this.disconnect_internal(parent_block, child_block);
        parent_connection.respawn_shadow();
        child_block.update_layer_colour();
    };
    RenderedConnection.prototype.set_check = function (check) {
        if (check) {
            this.check_ = (0, base_1.is_array)(check) ? check : [check];
            this.on_check_changed();
        }
        else {
            this.check_ = undefined;
        }
        return this;
    };
    RenderedConnection.prototype.is_connected = function () {
        return !!this.target_connection;
    };
    RenderedConnection.prototype.check_type = function (otherConnection) {
        if (!this.check_ || !otherConnection.check_) {
            // One or both sides are promiscuous enough that anything will fit.
            return true;
        }
        // Find any intersection in the check lists.
        for (var i = 0; i < this.check_.length; i++) {
            if (otherConnection.check_.indexOf(this.check_[i]) != -1) {
                return true;
            }
        }
        // No intersection.
        return false;
    };
    /**
     * Checks whether the current connection and target connection are compatible
     * and throws an exception if they are not.
     * @param target The connection to check compatibility with.
     */
    RenderedConnection.prototype.check_connection = function (target) {
        switch (this.can_connect_with_reason(target)) {
            case interfaces_1.CONNECTABLE_TYPE.CAN_CONNECT:
                break;
            case interfaces_1.CONNECTABLE_TYPE.REASON_SELF_CONNECTION:
                throw new Error('Attempted to connect a block to itself.');
            case interfaces_1.CONNECTABLE_TYPE.REASON_DIFFERENT_WORKSPACES:
                // Usually this means one block has been deleted.
                throw new Error('Blocks not on same workspace.');
            case interfaces_1.CONNECTABLE_TYPE.REASON_WRONG_TYPE:
                throw new Error('Attempt to connect incompatible types.');
            case interfaces_1.CONNECTABLE_TYPE.REASON_TARGET_NULL:
                throw new Error('Target connection is undefined.');
            case interfaces_1.CONNECTABLE_TYPE.REASON_CHECKS_FAILED:
                var msg = 'Connection checks failed. ';
                msg += this + " expected " + this.check_ + ", found " + target.check_;
                throw msg;
            case interfaces_1.CONNECTABLE_TYPE.REASON_SHADOW_PARENT:
                throw new Error('Connecting non-shadow to shadow block.');
            default:
                throw new Error('Unknown connection failure: this should never happen!');
        }
    };
    RenderedConnection.prototype.can_connect_with_reason = function (target) {
        if (!target) {
            return interfaces_1.CONNECTABLE_TYPE.REASON_TARGET_NULL;
        }
        var blockA;
        var blockB;
        if (this.is_superior()) {
            blockA = this.source_block;
            blockB = target.get_source_block();
        }
        else {
            blockB = this.source_block;
            blockA = target.get_source_block();
        }
        if (blockA && blockA === blockB) {
            return interfaces_1.CONNECTABLE_TYPE.REASON_SELF_CONNECTION;
        }
        if (target.type !== interfaces_1.OPPOSITE_TYPE[this.type]) {
            return interfaces_1.CONNECTABLE_TYPE.REASON_WRONG_TYPE;
        }
        if (blockA && blockB && blockA.get_workspace() !== blockB.get_workspace()) {
            return interfaces_1.CONNECTABLE_TYPE.REASON_DIFFERENT_WORKSPACES;
        }
        if (!this.check_type(target)) {
            return interfaces_1.CONNECTABLE_TYPE.REASON_CHECKS_FAILED;
        }
        if (blockA.is_shadow() && !blockB.is_shadow() && blockA.element_type !== 'param_color') {
            return interfaces_1.CONNECTABLE_TYPE.REASON_SHADOW_PARENT;
        }
        return interfaces_1.CONNECTABLE_TYPE.CAN_CONNECT;
    };
    RenderedConnection.prototype.is_superior = function () {
        return this.type == interfaces_1.CONNECTION_TYPE.INPUT_VALUE ||
            this.type == interfaces_1.CONNECTION_TYPE.NEXT_STATEMENT;
    };
    RenderedConnection.prototype.remove_shadow = function () {
        if (!this.is_superior()) {
            return;
        }
        // 清除shadow记录
        this.set_shadow_dom(undefined);
        // 如果有连接到shadow，则断开连接并删除该shadow。
        var child_block = this.targetBlock();
        if (!child_block || !child_block.is_shadow()) {
            return;
        }
        this.events.disable();
        this.disconnect_internal(this.source_block, child_block);
        child_block.dispose();
        this.events.enable();
    };
    var RenderedConnection_1;
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.runtime_data)
    ], RenderedConnection.prototype, "runtime_data", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], RenderedConnection.prototype, "utils", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], RenderedConnection.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.xml)
    ], RenderedConnection.prototype, "xml", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.theme)
    ], RenderedConnection.prototype, "theme", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.workspace_db)
    ], RenderedConnection.prototype, "workspace_db", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.MoveEvent)
    ], RenderedConnection.prototype, "move_event_factory", void 0);
    RenderedConnection = RenderedConnection_1 = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], RenderedConnection);
    return RenderedConnection;
}());
exports.RenderedConnection = RenderedConnection;
