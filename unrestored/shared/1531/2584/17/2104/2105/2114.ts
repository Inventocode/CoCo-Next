/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2114
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EndDragEvent = undefined;
var r = require("tslib");
var i = require("inversify");
var o = require("../../../125/195/index");
var a = function (e) {
  function t(t) {
    var n = e.call(this, t.block) || this;
    n._record_undo = false;
    n.type = o.BlockEventType.END_DRAG;
    n.block = t.block;
    n._is_outside = t.is_outside;
    n.mouse_position = t.mouse_position;
    n._is_from_flyout = t.is_from_flyout;
    n.redo_stack_before_drag = t.redo_stack_before_drag;
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.get_block_xml = function () {
    return this.xml.workspace_element_to_dom(this.block, true);
  };
  t.prototype.delete_current = function () {
    this.block.dispose();
  };
  t.prototype.cancel_move = function () {
    var e = this._get_event_workspace();
    e.undo();
    e.set_redo_stack(this.redo_stack_before_drag);
  };
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./643").BlockEvent);
exports.EndDragEvent = a;