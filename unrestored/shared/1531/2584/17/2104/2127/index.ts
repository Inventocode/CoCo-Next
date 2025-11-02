/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2127
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.WorkspaceCommentDragger = undefined
var r = require("tslib")
var i = require("inversify")
var o = require("@kitten-team/gl-matrix")
var a = require("../../../1001/213/index")
var s = function (e) {
  function t(t) {
    var n = e.call(this, t.target, t.workspace) || this
    n.type = "comment_dragger"
    n.start_relative_position = t.target.get_relative_position()
    return n
  }
  (0, r.__extends)(t, e)
  t.prototype.drag_related = function (e) {
    if ((0, a.is_workspace_comment)(this._dragging_block)) {
      var t = o.vec2.add(o.vec2.create(), this.start_relative_position, e)
      this._dragging_block.set_relative_position(t)
      this._dragging_block.draw_line()
    }
  }
  t.prototype.end_block_drag = function (e, t) {
    if (undefined == this._workspace || undefined == this._dragging_block) {
      throw new Error("Comment dragger has been disposed.")
    }
    this.drag_block(e, t)
    this.block_animations.disconnect_ui_effect_stop(this._dragging_block)
    var n = undefined
    if (this.events.is_enabled()) {
      var this$_workspace$current_gesture_ = this._workspace.current_gesture_
      n = this.end_drag_event_factory({
        block: this._dragging_block,
        is_outside: this._was_outside,
        mouse_position: o.vec2.fromValues(e.clientX, e.clientY),
        is_from_flyout: (null === this$_workspace$current_gesture_ || undefined === this$_workspace$current_gesture_ ? undefined : this$_workspace$current_gesture_.is_start_from_flyout()) || false,
        redo_stack_before_drag: this.redo_stack_before_drag
      })
    }
    this._dragging_block.set_mouse_through_style(false)
    var i = this.pixels_to_workspace_units(t)
    var a = o.vec2.add(o.vec2.create(), this._start_xy, i)
    this._dragging_block.move_off_drag_surface(a)
    this._dragging_block.bring_to_front()
    if (!this.maybe_delete_block() && (this._dragging_block.set_dragging(false), this.events.is_enabled())) {
      var s = this.move_event_factory({
        block: this._dragging_block
      })
      s.set_old_coord(this.start_relative_position)
      s.record_new()
      this.events.fire(s)
    }
    this._workspace.set_resizes_enabled(true)
    if (this._dragging_block.is_deletable()) {
      var c = this._workspace.get_toolbox()
      if (undefined != c) {
        c.remove_delete_style()
      }
    }
    this.redo_stack_before_drag = []
    this.undo_stack_before_drag = []
    this.dispose()
    if (n) {
      this.events.fire(n)
    }
    this.events.set_group(false)
  }
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require("./1317").ElementDragger)
exports.WorkspaceCommentDragger = s
