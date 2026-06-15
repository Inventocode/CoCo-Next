"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xml = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var interfaces_1 = require("../interfaces");
var di_1 = require("../di");
var base_1 = require("../utils/base");
var asserts_1 = require("../utils/asserts");
var maths_1 = require("../utils/maths");
var dom = (0, tslib_1.__importStar)(require("../utils/dom"));
var Xml = /** @class */ (function () {
    function Xml() {
        this.grouped_blocks = [];
        this.scoped_connections = [];
    }
    Xml.prototype.workspace_to_dom = function (workspace, opt_noId) {
        var xml = dom.create_dom('xml');
        var blocks = workspace.get_top_blocks(true);
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i];
            if (!block.is_insertion_marker() && !block.parent_group) {
                xml.appendChild(this.block_to_dom_with_xy(block, opt_noId));
            }
        }
        var comments = workspace.get_top_comments(true);
        for (var i = 0; i < comments.length; i++) {
            var comment = comments[i];
            xml.appendChild(this.comment_to_dom_with_xy(comment, opt_noId));
        }
        return xml;
    };
    /**
     * Decode an XML DOM and create blocks on the workspace.
     * Not clear current ws, so clear ws manually if needed.
     *
     * @param xml XML DOM.
     * @param workspace The workspace.
     * @returns An array containing new **top** block ids.
     */
    Xml.prototype.dom_to_workspace = function (xml, workspace) {
        // Not used in LTR.
        // const width = workspace.RTL ? workspace.get_width() : 0;
        var width = 0;
        var new_block_ids = []; // A list of block ids added by this call.
        this.utils.start_text_cache();
        // Safari 7.1.3 is known to provide node lists with extra references to
        // children beyond the lists' length.  Trust the length, do not use the
        // looping pattern of checking the index for an object.
        var childCount = xml.childNodes.length;
        var existingGroup = this.events.get_group();
        if (!existingGroup) {
            this.events.set_group(true);
        }
        var currently_resizes_enabled = workspace.is_resizes_enabled();
        // Disable workspace resizes as an optimization.
        if (currently_resizes_enabled) {
            workspace.set_resizes_enabled(false);
        }
        try {
            for (var i = 0; i < childCount; i++) {
                var xml_child = xml.childNodes[i];
                var name_1 = xml_child.nodeName.toLowerCase();
                var element = void 0;
                if (name_1 == 'block' ||
                    (name_1 == 'shadow' && !this.events.is_record_undo()) ||
                    (name_1 == 'empty' && !this.events.is_record_undo())) {
                    // Allow top-level shadow blocks if recordUndo is disabled since
                    // that means an undo is in progress.  Such a block is expected
                    // to be moved to a nested destination in the next operation.
                    element = this.dom_to_block(xml_child, workspace);
                }
                else if (name_1 === 'shadow' || name_1 === 'empty') {
                    console.error('Shadow block cannot be a top-level block.');
                }
                else if (name_1 === 'comment') {
                    element = this.dom_to_workspace_comment(xml_child, workspace);
                }
                if (!element) {
                    continue;
                }
                new_block_ids.push(element.id);
                var element_x = parseInt(xml_child.getAttribute('x') || '0', 10);
                var element_y = parseInt(xml_child.getAttribute('y') || '0', 10);
                if (!isNaN(element_x) && !isNaN(element_y)) {
                    element_x = workspace.RTL ? width - element_x : element_x;
                    if ((0, base_1.is_block_svg)(element) && element.parent_group) {
                        element.parent_group.move_by(gl_matrix_1.vec2.fromValues(element_x, element_y));
                    }
                    else {
                        element.move_by(gl_matrix_1.vec2.fromValues(element_x, element_y));
                    }
                }
            }
        }
        finally {
            if (!existingGroup) {
                this.events.set_group(false);
            }
            this.utils.stop_text_cache();
        }
        // Re-enable workspace resizing.
        if (currently_resizes_enabled) {
            workspace.set_resizes_enabled(true);
        }
        return new_block_ids;
    };
    Xml.prototype.block_to_dom = function (block, no_id) {
        var _a, _b;
        var element;
        if ((0, base_1.is_block_group)(block)) {
            element = this.block_to_dom(block.origin_block, no_id);
            var group_name = block.get_field_value(interfaces_1.BLOCK_GROUP_NAME_FIELD_NAME);
            (0, asserts_1.assert)(typeof group_name === 'string');
            element.setAttribute(interfaces_1.BLOCK_GROUP_NAME_XML_TAG, group_name);
            element.setAttribute(interfaces_1.BLOCK_GROUP_ID_XML_TAG, block.id);
            // 头积木可以直接返回（不可连接任何积木）
            // 输出积木可以直接返回（只能通过output_connection连接积木，即上一步）
            if (block.group_type !== interfaces_1.BlockGroupType.EXECUTION) {
                return element;
            }
            // 执行积木需要嫁接（next_connection）
            // 先准备好嫁接部分的xml
            var next_blocks = (_a = block.next_connection) === null || _a === void 0 ? void 0 : _a.targetBlock();
            var next_element = next_blocks && this.block_to_dom(next_blocks, no_id);
            if (next_element) {
                // 结束的tag打在下一块积木上
                next_element.setAttribute(interfaces_1.BLOCK_GROUP_STOPPED_XML_TAG, 'true');
                var last_next = element.querySelector("next[" + interfaces_1.LAST_NEXT_XML_TAG + "=\"true\"]");
                last_next === null || last_next === void 0 ? void 0 : last_next.removeAttribute(interfaces_1.LAST_NEXT_XML_TAG);
                last_next === null || last_next === void 0 ? void 0 : last_next.appendChild(next_element);
            }
            return element;
        }
        if (!block.is_shadow()) {
            element = dom.create_dom('block');
        }
        else if (block.is_editable()) {
            element = dom.create_dom('shadow');
        }
        else {
            element = dom.create_dom('empty');
        }
        element.setAttribute('type', block.type);
        if (!no_id) {
            element.setAttribute('id', block.id);
        }
        if (block.mutationToDom) {
            // Custom data for an advanced block.
            var mutation = block.mutationToDom();
            if (mutation &&
                (mutation.hasChildNodes() || mutation.hasAttributes())) {
                element.appendChild(mutation);
            }
        }
        for (var i = 0; i < block.inputList.length; i++) {
            var input = block.inputList[i];
            for (var j = 0; j < input.fieldRow.length; j++) {
                var field = input.fieldRow[j];
                this.field_to_dom(field, element);
            }
        }
        if (block.parent_group) {
            // 如果积木被包裹在分组里，则以分组的注释为准
            if (block.parent_group.comment) {
                element.appendChild(this.comment_to_dom(block.parent_group.comment));
            }
            element.setAttribute('visible', block.parent_group.visibility_);
        }
        else {
            if (block.comment) {
                // 如果积木未被包裹在分组里，则以自身注释为准
                element.appendChild(this.comment_to_dom(block.comment));
            }
            element.setAttribute('visible', block.visibility_);
        }
        if (block.data) {
            var dataElement = dom.create_dom('data', undefined, block.data);
            element.appendChild(dataElement);
        }
        var container;
        for (var i = 0; i < block.inputList.length; i++) {
            var empty = true;
            var input = block.inputList[i];
            if (input.type == interfaces_1.InputType.DUMMY || !input.connection) {
                continue;
            }
            else {
                var childBlock = input.connection.targetBlock();
                if (input.type == interfaces_1.InputType.VALUE) {
                    container = dom.create_dom('value');
                }
                else if (input.type == interfaces_1.InputType.STATEMENT) {
                    container = dom.create_dom('statement');
                }
                var shadow_ = input.connection.get_shadow_dom();
                if (shadow_ && (!childBlock || !childBlock.is_shadow())) {
                    container && container.appendChild(this.clone_shadow(shadow_));
                }
                if (childBlock) {
                    container && container.appendChild(this.block_to_dom(childBlock, no_id));
                    empty = false;
                }
            }
            container && container.setAttribute('name', input.name);
            if (!empty) {
                element.appendChild(container);
            }
        }
        if (block.inputs_inline_default != block.inputs_inline) {
            element.setAttribute('inline', String(block.inputs_inline));
        }
        if (block.is_collapsed()) {
            element.setAttribute('collapsed', String(true));
        }
        if (block.disabled) {
            element.setAttribute('disabled', String(true));
        }
        if (!block.deletable_) {
            element.setAttribute('deletable', String(false));
        }
        if (!block.movable_) {
            element.setAttribute('movable', String(false));
        }
        if (!block.editable_) {
            element.setAttribute('editable', String(false));
        }
        var next_block = (_b = block.next_connection) === null || _b === void 0 ? void 0 : _b.targetBlock();
        if (next_block) {
            var container_ = dom.create_dom('next', undefined, this.block_to_dom(next_block, no_id));
            element.appendChild(container_);
        }
        else if (block.next_connection) { // 存在下方连接，但未连接积木。
            var root = block.get_root_block();
            if (block.next_connection === root.last_connection_in_stack()) {
                var container_ = dom.create_dom('next');
                container_.setAttribute("" + interfaces_1.LAST_NEXT_XML_TAG, 'true');
                element.appendChild(container_);
            }
        }
        var shadow = block.next_connection && block.next_connection.get_shadow_dom();
        if (shadow && (!next_block || !next_block.is_shadow())) {
            container && container.appendChild(this.clone_shadow(shadow));
        }
        return element;
    };
    /**
     * Parse Field instance to HTMLElement,
     * and append it to element.
     *
     */
    Xml.prototype.field_to_dom = function (field_, element) {
        if (!field_.name || !field_.editable) {
            return;
        }
        var container_field_2_dom = dom.create_dom('field', undefined, String(field_.get_value()));
        var name_ = field_.name;
        if ((0, base_1.is_field_number)(field_)) {
            name_ = this.field_number_to_dom(field_, container_field_2_dom);
        }
        if ((0, base_1.is_field_default_value)(field_)) {
            this.field_default_value_to_dom(field_, container_field_2_dom);
        }
        container_field_2_dom.setAttribute('name', name_);
        element.appendChild(container_field_2_dom);
    };
    /**
     * Handle special attrs for field_number
     * @param field_ the field that is instance of FieldNumber
     * @param dom the dom created in field_to_dom, some additional attributes are added when necessary
     */
    Xml.prototype.field_number_to_dom = function (field_, dom_) {
        var constraints = [field_.min_, field_.max_, field_.precision_, field_.mod_]
            // .filter((n) => n !== undefined) // ignore field_.mod_ when it is undefined, other parameters should never be undefined
            // 看了下面对constraints的处理，不用过滤也没关系
            .join(',');
        dom_.setAttribute('constraints', constraints);
        if (field_.exceptions != undefined) {
            var exceptions = field_.exceptions.join(',');
            dom_.setAttribute('exceptions', exceptions);
        }
        var controller = field_.get_controller_option();
        if (controller) {
            var con_str = void 0;
            if (controller.type === interfaces_1.ControllerType.SLIDER) {
                con_str = [controller.type, controller.left_text, controller.right_text].join(',');
            }
            else if (controller.type === interfaces_1.ControllerType.COLOR_PICKER) {
                con_str = [controller.type, controller.color_format, controller.line].join(',');
            }
            else {
                con_str = controller.type;
            }
            dom_.setAttribute('controller', con_str);
        }
        var name_ = field_.name;
        // Heart handles number and text input according to the attribute 'name' in xml
        // When the name attr is 'NUM', heart uses the value after parseFloat
        // To enable multi-type input, hack heart by manually setting name attr
        if (field_.allow_text) {
            // the 'allow_text' attr will be parsed to this.allow_text inside the FieldNumber class
            // for blink, decides layout and acceptable value types
            dom_.setAttribute('allow_text', 'true');
            // the value inside the field_numer cannot be parsed to a number, then treat it as text
            // for heart, for compiling
            if (!(0, maths_1.is_valid_number)(field_.get_value())) {
                name_ = 'TEXT';
            }
        }
        return name_;
    };
    /**
     * Handle special attrs for field_default_value
     * @param field_ the field that is instance of FieldDefaultValue
     * @param dom the dom created in field_to_dom, some additional attributes are added when necessary
     */
    Xml.prototype.field_default_value_to_dom = function (field_, dom_) {
        var has_been_edited = field_.get_has_been_edited();
        dom_.setAttribute('has_been_edited', String(has_been_edited));
    };
    /**
     * Deeply clone the shadow's DOM so that changes don't back-wash to the block.
     *
     * @param shadow A tree of XML elements.
     * @returns A tree of XML elements.
     */
    Xml.prototype.clone_shadow = function (shadow) {
        shadow = dom.clone_node(shadow, true);
        // Walk the tree looking for whitespace.  Don't prune whitespace in a tag.
        var node = shadow;
        var textNode;
        while (node) {
            if (node.firstChild) {
                node = node.firstChild;
            }
            else {
                while (node && !node.nextSibling) {
                    textNode = node;
                    node = node.parentNode;
                    if (textNode.nodeType == interfaces_1.NodeType.TEXT && textNode.data.trim() == '' &&
                        node.firstChild != textNode) {
                        // Prune whitespace after a tag.
                        dom.remove_node(textNode);
                    }
                }
                if (node) {
                    textNode = node;
                    node = node.nextSibling;
                    if (textNode.nodeType == interfaces_1.NodeType.TEXT && textNode.data.trim() == '') {
                        // Prune whitespace before a tag.
                        dom.remove_node(textNode);
                    }
                }
            }
        }
        return shadow;
    };
    /**
     * Decode an XML block tag and create a block (and possibly sub blocks) on the
     * workspace.
     *
     * @param {Element} xml_block XML block element.
     * @param {IWorkspace} workspace The workspace.
     * @returns {IBlock} The root block created.
     */
    Xml.prototype.dom_to_block = function (xml_block, workspace) {
        // Create top-level block.
        this.events.disable();
        var top_block;
        try {
            top_block = this.dom_to_block_headless(xml_block, workspace);
            var scoped_connections = this.scoped_connections.slice();
            this.scoped_connections.length = 0;
            for (var i = 0; i < scoped_connections.length; i++) {
                var _a = scoped_connections[i], inferior = _a[0], superior = _a[1];
                var res = superior.connect(inferior, true);
                if (!res) {
                    this.handle_unconnectable_child_block(inferior.source_block, superior);
                }
            }
            if (workspace.rendered) {
                // Hide connections to speed up assembly.
                top_block.set_connections_hidden(true);
                // Generate list of all blocks.
                var blocks = top_block.get_descendants(false);
                // Render each block.
                for (var i = blocks.length - 1; i >= 0; i--) {
                    blocks[i].respawn_all_shadows();
                }
                blocks = top_block.get_descendants(false);
                for (var i = blocks.length - 1; i >= 0; i--) {
                    blocks[i].init_svg();
                }
                for (var i = blocks.length - 1; i >= 0; i--) {
                    blocks[i].update_collapsed();
                    blocks[i].render(false);
                }
                for (var i = blocks.length - 1; i >= 0; i--) {
                    var block = blocks[i];
                    if (block.comment) {
                        block.comment.init_svg();
                    }
                }
                var groups_in_stack_1 = this.grouped_blocks.slice();
                this.grouped_blocks.length = 0;
                // 在安卓设备上setTimeout的间隔非常长，会出现肉眼可见的卡顿。
                // 因此同步进行分组的处理，但在后续再做被分组积木connection的解除隐藏处理。
                for (var i = groups_in_stack_1.length - 1; i >= 0; i--) {
                    var _b = groups_in_stack_1[i], block = _b.block, id = _b.id, name_2 = _b.name, group_stop_at = _b.group_stop_at;
                    block.hide_into_group(name_2, { id: id, group_stop_at: group_stop_at });
                }
                // Populating the connection database may be deferred until after the
                // blocks have rendered.
                window.setTimeout(function () {
                    if (top_block != undefined
                        && top_block.get_workspace() != undefined) { // Check that the block hasn't been deleted.
                        top_block.set_connections_hidden(false);
                        for (var _i = 0, groups_in_stack_2 = groups_in_stack_1; _i < groups_in_stack_2.length; _i++) {
                            var grouped = groups_in_stack_2[_i];
                            grouped.block.set_connections_hidden(false);
                        }
                    }
                }, 1);
                top_block.update_disabled();
            }
        }
        finally {
            // Re-enable events even when an exception is thrown
            this.events.enable();
        }
        if (this.events.is_enabled()) {
            this.events.fire(this.create_event_factory({ block: top_block }));
        }
        return top_block;
    };
    Xml.prototype.dom_to_block_headless = function (xml_block, workspace, block_id) {
        var prototype_name = xml_block.getAttribute('type');
        if (prototype_name == undefined) {
            throw new ReferenceError('Block type unspecified.');
        }
        var id = xml_block.getAttribute('id') || block_id || undefined;
        var node_name = xml_block.nodeName.toLowerCase();
        var block = workspace.new_block(prototype_name, id);
        var group_id = xml_block.getAttribute(interfaces_1.BLOCK_GROUP_ID_XML_TAG);
        // 积木组已存在，为复制粘贴过程，没有事件需要同步，那么换个id
        if (group_id && workspace.get_block_by_id(group_id)) {
            group_id = (0, maths_1.gen_uid)();
        }
        var group_name = xml_block.getAttribute(interfaces_1.BLOCK_GROUP_NAME_XML_TAG);
        if (xml_block.getAttribute(interfaces_1.BLOCK_GROUP_STOPPED_XML_TAG) === 'true') {
            // 关闭最近一个执行积木组
            for (var i = this.grouped_blocks.length - 1; i >= 0; i--) {
                var group = this.grouped_blocks[i];
                if (!(group.block.is_starting_block() || group.block.is_output_block()) &&
                    group.group_stop_at === undefined) {
                    group.group_stop_at = group_id || block.id;
                }
            }
        }
        if (group_id && group_name) {
            this.grouped_blocks.push({
                block: block,
                id: group_id,
                name: group_name,
            });
        }
        for (var i = 0; i < xml_block.childNodes.length; i++) {
            var xml_child = xml_block.childNodes[i];
            if (xml_child.nodeType == interfaces_1.NodeType.TEXT) {
                // Ignore any text at the <block> level.  It's all whitespace anyway.
                continue;
            }
            // Find any enclosed blocks or shadows in this tag.
            /**
             * 当前input上connection的shadow dom。
             */
            var child_shadow_node = void 0;
            /**
             * 当前input连接的目标积木。
             * 如果存在标签为block的子element，则为该element；
             * 如果不存在标签为block的子element，则检查是否存在child_shadow_node并设置为该值。
             */
            var child_block_node = void 0;
            for (var j = 0; j < xml_child.childNodes.length; j++) {
                var grandchild_node = xml_child.childNodes[j];
                if (grandchild_node.nodeType == interfaces_1.NodeType.ELEMENT) {
                    var grandchild_name = grandchild_node.nodeName.toLowerCase();
                    if (grandchild_name == 'block') {
                        child_block_node = grandchild_node;
                    }
                    else if (grandchild_name == 'shadow' || grandchild_name === 'empty') {
                        child_shadow_node = grandchild_node;
                    }
                }
            }
            switch (xml_child.nodeName.toLowerCase()) {
                case 'mutation':
                    // Custom data for an advanced block.
                    if (block.domToMutation) {
                        block.domToMutation(xml_child);
                        if (block.init_svg != undefined) {
                            // Mutation may have added some elements that need initalizing.
                            block.init_svg();
                        }
                    }
                    break;
                case 'comment':
                    block.set_comment_text('', xml_child.getAttribute('id') || undefined);
                    this.parse_comment_attributes(xml_child, block.comment);
                    break;
                case 'data':
                    block.data = xml_child.textContent;
                    break;
                case 'title':
                // Titles were renamed to field in December 2013.
                // Fall through.
                case 'field':
                    this.parse_child_field(xml_child, block);
                    break;
                case 'value': // 如果/否则积木的可嵌入条件部分
                case 'statement': // C/E口积木包裹的积木
                    var name_3 = xml_child.getAttribute('name');
                    var input = block.get_input(name_3);
                    if (!input || !input.connection) {
                        console.warn("Ignoring non-existent input " + name_3 + " in block " + prototype_name);
                        break;
                    }
                    this.parse_connection(workspace, input.connection, child_shadow_node, child_block_node);
                    break;
                case 'next': // 下一块积木，即next_connection所连接的积木
                    if (!block.next_connection) {
                        console.error("Trying to connect to invalid next connect: " + block);
                        break;
                    }
                    this.parse_connection(workspace, block.next_connection, child_shadow_node, child_block_node);
                    break;
                default:
                    // Unknown tag; ignore.  Same principle as HTML parsers.
                    console.warn("Ignoring unknown tag: " + xml_child.nodeName);
            }
        }
        var inline = xml_block.getAttribute('inline');
        if (inline) {
            block.set_inputs_inline(inline == 'true');
        }
        var disabled = xml_block.getAttribute('disabled');
        if (disabled) {
            block.set_disabled(disabled == 'true');
        }
        var deletable = xml_block.getAttribute('deletable');
        if (deletable) {
            block.set_deletable(deletable == 'true');
        }
        var movable = xml_block.getAttribute('movable');
        if (movable) {
            block.set_movable(movable == 'true');
        }
        var editable = xml_block.getAttribute('editable');
        if (editable) {
            block.set_editable(editable == 'true');
        }
        var block_visible = xml_block.getAttribute('visible');
        if (block_visible) {
            // 向下兼容，cmblockly的版本用的是false
            var visibility_ = void 0;
            if (block_visible === 'false' || block_visible === interfaces_1.BlockVisibility.TRANSLUCENT) {
                visibility_ = interfaces_1.BlockVisibility.TRANSLUCENT;
            }
            else if (block_visible === 'hidden') {
                visibility_ = interfaces_1.BlockVisibility.HIDDEN;
            }
            else {
                visibility_ = interfaces_1.BlockVisibility.VISIBLE;
            }
            block.set_chunk_visibility(visibility_);
        }
        if (node_name === 'shadow' || node_name === 'empty') {
            // Ensure all children are also shadows.
            var children = block.get_children();
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                if (!child.is_shadow()) {
                    console.error('Shadow block not allowed non-shadow child.');
                }
            }
            block.set_shadow(true);
            if (node_name === 'empty') {
                block.set_editable(false);
            }
        }
        // 对于变更选项会导致形变的积木，折叠之后更新形态会导致形变失败
        // 因此要在其他属性处理完毕，完成形变后，再折叠积木 REF T15977
        var collapsed = xml_block.getAttribute('collapsed');
        if (collapsed) {
            block.set_collapsed(collapsed == 'true');
        }
        return block;
    };
    Xml.prototype.parse_fields = function (xml_block, block) {
        for (var i = 0; i < xml_block.childNodes.length; i++) {
            var xml_child = xml_block.childNodes[i];
            if (xml_child.nodeType === interfaces_1.NodeType.TEXT) {
                continue;
            }
            if (xml_child.nodeName.toLowerCase() === 'field') {
                this.parse_child_field(xml_child, block);
            }
        }
    };
    Xml.prototype.parse_connection = function (workspace, superior, shadow, child) {
        var _a;
        // 如果存在shadow，则首先更新shadow
        if (shadow) {
            if ((_a = superior.targetBlock()) === null || _a === void 0 ? void 0 : _a.is_shadow()) {
                superior.remove_shadow();
            }
            superior.set_shadow_dom(shadow);
        }
        // 没有连接到的普通积木则直接返回。
        // 后续将通过BlockSvg.respawn_all_shadows来填充该connection。
        if (!child) {
            return;
        }
        // 初始化被嵌入的积木
        // 如果通过了连接类型检测，则会在当前方法（dom_to_block_headless）结束后，回到dom_to_block时，跟随当前积木被渲染。
        // 如果未通过类型检测（xml出错，或积木设置发生了变化），则该积木会被弹出到workspace中，并立即渲染。
        var block_child = this.dom_to_block_headless(child, workspace, undefined);
        var target_connection = block_child.output_connection || block_child.previous_connection;
        if (!target_connection) {
            console.error('Child block does not have output or previous statement.');
            return;
        }
        if (target_connection.context) {
            this.scoped_connections.push([target_connection, superior]);
            return;
        }
        if (!superior.connect(target_connection, true)) {
            this.handle_unconnectable_child_block(block_child, superior);
        }
    };
    /**
     * xml中可能出现积木的嵌入结构中类型检测失败导致无法嵌入的情况。
     * 其中，原先被嵌入的积木在被弹出后，由于不再被当前主积木连接而不会在主积木被渲染时被渲染。
     * （见dom_to_block，初始化后，仅渲染主积木的descendants）
     * 这个方法处理被弹出的积木。目前的处理逻辑是手动初始化svg并渲染到workspace上。
     * @param block 被弹出的积木。
     */
    Xml.prototype.handle_unconnectable_child_block = function (block, target_conn) {
        if (this.runtime_data.is_pasting()) {
            block.dispose(false, false);
        }
        else {
            var blocks = block.get_descendants(false);
            for (var i = blocks.length - 1; i >= 0; i--) {
                blocks[i].init_svg();
                blocks[i].update_collapsed();
                blocks[i].render(false);
            }
        }
        target_conn.respawn_shadow();
    };
    /**
     * Parse dom element to xml element in block
     *
     * @param xml_child Dom element
     * @param block The root block.
     */
    Xml.prototype.parse_child_field = function (xml_child, block) {
        var name = xml_child.getAttribute('name');
        if (name == undefined) {
            // console.warn(new ReferenceError('Ignoring non-named child:' + xml_child));
            return;
        }
        // 保存的 xml 有这个属性的积木，它的 field 的 name 变成了 ’TEXT‘
        // 但是 BlockSvg 实例里面，field 的 name 还是 'NUM', 用 'TEXT' 是拿不到的
        if (xml_child.getAttribute('allow_text') === 'true' &&
            name !== 'NUM') {
            name = 'NUM';
        }
        var field = block.get_field(name);
        if (!field) {
            // console.warn('Ignoring non-existent field ' + name + ' in block: ', block);
            return;
        }
        var field_text = xml_child.textContent;
        if ((0, base_1.is_field_number)(field)) {
            var constraints = xml_child.getAttribute('constraints');
            if (constraints) {
                var constraints_array = constraints.split(',');
                // Constraints at most have 4 attributes, usually 3.
                // Index 0 of the array is the minimum, 1 is the maximum, 2 is the precision, 3 is the modular mode.
                field.set_constraints(constraints_array[0], constraints_array[1], constraints_array[2]);
                if (constraints_array[3]) {
                    field.set_mod(constraints_array[3]);
                }
            }
            var exceptions = xml_child.getAttribute('exceptions');
            if (exceptions) {
                var excep_array = exceptions.split(',');
                var array = [];
                array = excep_array.map(function (item) { return +item; });
                field.set_exceptions(array);
            }
            // 已有作品中积木xml无法更改，通过白名单确定是否需要设置该项（兼容旧作品，省去migration）
            // 新增积木避免改动blink，可选择手动在xml中增加该项
            // TODO 写文档
            var allow_text_attr = xml_child.getAttribute('allow_text');
            var allow_text = undefined;
            if (allow_text_attr) {
                allow_text = allow_text_attr === 'true';
            }
            field.set_allow_text && field.set_allow_text(allow_text);
            var controller_attr = xml_child.getAttribute('controller');
            if (controller_attr) {
                var array = controller_attr.split(',');
                var controller_option = void 0;
                if (array[0] === 'SLIDER') {
                    controller_option = {
                        type: interfaces_1.ControllerType.SLIDER,
                        left_text: array[1],
                        right_text: array[2],
                    };
                }
                else if (array[0] === 'COLOR_PICKER') {
                    controller_option = {
                        type: interfaces_1.ControllerType.COLOR_PICKER,
                        color_format: array[1],
                        line: array[2],
                    };
                }
                else {
                    controller_option = {
                        type: interfaces_1.ControllerType.ANGLE_SCALE,
                    };
                }
                field.set_controller_option(controller_option);
            }
        }
        if ((0, base_1.is_field_default_value)(field)) {
            var has_been_edited = xml_child.getAttribute('has_been_edited');
            if (has_been_edited) {
                field.set_has_been_edited(has_been_edited === 'true');
            }
        }
        var validated_text = field.call_validator(field_text);
        if (validated_text != undefined &&
            field.field_type !== 'FieldImage') {
            field.set_value(validated_text);
        }
    };
    Xml.prototype.dom_to_text = function (dom) {
        return this.utils.dom_to_string(dom);
    };
    Xml.prototype.text_to_dom = function (text) {
        return this.utils.string_to_dom(text);
    };
    Xml.prototype.block_to_dom_with_xy = function (block, opt_noId) {
        var _a;
        var element = this.block_to_dom(block, opt_noId);
        var xy = ((_a = block.parent_group) === null || _a === void 0 ? void 0 : _a.get_relative_to_surface_xy())
            || block.get_relative_to_surface_xy();
        element.setAttribute('x', String(Math.round(xy[0])));
        element.setAttribute('y', String(Math.round(xy[1])));
        return element;
    };
    Xml.prototype.filter_undefined_blocks = function (xml, need_delete_tag) {
        if (need_delete_tag === void 0) { need_delete_tag = false; }
        var deleted = false;
        var all_blocks = xml.querySelectorAll('block');
        for (var i = 0; i < all_blocks.length; i++) {
            var block_dom = all_blocks[i];
            var block_type = block_dom.getAttribute('type');
            if (!this.Blink.Blocks[block_type]) {
                if (!deleted) {
                    deleted = true;
                }
                var parentElement = block_dom.parentElement;
                switch (parentElement.nodeName) {
                    case 'NEXT':
                        parentElement.parentElement.removeChild(parentElement);
                        break;
                    case 'VALUE':
                    case 'STATEMENT':
                    case 'DIV':
                    default:
                        parentElement.removeChild(block_dom);
                        break;
                }
            }
        }
        if (need_delete_tag) {
            return {
                xml: xml,
                deleted: deleted,
            };
        }
        return xml;
    };
    Xml.prototype.comment_to_dom_with_xy = function (workspace_comment, opt_no_id) {
        var element = this.comment_to_dom(workspace_comment, opt_no_id);
        var xy = workspace_comment.get_relative_to_surface_xy();
        element.setAttribute('x', String(Math.round(xy[0])));
        element.setAttribute('y', String(Math.round(xy[1])));
        return element;
    };
    Xml.prototype.dom_to_workspace_comment = function (dom, workspace) {
        var id = dom.getAttribute('id') || undefined;
        var workspace_comment = workspace.new_workspace_comment(undefined, id);
        this.parse_comment_attributes(dom, workspace_comment);
        workspace_comment.init_svg();
        return workspace_comment;
    };
    Xml.prototype.comment_to_dom = function (comment, opt_no_id) {
        var comment_text = comment.get_text();
        var comment_element = dom.create_dom('comment', undefined, comment_text);
        comment_element.setAttribute('pinned', String(comment.is_expanded()));
        var hw = comment.get_bubble_size();
        comment_element.setAttribute('h', String(hw.height));
        comment_element.setAttribute('w', String(hw.width));
        var bubble_relative_position = comment.get_relative_position();
        comment_element.setAttribute('relativeleft_', "" + bubble_relative_position[0]);
        comment_element.setAttribute('relativetop_', "" + bubble_relative_position[1]);
        comment_element.setAttribute('auto_layout', String(comment.is_auto_layout()));
        comment_element.setAttribute('color_theme', String(comment.get_color_theme()));
        if (!opt_no_id) {
            comment_element.setAttribute('id', comment.id);
        }
        return comment_element;
    };
    Xml.prototype.parse_comment_attributes = function (xml_child, comment) {
        if (!comment) {
            return;
        }
        comment.set_text(xml_child.textContent || '');
        var visible = xml_child.getAttribute('pinned');
        if (visible) {
            comment.set_expanded(visible == 'true');
        }
        var bubbleW = parseInt(xml_child.getAttribute('w') || '', 10);
        var bubbleH = parseInt(xml_child.getAttribute('h') || '', 10);
        if (!isNaN(bubbleW) && !isNaN(bubbleH)) {
            comment.set_bubble_size(bubbleW, bubbleH);
        }
        var bubbleRelativeLeft_ = parseFloat(xml_child.getAttribute('relativeleft_') || '');
        var bubbleRelativeTop_ = parseFloat(xml_child.getAttribute('relativetop_') || '');
        if (!isNaN(bubbleRelativeLeft_) && !isNaN(bubbleRelativeTop_)) {
            comment.set_relative_position(gl_matrix_1.vec2.fromValues(bubbleRelativeLeft_, bubbleRelativeTop_));
        }
        var auto_layout = xml_child.getAttribute('auto_layout');
        auto_layout && comment.set_auto_layout(auto_layout === 'true');
        var color_theme = xml_child.getAttribute('color_theme');
        (0, base_1.is_comment_theme)(color_theme) && comment.set_color_theme(color_theme, true);
    };
    Xml.prototype.dom_to_workspace_element = function (xml_block, workspace) {
        var tag = xml_block.tagName.toLowerCase();
        if (tag === 'block') {
            return this.dom_to_block(xml_block, workspace);
        }
        if (tag === 'comment') {
            return this.dom_to_workspace_comment(xml_block, workspace);
        }
        console.error("Undefined workspace element: " + xml_block);
        return;
    };
    Xml.prototype.workspace_element_to_dom = function (workspace_element, opt_no_id) {
        if ((0, base_1.is_block_svg)(workspace_element)) {
            return this.block_to_dom(workspace_element, opt_no_id);
        }
        if ((0, base_1.is_workspace_comment)(workspace_element)) {
            return this.comment_to_dom(workspace_element, opt_no_id);
        }
        console.error("Undefined workspace element: " + workspace_element);
        return dom.create_dom('element');
    };
    Xml.prototype.workspace_element_to_dom_with_xy = function (workspace_element, opt_no_id) {
        if ((0, base_1.is_block_svg)(workspace_element)) {
            return this.block_to_dom_with_xy(workspace_element, opt_no_id);
        }
        if ((0, base_1.is_workspace_comment)(workspace_element)) {
            return this.comment_to_dom_with_xy(workspace_element, opt_no_id);
        }
        console.error("Undefined workspace element: " + workspace_element);
        return dom.create_dom('element');
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], Xml.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Blink)
    ], Xml.prototype, "Blink", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], Xml.prototype, "utils", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.runtime_data)
    ], Xml.prototype, "runtime_data", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.CreateEvent)
    ], Xml.prototype, "create_event_factory", void 0);
    Xml = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Xml);
    return Xml;
}());
exports.Xml = Xml;
