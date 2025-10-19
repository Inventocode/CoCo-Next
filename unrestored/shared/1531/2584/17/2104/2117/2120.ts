/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2120
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupEvent = undefined;
var r = require("tslib");
var i = require("inversify");
var o = require("../../../26/208/index");
var a = require("../../../4/127");
var s = require("../../../125/195/index");
var c = require("../../497/644");
var u = function (e) {
  function t(t) {
    var n = e.call(this) || this;
    n._workspace_id = n.Blink.mainWorkspace.id || "";
    n._record_undo = false;
    var r = t.type;
    var i = t.group;
    n.type = r;
    n._group = i;
    if (r === s.GroupEventType.GroupEnd) {
      for (var o = n._get_event_workspace().get_undo_stack().filter(function (e) {
          return e._group === n._group;
        }), a = o.length - 1; a >= 0; a--) {
        var c = o[a];
        if (c.type === s.BlockEventType.MOVE || c.type === s.BlockEventType.CREATE && "other" === c.source || c.type === s.BlockEventType.CHANGE && "change_procedure_param" === c.element) {
          n.process_context_blocks(c);
        }
      }
    }
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.process_context_blocks = function (e) {
    var t = this;
    var n = this._get_event_workspace().get_block_by_id(e.get_block_id());
    if (n) {
      var r = new Set();
      var i = new Set();
      n.get_descendants(false, true).forEach(function (e) {
        if (e.type !== o.PROCEDURE_BLOCK_TYPES.CALL_NORETURN && e.type !== o.PROCEDURE_BLOCK_TYPES.CALL_RETURN && (0, c.has_context)(e)) {
          var t = (0, c.is_valid_context)(e);
          if (!(t || e.disabled)) {
            r.add(e);
          }
          if (t && e.disabled) {
            i.add(e);
          }
        }
      });
      var a = function (e, n) {
        var r = t.events.is_record_undo();
        t.events.set_record_undo(true);
        t.events.disable();
        var i = t.events.get_group();
        t.events.set_group(t._group);
        t.events.enable();
        e.set_disabled(n);
        t.events.disable();
        t.events.set_group(i);
        t.events.enable();
        t.events.set_record_undo(r);
      };
      r.forEach(function (e) {
        a(e, true);
      });
      i.forEach(function (e) {
        a(e, false);
      });
    }
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.Blink)], t.prototype, "Blink", undefined);
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./840").BaseEvent);
exports.GroupEvent = u;