/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2171
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ShadowBlockRenderer = undefined
var r = require("tslib")
var i = require("../../../125/195/index")
var o = require("../../../1001/213/index")
var a = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    if ("param" === t.element_type || "param_color" === t.element_type) {
      return n
    }
    switch (n.padding_l = n.theme.renderer.ROW_PADDING_SHADOW, n.padding_r = n.theme.renderer.ROW_PADDING_SHADOW, n.min_height = n.theme.renderer.MIN_HEIGHT_SHADOW, t.get_output_shape()) {
      case i.OutputShape.HEXAGONAL:
        n.edge_width = n.theme.renderer.BLOCK_EDGE_WIDTH_SHADOW_HEXAGONAL
        break
      case i.OutputShape.ROUND:
        n.edge_width = n.theme.renderer.BLOCK_EDGE_WIDTH_SHADOW_ROUND
        break
      default:
        n.edge_width = n.theme.renderer.BLOCK_EDGE_WIDTH_SHADOW
    }
    if (!(1 !== t.inputList.length || 1 !== t.inputList[0].fieldRow.length || (0, o.is_field_number)(t.inputList[0].fieldRow[0]) || (0, o.is_field_text_input)(t.inputList[0].fieldRow[0]) || (0, o.is_field_default_value)(t.inputList[0].fieldRow[0]))) {
      n.padding_l = n.theme.renderer.ROW_PADDING_OUTPUT_NON_TEXT
      n.padding_r = n.theme.renderer.ROW_PADDING_OUTPUT_NON_TEXT
    }
    return n
  }
  (0, r.__extends)(t, e)
  t.prototype.min_width = function (t) {
    if ("param" === t.element_type || "param_color" === t.element_type) {
      return e.prototype.min_width.call(this, t)
    }
    switch (t.get_output_shape()) {
      case i.OutputShape.HEXAGONAL:
        return this.theme.renderer.MIN_WIDTH_SHADOW_HEXAGONAL - (this.theme.renderer.CORNER_OFFSET_X + this.theme.renderer.CORNER_OFFSET_X + .54)
      default:
        return this.theme.renderer.MIN_WIDTH_SHADOW
    }
  }
  t.prototype.get_field_padding_y = function () {
    return this.theme.renderer.SHADOW_ROW_PADDING_Y_TO_FIELD
  }
  t.prototype.get_block_padding_y = function () {
    return 0
  }
  return t
}(require("./1324").OutputBlockRenderer)
exports.ShadowBlockRenderer = a
