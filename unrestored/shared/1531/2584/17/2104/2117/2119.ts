"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.ContextMenuOptionEvent = void 0;
var r = require("../../../1001/93");
var i = require("../../../1001/134/index");
var o = require("../../../125/195/index");
var a = function (e) {
  function t(t) {
    var n = e.call(this) || this;
    n.type = o.BlockEventType.CONTEXT_MENU_OPTION;
    n._record_undo = !1;
    n._workspace_id = t.workspace_id;
    n._option_name = t.option_name;
    n._source = t.source;
    return n;
  }
  (0, r.__extends)(t, e);
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./840").BaseEvent);
exports.ContextMenuOptionEvent = a;