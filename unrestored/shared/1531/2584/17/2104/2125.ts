/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2125
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.FlyoutDragger = undefined
var r = require("tslib")
var i = require("inversify")
var o = function (e) {
  function t(t) {
    var n = e.call(this, t.get_workspace()) || this
    n.horizontal_layout = false
    n.scrollbar_ = t.get_scrollbar()
    n.horizontal_layout = t.is_horizontal()
    return n
  }
  (0, r.__extends)(t, e)
  t.prototype.update_scroll = function (e) {
    if (this.horizontal_layout) {
      this.scrollbar_.set(e[0])
    } else {
      this.scrollbar_.set(e[1])
    }
  }
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require("./1318").WorkspaceDragger)
exports.FlyoutDragger = o
