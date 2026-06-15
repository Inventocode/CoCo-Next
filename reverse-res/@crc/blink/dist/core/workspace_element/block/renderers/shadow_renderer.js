"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowBlockRenderer = void 0;
var tslib_1 = require("tslib");
var interfaces_1 = require("../../../interfaces");
var base_1 = require("../../../utils/base");
var output_renderer_1 = require("./output_renderer");
var ShadowBlockRenderer = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(ShadowBlockRenderer, _super);
    function ShadowBlockRenderer(block) {
        var _this = _super.call(this, block) || this;
        if (block.element_type === 'param' || block.element_type === 'param_color') {
            return _this;
        }
        _this.padding_l = _this.theme.renderer.ROW_PADDING_SHADOW;
        _this.padding_r = _this.theme.renderer.ROW_PADDING_SHADOW;
        _this.min_height = _this.theme.renderer.MIN_HEIGHT_SHADOW;
        switch (block.get_output_shape()) {
            case interfaces_1.OutputShape.HEXAGONAL:
                _this.edge_width = _this.theme.renderer.BLOCK_EDGE_WIDTH_SHADOW_HEXAGONAL;
                break;
            case interfaces_1.OutputShape.ROUND:
                _this.edge_width = _this.theme.renderer.BLOCK_EDGE_WIDTH_SHADOW_ROUND;
                break;
            default:
                _this.edge_width = _this.theme.renderer.BLOCK_EDGE_WIDTH_SHADOW;
        }
        if (block.inputList.length === 1 &&
            block.inputList[0].fieldRow.length === 1 &&
            !(0, base_1.is_field_number)(block.inputList[0].fieldRow[0]) &&
            !(0, base_1.is_field_text_input)(block.inputList[0].fieldRow[0]) &&
            !(0, base_1.is_field_default_value)(block.inputList[0].fieldRow[0])) {
            _this.padding_l = _this.theme.renderer.ROW_PADDING_OUTPUT_NON_TEXT;
            _this.padding_r = _this.theme.renderer.ROW_PADDING_OUTPUT_NON_TEXT;
        }
        return _this;
    }
    ShadowBlockRenderer.prototype.min_width = function (block) {
        if (block.element_type === 'param' || block.element_type === 'param_color') {
            return _super.prototype.min_width.call(this, block);
        }
        switch (block.get_output_shape()) {
            case interfaces_1.OutputShape.HEXAGONAL:
                // 因为给 shadow 加了圆角导致增加加了距离
                // 0.27 是左右两个圆角的弧线在 x 轴的宽度
                return this.theme.renderer.MIN_WIDTH_SHADOW_HEXAGONAL - (this.theme.renderer.CORNER_OFFSET_X + this.theme.renderer.CORNER_OFFSET_X + 0.27 * 2);
            default:
                return this.theme.renderer.MIN_WIDTH_SHADOW;
        }
    };
    ShadowBlockRenderer.prototype.get_field_padding_y = function () {
        return this.theme.renderer.SHADOW_ROW_PADDING_Y_TO_FIELD;
    };
    ShadowBlockRenderer.prototype.get_block_padding_y = function () {
        // shadow不可再连接子积木
        return 0;
    };
    return ShadowBlockRenderer;
}(output_renderer_1.OutputBlockRenderer));
exports.ShadowBlockRenderer = ShadowBlockRenderer;
