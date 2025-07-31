"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.ElementDragger = void 0;
var r = require("../../../1000/93");
var i = require("../../../125/259");
var o = require("../../../4/127");
var a = require("../../../125/195/index");
var s = function () {
  function e(e, t) {
    this.parent_before_drag = void 0;
    this._delete_area = a.DeleteArea.DELETE_AREA_NONE;
    this._would_delete_block = !1;
    this._was_outside = !1;
    this._was_workspace = !0;
    this.redo_stack_before_drag = [];
    this.undo_stack_before_drag = [];
    this._dragging_block = e;
    this._workspace = t;
    this._start_xy = e.get_relative_to_surface_xy();
  }
  e.prototype.update_cursor_during_block_drag = function (e) {
    if (void 0 != this._workspace && void 0 != this._dragging_block) {
      if (this._dragging_block.is_deletable()) {
        this._would_delete_block = this._delete_area === a.DeleteArea.DELETE_AREA_TOOLBOX;
        this._dragging_block.set_delete_style(this._would_delete_block);
        this._dragging_block.set_mouse_through_style(e);
      }
    } else {
      console.error("Block dragger has been disposed.");
    }
  };
  e.prototype.start_block_drag = function (e) {
    if (void 0 == this._workspace || void 0 == this._dragging_block) {
      throw new Error("Block dragger has been disposed.");
    }
    if (!(this.redo_stack_before_drag || this.undo_stack_before_drag)) {
      this.redo_stack_before_drag = this._workspace.get_redo_stack().slice();
      this.undo_stack_before_drag = this._workspace.get_undo_stack().slice();
    }
    if (!this.events.get_group()) {
      this.events.set_group(!0);
    }
    this._workspace.set_resizes_enabled(!1);
    this.tooltip.hide();
    var t = this.pixels_to_workspace_units(e);
    var n = i.vec2.create();
    if (i.vec2.add(n, this._start_xy, t), this._dragging_block.translate(n), this._dragging_block.set_dragging(!0), this._dragging_block.bring_to_front(), this._dragging_block.move_to_drag_surface(), this._dragging_block.is_deletable()) {
      var r = this._workspace.get_toolbox();
      if (void 0 != r) {
        r.add_delete_style();
      }
    }
    if (this.events.is_enabled()) {
      var o = this._workspace.current_gesture_;
      this.events.fire(this.start_drag_event_factory({
        block: this._dragging_block,
        is_from_flyout: (null === o || void 0 === o ? void 0 : o.is_start_from_flyout()) || !1
      }));
    }
  };
  e.prototype.drag_block = function (e, t) {
    if (void 0 == this._workspace || void 0 == this._dragging_block) {
      throw new Error("Block dragger has been disposed.");
    }
    var n = this.pixels_to_workspace_units(t);
    var r = i.vec2.create();
    i.vec2.add(r, this._start_xy, n);
    this._dragging_block.move_during_drag(r);
    this.drag_related(n);
    this.handle_dragging_around_delete_area(e);
    this.handle_dragging_around_blocks_area(e);
    this.handle_dragging_around_workspace(e);
    return n;
  };
  e.prototype.handle_dragging_around_delete_area = function (e) {
    if (void 0 == this._workspace || void 0 == this._dragging_block) {
      throw new Error("Block dragger has been disposed.");
    }
    var t;
    var n = this._workspace.is_delete_area(e);
    if (!!n !== !!this._delete_area && this.events.is_enabled()) {
      t = this.drag_area_change_event_factory({
        block: this._dragging_block,
        area: a.DragArea.DELETE_AREA,
        is_in: !!n
      });
    }
    this._delete_area = n;
    this.events.fire(t);
  };
  e.prototype.handle_dragging_around_blocks_area = function (e) {
    if (void 0 == this._workspace || void 0 == this._dragging_block) {
      throw new Error("Block dragger has been disposed.");
    }
    var t;
    var n = !this._workspace.is_inside_blocks_area(e);
    if (n !== this._was_outside) {
      if (this.events.is_enabled()) {
        t = this.drag_area_change_event_factory({
          block: this._dragging_block,
          area: a.DragArea.INJECTION_DIV,
          is_in: !n
        });
      }
      this._was_outside = n;
    }
    this.update_cursor_during_block_drag(n);
    this.events.fire(t);
  };
  e.prototype.handle_dragging_around_workspace = function (e) {
    if (void 0 == this._workspace || void 0 == this._dragging_block) {
      throw new Error("Block dragger has been disposed.");
    }
    var t;
    var n = this._workspace.is_inside_workspace_area(e);
    if (n !== this._was_workspace) {
      if (this.events.is_enabled()) {
        t = this.drag_area_change_event_factory({
          block: this._dragging_block,
          area: a.DragArea.WORKSPACE,
          is_in: n
        });
      }
      this._was_workspace = n;
    }
    this.events.fire(t);
  };
  e.prototype.maybe_delete_block = function () {
    if (void 0 == this._workspace || void 0 == this._dragging_block) {
      throw new Error("Block dragger has been disposed.");
    }
    if (!this._dragging_block.is_deletable()) {
      return !1;
    }
    if (this._would_delete_block) {
      if (this.events.is_enabled()) {
        var e = this.move_event_factory({
          block: this._dragging_block
        });
        e.set_old_coord(this._start_xy);
        e.record_new();
        this.events.fire(e);
      }
      this._dragging_block.dispose(!1, !0);
    }
    return this._would_delete_block;
  };
  e.prototype.pixels_to_workspace_units = function (e) {
    var t = i.vec2.create();
    if (void 0 == this._workspace) {
      console.error("Block dragger has been disposed.");
      return i.vec2.create();
    }
    var n = this._workspace.get_scale();
    i.vec2.scale(t, e, 1 / n);
    return t;
  };
  e.prototype.dispose = function () {
    this._dragging_block = void 0;
    this._workspace = void 0;
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.events)], e.prototype, "events", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.block_animations)], e.prototype, "block_animations", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.tooltip)], e.prototype, "tooltip", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.DragAreaChangeEvent)], e.prototype, "drag_area_change_event_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.EndDragEvent)], e.prototype, "end_drag_event_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.MoveEvent)], e.prototype, "move_event_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.StartDragEvent)], e.prototype, "start_drag_event_factory", void 0);
  return e;
}();
exports.ElementDragger = s;