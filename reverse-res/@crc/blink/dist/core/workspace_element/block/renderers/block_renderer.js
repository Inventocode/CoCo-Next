"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockRenderer = void 0;
var tslib_1 = require("tslib");
var interfaces_1 = require("../../../interfaces");
var di_1 = require("../../../di");
var dom_1 = require("../../../utils/dom");
/**
 * Block Renderer
 * Provides methods to render blocks
 * @export
 * @class BlockRenderer
 */
var BlockRenderer = /** @class */ (function () {
    function BlockRenderer(block) {
        this.edge_width = this.theme.renderer.BLOCK_EDGE_WIDTH;
        this.padding_l = this.theme.renderer.ROW_PADDING;
        this.padding_r = this.theme.renderer.ROW_PADDING;
        this.min_height = this.theme.renderer.MIN_HEIGHT;
        this.CORNER_LEFT_TOP = "a " + this.theme.renderer.CORNER_RADIUS + " " + this.theme.renderer.CORNER_RADIUS + " 0 0 1 " + this.theme.renderer.CORNER_RADIUS + " -" + this.theme.renderer.CORNER_RADIUS;
        this.CORNER_LEFT_BOTTOM = "a " + this.theme.renderer.CORNER_RADIUS + " " + this.theme.renderer.CORNER_RADIUS + " 0 0 1 -" + this.theme.renderer.CORNER_RADIUS + " -" + this.theme.renderer.CORNER_RADIUS;
        // Move to the right of notch.
        if (block.is_render_notch()) {
            this.padding_l = this.theme.renderer.NTOCH_START_PADDING + this.theme.renderer.NOTCH_OFFSET_BETWEEN_PADDING_AND_ROUND_CORNER + this.theme.renderer.NOTCH_WIDTH;
            this.padding_r = this.theme.renderer.ROW_PADDING + 8; // TODO 这个8哪来的 看起来是SEP_SPACE_X
        }
    }
    BlockRenderer.prototype.min_width = function (block) {
        if (block && block.is_render_notch()) {
            return this.theme.renderer.MIN_WIDTH;
        }
        return block && this.theme.renderer.MIN_WIDTH;
    };
    BlockRenderer.prototype.render_path_start = function (steps, block) {
        steps.push("m 0," + this.theme.renderer.CORNER_RADIUS);
        steps.push(this.CORNER_LEFT_TOP);
        // Render notch if it is needed.
        if (block.is_render_notch() && block.previous_connection != undefined) {
            this.render_path_notch_top(steps);
        }
    };
    // Render the top notch of block
    // 渲染积木上方的凹槽
    BlockRenderer.prototype.render_path_notch_top = function (steps) {
        steps.push('H', "" + this.theme.renderer.NTOCH_START_PADDING);
        steps.push(this.theme.renderer.NOTCH_PATH_LEFT);
    };
    // Render the bottom notch of block
    // 渲染积木下方的凹槽
    BlockRenderer.prototype.render_path_notch_bottom = function (steps) {
        steps.push('H', "" + (this.theme.renderer.NTOCH_START_PADDING + this.theme.renderer.NOTCH_WIDTH + this.theme.renderer.NOTCH_OFFSET_BETWEEN_PADDING_AND_ROUND_CORNER));
        steps.push(this.theme.renderer.NOTCH_PATH_RIGHT);
    };
    BlockRenderer.prototype.render_edge_shape_right = function (steps, block, is_inline, cursor_xy, last_input_height) {
        if (is_inline === void 0) { is_inline = true; }
        // 当最后一行的行高小于默认edge width的两倍而无法形成圆润的弧时
        // 以最后一行的行高来决定edge width
        var edge_width = last_input_height ? Math.min(last_input_height / 2, this.edge_width) : this.edge_width;
        var edge_height = block.height;
        steps.push("a " + edge_width + " " + edge_width + " 0 0 1 " + edge_width + " " + edge_width);
        if (is_inline == false) {
            steps.push("V " + (edge_height - this.min_height / 2));
        }
        else {
            // 看起来这里是 在当前行高度超过edge的两倍时，在中间补充直线
            if (cursor_xy[1] > edge_width * 2 && !last_input_height) {
                steps.push("v " + (cursor_xy[1] - edge_width * 2));
            }
            if (last_input_height) {
                steps.push("v " + (last_input_height - edge_width * 2));
            }
        }
        steps.push("a " + edge_width + " " + edge_width + " 0 0 1 -" + edge_width + " " + edge_width);
    };
    BlockRenderer.prototype.render_edge_shape_collapsed_right = function (steps, block) {
        var edge_height = block.height;
        steps.push(this.theme.renderer.COLLAPSED_PATH);
        steps.push("v " + (edge_height - this.min_height + block.height / 2));
    };
    BlockRenderer.prototype.render_edge_shape_group_right = function (steps, block) {
        var edge_height = block.height - 5.5 - 3.5;
        steps.push("h " + this.theme.renderer.GROUP_RIGHT_EDGE_WIDTH + "\n      " + this.theme.renderer.GROUP_TOP_RIGHT_PATH + "\n      l -8.6 " + edge_height + "\n      " + this.theme.renderer.GROUP_BOTTOM_RIGHT_PATH);
    };
    BlockRenderer.prototype.render_path_end = function (steps, block) {
        var CORNER_RADIUS_LEFT_BOTTOM_OF_END_BLOCK = block.is_render_notch()
            ? this.theme.renderer.CORNER_RADIUS
            : this.theme.renderer.CORNER_RADIUS_END_BLOCK_WITHOUD_NOTCH;
        // Special style for ending blocks
        if (block.is_ending_block()) {
            steps.push('H', CORNER_RADIUS_LEFT_BOTTOM_OF_END_BLOCK.toString());
            steps.push('a', CORNER_RADIUS_LEFT_BOTTOM_OF_END_BLOCK + "," + CORNER_RADIUS_LEFT_BOTTOM_OF_END_BLOCK + " 0 0,1 -" + CORNER_RADIUS_LEFT_BOTTOM_OF_END_BLOCK + ",-" + CORNER_RADIUS_LEFT_BOTTOM_OF_END_BLOCK);
            return;
        }
        steps.push("H " + this.theme.renderer.CORNER_RADIUS);
        steps.push(this.CORNER_LEFT_BOTTOM);
    };
    BlockRenderer.prototype.get_decoration_path = function (order, fill, stroke, base_width, first_only) {
        var width = base_width - order * 28;
        var height_to_expose = first_only ? 12 : 8;
        return (0, dom_1.create_svg_element)('path', {
            d: "\n        m " + (this.theme.renderer.STATEMENT_MIN_WIDTH + 4 * order) + " " + (height_to_expose + 8 * order) + ",\n        h " + width + ",\n        v 20, a 20 20 0 0 1 -20 20,\n        h -" + (width - 22) + ",\n        a 2 2 0 0 1 -2 -2, z",
            fill: fill.toString(),
            stroke: stroke.toString(),
            class: 'decoration_for_collapsed_blocks',
        });
    };
    BlockRenderer.prototype.render_group_decoration_blocks = function (block) {
        if (!block.svg_path) {
            return 0;
        }
        block.decoration_block_paths.forEach(dom_1.remove_node);
        block.decoration_block_paths.length = 0;
        var first_child = block.origin_block;
        var second_child = first_child.get_full_next_block();
        var decoration_base_width = Math.min(this.theme.renderer.EXECUTION_GROUP_DECORATION_WIDTH, block.width
            - this.theme.renderer.STATEMENT_MIN_WIDTH
            - this.theme.renderer.EXECUTION_GROUP_DECORATION_RIGHT_MARGIN);
        if (second_child) {
            var second_decoration = this.get_decoration_path(1, second_child.get_original_colour(), second_child.get_border_colour(), decoration_base_width, false);
            block.decoration_block_paths.unshift(second_decoration);
            block.svg_group.insertBefore(second_decoration, block.svg_path);
        }
        var first_decoration = this.get_decoration_path(0, first_child.get_original_colour(), first_child.get_border_colour(), decoration_base_width, !second_child);
        block.decoration_block_paths.unshift(first_decoration);
        block.svg_group.insertBefore(first_decoration, block.svg_path);
        return 0;
    };
    BlockRenderer.prototype.render_group_bottom = function (steps) {
        steps.push("H " + (this.theme.renderer.STATEMENT_MIN_WIDTH + this.theme.renderer.C_BLOCK_INNER_CORNOR_RADIUS));
        steps.push(this.theme.renderer.C_BLOCK_INNER_CORNOR_LEFT_TOP);
        steps.push("v " + (this.theme.renderer.INPUT_MIN_HEIGHT_STATEMENT - 2 * this.theme.renderer.C_BLOCK_INNER_CORNOR_RADIUS));
        steps.push(this.theme.renderer.C_BLOCK_INNER_CORNOR_LEFT_BOTTOM);
        steps.push(this.theme.renderer.GROUP_EXTRA_ROW_RIGHT);
    };
    BlockRenderer.prototype.get_field_padding_y = function () {
        return this.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_FIELD;
    };
    BlockRenderer.prototype.get_block_padding_y = function (type) {
        if (type !== interfaces_1.InputType.VALUE) {
            return this.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_STATEMENT_BLOCK;
        }
        return this.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_VALUE_BLOCK;
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.theme)
    ], BlockRenderer.prototype, "theme", void 0);
    return BlockRenderer;
}());
exports.BlockRenderer = BlockRenderer;
