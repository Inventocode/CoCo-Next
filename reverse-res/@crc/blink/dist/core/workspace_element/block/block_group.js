"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockGroup = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var interfaces_1 = require("../../interfaces");
var asserts_1 = require("../../utils/asserts");
var base_1 = require("../../utils/base");
var block_1 = require("../../utils/block");
var block_svg_1 = require("./block_svg");
/**
 * 积木分组功能。
 * 在选择积木分组（nemo自称是折叠）功能后，创建一个对应的BlockGroup实例，用于包裹相关积木。
 * 但在数据保存时，不占据单独节点。
 *
 * [设计稿](https://lanhuapp.com/web/#/item/project/detailDetach?pid=a359c7e0-3a5f-43ce-b705-36c98c22539d&project_id=a359c7e0-3a5f-43ce-b705-36c98c22539d&image_id=c767d111-0491-4f85-9898-2696eebb6e20)
 */
var BlockGroup = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(BlockGroup, _super);
    function BlockGroup(options) {
        var _this = _super.call(this, { workspace: options.workspace, id: options.id }) || this;
        _this.element_type = 'block_group';
        _this.group_type = 0;
        _this.nested_blocks_with_comment = [];
        _this.decoration_block_paths = [];
        _this.show_name_editor = function (field_text, origin_editor) { return (0, tslib_1.__awaiter)(_this, void 0, void 0, function () {
            var external_editor, new_value;
            var _a;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        external_editor = (_a = this.workspace.options.block_group) === null || _a === void 0 ? void 0 : _a.show_name_editor;
                        if (!external_editor) {
                            origin_editor.call(field_text);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, external_editor(field_text.get_text())];
                    case 1:
                        new_value = _b.sent();
                        // 点击了取消，不做修改。
                        if (new_value == undefined) {
                            return [2 /*return*/];
                        }
                        field_text.set_value(new_value);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.init = function () {
            var _a, _b, _c, _d;
            _this.events.disable();
            var origin_xy = _this.origin_xy || _this.origin_block.get_relative_to_surface_xy();
            _this.move_by(origin_xy);
            // 设置折叠积木的可见性与原积木可见性保持一致
            _this.set_chunk_visibility(_this.origin_block.get_visibility());
            try {
                if (_this.origin_block.is_starting_block()) {
                    _this.group_type = interfaces_1.BlockGroupType.START;
                    _this.init_start_group();
                    return;
                }
                if (_this.origin_block.output_connection) {
                    _this.group_type = interfaces_1.BlockGroupType.OUTPUT;
                    _this.init_output_group();
                    return;
                }
                _this.group_type = interfaces_1.BlockGroupType.EXECUTION;
                _this.init_execution_group();
            }
            finally {
                _this.origin_block.get_svg_root().style.display = 'none';
                _this.origin_block.get_descendants(false, true)
                    .forEach(function (b) { return b.set_comment_visible(false); });
                // 对于简化版注释，积木分组后是否显示注释图标，需要检查一行中所有的积木
                // 只要有一块积木存在注释，就需要显示图标
                if (_this.workspace.get_options().comment_type === 'simplified') {
                    var blocks = (0, block_1.get_nested_blocks_with_comment)(_this.origin_block);
                    blocks.forEach(function (block) {
                        var _a;
                        if ((0, base_1.is_block_group)(block)) {
                            (_a = _this.nested_blocks_with_comment).push.apply(_a, block.nested_blocks_with_comment);
                        }
                        else {
                            _this.nested_blocks_with_comment.push(block);
                        }
                    });
                    if (_this.nested_blocks_with_comment.length) {
                        var text = (_a = _this.nested_blocks_with_comment[0].comment) === null || _a === void 0 ? void 0 : _a.get_text();
                        _this.set_comment_text(text);
                        (_b = _this.comment) === null || _b === void 0 ? void 0 : _b.init_svg(true);
                    }
                }
                else {
                    _this.set_comment_text((_c = _this.origin_block.comment) === null || _c === void 0 ? void 0 : _c.get_text());
                    (_d = _this.comment) === null || _d === void 0 ? void 0 : _d.init_svg(true);
                }
                _this.origin_block.set_connectable(false);
                _this.events.enable();
            }
        };
        _this.origin_block = options.origin_block;
        _this.group_name = options.group_name;
        _this.on_release = options.on_release;
        _this.origin_block_display = _this.origin_block.get_svg_root().style.display;
        _this.origin_xy = options.origin_xy;
        _this.group_stop_at = options.group_stop_at;
        _this.init();
        return _this;
    }
    BlockGroup.prototype.init_start_group = function () {
        this.set_colour(this.theme.block_group_color.START_GROUP_FILL_COLOUR || this.origin_block.get_original_colour(), this.theme.block_group_color.START_GROUP_STROKE_COLOUR || this.origin_block.get_border_colour());
        var icon = this.origin_block.inputList[0].fieldRow[0];
        var icon_copy = this.field_icon_factory({
            src: icon.src_ || '',
            opt_is_head: true,
        });
        var name_field = this.field_text_input_factory({
            text: this.group_name,
        });
        name_field.show_editor = this.show_name_editor.bind(this, name_field, name_field.show_editor);
        this.append_dummy_input('START_GROUP')
            .append_field(icon_copy)
            .append_field(this.Msg.START_GROUP_TAG, interfaces_1.BLOCK_GROUP_TAG_FIELD_NAME)
            .append_field(name_field, interfaces_1.BLOCK_GROUP_NAME_FIELD_NAME);
        this.set_previous_statement(false);
        this.set_next_statement(false);
    };
    BlockGroup.prototype.init_output_group = function () {
        var _a;
        this.set_colour(this.theme.block_group_color.OUTPUT_GROUP_FILL_COLOUR || this.origin_block.get_original_colour(), this.theme.block_group_color.OUTPUT_GROUP_STROKE_COLOUR || this.origin_block.get_border_colour());
        var output_name_field = this.field_text_input_factory({
            text: this.group_name,
        });
        // 积木上的圆弧装饰需要占位，输入框需要向右移动
        output_name_field.margin_left =
            this.theme.renderer.SEP_SPACE_X + this.theme.renderer.BLOCK_EDGE_WIDTH_OUTPUT;
        output_name_field.show_editor = this.show_name_editor.bind(this, output_name_field, output_name_field.show_editor);
        this.append_dummy_input('OUTPUT_GROUP')
            .append_field(this.Msg.OUTPUT_GROUP_TAG, interfaces_1.BLOCK_GROUP_TAG_FIELD_NAME)
            .append_field(output_name_field, interfaces_1.BLOCK_GROUP_NAME_FIELD_NAME);
        (0, asserts_1.assert)(this.origin_block.output_connection);
        this.set_output(true, (_a = this.origin_block.output_connection) === null || _a === void 0 ? void 0 : _a.check_);
        (0, asserts_1.assert)(this.output_connection);
        var origin_output_target = this.origin_block.output_connection.target_connection;
        origin_output_target === null || origin_output_target === void 0 ? void 0 : origin_output_target.connect(this.output_connection);
    };
    BlockGroup.prototype.init_execution_group = function () {
        this.set_colour(this.theme.block_group_color.EXECUTION_GROUP_FILL_COLOUR || this.origin_block.get_original_colour(), this.theme.block_group_color.EXECUTION_GROUP_STROKE_COLOUR || this.origin_block.get_border_colour());
        var name_field = this.field_text_input_factory({
            text: this.group_name,
        });
        name_field.show_editor = this.show_name_editor.bind(this, name_field, name_field.show_editor);
        this.append_dummy_input('EXECUTION_GROUP')
            .append_field(this.Msg.EXECUTION_GROUP_TAG, interfaces_1.BLOCK_GROUP_TAG_FIELD_NAME)
            .append_field(name_field, interfaces_1.BLOCK_GROUP_NAME_FIELD_NAME);
        (0, asserts_1.assert)(this.origin_block.previous_connection);
        this.set_previous_statement(true);
        (0, asserts_1.assert)(this.previous_connection);
        var origin_prev_target = this.origin_block.previous_connection.target_connection;
        var origin_next_target = undefined;
        if (this.group_stop_at) {
            this.set_next_statement(true);
            // 结束的tag打在下一块积木上
            var stopped_block = this.workspace.get_block_by_id(this.group_stop_at);
            origin_next_target = stopped_block && stopped_block.previous_connection;
            (0, asserts_1.assert)(origin_next_target);
            origin_next_target.disconnect();
            this.next_connection.connect(origin_next_target);
        }
        else if (this.origin_block.last_connection_in_stack()) {
            this.set_next_statement(true);
        }
        // 如果直接connect，分组会被插入到原先的父积木和被分组积木之间。
        // 因此此处需要手动断开之后再重新连接。
        origin_prev_target === null || origin_prev_target === void 0 ? void 0 : origin_prev_target.disconnect();
        origin_prev_target === null || origin_prev_target === void 0 ? void 0 : origin_prev_target.connect(this.previous_connection);
    };
    BlockGroup.prototype.options_add_set_blocks_group = function (menu_options) {
        var _this = this;
        menu_options.push({
            text: this.utils.replace_message_references('%{BKY_RELEASE_GROUP}'),
            name: 'release_group',
            area: 'block',
            enabled: true,
            callback: function () {
                _this.release();
            },
        });
    };
    BlockGroup.prototype.dispose = function (heal_stack, show_animate) {
        var _a;
        if (!this.workspace) {
            return;
        }
        var current_group = this.events.get_group();
        this.events.set_group(current_group || true);
        if (show_animate && this.rendered) {
            this.block_animations.dispose_ui_effect(this);
        }
        this.release();
        if ((_a = this.origin_block) === null || _a === void 0 ? void 0 : _a.workspace) {
            var children = this.origin_block.get_descendants(true, true);
            if (children) {
                for (var i = 0; i < children.length; i++) {
                    var child = children[i];
                    if ((0, base_1.is_block_group)(child)) {
                        child.release();
                    }
                }
            }
            this.origin_block.dispose(heal_stack, false);
        }
        this.events.set_group(current_group);
    };
    /**
     * 展开分组, 释放收纳的积木
     */
    BlockGroup.prototype.release = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.events.disable();
        this.group_name = this.get_field_value(interfaces_1.BLOCK_GROUP_NAME_FIELD_NAME);
        this.origin_block.move_by(gl_matrix_1.vec2.sub(gl_matrix_1.vec2.create(), this.get_relative_to_surface_xy(), this.origin_block.get_relative_to_surface_xy()));
        this.origin_block.get_svg_root().style.display = this.origin_block_display;
        this.origin_block.set_connectable(true);
        // 在释放出原积木的时候, 更新原积木的可见性, 使得与折叠积木可见性一致
        this.origin_block.set_chunk_visibility(this.get_visibility());
        this.origin_block.update_chunk_visibility();
        switch (this.group_type) {
            case interfaces_1.BlockGroupType.EXECUTION:
                (0, asserts_1.assert)(this.origin_block.previous_connection, 'Statement block must have prev conn. ');
                // 记录连接情况，抽离积木组
                var origin_prev_target = (_a = this.previous_connection) === null || _a === void 0 ? void 0 : _a.target_connection;
                (_b = this.previous_connection) === null || _b === void 0 ? void 0 : _b.disconnect();
                var origin_next_target = (_c = this.next_connection) === null || _c === void 0 ? void 0 : _c.target_connection;
                this.group_stop_at = origin_next_target === null || origin_next_target === void 0 ? void 0 : origin_next_target.source_block.id;
                (_d = this.next_connection) === null || _d === void 0 ? void 0 : _d.disconnect();
                // 嫁接下方连接
                if (origin_next_target) {
                    var last_next = this.origin_block.last_connection_in_stack();
                    (0, asserts_1.assert)(last_next);
                    last_next.connect(origin_next_target);
                }
                // 如果上方积木未被dispose，则嫁接上方连接
                if ((origin_prev_target === null || origin_prev_target === void 0 ? void 0 : origin_prev_target.source_block.workspace) === this.origin_block.workspace) {
                    origin_prev_target === null || origin_prev_target === void 0 ? void 0 : origin_prev_target.connect(this.origin_block.previous_connection);
                }
                break;
            case interfaces_1.BlockGroupType.OUTPUT:
                (0, asserts_1.assert)(this.origin_block.output_connection, 'Output block must have output conn. ');
                // 记录连接情况，抽离积木组
                var origin_output_target = (_e = this.output_connection) === null || _e === void 0 ? void 0 : _e.target_connection;
                (_f = this.output_connection) === null || _f === void 0 ? void 0 : _f.disconnect();
                // 嫁接输出连接
                origin_output_target === null || origin_output_target === void 0 ? void 0 : origin_output_target.connect(this.origin_block.output_connection);
                break;
            default:
                break;
        }
        this.origin_block.get_descendants(false, true)
            .forEach(function (b) { return b.set_comment_visible(true); });
        (_g = this.origin_block.comment) === null || _g === void 0 ? void 0 : _g.init_svg(true);
        _super.prototype.dispose.call(this, false, false);
        this.events.enable();
        (_h = this.on_release) === null || _h === void 0 ? void 0 : _h.call(this);
    };
    BlockGroup = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], BlockGroup);
    return BlockGroup;
}(block_svg_1.BlockSvg));
exports.BlockGroup = BlockGroup;
