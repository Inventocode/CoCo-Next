/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2113
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragAreaChangeEvent = undefined;
var r = require("tslib");
var i = require("inversify");
var o = require("../../../125/195/index");
var a = function (e) {
  function t(t) {
    var n = e.call(this, t.block) || this;
    n.type = o.BlockEventType.DRAG_AREA_CHANGE;
    n._record_undo = false;
    n.block = t.block;
    n.area = t.area;
    n.is_in = t.is_in;
    return n;
  }
  (0, r.__extends)(t, e);
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./643").BlockEvent);
exports.DragAreaChangeEvent = a;