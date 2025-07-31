"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.FlyoutDragger = void 0;
var r = require("../../1000/93");
var i = require("../../1000/134/index");
var o = function (e) {
  function t(t) {
    var n = e.call(this, t.get_workspace()) || this;
    n.horizontal_layout = !1;
    n.scrollbar_ = t.get_scrollbar();
    n.horizontal_layout = t.is_horizontal();
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.update_scroll = function (e) {
    if (this.horizontal_layout) {
      this.scrollbar_.set(e[0]);
    } else {
      this.scrollbar_.set(e[1]);
    }
  };
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./1311").WorkspaceDragger);
exports.FlyoutDragger = o;