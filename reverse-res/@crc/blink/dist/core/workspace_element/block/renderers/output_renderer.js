"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputBlockRenderer = void 0;
var tslib_1 = require("tslib");
var interfaces_1 = require("../../../interfaces");
var dom_1 = require("../../../utils/dom");
var block_renderer_1 = require("./block_renderer");
// 蓝湖设计稿：https://lanhuapp.com//web/#/item/project/board/detail?pid=e184da99-885b-4f3e-817a-633b02ef56a5&teamId=d8bd782f-b3e3-44bf-902c-71870cb9b929&project_id=e184da99-885b-4f3e-817a-633b02ef56a5&image_id=f00fadf2-839e-4355-bc7c-aa2447db66b3
var OutputBlockRenderer = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(OutputBlockRenderer, _super);
    function OutputBlockRenderer(block) {
        var _this = _super.call(this, block) || this;
        _this.padding_l = _this.theme.renderer.ROW_PADDING_OUTPUT;
        _this.padding_r = _this.theme.renderer.ROW_PADDING_OUTPUT;
        _this.edge_width = _this.theme.renderer.BLOCK_EDGE_WIDTH_OUTPUT;
        _this.min_height = _this.theme.renderer.MIN_HEIGHT_OUTPUT;
        if (block.get_output_shape() === interfaces_1.OutputShape.HEXAGONAL) {
            _this.edge_width = _this.theme.renderer.BLOCK_EDGE_WIDTH_OUTPUT_HEXAGONAL;
        }
        return _this;
        // https://lanhuapp.com//web/#/item/project/board/detail?pid=e184da99-885b-4f3e-817a-633b02ef56a5&teamId=d8bd782f-b3e3-44bf-902c-71870cb9b929&project_id=e184da99-885b-4f3e-817a-633b02ef56a5&image_id=f1503976-194e-4ca6-845a-066eb9c4d58f
        // https://lanhuapp.com//web/#/item/project/board/detail?pid=e184da99-885b-4f3e-817a-633b02ef56a5&teamId=d8bd782f-b3e3-44bf-902c-71870cb9b929&project_id=e184da99-885b-4f3e-817a-633b02ef56a5&image_id=f00fadf2-839e-4355-bc7c-aa2447db66b3
        // 根据设计稿，不同的 input 会影响 padding_l 和 padding_r 的值，根据 inputList 做判断
        // TODO: 设计有变，以后稳定了删除这段 hack 代码
        // const first_input = block.inputList[0];
        // const last_input = block.inputList[block.inputList.length - 1];
        // if (
        //   first_input.connection &&
        //   first_input.connection.target_connection &&
        //   first_input.fieldRow.length === 0
        // ) {
        //   this.padding_l = this.RendererConstants.ROW_PADDING_OUTPUT_WITH_INPUT;
        // } else if (first_input.fieldRow.length > 0) {
        //   this.padding_l = this.RendererConstants.ROW_PADDING_OUTPUT_WITH_TEXT;
        // }
        // if (
        //   last_input.connection &&
        //   last_input.connection.target_connection &&
        //   first_input.fieldRow.length === 0
        // ) {
        //   this.padding_r = this.RendererConstants.ROW_PADDING_OUTPUT_WITH_INPUT;
        // } else if (last_input.fieldRow.length > 0) {
        //   this.padding_r = this.RendererConstants.ROW_PADDING_OUTPUT_WITH_TEXT;
        // }
    }
    OutputBlockRenderer.prototype.min_width = function (block) {
        return block && this.theme.renderer.MIN_WIDTH_OUTPUT;
    };
    OutputBlockRenderer.prototype.render_path_start = function (steps, block) {
        block && steps.push("m " + this.edge_width + ",0");
    };
    OutputBlockRenderer.prototype.render_edge_shape_right = function (steps, block) {
        switch (block.get_output_shape()) {
            case interfaces_1.OutputShape.HEXAGONAL:
                steps.push("a " + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + ", " + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + " 0 0,1 \n          " + this.theme.renderer.CORNER_OFFSET_X + ", " + this.theme.renderer.CORNER_OFFSET_Y);
                steps.push("l " + this.edge_width + " " + (block.height / 2 - this.theme.renderer.CORNER_OFFSET_X));
                steps.push("a " + this.theme.renderer.HEX_CENTER_CORNER_RADIUS + ", " + this.theme.renderer.HEX_CENTER_CORNER_RADIUS + " 0 0,1 \n          0, " + this.theme.renderer.CENTER_CORNER_OFFSET);
                steps.push("l -" + this.edge_width + " " + (block.height / 2 - this.theme.renderer.CORNER_OFFSET_X));
                steps.push("a " + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + "," + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + " 0 0,1 \n          -" + this.theme.renderer.CORNER_OFFSET_X + ", " + this.theme.renderer.CORNER_OFFSET_Y);
                break;
            default:
                steps.push("a " + this.edge_width + " " + this.edge_width + " 0 0 1 " + this.edge_width + " " + this.edge_width);
                var v_height = block.height - this.edge_width * 2;
                if (v_height > 0) {
                    steps.push("v " + v_height);
                }
                steps.push("a " + this.edge_width + " " + this.edge_width + " 0 0 1 -" + this.edge_width + " " + this.edge_width);
                break;
        }
    };
    OutputBlockRenderer.prototype.render_path_end = function (steps, block) {
        switch (block.get_output_shape()) {
            case interfaces_1.OutputShape.HEXAGONAL:
                steps.push("H " + this.edge_width);
                steps.push("a " + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + "," + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + " 0 0,1 \n          -" + this.theme.renderer.CORNER_OFFSET_X + ", -" + this.theme.renderer.CORNER_OFFSET_Y);
                // 减 2 是因为下面的圆角的半径
                steps.push("l -" + this.edge_width + " -" + (block.height / 2 - this.theme.renderer.CORNER_OFFSET_X));
                steps.push("a " + this.theme.renderer.HEX_CENTER_CORNER_RADIUS + "," + this.theme.renderer.HEX_CENTER_CORNER_RADIUS + " 0 0,1 \n            0, -" + this.theme.renderer.CENTER_CORNER_OFFSET);
                steps.push("l " + this.edge_width + " -" + (block.height / 2 - this.theme.renderer.CORNER_OFFSET_X));
                steps.push("a " + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + "," + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + " 0 0,1 \n          " + this.theme.renderer.CORNER_OFFSET_X + ", -" + this.theme.renderer.CORNER_OFFSET_Y);
                break;
            default:
                steps.push("H " + this.edge_width);
                steps.push("a " + this.edge_width + " " + this.edge_width + " 0 0 1 -" + this.edge_width + " -" + this.edge_width);
                var v_height = block.height - this.edge_width * 2;
                if (v_height > 0) {
                    steps.push("v -" + v_height);
                }
                steps.push("a " + this.edge_width + " " + this.edge_width + " 0 0 1 " + this.edge_width + " -" + this.edge_width);
        }
    };
    OutputBlockRenderer.prototype.render_edge_shape_collapsed_right = function (steps, block) {
        var edge_height = block.height;
        steps.push(this.theme.renderer.COLLAPSED_PATH);
        steps.push("v " + (edge_height - this.min_height + block.height / 2 - this.theme.renderer.CORNER_OFFSET_X));
    };
    OutputBlockRenderer.prototype.get_layered_value_descendants = function (block, opt_ignore_shadows) {
        var _a;
        if (opt_ignore_shadows === void 0) { opt_ignore_shadows = true; }
        if (!block.output_connection)
            return [];
        var layered_blocks = [];
        for (var i = 0; i < block.inputList.length; i++) {
            var input = block.inputList[i];
            if (input.type !== interfaces_1.InputType.VALUE)
                continue;
            var target_block = (_a = input.connection) === null || _a === void 0 ? void 0 : _a.targetBlock();
            if (!target_block || (opt_ignore_shadows && target_block.is_shadow()))
                continue;
            var child_layered_blocks = this.get_layered_value_descendants(target_block, opt_ignore_shadows);
            for (var layer = 0; layer < child_layered_blocks.length; layer++) {
                layered_blocks[layer] = layered_blocks[layer] || [];
                layered_blocks[layer] = layered_blocks[layer].concat(child_layered_blocks[layer]);
            }
        }
        layered_blocks.unshift([block]);
        return layered_blocks;
    };
    /**
     * 一位设计朋友出的算法题。
     *
     * 原题：
     * [Blink语言规范 - 积木&组件交互样式 - 【标准】输出积木折叠](https://lanhuapp.com/web/#/item/project/detailDetach?pid=e184da99-885b-4f3e-817a-633b02ef56a5&project_id=e184da99-885b-4f3e-817a-633b02ef56a5&image_id=37796ea8-1885-47e4-9279-ea26e507bfcf)
     */
    OutputBlockRenderer.prototype.select_output_group_children = function (group) {
        var base_block = group.origin_block;
        var layered_children = this.get_layered_value_descendants(base_block, true);
        var sorted_children = [];
        for (var i = 1; i < layered_children.length; i++) {
            sorted_children = sorted_children.concat(layered_children[i]);
        }
        /**
         * 子积木选择优先级：
         * 1. 保证数量
         * 2. 保证顺序
         * 3. 不同颜色优先
         */
        var output_first_child;
        var output_second_child;
        var in_same_colour = function (b) {
            return b.get_original_colour() === base_block.get_original_colour();
        };
        for (var i = 0; i < sorted_children.length; i++) {
            // 优先填满两个选项。
            var block = sorted_children[i];
            if (!output_first_child) {
                output_first_child = block;
                continue;
            }
            if (!output_second_child) {
                output_second_child = block;
                continue;
            }
            // 两个选项已满。
            // 已选中的两个积木与外层都不同色了，快结束吧
            if (!in_same_colour(output_first_child) && !in_same_colour(output_second_child)) {
                break;
            }
            // 已选中的第二个积木与外层同色，直接替代，进行下一个检查。
            if (in_same_colour(output_second_child)) {
                output_second_child = block;
                continue;
            }
            // 已选中的第二个积木与外层不同色，但首个同色，
            // 说明之前出现了连续暂选，需要往前重排。
            output_first_child = output_second_child;
            output_second_child = block;
        }
        return [output_first_child, output_second_child];
    };
    OutputBlockRenderer.prototype.render_decoration_block = function (order, offset, tag_field_width, child, shape) {
        var decoration_width = tag_field_width;
        switch (shape) {
            case interfaces_1.OutputShape.HEXAGONAL:
                return (0, dom_1.create_svg_element)('path', {
                    d: "\n            m " + (offset + order * this.theme.renderer.OUTPUT_GROUP_DECORATION_OFFSET - 5) + " 6,\n            h " + (decoration_width + 10) + ",\n            a 3,3 0 0,1 2,1\n            l " + this.edge_width + " " + (this.min_height / 2 - this.theme.renderer.CORNER_OFFSET_X) + ",\n            a 2,2 0 0,1 0,2\n            l -" + this.edge_width + " " + (this.min_height / 2 - this.theme.renderer.CORNER_OFFSET_X) + "\n            a 3,3 0 0,1 -2,1\n            h -" + (decoration_width + 10) + ",\n            a 3,3 0 0,1 -2,-1\n            l -" + this.edge_width + " -" + (this.min_height / 2 - this.theme.renderer.CORNER_OFFSET_X) + "\n            a 2,2 0 0,1 0,-2\n            l " + this.edge_width + " -" + (this.min_height / 2 - this.theme.renderer.CORNER_OFFSET_X) + "\n            a 3,3 0 0,1 2,-1\n          ",
                    fill: child.get_original_colour(),
                    stroke: child.get_border_colour(),
                    class: 'decoration_for_collapsed_blocks',
                });
            default:
                return (0, dom_1.create_svg_element)('path', {
                    d: "\n            m " + (offset + order * this.theme.renderer.OUTPUT_GROUP_DECORATION_OFFSET) + " 6,\n            h " + decoration_width + ",\n            a " + this.edge_width + " " + this.edge_width + " 0 0 1 0 " + this.edge_width * 2 + ",\n            h -" + decoration_width + ",\n            a " + this.edge_width + " " + this.edge_width + " 0 0 1 0 -" + this.edge_width * 2,
                    fill: child.get_original_colour(),
                    stroke: child.get_border_colour(),
                    class: 'decoration_for_collapsed_blocks',
                });
        }
    };
    OutputBlockRenderer.prototype.render_group_decoration_blocks = function (block_group) {
        block_group.decoration_block_paths.forEach(dom_1.remove_node);
        block_group.decoration_block_paths.length = 0;
        var _a = this.select_output_group_children(block_group), output_first_child = _a[0], output_second_child = _a[1];
        var width_to_add = 0;
        var tag_field = block_group.get_field(interfaces_1.BLOCK_GROUP_TAG_FIELD_NAME);
        var input_field_x = this.theme.renderer.BLOCK_EDGE_WIDTH_OUTPUT // 积木左侧圆角的半径
            + this.theme.renderer.SEP_SPACE_X
            + tag_field.get_size().width
            + this.theme.renderer.SEP_SPACE_X
            + this.theme.renderer.OUTPUT_GROUP_DECORATION_PADDING;
        var input_field = block_group.get_field(interfaces_1.BLOCK_GROUP_NAME_FIELD_NAME);
        var input_field_width = input_field.get_size().width;
        var output_shape = block_group.origin_block.get_output_shape() || interfaces_1.OutputShape.ROUND;
        var first_decoration = this
            .render_decoration_block(0, input_field_x, input_field_width, block_group.origin_block, output_shape);
        if (output_second_child) {
            var third_decoration = this.render_decoration_block(2, input_field_x, input_field_width, output_second_child, output_shape);
            block_group.decoration_block_paths.unshift(third_decoration);
            block_group.svg_group.insertBefore(third_decoration, block_group.svg_group.lastChild);
            width_to_add += this.theme.renderer.OUTPUT_GROUP_DECORATION_OFFSET;
        }
        if (output_first_child) {
            var second_decoration = this.render_decoration_block(1, input_field_x, input_field_width, output_first_child, output_shape);
            block_group.decoration_block_paths.unshift(second_decoration);
            block_group.svg_group.insertBefore(second_decoration, block_group.svg_group.lastChild);
            width_to_add += this.theme.renderer.OUTPUT_GROUP_DECORATION_OFFSET;
        }
        block_group.decoration_block_paths.unshift(first_decoration);
        block_group.svg_group.insertBefore(first_decoration, block_group.svg_group.lastChild);
        width_to_add += this.theme.renderer.OUTPUT_GROUP_DECORATION_PADDING;
        return width_to_add;
    };
    OutputBlockRenderer.prototype.get_field_padding_y = function () {
        return this.theme.renderer.OUTPUT_ROW_PADDING_Y_TO_FIELD;
    };
    OutputBlockRenderer.prototype.get_block_padding_y = function () {
        // 输出积木下不可连接执行积木，直接当做输出积木处理
        return this.theme.renderer.OUTPUT_ROW_PADDING_Y_TO_VALUE_BLOCK;
    };
    return OutputBlockRenderer;
}(block_renderer_1.BlockRenderer));
exports.OutputBlockRenderer = OutputBlockRenderer;
