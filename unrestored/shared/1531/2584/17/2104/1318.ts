"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.WorkspaceDragger = void 0;
var r = require("../../1001/93");
var i = require("../../1001/134/index");
var o = require("../259");
var a = require("../../4/127");
var s = function () {
  function e(e) {
    this.start_scroll_xy_ = o.vec2.create();
    this.workspace_ = e;
    this.start_drag_metrics_ = e.get_metrics();
    o.vec2.copy(this.start_scroll_xy_, e.scroll_xy);
  }
  e.prototype.dispose = function () {
    this.workspace_ = void 0;
  };
  e.prototype.start_drag = function () {
    if (this.runtime_data && this.runtime_data.selected) {
      this.runtime_data.selected.unselect();
    }
    if (void 0 != this.workspace_) {
      this.workspace_.setup_drag_surface();
    }
  };
  e.prototype.end_drag = function (e) {
    this.drag(e);
    if (void 0 != this.workspace_) {
      this.workspace_.reset_drag_surface();
    }
    this.dispose();
  };
  e.prototype.drag = function (e) {
    var t = this.start_drag_metrics_;
    var n = o.vec2.add(o.vec2.create(), this.start_scroll_xy_, e);
    o.vec2.min(n, n, [-t.contentLeft, -t.contentTop]);
    o.vec2.max(n, n, [t.viewWidth - t.contentLeft - t.contentWidth, t.viewHeight - t.contentTop - t.contentHeight]);
    o.vec2.scaleAndAdd(n, [-t.contentLeft, -t.contentTop], n, -1);
    this.update_scroll(n);
  };
  e.prototype.update_scroll = function (e) {
    if (void 0 != this.workspace_) {
      this.workspace_.get_scrollbar().set(e[0], e[1]);
    }
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.runtime_data)], e.prototype, "runtime_data", void 0);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.WorkspaceDragger = s;