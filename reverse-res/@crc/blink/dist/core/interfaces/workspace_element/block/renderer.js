"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputRowType = void 0;
/**
 * Constant for identifying rows that are to be rendered inline.
 * Don't collide with Blockly.INPUT_VALUE and friends.
 */
var InputRowType;
(function (InputRowType) {
    /**
     * 对应 input input 和 dummy input
     */
    InputRowType[InputRowType["INLINE"] = -1] = "INLINE";
    /**
     * 对应 statement input
     */
    InputRowType[InputRowType["STATEMENT"] = 3] = "STATEMENT";
})(InputRowType = exports.InputRowType || (exports.InputRowType = {}));
