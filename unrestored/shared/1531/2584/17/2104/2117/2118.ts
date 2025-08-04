"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.UIEvent = void 0;
var r = require("tslib");
var i = require("inversify");
var o = function (e) {
  function t(t) {
    var n = e.call(this) || this;
    n._record_undo = !1;
    n.type = t.type;
    n._workspace_id = t.workspace_id;
    n._old_value = t.old_value;
    n._new_value = t.new_value;
    n._block_id = t.block_id;
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.get_new_value = function () {
    return this._new_value;
  };
  t.prototype.get_old_value = function () {
    return this._old_value;
  };
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./840").BaseEvent);
exports.UIEvent = o;