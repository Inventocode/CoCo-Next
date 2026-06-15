"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Json = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var di_1 = require("../di");
var interfaces_1 = require("../interfaces");
var asserts_1 = require("../utils/asserts");
var maths_1 = require("../utils/maths");
var base_1 = require("../utils/base");
var dom_1 = require("../utils/dom");
var json_1 = require("../utils/json");
var Json = /** @class */ (function () {
    function Json() {
    }
    Json.prototype.comment_to_json = function (comment) {
        var parent = comment.get_parent_block();
        var hw = comment.get_bubble_size();
        var position = comment.get_relative_position();
        return {
            id: comment.id,
            parent_id: parent === undefined ? null : parent.id,
            text: comment.get_text(),
            pinned: comment.is_expanded(),
            size: [hw.width, hw.height],
            location: [position[0], position[1]],
            auto_layout: comment.is_auto_layout(),
            color_theme: comment.get_color_theme(),
        };
    };
    Json.prototype.comment_dom_to_json = function (dom, opt_id, parent_id) {
        if (dom.tagName.toLowerCase() !== 'comment') {
            throw Error('Trying to convert a non-comment dom into comment json.');
        }
        var comment_json = {
            id: opt_id ? opt_id : dom.getAttribute('id') || (0, maths_1.gen_uid)(),
            parent_id: parent_id || null,
            text: dom.textContent || '',
            pinned: dom.getAttribute('pinned') === 'true',
            auto_layout: dom.getAttribute('auto_layout') === 'true',
            size: null,
            location: null,
            color_theme: null,
        };
        var w = parseInt(dom.getAttribute('w') || '', 10);
        var h = parseInt(dom.getAttribute('h') || '', 10);
        if (!isNaN(w) && !isNaN(h)) {
            comment_json.size = [w, h];
        }
        var left = parseFloat(dom.getAttribute('relativeleft_') || '');
        var top = parseFloat(dom.getAttribute('relativetop_') || '');
        if (!isNaN(left) && !isNaN(top)) {
            comment_json.location = [left, top];
        }
        var color_theme = dom.getAttribute('color_theme');
        if ((0, base_1.is_comment_theme)(color_theme)) {
            comment_json.color_theme = color_theme;
        }
        return comment_json;
    };
    Json.prototype.merge_workspace_data = function (base, target) {
        function merge_data(base, target) {
            Object.keys(target).forEach(function (key) {
                base[key] = target[key];
            });
        }
        merge_data(base.blocks, target.blocks);
        merge_data(base.connections, target.connections);
        merge_data(base.comments, target.comments);
    };
    // TODO 没有处理block group，以及没有使用到所以在json中也没有保存的属性：data, inline, last_choice
    Json.prototype.block_to_json = function (block) {
        var _this = this;
        var res_data = {
            blocks: {},
            connections: {},
            comments: {},
        };
        res_data.connections[block.id] = {};
        var fields = {};
        var field_constraints = {};
        var field_extra_attr = {};
        var shadows = {};
        block.inputList.map(function (input) {
            var _a, _b;
            input.fieldRow.forEach(function (field) {
                if (field.editable && typeof field.name === 'string') {
                    // field number类型的field需要做特殊处理
                    // 1. 有allow text属性的field允许输入字符串，把name改为TEXT
                    // 2. 保存field constraints信息
                    if ((0, base_1.is_field_number)(field)) {
                        var field_name = undefined;
                        if (field.allow_text && !(0, maths_1.is_valid_number)(field.get_value())) {
                            field_name = 'TEXT';
                        }
                        else {
                            field_name = field.name;
                        }
                        fields[field_name] = field.get_value();
                        field_constraints[field_name] = {
                            min: field.min_,
                            max: field.max_,
                            precision: field.precision_,
                            mod: field.mod_ || null,
                        };
                        var controller = field.get_controller_option();
                        if (controller) {
                            if (field_extra_attr[field.name] === undefined) {
                                field_extra_attr[field.name] = {};
                            }
                            field_extra_attr[field_name]['controller_type'] = controller.type;
                            if (controller.type === interfaces_1.ControllerType.SLIDER) {
                                field_extra_attr[field_name]['left_text'] = controller.left_text;
                                field_extra_attr[field_name]['right_text'] = controller.right_text;
                            }
                            else if (controller.type === interfaces_1.ControllerType.COLOR_PICKER) {
                                field_extra_attr[field_name]['color_format'] = controller.color_format;
                                field_extra_attr[field_name]['line'] = controller.line;
                            }
                        }
                    }
                    else if ((0, base_1.is_field_default_value)(field)) {
                        fields[field.name] = field.get_value();
                        if (field_extra_attr[field.name] === undefined) {
                            field_extra_attr[field.name] = {};
                        }
                        field_extra_attr[field.name]['has_been_edited'] = field.get_has_been_edited();
                    }
                    else {
                        fields[field.name] = field.get_value();
                    }
                }
            });
            var input_name = input.name;
            if (input_name) {
                // 没有shadow string的input也需要保存，在json转代码时需要解析所有input
                var shadow = (_a = input.connection) === null || _a === void 0 ? void 0 : _a.get_shadow_string();
                shadows[input.name] = shadow || '';
            }
            var target_block = (_b = input.connection) === null || _b === void 0 ? void 0 : _b.targetBlock();
            if (target_block) {
                var child_data = _this.block_to_json(target_block);
                _this.merge_workspace_data(res_data, child_data);
                res_data.connections[block.id][target_block.id] = {
                    type: 'input',
                    // 有connection的input一定不会是dummy
                    input_type: input.type === interfaces_1.InputType.VALUE ? 'value' : 'statement',
                    input_name: input.name,
                };
            }
        });
        if (block.comment) {
            res_data.comments[block.comment.id] = this.comment_to_json(block.comment);
        }
        var location = block.get_location();
        var mutation = block.mutation_to_string();
        res_data.blocks[block.id] = {
            type: block.type,
            id: block.id,
            comment: block.comment === undefined ? null : block.comment.id,
            is_shadow: block.is_shadow(),
            collapsed: block.is_collapsed(),
            disabled: block.disabled,
            deletable: block.deletable_,
            movable: block.movable_,
            editable: block.editable_,
            visible: block.visibility_,
            location: [location[0], location[1]],
            shadows: shadows,
            fields: fields,
            field_constraints: field_constraints,
            field_extra_attr: field_extra_attr,
            mutation: mutation,
            is_output: !!block.output_connection,
            parent_id: block.parent_block === undefined ? null : block.parent_block.id,
        };
        var next_block = block.get_next_block();
        if (next_block) {
            var next_block_data = this.block_to_json(next_block);
            this.merge_workspace_data(res_data, next_block_data);
            res_data.connections[block.id][next_block.id] = {
                type: 'next',
            };
        }
        return res_data;
    };
    Json.prototype.workspace_to_json = function (workspace) {
        var _this = this;
        var res_data = {
            blocks: {},
            connections: {},
            comments: {},
        };
        workspace.get_top_blocks(false).forEach(function (block) {
            var block_data = _this.block_to_json(block);
            _this.merge_workspace_data(res_data, block_data);
        });
        workspace.get_top_comments(false).forEach(function (comment) {
            res_data.comments[comment.id] = _this.comment_to_json(comment);
        });
        return res_data;
    };
    /**
     * Generate a block from a json structure without rendering.
     * Note that shadow blocks **cannot** be handled inside this method, since all
     *  block data are stored separated without connections.
     * @param block_json json data to be converted.
     * @param workspace workspace to put the resulted block on.
     */
    Json.prototype.json_to_block_headless = function (block_json, workspace, move_block) {
        if (move_block === void 0) { move_block = true; }
        var block = workspace.new_block(block_json.type, block_json.id);
        return this.parse_block_data(block_json, block, move_block);
    };
    Json.prototype.parse_block_data = function (block_json, block, move_block) {
        if (move_block === void 0) { move_block = true; }
        if (block_json.is_shadow !== null) {
            block.set_shadow(block_json.is_shadow);
        }
        if (block_json.collapsed !== null) {
            block.set_collapsed(block_json.collapsed);
        }
        if (block_json.disabled !== null) {
            block.set_disabled(block_json.disabled);
        }
        block.set_deletable(block_json.deletable);
        block.set_movable(block_json.movable);
        block.set_editable(block_json.editable);
        var visibility = (0, json_1.parse_visibility)(block_json.visible);
        if (visibility) {
            // 仅设置自身的可见性
            block.set_visibility(visibility);
        }
        if (block_json.type !== block.type) {
            console.warn('Trying to set invalid block data to block: ', block);
        }
        block.string_to_mutation(block_json.mutation);
        block.inputList.forEach(function (input) {
            var _a;
            input.fieldRow.forEach(function (field) {
                if (!field.editable || field.name === undefined) {
                    return;
                }
                var field_name = field.name;
                if ((0, base_1.is_field_number)(field)) {
                    // json中没有保存allow text字段，不能确定field value的类型和field name
                    // 用这种方法进行判断的预设是，field number类型的field name只能是NUM或TEXT
                    if (block_json.fields['NUM'] === undefined && block_json.fields['TEXT'] !== undefined) {
                        field_name = 'TEXT';
                        field.set_allow_text(true);
                    }
                    var field_constraints = block_json.field_constraints[field_name];
                    if (field_constraints !== undefined) {
                        field.set_constraints(field_constraints.min, field_constraints.max, field_constraints.precision);
                        if (field_constraints.mod !== null) {
                            field.mod_ = field_constraints.mod;
                        }
                    }
                    // field_extra_attr是新增属性，旧作品可能没有这个属性
                    var field_extra_attr = block_json.field_extra_attr && block_json.field_extra_attr[field_name];
                    if (field_extra_attr !== undefined && field_extra_attr.controller_type !== undefined) {
                        if (field_extra_attr.controller_type === 'SLIDER') {
                            field.set_controller_option({
                                type: interfaces_1.ControllerType.SLIDER,
                                left_text: field_extra_attr.left_text || '',
                                right_text: field_extra_attr.right_text || '',
                            });
                        }
                        else if (field_extra_attr.controller_type === interfaces_1.ControllerType.COLOR_PICKER) {
                            field.set_controller_option({
                                type: interfaces_1.ControllerType.COLOR_PICKER,
                                color_format: field_extra_attr.color_format,
                                line: field_extra_attr.line,
                            });
                        }
                        else {
                            field.set_controller_option({
                                type: interfaces_1.ControllerType.ANGLE_SCALE,
                            });
                        }
                    }
                }
                if ((0, base_1.is_field_default_value)(field)) {
                    var field_extra_attr = block_json.field_extra_attr && block_json.field_extra_attr[field_name];
                    if (field_extra_attr !== undefined && field_extra_attr['has_been_edited'] !== undefined) {
                        var has_been_edited = field_extra_attr.has_been_edited;
                        field.set_has_been_edited(has_been_edited);
                    }
                }
                var field_data = block_json.fields[field_name];
                if (field_data !== undefined) {
                    var value = field.call_validator(field_data);
                    if (value !== undefined && field.field_type !== 'FieldImage') {
                        field.set_value(field_data);
                    }
                }
            });
            if (input.connection && block_json.shadows[input.name]) {
                if ((_a = input.connection.targetBlock()) === null || _a === void 0 ? void 0 : _a.is_shadow()) {
                    input.connection.remove_shadow();
                }
                input.connection.set_shadow_from_string(block_json.shadows[input.name]);
            }
        });
        if (block_json.location && move_block) {
            block.move_by(gl_matrix_1.vec2.fromValues(block_json.location[0], block_json.location[1]));
        }
        return block;
    };
    Json.prototype.comment_json_to_dom = function (comment_json) {
        var comment_element = (0, dom_1.create_dom)('comment', undefined, comment_json.text);
        if (comment_json.color_theme !== null) {
            comment_element.setAttribute('pinned', "" + (comment_json.pinned || false));
        }
        if (comment_json.size) {
            comment_element.setAttribute('h', "" + comment_json.size[1]);
            comment_element.setAttribute('w', "" + comment_json.size[0]);
        }
        if (comment_json.location) {
            comment_element.setAttribute('relativeleft_', "" + comment_json.location[0]);
            comment_element.setAttribute('relativetop_', "" + comment_json.location[1]);
        }
        if (comment_json.auto_layout !== null) {
            comment_element.setAttribute('auto_layout', "" + comment_json.auto_layout);
        }
        if (comment_json.color_theme) {
            comment_element.setAttribute('color_theme', "" + comment_json.color_theme);
        }
        comment_element.setAttribute('id', comment_json.id);
        return comment_element;
    };
    /**
     * Generate a comment from a json structure without rendering.
     * @param comment_json json data to be converted.
     * @param workspace workspace to put the resulted comment on.
     */
    Json.prototype.json_to_comment_headless = function (comment_json, workspace) {
        var comment;
        if (comment_json.parent_id) {
            var parent_1 = workspace.get_block_by_id(comment_json.parent_id);
            if (!parent_1) {
                throw Error('Comment parent block not found');
            }
            parent_1.set_comment_text('', comment_json.id);
            (0, asserts_1.assert)(parent_1.comment, 'Create block comment failed.');
            comment = parent_1.comment;
        }
        else {
            comment = workspace.new_workspace_comment(undefined, comment_json.id);
        }
        if (comment_json.text !== null) {
            comment.set_text(comment_json.text);
        }
        if (comment_json.pinned !== null) {
            comment.set_expanded(comment_json.pinned);
        }
        if (comment_json.size) {
            comment.set_bubble_size(comment_json.size[0], comment_json.size[1]);
        }
        if (comment_json.location) {
            comment.set_relative_position(gl_matrix_1.vec2.fromValues(comment_json.location[0], comment_json.location[1]));
            if (!comment.get_parent_block()) {
                comment.move_by(gl_matrix_1.vec2.fromValues(comment_json.location[0], comment_json.location[1]));
            }
        }
        if (comment_json.auto_layout !== null) {
            comment.set_auto_layout(comment_json.auto_layout);
        }
        var color_theme = comment_json.color_theme;
        if ((0, base_1.is_comment_theme)(color_theme)) {
            comment.set_color_theme(color_theme, true);
        }
        return comment;
    };
    /**
     * Parse a mount of info from a json structure without rendering.
     * @param workspace_json json data to be converted.
     * @param workspace workspace to put the resulted blocks and comments on.
     * @returns An array containing new element ids.
     */
    Json.prototype.json_to_workspace_headless = function (workspace_json, workspace) {
        var _this = this;
        var blocks = workspace_json.blocks, connections = workspace_json.connections, comments = workspace_json.comments;
        var ids = [];
        if (blocks) {
            Object.keys(blocks).forEach(function (id) {
                _this.json_to_block_headless(blocks[id], workspace, false);
                ids.push(id);
            });
        }
        if (connections) {
            /**
             * json中储存的连接的深度为1（只记录连接双方，不记载所有祖先/后代），且是无序的。
             * 对于有指定context的积木，其所需求的context可能由其任意的祖先连接提供。 在加载其与其父积木的连接时，
             *  原本合法的上方结构可能还没有被连接完成，导致本次连接失败。
             * 因此需要将所有对context有需求的连接对记录下来，在其他所有积木连接完成后再进行连接。
             *
             * 目前有指定context的积木都是输出积木，且其中无法再嵌入其他积木，因此scoped_connections之间不需要排序。
             * 之后如果出现了有嵌套结构的指定context积木，可能需要在记录后给这些连接排序，或直接在加载过程中关闭检查？
             */
            var scoped_connections_1 = [];
            Object.keys(connections).forEach(function (id) {
                Object.keys(connections[id]).forEach(function (child_id) {
                    var conn = connections[id][child_id];
                    var this_block = workspace.get_block_by_id(id);
                    var child_block = workspace.get_block_by_id(child_id);
                    if (!this_block || !child_block) {
                        console.error('Connected block not found. ');
                        return;
                    }
                    var superior;
                    var inferior;
                    if (conn.type === 'next') {
                        superior = this_block.next_connection;
                        inferior = child_block.previous_connection;
                    }
                    else { // conn.type === 'input'
                        var this_input = this_block.get_input(conn.input_name);
                        superior = this_input && this_input.connection;
                        // 嵌入 或拼接到头积木上
                        inferior = child_block.output_connection || child_block.previous_connection;
                    }
                    if (!superior || !inferior) {
                        if (child_block.is_shadow()) {
                            child_block.dispose();
                            console.error('Connected connection not found. Shadow block disposed.');
                            return;
                        }
                        console.error('Connected connection not found.');
                        return;
                    }
                    if (inferior.context) {
                        scoped_connections_1.push({ inferior: inferior, superior: superior });
                        return;
                    }
                    _this.try_connect(inferior, superior, blocks);
                });
            });
            scoped_connections_1.forEach(function (pair) {
                _this.try_connect(pair.inferior, pair.superior, blocks);
            });
            ids.forEach(function (id) {
                var _a;
                (_a = workspace.get_block_by_id(id)) === null || _a === void 0 ? void 0 : _a.respawn_all_shadows();
            });
        }
        if (comments) {
            Object.keys(comments).forEach(function (id) {
                _this.json_to_comment_headless(comments[id], workspace);
                ids.push(id);
            });
        }
        return ids;
    };
    Json.prototype.try_connect = function (inferior, superior, blocks) {
        var res = superior.connect(inferior, true);
        if (res) {
            if (blocks && inferior.source_block.is_shadow()) {
                this.parse_block_data(blocks[inferior.source_block.id], inferior.source_block, false);
            }
            return;
        }
        if (this.runtime_data.is_pasting()) {
            inferior.source_block.dispose(false, false);
        }
        else {
            var blocks_1 = inferior.source_block.get_descendants(false);
            for (var i = blocks_1.length - 1; i >= 0; i--) {
                blocks_1[i].init_svg();
                blocks_1[i].update_collapsed();
                blocks_1[i].render(false);
            }
        }
        superior.respawn_shadow();
    };
    Json.prototype.json_to_workspace = function (workspace_json, workspace) {
        var existing_group = this.events.get_group();
        if (!existing_group) {
            this.events.set_group(true);
        }
        var currently_resizes_enabled = workspace.is_resizes_enabled();
        // Disable workspace resizes as an optimization.
        if (currently_resizes_enabled) {
            workspace.set_resizes_enabled(false);
        }
        this.utils.start_text_cache();
        var generated_ids = [];
        try {
            this.events.disable();
            generated_ids = this.json_to_workspace_headless(workspace_json, workspace);
            if (workspace.rendered) {
                this.render_blocks_and_comments(workspace, generated_ids, workspace_json.blocks || {});
            }
        }
        catch (e) {
            throw new Error('Something wrong with json data. Unable to convert it to workspace.');
        }
        finally {
            // Re-enable events even when an exception is thrown
            this.events.enable();
            if (!existing_group) {
                this.events.set_group(false);
            }
            // Re-enable workspace resizing.
            if (currently_resizes_enabled) {
                workspace.set_resizes_enabled(true);
            }
            this.utils.stop_text_cache();
        }
        return generated_ids;
    };
    Json.prototype.render_blocks_and_comments = function (workspace, generated_ids, blocks_json) {
        var _this = this;
        // 渲染积木块
        // 对于每一个积木块，需要保证渲染顺序是从下往上，避免【先渲染外层再渲染内层】造成的重复渲染
        workspace.get_top_blocks(false).forEach(function (top_block) {
            if (generated_ids.indexOf(top_block.id) < 0)
                return;
            _this.events.disable();
            try {
                // Hide connections to speed up assembly.
                top_block.set_connections_hidden(true);
                // Generate list of all blocks.
                var blocks = top_block.get_descendants(false);
                // Render each block.
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
                var top_block_json = blocks_json[top_block.id];
                if (top_block_json.location) {
                    top_block.move_by(gl_matrix_1.vec2.fromValues(top_block_json.location[0], top_block_json.location[1]));
                }
                // Populating the connection database may be deferred until after the
                // blocks have rendered.
                window.setTimeout(function () {
                    if (top_block != undefined
                        && top_block.get_workspace() != undefined) { // Check that the block hasn't been deleted.
                        top_block.set_connections_hidden(false);
                    }
                }, 1);
            }
            finally {
                top_block.update_disabled();
                // Re-enable events even when an exception is thrown
                _this.events.enable();
            }
            if (_this.events.is_enabled()) {
                _this.events.fire(_this.create_event_factory({ block: top_block }));
            }
        });
        // 渲染全局注释
        workspace.get_top_comments(false).forEach(function (comment) {
            if (generated_ids.indexOf(comment.id) < 0)
                return;
            comment.init_svg();
        });
    };
    Json.prototype.reset_element_ids = function (workspace_json) {
        var result = JSON.stringify(workspace_json);
        /**
         * 在某一字符串中中不合法的符号前加 \ ，以得到合法的可以用于生成正则条件的字符串。
         * @param str 需要检查的字符串。
         */
        function escape_reg_exp(str) {
            return str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
        }
        /**
         * 将字符串中某个指定的片段全部替换为另一个片段。
         * @param str 需要被替换的字符串。
         * @param find 需要被替换的片段。
         * @param replace 需要替换的片段。
         */
        function replace_all(str, find, replace) {
            return str.replace(new RegExp(escape_reg_exp(find), 'g'), replace);
        }
        Object.keys(workspace_json.blocks).forEach(function (block_id) {
            result = replace_all(result, block_id, (0, maths_1.gen_uid)());
        });
        Object.keys(workspace_json.comments).forEach(function (comment_id) {
            result = replace_all(result, comment_id, (0, maths_1.gen_uid)());
        });
        return JSON.parse(result);
    };
    Json.prototype.get_block_data_by_id = function (ws_json, block_id) {
        var get_child_block_json = function (ws_json, child_block_id) {
            res_data.blocks[child_block_id] = ws_json.blocks[child_block_id];
            res_data.connections[child_block_id] = ws_json.connections[child_block_id];
            var comment_id = ws_json.blocks[child_block_id].comment;
            if (comment_id) {
                res_data.comments[comment_id] = ws_json.comments[comment_id];
            }
        };
        var find = function (block_id, connections) {
            var block_connections = connections[block_id];
            if (block_connections === undefined) {
                return;
            }
            ids.push(block_id);
            if (Object.keys(block_connections).length) {
                for (var child_id in block_connections) {
                    find(child_id, connections);
                }
            }
        };
        var res_data = {
            blocks: {},
            connections: {},
            comments: {},
        };
        var ids = [];
        find(block_id, ws_json.connections);
        if (!ids.length) {
            return undefined;
        }
        for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
            var id = ids_1[_i];
            get_child_block_json(ws_json, id);
        }
        return res_data;
    };
    Json.prototype.workspace_dom_to_json = function (xml) {
        var _a;
        var res_data = {
            blocks: {},
            connections: {},
            comments: {},
        };
        /**
         * 存在一类问题作品，其中shadow字段的id出错，与shadow所属积木的父积木相同。
         * （成因未知，之前这种情况并不会报错，无法确定究竟是何时出现的。）
         * 在此处做容错，xml转换到json时，记录所有block id。
         * 后续在转换shadow时，如果id已经被占用，则替换shadow的id。
         */
        var occupied_ids = new Set();
        Array.from(xml.querySelectorAll('block')).forEach(function (b) {
            var id = b.getAttribute('id');
            if (id) {
                occupied_ids.add(id);
            }
        });
        var child_count = xml.childNodes.length;
        for (var i = 0; i < child_count; i++) {
            if (xml.childNodes[i].nodeType === interfaces_1.NodeType.TEXT) {
                continue;
            }
            var dom = xml.childNodes[i];
            var dom_name = dom.tagName.toLowerCase();
            if (dom_name === 'block') {
                var ws_json = this.block_dom_to_json(dom, undefined, occupied_ids);
                this.merge_workspace_data(res_data, ws_json);
            }
            else if (dom_name === 'comment') {
                var comment_id = dom.getAttribute('id') || (0, maths_1.gen_uid)();
                var comment_data = this.comment_dom_to_json(dom, comment_id);
                var ws_json = {
                    blocks: {},
                    connections: {},
                    comments: (_a = {},
                        _a[comment_id] = comment_data,
                        _a),
                };
                this.merge_workspace_data(res_data, ws_json);
            }
            else {
                console.error(dom_name + " cannot be a top-level element.");
            }
        }
        return res_data;
    };
    Json.prototype.block_dom_to_json = function (dom, parent_id, occupied_ids) {
        if (occupied_ids === void 0) { occupied_ids = new Set(); }
        var res_data = {
            blocks: {},
            connections: {},
            comments: {},
        };
        var dom_name = dom.nodeName.toLowerCase();
        var block_id = dom.getAttribute('id') || '';
        res_data.connections[block_id] = {};
        var location_x = dom.getAttribute('x') || '0';
        var location_y = dom.getAttribute('y') || '0';
        var comment_id = null;
        var mutation = '';
        var shadows = {};
        var fields = {};
        var field_constraints = {};
        var field_extra_attr = {};
        var child_count = dom.childNodes.length;
        for (var i = 0; i < child_count; i++) {
            if (dom.childNodes[i].nodeType === interfaces_1.NodeType.TEXT) {
                continue;
            }
            var child_dom = dom.childNodes[i];
            var dom_name_1 = child_dom.tagName.toLowerCase();
            if (dom_name_1 === 'field') {
                // xml 中，field 的 allow_text 属性为 true 的积木，field name 为 'TEXT'
                // 在 json 中也用 'TEXT' 标记
                // 但是 IBlock 实例里面，field 的 name 还是 'NUM'
                var field_name = child_dom.getAttribute('name') || '';
                fields[field_name] = child_dom.textContent || '';
                // field number 的特殊属性
                var constraints = child_dom.getAttribute('constraints');
                if (constraints !== null) {
                    field_constraints[field_name] = (0, json_1.parse_constraints)(constraints);
                }
                // field default value 的特殊属性
                var has_been_edited = child_dom.getAttribute('has_been_edited');
                if (has_been_edited !== null) {
                    field_extra_attr[field_name] = {
                        has_been_edited: has_been_edited === 'true',
                    };
                }
                continue;
            }
            if (dom_name_1 === 'comment') {
                // 旧版的注释可能不存在id，如果不存在id，就创建新id
                comment_id = child_dom.getAttribute('id') || (0, maths_1.gen_uid)();
                var comment_json = this.comment_dom_to_json(child_dom, comment_id, block_id);
                res_data.comments[comment_id] = comment_json;
                continue;
            }
            if (dom_name_1 === 'mutation') {
                mutation = this.utils.dom_to_string(child_dom);
                continue;
            }
            // value input
            if (dom_name_1 === 'value') {
                var input_name = child_dom.getAttribute('name') || '';
                var shadow_dom = undefined;
                var block_dom = undefined;
                for (var j = 0; j < child_dom.childNodes.length; j++) {
                    if (child_dom.childNodes[j].nodeType === interfaces_1.NodeType.TEXT) {
                        continue;
                    }
                    var grand_child_dom = child_dom.childNodes[j];
                    var grand_child_dom_name = grand_child_dom.tagName.toLowerCase();
                    // input一定有shadow
                    if (grand_child_dom_name === 'shadow' || grand_child_dom_name === 'empty') {
                        var shadow_id = grand_child_dom.getAttribute('id');
                        if (shadow_id && occupied_ids.has(shadow_id)) {
                            grand_child_dom.setAttribute('id', this.utils.gen_uid());
                        }
                        shadows[input_name] = this.utils.dom_to_string(grand_child_dom);
                        shadow_dom = grand_child_dom;
                    }
                    // input可能连接了block
                    if (grand_child_dom_name === 'block') {
                        block_dom = grand_child_dom;
                    }
                }
                // 没有连接block的情况下才连接shadow
                if (block_dom) {
                    var connected_block_id = block_dom.getAttribute('id') || '';
                    res_data.connections[block_id][connected_block_id] = {
                        type: 'input',
                        input_type: 'value',
                        input_name: input_name,
                    };
                    var child_block_data = this.block_dom_to_json(block_dom, block_id, occupied_ids);
                    this.merge_workspace_data(res_data, child_block_data);
                }
                else if (shadow_dom) {
                    var connected_block_id = shadow_dom.getAttribute('id') || '';
                    res_data.connections[block_id][connected_block_id] = {
                        type: 'input',
                        input_type: 'value',
                        input_name: input_name,
                    };
                    var child_block_data = this.block_dom_to_json(shadow_dom, block_id, occupied_ids);
                    this.merge_workspace_data(res_data, child_block_data);
                }
                continue;
            }
            // statement input
            if (dom_name_1 === 'statement') {
                for (var j = 0; j < child_dom.childNodes.length; j++) {
                    if (child_dom.childNodes[j].nodeType === interfaces_1.NodeType.TEXT) {
                        continue;
                    }
                    var input_name = child_dom.getAttribute('name') || '';
                    // 已知旧作品的xml中不保存空的statment input或dummy input，block_dom_to_json获得的json会缺失这部分信息
                    shadows[input_name] = ''; // statement input没有shadow，只保存空字符串
                    var grand_child_dom = child_dom.childNodes[j];
                    var grand_child_dom_name = grand_child_dom.tagName.toLowerCase();
                    if (grand_child_dom_name === 'block') {
                        var child_block_id = grand_child_dom.getAttribute('id') || '';
                        res_data.connections[block_id][child_block_id] = {
                            type: 'input',
                            input_type: 'statement',
                            input_name: input_name,
                        };
                        var child_block_data = this.block_dom_to_json(grand_child_dom, block_id, occupied_ids);
                        this.merge_workspace_data(res_data, child_block_data);
                    }
                }
                continue;
            }
            // 下接
            if (dom_name_1 === 'next') {
                // 如果是last_next_in_stack，下接可能为空
                var last_next = child_dom.getAttribute('last_next_in_stack');
                if (last_next === 'true') {
                    continue;
                }
                for (var j = 0; j < child_dom.childNodes.length; j++) {
                    if (child_dom.childNodes[j].nodeType === interfaces_1.NodeType.TEXT) {
                        continue;
                    }
                    var grand_child_dom = child_dom.childNodes[j];
                    var grand_child_dom_name = grand_child_dom.tagName.toLowerCase();
                    if (grand_child_dom_name === 'block') {
                        var child_block_id = grand_child_dom.getAttribute('id') || '';
                        res_data.connections[block_id][child_block_id] = {
                            type: 'next',
                        };
                        var child_block_data = this.block_dom_to_json(grand_child_dom, block_id, occupied_ids);
                        this.merge_workspace_data(res_data, child_block_data);
                    }
                }
                continue;
            }
        }
        res_data.blocks[block_id] = {
            type: dom.getAttribute('type') || '',
            id: block_id,
            is_shadow: dom_name !== 'block',
            collapsed: dom.getAttribute('collapsed') === 'true',
            disabled: dom.getAttribute('disabled') === 'true',
            deletable: dom.getAttribute('deletable') !== 'false',
            movable: dom.getAttribute('movable') !== 'false',
            editable: dom.getAttribute('editable') !== 'false' && dom_name !== 'empty',
            visible: dom.getAttribute('visible') || '',
            location: [parseInt(location_x), parseInt(location_y)],
            shadows: shadows,
            fields: fields,
            field_constraints: field_constraints,
            field_extra_attr: field_extra_attr,
            comment: comment_id,
            mutation: mutation,
            parent_id: parent_id ? parent_id : null,
            // 从dom中无法获得is_output
            // 如果需要用json转代码，需要用block生成json
            is_output: null,
        };
        return res_data;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.events)
    ], Json.prototype, "events", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], Json.prototype, "utils", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.runtime_data)
    ], Json.prototype, "runtime_data", void 0);
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.CreateEvent)
    ], Json.prototype, "create_event_factory", void 0);
    Json = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Json);
    return Json;
}());
exports.Json = Json;
