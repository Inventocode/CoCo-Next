/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2116
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.StartDragEvent = undefined
var r = require("tslib")
var i = require("inversify")
var o = require("../../../125/195/index")
var a = function (e) {
  function t(t) {
    var n = e.call(this, t.block) || this
    n.type = o.BlockEventType.START_DRAG
    n._record_undo = false
    n.block = t.block
    n._is_from_flyout = t.is_from_flyout
    return n
  }
  (0, r.__extends)(t, e)
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require("./643").BlockEvent)
exports.StartDragEvent = a
