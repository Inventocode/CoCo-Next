"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockSvg = void 0;
var tslib_1 = require("tslib");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("../../di");
var interfaces_1 = require("../../interfaces");
var constants_1 = require("../../constants");
var asserts_1 = require("../../utils/asserts");
var maths_1 = require("../../utils/maths");
var dom_1 = require("../../utils/dom");
var base_1 = require("../../utils/base");
var color_1 = require("../../utils/color");
var is_1 = require("../../utils/is");
var array_1 = require("../../utils/array");
var string_1 = require("../../utils/string");
var svg_filter_1 = require("../../svg_filter");
var workspace_element_1 = require("../workspace_element");
var BlockSvg = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(BlockSvg, _super);
    /**
     * Class for a block's SVG representation.
     * Not normally called directly, workspace.new_block() is preferred.
     * @param workspace The block's workspace.
     * @param [prototype_name] Name of the language object containing
     * type-specific functions for this block.
     * @param options 新积木的配置，如是否insertion_marker、预设id等。
     */
    function BlockSvg(options) {
        var _a;
        var _this = _super.call(this, options.workspace) || this;
        _this.element_type = 'block';
        /**
         * 积木类型
         */
        _this.type = '';
        /**
         * tooltip for the block.
         */
        _this.tooltip = '';
        /**
         * 积木的所有input
         */
        _this.inputList = [];
        /**
         * 积木的所有fields宽度相加后再加上左右padding的宽度，即占位宽度
         */
        _this.width = 0;
        /**
         * 积木视觉上svg path宽度
         * 有可能与width不同。如Kids积木的field向右溢出，svg path宽度小于width
         */
        _this.svg_path_width = 0;
        /**
         * 积木首行的宽度，用于摆放注释。
         */
        _this.first_row_width = 0;
        /**
         * 积木首行的高度，用于摆放注释。
         */
        _this.first_row_height = 0;
        /**
         * Whether block event is initialized
         */
        _this.event_initialized = false;
        /**
         * Block's warning icon (if any).
         */
        _this.warning = undefined;
        /**
         * 连接输出的 Connection，为 undefined 代表无输出
         */
        _this.output_connection = undefined;
        /**
         * 连接上一积木（上方）的 Connection，为 undefined 代表上方不可连接积木
         */
        _this.previous_connection = undefined;
        /**
         * 连接下一积木（下方）的 Connection，为 undefined 代表下方不可连接积木
         */
        _this.next_connection = undefined;
        _this.is_shadow_ = false;
        /**
         * Record all child blocks of this block.
         */
        _this.child_blocks = [];
        _this.collapsed_ = false;
        _this.collapsed_dirty = false;
        _this._is_insertion_marker = false;
        _this.getInput = _this.get_input;
        /**
         * Get whether the block is disabled or not due to parents.
         * The block's own disabled property is not considered.
         * @return True if disabled.
         */
        _this.get_inherited_disabled = function () {
            var ancestor = _this.get_surround_parent();
            while (ancestor) {
                if (ancestor.disabled) {
                    return true;
                }
                ancestor = ancestor.get_surround_parent();
            }
            // Ran off the top.
            return false;
        };
        _this.get_root_block = _this.get_top_parent;
        _this.getFieldValue = _this.get_field_value;
        /**
         * Initialize this block using a cross-platform, internationalization-friendly
         * JSON description.
         * @param json Structured data describing the block.
         */
        _this.jsonInit = function (origin_json) {
            var json = (0, base_1.clone_deep)(origin_json);
            var warningPrefix = json['type'] ? "Block \"" + json['type'] + "\": " : '';
            // Validate inputs.
            (0, asserts_1.assert)(json['output'] == undefined || json['previousStatement'] == undefined, warningPrefix + "Must not have both an output and a previousStatement.");
            // Set basic properties of block.
            if (json['colour'] != undefined) {
                _this.set_colour_from_json(json);
            }
            // Interpolate the message blocks.
            var i = 0;
            var current_message = json["message" + i];
            while (current_message != undefined) {
                var args = json["args" + i];
                var last_dummy_align = json["lastDummyAlign" + i];
                _this.interpolate_(
                // Append customized labels in msgs or fields decoded from xml
                current_message, args || [], last_dummy_align);
                i++;
                current_message = json["message" + i];
            }
            if (json['inputsInline'] != undefined) {
                _this.inputs_inline = json['inputsInline'];
            }
            // Set output and previous/next connections.
            if (json['output'] !== undefined) {
                var output_check = json['output'] === true ? undefined : json['output'];
                _this.set_output(true, output_check, json['required_context']);
            }
            if (json['previousStatement'] !== undefined) {
                _this.set_previous_statement(true);
            }
            if (json['nextStatement'] !== undefined) {
                _this.set_next_statement(true);
            }
            if (json['enableContextMenu'] != undefined) {
                var rawValue = json['enableContextMenu'];
                _this.enable_context_menu = !!rawValue;
            }
            if (json['helpUrl'] != undefined) {
                var rawValue = json['helpUrl'];
                var localizedValue = _this.utils.replace_message_references(rawValue);
                _this.set_help_url(localizedValue);
            }
            if ((0, base_1.is_string)(json['extensions'])) {
                console.error("\n        JSON attribute \"extensions\" should be an array of strings.\n        Found raw string in JSON for \"" + json['type'] + "\" block.\n      ");
            }
            if (json['tooltip'] != undefined) {
                var rawValue = json['tooltip'];
                var localizedValue = _this.utils.replace_message_references(rawValue);
                _this.set_tooltip(localizedValue);
            }
            // Add the mutator to the block
            if (json['mutator'] != undefined) {
                _this.extensions.apply_mutator(json['mutator'], _this);
            }
            if (Array.isArray(json['extensions'])) {
                var extension_names = json['extensions'];
                for (var j = 0; j < extension_names.length; ++j) {
                    _this.extensions.apply(extension_names[j], _this);
                }
            }
            if (json['outputShape'] != undefined) {
                _this.set_output_shape(json['outputShape']);
            }
            if (json['category'] != undefined) {
                _this.set_category(json['category']);
            }
            if (json.context_menu) {
                _this.context_menu_options_setting = json.context_menu;
            }
        };
        _this.appendDummyInput = _this.append_dummy_input;
        _this.context_menu_options_setting = _this.workspace.options.context_menu.block;
        _this.prevent_disable_style_change = false;
        /**
         * Whether the block's whole stack glows as if running.
         */
        _this.is_glowing_stack = false;
        /**
         * Whether the block is flashing or not.
         */
        _this.is_flashing = false;
        /**
         * Remove an input from this block.
         * @param name The name of the input.
         * @param opt_quiet True to prevent error if input is not present.
         * @throws if the input is not present and
         *     opt_quiet is not true.
         */
        // TODO: 将来移除
        _this.removeInput = _this.remove_input;
        _this.visibility_ = interfaces_1.BlockVisibility.VISIBLE;
        _this.visibility_for_undo = undefined;
        // 记录积木是否可拼接
        _this.connectable_ = true;
        _this.opacity = 1;
        // 从json配置里读取并设置，然而并没有业务配置了也没有业务在使用
        _this.category_ = undefined;
        _this.output_shape = undefined;
        _this.help_url = '';
        _this.colour_ = _this.theme.block_color.DEFAULT.fill;
        _this.border_colour = _this.theme.block_color.DEFAULT.border;
        var workspace = options.workspace, prototype_name = options.prototype_name;
        prototype_name && ((_a = _this.svg_group) === null || _a === void 0 ? void 0 : _a.classList.add(prototype_name));
        _this.id = (options.id && !workspace.get_block_by_id(options.id))
            ? options.id : (0, maths_1.gen_uid)();
        _this._is_insertion_marker = !!options.is_insertion_marker;
        _this.enable_context_menu = true;
        if (prototype_name) {
            _this.type = prototype_name;
            var prototype = _this.Blink.Blocks[prototype_name];
            if (prototype == undefined) {
                throw new Error("Error: Unknown block type " + prototype_name + ".");
            }
            Object.assign(_this, prototype);
        }
        _this.inputs_inline_default = _this.inputs_inline;
        workspace.blockDB_.set(_this.id, _this);
        workspace.add_top_block(_this);
        var create_event = undefined;
        if (_this.events.is_enabled()) {
            create_event = _this.create_event_factory({
                block: _this,
            });
        }
        _this.svg_path = (0, dom_1.create_svg_element)('path', { 'class': 'blocklyPath' }, _this.svg_group);
        _this.rendered = false;
        // Bind mouse event to show tooltip when options.tooltip is true
        if (_this.Blink.mainWorkspace.options.tooltip) {
            _this.svg_path.tooltip = function () {
                if ((0, base_1.is_func)(_this.tooltip)) {
                    return _this.tooltip();
                }
                return _this.tooltip;
            };
            _this.Blink.tooltip.bind_mouse_event(_this.svg_path);
        }
        // Call an initialization function, if it exists.
        if ((0, base_1.is_func)(_this.init)) {
            // if there is derived class constructor.
            // Make sure this.init implement after derived class constructor.
            // if there is not derived class.Block can implement this.init.
            _this.init();
        }
        // Bind an onchange function, if it exists.
        if ((0, base_1.is_func)(_this.onchange)) {
            _this.set_on_change(_this.onchange);
        }
        if (create_event) {
            _this.events.fire(create_event);
        }
        return _this;
    }
    Object.defineProperty(BlockSvg.prototype, "onchange", {
        get: function () { return this._onchange; },
        set: function (onchange) {
            this._onchange = onchange === null || onchange === void 0 ? void 0 : onchange.bind(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Render function for the block.
     * @param [opt_bubble] If false, just render this block.
     * If true, also render block's parent, grandparent, etc.  Defaults to false.
     */
    BlockSvg.prototype.render = function (opt_bubble) {
        console.warn("\n      why: opt_bubble " + opt_bubble + "\n    ");
    };
    /**
     * @deprecated
     * 积木Warning功能已启用。
     */
    BlockSvg.prototype.set_warning_text = function (text, opt_id) {
        console.error("Warning is deprecated " + text + " " + opt_id);
    };
    /**
     * Return the previous statement block directly connected to this block.
     * @return The previous statement block or undefined.
     */
    BlockSvg.prototype.get_previous_block = function () {
        return this.previous_connection && this.previous_connection.targetBlock();
    };
    /**
     * Whether the block is a start block.
     */
    BlockSvg.prototype.is_starting_block = function () {
        return (this.output_connection == undefined) &&
            (this.previous_connection == undefined) &&
            this.type !== 'factory_base';
    };
    /**
     * Whether the block is an end block.
     */
    BlockSvg.prototype.is_ending_block = function () {
        return this.next_connection == undefined
            && this.output_connection == undefined
            && this.previous_connection != undefined;
    };
    /**
     * Whether the block is an output block.
     */
    BlockSvg.prototype.is_output_block = function () {
        return !this.previous_connection
            && !this.next_connection
            && !this.is_shadow()
            && !!this.output_connection;
    };
    /**
     * Check if the block includes input named DO/STACK
     */
    BlockSvg.prototype.is_include_special_input = function () {
        var _this = this;
        return constants_1.SPECIAL_CONNECTION_INPUT_NAME
            .some(function (input_name) { return !!_this.get_input(input_name); });
    };
    /**
     * Check whether the block is a c or e shape block.
     * Head block is excluded.
     * @returns true if it is c/e shape.
     */
    BlockSvg.prototype.is_wrap_shape = function () {
        return !this.is_starting_block() &&
            this.inputList.some(function (input) { return input.type === interfaces_1.InputType.STATEMENT; });
    };
    /**
     * Set whether the block is a shadow block.
     * @param shadow True if shadow block
     */
    BlockSvg.prototype.set_shadow = function (shadow) {
        this.is_shadow_ = shadow;
    };
    /**
     * Whether the block is a shadow block.
     */
    BlockSvg.prototype.is_shadow = function () {
        return this.is_shadow_;
    };
    /**
     * 当前积木是否可被删除。
     * @override 处理了shadow的情况。
     */
    BlockSvg.prototype.is_deletable = function () {
        return this.deletable_ &&
            !this.is_shadow_ &&
            !(this.workspace && this.workspace.get_options().readOnly);
    };
    /**
     * **当前** 积木是否可被移动。
     * @override 处理了shadow的情况。
     */
    BlockSvg.prototype.is_movable = function () {
        return this.movable_ && !this.is_shadow_;
    };
    /**
     * Find all the blocks that are directly nested inside this one.
     * Includes value and statement inputs, as well as following statement.
     * Excludes any connection on an output tab or any preceding statement.
     * Blocks are optionally sorted by position; top to bottom.
     * @param ordered whether the returned blocks should be sorted.
     */
    BlockSvg.prototype.get_children = function (ordered) {
        if (!ordered) {
            return this.child_blocks;
        }
        var blocks = [];
        for (var i = 0; i < this.inputList.length; i++) {
            var input = this.inputList[i];
            if (input.connection) {
                var child = input.connection.targetBlock();
                if (child) {
                    blocks.push(child);
                }
            }
        }
        var next = this.get_next_block();
        if (next) {
            blocks.push(next);
        }
        return blocks;
    };
    /**
     * Whether the block is collapsed.
     */
    BlockSvg.prototype.is_collapsed = function () {
        return this.collapsed_;
    };
    /**
     * Set whether the block is collapsed or not.
     * if this block is rendered currently, the layout is updated as well.
     *  Otherwise update_collapsed should be called manually after block rendered.
     * @param collapsed True if collapsed.
     * @param force_update True if the layout should be refreshed even if collapsed status not changed.
     */
    BlockSvg.prototype.set_collapsed = function (collapsed, force_update) {
        if (force_update === void 0) { force_update = false; }
        var curr_collapsed = this.is_collapsed();
        if (curr_collapsed == collapsed && !force_update) {
            return;
        }
        this.collapsed_dirty = true;
        this.collapsed_ = collapsed;
        if (this.events.is_enabled() && curr_collapsed !== collapsed) {
            this.events.fire(this.change_event_factory('collapsed', {
                block: this,
                old_value: curr_collapsed,
                new_value: collapsed,
            }));
        }
        // 如果可以保证折叠的顺序是从内向外，而展开的顺序是从外向内的话，强制刷新是不需要的。
        // 但有一些业务操作会造成被嵌套的积木在外层积木折叠后才被折叠或展开，此时内层积木的变化可能会引起外层积木样式的变化。
        // 比如，“折叠/展开全部”的功能，在折叠了外层积木后再使用折叠全部，会造成这一类的顺序问题。顺序问题会造成样式问题。
        // 如果需要强制刷新，则需要刷新整个积木块中所有积木的折叠状态。
        if (force_update) {
            var relates = this.get_top_parent().get_descendants(true, true);
            for (var i = relates.length - 1; i >= 0; i--) {
                relates[i].update_collapsed(force_update);
            }
            return;
        }
        if (!this.rendered) {
            return;
        }
        this.update_collapsed();
    };
    /**
     * 将积木分组，类似于积木折叠的功能。
     * https://www.tapd.cn/61080891/prong/stories/view/1161080891001043223
     */
    BlockSvg.prototype.hide_into_group = function (group_name, options) {
        var _this = this;
        var _a, _b;
        if (options === void 0) { options = {}; }
        this.events.disable();
        var group_name_generator = ((_b = (_a = this.workspace.options.block_group) === null || _a === void 0 ? void 0 : _a.get_default_name) === null || _b === void 0 ? void 0 : _b.bind(this, this)) ||
            this.to_string.bind(this);
        var block_group = this.block_group_factory({
            workspace: this.workspace,
            origin_block: this,
            group_name: group_name || group_name_generator(),
            id: options.id,
            on_release: function () {
                (0, asserts_1.assert)(_this.parent_group);
                _this.events.fire(_this.change_event_factory('group_block', {
                    block: _this,
                    old_value: [_this.parent_group.id, _this.parent_group.group_name, _this.parent_group.group_stop_at || ''],
                    new_value: undefined,
                }));
                _this.parent_group = undefined;
            },
            origin_xy: options.origin_xy,
            group_stop_at: options.group_stop_at,
        });
        block_group.init_svg();
        block_group.render();
        this.parent_group = block_group;
        this.events.enable();
        if (this.events.is_enabled()) {
            this.events.fire(this.change_event_factory('group_block', {
                block: this,
                old_value: undefined,
                new_value: [this.parent_group.id, this.parent_group.group_name, this.parent_group.group_stop_at || ''],
            }));
        }
    };
    /**
     * Update block collapsed / expanded layout.
     * If the collapsed_ value has not changed since last render, or this block is
     *  not rendered, nothing will happen.
     * @param force_update true if the block appearance should be updated even if
     *  collapsed status is not dirty. Defaults to false.
     */
    BlockSvg.prototype.update_collapsed = function (force_update) {
        if (force_update === void 0) { force_update = false; }
        if (!this.collapsed_dirty && !force_update)
            return;
        // 阻止input变化过程中的重复渲染
        var original_rendered = this.rendered;
        this.rendered = false;
        // Show/hide the inputs.
        // 普通头积木/c口积木包裹部分会在input.set_visible中被处理
        for (var i = 0; i < this.inputList.length; i++) {
            var input = this.inputList[i];
            input.set_visible(!this.collapsed_);
        }
        // 处理被错误配置的积木，主要是没有使用statement input的头积木
        // NEED_COLLAPSE_CHILDREN_BLOCKS child_blocks can be collapsed
        if (constants_1.NEED_COLLAPSE_CHILDREN_BLOCKS.includes(this.type) && this.next_connection) {
            if (!this.collapsed_) {
                this.next_connection.unhide_all();
            }
            else {
                this.next_connection.hide_all();
            }
            var child = this.next_connection.targetBlock();
            child && child.set_visible_as_child(!this.collapsed_);
        }
        if (this.comment) {
            this.set_comment_visible(!this.collapsed_);
        }
        if (this.collapsed_) {
            this.warning && this.warning.set_expanded(false);
            if (force_update) {
                this.remove_input(constants_1.COLLAPSED_INPUT_NAME, true);
            }
            var text = this.to_string(this.theme.blink_params.COLLAPSE_CHARS);
            this.append_dummy_input(constants_1.COLLAPSED_INPUT_NAME).append_field(text).init();
        }
        else {
            this.remove_input(constants_1.COLLAPSED_INPUT_NAME, true);
        }
        this.rendered = original_rendered;
        if (original_rendered || force_update) {
            this.render();
            // Don't bump neighbours.
            // Although bumping neighbours would make sense, users often collapse
            // all their functions and store them next to each other.
            // Expanding and bumping causes all their definitions to go out of alignment.
        }
        this.collapsed_dirty = false;
    };
    /**
     * 在折叠/展开时，显示/隐藏积木注释。
     */
    BlockSvg.prototype.set_comment_visible = function (visible) {
        if (!this.comment)
            return;
        var _visible = visible && !this.is_collapsed();
        if (_visible) {
            this.comment.get_svg_root().style.display = 'block';
            this.comment.reposition();
            this.comment.bring_to_front();
        }
        else {
            this.comment.get_svg_root().style.display = 'none';
        }
    };
    /**
     * 由于父积木的折叠/展开，造成自身的显示/隐藏。
     * 会同时处理所有后续积木注释的显示/隐藏。
     *
     * 仅在折叠操作中使用。
     */
    BlockSvg.prototype.set_visible_as_child = function (visible) {
        this.rendered = visible;
        this.get_svg_root().style.display = visible ? 'block' : 'none';
        this.get_descendants(false, true).forEach(function (block) {
            var is_comment_visible = visible &&
                !block.is_collapsed() &&
                !block.get_collapsed_surround_parent();
            block.set_comment_visible(is_comment_visible);
        });
    };
    /**
     * Get whether the block is collapsed or not due to surround parents.
     * The block's own collapse status property is not considered.
     * @return the collapsed surround parent block if exists, otherwise undefined
     */
    BlockSvg.prototype.get_collapsed_surround_parent = function () {
        var surround_block = this.get_surround_parent();
        if (surround_block) {
            if (surround_block.is_collapsed()) {
                return surround_block;
            }
            return surround_block.get_collapsed_surround_parent();
        }
        // ‘当开始被点击‘积木不是surround_parent，但折叠时会折叠子积木
        var parent_block = this.get_parent();
        while (parent_block) {
            if (constants_1.NEED_COLLAPSE_CHILDREN_BLOCKS.includes(parent_block.type)
                && parent_block.is_collapsed()) {
                break;
            }
            parent_block = parent_block.get_parent();
        }
        return parent_block;
    };
    BlockSvg.prototype.is_insertion_marker = function () {
        return this._is_insertion_marker;
    };
    /**
     * Sets a callback function to use whenever the block's parent workspace changes,
     * replacing any prior onchange handler. This is usually only called from the constructor,
     * the block type initializer function, or an extension initializer function.
     * @param onchange_fn The callback to call when the block's workspace changes.
     * @throws if onchangeFn is not falsey or a function.
     */
    BlockSvg.prototype.set_on_change = function (onchange_fn) {
        if (this.onchange && this.workspace) {
            this.workspace.remove_change_listener(this.onchange);
        }
        this.onchange = onchange_fn;
        this.workspace.add_change_listener(this.onchange);
    };
    /**
     * Sets a callback function to use whenever the block itself changes.
     * @param onchange_fn The callback to call when the block changes.
     */
    BlockSvg.prototype.set_on_block_change = function (onchange_fn) {
        var _this = this;
        if (this.is_in_flyout) {
            return;
        }
        if (this.is_insertion_marker()) {
            return;
        }
        var event_filtered_fn = function (e) {
            if (e.type !== interfaces_1.BlockEventType.CREATE
                && e.type !== interfaces_1.BlockEventType.CHANGE
                && e.type !== interfaces_1.BlockEventType.DELETE) {
                return;
            }
            if (_this.id === e.get_block_id()) {
                onchange_fn.call(_this, e);
            }
        };
        this.workspace.add_change_listener(event_filtered_fn);
    };
    /**
     * connect a block to the input
     * @param str xml string of block
     * @param input input to connect
     */
    BlockSvg.prototype.append_block_input = function (str, input) {
        var block = this.generate_block(str);
        var parentConnection = input.connection;
        if (parentConnection) {
            var blockConnection = block.output_connection || block.previous_connection;
            blockConnection && blockConnection.connect(parentConnection);
            parentConnection.set_hidden(true);
        }
        return block;
    };
    /**
     * generate a block by its xml string
     * @param str xml string
     */
    BlockSvg.prototype.generate_block = function (str) {
        var childShadowNode = this.utils.string_to_dom(str);
        var block = this.xml.dom_to_block(childShadowNode, this.workspace);
        return block;
    };
    /**
     * Interpolate a message description onto the block.
     * @param message Text contains interpolation tokens (%1, %2, ...)
     *     that match with fields or inputs defined in the args array.
     * @param args Array of arguments to be interpolated.
     * @param lastDummyAlign If a dummy input is added at the end,
     *     how should it be aligned?
     */
    BlockSvg.prototype.interpolate_ = function (message, args, lastDummyAlign) {
        var tokens = this.utils.tokenize_interpolation(message);
        // Interpolate the arguments.  Build a list of elements.
        var indexDup = [];
        var indexCount = 0;
        var elements = [];
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token == 'number') {
                if (token <= 0 || token > args.length) {
                    throw new Error("Block \"" + this.type + "\": " +
                        ("Message index %" + token + " out of range."));
                }
                if (indexDup[token]) {
                    throw new Error("Block \"" + this.type + "\": " +
                        ("Message index %" + token + " duplicated."));
                }
                indexDup[token] = true;
                indexCount++;
                elements.push(args[token - 1]);
            }
            else {
                token = token.trim();
                if (token) {
                    elements.push(token);
                }
            }
        }
        if (indexCount != args.length) {
            throw new Error("Block \"" + this.type + "\": Message does not reference all " + args.length + " arg(s). Massage: " + message);
        }
        // Add last dummy input if needed.
        var last_element = elements[elements.length - 1];
        if (elements.length &&
            (typeof last_element == 'string' ||
                last_element['type'].startsWith('field_'))) {
            var dummyInput = {
                type: 'input_dummy',
                name: '',
            };
            if (lastDummyAlign) {
                Object.assign(dummyInput, {
                    align: lastDummyAlign,
                });
            }
            elements.push(dummyInput);
        }
        // Populate block with inputs and fields.
        var field_stack = [];
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            // Resolve string as field label
            if (typeof element == 'string') {
                field_stack.push([element, undefined]);
                continue;
            }
            var field = undefined;
            var input = undefined;
            if (typeof element == 'string') {
                field = this.field_label_factory({ text: element });
                continue;
            }
            // Explicit custom field.
            if (element['custom']) {
                field = this.init_custom_field(element);
                field_stack.push([field, element['name']]);
                continue;
            }
            // Build-in field or implicit custom field (caused by old version).
            switch (element['type']) {
                case 'input_shadow':
                    input = this.append_shadow_input_json(element['name'], element['field_type'], element['default_text']);
                    break;
                case 'input_value':
                    input = this.append_value_input(element['name'], undefined, undefined, element.default_shadow);
                    break;
                case 'input_statement':
                    input = this.append_statement_input(element['name'], undefined, element['provided_context']);
                    break;
                case 'input_dummy':
                    input = this.append_dummy_input(element['name']);
                    break;
                case 'field_label':
                    field = this.field_label_factory({
                        text: this.utils.replace_message_references(element['text']),
                        opt_class: element['class'],
                    });
                    break;
                case 'field_label_serializable':
                    field = this.field_label_serializable_factory({
                        text: this.utils.replace_message_references(element['text']),
                        opt_class: element['class'],
                    });
                    break;
                case 'field_input':
                    field = this.new_field_text_input_from_json(element);
                    break;
                case 'field_colour':
                    field = this.field_colour_factory({
                        colour: element['colour'],
                        opt_validator: element['validator'],
                    });
                    break;
                case 'field_dropdown':
                    field = this.field_dropdown_factory({
                        menu_generator: element['options'],
                        opt_onchange: element['onchange'],
                        selected_index: element['selected_index'],
                        opt_validator: element['validator'],
                    });
                    break;
                case 'field_dropdown_advanced':
                    field = this.field_dropdown_factory({
                        menu_generator: [],
                        opt_onchange: element['onchange'],
                        selected_index: element['selected_index'],
                        opt_validator: element['validator'],
                        menu_generator_advanced: element['advanced_options'],
                    });
                    break;
                case 'field_image':
                case 'field_button':
                    var _a = this.parse_field_image_param_from_json(element), src = _a.src, width = _a.width, height = _a.height, alt = _a.alt, callback = _a.callback, circle = _a.circle;
                    field = element.type === 'field_image'
                        ? this.field_image_factory({
                            src: src,
                            width: width,
                            height: height,
                            opt_alt: alt,
                        })
                        : this.field_button_factory({
                            src: src,
                            width: width,
                            height: height,
                            opt_alt: alt, opt_callback: callback, has_circle: circle,
                        });
                    break;
                case 'field_icon':
                    if (!element.is_head) {
                        break;
                    }
                    field = this.field_icon_factory({
                        src: element['src'],
                        opt_alt: element['alt'],
                        opt_is_head: element['is_head'],
                    });
                    break;
                case 'mutation_add_button':
                    field = this.mutation_add_factory(undefined);
                    break;
                case 'mutation_remove_button':
                    field = this.mutation_remove_factory(undefined);
                    break;
                case 'field_number':
                    field = this.field_number_factory({
                        opt_value: element['value'],
                        opt_min: element['min'],
                        opt_max: element['max'],
                        opt_precision: element['precision'],
                        opt_controller: element['controller'],
                    });
                    break;
                case 'field_textdropdown':
                    field = this.field_text_dropdown_factory(element.options);
                    break;
                case 'field_multiline_input':
                    field = this.field_multiline_input(element);
                    break;
                case 'field_default_value':
                    field = this.field_default_value(element);
                    break;
                default:
                    // Error handling: custom field without [custom: true] ?
                    field = this.init_custom_field(element);
            }
            if (field) {
                if (element.margin_left !== undefined) {
                    field.margin_left = element.margin_left;
                }
                field_stack.push([field, element['name']]);
            }
            else if (input) {
                if (element['check']) {
                    input.set_check(element['check']);
                }
                if (element.margin_left !== undefined) {
                    input.margin_left = element.margin_left;
                }
                for (var j = 0; j < field_stack.length; j++) {
                    input.append_field(field_stack[j][0], field_stack[j][1]);
                }
                field_stack.length = 0;
            }
        }
    };
    /**
     * init a field with customized args
     */
    BlockSvg.prototype.init_custom_field = function (custom_field_config) {
        var field = this.registry.field.from_json(custom_field_config);
        if (field) {
            return field;
        }
        // TODO: 下面这个强行往Blockly上挂Field的方法为field_lattice暂时保留，计划废除
        // 外部自定义的 field，尝试初始化构造函数
        var type = custom_field_config['type'];
        if (type) {
            var type_constructor = type.split('_').map(function (value) { return value[0].toUpperCase() + value.slice(1); }).join('');
            if (window.Blockly[type_constructor]) {
                field = new window.Blockly[type_constructor](custom_field_config);
            }
        }
        if (!field) {
            throw new ReferenceError('Trying to init an undefined type of field');
        }
        return field;
    };
    /**
     * Fetches the named input object.
     * @param name The name of the input.
     * @return The input object, or undefined if input does not exist.
     */
    BlockSvg.prototype.get_input = function (name) {
        for (var i = 0; i < this.inputList.length; i++) {
            var input = this.inputList[i];
            if (input.name == name) {
                return input;
            }
        }
        // This input does not exist.
        return undefined;
    };
    /**
     * @override change layout.
     */
    BlockSvg.prototype.set_disabled = function (disabled) {
        var event = undefined;
        if (this.disabled !== disabled) {
            if (this.events.is_enabled()) {
                event = this.change_event_factory('disabled', {
                    block: this,
                    old_value: this.disabled,
                    new_value: disabled,
                });
            }
            this.disabled = disabled;
        }
        this.is_rendered() && this.update_disabled();
        if (event) {
            this.events.fire(event);
        }
    };
    /**
     * @override handle fields.
     */
    BlockSvg.prototype.set_editable = function (editable) {
        this.editable_ = editable;
        for (var i = 0; i < this.inputList.length; i++) {
            var input = this.inputList[i];
            for (var j = 0; j < input.fieldRow.length; j++) {
                var field = input.fieldRow[j];
                field.update_editable();
            }
        }
    };
    /**
     * Set whether the connections are hidden (not tracked in a database) or not.
     * Recursively walk down all child blocks (except collapsed blocks).
     * @param hidden True if connections are hidden.
     */
    BlockSvg.prototype.set_connections_hidden = function (hidden) {
        if (!hidden && this.is_collapsed()) {
            if (this.output_connection) {
                this.output_connection.set_hidden(hidden);
            }
            if (this.previous_connection) {
                this.previous_connection.set_hidden(hidden);
            }
            // 错误配置的头积木不显示下接
            if (this.next_connection && !constants_1.NEED_COLLAPSE_CHILDREN_BLOCKS.includes(this.type)) {
                this.next_connection.set_hidden(hidden);
                var child = this.next_connection.targetBlock();
                if (child) {
                    child.set_connections_hidden(hidden);
                }
            }
        }
        else {
            var my_connections = this.get_connections(true);
            for (var i = 0; i < my_connections.length; i++) {
                var connection = my_connections[i];
                connection.set_hidden(hidden);
                if (connection.is_superior()) {
                    var child = connection.targetBlock();
                    if (child) {
                        child.set_connections_hidden(hidden);
                    }
                }
            }
        }
    };
    /**
     * Return the parent block that surrounds the current block, or undefined if this
     * block has no surrounding block.  A parent block might just be the previous
     * statement, whereas the surrounding block is an if statement, while loop, etc,
     * or a block group.
     * @return The block or group that surrounds the current block.
     */
    BlockSvg.prototype.get_surround_parent = function () {
        var block = this;
        var prev_block;
        do {
            prev_block = block;
            block = block.get_parent() || block.parent_group; // 如果积木不存在parent，则检查其是否被包裹在分组内。
            if (!block) {
                // Ran off the top.
                return undefined;
            }
        } while (block.get_next_block() == prev_block);
        // This block is an enclosing parent, not just a statement in a stack.
        return block;
    };
    /**
     * 找到包裹当前积木的最外层积木组。
     * 用途：
     *  有时需要在ui上显示一些积木相关信息（比如积木报错），然而积木被分组包裹时，自身是不可见的。
     *  此时这些相关信息需要被展示在包裹本积木的最外层分组结构上。
     */
    BlockSvg.prototype.get_top_group = function () {
        var block = this;
        var top_group = undefined;
        while (block) {
            if (block.parent_group) {
                top_group = block.parent_group;
                block = top_group;
            }
            block = block.get_parent();
        }
        return top_group;
    };
    /**
     * 获取当前积木所属积木块的顶积木。
     */
    BlockSvg.prototype.get_top_parent = function () {
        var top_block = this;
        while (top_block.parent_block) {
            top_block = top_block.parent_block;
        }
        return top_block;
    };
    /**
     * Returns all connections originating from this block.
     * @return Array of connections.
     */
    BlockSvg.prototype.get_connections = function (all) {
        var my_connections = [];
        if (all || this.rendered) {
            if (this.output_connection) {
                my_connections.push(this.output_connection);
            }
            if (this.previous_connection) {
                my_connections.push(this.previous_connection);
            }
            if (this.next_connection) {
                my_connections.push(this.next_connection);
            }
            if (all || !this.is_collapsed()) {
                for (var i = 0; i < this.inputList.length; i++) {
                    var input = this.inputList[i];
                    if (input.connection) {
                        my_connections.push(input.connection);
                    }
                }
            }
        }
        return my_connections;
    };
    /**
     * 获取连接了 __视觉上__ 的next_block 的 connection
     * 只要是有next_connection的，就返回下方连接的目标，没有时才查找inputList。
     * 因此对于循环积木等都两者有的情况，会严格返回下方的积木，若下方无连接，即使C口中有连接，也返回undefined。
     */
    BlockSvg.prototype.get_full_next_connection = function () {
        if (this.next_connection) {
            return this.next_connection;
        }
        // 有一些头积木本身nextstatement为undefined，依靠input中的DO或STACK与其他积木进行连接
        // 这些积木的block.next_connection为undefined，但视觉上这些积木是可以连接的
        if (this.is_starting_block()) {
            for (var i = 0; i < this.inputList.length; i++) {
                var input = this.inputList[i];
                if (input.type === interfaces_1.InputType.STATEMENT) {
                    return input.connection;
                }
            }
        }
        return undefined;
    };
    /**
     * Walks down a stack of blocks and finds the last next connection on the stack.
     * @return The last next connection on the stack, or undefined.
     */
    BlockSvg.prototype.last_connection_in_stack = function () {
        // 如果依靠next_connection来生成last_marker，则这些积木连接一块积木后，积木块无法主动连接其他积木（上方不可连接，下方未生成marker）
        // 因此生成marker时需要处理，检查一下没有next_connection的头部积木的statement有无连接
        // REF T15966
        var next_connection = this.get_full_next_connection();
        while (next_connection) {
            var next_block = next_connection.targetBlock();
            if (!next_block) {
                // Found a next connection with nothing on the other side.
                return next_connection;
            }
            next_connection = next_block.next_connection;
        }
        // Ran out of next connections.
        return undefined;
    };
    /**
     * Return the input that contains the specified connection
     * @param conn A connection on this block.
     * @return The input that contains the specified connection.
     */
    BlockSvg.prototype.get_input_with_connection = function (conn) {
        for (var i = 0; i < this.inputList.length; i++) {
            var input = this.inputList[i];
            if (input.connection == conn) {
                return input;
            }
        }
        return undefined;
    };
    /**
     * Return the connection on the first statement input on this block, or undefined if
     * there are none.
     * @return The first statement connection or undefined.
     */
    BlockSvg.prototype.get_first_statement_connection = function () {
        for (var i = 0; i < this.inputList.length; i++) {
            var input = this.inputList[i];
            if (input.connection && input.connection.type == interfaces_1.CONNECTION_TYPE.NEXT_STATEMENT) {
                return input.connection;
            }
        }
        return undefined;
    };
    /**
     * Find the connection on this block that corresponds to the given connection
     * on the other block.
     * Used to match connections between a block and its insertion marker.
     * @param otherBlock The other block to match against.
     * @param conn The other connection to match.
     * @return the matching connection on this block, or undefined.
     */
    BlockSvg.prototype.get_matching_connection = function (otherBlock, conn) {
        var connections = this.get_connections(true);
        var otherConnections = otherBlock.get_connections(true);
        // 为了性能考虑，目前 insertion_marker 是不考虑 render mutation 的情况的
        if (!this.is_insertion_marker() &&
            connections.length != otherConnections.length) {
            throw new Error('Connection lists did not match in length.');
        }
        for (var i = 0; i < otherConnections.length; i++) {
            if (otherConnections[i] == conn) {
                return connections[i];
            }
        }
        return undefined;
    };
    /**
     * Unplug this block from its superior block.  If this block is a statement,
     * optionally reconnect the block underneath with the block on top.
     * @param opt_healStack Disconnect child statement and reconnect
     *   stack.  Defaults to false.
     */
    BlockSvg.prototype.unplug = function (opt_healStack) {
        // 输出型积木
        if (this.output_connection) {
            // Disconnect from any superior block.
            if (this.output_connection.is_connected()) {
                this.output_connection.disconnect();
            }
            return;
        }
        // 非输出型但可连接下一块的积木
        if (this.previous_connection) {
            var previousTarget = undefined;
            if (this.previous_connection.is_connected()) {
                // Remember the connection that any next statements need to connect to.
                previousTarget = this.previous_connection.get_targe_connection();
                // Detach this block from the parent's tree.
                this.previous_connection.disconnect();
            }
            var nextBlock = this.get_next_block();
            if (opt_healStack && nextBlock) {
                // Disconnect the next statement.
                var nextConnection = this.next_connection;
                if (!nextConnection) {
                    return;
                }
                var nextTarget = nextConnection.get_targe_connection();
                if (!nextTarget) {
                    return;
                }
                nextTarget.disconnect();
                if (previousTarget && previousTarget.check_type(nextTarget)) {
                    // Attach the next statement to the previous statement.
                    previousTarget.connect(nextTarget);
                }
            }
        }
    };
    /**
     * Return the input that connects to the specified block.
     * @param  block A block connected to an input on this block.
     * @return The input that connects to the specified block.
     */
    BlockSvg.prototype.get_input_with_block = function (block) {
        for (var i = 0; i < this.inputList.length; i++) {
            var input = this.inputList[i];
            if (input.connection && input.connection.targetBlock() == block) {
                return input;
            }
        }
        return undefined;
    };
    /**
     * Fetches the block attached to the named input.
     * @param name The name of the input.
     * @return The attached value block, or undefined if the input is
     *     either disconnected or if the input does not exist.
     */
    BlockSvg.prototype.get_input_target_block = function (name) {
        var input = this.get_input(name);
        return input && input.connection && input.connection.targetBlock();
    };
    /**
     * Returns the language-neutral value from the field of a block.
     * @param name The name of the field.
     * @return  Value from the field or undefined if field does not exist.
     */
    BlockSvg.prototype.get_field_value = function (name) {
        var field = this.get_field(name);
        if (!field) {
            return undefined;
        }
        return field.get_value();
    };
    /**
     * 用于取得shadow下field
     */
    BlockSvg.prototype.get_shadow_field = function (input_name, field_name) {
        if (field_name === void 0) { field_name = 'NUM'; }
        var input = this.get_input(input_name);
        if (!input || !input.connection) {
            return undefined;
        }
        var conn = input.connection.target_connection;
        if (!conn) {
            return undefined;
        }
        return conn.source_block.get_field(field_name);
    };
    /**
     * 用于取得shadow下field
     * <block type="lists_replace" id="N58SdXtq5En1RFUEMlAH" inline="true" x="-54" y="323">
     *   <value name="*VALUE*">
     *     <shadow type="math_number" id="DcPBwDZSDqtQ6HJhLnq6">
     *       <field constraints="-Infinity,Infinity,0," allow_text="true" name="*NUM*">**ME!!!**</field>
     *     </shadow>
     *   </value>
     * </block>
     * ⬆上述结构中强调部分的值
     */
    BlockSvg.prototype.get_shadow_field_value = function (input_name, field_name) {
        if (field_name === void 0) { field_name = 'NUM'; }
        var field = this.get_shadow_field(input_name, field_name);
        if (!field) {
            return undefined;
        }
        return field.get_value();
    };
    /**
     * Change the field value for a block (e.g. 'CHOOSE' or 'REMOVE').
     * @param newValue Value to be the new field.
     * @param name The name of the field.
     */
    BlockSvg.prototype.set_field_value = function (newValue, name) {
        var field = this.get_field(name);
        if (!field) {
            throw new ReferenceError("Field " + name + " not found.");
        }
        field.set_value(newValue);
    };
    /**
     * Return the input that contains the specified field
     * @param field_name
     * @return The input that contains the specified field.
     */
    BlockSvg.prototype.get_input_with_field = function (field_name) {
        for (var i = 0; i < this.inputList.length; i++) {
            var input = this.inputList[i];
            for (var j = 0; j < input.fieldRow.length; j++) {
                var field = input.fieldRow[j];
                if (field.name === field_name) {
                    return input;
                }
            }
        }
        return undefined;
    };
    /**
     * Set whether another block can chain onto the bottom of this block.
     * @param newBoolean True if there can be a next statement.
     * @param opt_check Statement type or
     *     list of statement types.  Null/undefined if any type could be connected.
     */
    BlockSvg.prototype.set_next_statement = function (newBoolean, opt_check) {
        if (newBoolean) {
            if (opt_check == undefined) { // MARK:What does the code do?
                opt_check = undefined;
            }
            if (!this.next_connection) {
                this.next_connection = this.make_connection(interfaces_1.CONNECTION_TYPE.NEXT_STATEMENT);
            }
            this.next_connection.set_check(opt_check);
        }
        else {
            if (this.next_connection) {
                (0, asserts_1.assert)(!this.next_connection.is_connected(), 'Must disconnect next statement before removing connection.');
                this.next_connection.dispose();
                this.next_connection = undefined;
            }
        }
    };
    /**
     * Set whether this block can chain onto the bottom of another block.
     * @param new_boolean True if there can be a previous statement.
     * @param opt_check Statement type or
     *     list of statement types.  Null/undefined if any type could be connected.
     */
    BlockSvg.prototype.set_previous_statement = function (new_boolean, opt_check) {
        if (new_boolean) {
            if (opt_check == undefined) { // MARK:What does the code do?
                opt_check = undefined;
            }
            if (!this.previous_connection) {
                (0, asserts_1.assert)(!this.output_connection, 'Remove output connection prior to adding previous connection.');
                this.previous_connection =
                    this.make_connection(interfaces_1.CONNECTION_TYPE.PREVIOUS_STATEMENT);
            }
            this.previous_connection.set_check(opt_check);
        }
        else {
            if (this.previous_connection) {
                (0, asserts_1.assert)(!this.previous_connection.is_connected(), 'Must disconnect previous statement before removing connection.');
                this.previous_connection.dispose();
                this.previous_connection = undefined;
            }
        }
    };
    BlockSvg.prototype.set_output = function (has_output, opt_check, required_context) {
        if (has_output) {
            if (!this.output_connection) {
                if (this.previous_connection != undefined) {
                    throw new Error('Remove previous connection prior to adding output connection.');
                }
                this.output_connection = this.make_connection(interfaces_1.CONNECTION_TYPE.OUTPUT_VALUE, required_context);
            }
            var is_any = ((0, base_1.is_array)(opt_check) && opt_check.indexOf('Any') > -1) ||
                opt_check === 'Any';
            if (opt_check && !is_any) {
                this.output_connection.set_check(opt_check);
            }
            return;
        }
        if (this.output_connection) {
            if (this.output_connection.is_connected()) {
                throw new Error('Must disconnect output value before removing connection.');
            }
            this.output_connection.dispose();
            this.output_connection = undefined;
        }
    };
    BlockSvg.prototype.append_value_input = function (name, insert_at, provided_context, default_shadow) {
        var input = this.append_input(interfaces_1.InputType.VALUE, name, insert_at, provided_context);
        if (typeof default_shadow === 'string') {
            input.connection.set_shadow_from_string(default_shadow);
        }
        else {
            input.connection.set_shadow_dom(default_shadow);
        }
        return input;
    };
    BlockSvg.prototype.respawn_all_shadows = function () {
        var _a, _b;
        (_a = this.previous_connection) === null || _a === void 0 ? void 0 : _a.respawn_shadow();
        (_b = this.next_connection) === null || _b === void 0 ? void 0 : _b.respawn_shadow();
        this.inputList.forEach(function (input) {
            var _a;
            (_a = input.connection) === null || _a === void 0 ? void 0 : _a.respawn_shadow();
        });
    };
    BlockSvg.prototype.append_statement_input = function (name, insert_at, provided_context) {
        return this.append_input(interfaces_1.InputType.STATEMENT, name, insert_at, provided_context);
    };
    /**
     * Shortcut for appending a dummy input row.
     * @param opt_name Language-neutral identifier which may used to find
     *     this input again.  Should be unique to this block.
     * @return The input object created.
     */
    BlockSvg.prototype.append_dummy_input = function (opt_name, insert_at) {
        return this.append_input(interfaces_1.InputType.DUMMY, opt_name || '', insert_at);
    };
    /**
     * Shortcut for appending a shadow block input row.
     *
     * 这个方法在被调用时会自动生成shadow block，原本的应该是只用于积木变形（addMutation/removeMutation）。
     *
     * 如果在积木的init中使用这个方法，shadow会跟随当前积木被创建，后续加载积木数据的时候又要从shadow字段读取xml来重建shadow block。
     *  以至于相关的shadow被反复重建，在大作品中非常耗时。
     * 因此**最好不要在积木的init过程使用该方法。**
     *
     * @param name Language-neutral identifier which may used to find
     *     this input again.  Should be unique to this block.
     * @param str to generate the shadow block
     * @return The input object created.
     */
    BlockSvg.prototype.append_shadow_input = function (name, str, insert_at) {
        return this.append_shadow(interfaces_1.InputType.VALUE, name, str, (0, maths_1.gen_uid)(), insert_at);
    };
    /**
     * Append a shadow input onto this block,
     *  with a 'math_number' shadow block connected to it.
     */
    BlockSvg.prototype.append_math_shadow = function (name, insert_at) {
        return this.append_shadow_input(name, this.Blink.Blocks.SHADOW.math, insert_at);
    };
    BlockSvg.prototype.append_logic_shadow = function (name, insert_at) {
        return this.append_shadow_input(name, this.Blink.Blocks.SHADOW.logic, insert_at);
    };
    BlockSvg.prototype.append_text_shadow = function (name, insert_at) {
        return this.append_shadow_input(name, this.Blink.Blocks.SHADOW.text, insert_at);
    };
    BlockSvg.prototype.append_multiline_text_shadow = function (name, insert_at) {
        return this.append_shadow_input(name, this.Blink.Blocks.SHADOW.multiline_text, insert_at);
    };
    BlockSvg.prototype.append_default_value_shadow = function (name, insert_at) {
        return this.append_shadow_input(name, this.Blink.Blocks.SHADOW.default_value, insert_at);
    };
    // TODO: 新增表单校验方案
    /**
     * Append a shadow input onto this block. Used in json_init.
     * @param name input name
     * @param type shadow type
     * @param text text to display
     * @param insert_at position to insert this new input
     */
    BlockSvg.prototype.append_shadow_input_json = function (name, type, text, insert_at) {
        text = text == undefined ? '' : text;
        var type_map = {
            text: "<shadow type=\"text\"><field name=\"TEXT\">" + text + "</field></shadow>",
            math: "<shadow type=\"math_number\"><field name=\"NUM\">" + text + "</field></shadow>",
            bool: '<empty type="logic_empty"><field name="BOOL"></field></empty>',
        };
        return this.append_shadow(interfaces_1.InputType.VALUE, name, type_map[type], undefined, insert_at);
    };
    /**
     * Add a value input, statement input to this block.
     * @param type any of {InputType}.
     * @param name Language-neutral identifier which may used to find this
     *     input again.  Should be unique to this block.
     * @return The input object created.
     */
    BlockSvg.prototype.append_input = function (type, name, insert_at, provided_context) {
        var connection = type === interfaces_1.InputType.DUMMY ? undefined : this.make_connection(type, provided_context);
        var input = this.input_factory({
            type: type,
            name: name,
            block: this,
            connection: connection,
        });
        if (insert_at === undefined) {
            // Append input to list.
            this.inputList.push(input);
        }
        else {
            insert_at = typeof insert_at === 'number' ? insert_at : this.get_input_index(insert_at);
            this.inputList.splice(insert_at, 0, input);
        }
        return input;
    };
    /**
     * Find all the blocks that are directly or indirectly nested inside this one.
     * Includes this block in the list.
     * Includes value and block inputs, as well as following statements.
     * Excludes any connection on an output tab or any preceding statements.
     * @return Flattened array of blocks.
     */
    BlockSvg.prototype.get_descendants = function (ordered, opt_ignore_shadows) {
        if (ordered === void 0) { ordered = false; }
        if (opt_ignore_shadows === void 0) { opt_ignore_shadows = false; }
        var blocks = [this];
        var childBlocks = this.get_children(ordered);
        for (var i = 0; i < childBlocks.length; i++) {
            var child = childBlocks[i];
            if (!opt_ignore_shadows || !child.is_shadow()) {
                blocks.push.apply(blocks, child.get_descendants(ordered, opt_ignore_shadows));
            }
        }
        return blocks;
    };
    BlockSvg.prototype.get_descendant_ids = function () {
        var ids = [this.id];
        var descendants = this.get_descendants();
        for (var i = 0; i < descendants.length; i++) {
            var descendant = descendants[i];
            ids[i] = descendant.id;
        }
        return ids;
    };
    BlockSvg.prototype.get_nested_block = function () {
        var blocks = [];
        for (var i = 0; i < this.inputList.length; i++) {
            var input = this.inputList[i];
            if (input.name in constants_1.SPECIAL_CONNECTION_INPUT_NAME) {
                continue;
            }
            if (input.connection && input.connection.type === interfaces_1.CONNECTION_TYPE.INPUT_VALUE) {
                var block = input.connection.targetBlock();
                if (block) {
                    blocks.push(block);
                }
            }
        }
        return blocks;
    };
    BlockSvg.prototype.get_all_nested_blocks = function () {
        var blocks = [this];
        var nested_blocks = this.get_nested_block();
        for (var i = 0; i < nested_blocks.length; i++) {
            var child = nested_blocks[i];
            blocks.push.apply(blocks, child.get_all_nested_blocks());
        }
        return blocks;
    };
    /**
     * Return the next statement block directly connected to this block.
     * @return The next statement block or undefined.
     */
    BlockSvg.prototype.get_next_block = function () {
        return this.next_connection && this.next_connection.targetBlock();
    };
    /**
     * 获取从 __视觉上__ 的next_block
     * 只要是有next_connection的，就返回下方连接的目标，没有时才查找inputList。
     * 因此对于循环积木等都两者有的情况，会严格返回下方的积木，若下方无连接，即使C口中有连接，也返回undefined。
     */
    BlockSvg.prototype.get_full_next_block = function () {
        var full_next_conn = this.get_full_next_connection();
        return full_next_conn && full_next_conn.targetBlock();
    };
    /**
     * Returns the named field from a block.
     * @param name The name of the field.
     * @return Named field, or undefined if field does not exist.
     */
    BlockSvg.prototype.get_field = function (name) {
        for (var i = 0; i < this.inputList.length; i++) {
            var input = this.inputList[i];
            for (var j = 0; j < input.fieldRow.length; j++) {
                var field = input.fieldRow[j];
                if (field.name === name) {
                    return field;
                }
            }
        }
        return undefined;
    };
    /**
     * Returns the field icon of this block.
     * @return field icon, or undefined if field icon does not exist.
     */
    BlockSvg.prototype.get_field_icon = function () {
        for (var i = 0; i < this.inputList.length; i++) {
            var input = this.inputList[i];
            for (var j = 0; j < input.fieldRow.length; j++) {
                var field = input.fieldRow[j];
                if (field.field_type === 'FieldIcon') {
                    return field;
                }
            }
        }
        return undefined;
    };
    /**
     * Change the tooltip text for a block.
     * @param newTip Text for tooltip or a parent element to
     *     link to for its tooltip.  May be a function that returns a string.
     */
    BlockSvg.prototype.set_tooltip = function (newTip) {
        this.tooltip = newTip;
    };
    /**
     * Helper function to construct a FieldTextInput from a JSON arg object,
     * dereferencing any string table references.
     * @param options A JSON object with options (text, class, and spellcheck).
     * @returns The new text input.
     */
    BlockSvg.prototype.new_field_text_input_from_json = function (options) {
        var text = this.utils.replace_message_references(options['text'] || '');
        // TODO: 从'class'改成了'validator'，看起来以前是一个语句错误，但是以前一直没用到所以没发现
        // 如果产生了副作用就在这里做个容错
        var field = this.field_text_input_factory({
            text: text,
            opt_validator: options['validator'],
        });
        if (typeof options['spellcheck'] == 'boolean') {
            field.set_spell_check(options['spellcheck']);
        }
        return field;
    };
    /**
     * Helper function to construct a FieldImage from a JSON arg object,
     * dereferencing any string table references.
     * @param options A JSON object with options (src, width, height, and alt).
     * @returns The new image.
     */
    BlockSvg.prototype.parse_field_image_param_from_json = function (options) {
        var src = this.utils.replace_message_references(options['src']);
        var width = Number(this.utils.replace_message_references("" + options['width']));
        var height = Number(this.utils.replace_message_references("" + options['height']));
        var alt = this.utils.replace_message_references(options['alt'] || '');
        var callback = options.type === 'field_button' ? options.callback : undefined;
        var circle = options.type === 'field_button' ? options.circle : undefined;
        return { src: src, width: width, height: height, alt: alt, callback: callback, circle: circle };
    };
    /**
     * Add key/values from mixinObj to this block object. By default, this method
     * will check that the keys in mixinObj will not overwrite existing values in
     * the block, including prototype values. This provides some insurance against
     * mixin / extension incompatibilities with future block features. This check
     * can be disabled by passing true as the second argument.
     * @param mixin_obj The key/values pairs to add to this block object.
     * @param opt_disableCheck Option flag to disable overwrite checks.
     */
    BlockSvg.prototype.mixin = function (mixin_obj, opt_disableCheck) {
        if (!opt_disableCheck) {
            var overwrites = [];
            for (var key in mixin_obj) {
                var block = this;
                if (block[key] != undefined) {
                    overwrites.push(key);
                }
            }
            if (overwrites.length) {
                throw new Error("Mixin will overwrite block members: " + JSON.stringify(overwrites));
            }
        }
        Object.assign(this, mixin_obj);
    };
    /**
     * Move a named input to a different location on this block.
     * @param name The name of the input to move.
     * @param refName Name of input that should be after the moved input,
     *   or undefined to be the input at the end.
     */
    BlockSvg.prototype.move_input_before = function (name, refName) {
        if (name == refName) {
            return;
        }
        // Find both inputs.
        var inputIndex = -1;
        var refIndex = refName ? -1 : this.inputList.length;
        for (var i = 0; i < this.inputList.length; i++) {
            var input = this.inputList[i];
            if (input.name == name) {
                inputIndex = i;
                if (refIndex != -1) {
                    break;
                }
            }
            else if (refName && input.name == refName) {
                refIndex = i;
                if (inputIndex != -1) {
                    break;
                }
            }
        }
        if (inputIndex == -1) {
            console.warn("Named input " + name + " not found.");
        }
        if (refIndex == -1) {
            console.warn("Reference input " + refIndex + " not found.");
        }
        this.move_numbered_input_before(inputIndex, refIndex);
    };
    /**
     * Create a human-readable text representation of this block and any children.
     * @param opt_max_length Truncate the string to this length.
     * @param opt_empty_token The placeholder string used to denote an empty field.
     * If not specified, ' ... ' is used.
     * @return Text of block.
     */
    BlockSvg.prototype.to_string = function (opt_max_length, opt_empty_token) {
        if (opt_empty_token === void 0) { opt_empty_token = '...'; }
        var text = [];
        var input = this.get_input(constants_1.COLLAPSED_INPUT_NAME);
        // 已折叠且外观已更新好，直接返回生成过的字符串
        if (input && this.collapsed_) {
            return input.fieldRow[0].get_text();
        }
        for (var i = 0; i < this.inputList.length; i++) {
            var input_1 = this.inputList[i];
            for (var j = 0; j < input_1.fieldRow.length; j++) {
                var field = input_1.fieldRow[j];
                if ((0, base_1.is_field_dropdown)(field) && !field.get_value()) {
                    text.push(opt_empty_token);
                }
                else {
                    text.push(field.get_text());
                }
            }
            if (input_1.connection) {
                var child = input_1.connection.targetBlock();
                if (child) {
                    text.push(child.to_string(undefined, opt_empty_token));
                }
                else {
                    text.push(opt_empty_token);
                }
            }
        }
        if (this.type === 'start_on_click') {
            var child = this.get_next_block();
            if (child) {
                text.push(child.to_string(undefined, opt_empty_token));
            }
        }
        var text_result = text.join(' ').trim() || ' ';
        if (opt_max_length) {
            // 以kitten目前的逻辑为准，无论是否超过最大长度都加上省略号
            text_result = "" + text_result.substring(0, opt_max_length - 3) + opt_empty_token;
        }
        return text_result;
    };
    Object.defineProperty(BlockSvg.prototype, "use_drag_surface", {
        /**
         * @override consider block capacity.
         */
        get: function () {
            var current_gesture = this.workspace.current_gesture_;
            var is_drag_from_flyout = current_gesture && current_gesture.is_start_from_flyout();
            // 为了做积木拖拽样式的特殊处理，从flyout拖出时，即使积木数量超过阈值，
            // 也使用 drag_surface 进行拖拽。
            // ref [积木超过阈值时，从flyout中拖出积木时仍然使用drag surface](https://www.tapd.cn/61080891/prong/stories/view/1161080891001016754)
            if (!is_drag_from_flyout && this.workspace.degrade_translate) {
                return this.workspace.blockDB_.size < this.workspace.degrade_translate;
            }
            return !!this.workspace.get_block_drag_surface();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @override align blocks with outputConnection.
     */
    BlockSvg.prototype.move_by = function (dxy) {
        var event;
        if (this.events.is_enabled() && !this.is_shadow()) {
            event = this.move_event_factory({ block: this });
        }
        var xy = gl_matrix_1.vec2.create();
        if (!this.is_shadow()) {
            xy = this.get_relative_to_surface_xy();
        }
        this.translate(gl_matrix_1.vec2.add(xy, xy, dxy));
        this.move_connections(dxy);
        event && event.record_new();
        if (this.rendered) {
            this.workspace.resize_contents();
        }
        event && this.events.fire(event);
    };
    /**
     * Append a shadow input onto this block, with a shadow block connected to it.
     * @param type input type
     * @param name input name. Language-neutral identifier which may used to find
     *    this input again.  Should be unique to this block.
     * @param str to generate the shadow block
     * @param block_id shadow block id。没什么用，就算传了还是要被查重，传入的数值不代表shadow被生成后的真实数值。
     * @param insert_at position to insert this new input
     * @return The input object created with a connected shadow block.
     */
    BlockSvg.prototype.append_shadow = function (type, name, str, block_id, insert_at) {
        if (!this.rendered) {
            // console.warn(
            //   'Trying to generate shadow while block initializing. ',
            //   'This may cause shadows being reconstructed multiple times. ',
            //   `use BlockSvg.append_value_input instead for block type ${this.type}`,
            // );
        }
        this.events.disable();
        var connection = this.make_connection(type);
        var input = this.input_factory({ type: type, name: name, block: this, connection: connection });
        var shadow_dom = this.utils.string_to_dom(str);
        connection.set_shadow_dom(shadow_dom);
        var block_child = this.xml.dom_to_block_headless(shadow_dom, this.workspace, block_id);
        if (block_child.output_connection) {
            connection.connect(block_child.output_connection);
        }
        else if (block_child.previous_connection) {
            connection.connect(block_child.previous_connection);
        }
        else {
            (0, asserts_1.fail)('Child block does not have output or previous statement.');
        }
        if (insert_at === undefined) {
            // Append input to list.
            this.inputList.push(input);
        }
        else {
            insert_at = typeof insert_at === 'number' ? insert_at : this.get_input_index(insert_at);
            this.inputList.splice(insert_at, 0, input);
        }
        if (!this.is_insertion_marker() && this.rendered) {
            var blocks = this.get_descendants();
            for (var i = 0; i < blocks.length; i++) {
                if (blocks[i].is_insertion_marker()) {
                    continue;
                }
                blocks[i].init_svg();
                blocks[i].render(false);
            }
        }
        this.update_disabled();
        this.workspace.resize_contents();
        this.events.enable();
        return input;
    };
    /**
     * Move the connections for this block and all blocks attached under it.
     * Also update any attached bubbles.
     * @param dx Horizontal offset from current location, in workspace units.
     * @param dy Vertical offset from current location, in workspace units.
     * @private
     */
    BlockSvg.prototype.move_connections = function (dxy) {
        // This function DOES NOT cause block rendering.
        // Even if a block is invisible since it's attached to a collapsed block, position of connections should be updated.
        // We use drag surface, i.e. all connected blocks are moved while dragging since the whole surface is moved.
        // If the hidden connections are not moved, the position of connections and the block svg are not matched.
        // That means an extra rendering is needed on the hidden block when its parent expanded.
        // To avoid such duplicated renderings, hidden connections should be moved. (It's just updating connection data anyway.)
        var my_connections = this.get_connections(true);
        for (var i = 0; i < my_connections.length; i++) {
            my_connections[i].move_by(dxy);
        }
        var icons = this.get_icons();
        for (var i = 0; i < icons.length; i++) {
            icons[i].reposition();
        }
        // Recurse through all blocks attached under this one.
        for (var i = 0; i < this.child_blocks.length; i++) {
            this.child_blocks[i].move_connections(dxy);
        }
    };
    /**
     * Dispose of this block.
     * @param healStack If true, then try to heal any gap by connecting
     *     the next statement with the previous statement.  Otherwise, dispose of
     *     all children of this block.
     * @param animate If true, show a disposal animation and sound.
     */
    BlockSvg.prototype.dispose = function (healStack, show_animate) {
        var _a, _b;
        (_a = this.parent_group) === null || _a === void 0 ? void 0 : _a.dispose();
        if (!this.workspace) {
            // The block has already been deleted.
            return;
        }
        this.utils.start_text_cache();
        // Save the block's workspace temporarily so we can resize the
        // contents once the block is disposed.
        var blockWorkspace = this.workspace;
        // If this block is being dragged, unlink the mouse events.
        if (this.runtime_data.selected === this) {
            this.unselect();
            this.workspace.cancel_current_gesture();
        }
        // If this block has a context menu open, close it.
        if (this.context_menu.current_block == this) {
            this.context_menu.hide();
        }
        if (show_animate && this.rendered) {
            this.unplug(healStack);
            this.block_animations.dispose_ui_effect(this);
        }
        // Stop rerendering.
        this.rendered = false;
        // Terminate onchange event calls.
        if (this.onchange) {
            this.workspace.remove_change_listener(this.onchange);
        }
        this.unplug(healStack);
        var delete_event;
        if (this.events.is_enabled()) {
            delete_event = this.delete_event_factory({ block: this });
        }
        this.events.disable();
        try {
            var icons = this.get_icons();
            for (var i = 0; i < icons.length; i++) {
                icons[i].dispose();
            }
        }
        finally {
            this.events.enable();
        }
        this.events.disable();
        try {
            // This block is now at the top of the workspace.
            // Remove this block from the workspace's list of top-most blocks.
            if (this.workspace) {
                this.workspace.remove_top_block(this);
                // Remove from block database.
                this.workspace.blockDB_.delete(this.id);
                this.workspace = undefined; // remove will cause many works.
            }
            // Just deleting this block from the DOM would result in a memory leak as
            // well as corruption of the connection database.  Therefore we must
            // methodically step through the blocks and carefully disassemble them.
            if (this.runtime_data.selected == this) {
                this.runtime_data.selected = undefined;
            }
            // First, dispose of all my children.
            for (var i = this.child_blocks.length - 1; i >= 0; i--) {
                this.child_blocks[i].dispose(false);
            }
            // Then dispose of myself.
            // Dispose of all inputs and their fields.
            for (var i = 0; i < this.inputList.length; i++) {
                var input = this.inputList[i];
                input.dispose();
            }
            this.inputList.length = 0;
            // Dispose of any remaining connections (next/previous/output).
            var connections = this.get_connections(true);
            for (var i = 0; i < connections.length; i++) {
                var connection = connections[i];
                if (connection.is_connected()) {
                    connection.disconnect();
                }
                connections[i].dispose();
            }
        }
        finally {
            this.events.enable();
        }
        if (((_b = this.Blink.tooltip) === null || _b === void 0 ? void 0 : _b.get_element()) === this.svg_path) {
            this.Blink.tooltip.hide();
        }
        if (!this.is_shadow() && !this.is_insertion_marker()) {
            blockWorkspace.resize_contents();
        }
        (0, dom_1.remove_children)(this.svg_group);
        delete this.svg_path;
        (0, dom_1.remove_node)(this.svg_group);
        this.utils.stop_text_cache();
        if (delete_event) {
            this.events.fire(delete_event);
        }
    };
    /**
     * 把block从当前workspace中抽出（但仍然保存在内存中），仅在flyout中clear_old_blocks时被调用。
     * 执行该函数后，block不在flyout中被显示，但在内存中依然存在，在重新打开该页面时，通过cache直接取出
     * 所以不应做任何的connection的清除处理
     */
    BlockSvg.prototype.detach = function () {
        if (!this.workspace) {
            throw new Error('Trying to detach a block without workspace.');
        }
        this.events.disable();
        try {
            var icons = this.get_icons();
            for (var i = 0; i < icons.length; i++) {
                icons[i].dispose();
            }
            if (this.onchange) {
                this.workspace.remove_change_listener(this.onchange);
            }
            // Remove from block database.
            this.workspace.blockDB_.delete(this.id);
            // Remove top block from top blocks list, and set top blocks' workspace to undefined.
            if (this.workspace.get_top_blocks(false).includes(this)) {
                this.workspace.remove_top_block(this);
                this.workspace = undefined;
                // Delete top blocks' svg from flyout, but keep descendants' svg inside top blocks.
                if (this.svg_group) {
                    (0, dom_1.remove_node)(this.svg_group);
                }
            }
            // Detach all children
            for (var i = this.child_blocks.length - 1; i >= 0; i--) {
                this.child_blocks[i].detach();
            }
        }
        finally {
            this.events.enable();
        }
    };
    /**
     * 把完整存在内存中的block插入workspace。
     * 其中的shadow等不受影响。
     * 仅在flyout显示已缓存积木时，对top block调用。
     * @param new_workspace 指定workspace
     */
    BlockSvg.prototype.retach = function (new_workspace) {
        // Retach top blocks
        new_workspace.add_top_block(this);
        this.set_workspace(new_workspace);
        this.init_svg();
        // Restore all blocks, and move to correct position
        var blocks = this.get_descendants();
        for (var j = blocks.length - 1; j >= 0; j--) {
            new_workspace.blockDB_.set(blocks[j].id, blocks[j]);
            var xy = blocks[j].get_relative_to_surface_xy();
            blocks[j].move_by(gl_matrix_1.vec2.negate(xy, xy));
        }
    };
    BlockSvg.prototype.make_connection = function (type, context) {
        return this.connection_factory({
            source: this,
            type: type,
            context: context,
        });
    };
    BlockSvg.prototype.show_context_menu = function (e) {
        var _this = this;
        var options = this.workspace.get_options();
        if (options.readOnly || !this.context_menu) {
            return;
        }
        if (!this.is_deletable() || !this.is_movable() || this.is_in_flyout) {
            return;
        }
        var menu_options = [];
        this.context_menu_options_setting.forEach(function (option) {
            if (typeof option === 'number') {
                switch (option) {
                    case interfaces_1.BlockOptionType.COPY:
                        return _this.options_add_copy(menu_options);
                    case interfaces_1.BlockOptionType.COPY_AND_PASTE:
                        return _this.options_add_duplicate(menu_options);
                    case interfaces_1.BlockOptionType.ADD_COMMENT:
                        return _this.options_add_comments(menu_options);
                    case interfaces_1.BlockOptionType.COLLAPSE:
                        return _this.options_add_collapse(menu_options);
                    case interfaces_1.BlockOptionType.DELETE:
                        return _this.options_add_delete_blocks(menu_options);
                    case interfaces_1.BlockOptionType.SET_GROUP:
                        if (_this.workspace.options.block_group) {
                            _this.options_add_set_blocks_group(menu_options);
                        }
                        return;
                    case interfaces_1.BlockOptionType.VISIBILITY_CHANGE:
                        return _this.add_visibility_change_option(menu_options);
                    default:
                        return console.warn("Undefined block menu option: " + option);
                }
            }
            var custom_option = option(_this);
            custom_option && menu_options.push(custom_option);
        });
        this.context_menu.current_block = this;
        this.context_menu.show(e, { source: 'block', options: menu_options }, this.RTL);
    };
    BlockSvg.prototype.options_add_copy = function (menuOptions) {
        var _this = this;
        var duplicateOption = {
            text: this.Msg.DUPLICATE_BLOCK,
            name: 'copy',
            area: 'block',
            enabled: true,
            callback: function () {
                _this.runtime_data.clipboard.copy(_this);
            },
        };
        if (this.get_descendants().length > this.workspace.remaining_capacity()) {
            duplicateOption.enabled = false;
        }
        menuOptions.push(duplicateOption);
    };
    BlockSvg.prototype.options_add_duplicate = function (menuOptions) {
        var _this = this;
        menuOptions.push({
            text: this.Msg.COPY_AND_PASTE,
            name: 'copy_and_paste',
            enabled: true,
            callback: function () {
                _this.runtime_data.clipboard.duplicate(_this);
            },
        });
    };
    BlockSvg.prototype.options_add_comments = function (menuOptions) {
        var _this = this;
        if (!this.is_editable()
            || this.is_collapsed()
            || !this.workspace.get_options().comments
            || this.element_type === 'block_group') {
            return;
        }
        // Option to add/remove a comment.
        var commentOption;
        if (this.comment) {
            commentOption = {
                enabled: !is_1.is.ie(),
                text: this.Msg.REMOVE_COMMENT,
                name: 'remove_comment',
                callback: function () {
                    if (!_this.comment) {
                        return;
                    }
                    _this.set_comment_text(undefined);
                },
            };
        }
        else {
            commentOption = {
                enabled: !is_1.is.ie(),
                text: this.Msg.ADD_COMMENT,
                name: 'add_comment',
                callback: function () { return (0, tslib_1.__awaiter)(_this, void 0, void 0, function () {
                    var comment_text;
                    return (0, tslib_1.__generator)(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(this.workspace.get_options().comment_type === 'simplified')) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.workspace.show_external_comment_editor('')];
                            case 1:
                                comment_text = _a.sent();
                                // 用户点击了x，取消注释创建。
                                if (comment_text == undefined) {
                                    return [2 /*return*/];
                                }
                                this.set_comment_text(comment_text);
                                (0, asserts_1.assert)(this.comment);
                                this.comment.init_svg();
                                this.comment.set_expanded(true);
                                return [2 /*return*/];
                            case 2:
                                this.set_comment_text('');
                                (0, asserts_1.assert)(this.comment);
                                this.comment.init_svg();
                                this.comment.focus();
                                return [2 /*return*/];
                        }
                    });
                }); },
            };
        }
        menuOptions.push(commentOption);
    };
    BlockSvg.prototype.options_add_collapse = function (menuOptions) {
        var _this = this;
        if (this.workspace.get_options().collapse) {
            // Option to collapse/expand block.
            if (this.is_collapsed()) {
                var expandOption = {
                    text: this.Msg.EXPAND_BLOCK,
                    name: 'expand',
                    enabled: true,
                    callback: function () {
                        _this.set_collapsed(false);
                    },
                };
                menuOptions.push(expandOption);
            }
            else {
                var collapseOption = {
                    enabled: true,
                    text: this.Msg.COLLAPSE_BLOCK,
                    name: 'collapse',
                    callback: function () {
                        _this.set_collapsed(true);
                    },
                };
                menuOptions.push(collapseOption);
            }
        }
    };
    BlockSvg.prototype.options_add_delete_blocks = function (menuOptions) {
        var _this = this;
        // Option to delete this block.
        var deleteOption = {
            text: this.Msg.DELETE_BLOCK,
            name: 'delete',
            area: 'block',
            enabled: true,
            callback: function () {
                var current_group = _this.events.get_group();
                _this.events.set_group(current_group || true);
                _this.dispose(true, true);
                _this.events.set_group(current_group);
            },
        };
        menuOptions.push(deleteOption);
    };
    BlockSvg.prototype.options_add_set_blocks_group = function (menu_options) {
        var _this = this;
        var set_group_option = {
            text: this.utils.replace_message_references('%{BKY_BLOCK_GROUP}'),
            name: 'block_group',
            area: 'block',
            enabled: true,
            callback: function () {
                _this.hide_into_group();
            },
        };
        menu_options.push(set_group_option);
    };
    BlockSvg.prototype.add_visibility_change_option = function (menu_options) {
        var _this = this;
        var root_block = this.get_root_block();
        var curr_visible = root_block.get_visibility() === interfaces_1.BlockVisibility.VISIBLE;
        menu_options.push({
            text: this.utils.replace_message_references("%{BKY_" + (curr_visible ? 'HIDE' : 'SHOW') + "_BLOCK_STACK}"),
            name: 'change_visibility',
            enabled: true,
            callback: function () {
                _this.set_chunk_visibility(curr_visible ? interfaces_1.BlockVisibility.TRANSLUCENT : interfaces_1.BlockVisibility.VISIBLE);
                _this.update_chunk_visibility();
            },
        });
    };
    /**
     * Set this block's comment text.
     * @param text The text, or undefined to delete.
     * @param opt_id id of the comment to be created.
     *  Note that this CANNOT modify id of existing comment.
     */
    BlockSvg.prototype.set_comment_text = function (text, opt_id, position) {
        if ((0, base_1.is_string)(text)) {
            if (!this.comment) {
                this.comment = this.workspace_comment_factory({
                    workspace: this.workspace,
                    type: this.workspace.options.comment_type,
                    parent_block: this,
                    opt_id: opt_id,
                    position: position,
                });
            }
            this.comment.set_text(text);
        }
        if (!(0, base_1.is_string)(text) && this.comment) {
            this.comment.dispose();
            this.comment = undefined;
        }
    };
    /**
     * Returns the comment on this block (or '' if none).
     * @return Block's comment.
     */
    BlockSvg.prototype.get_comment_text = function () {
        if (this.comment) {
            var comment = this.comment.get_text();
            // Trim off trailing whitespace.
            return (0, string_1.string_trim)(comment);
        }
        return '';
    };
    // 在 toolbox 中 hover 积木的样式，一个跟拖动同样的样式
    // 在 kitten 中进行监听
    BlockSvg.prototype.add_hover = function () {
        this.svg_group.setAttribute('filter', "url(#" + svg_filter_1.FILTER.DRAG_SHADOW + ")");
    };
    BlockSvg.prototype.remove_hover = function () {
        this.svg_group.removeAttribute('filter');
    };
    BlockSvg.prototype.unselect = function () {
        if (this.runtime_data.selected != this) {
            return;
        }
        this.runtime_data.selected = undefined;
        this.remove_select();
        if (this.events.is_enabled()) {
            this.events.fire(this.ui_event_factory({
                type: interfaces_1.UIEventType.SELECTED,
                workspace_id: this.workspace.id,
                block_id: this.id,
            }));
        }
    };
    /**
     * init svg for the block. Append block svg to canvas.
     */
    BlockSvg.prototype.init_svg = function () {
        if (this.svg_group == undefined) {
            throw new ReferenceError('Cannot init svg to block without svg group.');
        }
        if (!this._is_insertion_marker) {
            // Insertion markers not allowed to have inputs or icons
            for (var i = 0; i < this.inputList.length; i++) {
                var input = this.inputList[i];
                input.init();
            }
            this.warning && this.warning.create_icon();
        }
        this.update_colour();
        this.update_movable();
        this.init_events();
        var root = this.get_svg_root();
        var canvas = this.workspace.get_canvas();
        if ((root == undefined || root.parentNode == undefined) && canvas != undefined) {
            if (this.is_insertion_marker() && this.output_connection) {
                return;
            }
            canvas.appendChild(this.svg_group);
        }
    };
    /**
     * init events for the block.
     */
    BlockSvg.prototype.init_events = function () {
        var _this = this;
        _super.prototype.init_events.call(this);
        if (!this.svg_path)
            return;
        // output connection 需要一个 hover 的效果
        // - 嵌入到别的积木的时候
        // - shadow 的情况父元素处于嵌套状态的时候高亮
        // 动态增减class是因为 当output嵌套在output中时 hover子积木 父积木不能高亮
        if (!this.is_in_flyout &&
            !this.is_shadow() &&
            this.is_output_block()) {
            this.svg_group.addEventListener('mouseover', function (e) {
                var _a;
                e.stopPropagation();
                if (!(0, dom_1.is_inside_shadow)(e.relatedTarget) &&
                    ((_a = _this.output_connection) === null || _a === void 0 ? void 0 : _a.is_connected())) {
                    _this.svg_group.classList.add("output-block-hover" /* OUTPUT_LAYER_HOVER */);
                }
            });
            this.svg_group.addEventListener('mouseout', function (e) {
                e.stopPropagation();
                if (!(0, dom_1.is_inside_shadow)(e.relatedTarget)) {
                    _this.svg_group.classList.remove("output-block-hover" /* OUTPUT_LAYER_HOVER */);
                }
            });
        }
        if (!this.is_in_flyout && (this.is_wrap_shape() || this.is_shadow())) {
            this.svg_path.addEventListener('mouseover', function (e) {
                e.stopPropagation();
                surround_block_highlight(true);
            });
            this.svg_path.addEventListener('mouseout', function (e) {
                e.stopPropagation();
                surround_block_highlight(false);
            });
        }
        var surround_block_highlight = function (is_add) {
            var target = _this.is_shadow() ? _this.parent_block : _this;
            if (!target || !target.is_wrap_shape() || !target.svg_path) {
                return;
            }
            var surround_parent = target.get_surround_parent();
            var is_surrounded = surround_parent && !surround_parent.is_starting_block();
            var outline = target.svg_group.querySelector('.blocklySurroundShadow');
            if (is_add && !outline && !target.workspace.is_dragging()) {
                var new_outline = (0, dom_1.clone_node)(target.svg_path);
                new_outline.classList.add('blocklySurroundShadow');
                target.svg_group.appendChild(new_outline);
                if (!is_surrounded) {
                    target.svg_path.setAttribute('filter', "url(#" + svg_filter_1.FILTER.SURROUND_SHADOW + ")");
                }
            }
            if (!is_add && outline) {
                target.svg_group.removeChild(outline);
                target.svg_path.removeAttribute('filter');
            }
        };
    };
    BlockSvg.prototype.clear_hover_effect = function () {
        var _a;
        (0, dom_1.remove_class_if_necessary)(this.svg_group, "output-block-hover" /* OUTPUT_LAYER_HOVER */);
        var outline = this.svg_group.querySelector('.blocklySurroundShadow');
        outline && (0, dom_1.remove_node)(outline);
        (_a = this.svg_path) === null || _a === void 0 ? void 0 : _a.removeAttribute('filter');
    };
    /**
     * Add or remove the UI indicating if this block is movable or not.
     * @override
     */
    BlockSvg.prototype.update_movable = function () {
        _super.prototype.update_movable.call(this);
        // 颜色积木不使用shadow样式
        if (this.is_shadow() && this.element_type !== 'param_color') {
            this.svg_group.classList.remove('blocklyDraggable');
            this.svg_group.classList.add('blocklyShadow');
        }
    };
    /**
     * Enable or disable a block.
     */
    BlockSvg.prototype.update_disabled = function () {
        if (!this.svg_group || !this.svg_path) {
            throw new ReferenceError('Cannot update disable to block without init.');
        }
        if (!this.is_insertion_marker() && !this.prevent_disable_style_change) {
            // insertion_marker 和 不改变样式的积木 自身不需要update，但是后续的积木仍需要
            if (this.disabled || this.get_inherited_disabled()) {
                (0, dom_1.add_class_if_necessary)(this.svg_group, 'blocklyDisabled');
                if (!this.is_shadow()) {
                    this.svg_path.setAttribute('fill', "url(#" + this.workspace.get_options().disabledPatternId + ")");
                }
                if (this.is_starting_block()) {
                    var field_icon = this.get_field_icon();
                    if (field_icon && field_icon.image_element) {
                        field_icon.image_element.setAttribute('filter', "url(#" + svg_filter_1.FILTER.DISABLED_HEAD_ICON + ")");
                    }
                }
            }
            else {
                if (this.svg_group.classList.contains('blocklyDisabled')) {
                    this.svg_group.classList.remove('blocklyDisabled');
                    if (this.is_starting_block()) {
                        var field_icon = this.get_field_icon();
                        if (field_icon && field_icon.image_element) {
                            field_icon.image_element.removeAttribute('filter');
                        }
                    }
                    this.update_colour();
                }
            }
        }
        var children = this.get_children();
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            child.update_disabled();
        }
    };
    BlockSvg.prototype.get_output_shape = function () {
        return this.output_connection != undefined && this.output_connection.get_output_shape();
    };
    /**
     * 是否是纯文字型的shadow。
     * 纯文字的shadow背景为白色，且有描边。
     * 非纯文字的shadow无描边。
     */
    BlockSvg.prototype.is_text_shadow = function () {
        if (!this.is_shadow()) {
            return false;
        }
        for (var i = 0; i < this.inputList.length; i++) {
            var input = this.inputList[i];
            for (var j = 0; j < input.fieldRow.length; j++) {
                var field = input.fieldRow[j];
                if ((0, base_1.is_field_number)(field) ||
                    (0, base_1.is_field_text_input)(field) ||
                    field.field_type === 'FieldTextDropdown' ||
                    field.field_type === 'FieldMultilineInput' ||
                    field.field_type === 'FieldDefaultValue') {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Return the coordinates of the top-left corner of this block relative to the
     * drawing surface's origin (0, 0), in workspace units.
     *
     * If the block is on the workspace, (0, 0) is the origin of the workspace
     * coordinate system, which means the x position of the left-most block +
     * the y position of the top-most block in the surface.
     *
     * i.e. return the coordinates relative to the top-left corner of **blocklyBlockCanvas**
     * element, or **blocklyBlockDragSurface** / **blocklyWsDragSurface** while dragging.
     *
     * This does not change with workspace scale or workspace scroll position.
     *
     * @returns Return a new vec2 object.
     */
    BlockSvg.prototype.get_relative_to_surface_xy = function () {
        // The drawing surface is relative to either the workspace canvas
        // or to the drag surface group.
        var _a, _b;
        var drag_surface_group = this.use_drag_surface ?
            (_a = this.workspace.get_block_drag_surface()) === null || _a === void 0 ? void 0 : _a.get_group() : undefined;
        var element = this.get_svg_root();
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
    /**
    * Return the coordinates of the top-left corner of this block relative to
    * the div blockly was injected into.
    * @returns Object with .x and .y properties.
    */
    BlockSvg.prototype.get_relative_to_injection_div_xy = function () {
        var element = this.get_svg_root();
        return this.utils.get_injection_div_xy(element);
    };
    /**
     * Returns a list of comment and warning icons.
     * Icons are special inputs or fields
     * @return List of icons.
     */
    BlockSvg.prototype.get_icons = function () {
        var icons = [];
        if (this.comment) {
            icons.push(this.comment);
        }
        if (this.warning) {
            icons.push(this.warning);
        }
        return icons;
    };
    /**
     * @override
     */
    BlockSvg.prototype.set_dragging = function (adding) {
        if (this.svg_group == undefined) {
            console.warn('Cannot set delete style for block without init.');
            return;
        }
        var group = this.svg_group;
        if (adding) {
            group.translate_ = '';
            group.skew_ = '';
            this.runtime_data.dragging_connections = this.runtime_data.dragging_connections.concat(this.get_connections(true));
            (0, dom_1.add_class)(group, "blocklyDragging" /* DRAGGING */);
        }
        else {
            this.runtime_data.dragging_connections = [];
            (0, dom_1.remove_class)(group, "blocklyDragging" /* DRAGGING */);
        }
        // Recurse through all blocks attached under this one.
        for (var i = 0; i < this.child_blocks.length; i++) {
            this.child_blocks[i].set_dragging(adding);
        }
    };
    /**
     * Snap this block to the nearest grid point.
     */
    BlockSvg.prototype.snap_to_grid = function () {
        if (!this.workspace) {
            return; // Deleted block.
        }
        if (this.workspace.is_dragging() ||
            (this.workspace.current_gesture_ && this.workspace.current_gesture_.has_started)) {
            return; // Don't bump blocks during a drag.
        }
        if (this.get_parent()) {
            return; // Only snap top-level blocks.
        }
        if (this.is_in_flyout) {
            return; // Don't move blocks around in a flyout.
        }
        var grid = this.workspace.get_grid();
        if (!grid || typeof grid === 'string' || !grid.should_snap()) {
            return; // Config says no snapping.
        }
        var spacing = grid.get_spacing();
        var half = spacing / 2;
        var xy = this.get_relative_to_surface_xy();
        gl_matrix_1.vec2.round(xy, [
            Math.round((xy[0] - half) / spacing) * spacing + half - xy[0],
            Math.round((xy[1] - half) / spacing) * spacing + half - xy[1],
        ]);
        if (xy[0] != 0 || xy[1] != 0) {
            this.move_by(xy);
        }
    };
    /**
     * Schedule snapping to grid and bumping neighbours to occur after a brief
     * delay.
     * @package
     */
    BlockSvg.prototype.schedule_snap_and_bump = function () {
        var _this = this;
        var block = this;
        // Ensure that any snap and bump are part of this move's event group.
        var group = this.events.get_group();
        window.setTimeout(function () {
            if (_this.events.get_group() && _this.events.get_group() !== group) {
                // console.error(`current group ${this.events.get_group()}, blocking scheduled snap and bump`);
                return;
            }
            _this.events.set_group(group);
            block.snap_to_grid();
            _this.events.set_group(false);
        }, this.theme.blink_params.BUMP_DELAY / 2);
        window.setTimeout(function () {
            if (_this.events.get_group() && _this.events.get_group() !== group) {
                // console.error(`current group ${this.events.get_group()}, blocking scheduled snap and bump`);
                return;
            }
            _this.events.set_group(group);
            block.bump_neighbours();
            _this.events.set_group(false);
        }, this.theme.blink_params.BUMP_DELAY);
    };
    /**
     * Set whether this block is an insertion marker block or not.
     * @param insertion_marker True if an insertion marker.
     * @param min_width Optional minimum width of the marker.
     */
    BlockSvg.prototype.set_insertion_marker = function (insertion_marker) {
        // if (this._is_insertion_marker == insertion_marker) {
        //   return;  // No change.
        // }
        this._is_insertion_marker = insertion_marker;
        // if (min_width != undefined) {
        //   this.insertion_marker_min_width = min_width;
        // }
        if (this._is_insertion_marker) {
            var connect_effect = this.workspace.get_options().connection_effect;
            var marker_color = connect_effect ? connect_effect.color : this.theme.insertion_marker.COLOR;
            this.set_colour(marker_color);
            this.set_opacity(this.theme.insertion_marker.OPACITY);
            if (this.svg_group != undefined) {
                (0, dom_1.add_class)(this.svg_group, "InsertionMarker" /* INSERTION_MARKER */);
            }
        }
        this.update_colour();
    };
    /**
     * Visual effect to show that if the dragging block is dropped, this block will
     * be replaced.  If a shadow block it will disappear.  Otherwise it will bump.
     * @param add True if highlighting should be added.
     */
    BlockSvg.prototype.highlight_for_replacement = function (add) {
        if (this.svg_path == undefined || this.svg_group == undefined) {
            console.warn('Cannot highlight block without init.');
            return;
        }
        // 分情况增加高亮特效。
        if (add) {
            (0, dom_1.add_class)(this.svg_group, 'blocklyReplaceable');
            // 非shadow积木的替换高亮，只需要在外围进行描边
            // 如：已经嵌入其他积木的输出积木的替换、结束积木的替换
            if (!this.is_shadow() || this.element_type === 'param_color') {
                this.svg_path.setAttribute('stroke', '#ffffff');
                this.svg_path.setAttribute('stroke-width', '3');
                return;
            }
            // 原来有边框的shadow积木的替换高亮，2px边框，增加filter
            // 如：阴影输入框上发生的替换
            if (this.get_stroke_width() !== this.theme.shadow_style.NO_BORDER) {
                var parent_block_color = this.parent_block.get_colour();
                this.svg_path.setAttribute('stroke', parent_block_color.toString());
                this.svg_path.setAttribute('stroke-width', '2');
                this.svg_path.setAttribute('filter', "url(#" + svg_filter_1.FILTER.REPLACEMENT_GLOW + ")");
                return;
            }
            // 原来无边框的shadow积木的替换高亮，增加3px白色边框
            // 如：logic_empty上发生的替换，shadow dropdown上发生的替换
            this.svg_path.setAttribute('stroke', '#ffffff');
            this.svg_path.setAttribute('stroke-width', '3');
            // 非纯文字型shadow，高亮后还会改变底色
            if (this.is_editable() && !this.is_text_shadow()) {
                this.svg_path.style.fillOpacity = '0.1';
            }
            return;
        }
        // 移除上述所有情况的高亮特效。
        (0, dom_1.remove_class)(this.svg_group, 'blocklyReplaceable');
        this.svg_path.setAttribute('stroke', this.get_border_colour().toString());
        this.svg_path.setAttribute('stroke-width', this.get_stroke_width());
        this.svg_path.removeAttribute('filter');
        this.svg_path.style.fillOpacity = '';
    };
    /**
     * Position an new block correctly, so that it doesn't move the existing block
     * when connected to it.
     * @param new_block The block to position - either the first
     *     block in a dragged stack or an insertion marker.
     * @param newConnection The connection on the new block's
     *     stack - either a connection on new_block, or the last NEXT_STATEMENT
     *     connection on the stack if the stack's being dropped before another
     *     block.
     * @param existingConnection The connection on the
     *     existing block, which new_block should line up with.
     */
    BlockSvg.prototype.position_new_block = function (new_block, newConnection, existingConnection) {
        // We only need to position the new block if it's before the existing one,
        // otherwise its position is set by the previous block.
        if (newConnection.type == interfaces_1.CONNECTION_TYPE.NEXT_STATEMENT) {
            var result = gl_matrix_1.vec2.create();
            gl_matrix_1.vec2.sub(result, existingConnection.get_xy(), newConnection.get_xy());
            new_block.move_by(result);
        }
    };
    /**
     * @override blocks may have parents.
     * By placing this block first within the block group's <g>,
     * it will render on top of any other blocks.
     */
    BlockSvg.prototype.bring_to_front = function () {
        var _this = this;
        if (!this.workspace.svg_block_canvas_)
            return;
        var block = this;
        do {
            var root = block.get_svg_root();
            if (root != undefined && root.parentNode != undefined) {
                root.parentNode.appendChild(root);
            }
            block = block.get_parent();
        } while (block);
        // 积木注释永远在积木自身的上方，
        // 但积木组内的注释需要保持相对层级不变。
        var all_comment_svg = [];
        this.get_descendants().forEach(function (block) {
            if (block.comment) {
                all_comment_svg.push(block.comment.get_svg_root());
            }
        });
        var all_elements = Array.from(this.workspace.svg_block_canvas_.children);
        all_elements.forEach(function (element) {
            if (all_comment_svg.includes(element)) {
                _this.workspace.svg_block_canvas_.appendChild(element);
            }
        });
    };
    /**
     * Return the parent blcok of this block or undefind.
     */
    BlockSvg.prototype.get_parent = function () {
        return this.parent_block;
    };
    /**
     * Set parent of this block to be a new block or undefined.
     * @param new_parent New parent block.
     */
    BlockSvg.prototype.set_parent = function (new_parent) {
        if (!this.workspace.svg_block_canvas_)
            return;
        var old_parent = this.get_parent();
        if (new_parent === old_parent) {
            return;
        }
        this.utils.start_text_cache();
        if (this.parent_block) {
            // Remove this block from the old parent's child list.
            (0, array_1.remove)(this.parent_block.child_blocks, this);
            // Disconnect from superior blocks.
            if (this.previous_connection && this.previous_connection.is_connected()) {
                throw new Error('Still connected to previous block.');
            }
            if (this.output_connection && this.output_connection.is_connected()) {
                throw new Error('Still connected to parent block.');
            }
            this.parent_block = undefined;
            // This block hasn't actually moved on-screen, so there's no need to update
            // its connection locations.
        }
        else {
            // Remove this block from the workspace's list of top-most blocks.
            this.workspace.remove_top_block(this);
        }
        this.parent_block = new_parent;
        if (new_parent) {
            // Add this block to the new parent's child list.
            new_parent.child_blocks.push(this);
        }
        else {
            this.workspace.add_top_block(this);
        }
        this.utils.stop_text_cache();
        var svg_root = this.get_svg_root();
        // Bail early if workspace is clearing, or we aren't rendered.
        // We won't need to reattach ourselves anywhere.
        if (this.workspace.is_clearing || !svg_root) {
            return;
        }
        var old_xy = this.get_relative_to_surface_xy();
        if (new_parent) {
            new_parent.get_svg_root().appendChild(svg_root);
            var new_xy = this.get_relative_to_surface_xy();
            this.move_connections(gl_matrix_1.vec2.subtract(new_xy, new_xy, old_xy));
            // If we are a shadow block, inherit tertiary colour.
            if (this.is_shadow()) {
                this.set_colour(this.get_colour(), this.get_border_colour());
            }
        }
        else if (old_parent) {
            // If we are losing a parent,
            // we want to move our DOM element to the root of the workspace.
            // Avoid moving a block up the DOM if it's currently selected/dragging,
            // so as to avoid taking things off the drag surface.
            if (this.runtime_data.selected !== this || !this.workspace.is_dragging()) {
                this.workspace.svg_block_canvas_.appendChild(svg_root);
                this.translate(old_xy);
            }
        }
    };
    /**
     * @override consider shadow and parent.
     */
    BlockSvg.prototype.select = function () {
        if (this.is_shadow() && this.get_parent()) {
            // Shadow blocks should not be selected.
            var parent_1 = this.get_parent();
            if (parent_1 != undefined) {
                parent_1.select();
            }
            return;
        }
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
        this.runtime_data.selected = this;
        if (this.events.is_enabled()) {
            var event_1 = this.ui_event_factory({
                type: interfaces_1.UIEventType.SELECTED,
                workspace_id: this.workspace.id,
                old_value: old_id,
                new_value: this.id,
            });
            this.events.fire(event_1);
        }
        // Nemo, Wood no need; kitten override in project
        // this.add_select();
    };
    /**
     * @override handle specific class.
     */
    BlockSvg.prototype.move_to_drag_surface = function () {
        this.clear_hover_effect();
        if (this.workspace.options.blockly_type !== 'mobile') {
            this.svg_group.setAttribute('filter', "url(#" + svg_filter_1.FILTER.DRAG_SHADOW + ")");
        }
        _super.prototype.move_to_drag_surface.call(this);
    };
    /**
     * Set whether value inputs are arranged horizontally or vertically.
     * @param new_boolean True if inputs are horizontal.
     */
    BlockSvg.prototype.set_inputs_inline = function (new_boolean) {
        var event;
        if (this.inputs_inline !== new_boolean) {
            if (this.events.is_enabled()) {
                event = this.change_event_factory('inline', {
                    block: this,
                    old_value: !!this.inputs_inline,
                    new_value: new_boolean,
                });
            }
            this.inputs_inline = new_boolean;
        }
        if (this.rendered) {
            this.render();
        }
        if (event) {
            this.events.fire(event);
        }
    };
    /**
     * Get whether value inputs are arranged horizontally or vertically
     * @returns True if inputs are horizontal
     */
    BlockSvg.prototype.get_inputs_inline = function () {
        if (this.inputs_inline != undefined) {
            // Set explicitly
            return this.inputs_inline;
        }
        return true;
    };
    /**
     * Glow the stack starting with this block, to highlight it visually as if it's running.
     * @param is_glowing_stack Whether the stack starting with this block should glow.
     */
    BlockSvg.prototype.set_glow_stack = function (is_glowing_stack) {
        this.is_glowing_stack = is_glowing_stack;
        // Update the applied SVG filter if the property has changed
        var svg = this.svg_group;
        if (svg == undefined) {
            throw new Error('Block may not been init.');
        }
        if (this.is_glowing_stack) {
            (0, dom_1.add_class_if_necessary)(svg, 'blocklyStackGlow');
        }
        else {
            (0, dom_1.remove_class_if_necessary)(svg, 'blocklyStackGlow');
        }
    };
    BlockSvg.prototype.set_flash = function (flash) {
        this.is_flashing = flash;
        this.block_animations.block_flash_effect(this, this.is_flashing);
    };
    // 下面两个接口不是很想保留，但被业务多处调用，暂时放着
    /**
     * 设置积木 **调试时** 的高亮，
     * 并非选择的高亮，目前选择积木没有特殊样式。
     * @deprecated use this.set_glow_stack(true) instead
     */
    BlockSvg.prototype.add_select = function () {
        this.set_glow_stack(true);
    };
    /**
     * 取消积木 **调试时** 的高亮，
     * 并非选择的高亮，目前选择积木没有特殊样式。
     * @deprecated use this.set_glow_stack(false) instead
     */
    BlockSvg.prototype.remove_select = function () {
        this.set_glow_stack(false);
    };
    /**
     * Bump unconnected blocks out of alignment.
     * Two blocks which aren't actually connected should not coincidentally line up on screen.
     */
    BlockSvg.prototype.bump_neighbours = function () {
        if (!this.workspace) {
            return; // Deleted block.
        }
        if (this.workspace.is_dragging() ||
            (this.workspace.current_gesture_ && this.workspace.current_gesture_.is_dragging() && this.workspace.current_gesture_.has_started)) {
            return; // Don't bump blocks during a drag.
        }
        // prevent bumping when undoing
        if (!this.events.is_record_undo()) {
            return;
        }
        // Operations cannot cause workspace resizing should not cause bumping either.
        // e.g. updateShape before block is moved to correct position, during paste
        if (!this.workspace.is_resizes_enabled()) {
            return;
        }
        var rootBlock = this.get_top_parent();
        if (rootBlock.is_in_flyout) {
            return; // Don't move blocks around in a flyout.
        }
        if ((constants_1.NEED_COLLAPSE_CHILDREN_BLOCKS.includes(this.type) || this.is_include_special_input())
            && this.is_collapsed()) {
            return; // Don't trigger bump in collapsed child blocks.
        }
        // Loop through every connection on this block.
        var myConnections = this.get_connections(false);
        for (var i = 0; i < myConnections.length; i++) {
            var connection = myConnections[i];
            // Spider down from this block bumping all sub-blocks.
            var block = connection.targetBlock();
            if (block != undefined && connection.is_connected() && connection.is_superior()) {
                block.bump_neighbours();
            }
            var neighbours = connection.neighbours_(this.theme.blink_params.SNAP_RADIUS);
            for (var j = 0; j < neighbours.length; j++) {
                var otherConnection = neighbours[j];
                // If both connections are connected, that's probably fine.  But if
                // either one of them is unconnected, then there could be confusion.
                if (!connection.is_connected() || !otherConnection.is_connected()) {
                    // Only bump blocks if other block is visible and they are from different tree structures.
                    var other_root_block = otherConnection.get_source_block().get_top_parent();
                    if ((other_root_block === null || other_root_block === void 0 ? void 0 : other_root_block.get_visibility()) !== 'hidden' &&
                        other_root_block != rootBlock) {
                        // Always bump the inferior block.
                        if (connection.is_superior()) {
                            otherConnection.bump_away_from(connection);
                        }
                        else {
                            connection.bump_away_from(otherConnection);
                        }
                    }
                }
            }
        }
    };
    /**
     * @override Returns a bounding box describing the dimensions of this block
     * and any blocks stacked below it.
     * 这里获取的宽高为积木块的占位宽高，宽度为包含所有fields的宽度
     * @return 积木块的占位高度和宽度
     *    properties in workspace units.
     */
    BlockSvg.prototype.get_height_width = function () {
        var height = this.height;
        var width = this.width;
        if (this.is_wrap_shape() && !this.is_collapsed()) {
            this.inputList.forEach(function (input) {
                if (input.type !== interfaces_1.InputType.STATEMENT
                    || !input.connection) {
                    return;
                }
                var target_block = input.connection.targetBlock();
                if (target_block) {
                    width = Math.max(width, target_block.get_height_width().width);
                }
            });
        }
        // Recursively add size of subsequent blocks.
        var next_block = this.get_full_next_block();
        if (this.is_collapsed() && this.is_starting_block()) {
            next_block = undefined;
        }
        if (next_block) {
            var next_height_width = next_block.get_height_width();
            height += next_height_width.height; // Don't count Height of tab.
            width = Math.max(width, next_height_width.width);
        }
        return { height: height, width: width };
    };
    /**
     * 返回整个积木块svg path的宽度
     * @returns 积木块svg path的宽度
     */
    BlockSvg.prototype.get_blocks_svg_path_width = function () {
        var svg_path_width = this.svg_path_width;
        // Recursively add size of subsequent blocks.
        var nextBlock = this.get_next_block();
        if (nextBlock) {
            svg_path_width = Math.max(svg_path_width, nextBlock.get_blocks_svg_path_width());
        }
        return svg_path_width;
    };
    /**
     * Open the next (or previous) FieldTextInput.
     * @param start Current location.
     * @param forward If true go forward, otherwise backward.
     */
    BlockSvg.prototype.tab = function (start, forward) {
        var list = this.create_tab_list();
        var i = start && list.indexOf(start);
        if (typeof i !== 'number' || i === -1) {
            // No start location, start at the beginning or end.
            i = forward ? -1 : list.length;
        }
        var target = list[forward ? i + 1 : i - 1];
        if (!target) {
            // Ran off of list.
            // If there is an output, tab up to that block.
            var outputBlock = this.output_connection && this.output_connection.targetBlock();
            if (outputBlock) {
                outputBlock.tab(this, forward);
            }
            else { // Otherwise, go to next / previous block, depending on value of `forward`
                var block = forward ? this.get_next_block() : this.get_previous_block();
                if (block) {
                    block.tab(this, forward);
                }
            }
        }
        else if ((0, base_1.is_func)(target.tab)) {
            target.tab(undefined, forward);
        }
        else if ((0, base_1.is_func)(target.show_editor)) {
            target.show_editor();
        }
    };
    /**
     * Create an ordered list of all text fields and connected inputs.
     * @return The ordered list.
     */
    BlockSvg.prototype.create_tab_list = function () {
        // This function need not be efficient since it runs once on a keypress.
        var list = [];
        for (var i = 0; i < this.inputList.length; i++) {
            var input = this.inputList[i];
            for (var j = 0; j < input.fieldRow.length; j++) {
                var field = input.fieldRow[j];
                if (field.show_editor) {
                    list.push(field);
                }
            }
            if (input.connection) {
                var block = input.connection.targetBlock();
                if (block) {
                    list.push(block);
                }
            }
        }
        return list;
    };
    BlockSvg.prototype.remove_input = function (name, opt_quiet) {
        for (var i = 0; i < this.inputList.length; i++) {
            var input = this.inputList[i];
            if (input.name == name) {
                if (input.connection && input.connection.is_connected()) {
                    input.connection.set_shadow_dom(undefined);
                    var block = input.connection.targetBlock();
                    if (block.is_shadow()) {
                        this.events.disable();
                        // Destroy any attached shadow block.
                        block.dispose();
                        this.events.enable();
                    }
                    else {
                        // Disconnect any attached normal block.
                        block.unplug();
                    }
                }
                input.dispose();
                this.inputList.splice(i, 1);
                if (this.rendered) {
                    this.render();
                }
                return;
            }
        }
        if (!opt_quiet) {
            console.warn("Input " + name + " not found.");
        }
        if (this.rendered) {
            this.render();
            // Removing an input will cause the block to change shape.
            // this.bump_neighbours();
        }
    };
    /**
     * Move a numbered input to a different location on this block.
     * @param inputIndex Index of the input to move.
     * @param refIndex Index of input that should be after the moved input.
     */
    BlockSvg.prototype.move_numbered_input_before = function (inputIndex, refIndex) {
        // Validate arguments.
        if (inputIndex == refIndex) {
            throw new Error('Can\'t move input to itself.');
        }
        if (inputIndex >= this.inputList.length) {
            throw new Error("Input index " + inputIndex + " out of bounds.");
        }
        if (refIndex > this.inputList.length) {
            throw new Error("Reference input " + refIndex + " out of bounds.");
        }
        // Remove input.
        var input = this.inputList[inputIndex];
        this.inputList.splice(inputIndex, 1);
        if (inputIndex < refIndex) {
            refIndex--;
        }
        // Reinsert input.
        this.inputList.splice(refIndex, 0, input);
        if (this.rendered) {
            this.render();
            // Moving an input will cause the block to change shape.
            // this.bump_neighbours();
        }
    };
    // Check if notch need to be drawn。
    BlockSvg.prototype.is_render_notch = function () {
        return this.workspace.options.notch;
    };
    BlockSvg.prototype.get_visibility = function () {
        return this.visibility_;
    };
    BlockSvg.prototype.set_visibility = function (visibility) {
        this.visibility_ = visibility;
    };
    BlockSvg.prototype.set_chunk_visibility = function (visibility_) {
        var top_block = this.get_top_parent();
        if (top_block.visibility_ !== visibility_) {
            var event_2;
            if (this.events.is_enabled()) {
                event_2 = this.change_event_factory('visibility', {
                    block: top_block,
                    old_value: top_block.visibility_,
                    new_value: visibility_,
                });
            }
            top_block.visibility_ = visibility_;
            event_2 && this.events.fire(event_2);
        }
    };
    /**
     * 更新当前积木块的可见状态
     */
    BlockSvg.prototype.update_chunk_visibility = function () {
        if (this.parent_block) {
            return;
        }
        this.events.disable();
        // 更新 top_block 的状态和样式
        var top_block = this.get_top_parent();
        var all_blocks = top_block.get_descendants();
        (0, dom_1.update_visibility_class)(top_block.svg_group, top_block.get_visibility());
        var operable = top_block.get_visibility() !== 'hidden';
        top_block.set_connectable(operable);
        top_block.comment && top_block.comment.update_visibility();
        // 将除了 top_block 以外的积木都更新一下。
        // 作为子积木时，自身状态一定是可见，整体状态由顶积木决定。
        all_blocks
            .forEach(function (block) {
            if (block === top_block)
                return;
            if (block.visibility_ === interfaces_1.BlockVisibility.VISIBLE)
                return;
            block.visibility_ = interfaces_1.BlockVisibility.VISIBLE;
            (0, dom_1.update_visibility_class)(block.svg_group, interfaces_1.BlockVisibility.VISIBLE);
            block.comment && block.comment.update_visibility();
        });
        this.events.enable();
    };
    BlockSvg.prototype.is_connectable = function () {
        return this.connectable_;
    };
    BlockSvg.prototype.set_connectable = function (operable) {
        this.connectable_ = operable;
    };
    BlockSvg.prototype.is_stack_connectable = function () {
        var _a;
        var parent = this;
        while (parent) {
            if (!parent.is_connectable())
                return false;
            parent = (_a = parent.previous_connection) === null || _a === void 0 ? void 0 : _a.targetBlock();
        }
        return true;
    };
    BlockSvg.prototype.get_input_index = function (input_name) {
        var input = this.get_input(input_name);
        if (!input) {
            return -1;
        }
        return this.inputList.indexOf(input);
    };
    BlockSvg.prototype.mutation_to_string = function () {
        if (!this.mutationToDom)
            return '';
        var dom = this.mutationToDom();
        if (!dom)
            return '';
        return this.xml.dom_to_text(dom);
    };
    BlockSvg.prototype.string_to_mutation = function (mutation_string) {
        if (!this.domToMutation)
            return;
        if (mutation_string) {
            this.domToMutation(this.xml.text_to_dom(mutation_string));
        }
        else {
            try {
                this.domToMutation(undefined);
            }
            catch (e) {
                // 某些积木的domToMutation方法预设了入参一定存在，此处做容错
            }
        }
    };
    /**
     * Set block opacity for SVG rendering.
     * @param opacity Intended opacity, between 0 and 1
     */
    BlockSvg.prototype.set_opacity = function (opacity) {
        this.opacity = opacity;
        if (this.rendered) {
            this.update_colour();
        }
    };
    /**
     * This method returns a string describing this Block in developer terms
     * (type name and ID; English only).
     *
     * Intended to on be used in console logs and errors.
     * If you need a string that uses the user's native language
     * (including block text, field values, and child blocks),
     * use [toString()]/
     * @return The description.
     */
    BlockSvg.prototype.to_dev_string = function () {
        var msg = this.type ? "\"" + this.type + "\" block" : 'Block';
        if (this.id) {
            msg += " (id=\"" + this.id + "\")";
        }
        return msg;
    };
    /**
     * 目前可能被外部项目使用。
     * @deprecated set block.rendered directly.
     * @return is the element currently rendered.
     */
    BlockSvg.prototype.is_rendered = function () {
        return this.rendered;
    };
    /**
     * 目前被外部项目使用，至少kitten有，具体范围不确定。
     * @deprecated set block.rendered directly.
     * @param new_boolean is the element currently rendered.
     */
    BlockSvg.prototype.set_rendered = function (new_boolean) {
        this.rendered = new_boolean;
    };
    /**
     * Set this block's category (for styling purposes)
     * @param {?string} category The block's category (see constants.js).
     */
    BlockSvg.prototype.set_category = function (category) {
        this.category_ = category;
    };
    /**
     * Set this block's output shape.
     * e.g., undefined, OUTPUT_SHAPE_HEXAGONAL, OUTPUT_SHAPE_ROUND, OUTPUT_SHAPE_SQUARE.
     * @param {?number} outputShape Value representing output shape
     *     (see constants.js).
     */
    BlockSvg.prototype.set_output_shape = function (outputShape) {
        this.output_shape = outputShape;
    };
    BlockSvg.prototype.set_help_url = function (url) {
        this.help_url = url;
    };
    BlockSvg.prototype.options_add_help = function (menuOptions) {
        var _this = this;
        // Option to get help.
        var url = (0, base_1.is_func)(this.help_url) ?
            this.help_url() :
            this.help_url;
        var helpOption = {
            enabled: !!url,
            name: 'help',
            text: this.Msg.HELP,
            callback: function () {
                _this.show_help();
            },
        };
        menuOptions.push(helpOption);
    };
    /**
     * Load the block's help page in a new window.
     */
    BlockSvg.prototype.show_help = function () {
        if (this.help_url) {
            window.open(this.help_url);
        }
    };
    BlockSvg.prototype.sort = function (cursor) {
        var xy = this.get_relative_to_surface_xy();
        this.move_by(gl_matrix_1.vec2.sub(xy, cursor, xy));
        this.snap_to_grid();
        gl_matrix_1.vec2.add(cursor, cursor, [0, this.get_height_width().height + this.theme.renderer.MIN_HEIGHT]);
    };
    /**
     * 对积木本身及其所有后代元素执行一个回调。
     * 被执行的元素包括积木和注释。
     */
    BlockSvg.prototype.for_each_descendant_element = function (cb, ordered) {
        var _a;
        if (ordered === void 0) { ordered = false; }
        cb(this);
        this.comment && cb(this.comment);
        if (!ordered) {
            for (var i = 0; i < this.child_blocks.length; i++) {
                var child = this.child_blocks[i];
                child.for_each_descendant_element(cb, false);
            }
            return;
        }
        for (var i = 0; i < this.inputList.length; i++) {
            var child = (_a = this.inputList[i].connection) === null || _a === void 0 ? void 0 : _a.targetBlock();
            if (child) {
                child.for_each_descendant_element(cb, true);
            }
        }
        var next = this.get_next_block();
        if (next) {
            next.for_each_descendant_element(cb, true);
        }
    };
    BlockSvg.prototype.get_original_colour = function () {
        return this.colour_;
    };
    BlockSvg.prototype.get_border_colour = function () {
        var _a;
        if (this.is_shadow() && this.element_type !== 'param' && this.element_type !== 'param_color') {
            return ((_a = this.parent_block) === null || _a === void 0 ? void 0 : _a.get_border_colour()) || this.theme.block_color.DEFAULT.border;
        }
        return this.border_colour;
    };
    BlockSvg.prototype.get_stroke_width = function () {
        if (!this.is_shadow() || this.element_type === 'param' || this.element_type === 'param_color') {
            return '1px';
        }
        if (this.is_editable() && this.is_text_shadow()) {
            return this.theme.shadow_style.BORDER;
        }
        return this.theme.shadow_style.NO_BORDER;
    };
    BlockSvg.prototype.get_colour = function () {
        var _a, _b;
        if (this.is_shadow() && this.element_type !== 'param' && this.element_type !== 'param_color') {
            if (this.is_editable()) {
                return this.theme.shadow_style.SHADOW_COLOR;
            }
            return this.theme.shadow_style.EMPTY_COLOR;
        }
        if ((this.disabled || this.get_inherited_disabled()) && !this.prevent_disable_style_change) {
            return this.theme.disabled_color.fill;
        }
        if (this.layer_colour &&
            this.is_output_block() &&
            ((_a = this.parent_block) === null || _a === void 0 ? void 0 : _a.get_colour()) === this.colour_) {
            return this.layer_colour;
        }
        if (!this.is_editable()) {
            var fill_color = ((_b = this.get_parent()) === null || _b === void 0 ? void 0 : _b.get_colour()) || this.colour_;
            return (0, color_1.darken)(fill_color, 0.1);
        }
        return this.colour_;
    };
    BlockSvg.prototype.set_colour_by_key = function (colour_key) {
        var colors = colour_key && this.theme.get_color(colour_key);
        if (colors) {
            this.set_colour(colors.fill, colors.border, colors.layer);
        }
    };
    /**
     * Set the colour of the block from JSON, replacing message references as
     * needed.
     * @param json Structured data describing the block.
     */
    BlockSvg.prototype.set_colour_from_json = function (json) {
        this.set_colour_by_key(json['colour']);
    };
    BlockSvg.prototype.set_colour = function (colour, border_colour, layer_colour) {
        this.colour_ = typeof colour === 'string' ? new color_1.Color(colour) : colour;
        if (border_colour != undefined) {
            this.border_colour = typeof border_colour === 'string' ? new color_1.Color(border_colour) : border_colour;
        }
        else {
            this.border_colour = (0, color_1.darken)(this.colour_, 0.1);
        }
        if (layer_colour != undefined) {
            this.layer_colour = typeof layer_colour === 'string' ? new color_1.Color(layer_colour) : layer_colour;
        }
        else {
            this.layer_colour = undefined;
        }
        if (this.rendered) {
            this.update_colour();
        }
    };
    /**
     * Change the colour of a block.
     */
    BlockSvg.prototype.update_colour = function () {
        if (!this.svg_path) {
            throw new ReferenceError('Cannot update color without svg path.');
        }
        this.svg_path.setAttribute('fill', this.get_colour().toString());
        this.svg_path.setAttribute('stroke', this.get_border_colour().toString());
        this.svg_path.setAttribute('stroke-opacity', '1');
        this.svg_path.setAttribute('stroke-width', this.get_stroke_width());
        // comment颜色不再跟随block更新
        this.warning && this.warning.update_colour();
    };
    /**
     * change the layer color of a block.
     */
    BlockSvg.prototype.update_layer_colour = function () {
        if (this.disabled || this.get_inherited_disabled() || !this.is_output_block() || !this.svg_path) {
            return;
        }
        var color = this.get_colour().toString();
        if (this.svg_path.getAttribute('fill') !== color) {
            this.svg_path.setAttribute('fill', color);
        }
        for (var i = 0; i < this.child_blocks.length; i++) {
            var child_block = this.child_blocks[i];
            child_block.update_layer_colour();
        }
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Blink)
    ], BlockSvg.prototype, "Blink", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.context_menu)
    ], BlockSvg.prototype, "context_menu", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.extensions)
    ], BlockSvg.prototype, "extensions", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Msg)
    ], BlockSvg.prototype, "Msg", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.xml)
    ], BlockSvg.prototype, "xml", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.RenderedConnection)
    ], BlockSvg.prototype, "RenderedConnection", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.registry)
    ], BlockSvg.prototype, "registry", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.FieldLabel)
    ], BlockSvg.prototype, "field_label_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.FieldLabelSerializable)
    ], BlockSvg.prototype, "field_label_serializable_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.FieldColour)
    ], BlockSvg.prototype, "field_colour_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.FieldDropdown)
    ], BlockSvg.prototype, "field_dropdown_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.FieldIcon)
    ], BlockSvg.prototype, "field_icon_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.FieldButton)
    ], BlockSvg.prototype, "field_button_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.MutationAddButton)
    ], BlockSvg.prototype, "mutation_add_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.MutationRemoveButton)
    ], BlockSvg.prototype, "mutation_remove_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.FieldNumber)
    ], BlockSvg.prototype, "field_number_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.FieldTextDropdown)
    ], BlockSvg.prototype, "field_text_dropdown_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.FieldTextInput)
    ], BlockSvg.prototype, "field_text_input_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.FieldDefaultValue)
    ], BlockSvg.prototype, "field_default_value", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.FieldImage)
    ], BlockSvg.prototype, "field_image_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.FieldMultilineInput)
    ], BlockSvg.prototype, "field_multiline_input", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Input)
    ], BlockSvg.prototype, "input_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.RenderedConnection)
    ], BlockSvg.prototype, "connection_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.ChangeEvent)
    ], BlockSvg.prototype, "change_event_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.WorkspaceComment)
    ], BlockSvg.prototype, "workspace_comment_factory", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.BlockGroup)
    ], BlockSvg.prototype, "block_group_factory", void 0);
    return BlockSvg;
}(workspace_element_1.WorkspaceElement));
exports.BlockSvg = BlockSvg;
