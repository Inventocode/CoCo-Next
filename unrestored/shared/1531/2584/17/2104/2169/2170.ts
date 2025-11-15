/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2170
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.HeadBlockRenderer = undefined
var r = require("tslib")
var i = require("../../../125/index")
var o = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.padding_l = n.theme.renderer.ROW_PADDING_HEAD
    if (t.is_render_notch()) {
      n.padding_l = n.theme.renderer.NTOCH_START_PADDING + n.theme.renderer.NOTCH_OFFSET_BETWEEN_PADDING_AND_ROUND_CORNER + n.theme.renderer.NOTCH_WIDTH - n.theme.renderer.SEP_SPACE_X
    }
    return n
  }
  (0, r.__extends)(t, e)
  t.prototype.get_decoration_path = function (e, t, n, r) {
    var o = r - 28 * e
    return (0, i.create_svg_element)("path", {
      d: "\n        m " + 4 * e + " " + (8 + 8 * e) + ",\n        h " + o + ",\n        v 20, a 20 20 0 0 1 -20 20,\n        h -" + (o - 22) + ",\n        a 2 2 0 0 1 -2 -2, z",
      fill: t.toString(),
      stroke: n.toString(),
      class: "decoration_for_collapsed_blocks"
    })
  }
  t.prototype.render_group_decoration_blocks = function (e) {
    e.decoration_block_paths.forEach(i.remove_node)
    e.decoration_block_paths.length = 0
    var t = Math.min(this.theme.renderer.EXECUTION_GROUP_DECORATION_WIDTH, e.width - this.theme.renderer.EXECUTION_GROUP_DECORATION_RIGHT_MARGIN)
    var n = e.origin_block.get_full_next_block()
    if (n) {
      var r = n.get_full_next_block()
      if (r) {
        var o = this.get_decoration_path(1, r.get_original_colour(), r.get_border_colour(), t)
        e.decoration_block_paths.unshift(o)
        e.svg_group.insertBefore(o, e.svg_path)
      }
      var a = this.get_decoration_path(0, n.get_original_colour(), n.get_border_colour(), t)
      e.decoration_block_paths.unshift(a)
      e.svg_group.insertBefore(a, e.svg_path)
    }
    return 0
  }
  return t
}(require("./1107").BlockRenderer)
exports.HeadBlockRenderer = o
