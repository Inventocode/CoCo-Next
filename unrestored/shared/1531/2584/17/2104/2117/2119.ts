/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2119
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ContextMenuOptionEvent = undefined
var r = require("tslib")
var i = require("inversify")
var o = require("../../../125/195/index")
var a = function (e) {
  function t(t) {
    var n = e.call(this) || this
    n.type = o.BlockEventType.CONTEXT_MENU_OPTION
    n._record_undo = false
    n._workspace_id = t.workspace_id
    n._option_name = t.option_name
    n._source = t.source
    return n
  }
  (0, r.__extends)(t, e)
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require("./840").BaseEvent)
exports.ContextMenuOptionEvent = a
