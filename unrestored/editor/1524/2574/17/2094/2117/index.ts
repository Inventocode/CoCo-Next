"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.WorkspaceCommentDragger = void 0;
var r = require("../../../1000/93");
var i = require("../../../1000/134/index");
var o = require("../../../125/259");
var a = require("../../../1000/213/index");
var s = function (e) {
  function t(t) {
    var n = e.call(this, t.target, t.workspace) || this;
    n.type = "comment_dragger";
    n.start_relative_position = t.target.get_relative_position();
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.drag_related = function (e) {
    if ((0, a.is_workspace_comment)(this._dragging_block)) {
      var t = o.vec2.add(o.vec2.create(), this.start_relative_position, e);
      this._dragging_block.set_relative_position(t);
      this._dragging_block.draw_line();
    }
  };
  t.prototype.end_block_drag = function (e, t) {
    if (void 0 == this._workspace || void 0 == this._dragging_block) {
      throw new Error("Comment dragger has been disposed.");
    }
    this.drag_block(e, t);
    this.block_animations.disconnect_ui_effect_stop(this._dragging_block);
    var n = void 0;
    if (this.events.is_enabled()) {
      var r = this._workspace.current_gesture_;
      n = this.end_drag_event_factory({
        block: this._dragging_block,
        is_outside: this._was_outside,
        mouse_position: o.vec2.fromValues(e.clientX, e.clientY),
        is_from_flyout: (null === r || void 0 === r ? void 0 : r.is_start_from_flyout()) || !1,
        redo_stack_before_drag: this.redo_stack_before_drag
      });
    }
    this._dragging_block.set_mouse_through_style(!1);
    var i = this.pixels_to_workspace_units(t);
    var a = o.vec2.add(o.vec2.create(), this._start_xy, i);
    if (this._dragging_block.move_off_drag_surface(a), this._dragging_block.bring_to_front(), !this.maybe_delete_block() && (this._dragging_block.set_dragging(!1), this.events.is_enabled())) {
      var s = this.move_event_factory({
        block: this._dragging_block
      });
      s.set_old_coord(this.start_relative_position);
      s.record_new();
      this.events.fire(s);
    }
    if (this._workspace.set_resizes_enabled(!0), this._dragging_block.is_deletable()) {
      var c = this._workspace.get_toolbox();
      if (void 0 != c) {
        c.remove_delete_style();
      }
    }
    this.redo_stack_before_drag = [];
    this.undo_stack_before_drag = [];
    this.dispose();
    if (n) {
      this.events.fire(n);
    }
    this.events.set_group(!1);
  };
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./1310").ElementDragger);
exports.WorkspaceCommentDragger = s;