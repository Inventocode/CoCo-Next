"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.block_render_svg = void 0;
var tslib_1 = require("tslib");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var interfaces_1 = require("../../../interfaces");
var constants_1 = require("../../../constants");
var base_1 = require("../../../utils/base");
var head_renderer_1 = require("./head_renderer");
var shadow_renderer_1 = require("./shadow_renderer");
var output_renderer_1 = require("./output_renderer");
var block_renderer_1 = require("./block_renderer");
/**
 * Mixins of Block render svg.
 * Mixins could only be public (export classes).
 */
function block_render_svg(BlockSvgBase) {
    return /** @class */ (function (_super) {
        (0, tslib_1.__extends)(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * 记录一些关于宽高的特殊固定规则，在render_compute的最后被依次应用。
             */
            _this.fixed_size_rule = [
                function (i_input, row) {
                    // 检查当前行是否为如果积木的最后一行（只有一个add按钮），如果是则需要特殊处理。
                    // [设计稿](https://lanhuapp.com/web/#/item/project/board/detail?pid=e184da99-885b-4f3e-817a-633b02ef56a5&project_id=e184da99-885b-4f3e-817a-633b02ef56a5&image_id=4ed4a9fe-81e8-4a41-bcb5-4005feb10292)
                    // p.s. 当存在否则时，最后一行无按钮，此时积木上没有额外的input，不会进入此处的逻辑，
                    // 而是在绘制时才在最后一个statement下添加一行。
                    if (!_this.is_starting_block()
                        && !_this.is_collapsed()
                        && i_input === _this.inputList.length - 1
                        && _this.inputList[i_input - 1]
                        && _this.inputList[i_input - 1].type === interfaces_1.InputType.STATEMENT) {
                        _this.inputList[i_input].height = 26;
                        _this.inputList[i_input].width = _this.theme.renderer.INPUT_EXTRA_ROW_WIDTH;
                        row.padding_l = 52;
                        row.padding_r = 16;
                    }
                },
                function (i_input, row) {
                    // 折叠后的输出型积木是固定高度48
                    if ((0, base_1.is_block_group)(_this) && _this.group_type === interfaces_1.BlockGroupType.OUTPUT) {
                        _this.inputList[i_input].height = 48;
                        row.height = 48;
                    }
                },
                function (i_input) {
                    // 头积木下的statement input没有高度。
                    if (_this.is_starting_block() &&
                        _this.inputList[i_input].type === interfaces_1.InputType.STATEMENT) {
                        _this.inputList[i_input].render_height = 0;
                        _this.inputList[i_input].height = 0;
                    }
                },
            ];
            return _this;
        }
        class_1.prototype.get_block_renderer = function () {
            if (this.is_starting_block()) {
                return new head_renderer_1.HeadBlockRenderer(this);
            }
            if (this.output_connection != undefined) {
                // If block is output block
                if (this.is_shadow() && this.element_type !== 'param_color') {
                    return new shadow_renderer_1.ShadowBlockRenderer(this);
                }
                return new output_renderer_1.OutputBlockRenderer(this);
            }
            return new block_renderer_1.BlockRenderer(this);
        };
        class_1.prototype.render = function (opt_bubble) {
            // Reset widths before drawing.
            // Done in render_draw_top_ in previous version, but seems better to be put here.
            this.width = 0;
            this.svg_path_width = 0;
            this.block_renderer = this.get_block_renderer();
            this.utils.start_text_cache();
            this.rendered = true;
            var cursor_x = 0;
            // Move the icons(currently warning only) into position.
            if (this.warning) {
                cursor_x = this.warning.render_icon(cursor_x, this.block_renderer);
            }
            // If there are no icons, cursorX will be 0, otherwise it will be the
            // width that the first label needs to move over by.
            // 有几个方法中仍然用到了 icon_width 参数
            // 目前未使用任何类型的icon，icon_width = cursor_X 始终传入 0
            var input_rows = this._render_compute(cursor_x);
            this.render_draw_(input_rows);
            this.render_move_connections_();
            if (this.comment) {
                this.comment.reposition();
            }
            if (opt_bubble !== false) {
                // Render all blocks above this one (propagate a reflow).
                var parent_block = this.get_parent();
                if (parent_block) {
                    parent_block.render(true);
                }
                else {
                    // Top-most block.  Fire an event to allow scrollbars to resize.
                    this.workspace.resize_contents();
                }
            }
            this.utils.stop_text_cache();
            this.update_chunk_visibility();
        };
        /**
         * Render a list of fields starting at the specified location.
         * @param field_list List of fields.
         * @param cursor_xy X-coordinate and Y-coordinate to start the fields.
         * @param row_height field hight
         * @returns  X-coordinate of the end of the field row (plus a gap).
         */
        class_1.prototype.render_fields_ = function (field_list, cursor_xy, row_height) {
            for (var i = 0; i < field_list.length; ++i) {
                var field = field_list[i];
                field.layout(cursor_xy, row_height);
            }
            return cursor_xy;
        };
        /**
         * Create a row for an input and associated fields.
         * @param input The input that the row is based on.
         */
        class_1.prototype.create_row_for_input_ = function (input, icon_width) {
            // Create new row.
            return Object.assign([], {
                type: input.type !== interfaces_1.InputType.STATEMENT ?
                    interfaces_1.InputRowType.INLINE :
                    interfaces_1.InputRowType.STATEMENT,
                // 头积木下的 statement input 用于连接带有 DO 的事件类积木
                // 自身没有高度，且不需要偏移
                padding_l: input.type === interfaces_1.InputType.STATEMENT && this.is_starting_block()
                    ? icon_width : this.block_renderer.padding_l + icon_width,
                padding_r: this.block_renderer.padding_r,
                height: 0,
            });
        };
        /**
         * Compute the minimum height of this input.
         * @param input The input to measure.
         * @param row The row of the block that is currently being measured.
         * @returns input height
         */
        class_1.prototype.compute_input_height_ = function (row) {
            if (row.type === interfaces_1.InputType.STATEMENT) {
                return this.theme.renderer.INPUT_MIN_HEIGHT_STATEMENT;
            }
            return this.block_renderer.min_height;
        };
        /**
         * Compute the minimum width of this input based on the connection type and outputs.
         * @param input The input to measure.
         * @returns the computed width of this input.
         */
        class_1.prototype.compute_input_width_ = function (input) {
            var _a;
            if (!this.is_output_block()) {
                return 0;
            }
            switch ((_a = input.connection) === null || _a === void 0 ? void 0 : _a.get_output_shape()) {
                case interfaces_1.OutputShape.ROUND:
                    return this.theme.renderer.INPUT_SHAPE_ROUND_WIDTH;
                case interfaces_1.OutputShape.HEXAGONAL:
                    return this.theme.renderer.INPUT_SHAPE_HEXAGONAL_WIDTH;
                default:
                    return 0;
            }
        };
        /**
         * Computes the height and widths for each row and field.
         * @param icon_width Offset of first row due to icons.
         * @returns 2D array of objects, each containing
         * position information.
         */
        class_1.prototype._render_compute = function (icon_width) {
            var inputList = this.inputList;
            var input_rows = Object.assign([], {
                type: interfaces_1.InputRowType.INLINE,
                right_edge: 0,
                statement_width: 0,
                height: 0,
            });
            /**
             * Previously created row, for special-casing row heights on C- and E- shaped blocks.
             * 最近一次创建input row时，首个input的类型，只在检查是否需要换行时使用。
             * 换行检查结束后，该值其实时 *当前* 处理的input所在行的类型。
             */
            var last_input_type;
            var is_inline = this.get_inputs_inline() && !this.is_collapsed();
            var _loop_1 = function (i_input) {
                var input = inputList[i_input];
                if (!input.is_visible()) {
                    return "continue";
                }
                // 根据条件，创建新行或取上一行，作为要将当前input渲染到的行。
                var row;
                if (!is_inline || // 每一个input都另起一行
                    last_input_type == undefined || // 第一行
                    last_input_type === interfaces_1.InputType.STATEMENT || // statement后一个input另起一行
                    input.type === interfaces_1.InputType.STATEMENT // statement本身另起一行
                ) {
                    // Create new row
                    // icon的类型有：旧版comment（未使用）, mutator（未使用），warning（未使用）
                    // 之前旧版注释还在使用时，一块积木只会有一个注释（也就是一个icon），在积木的首行，
                    // 因此只有第一行（没有前一行）需要根据icon进行偏移。
                    // 目前来说此处无论如何都是0，但是为可能的更改留入口。
                    row = this_1.create_row_for_input_(input, last_input_type == undefined ? icon_width : 0);
                    last_input_type = input.type;
                    input_rows.push(row);
                }
                else {
                    row = input_rows[input_rows.length - 1];
                }
                row.push(input);
                // 绘制field，更新input上field的总占位宽高。
                input.field_width = 0;
                input.field_height = 0;
                for (var i_field = 0; i_field < input.fieldRow.length; i_field++) {
                    var field = input.fieldRow[i_field];
                    var field_size = field.get_size(); // 这里会触发field的render，而render结束时会更新size数值。
                    // The first filed in the row not need sep.
                    // Starting block needs it to sep with Head icon.
                    field.render_sep = (row.length > 1 || i_field > 0 || this_1.is_starting_block()) ? field.margin_left : 0;
                    input.field_width += field.render_sep + field_size.width;
                    input.field_height = Math.max(input.field_height, field_size.height);
                }
                // 更新input上所连接积木的总占位宽高。
                input.render_width = 0;
                input.render_height = 0;
                if (input.connection) {
                    var linked_block = input.connection.targetBlock();
                    if (linked_block) {
                        var b_box = linked_block.get_height_width();
                        // 解决param_color嵌入积木height变高
                        if (linked_block.is_shadow() && linked_block.element_type !== 'param_color') {
                            // shadow对于用户来说和输入框更类似，设计决定shadow的上下拓宽规则跟随field
                            input.field_height = Math.max(input.field_height, b_box.height);
                        }
                        else {
                            input.render_height = Math.max(input.render_height, b_box.height);
                        }
                        input.render_width = Math.max(input.render_width, b_box.width);
                    }
                }
                input.height = Math.max(this_1.compute_input_height_(row), input.field_height + 2 * this_1.block_renderer.get_field_padding_y(), input.render_height + 2 * this_1.block_renderer.get_block_padding_y(input.type));
                input.width = Math.max(this_1.compute_input_width_(input), input.field_width + input.render_width);
                this_1.fixed_size_rule.forEach(function (rule) { return rule(i_input, row); });
                row.height = Math.max(row.height, input.height);
            };
            var this_1 = this;
            // Block will be drawn from 0, left to right, top to bottom,  in px.
            for (var i_input = 0; i_input < inputList.length; i_input++) {
                _loop_1(i_input);
            }
            // 更新每行中input的高度，使其等于行的最终高度。
            input_rows.forEach(function (row) {
                row.forEach(function (input) {
                    input.height = row.height;
                });
            });
            // Compute the preferred right edge.  Inline blocks may extend beyond.
            // This is the width of the block where external inputs connect.
            // right_edge 即积木内部input
            input_rows.right_edge = Math.max(input_rows.right_edge, this.block_renderer.min_width(this) - this.block_renderer.padding_r);
            return input_rows;
        };
        /**
         * Draw the path of the block.
         * Move the fields to the correct locations.
         * @param icon_width Offset of first row due to icons.
         * @param input_rows 2D array of objects, each containing position information.
         */
        class_1.prototype.render_draw_ = function (input_rows) {
            // Assemble the block's path.
            var steps = [];
            this.render_draw_top_(steps);
            var cursor_xy = this.render_draw_right_(steps, input_rows);
            this.render_draw_bottom_(steps, cursor_xy);
            this.render_draw_left_(steps);
            var path_string = steps.join(' ');
            if (this.svg_path) {
                this.svg_path.setAttribute('d', path_string);
                if (this.RTL) {
                    // Mirror the block's path.
                    this.svg_path.setAttribute('transform', 'scale(-1 1)');
                }
            }
        };
        /**
         * Update all of the connections on this block with the new locaitons calculated
         * in renderCompute, and move all of the connected blocks based on the new
         * connection locations.
         */
        class_1.prototype.render_move_connections_ = function () {
            var block_tl = this.get_relative_to_surface_xy();
            // Don't tighten previous or output connections because they are inferior.
            if (this.previous_connection != undefined) {
                this.previous_connection.move_to_offset(block_tl);
            }
            if (this.output_connection != undefined) {
                this.output_connection.move_to_offset(block_tl);
            }
            for (var i = 0; i < this.inputList.length; ++i) {
                var conn = this.inputList[i].connection;
                if (conn) {
                    conn.move_to_offset(block_tl);
                    if (conn.is_connected()) {
                        conn.tighten();
                    }
                }
            }
            if (this.next_connection) {
                this.next_connection.move_to_offset(block_tl);
                if (this.next_connection.is_connected()) {
                    this.next_connection.tighten();
                }
            }
        };
        /**
         * Render the top edge of the block.
         * 绘制积木左上角，包括圆弧和凹槽
         * @param steps Path of block outline.
         */
        class_1.prototype.render_draw_top_ = function (steps) {
            // Position the cursor at the top-left starting point.
            this.block_renderer.render_path_start(steps, this);
            // Top edge.
            if (this.previous_connection != undefined) {
                // Connection point
                var connection_x = 0;
                // Move the conntction point to the end of the notch.
                if (this.is_render_notch()) {
                    connection_x = this.theme.renderer.NOTCH_WIDTH + this.theme.renderer.NTOCH_START_PADDING;
                }
                this.previous_connection.set_offset_in_block(connection_x, 0);
            }
        };
        /**
         * Render the right edge of the block.
         * 绘制积木右侧形状，包含所有 Input，直到积木最后一排右下角为止
         * @protected
         * @param steps Path of block outline.
         * @param input_rows 2D array of objects,
         *  each containing position information.
         * @param icon_width Offset of first row due to icons.（未使用）
         * @returns Height of block.
         */
        class_1.prototype.render_draw_right_ = function (steps, input_rows) {
            var cursor_xy = gl_matrix_1.vec2.create();
            // 用于计算最小的宽度，例如 statement row 的下一行的宽度不能小于 statement row
            // 否则形成不了一个 C 口的包裹效果
            // statement row 的上一行其实也会出现同样的情况，不过按照目前的计算顺序，需要重新调整一下
            var last_cursor_x = 0;
            // 通过记录 input 来画 C 口积木的中间部分高度
            var last_input_height = 0;
            for (var i_row = 0, len = input_rows.length; i_row < len; i_row++) {
                var row = input_rows[i_row];
                var last_row = input_rows[i_row - 1];
                cursor_xy[0] = row.padding_l;
                if (row.type == interfaces_1.InputRowType.INLINE) {
                    if (last_row && last_row.type == interfaces_1.InputRowType.STATEMENT && i_row !== len - 1) { // 多层C口积木的中间inline行
                        this.render_row_inline_(steps, cursor_xy, i_row, input_rows, this.block_renderer.edge_width, 
                        // 此时last_cursor_x 是上一个statement行的宽度
                        // （不包含嵌入部分，对于目前业务的积木形状来说即C口积木左边竖线部分的宽度，即16）
                        // C/E口积木每一个value行都要遵循执行类积木的最小宽度，
                        //   ___________________
                        //  |  ________________|
                        //  | |
                        //  | |_________  <- 上一statement行
                        //  |__________|
                        //
                        //    |  行宽  |
                        // | 视觉行宽  |
                        // 但是视觉行宽（即从积木最左边到本行最右边）实际上是 上一statement行宽度 + 自身真实行宽。
                        // 设计需要限制的是视觉行宽，因此限定最小宽度时需要减去上statement一行的宽度。
                        Math.max(this.theme.renderer.MIN_WIDTH - last_cursor_x, last_cursor_x));
                    }
                    else {
                        this.render_row_inline_(steps, cursor_xy, i_row, input_rows, this.block_renderer.edge_width);
                    }
                }
                else if (row.type == interfaces_1.InputRowType.STATEMENT) {
                    if ((last_row != undefined && !this.is_starting_block()) ||
                        this.inputs_inline == false) {
                        // TODO: check if needed
                        // if (
                        //   last_cursor_x < this.RendererConstants.STATEMENT_FIRST_ROW_MIN_WIDTH &&
                        //   (i_row - 1) === 0
                        // ) {
                        //   steps.push('H ' + (this.RendererConstants.STATEMENT_FIRST_ROW_MIN_WIDTH - this.RendererConstants.BLOCK_EDGE_WIDTH));
                        // }
                        this.block_renderer.render_edge_shape_right(steps, this, true, cursor_xy, last_input_height);
                    }
                    this.render_row_statement(steps, cursor_xy, row, i_row, input_rows);
                }
                cursor_xy[1] += row.height;
                last_cursor_x = cursor_xy[0];
                last_input_height = row.height;
            }
            if (input_rows.length === 0) {
                // 积木没有input和field，画出最小宽度
                cursor_xy[0] = input_rows.right_edge;
                steps.push('H', "" + cursor_xy[0]);
                // 右侧形状
                this.block_renderer.render_edge_shape_right(steps, this, this.inputs_inline, cursor_xy, last_input_height);
                // min width
                this.width = Math.max(this.width, cursor_xy[0] + this.block_renderer.padding_r);
                this.svg_path_width = Math.max(this.width, cursor_xy[0] + this.block_renderer.padding_r);
                // min height
                cursor_xy[1] = this.block_renderer.min_height;
            }
            // Update block height
            this.height = cursor_xy[1];
            // collapsed blocks right edge shape is special
            if (input_rows[input_rows.length - 1] &&
                input_rows[input_rows.length - 1][0].name === constants_1.COLLAPSED_INPUT_NAME) {
                this.block_renderer.render_edge_shape_collapsed_right(steps, this);
                return cursor_xy;
            }
            if ((0, base_1.is_block_group)(this)) {
                var width_to_add = this.block_renderer.render_group_decoration_blocks(this);
                steps.push("h " + width_to_add);
                cursor_xy[0] += width_to_add;
                this.block_renderer.render_edge_shape_group_right(steps, this);
                this.width += width_to_add + this.theme.renderer.GROUP_RIGHT_EXTENDED_WIDTH;
                if (this.group_type === interfaces_1.BlockGroupType.EXECUTION) {
                    this.height += this.theme.renderer.INPUT_MIN_HEIGHT_STATEMENT + this.theme.renderer.INPUT_EXTRA_ROW_HEIGHT;
                }
                return cursor_xy;
            }
            if ((input_rows[input_rows.length - 1] &&
                input_rows[input_rows.length - 1].type !== interfaces_1.InputType.STATEMENT) ||
                this.is_starting_block()) {
                this.block_renderer.render_edge_shape_right(steps, this, this.inputs_inline, cursor_xy, last_input_height);
            }
            return cursor_xy;
        };
        /**
         *
         * @param steps
         * @param cursor_xy
         * @param i_row
         * @param input_rows
         * @param edge_width 积木圆弧的半径。
         */
        class_1.prototype.render_row_inline_ = function (steps, cursor_xy, i_row, input_rows, edge_width, min_width) {
            var row = input_rows[i_row];
            // Inline inputs.
            for (var i_input = 0; i_input < row.length; i_input++) {
                var input = row[i_input];
                cursor_xy = this.render_fields_(input.fieldRow, cursor_xy, row.height || 0);
                if (input.type == interfaces_1.InputType.VALUE) {
                    // Sep of input value, they don't have renderSep since they are not Fields.
                    cursor_xy[0] += (input.fieldRow.length === 0 && i_input === 0) ? 0 : input.margin_left;
                    // Infer type since block_svg only uses rendered connection.
                    var connection = input.connection;
                    var target_block = connection.targetBlock();
                    if (input.connection &&
                        input.connection.get_targe_connection() &&
                        target_block != undefined) {
                        // Move connection if connected with block
                        connection.set_offset_in_block(cursor_xy[0], cursor_xy[1] + (row.height - target_block.height) / 2);
                    }
                    // Update value shape
                    cursor_xy[0] += input.render_width;
                }
                // 这一行的宽度，如果上一行是 row statement，就不应该比上一行要短
                if (min_width) {
                    cursor_xy[0] = Math.max(cursor_xy[0], min_width);
                }
            }
            // Update width for all inputs, such that all rows
            // stretch to be at least the size of all previous rows.
            // Statement has its own min width, should not update it.
            var row_right_edge = input_rows.right_edge;
            var last_row = input_rows[i_row - 1];
            if (last_row != undefined
                && last_row.type === interfaces_1.InputType.STATEMENT) {
                row_right_edge = this.theme.renderer.STATEMENT_OTHER_ROW_MIN_WIDTH - this.theme.renderer.BLOCK_EDGE_WIDTH;
            }
            input_rows.right_edge = Math.max(cursor_xy[0], row_right_edge);
            // Move to the right edge
            cursor_xy[0] = Math.max(cursor_xy[0], input_rows.right_edge);
            // Update block width
            // right_edge 是积木最小宽度减去 padding_r 后，积木内容右边界应该达到的位置
            // cursorX 不能小于 right_edge，否则加上 padding_r 之后积木也不能达到最小宽度
            if (i_row === 0) {
                this.first_row_width = cursor_xy[0] + row.padding_r;
                this.first_row_height = row.height;
            }
            this.width = Math.max(this.width, cursor_xy[0] + row.padding_r);
            this.svg_path_width = Math.max(this.width, cursor_xy[0] + row.padding_r);
            // Heading the SVG path to top-right of block before edge shape
            var draw_edge_width = Math.min(row.height / 2, edge_width);
            steps.push('H', "" + (cursor_xy[0] + row.padding_r - draw_edge_width));
        };
        /**
         * Draw statement input path to the left-bottom of statement.
         * 绘制 Statement Input 的 SVG 路径，此时 cursor 移至下一行左上角
         * @param {string[]} steps
         * @param {number} cursor_x
         * @param {number} width
         * @param {InputRow} row
         */
        class_1.prototype.draw_statement_input_ = function (steps, cursor_x, row) {
            if (this.is_render_notch()) {
                // Render the top notch of statement
                // 渲染开口上方的凹槽
                steps.push("H " + (this.theme.renderer.STATEMENT_MIN_WIDTH + this.theme.renderer.NTOCH_START_PADDING + this.theme.renderer.NOTCH_WIDTH + this.theme.renderer.NOTCH_OFFSET_BETWEEN_PADDING_AND_ROUND_CORNER));
                steps.push(this.theme.renderer.NOTCH_PATH_RIGHT);
            }
            // We can't draw the bottom of statement until we have
            // row.right_edge (now we only have one for rows) to
            // determine the width of next row.
            if (row.length == 1 && row[0].fieldRow.length == 0) {
                steps.push("H " + (this.theme.renderer.STATEMENT_MIN_WIDTH + this.theme.renderer.C_BLOCK_INNER_CORNOR_RADIUS));
            }
            else {
                steps.push("H " + (cursor_x + this.theme.renderer.STATEMENT_MIN_WIDTH + this.theme.renderer.C_BLOCK_INNER_CORNOR_RADIUS));
            }
            steps.push(this.theme.renderer.C_BLOCK_INNER_CORNOR_LEFT_TOP + " v " + (row.height - 2 * this.theme.renderer.C_BLOCK_INNER_CORNOR_RADIUS) + " " + this.theme.renderer.C_BLOCK_INNER_CORNOR_LEFT_BOTTOM);
            if (this.is_render_notch()) {
                // Render the bottom notch of statement
                // 渲染开口下方的凹槽
                steps.push("H " + (this.theme.renderer.STATEMENT_MIN_WIDTH + this.theme.renderer.NTOCH_START_PADDING));
                steps.push(this.theme.renderer.NOTCH_PATH_LEFT);
            }
        };
        /**
         * 绘制 statement 的一行的路径
         * @protected
         * @param {string[]} steps
         * @param {vec2} cursor_xy
         * @param {InputRow} row
         * @param {number} row_index
         * @param {InputRows} input_rows
         * @returns
         */
        class_1.prototype.render_row_statement = function (steps, cursor_xy, row, row_index, input_rows) {
            // 这是一个嵌套语句 input
            var input = row[0];
            this.render_fields_(input.fieldRow, cursor_xy, row.height || 0);
            if (!this.is_starting_block() ||
                this.inputs_inline == false) {
                this.draw_statement_input_(steps, cursor_xy[0], row);
                if (row.length == 1 && row[0].fieldRow.length == 0) {
                    // 如果 fieldRow 里面没有内容，不需要再补充 Field 的距离了
                }
                else {
                    cursor_xy[0] += this.theme.renderer.STATEMENT_MIN_WIDTH;
                }
            }
            // 创建 statement 的 connection.
            var connection_x = cursor_xy[0];
            // statement 设计稿的起点是 0 开始
            // let connection_x = 0;
            // 当凹槽被渲染时
            // 设置连接点的偏移量
            if (this.is_render_notch()) {
                // Move connection to the end of the notch.
                if (!this.is_starting_block()) {
                    connection_x = this.theme.renderer.NTOCH_START_PADDING + this.theme.renderer.NOTCH_WIDTH + this.theme.renderer.STATEMENT_MIN_WIDTH;
                }
                else if (constants_1.SPECIAL_CONNECTION_INPUT_NAME.includes(input.name)) {
                    // 如果带有 DO/STACK statament 的头积木或函数积木渲染了凹槽
                    // 下方连接点需要相应地偏移
                    connection_x = this.theme.renderer.NTOCH_START_PADDING + this.theme.renderer.NOTCH_WIDTH;
                }
            }
            if (!input.connection) {
                throw new Error('Statement connection should be renderable.');
            }
            input.connection.set_offset_in_block(connection_x, cursor_xy[1]);
            if (row_index == input_rows.length - 1 ||
                input_rows[row_index + 1].type == interfaces_1.InputType.STATEMENT) {
                // 如果最后的 input 是 statement，在下面添加一个小行
                // 连续语句堆栈也由一个小分隔符分隔
                // 排除 start block
                if (this.is_starting_block()) {
                    return;
                }
                // 最后小行的最小宽度
                var shape_radius = this.theme.renderer.INPUT_EXTRA_ROW_HEIGHT / 2;
                var min_width = Math.max(this.theme.renderer.INPUT_EXTRA_ROW_WIDTH - shape_radius, cursor_xy[0] + this.theme.renderer.ROW_PADDING);
                steps.push("H " + min_width);
                steps.push("a " + shape_radius + " " + shape_radius + " 0,0,1 0, " + this.theme.renderer.INPUT_EXTRA_ROW_HEIGHT);
                cursor_xy[1] += this.theme.renderer.INPUT_EXTRA_ROW_HEIGHT;
            }
        };
        /**
         * Render the bottom edge of the block.
         * 绘制积木底部路径，确定积木最终高度
         * @param steps Path of block outline.
         * @param cursor_xy use height of block.
         */
        class_1.prototype.render_draw_bottom_ = function (steps, cursor_xy) {
            // 处理错误配置的积木，使其在被折叠时不渲染下方凹槽
            if (constants_1.NEED_COLLAPSE_CHILDREN_BLOCKS.includes(this.type)
                && this.is_collapsed()) {
                return;
            }
            if ((0, base_1.is_block_group)(this) && this.group_type === interfaces_1.BlockGroupType.EXECUTION) {
                // 执行积木的分组需要加个勾勾
                this.block_renderer.render_group_bottom(steps);
                cursor_xy[0] = this.theme.renderer.STATEMENT_MIN_WIDTH;
                cursor_xy[1] += this.theme.renderer.INPUT_MIN_HEIGHT_STATEMENT + this.theme.renderer.INPUT_EXTRA_ROW_HEIGHT;
            }
            var should_render_notch = this.next_connection ||
                (this.is_include_special_input() && !this.is_collapsed());
            var connection_x = 0;
            if (this.is_render_notch() && should_render_notch) {
                this.block_renderer.render_path_notch_bottom(steps);
                // Move the connection point to the end of the notch.
                connection_x = this.theme.renderer.NOTCH_WIDTH + this.theme.renderer.NTOCH_START_PADDING;
            }
            if (this.next_connection) {
                this.next_connection.set_offset_in_block(connection_x, cursor_xy[1]);
            }
        };
        /**
         * Render the left edge of the block.
         */
        class_1.prototype.render_draw_left_ = function (steps) {
            if (this.output_connection != undefined) {
                // Create output connection.
                this.output_connection.set_offset_in_block(0, 0);
            }
            this.block_renderer.render_path_end(steps, this);
            steps.push('z');
        };
        return class_1;
    }(BlockSvgBase));
}
exports.block_render_svg = block_render_svg;
