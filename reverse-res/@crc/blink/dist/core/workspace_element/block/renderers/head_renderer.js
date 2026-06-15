"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadBlockRenderer = void 0;
var tslib_1 = require("tslib");
var dom_1 = require("../../../utils/dom");
var block_renderer_1 = require("./block_renderer");
var HeadBlockRenderer = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(HeadBlockRenderer, _super);
    function HeadBlockRenderer(block) {
        var _this = _super.call(this, block) || this;
        _this.padding_l = _this.theme.renderer.ROW_PADDING_HEAD;
        // Move to the right of notch.
        if (block.is_render_notch()) {
            _this.padding_l =
                _this.theme.renderer.NTOCH_START_PADDING +
                    _this.theme.renderer.NOTCH_OFFSET_BETWEEN_PADDING_AND_ROUND_CORNER +
                    _this.theme.renderer.NOTCH_WIDTH - _this.theme.renderer.SEP_SPACE_X;
        }
        return _this;
    }
    HeadBlockRenderer.prototype.get_decoration_path = function (order, fill, stroke, base_width) {
        var width = base_width - order * 28;
        return (0, dom_1.create_svg_element)('path', {
            d: "\n        m " + 4 * order + " " + (8 + 8 * order) + ",\n        h " + width + ",\n        v 20, a 20 20 0 0 1 -20 20,\n        h -" + (width - 22) + ",\n        a 2 2 0 0 1 -2 -2, z",
            fill: fill.toString(),
            stroke: stroke.toString(),
            class: 'decoration_for_collapsed_blocks',
        });
    };
    HeadBlockRenderer.prototype.render_group_decoration_blocks = function (block) {
        block.decoration_block_paths.forEach(dom_1.remove_node);
        block.decoration_block_paths.length = 0;
        var decoration_base_width = Math.min(this.theme.renderer.EXECUTION_GROUP_DECORATION_WIDTH, block.width - this.theme.renderer.EXECUTION_GROUP_DECORATION_RIGHT_MARGIN);
        var first_child = block.origin_block.get_full_next_block();
        if (first_child) {
            var second_child = first_child.get_full_next_block();
            if (second_child) {
                var second_decoration = this.get_decoration_path(1, second_child.get_original_colour(), second_child.get_border_colour(), decoration_base_width);
                block.decoration_block_paths.unshift(second_decoration);
                block.svg_group.insertBefore(second_decoration, block.svg_path);
            }
            var first_decoration = this.get_decoration_path(0, first_child.get_original_colour(), first_child.get_border_colour(), decoration_base_width);
            block.decoration_block_paths.unshift(first_decoration);
            block.svg_group.insertBefore(first_decoration, block.svg_path);
        }
        return 0;
    };
    return HeadBlockRenderer;
}(block_renderer_1.BlockRenderer));
exports.HeadBlockRenderer = HeadBlockRenderer;
