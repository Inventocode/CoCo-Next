"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceSvg = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("../di");
var interfaces_1 = require("../interfaces");
var block_1 = require("../utils/block");
var maths_1 = require("../utils/maths");
var dom_1 = require("../utils/dom");
var array_1 = require("../utils/array");
var base_1 = require("../utils/base");
var is_1 = require("../utils/is");
var WorkspaceSvg = /** @class */ (function () {
    /**
     * Creates an instance of WorkspaceSvg.
     *
     * @param options Dictionary of options.
     * @param [opt_block_drag_surface] Drag surface for
     * blocks.
     * @param [opt_ws_drag_surface] Drag surface for
     * the workspace.
     */
    function WorkspaceSvg(options, opt_block_drag_surface, opt_ws_drag_surface, opt_injection_div) {
        /**
         * List of all connectionDBs.
         */
        this.connectionDBList = [];
        this.degrade_translate = undefined;
        /**
         * Maximum number of undo events in stack. `0` turns off undo, `Infinity` sets it to unlimited.
         */
        this.MAX_UNDO = 1024;
        /**
         * Angle away from the horizontal to sweep for blocks.  Order of execution is
         * generally top to bottom, but a small angle changes the scan to give a bit of
         * a left to right bias (reversed in RTL).  Units are in degrees.
         * See: http://tvtropes.org/pmwiki/pmwiki.php/Main/DiagonalBilling.
         */
        this.SCAN_ANGLE = 3;
        /**
         * Array of all event listeners.
         */
        this.listeners_ = [];
        this.blockDB_ = new Map();
        this.workspace_comment_db = new Map();
        /**
         * The undo stack of the workspace.
         */
        this.undo_stack_ = [];
        /**
         * The redo stack of the workspace.
         */
        this.redo_stack_ = [];
        this.top_blocks_ = [];
        /**
         * 所有全局注释。
         */
        this.top_comments = [];
        /**
         * Returns `true` if the workspace is currently in the process of a bulk clear.
         */
        this.is_clearing = false;
        /**
         * Whether the drag surface is actively in use. When true, calls to
         * translate will translate the drag surface instead of the translating the
         * workspace directly.
         * This is set to true in setup_drag_surface and to false in reset_drag_surface.
         */
        this.is_drag_surface_active_ = false;
        /**
         * parent svg of workspace in cache.
         */
        this.cached_parent_svg_ = undefined;
        /**
         * The flyout of this workspace. Not of toolbox.
         */
        this.flyout_ = undefined;
        this.toolbox_ = undefined;
        /**
         * Inverted screen CTM, for use in mouse_to_svg.
         * Should **NOT** be used directly, since it is updated when get.
         * Use get_inverse_screen_ctm to get fresh screen ctm instead.
         */
        this.inverse_screen_CTM_ = undefined;
        this.inverse_screen_CTM_dirty_ = true;
        /**
         * Main blocks UI area, i.e. the injection div area.
         */
        this.blocks_area_ = undefined;
        /**
         * 在常驻模式下，workspace的位置会受到flyout的挤压。
         * 为了避免在动画过程中记录尺寸造成的错误，同时避免多次反复调用 getBoundingClientRect，
         * 与 screen CTM 类似，将该区域的记录推迟到使用时。
         * 不应该直接使用该属性，而是使用 get_workspace_area 方法获取最新的workspace范围。
         */
        this.workspace_area_ = undefined;
        this.workspace_area_dirty_ = true;
        /**
         * 在常驻模式下，flyout展开时，也会作为积木的可删除区域。
         * 为了避免在动画过程中记录尺寸造成的错误，同时避免多次反复调用 getBoundingClientRect，
         * 与 screen CTM 类似，将该区域的记录推迟到使用时。
         * 不应该直接使用该属性，而是使用 get_delete_area_flyout 方法获取最新的flyout范围。
         */
        this.delete_area_flyout = undefined;
        this.is_flyout_rect_dirty_ = true;
        /**
         * TODO Use Map?
         * Map from function names to callbacks, for deciding what to do
         * when a custom toolbox category is opened.
         */
        this.toolbox_category_callbacks_ = {};
        /**
         * Last known position of the page scroll.
         * This is used to determine whether we have recalculated screen coordinate
         * stuff since the page scrolled.
         */
        this.last_recorded_page_scroll_ = undefined;
        /**
         * A wrapper function called when a resize event occurs.
         * You can pass the result to `unbind_event`.
         */
        this.resize_handler_wrapper_ = undefined;
        this.rendered = true;
        this.is_flyout = false;
        /**
         * Whether this workspace has resizes enabled.
         * Disable during batch operations for a performance improvement.
         */
        this.resizes_enabled_ = true;
        /**
         * Whether this workspace has toolbox/flyout refreshes enabled.
         * Disable during batch operations for a performance improvement.
         */
        this.toolbox_refresh_enabled_ = true;
        this.scroll_xy = gl_matrix_1.vec2.create();
        this.content_offset_by_view = gl_matrix_1.vec2.create();
        /**
         * Distance from mouse to object being dragged.
         */
        this.drag_delta_xy_ = gl_matrix_1.vec2.create();
        /**
         * Current scale.
         */
        this.scale = 1;
        this.current_gesture_ = undefined;
        /**
         * This workspace's drag surface, if it exists.
         */
        this.workspace_drag_surface_ = undefined;
        /**
         * The first parent div with 'injectionDiv' in the name, or undefined if not set.
         * Access this with get_injection_div.
        */
        this.injection_div_ = undefined;
        /**
         * Map from function names to callbacks, for deciding what to do when a button
         * is clicked.
         */
        this.flyout_button_callbacks_ = {};
        /**
         * Map from custom flyout button types to callbacks for creating svg_group
         */
        this.custom_flyout_buttons = new Map();
        this.svg_group = undefined;
        this.svg_bubble_canvas_ = undefined;
        /**
         * Use for flyout's target workspace.
         */
        this.target_workspace = undefined;
        this.event_dict = new Map();
        /**
         * 记录所有自定义的change类型事件回调。
         */
        this.custom_change_events_ = new Map();
        this.pre_paste = [];
        this.pre_paste_extend = [];
        this.gestures_enabled = true;
        this.offset = gl_matrix_1.vec2.fromValues(0, 0);
        this.is_hotkey_enable = true;
        this.id = options.id || (0, maths_1.gen_uid)();
        this.workspace_db.add(this);
        this.options = options;
        this.RTL = !!this.options.RTL;
        this.toolbox_position = this.options.toolboxPosition;
        this.is_flyout = options.in_flyout;
        this.top_blocks_ = [];
        this.top_comments = [];
        this.listeners_ = [];
        this.undo_stack_ = [];
        this.redo_stack_ = [];
        this.get_metrics = options.get_metrics || this.get_metrics;
        this.set_metrics = options.set_metrics || this.set_metrics;
        this.init_connection_db();
        if (opt_block_drag_surface) {
            this.block_drag_surface_ = opt_block_drag_surface;
        }
        if (opt_ws_drag_surface) {
            this.workspace_drag_surface_ = opt_ws_drag_surface;
        }
        if (opt_injection_div) {
            this.injection_div_ = opt_injection_div;
        }
        this.audio_manager_ = this.workspace_audio_factory(options.parentWorkspace);
        /**
         * This workspace's grid object or undefined.
         */
        if (!options.in_flyout && options.svg_defs && options.svg_rnd) {
            this.grid_ = this.grid_factory(options);
        }
    }
    WorkspaceSvg_1 = WorkspaceSvg;
    WorkspaceSvg.prototype.get_element_from_db = function (id) {
        return this.blockDB_.get(id) || this.workspace_comment_db.get(id);
    };
    WorkspaceSvg.prototype.get_options = function () {
        return this.options;
    };
    /**
     * Get the undo stack of the workspace.
     */
    WorkspaceSvg.prototype.get_undo_stack = function () {
        return this.undo_stack_;
    };
    /**
     * Set the undo stack of the workspace.
     */
    WorkspaceSvg.prototype.set_undo_stack = function (stack) {
        this.undo_stack_ = stack;
    };
    /**
     * Get The redo stack of the workspace.
     */
    WorkspaceSvg.prototype.get_redo_stack = function () {
        return this.redo_stack_;
    };
    /**
     * Set The redo stack of the workspace.
     */
    WorkspaceSvg.prototype.set_redo_stack = function (stack) {
        this.redo_stack_ = stack;
    };
    WorkspaceSvg.prototype.get_toolbox = function () {
        return this.toolbox_;
    };
    WorkspaceSvg.prototype.get_flyout = function () {
        if (this.flyout_) {
            return this.flyout_;
        }
        if (this.toolbox_) {
            return this.toolbox_.flyout;
        }
        return undefined;
    };
    /**
     * Workspace area may change due to expanding flyout.
     * Get the newest workspace area.
     */
    WorkspaceSvg.prototype.get_workspace_area = function () {
        var parent_svg = this.get_parent_svg();
        if (this.workspace_area_dirty_ && parent_svg != undefined) {
            this.workspace_area_ = parent_svg.getBoundingClientRect();
            this.workspace_area_dirty_ = false;
        }
        return this.workspace_area_;
    };
    /**
     * Block delete area may change due to expanding flyout if flyout is also
     * a delete area.
     * Get the newest delete area.
     */
    WorkspaceSvg.prototype.get_delete_area_flyout = function () {
        if (!this.is_flyout_rect_dirty_) {
            return this.delete_area_flyout;
        }
        var flyout = this.flyout_ || (this.toolbox_ && this.toolbox_.flyout);
        if (flyout && flyout.is_visible() && this.get_options().delete_area !== 'none') {
            this.delete_area_flyout = flyout.get_client_rect();
        }
        else {
            this.delete_area_flyout = undefined;
        }
        this.is_flyout_rect_dirty_ = false;
        return this.delete_area_flyout;
    };
    /**
     * Get the workspace's surface for dragging blocks.
     */
    WorkspaceSvg.prototype.get_block_drag_surface = function () {
        return this.block_drag_surface_;
    };
    WorkspaceSvg.prototype.is_resizes_enabled = function () {
        return this.resizes_enabled_;
    };
    WorkspaceSvg.prototype.get_scale = function () {
        return this.scale;
    };
    WorkspaceSvg.prototype.get_delete_area_toolbox = function () {
        return this.delete_area_toolbox_;
    };
    WorkspaceSvg.prototype.get_scrollbar = function () {
        return this._scrollbar;
    };
    WorkspaceSvg.prototype.set_scrollbar = function (scrollbar) {
        this._scrollbar = scrollbar;
    };
    WorkspaceSvg.prototype.get_workspace_drag_surface = function () {
        return this.workspace_drag_surface_;
    };
    Object.defineProperty(WorkspaceSvg.prototype, "use_workspace_drag_surface_", {
        /**
         * Whether to move workspace to the drag surface when it is dragged.
         * True if it should move, false if it should be translated directly.
         */
        get: function () {
            if (this.degrade_translate) {
                return this.blockDB_.size < this.degrade_translate;
            }
            return !!this.workspace_drag_surface_;
        },
        enumerable: false,
        configurable: true
    });
    WorkspaceSvg.prototype.get_target_workspace = function () {
        return this.target_workspace;
    };
    WorkspaceSvg.prototype.set_target_workspace = function (workspace) {
        this.target_workspace = workspace;
    };
    /**
     * Initialize a set of connection DBs for a specified workspace.
     * @param workspace The workspace this DB is for.
     */
    WorkspaceSvg.prototype.init_connection_db = function () {
        // Create four databases, one for each connection type.
        this.connectionDBList[interfaces_1.CONNECTION_TYPE.INPUT_VALUE] = this.connection_db_factory();
        this.connectionDBList[interfaces_1.CONNECTION_TYPE.OUTPUT_VALUE] = this.connection_db_factory();
        this.connectionDBList[interfaces_1.CONNECTION_TYPE.NEXT_STATEMENT] = this.connection_db_factory();
        this.connectionDBList[interfaces_1.CONNECTION_TYPE.PREVIOUS_STATEMENT] = this.connection_db_factory();
    };
    WorkspaceSvg.prototype.remaining_capacity = function () {
        if (isNaN(this.options.maxBlocks)) {
            return Infinity;
        }
        return this.options.maxBlocks - this.get_all_blocks().length;
    };
    WorkspaceSvg.prototype.undo = function (redo) {
        var input_stack = redo ? this.redo_stack_ : this.undo_stack_;
        var output_stack = redo ? this.undo_stack_ : this.redo_stack_;
        var input_event = input_stack.pop();
        if (!input_event) {
            return;
        }
        var events = [input_event];
        var group = input_event._group;
        // Do another undo/redo if the next one is of the same group.
        while (input_stack.length && group && group == input_stack[input_stack.length - 1]._group) {
            var event_1 = input_stack.pop();
            if (event_1) {
                events.push(event_1);
            }
        }
        // Push these popped events on the opposite stack.
        for (var i = 0; i < events.length; i++) {
            var event_ = events[i];
            output_stack.push(event_);
        }
        var filtered_events = this.events.filter(events, !!redo);
        this.events.set_record_undo(false);
        this.events.set_undoing(true);
        this.set_resizes_enabled(false);
        try {
            if (group) {
                this.events.set_group(group);
            }
            for (var i = 0; i < filtered_events.length; i++) {
                var event_2 = filtered_events[i];
                event_2.run && event_2.run(!!redo);
            }
            if (group) {
                this.events.set_group(false);
            }
        }
        catch (e) {
            console.error(e);
        }
        finally {
            this.set_resizes_enabled(true);
            this.events.set_undoing(false);
            this.events.set_record_undo(true);
        }
    };
    WorkspaceSvg.prototype.clear_undo = function () {
        this.undo_stack_.length = 0;
        this.redo_stack_.length = 0;
        // Stop any events already in the firing queue from being undoable.
        this.events.clear_pending_undo();
        // FIXME 应该删了就行
        // FieldTextDropdown.last_input_value = '';
    };
    WorkspaceSvg.prototype.get_all_blocks = function () {
        var blocks = this.get_top_blocks(false);
        for (var i = 0; i < blocks.length; i++) {
            blocks.push.apply(blocks, blocks[i].get_children());
        }
        return blocks;
    };
    WorkspaceSvg.prototype.add_top_block = function (block) {
        this.top_blocks_.push(block);
    };
    WorkspaceSvg.prototype.add_top_comment = function (comment) {
        this.top_comments.push(comment);
    };
    WorkspaceSvg.prototype.get_top_blocks = function (ordered, exclude_invisible_blocks) {
        if (exclude_invisible_blocks === void 0) { exclude_invisible_blocks = false; }
        // Copy the topBlocks_ list.
        var blocks = this.top_blocks_.filter(function (block) { return !block.parent_group; });
        if (exclude_invisible_blocks) {
            blocks = blocks.filter(function (block) { return block.get_visibility() === interfaces_1.BlockVisibility.VISIBLE; });
        }
        if (ordered && blocks.length > 1) {
            var offset_1 = Math.sin((0, maths_1.to_radians)(this.SCAN_ANGLE));
            if (this.RTL) {
                offset_1 *= -1;
            }
            blocks.sort(function (a, b) {
                var aXY = a.get_relative_to_surface_xy();
                var bXY = b.get_relative_to_surface_xy();
                return (aXY[1] + offset_1 * aXY[0]) - (bXY[1] + offset_1 * bXY[0]);
            });
        }
        return blocks;
    };
    WorkspaceSvg.prototype.get_last_block = function () {
        var top_blocks = this.get_top_blocks(true);
        var last_block = top_blocks[top_blocks.length - 1];
        // ws中无积木
        if (!last_block) {
            return undefined;
        }
        var next_block = last_block.get_full_next_block();
        while (next_block) {
            last_block = next_block;
            next_block = last_block.get_full_next_block();
        }
        return last_block;
    };
    WorkspaceSvg.prototype.get_top_comments = function (ordered, exclude_invisible) {
        if (exclude_invisible === void 0) { exclude_invisible = false; }
        var comments = this.top_comments.slice();
        if (exclude_invisible) {
            comments = comments.filter(function (block) { return block.get_visibility() === interfaces_1.BlockVisibility.VISIBLE; });
        }
        if (ordered && comments.length > 1) {
            var offset_2 = Math.sin((0, maths_1.to_radians)(this.SCAN_ANGLE));
            if (this.RTL) {
                offset_2 *= -1;
            }
            comments.sort(function (a, b) {
                var aXY = a.get_relative_to_surface_xy();
                var bXY = b.get_relative_to_surface_xy();
                return (aXY[1] + offset_2 * aXY[0]) - (bXY[1] + offset_2 * bXY[0]);
            });
        }
        return comments;
    };
    WorkspaceSvg.prototype.get_top_elements = function (ordered, exclude_invisible) {
        if (exclude_invisible === void 0) { exclude_invisible = false; }
        var elements = this.top_comments.slice();
        elements = elements.concat(this.top_blocks_.filter(function (block) { return !block.parent_group; }));
        if (exclude_invisible) {
            elements = elements.filter(function (block) { return block.get_visibility() === interfaces_1.BlockVisibility.VISIBLE; });
        }
        if (ordered && elements.length > 1) {
            var offset_3 = Math.sin((0, maths_1.to_radians)(this.SCAN_ANGLE));
            if (this.RTL) {
                offset_3 *= -1;
            }
            elements.sort(function (a, b) {
                var aXY = a.get_relative_to_surface_xy();
                var bXY = b.get_relative_to_surface_xy();
                return (aXY[1] + offset_3 * aXY[0]) - (bXY[1] + offset_3 * bXY[0]);
            });
        }
        return elements;
    };
    WorkspaceSvg.prototype.remove_change_listener = function (func) {
        (0, array_1.remove)(this.listeners_, func);
    };
    WorkspaceSvg.prototype.remove_top_block = function (block) {
        if (!(0, array_1.remove)(this.top_blocks_, block)) {
            throw new Error("Block " + block.type + " [" + block.id + "] not present in workspace's list of top-most blocks.");
        }
    };
    /**
     * Remove a block from the list of top blocks.
     *
     * @param {IBlock} comment Block to remove.
     */
    WorkspaceSvg.prototype.remove_top_comment = function (comment) {
        if (!(0, array_1.remove)(this.top_comments, comment)) {
            throw new Error("Comment " + comment.get_text() + " [" + comment.id + "] not present in workspace's list of top-most comments.");
        }
    };
    /**
     * Fire a change event.
     * @param event Event to fire.
     */
    WorkspaceSvg.prototype.fire_change_listener = function (event) {
        if (event.is_record_undo() && this.events.is_record_undo()) {
            this.undo_stack_.push(event);
            this.redo_stack_.length = 0;
            while (this.undo_stack_.length > this.MAX_UNDO && this.MAX_UNDO >= 0) {
                this.undo_stack_.shift();
            }
        }
        // Copy listeners in case a listener attaches/detaches itself.
        var currentListeners = this.listeners_.slice();
        for (var i = 0; i < currentListeners.length; i++) {
            var func = currentListeners[i];
            func(event);
        }
        /**
         * @deprecated duplicated functionality.
         * Use change listener instead.
         */
        var common_listener = this.event_dict.get('common');
        common_listener && common_listener(event);
        var evt_listener = this.event_dict.get(event.type);
        evt_listener && evt_listener(event);
        if (interfaces_1.AllUIEvents.includes(event.type)) {
            var ui_listener = this.event_dict.get(interfaces_1.BlockEventType.UI);
            ui_listener && ui_listener(event);
        }
    };
    WorkspaceSvg.prototype.get_block_by_id = function (id) {
        var block = this.blockDB_.get(id);
        // If block is from flyout
        var flyout = this.get_flyout();
        if (!block && flyout != undefined) {
            var flyout_workspace = flyout.get_workspace();
            if (flyout_workspace != undefined) {
                block = flyout_workspace.blockDB_.get(id);
            }
        }
        return block || undefined;
    };
    WorkspaceSvg.prototype.add_change_listener = function (func, at_last) {
        if (at_last === void 0) { at_last = true; }
        if (at_last) {
            this.listeners_.push(func);
        }
        else {
            this.listeners_.unshift(func);
        }
        return func;
    };
    WorkspaceSvg.prototype.add_event_listener = function (evt, listener) {
        this.event_dict.set(evt, listener);
    };
    WorkspaceSvg.prototype.add_custom_change_event = function (element, run) {
        this.custom_change_events_.set(element, run);
    };
    WorkspaceSvg.prototype.get_change_event = function (element) {
        return this.custom_change_events_.get(element);
    };
    WorkspaceSvg.prototype.create_dom = function (opt_background_class) {
        /**
         * <g class="blocklyWorkspace">
         *   <rect class="blocklyMainBackground" height="100%" width="100%"></rect>
         *   [flyout may go here]
         *   <g class="blocklyBlockCanvas"></g>
         *   <g class="blocklyBubbleCanvas"></g>
         *   [Scrollbars may go here]
         * </g>
         */
        this.svg_group = (0, dom_1.create_svg_element)('g', { 'class': 'blocklyWorkspace' });
        if (opt_background_class) {
            // Note that a <g> alone does not receive mouse events--it must have a
            // valid target inside it.  If no background class is specified, as in the
            // flyout, the workspace will not receive mouse events.
            this.svg_background_ = (0, dom_1.create_svg_element)('rect', { 'height': '100%', 'width': '100%', 'class': opt_background_class }, this.svg_group);
        }
        if (opt_background_class == "blocklyMainBackground" /* MAIN_BACKGROUND */ &&
            this.grid_ &&
            this.svg_background_) {
            this.svg_background_.style.fill = "url(#" + this.grid_.get_pattern_id() + ")";
        }
        this.svg_block_canvas_ = (0, dom_1.create_svg_element)('g', { 'class': 'blocklyBlockCanvas' }, this.svg_group);
        this.svg_bubble_canvas_ = (0, dom_1.create_svg_element)('g', { 'class': 'blocklyBubbleCanvas' }, this.svg_group);
        if (!this.is_flyout) {
            this.events.bind_event_with_checks(this.svg_group, 'mousedown', this, this.on_mouse_down);
            if (this.options.ws_scrollable) {
                // 滚动及缩放事件，在flyout中时会直接绑定到flyout上
                this.events.bind_event_with_checks(this.svg_group, 'wheel', this, this.on_wheel_scroll);
            }
        }
        // Determine if there needs to be a category tree, or a simple list of
        // blocks.  This cannot be changed later, since the UI is very different.
        if (this.options.has_categories) {
            this.toolbox_ = this.toolbox_factory(this);
        }
        this.record_delete_areas();
        return this.svg_group;
    };
    WorkspaceSvg.prototype.paste = function (xml_block, mouse_position, is_move_to_default) {
        if (is_move_to_default === void 0) { is_move_to_default = false; }
        xml_block && (0, dom_1.reset_all_block_id)(xml_block);
        this._paste(xml_block, mouse_position, is_move_to_default, false);
    };
    /**
     * Helper function for paste.
     */
    WorkspaceSvg.prototype._paste = function (xml_block, mouse_position, is_move_to_default, is_from_paste_all) {
        var _a;
        if (is_move_to_default === void 0) { is_move_to_default = false; }
        if (is_from_paste_all === void 0) { is_from_paste_all = true; }
        this.runtime_data.set_pasting(true);
        try {
            for (var i = 0; i < this.pre_paste.length; i++) {
                if (!xml_block) {
                    continue;
                }
                (_a = this.pre_paste[i].call(this, xml_block, mouse_position, is_move_to_default || false, is_from_paste_all), xml_block = _a.xml_block, mouse_position = _a.mouse_position, is_move_to_default = _a.is_move_to_default);
            }
            // All blocks are filtered by pre processing.
            if (!xml_block) {
                return;
            }
            if (!this.rendered ||
                xml_block.getElementsByTagName('block').length >= this.remaining_capacity()) {
                return;
            }
            if (this.current_gesture_) {
                this.current_gesture_.cancel(); // Dragging while pasting?  No.
            }
            this.events.disable();
            var currently_resizes_enabled = this.resizes_enabled_;
            if (currently_resizes_enabled) {
                this.set_resizes_enabled(false);
            }
            var block = void 0;
            var pasted_position = mouse_position || { x: 0, y: 0 };
            try {
                block = this.xml.dom_to_workspace_element(xml_block, this);
                if ((0, base_1.is_block_svg)(block)) {
                    block = block.parent_group || block;
                }
                if (!block) {
                    return;
                }
                var block_x = void 0;
                var block_y = void 0;
                // 不存在鼠标位置，粘贴到左上角(is_move_to_default) 或 起始位置右下方(!is_move_to_default)
                if (!mouse_position) {
                    if (is_move_to_default) {
                        var origin_1 = this.get_origin_offset_in_pixels();
                        var padding = this.get_paste_offset();
                        block_x = (padding.left - origin_1[0]) / this.scale;
                        block_y = (padding.top - origin_1[1]) / this.scale;
                    }
                    else {
                        // Move the duplicate to original position.
                        var x = xml_block.getAttribute('x');
                        var y = xml_block.getAttribute('y');
                        if (!x || !y) {
                            return;
                        }
                        block_x = parseInt(x, 10);
                        block_y = parseInt(y, 10);
                    }
                    if (isNaN(block_x) || isNaN(block_y)) {
                        throw Error();
                    }
                    if (this.RTL) {
                        block_x = -block_x;
                    }
                    // Offset block until not clobbering another block and not in connection
                    // distance with neighbouring blocks.
                    var collide = void 0;
                    do {
                        collide = false;
                        var all_elements = this.get_all_blocks().slice();
                        all_elements = all_elements.concat(this.top_comments.slice());
                        for (var i = 0; i < all_elements.length; i++) {
                            var other_xy = all_elements[i].get_relative_to_surface_xy();
                            if (Math.abs(block_x - other_xy[0]) <= 1 &&
                                Math.abs(block_y - other_xy[1]) <= 1) {
                                collide = true;
                                break;
                            }
                        }
                        if (!collide) {
                            // Check for blocks in snap range to any of its connections.
                            var connections = (0, base_1.is_block_svg)(block) ? block.get_connections(false) : [];
                            for (var i = 0; i < connections.length; i++) {
                                var neighbour = connections[i].closest(this.theme.blink_params.SNAP_RADIUS, gl_matrix_1.vec2.fromValues(block_x, block_y));
                                if (neighbour.connection) {
                                    collide = true;
                                    break;
                                }
                            }
                        }
                        if (collide) {
                            block_x += this.theme.blink_params.SNAP_RADIUS;
                            // 目前并没有积木自身存在offset
                            block_y += this.theme.blink_params.SNAP_RADIUS * 2;
                        }
                    } while (collide);
                    pasted_position = { x: block_x, y: block_y };
                    block.move_by(gl_matrix_1.vec2.fromValues(block_x, block_y));
                }
                else {
                    // 存在鼠标位置，粘贴到鼠标位置
                    pasted_position = mouse_position;
                    block.move_by(gl_matrix_1.vec2.fromValues(mouse_position.x, mouse_position.y));
                }
            }
            finally {
                this.events.enable();
                if (currently_resizes_enabled) {
                    this.set_resizes_enabled(true);
                }
            }
            block.select();
            var curr_event_group = this.events.get_group();
            this.events.set_group(curr_event_group || true);
            if (this.events.is_enabled() && (!(0, base_1.is_block_svg)(block) || !block.is_shadow())) {
                this.events.fire(this.create_event_factory({ block: block }));
            }
            if ((0, base_1.is_block_svg)(block)) {
                (0, block_1.fire_block_onchange)(block);
                if (block.parent_group) {
                    this.events.fire(this.change_event_factory('group_block', {
                        block: block,
                        old_value: undefined,
                        new_value: [block.parent_group.id, block.parent_group.group_name, block.parent_group.group_stop_at || ''],
                    }));
                }
            }
            this.events.set_group(curr_event_group || false);
            block.bring_to_front();
            return pasted_position;
        }
        finally {
            this.runtime_data.set_pasting(false);
        }
    };
    WorkspaceSvg.prototype.set_pre_paste = function (cb) {
        this.pre_paste.push(cb);
    };
    WorkspaceSvg.prototype.set_pre_paste_extend = function (cb) {
        this.pre_paste_extend.push(cb);
    };
    WorkspaceSvg.prototype.paste_extend = function (xml_blocks, mouse_position, is_move_to_default) {
        var _a;
        if (is_move_to_default === void 0) { is_move_to_default = false; }
        var current_group = this.events.get_group();
        this.events.set_group(current_group || true);
        this.runtime_data.set_pasting(true);
        (0, dom_1.reset_all_block_id)(xml_blocks);
        for (var i = 0; i < this.pre_paste_extend.length; i++) {
            (_a = this.pre_paste_extend[i].call(this, xml_blocks, mouse_position, is_move_to_default || false), xml_blocks = _a.xml_blocks, mouse_position = _a.mouse_position, is_move_to_default = _a.is_move_to_default);
        }
        if (xml_blocks.length <= 1) {
            xml_blocks[0] && this._paste(xml_blocks[0], mouse_position, is_move_to_default, true);
            this.events.set_group(current_group);
            return;
        }
        var get_block_position = function (xml) {
            var x = xml.getAttribute('x');
            var y = xml.getAttribute('y');
            return { x: parseInt(x || '0', 10), y: parseInt(y || '0', 10) };
        };
        var currently_resizes_enabled = this.resizes_enabled_;
        if (currently_resizes_enabled) {
            this.set_resizes_enabled(false);
        }
        // Paste the first blocks.
        // If no mouse_position is passed, set the pasted postion of the first blocks as mouse_position.
        // For avoiding blocks position error when use ctrl+v
        if (!mouse_position) {
            mouse_position = this._paste(xml_blocks[0], undefined, is_move_to_default) || { x: 0, y: 0 };
        }
        else {
            this._paste(xml_blocks[0], mouse_position, is_move_to_default);
        }
        var first_blocks_position = get_block_position(xml_blocks[0]);
        var offset = {
            x: mouse_position.x - first_blocks_position.x,
            y: mouse_position.y - first_blocks_position.y,
        };
        // Paste all following blocks
        for (var i = 1, len = xml_blocks.length; i < len; i++) {
            var xml = xml_blocks[i];
            var blocks_position = get_block_position(xml_blocks[i]);
            var final_position = {
                x: blocks_position.x + offset.x,
                y: blocks_position.y + offset.y,
            };
            this._paste(xml, final_position, false);
        }
        this.runtime_data.set_pasting(false);
        this.events.set_group(current_group);
        if (currently_resizes_enabled) {
            this.set_resizes_enabled(true);
        }
    };
    /**
     * 获取粘贴原点相对于 injection div 左上角的偏移量。
     * use for left toolbox
     * @returns The default padding for pasting block at top left corner.
     */
    WorkspaceSvg.prototype.get_paste_offset = function () {
        var padding = {
            left: 40,
            top: 30,
        };
        var workspace_transform = (0, dom_1.get_translate)(this.get_parent_svg());
        padding.left += workspace_transform.x;
        return padding;
    };
    WorkspaceSvg.prototype.record_delete_areas = function () {
        this.is_flyout_rect_dirty_ = true;
        if (this.get_options().delete_area === 'none') {
            this.delete_area_toolbox_ = undefined;
            this.delete_area_flyout = undefined;
            return;
        }
        if (this.flyout_) {
            this.delete_area_toolbox_ = this.flyout_.get_client_rect();
        }
        else if (this.toolbox_) {
            this.delete_area_toolbox_ = this.toolbox_.get_client_rect();
        }
        else {
            this.delete_area_toolbox_ = undefined;
        }
    };
    WorkspaceSvg.prototype.is_delete_area = function (e) {
        var xy = gl_matrix_1.vec2.fromValues(e.clientX, e.clientY);
        var flyout_area = this.get_delete_area_flyout();
        if ((this.delete_area_toolbox_ && this.delete_area_toolbox_.contains(xy))
            || (flyout_area && flyout_area.contains(xy))) {
            return interfaces_1.DeleteArea.DELETE_AREA_TOOLBOX;
        }
        return interfaces_1.DeleteArea.DELETE_AREA_NONE;
    };
    WorkspaceSvg.prototype.set_gestures_enabled = function (enabled) {
        if (this.gestures_enabled === enabled) {
            return;
        }
        if (this.options.pinch) {
            if (enabled) {
                this.runtime_data.register_finger_events();
            }
            else {
                this.runtime_data.unregister_finger_events();
            }
        }
        this.gestures_enabled = enabled;
    };
    /**
     * workspace上的手势检测是否开启操作。
     * True if enabled.
     */
    WorkspaceSvg.prototype.is_gestures_enabled = function () {
        return this.gestures_enabled;
    };
    /**
      * Codemao: defind on_mouse_scroll
      * Handle a mouse-wheel on SVG drawing surface.
      * Only scroll but not zoom
      */
    WorkspaceSvg.prototype.on_wheel_scroll = function (e) {
        // TODO: Remove gesture cancellation and compensate for coordinate skew during
        // zoom.
        if (this.current_gesture_) {
            this.current_gesture_.cancel();
        }
        if (!this.gestures_enabled) {
            return;
        }
        // Multiplier variable, so that non-pixel-deltaModes are supported.
        // See LLK/scratch-blocks#1190.
        var multiplier = e.deltaMode === 0x1 ? 15 : 1;
        // ctrl + wheel
        if (e.ctrlKey) {
            // The vertical scroll distance that corresponds to a click of a zoom button.
            // 按住 ctrl 滚轮的灵敏度，mac 和 windows 平台不同
            var PIXELS_PER_ZOOM_STEP = is_1.is.mac() ? 50 : 100;
            var delta = -e.deltaY / PIXELS_PER_ZOOM_STEP * multiplier;
            var position = this.utils.mouse_to_svg(e, this.get_parent_svg(), this.get_inverse_screen_ctm());
            this.zoom(position.x, position.y, delta);
        }
        else {
            // This is a regular mouse wheel event - scroll the workspace
            // First hide the WidgetDiv without animation
            // (mouse scroll makes field out of place with div)
            this.widget_div.hide(true);
            var x = this.scroll_xy[0] - e.deltaX * multiplier;
            var y = this.scroll_xy[1] - e.deltaY * multiplier;
            // shfit + wheel in some browser will not change deltaX, calculate it manually.
            if (e.shiftKey && e.deltaX === 0) {
                // Scroll horizontally (based on vertical scroll delta)
                // This is needed as for some browser/system combinations which do not
                // set deltaX. See #1662.
                x = this.scroll_xy[0] - e.deltaY * multiplier;
                y = this.scroll_xy[1]; // Don't scroll vertically
            }
            this.start_drag_metrics = this.get_metrics();
            this.scroll(x, y);
        }
        e.preventDefault();
    };
    /**
     * Codemao: add menuOptions;
     * Show the context menu for the workspace.
     *
     * @param e Mouse event.
     */
    WorkspaceSvg.prototype.show_context_menu = function (e) {
        var _this = this;
        if (this.options.readOnly || this.is_flyout) {
            return;
        }
        // Get current mouse coordinates relative to workspace origin
        var position = this.utils.mouse_to_svg(e, this.get_parent_svg(), this.get_inverse_screen_ctm());
        var origin = this.get_origin_offset_in_pixels();
        var workspace_transform = (0, dom_1.get_translate)(this.get_parent_svg());
        var mouse_position = {
            x: (position.x + workspace_transform.x - origin[0]) / this.scale,
            y: (position.y + workspace_transform.y - origin[1]) / this.scale,
        };
        var menu_options = [];
        this.options.context_menu.workspace.forEach(function (option) {
            if (typeof option === 'number') {
                switch (option) {
                    case interfaces_1.WorkspaceOptionType.CLEAN_UP:
                        return _this.add_clean_up_option(menu_options);
                    case interfaces_1.WorkspaceOptionType.PASTE:
                        return _this.add_paste_option(menu_options, mouse_position);
                    case interfaces_1.WorkspaceOptionType.DELETE_ALL:
                        return _this.add_delete_all_blocks_option(menu_options);
                    case interfaces_1.WorkspaceOptionType.COPY_ALL:
                        return _this.add_copy_all_blocks_option(menu_options);
                    case interfaces_1.WorkspaceOptionType.GLOBAL_COMMENT:
                        return _this.add_global_comment_option(menu_options, mouse_position);
                    default:
                        return console.warn("Undefined workspace menu option: " + option);
                }
            }
            var custom_option = option(_this);
            custom_option && menu_options.push(custom_option);
        });
        var option_group = {
            source: 'workspace',
            options: menu_options,
        };
        this.context_menu.show(e, option_group, this.RTL);
    };
    // Option to paste blocks
    WorkspaceSvg.prototype.add_paste_option = function (menu_options, mouse_position) {
        var _this = this;
        var clipboard_xml = this.runtime_data.clipboard.get_content();
        menu_options.push({
            text: this.Msg.PASTE,
            name: 'paste',
            enabled: clipboard_xml != undefined,
            callback: function () {
                if (!clipboard_xml) {
                    return;
                }
                // 允许区分复制积木与复制全部积木之后 粘贴的交互
                if (!Array.isArray(clipboard_xml)) {
                    _this.paste(clipboard_xml, mouse_position);
                    return;
                }
                _this.paste_extend(clipboard_xml, mouse_position);
            },
        });
    };
    // Option to clean up blocks
    WorkspaceSvg.prototype.add_clean_up_option = function (menuOptions) {
        if (this._scrollbar) {
            var topBlocks = this.get_top_elements(true);
            var cleanOption = {
                text: this.Msg.CLEAN_UP,
                name: 'clean_up',
                enabled: topBlocks.length > 1,
                callback: this.clean_up.bind(this),
            };
            menuOptions.push(cleanOption);
        }
    };
    // Option to delete all blocks.
    WorkspaceSvg.prototype.add_delete_all_blocks_option = function (menuOptions, exclude_invisible_blocks, confirm_fn) {
        var _this = this;
        if (exclude_invisible_blocks === void 0) { exclude_invisible_blocks = true; }
        var top_blocks = this.get_top_elements(true, exclude_invisible_blocks);
        var DELAY = 10;
        // Count the number of blocks that are deletable.
        var deleteList = [];
        function addDeletableBlocks(new_block) {
            if (!(0, base_1.is_block_svg)(new_block)) {
                if (new_block.is_deletable()) {
                    deleteList = deleteList.concat([new_block]);
                }
                return;
            }
            if (new_block.is_deletable()) {
                deleteList = deleteList.concat(new_block.get_descendants());
            }
            else {
                var children = new_block.get_children();
                for (var child_i = 0; child_i < children.length; child_i++) {
                    addDeletableBlocks(children[child_i]);
                }
            }
        }
        for (var top_i = 0; top_i < top_blocks.length; top_i++) {
            addDeletableBlocks(top_blocks[top_i]);
        }
        var delete_event_group = this.events.get_group();
        var deleteNext = function () {
            if (delete_event_group === '') {
                _this.events.set_group(true);
                delete_event_group = _this.events.get_group();
            }
            else {
                _this.events.set_group(delete_event_group);
            }
            var block_delete = deleteList.shift();
            if (block_delete) {
                if (block_delete.workspace) {
                    block_delete.dispose(false, true);
                    window.setTimeout(deleteNext, DELAY);
                }
                else {
                    deleteNext();
                }
            }
            _this.events.set_group(false);
        };
        var num_blocks = (0, block_1.cal_num_blocks)(deleteList);
        var deleteOption = {
            text: this.Msg.DELETE_X_BLOCKS.replace('%1', String(num_blocks)),
            name: 'delete_all',
            enabled: num_blocks > 0,
            callback: function () {
                if (_this.current_gesture_) {
                    _this.current_gesture_.cancel();
                }
                if (!confirm_fn || num_blocks < 2) {
                    deleteNext();
                }
                else {
                    confirm_fn(deleteNext);
                }
            },
        };
        menuOptions.push(deleteOption);
    };
    /**
     * Option to copy all blocks
     */
    WorkspaceSvg.prototype.add_copy_all_blocks_option = function (menuOptions, exclude_invisible_blocks) {
        var _this = this;
        if (exclude_invisible_blocks === void 0) { exclude_invisible_blocks = true; }
        var top_blocks = this.get_top_elements(true, exclude_invisible_blocks);
        // Count the sum of all block
        var all_block_count = 0;
        // Compute demonstrated number of blocks.
        top_blocks.forEach(function (block) {
            if (!(0, base_1.is_block_svg)(block)) {
                all_block_count++;
                return;
            }
            all_block_count += (0, block_1.cal_num_blocks)(block.get_descendants());
        });
        menuOptions.push({
            text: this.Msg.COPY_ALL.replace('%1', String(all_block_count)),
            name: 'copy_all',
            enabled: all_block_count > 0,
            callback: function () {
                _this.runtime_data.clipboard.copy_all(top_blocks);
            },
        });
    };
    /**
     * Option to add global comment
     */
    WorkspaceSvg.prototype.add_global_comment_option = function (menu_options, mouse_position) {
        var _this = this;
        // 产品需求：简化版注释（暂时）不能作为全局注释使用。
        if (this.options.comment_type === 'simplified') {
            console.warn('Trying to create global comment when using simplified comment. Ignoring this command. ');
            return;
        }
        var global_comment_option = {
            text: this.Msg.GLOBAL_COMMENT,
            name: 'global_comment',
            enabled: true,
            callback: function () {
                var current_group = _this.events.get_group();
                _this.events.set_group(current_group || true);
                var comment = _this.new_workspace_comment(mouse_position);
                comment.init_svg();
                // 由于CreateEvent中暂时无法对注释进行特殊处理，因此
                // 全局注释需要记录展开事件，以保证重做时生成的注释是展开的。
                // 积木注释在ChangeEvent中做了处理，不需要额外记录。
                comment.set_expanded(true);
                comment.focus();
                _this.events.set_group(current_group);
            },
        };
        menu_options.push(global_comment_option);
    };
    WorkspaceSvg.prototype.new_workspace_comment = function (position, opt_id) {
        return this.workspace_comment_factory({
            workspace: this,
            type: this.options.comment_type,
            position: position,
            opt_id: opt_id,
        });
    };
    WorkspaceSvg.prototype.update_toolbox = function (tree) {
        var tree_ = typeof tree === 'string' ? this.xml.text_to_dom(tree) : tree;
        if (tree_ == undefined) {
            if (this.options.toolbox_config) {
                throw new Error('Can\'t nullify an existing toolbox.');
            }
            return; // No change (undefined to undefined).
        }
        if (!this.options.toolbox_config) {
            throw new Error('Existing toolbox is undefined.  Can\'t create new toolbox.');
        }
        if (tree_.getElementsByTagName('category').length) {
            if (!this.toolbox_) {
                throw new Error('Existing toolbox has no categories.  Can\'t change mode.');
            }
            this.options.toolbox_config = tree_;
            this.toolbox_.populate(tree_);
        }
        else {
            if (!this.flyout_) {
                throw new Error('Existing toolbox has categories.  Can\'t change mode.');
            }
            this.options.toolbox_config = tree_;
            this.flyout_.show(tree_.childNodes);
        }
    };
    WorkspaceSvg.prototype.translate = function (x, y) {
        if (this.use_workspace_drag_surface_ && this.is_drag_surface_active_ && this.workspace_drag_surface_) {
            this.workspace_drag_surface_.translate_surface(x + this.offset[0], y + this.offset[1]);
        }
        else {
            var translation = "translate(" + x + ", " + y + ") scale(" + this.scale + ")";
            if (this.svg_block_canvas_ != undefined) {
                this.svg_block_canvas_.setAttribute('transform', translation);
            }
            if (this.svg_bubble_canvas_ != undefined) {
                this.svg_bubble_canvas_.setAttribute('transform', translation);
            }
        }
        // Now update the block drag surface if we're using one.
        if (this.block_drag_surface_) {
            this.block_drag_surface_.translate_and_scale_group(x + this.offset[0], y + this.offset[1], this.scale);
        }
    };
    WorkspaceSvg.prototype.new_block = function (prototype_name, opt_id) {
        return this.block_factory({ workspace: this, id: opt_id, prototype_name: prototype_name });
    };
    WorkspaceSvg.prototype.get_svg_xy = function (element) {
        var xy = gl_matrix_1.vec2.create();
        var el = element;
        var scale = 1;
        var canvas = this.get_canvas();
        var bubble_canvas = this.get_bubble_canvas();
        if ((canvas != undefined && canvas.contains(el)) ||
            (bubble_canvas != undefined &&
                bubble_canvas.contains(el))) {
            // Before the SVG canvas, scale the coordinates.
            scale = this.scale;
        }
        do {
            // Loop through this block and every parent.
            var r_xy = this.utils.get_relative_xy(el);
            if (el == this.get_canvas() ||
                el == this.get_bubble_canvas()) {
                // After the SVG canvas, don't scale the coordinates.
                scale = 1;
            }
            gl_matrix_1.vec2.scaleAndAdd(xy, xy, r_xy, scale);
            el = el.parentNode; // Type infer since we've checked below.
        } while (el && el != this.get_parent_svg());
        return xy;
    };
    WorkspaceSvg.prototype.resize = function () {
        if (this.toolbox_) {
            this.toolbox_.position();
        }
        if (this.flyout_) {
            this.flyout_.position();
        }
        if (this._scrollbar) {
            this._scrollbar.resize();
        }
        else {
            this.translate(this.scroll_xy[0], this.scroll_xy[1]);
        }
        this.update_screen_calculations();
    };
    /**
     * Update items that use screen coordinate calculations
     * because something has changed (e.g. scroll position, window size).
     */
    WorkspaceSvg.prototype.update_screen_calculations = function () {
        this.inverse_screen_CTM_dirty_ = true;
        this.workspace_area_dirty_ = true;
        this.record_cached_areas();
    };
    /**
     * Update cached areas for this workspace.
     */
    WorkspaceSvg.prototype.record_cached_areas = function () {
        this.record_blocks_area_();
        this.record_delete_areas();
    };
    /**
     * Record where all of blocks GUI is on the screen
     */
    WorkspaceSvg.prototype.record_blocks_area_ = function () {
        var parent_svg = this.get_injection_div();
        if (parent_svg) {
            this.blocks_area_ = parent_svg.getBoundingClientRect();
        }
        else {
            this.blocks_area_ = undefined;
        }
    };
    WorkspaceSvg.prototype.get_canvas = function () {
        return this.svg_block_canvas_;
    };
    WorkspaceSvg.prototype.is_dragging = function () {
        return this.current_gesture_ && this.current_gesture_.is_dragging();
    };
    WorkspaceSvg.prototype.set_resizes_enabled = function (enabled) {
        var reenabled = (!this.resizes_enabled_ && enabled);
        this.resizes_enabled_ = enabled;
        if (reenabled) {
            // Newly enabled.  Trigger a resize.
            this.resize_contents();
        }
    };
    WorkspaceSvg.prototype.cancel_current_gesture = function () {
        if (this.current_gesture_) {
            this.current_gesture_.cancel();
        }
    };
    WorkspaceSvg.prototype.get_audio_manager = function () {
        return this.audio_manager_;
    };
    WorkspaceSvg.prototype.get_gesture = function (e) {
        var is_start = (e.type == 'mousedown' || e.type == 'touchstart');
        var gesture = this.current_gesture_;
        if (gesture) {
            if (is_start && gesture.has_started()) {
                // This will be triggered after the two-finger zoom,
                // in order to improve performance remove console
                // console.warn('tried to start the same gesture twice');
                // That's funny.  We must have missed a mouse up.
                // Cancel it, rather than try to retrieve all of the state we need.
                gesture.cancel();
                return undefined;
            }
            return gesture;
        }
        // No gesture existed on this workspace, but this looks like the start of a
        // new gesture.
        if (is_start) {
            this.current_gesture_ = this.gesture_factory({ event: e, workspace: this });
            return this.current_gesture_;
        }
        // No gesture existed and this event couldn't be the start of a new gesture.
        return undefined;
    };
    WorkspaceSvg.prototype.get_grid = function () {
        return this.grid_;
    };
    WorkspaceSvg.prototype.is_inside_workspace_area = function (e) {
        var xy = gl_matrix_1.vec2.fromValues(e.clientX, e.clientY);
        var workspace_area = this.get_workspace_area();
        return !!workspace_area && (0, maths_1.contains)(workspace_area, xy);
    };
    WorkspaceSvg.prototype.is_inside_blocks_area = function (e) {
        var xy = gl_matrix_1.vec2.fromValues(e.clientX, e.clientY);
        if (this.is_delete_area(e) ||
            (this.blocks_area_ && (0, maths_1.contains)(this.blocks_area_, xy))) {
            return true;
        }
        return false;
    };
    WorkspaceSvg.prototype.setup_drag_surface = function () {
        // Don't do anything if we aren't using a drag surface.
        if (!this.use_workspace_drag_surface_ || !this.workspace_drag_surface_) {
            return;
        }
        // This can happen if the user starts a drag, mouses up outside of the
        // document where the mouseup listener is registered (e.g. outside of an
        // iframe) and then moves the mouse back in the workspace.  On mobile and ff,
        // we get the mouseup outside the frame. On chrome and safari desktop we do
        // not.
        if (this.is_drag_surface_active_) {
            return;
        }
        if (this.svg_block_canvas_ == undefined) {
            throw new ReferenceError('Block Canvas not found when draging.');
        }
        this.is_drag_surface_active_ = true;
        // Figure out where we want to put the canvas back.  The order
        // in the is important because things are layered.
        var previousElement = this.svg_block_canvas_.previousSibling || undefined;
        var svg = this.get_parent_svg();
        if (svg == undefined) {
            return;
        }
        var coord = this.utils.get_relative_xy(this.svg_block_canvas_);
        if (this.workspace_drag_surface_) {
            this.workspace_drag_surface_.set_contents_and_show(this.svg_block_canvas_, this.svg_bubble_canvas_, previousElement, this.scale);
            this.workspace_drag_surface_.translate_surface(coord[0] + this.offset[0], coord[1] + this.offset[1]);
        }
    };
    WorkspaceSvg.prototype.reset_drag_surface = function () {
        // Don't do anything if we aren't using a drag surface.
        if (!this.use_workspace_drag_surface_) {
            return;
        }
        if (!this.workspace_drag_surface_) {
            return;
        }
        this.is_drag_surface_active_ = false;
        var trans = this.workspace_drag_surface_.get_surface_translation();
        this.workspace_drag_surface_.clear_and_hide(this.svg_group);
        var translation = "translate(" + (trans[0] - this.offset[0]) + ", " + (trans[1] - this.offset[1]) + ") scale(" + this.scale + ")";
        if (this.svg_block_canvas_ != undefined) {
            this.svg_block_canvas_.setAttribute('transform', translation);
        }
        if (this.svg_bubble_canvas_ != undefined) {
            this.svg_bubble_canvas_.setAttribute('transform', translation);
        }
    };
    WorkspaceSvg.prototype.refresh_toolbox_selection = function () {
        // Updating the toolbox can be expensive. Don't do it when when it is
        // disabled.
        if (this.toolbox_) {
            var flyout = this.toolbox_.flyout;
            if (flyout && !this.current_gesture_ &&
                this.toolbox_refresh_enabled_) {
                this.toolbox_.refresh_selection();
            }
        }
        else {
            var target = this.target_workspace;
            var toolbox = target === null || target === void 0 ? void 0 : target.get_toolbox();
            if (target && toolbox && toolbox.flyout &&
                !target.current_gesture_ && target.get_toolbox_refresh_enabled) {
                toolbox.refresh_selection();
            }
        }
    };
    WorkspaceSvg.prototype.register_toolbox_category_callback = function (key, func) {
        if (this.toolbox_category_callbacks_) {
            this.toolbox_category_callbacks_[key] = func;
        }
    };
    WorkspaceSvg.prototype.get_parent_svg = function () {
        if (this.cached_parent_svg_) {
            return this.cached_parent_svg_;
        }
        var element = this.svg_group;
        while (element) {
            if (element.tagName == 'svg') {
                this.cached_parent_svg_ = element;
                return element;
            }
            element = element.parentNode;
        }
        throw new Error('Workspace may not been init.');
    };
    WorkspaceSvg.prototype.get_blocks_bounding_box = function () {
        // 积木注释也需要参与workspace尺寸的计算，但是shadow blocks不参与。
        // 因此需要获取top blocks和 all elements.
        var top_elements = this.get_top_blocks(false);
        this.workspace_comment_db.forEach(function (comment) {
            top_elements.push(comment);
        });
        // There are no blocks, return empty rectangle.
        if (!top_elements.length) {
            return { x: 0, y: 0, width: 0, height: 0 };
        }
        // Initialize boundary using the first block.
        var boundary = top_elements[0].get_bounding_rectangle();
        // Start at 1 since the 0th block was used for initialization
        for (var i = 1; i < top_elements.length; i++) {
            var blockBoundary = top_elements[i].get_bounding_rectangle();
            if (blockBoundary.topLeft[0] < boundary.topLeft[0]) {
                boundary.topLeft[0] = blockBoundary.topLeft[0];
            }
            if (blockBoundary.bottomRight[0] > boundary.bottomRight[0]) {
                boundary.bottomRight[0] = blockBoundary.bottomRight[0];
            }
            if (blockBoundary.topLeft[1] < boundary.topLeft[1]) {
                boundary.topLeft[1] = blockBoundary.topLeft[1];
            }
            if (blockBoundary.bottomRight[1] > boundary.bottomRight[1]) {
                boundary.bottomRight[1] = blockBoundary.bottomRight[1];
            }
        }
        return {
            x: boundary.topLeft[0],
            y: boundary.topLeft[1],
            width: boundary.bottomRight[0] - boundary.topLeft[0],
            height: boundary.bottomRight[1] - boundary.topLeft[1],
        };
    };
    WorkspaceSvg.prototype.set_resize_handler_wrapper = function (handler) {
        this.resize_handler_wrapper_ = handler;
    };
    WorkspaceSvg.prototype.resize_contents = function () {
        if (!this.resizes_enabled_ || !this.rendered) {
            return;
        }
        if (this._scrollbar) {
            this._scrollbar.resize();
        }
        this.inverse_screen_CTM_dirty_ = true;
    };
    WorkspaceSvg.prototype.get_bubble_canvas = function () {
        return this.svg_bubble_canvas_;
    };
    WorkspaceSvg.prototype.add_flyout = function (tag_name) {
        var workspaceOptions = Object.assign({}, this.options, { parentWorkspace: this });
        this.flyout_ = this.flyout_factory(workspaceOptions);
        // Return the element so that callers can place it in their desired
        // spot in the DOM.
        return this.flyout_.create_dom(tag_name);
    };
    WorkspaceSvg.prototype.get_toolbox_category_callback = function (key) {
        return this.toolbox_category_callbacks_ ? this.toolbox_category_callbacks_[key] : undefined;
    };
    WorkspaceSvg.prototype.update_screen_calculations_if_scrolled = function () {
        var currScroll = (0, dom_1.get_document_scroll)();
        if (this.last_recorded_page_scroll_ == undefined ||
            !gl_matrix_1.vec2.equals(this.last_recorded_page_scroll_, currScroll)) {
            this.last_recorded_page_scroll_ = currScroll;
            this.update_screen_calculations();
        }
    };
    WorkspaceSvg.prototype.mark_focused = function () {
        if (this.options.parentWorkspace instanceof WorkspaceSvg_1) {
            this.options.parentWorkspace.mark_focused();
        }
        else {
            this.Blink.mainWorkspace = this;
            // We call e.preventDefault in many event handlers which means we
            // need to explicitly grab focus (e.g from a textarea) because
            // the browser will not do it for us.  How to do this is browser dependant.
            this.set_browser_focus();
        }
    };
    /**
     * Set the workspace to have focus in the browser.
     */
    WorkspaceSvg.prototype.set_browser_focus = function () {
        // Blur whatever was focused since explcitly grabbing focus below does not
        // work in Edge.
        if (document.activeElement) {
            document.activeElement.blur();
        }
        try {
            // Focus the workspace SVG - this is for Chrome and Firefox.
            this.get_parent_svg().focus();
        }
        catch (e) {
            // IE and Edge do not support focus on SVG elements. When that fails
            // above, get the injectionDiv (the workspace's parent) and focus that
            // instead.  This doesn't work in Chrome.
            try {
                // In IE11, use setActive (which is IE only) so the page doesn't scroll
                // to the workspace gaining focus.
                var parent_node = this.get_parent_svg();
                if (parent_node) {
                    parent_node.setActive();
                }
            }
            catch (e) {
                // setActive support was discontinued in Edge so when that fails, call
                // focus instead.
                var parent_node = this.get_parent_svg();
                if (parent_node) {
                    parent_node.focus();
                }
            }
        }
    };
    WorkspaceSvg.prototype.get_inverse_screen_ctm = function () {
        // Defer getting the screen CTM until we actually need it, this should
        // avoid forced reflows from any calls to update_inverse_screen_ctm.
        // update_inverse_screen_ctm is totally deprecated.
        // When resize, set this.inverse_screen_CTM_dirty_ to true.
        var parent_svg = this.get_parent_svg();
        if (this.inverse_screen_CTM_dirty_ && parent_svg != undefined) {
            var ctm = parent_svg.getScreenCTM();
            if (ctm) {
                this.inverse_screen_CTM_ = ctm.inverse();
                this.inverse_screen_CTM_dirty_ = false;
            }
        }
        return this.inverse_screen_CTM_;
    };
    WorkspaceSvg.prototype.get_origin_offset_in_pixels = function () {
        if (this.svg_block_canvas_ == undefined) {
            throw new ReferenceError('Block Canvas not found when get origin offset.');
        }
        return this.utils.get_injection_div_xy(this.svg_block_canvas_);
    };
    WorkspaceSvg.prototype.get_injection_div = function () {
        return this.injection_div_;
    };
    WorkspaceSvg.prototype.dispose = function () {
        var _a;
        // Stop rerendering.
        this.rendered = false;
        if (this.current_gesture_) {
            this.current_gesture_.cancel();
        }
        this.listeners_.length = 0;
        this.clear();
        // Remove from workspace database.
        this.workspace_db.remove(this);
        if (this.svg_group) {
            (0, dom_1.remove_node)(this.svg_group);
            this.svg_group = undefined;
        }
        this.svg_block_canvas_ = undefined;
        this.svg_bubble_canvas_ = undefined;
        if (this.toolbox_) {
            this.toolbox_.dispose();
            this.toolbox_ = undefined;
        }
        if (this.flyout_) {
            this.flyout_.dispose();
            this.flyout_ = undefined;
        }
        if (this._scrollbar) {
            this._scrollbar.dispose();
            // this._scrollbar = undefined;
            delete this._scrollbar;
        }
        (_a = this.grid_) === null || _a === void 0 ? void 0 : _a.dispose();
        this.grid_ = undefined;
        this.toolbox_category_callbacks_ = {};
        this.flyout_button_callbacks_ = {};
        this.custom_flyout_buttons.clear();
        if (!this.options.parentWorkspace) {
            // Top-most workspace.  Dispose of the div that the
            // SVG is injected into (i.e. injectionDiv).
            var parent_svg = this.get_parent_svg();
            if (parent_svg == undefined) {
                throw new ReferenceError();
            }
            var node = parent_svg.parentNode;
            if (node != undefined) {
                (0, dom_1.remove_node)(node);
            }
        }
        if (this.resize_handler_wrapper_) {
            this.events.unbind_event(this.resize_handler_wrapper_);
            this.resize_handler_wrapper_ = undefined;
        }
    };
    WorkspaceSvg.prototype.set_visible = function (is_visible) {
        // Tell the scrollbar whether its container is visible so it can
        // tell when to hide itself.
        if (this._scrollbar) {
            this._scrollbar.set_container_visible(is_visible);
        }
        // Tell the flyout whether its container is visible so it can
        // tell when to hide itself.
        var flyout = this.get_flyout();
        if (flyout != undefined) {
            flyout.set_container_visible(is_visible);
        }
        var parent_svg = this.get_parent_svg();
        if (parent_svg == undefined) {
            throw new ReferenceError('Workspace may not been init.');
        }
        parent_svg.style.display = is_visible ? 'block' : 'none';
        if (this.toolbox_) {
            // Currently does not support toolboxes in mutators.
            this.toolbox_.html_div.style.display = is_visible ? 'block' : 'none';
        }
        if (is_visible) {
            // Generate list of all blocks.
            var blocks = this.get_all_blocks();
            // Render each block.
            for (var i = blocks.length - 1; i >= 0; i--) {
                blocks[i].render(false);
            }
            // The window may have changed size while the workspace was hidden.
            // Resize recalculates scrollbar position, delete areas, etc.
            this.resize();
        }
        else {
            this.utils.hide_chaff(true);
        }
    };
    WorkspaceSvg.prototype.glow_stack = function (id, is_glowing_stack) {
        var block = this.get_block_by_id(id);
        if (!block) {
            throw new Error('Tried to glow stack on block that does not exist.');
        }
        block.set_glow_stack(is_glowing_stack);
    };
    /**
     * Handle a mouse-down on SVG drawing surface.
     *
     * @param e Mouse down event.
     */
    WorkspaceSvg.prototype.on_mouse_down = function (e) {
        var gesture = this.get_gesture(e);
        if (gesture) {
            gesture.handle_ws_start(e, this);
        }
    };
    WorkspaceSvg.prototype.start_drag = function (e, xy) {
        // Record the starting offset between the bubble's location and the mouse.
        var point = this.utils.mouse_to_svg(e, this.get_parent_svg(), this.get_inverse_screen_ctm());
        // Fix scale of mouse event.
        point.x /= this.scale;
        point.y /= this.scale;
        var vec2_point = gl_matrix_1.vec2.fromValues(point.x, point.y);
        this.drag_delta_xy_ = gl_matrix_1.vec2.sub(xy, xy, vec2_point);
    };
    WorkspaceSvg.prototype.move_drag = function (e) {
        var point = this.utils.mouse_to_svg(e, this.get_parent_svg(), this.get_inverse_screen_ctm());
        // Fix scale of mouse event.
        point.x /= this.scale;
        point.y /= this.scale;
        var vec2_point = gl_matrix_1.vec2.fromValues(point.x, point.y);
        return gl_matrix_1.vec2.fromValues(this.drag_delta_xy_[0] + vec2_point[0], this.drag_delta_xy_[1] + vec2_point[1]);
    };
    WorkspaceSvg.prototype.is_draggable = function () {
        return !!this._scrollbar;
    };
    WorkspaceSvg.prototype.clean_up = function (origin) {
        this.set_resizes_enabled(false);
        var current_group = this.events.get_group();
        this.events.set_group(current_group || true);
        var top_elements = this.get_top_elements(true);
        var cursor = gl_matrix_1.vec2.fromValues(0, 0);
        for (var i = 0; i < top_elements.length; i++) {
            var block = top_elements[i];
            block.sort(cursor);
        }
        if (origin && this._scrollbar) {
            var metrics = this.get_metrics();
            var x = -metrics.contentLeft - origin[0];
            var y = -metrics.contentTop - origin[1];
            this._scrollbar.set(x, y);
        }
        this.events.set_group(current_group);
        this.set_resizes_enabled(true);
    };
    WorkspaceSvg.prototype.zoom = function (x, y, amount) {
        // Scale factor.
        var speed = this.options.zoomOptions.scaleSpeed;
        var scale_change = Math.pow(speed, amount);
        // Clamp scale within valid range.
        var new_scale = Math.max(this.options.zoomOptions.minScale, Math.min(this.scale * scale_change, this.options.zoomOptions.maxScale));
        scale_change = new_scale / this.scale;
        if (this.scale == new_scale) {
            return; // No change in zoom.
        }
        if (this._scrollbar && this.svg_block_canvas_) {
            var ctm = this.svg_block_canvas_.getCTM();
            if (!ctm) {
                console.error('Get Canvas CTM failed.');
                return;
            }
            // 把 [x, y] 从 相对workspace父svg左上角的坐标 转为 相对block canvas左上角的svg坐标
            var center = this.get_parent_svg().createSVGPoint();
            center.x = x;
            center.y = y;
            center = center.matrixTransform(ctm.inverse());
            x = center.x;
            y = center.y;
            // 从 [x, y] 位置缩放 block canvas, 并修改scroll_xy,
            // 以保证resize后缩放中心点相对window的位置不变
            var matrix = ctm
                .translate(x * (1 - scale_change), y * (1 - scale_change))
                .scale(scale_change);
            // new_scale and matrix.a should be identical (within a rounding error).
            // Scroll XY are in pixels.
            gl_matrix_1.vec2.set(this.scroll_xy, matrix.e, matrix.f);
        }
        this.set_scale(new_scale);
    };
    WorkspaceSvg.prototype.zoom_center = function (type) {
        var metrics = this.get_metrics();
        var x = metrics.viewWidth / 2;
        var y = metrics.viewHeight / 2;
        this.zoom(x, y, type);
    };
    WorkspaceSvg.prototype.zoom_to_fit = function () {
        var metrics = this.get_metrics();
        var blocksBox = this.get_blocks_bounding_box();
        var blocksWidth = blocksBox.width;
        var blocksHeight = blocksBox.height;
        if (!blocksWidth) {
            return; // Prevents zooming to infinity.
        }
        var workspaceWidth = metrics.viewWidth;
        var workspaceHeight = metrics.viewHeight;
        if (this.flyout_) {
            workspaceWidth -= this.flyout_.get_width();
        }
        if (!this._scrollbar) {
            // Origin point of 0,0 is fixed, blocks will not scroll to center.
            blocksWidth += metrics.contentLeft;
            blocksHeight += metrics.contentTop;
        }
        var ratioX = workspaceWidth / blocksWidth;
        var ratioY = workspaceHeight / blocksHeight;
        this.set_scale(Math.min(ratioX, ratioY));
        this.scroll_center();
    };
    WorkspaceSvg.prototype.scroll_center = function () {
        if (!this._scrollbar) {
            // Can't center a non-scrolling workspace.
            // console.warn('Tried to scroll a non-scrollable workspace.');
            return;
        }
        // Hide the WidgetDiv without animation (zoom makes field out of place with div)
        this.widget_div.hide(true);
        // this.Blockly.DropDownDiv.hideWithoutAnimation();
        this.utils.hide_chaff(false);
        var metrics = this.get_metrics();
        var x = (metrics.contentWidth - metrics.viewWidth) / 2;
        if (this.flyout_) {
            x -= this.flyout_.get_width() / 2;
        }
        var y = (metrics.contentHeight - metrics.viewHeight) / 2;
        this._scrollbar.set(x, y);
    };
    WorkspaceSvg.prototype.center_on_block = function (id) {
        if (!this._scrollbar) {
            // console.warn('Tried to scroll a non-scrollable workspace.');
            return;
        }
        var block = this.get_block_by_id(id);
        if (!block) {
            return;
        }
        // XY is in workspace coordinates.
        var xy = block.get_relative_to_surface_xy();
        // Height/width is in workspace units.
        var block_size = block.get_height_width();
        // Find the enter of the block in workspace units.
        var block_center_y = xy[1] + block_size.height / 2;
        // In RTL the block's position is the top right of the block, not top left.
        var multiplier = this.RTL ? -1 : 1;
        var block_center_x = xy[0] + (multiplier * block_size.width / 2);
        // Workspace scale, used to convert from workspace coordinates to pixels.
        var scale = this.scale;
        // Center in pixels.  0, 0 is at the workspace origin.  These numbers may
        // be negative.
        var pixel_x = block_center_x * scale;
        var pixel_y = block_center_y * scale;
        var metrics = this.get_metrics();
        // Scrolling to here would put the block in the top-left corner of the
        // visible workspace.
        var scroll_to_block_x = pixel_x - metrics.contentLeft;
        var scroll_to_block_y = pixel_y - metrics.contentTop;
        // viewHeight and viewWidth are in pixels.
        var half_view_width = metrics.viewWidth / 2;
        var half_view_height = metrics.viewHeight / 2;
        // Put the block in the center of the visible workspace instead.
        var scroll_to_center_x = scroll_to_block_x - half_view_width;
        var scroll_to_center_y = scroll_to_block_y - half_view_height;
        this.utils.hide_chaff();
        this._scrollbar.set(scroll_to_center_x, scroll_to_center_y);
    };
    WorkspaceSvg.prototype.set_scale = function (new_scale) {
        var _a;
        new_scale = Math.max(this.options.zoomOptions.minScale, Math.min(new_scale, this.options.zoomOptions.maxScale));
        if (!this.rendered) {
            this.scale = new_scale;
        }
        var scale_event;
        if (this.events.is_enabled()) {
            scale_event = this.ui_event_factory({
                type: interfaces_1.UIEventType.SCALE,
                workspace_id: this.id,
                old_value: this.scale,
                new_value: new_scale,
            });
        }
        this.scale = new_scale;
        this.events.fire(scale_event);
        (_a = this.grid_) === null || _a === void 0 ? void 0 : _a.set_scale(this.scale);
        if (this._scrollbar) {
            this._scrollbar.resize();
        }
        else {
            this.translate(this.scroll_xy[0], this.scroll_xy[1]);
        }
        // Hide the WidgetDiv without animation (zoom makes field out of place with div)
        this.utils.hide_chaff(false, true);
        var set_svg_scale = function (svg_) {
            var transform = svg_.getAttribute('transform');
            var t_scale = "scale(" + new_scale + ")";
            svg_.setAttribute('transform', transform ? transform.replace(/scale\([0-9\.]+\)/, t_scale) : t_scale);
        };
        this.svg_block_canvas_ && set_svg_scale(this.svg_block_canvas_);
        this.svg_bubble_canvas_ && set_svg_scale(this.svg_bubble_canvas_);
        this.block_drag_surface_ && this.block_drag_surface_.set_scale(new_scale);
        if (this.flyout_) {
            // No toolbox, resize flyout.
            this.flyout_.reflow();
        }
    };
    WorkspaceSvg.prototype.scroll = function (x, y) {
        if (!this._scrollbar || !this.start_drag_metrics)
            return;
        var metrics = this.start_drag_metrics; // Cached values
        x = Math.min(x, -metrics.contentLeft);
        y = Math.min(y, -metrics.contentTop);
        x = Math.max(x, metrics.viewWidth - metrics.contentLeft -
            metrics.contentWidth);
        y = Math.max(y, metrics.viewHeight - metrics.contentTop -
            metrics.contentHeight);
        // When the workspace starts scrolling, hide the WidgetDiv without animation.
        // This is to prevent a dispoal animation from happening in the wrong location.
        this.widget_div.hide(true);
        // this.Blockly.DropDownDiv.hideWithoutAnimation();
        // Move the scrollbars and the page will scroll automatically.
        this._scrollbar.set(-x - metrics.contentLeft, -y - metrics.contentTop);
    };
    /**
     * Get the dimensions of the given workspace component, in pixels.
     *
     * @param elem The element to get the
     * dimensions of, or undefined.  It should be a toolbox or flyout, and should
     * implement get_width() and getHeight().
     * @returns An object containing width and height attributes, which
     *  will both be zero if elem did not exist.
     */
    WorkspaceSvg.getDimensionsPx_ = function (elem) {
        var width = 0;
        var height = 0;
        if (elem) {
            width = elem.get_width();
            height = elem.get_height();
        }
        return {
            width: width,
            height: height,
        };
    };
    /**
     * Get the content dimensions of the given workspace, taking into account
     * whether or not it is scrollable and what size the workspace div is on screen.
     *
     * @param ws The workspace to measure.
     * @param svg_size An object containing height and width attributes in
     * CSS pixels.Together they specify the size of the visible workspace, not
     * including areas covered up by the toolbox.
     * @returns The dimensions of the contents of the given workspace, as
     * an object containing at least
     * - height and width in pixels
     * - left and top in pixels relative to the workspace origin.
     */
    WorkspaceSvg.getContentDimensions_ = function (ws, svg_size) {
        if (ws._scrollbar) {
            return this.getContentDimensionsBounded_(ws, svg_size);
        }
        else {
            return this.getContentDimensionsExact_(ws);
        }
    };
    /**
     * Get the bounding box for all workspace contents, in pixels.
     *
     * @static
     * @param ws The workspace to inspect.
     * @returns The dimensions of the contents of the given workspace, as
     * an object containing
     * - height and width in pixels
     * - left, right, top and bottom in pixels relative to the workspace origin.
     */
    WorkspaceSvg.getContentDimensionsExact_ = function (ws) {
        // Block bounding box is in workspace coordinates.
        var blockBox = ws.get_blocks_bounding_box();
        var scale = ws.get_scale();
        // Convert to pixels.
        var width = blockBox.width * scale;
        var height = blockBox.height * scale;
        var left = blockBox.x * scale;
        var top = blockBox.y * scale;
        return {
            left: left,
            top: top,
            right: left + width,
            bottom: top + height,
            width: width,
            height: height,
        };
    };
    /**
     * Calculate the size of a scrollable workspace, which should include room for a
     * half screen border around the workspace contents.
     *
     * @param ws The workspace to measure.
     * @param svg_size An object containing height and width attributes in
     * CSS pixels.  Together they specify the size of the visible workspace, not
     * including areas covered up by the toolbox.
     * @returns The dimensions of the contents of the given workspace, as
     * an object containing
     * - height and width in pixels
     * - left and top in pixels relative to the workspace origin.
     */
    WorkspaceSvg.getContentDimensionsBounded_ = function (ws, svg_size) {
        var content = this.getContentDimensionsExact_(ws);
        // View height and width are both in pixels, and are the same as the SVG size.
        var view_width = svg_size.width || 0;
        var view_height = svg_size.height || 0;
        var margin_h = view_width;
        var margin_v = view_height;
        var content_margin = ws.options.workspace.content_margin;
        if (typeof content_margin === 'number') {
            margin_h = content_margin;
            margin_v = content_margin;
        }
        else {
            var matcher = content_margin.match(/[0-9]+%/);
            var ratio = matcher && matcher[0] && (parseFloat(matcher[0]) / 100);
            if (typeof ratio !== 'number' || isNaN(ratio)) {
                console.error('option workspace.content_margin is not a valid percentage. Using default value (50%).');
                ratio = 0.5;
            }
            margin_h = view_width * ratio;
            margin_v = view_height * ratio;
        }
        // Add a border around the content that is at least a screenful wide.
        // Ensure border is wide enough that blocks can scroll over entire screen.
        var left = Math.min(content.left - margin_h, content.right - view_width);
        var right = Math.max(content.right + margin_h, content.left + view_width);
        var top = Math.min(content.top - margin_v, content.bottom - view_height);
        var bottom = Math.max(content.bottom + margin_v, content.top + view_height);
        var dimensions = {
            left: left,
            top: top,
            height: bottom - top,
            width: right - left,
        };
        return dimensions;
    };
    WorkspaceSvg.prototype.get_metrics = function () {
        var toolbox_dimensions = WorkspaceSvg_1.getDimensionsPx_(this.toolbox_);
        var flyout = this.flyout_ || (this.toolbox_ && this.toolbox_.flyout);
        var is_flyout_consistent_visible = flyout && !flyout.is_auto_close() && flyout.is_visible();
        var flyout_dimensions = is_flyout_consistent_visible ?
            WorkspaceSvg_1.getDimensionsPx_(flyout) : { width: 0, height: 0 };
        // Contains height and width in CSS pixels.
        // svg_size is now the space taken up by the Blockly workspace, not
        //  including the toolbox or flyout.
        var svg_size = this.utils.get_svg_size(this.get_parent_svg());
        var content_dimensions = WorkspaceSvg_1.getContentDimensions_(this, svg_size);
        var absolute_left = 0;
        if (this.toolbox_ && this.toolbox_position == interfaces_1.TOOLBOX_POSITION.LEFT) {
            absolute_left += toolbox_dimensions.width;
            absolute_left += flyout_dimensions.width;
        }
        var absolute_top = 0;
        if (this.toolbox_ && this.toolbox_position == interfaces_1.TOOLBOX_POSITION.TOP) {
            absolute_top = toolbox_dimensions.height;
            absolute_top += flyout_dimensions.height;
        }
        var metrics = {
            absoluteTop: absolute_top,
            absoluteLeft: absolute_left,
            contentHeight: content_dimensions.height,
            contentWidth: content_dimensions.width,
            contentTop: content_dimensions.top,
            contentLeft: content_dimensions.left,
            viewHeight: svg_size.height || 0,
            viewWidth: svg_size.width || 0,
            viewTop: -this.scroll_xy[1],
            viewLeft: -this.scroll_xy[0],
            flyoutWidth: flyout_dimensions.width,
            flyoutHeight: flyout_dimensions.height,
            toolboxWidth: toolbox_dimensions.width,
            toolboxHeight: toolbox_dimensions.height,
            toolboxPosition: this.toolbox_position,
        };
        return metrics;
    };
    WorkspaceSvg.prototype.set_metrics = function (xy_pos) {
        var _a;
        if (!this.get_scrollbar()) {
            throw new Error('Attempt to set top level workspace scroll without scrollbars.');
        }
        var metrics = this.get_metrics();
        if ((0, base_1.is_number)(xy_pos.x)) {
            this.content_offset_by_view[0] = xy_pos.x;
            this.scroll_xy[0] = -metrics.contentLeft - xy_pos.x;
        }
        if ((0, base_1.is_number)(xy_pos.y)) {
            this.content_offset_by_view[1] = xy_pos.y;
            this.scroll_xy[1] = -metrics.contentTop - xy_pos.y;
        }
        var x = this.scroll_xy[0];
        var y = this.scroll_xy[1];
        this.translate(x, y);
        (_a = this.grid_) === null || _a === void 0 ? void 0 : _a.move_to(x, y);
    };
    WorkspaceSvg.prototype.set_toolbox_refresh_enabled = function (enabled) {
        var reenabled = (!this.toolbox_refresh_enabled_ && enabled);
        this.toolbox_refresh_enabled_ = enabled;
        if (reenabled) {
            // Newly enabled.  Trigger a refresh.
            this.refresh_toolbox_selection();
        }
    };
    WorkspaceSvg.prototype.get_toolbox_refresh_enabled = function () {
        return this.toolbox_refresh_enabled_;
    };
    WorkspaceSvg.prototype.clear = function (clear_widget) {
        if (clear_widget === void 0) { clear_widget = true; }
        this.set_resizes_enabled(false);
        this.is_clearing = true;
        var existingGroup = this.events.get_group();
        if (!existingGroup) {
            this.events.set_group(true);
        }
        if (clear_widget && this.widget_div) {
            this.widget_div.hide(true);
        }
        if (clear_widget && this.Blink.tooltip) {
            this.Blink.tooltip.hide();
        }
        while (this.top_blocks_.length) {
            this.top_blocks_[0].dispose();
        }
        while (this.top_comments.length) {
            this.top_comments[0].dispose();
        }
        if (!existingGroup) {
            this.events.set_group(false);
        }
        this.is_clearing = false;
        this.set_resizes_enabled(true);
    };
    WorkspaceSvg.prototype.register_button_callback = function (key, func) {
        if (!(0, base_1.is_func)(func)) {
            console.error('Button callbacks must be functions.');
        }
        if (this.flyout_button_callbacks_) {
            this.flyout_button_callbacks_[key] = func;
        }
    };
    WorkspaceSvg.prototype.get_button_callback = function (key) {
        return this.flyout_button_callbacks_ ? this.flyout_button_callbacks_[key] : undefined;
    };
    WorkspaceSvg.prototype.remove_button_callback = function (key) {
        if (this.flyout_button_callbacks_) {
            this.flyout_button_callbacks_[key] = undefined;
        }
    };
    WorkspaceSvg.prototype.remove_toolbox_category_callback = function (key) {
        if (this.toolbox_category_callbacks_) {
            this.toolbox_category_callbacks_[key] = undefined;
        }
    };
    WorkspaceSvg.prototype.clear_gesture = function () {
        this.current_gesture_ = undefined;
    };
    /**
     * Register a custom flyout button.
     * @param {string} key type of the flyout button.
     * @param {(width?:number) => BkySVGElement} func A function to generate svg group of the button.
     */
    WorkspaceSvg.prototype.register_flyout_button = function (key, func) {
        this.custom_flyout_buttons.set(key, func);
    };
    WorkspaceSvg.prototype.get_custom_flyout_button = function (key) {
        return this.custom_flyout_buttons.get(key);
    };
    WorkspaceSvg.prototype.set_read_only = function (read_only) {
        this.options.readOnly = read_only;
    };
    WorkspaceSvg.prototype.set_hotkey_enable = function (enable) {
        this.is_hotkey_enable = enable;
    };
    WorkspaceSvg.prototype.get_hotkey_enable = function () {
        return this.is_hotkey_enable;
    };
    WorkspaceSvg.prototype.show_external_comment_editor = function (old_text) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, window.prompt('Enter comment text', old_text) || ''];
            });
        });
    };
    WorkspaceSvg.prototype.register_comment_editor = function (cb) {
        this.show_external_comment_editor = cb;
    };
    WorkspaceSvg.prototype.for_each_element_in_stack = function (id, cb, ordered) {
        var _a;
        if (ordered === void 0) { ordered = false; }
        var element = this.Blink.mainWorkspace.get_element_from_db(id);
        (_a = element === null || element === void 0 ? void 0 : element.get_top_parent()) === null || _a === void 0 ? void 0 : _a.for_each_descendant_element(cb, ordered);
    };
    var WorkspaceSvg_1;
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Blink)
    ], WorkspaceSvg.prototype, "Blink", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Msg)
    ], WorkspaceSvg.prototype, "Msg", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], WorkspaceSvg.prototype, "utils", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.context_menu)
    ], WorkspaceSvg.prototype, "context_menu", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.xml)
    ], WorkspaceSvg.prototype, "xml", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], WorkspaceSvg.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.widget_div)
    ], WorkspaceSvg.prototype, "widget_div", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.runtime_data)
    ], WorkspaceSvg.prototype, "runtime_data", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.theme)
    ], WorkspaceSvg.prototype, "theme", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.workspace_db)
    ], WorkspaceSvg.prototype, "workspace_db", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.UIEvent)
    ], WorkspaceSvg.prototype, "ui_event_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.ChangeEvent)
    ], WorkspaceSvg.prototype, "change_event_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.CreateEvent)
    ], WorkspaceSvg.prototype, "create_event_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.WorkspaceComment)
    ], WorkspaceSvg.prototype, "workspace_comment_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.BlockSvg)
    ], WorkspaceSvg.prototype, "block_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Toolbox)
    ], WorkspaceSvg.prototype, "toolbox_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.VerticalFlyout)
    ], WorkspaceSvg.prototype, "flyout_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Gesture)
    ], WorkspaceSvg.prototype, "gesture_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.ConnectionDB)
    ], WorkspaceSvg.prototype, "connection_db_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.WorkspaceAudio)
    ], WorkspaceSvg.prototype, "workspace_audio_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Grid)
    ], WorkspaceSvg.prototype, "grid_factory", void 0);
    WorkspaceSvg = WorkspaceSvg_1 = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
        /**
         * Class for a workspace.  This is an onscreen area
         *  with optional scrollbars, bubbles, and dragging.
         */
    ], WorkspaceSvg);
    return WorkspaceSvg;
}());
exports.WorkspaceSvg = WorkspaceSvg;
