"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.BlockDragger = void 0;
var r = require("tslib");
var i = require("inversify");
var o = require("@kitten-team/gl-matrix");
var a = require("../../4/127");
var s = function (e) {
  function t(t) {
    var n = e.call(this, t.target, t.workspace) || this;
    n.type = "block_dragger";
    var r = t.target;
    var i = t.workspace.get_options().connection_effect;
    n._dragged_connection_manager = i && "default" === i.type ? n.dragged_connection_manager : n.insertion_marker_manager;
    n._dragged_connection_manager.init(r);
    n._drag_icon_data = n.generate_icon_data(r);
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.generate_icon_data = function (e) {
    for (var t = [], n = e.get_descendants(), r = 0; r < n.length; r++) {
      for (var i = n[r].get_icons(), o = 0; o < i.length; o++) {
        var a = {
          location: i[o].get_location(),
          icon: i[o]
        };
        t.push(a);
      }
    }
    return t;
  };
  t.prototype.update_cursor_during_block_drag = function (e) {
    if (void 0 != this._workspace && void 0 != this._dragging_block) {
      if (this._dragging_block.is_deletable()) {
        this._would_delete_block = this._dragged_connection_manager.would_delete_block();
        this._dragging_block.set_delete_style(this._would_delete_block);
        this._dragging_block.set_mouse_through_style(e);
      }
    } else {
      console.error("Block dragger has been disposed.");
    }
  };
  t.prototype.start_block_drag = function (t) {
    if (void 0 == this._workspace || void 0 == this._dragging_block) {
      throw new Error("Block dragger has been disposed.");
    }
    this.redo_stack_before_drag = this._workspace.get_redo_stack().slice();
    this.undo_stack_before_drag = this._workspace.get_undo_stack().slice();
    if (!this.events.get_group()) {
      this.events.set_group(!0);
    }
    this.parent_before_drag = this._dragging_block.get_parent();
    if (this.parent_before_drag) {
      this._dragging_block.get_root_block().svg_group.removeAttribute("filter");
      this._dragging_block.unplug();
      this.block_animations.disconnect_ui_effect(this._dragging_block);
    }
    e.prototype.start_block_drag.call(this, t);
  };
  t.prototype.drag_block = function (t, n) {
    var r = e.prototype.drag_block.call(this, t, n);
    this._dragged_connection_manager.update(r, this._delete_area);
    return r;
  };
  t.prototype.end_block_drag = function (e, t) {
    if (void 0 == this._workspace || void 0 == this._dragging_block) {
      throw new Error("Block dragger has been disposed.");
    }
    this.drag_block(e, t);
    this._drag_icon_data = [];
    this.block_animations.disconnect_ui_effect_stop(this._dragging_block);
    this._dragging_block.set_mouse_through_style(!1);
    var n = this._workspace.get_toolbox();
    if (void 0 != n) {
      n.remove_delete_style();
    }
    var r = void 0;
    if (this.events.is_enabled()) {
      var i = this._workspace.current_gesture_;
      r = this.end_drag_event_factory({
        block: this._dragging_block,
        is_outside: this._was_outside,
        mouse_position: o.vec2.fromValues(e.clientX, e.clientY),
        is_from_flyout: (null === i || void 0 === i ? void 0 : i.is_start_from_flyout()) || !1,
        redo_stack_before_drag: this.redo_stack_before_drag
      });
    }
    var a = this.pixels_to_workspace_units(t);
    var s = o.vec2.add(o.vec2.create(), this._start_xy, a);
    this._dragging_block.move_off_drag_surface(s);
    this._dragging_block.bring_to_front();
    if (!this.maybe_delete_block()) {
      this._dragging_block.move_connections(a);
      this._dragging_block.set_dragging(!1);
      if (this.events.is_enabled()) {
        var c = this.move_event_factory({
          block: this._dragging_block
        });
        c.set_old_coord(this._start_xy);
        c.record_new();
        this.events.fire(c);
      }
      this._dragged_connection_manager.apply_connections();
      this._dragging_block.render();
      this._dragging_block.schedule_snap_and_bump();
    }
    this.redo_stack_before_drag = [];
    this.undo_stack_before_drag = [];
    this.parent_before_drag = void 0;
    var u = this._workspace;
    this.dispose();
    if (!(null === u || void 0 === u)) {
      u.set_resizes_enabled(!0);
    }
    this.events.fire(r);
    this.events.set_group(!1);
  };
  t.prototype.drag_related = function () {
    for (var e = 0; e < this._drag_icon_data.length; e++) {
      this._drag_icon_data[e].icon.reposition();
    }
  };
  t.prototype.dispose = function () {
    e.prototype.dispose.call(this);
    this._drag_icon_data.length = 0;
    if (this._dragged_connection_manager) {
      this._dragged_connection_manager.dispose();
    }
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.insertion_marker_manager)], t.prototype, "insertion_marker_manager", void 0);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.dragged_connection_manager)], t.prototype, "dragged_connection_manager", void 0);
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./2127/1317").ElementDragger);
exports.BlockDragger = s;