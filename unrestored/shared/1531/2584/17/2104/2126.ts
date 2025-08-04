"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Gesture = void 0;
var r = require("tslib");
var i = require("inversify");
var o = require("@kitten-team/gl-matrix");
var a = require("../../125/195/index");
var s = require("../../4/127");
var c = require("../../1001/213/index");
var u = require("../497/1105");
var l = require("../497/841");
var f = require("../../125/474");
var d = function () {
  function e(e) {
    this.mouse_down_xy = o.vec2.create();
    this.current_drag_delta_xy = o.vec2.create();
    this.start_field = void 0;
    this.start_block = void 0;
    this.target_block = void 0;
    this.start_workspace = void 0;
    this.has_exceeded_drag_radius = !1;
    this.is_dragging_workspace = !1;
    this.is_dragging_block = !1;
    this.is_mutation_click = !1;
    this.on_move_wrapper = void 0;
    this.on_up_wrapper = void 0;
    this.bubble_dragger = void 0;
    this.block_dragger = void 0;
    this.workspace_dragger = void 0;
    this.flyout_ = void 0;
    this.called_update_is_dragging = !1;
    this.has_started_ = !1;
    this.is_ending = !1;
    this.should_duplicate_on_drag = !1;
    this.body_width = document.body.clientWidth;
    this.body_height = document.body.clientHeight;
    this.PADDING = 20;
    this.creator_workspace_ = e.workspace;
    this.most_recent_event = e.event;
  }
  e.prototype.dispose = function () {
    this.touch_manager.clear_touch_identifier();
    this.creator_workspace_.clear_gesture();
    if (this.on_move_wrapper) {
      this.events.unbind_event(this.on_move_wrapper);
    }
    if (this.on_up_wrapper) {
      this.events.unbind_event(this.on_up_wrapper);
    }
    this.start_field = void 0;
    this.start_block = void 0;
    this.target_block = void 0;
    this.start_workspace = void 0;
    this.flyout_ = void 0;
    this.block_dragger = void 0;
    this.workspace_dragger = void 0;
  };
  e.prototype.update_from_event = function (e) {
    var t = o.vec2.fromValues(e.clientX, e.clientY);
    if (this.update_drag_delta(t)) {
      this.update_is_dragging();
      this.touch_manager.long_stop();
    }
    this.most_recent_event = e;
  };
  e.prototype.update_drag_delta = function (e) {
    o.vec2.sub(this.current_drag_delta_xy, e, this.mouse_down_xy);
    if (!this.has_exceeded_drag_radius) {
      var t = o.vec2.sqrLen(this.current_drag_delta_xy);
      var n = this.flyout_ ? this.theme.blink_params.FLYOUT_DRAG_RADIUS : this.theme.blink_params.DRAG_RADIUS;
      this.has_exceeded_drag_radius = t > n;
      return this.has_exceeded_drag_radius;
    }
    return !1;
  };
  e.prototype.update_is_dragging_from_flyout = function () {
    return !(!this.target_block || this.target_block.disabled || !(0, c.is_block_svg)(this.target_block)) && !!(this.flyout_ && !this.flyout_.is_scrollable() || this.flyout_ && this.flyout_.is_drag_toward_workspace(this.current_drag_delta_xy)) && (this.start_workspace = this.flyout_.targetWorkspace_, void 0 != this.start_workspace && this.start_workspace.update_screen_calculations_if_scrolled(), this.events.get_group() || this.events.set_group(!0), this.start_block = void 0, this.target_block = this.flyout_.create_block(this.target_block, !1, o.vec2.fromValues(this.mouse_down_xy[0], this.mouse_down_xy[1])), void 0 != this.target_block && (this.target_block.select(), (0, c.is_block_svg)(this.target_block) && this.target_block.set_connections_hidden(!1)), !0);
  };
  e.prototype.update_is_dragging_block = function () {
    return !!this.target_block && (this.flyout_ ? this.is_dragging_block = this.update_is_dragging_from_flyout() : (this.target_block.is_movable() || this.should_duplicate_on_drag) && (this.is_dragging_block = !0), !!this.is_dragging_block && (this.start_dragging_block(), !0));
  };
  e.prototype.update_is_dragging_workspace = function () {
    if (this.flyout_ ? this.flyout_.is_scrollable() : this.start_workspace && this.start_workspace.is_draggable()) {
      if (this.flyout_) {
        this.workspace_dragger = this.workspace_dragger_factory(this.flyout_);
      } else {
        if (void 0 == this.start_workspace) {
          return;
        }
        this.workspace_dragger = this.workspace_dragger_factory(this.start_workspace);
      }
      this.is_dragging_workspace = !0;
      this.workspace_dragger.start_drag();
    }
  };
  e.prototype.update_is_dragging = function () {
    if (!this.called_update_is_dragging) {
      this.called_update_is_dragging = !0;
      if (!this.update_is_dragging_block()) {
        this.update_is_dragging_workspace();
      }
    }
  };
  e.prototype.update_is_mutation_click = function (e) {
    this.is_mutation_click = e;
  };
  e.prototype.start_dragging_block = function () {
    var e = this.events.get_group();
    this.events.set_group(e || !0);
    if (this.should_duplicate_on_drag) {
      this.duplicate_on_drag();
    }
    if (void 0 != this.target_block && void 0 != this.start_workspace) {
      this.block_dragger = this.element_dragger_factory({
        target: this.target_block,
        workspace: this.start_workspace
      });
      this.block_dragger.start_block_drag(this.current_drag_delta_xy);
      this.block_dragger.drag_block(this.most_recent_event, this.current_drag_delta_xy);
    }
  };
  e.prototype.do_start = function (e) {
    if ((0, u.is_target_input)(e)) {
      this.cancel();
    } else {
      if (void 0 != this.start_workspace) {
        if (this.start_workspace.is_gestures_enabled() || this.start_block) {
          this.has_started_ = !0;
          this.start_workspace.update_screen_calculations_if_scrolled();
          this.start_workspace.mark_focused();
          this.most_recent_event = e;
          this.utils.hide_chaff(!!this.flyout_);
          if (this.target_block && !this.is_mutation_click) {
            this.target_block.select();
          }
          if ((0, u.is_right_button)(e)) {
            this.handle_right_click(e);
          } else {
            if ((0, l.case_insensitive_equals)(e.type, "touchstart")) {
              this.touch_manager.long_start(e, this);
            }
            this.mouse_down_xy = o.vec2.fromValues(e.clientX, e.clientY);
            this.bind_mouse_events(e);
          }
        } else {
          this.touch_manager.clear_touch_identifier();
        }
      }
    }
  };
  e.prototype.bind_mouse_events = function (e) {
    this.on_move_wrapper = this.events.bind_event_with_checks(document, "mousemove", void 0, this.handle_move.bind(this));
    this.on_up_wrapper = this.events.bind_event_with_checks(document, "mouseup", void 0, this.handle_up.bind(this));
    e.preventDefault();
    e.stopPropagation();
  };
  e.prototype.handle_move = function (e) {
    if (f.is.mobile()) {
      var t = e.clientX;
      var n = e.clientY;
      if (t <= this.PADDING || t >= this.body_width - this.PADDING || n <= this.PADDING || n >= this.body_height - this.PADDING) {
        return void this.handle_up(e);
      }
    }
    this.update_from_event(e);
    if (this.is_dragging_workspace) {
      if (void 0 == this.workspace_dragger) {
        return void console.error("Trying to drag workspace without dragger.");
      }
      this.workspace_dragger.drag(this.current_drag_delta_xy);
    } else if (this.is_dragging_block) {
      if (void 0 == this.block_dragger) {
        return void console.error("Trying to drag block without dragger.");
      }
      this.block_dragger.drag_block(this.most_recent_event, this.current_drag_delta_xy);
    }
    e.preventDefault();
    e.stopPropagation();
  };
  e.prototype.handle_up = function (e) {
    if (!this.is_ending) {
      this.is_ending = !0;
      try {
        this.update_from_event(e);
        this.touch_manager.long_stop();
        if (this.is_dragging_block) {
          if (void 0 == this.block_dragger) {
            return void console.error("Trying to drag block without dragger.");
          }
          this.is_dragging_block = !1;
          this.block_dragger.end_block_drag(e, this.current_drag_delta_xy);
        } else if (this.is_dragging_workspace) {
          if (void 0 == this.workspace_dragger) {
            return void console.error("Trying to drag workspace without dragger.");
          }
          this.is_dragging_workspace = !1;
          this.workspace_dragger.end_drag(this.current_drag_delta_xy);
        } else if (this.is_field_click()) {
          this.do_field_click(e);
        } else {
          if (this.is_block_click() && !this.is_mutation_click) {
            this.do_block_click();
          } else {
            if (this.is_workspace_click()) {
              this.do_workspace_click();
            }
          }
        }
      } catch (e) {
        console.error("Occurs error when handle mouseup: ", e);
      } finally {
        e.preventDefault();
        e.stopPropagation();
        this.dispose();
      }
    }
  };
  e.prototype.cancel = function () {
    if (!this.is_ending) {
      this.is_ending = !0;
      try {
        this.touch_manager.long_stop();
        if (this.is_dragging_block) {
          if (void 0 == this.block_dragger) {
            return void console.error("Trying to drag block without dragger.");
          }
          this.block_dragger.end_block_drag(this.most_recent_event, this.current_drag_delta_xy);
        } else if (this.is_dragging_workspace) {
          if (void 0 == this.workspace_dragger) {
            return void console.error("Trying to drag workspace without dragger.");
          }
          this.workspace_dragger.end_drag(this.current_drag_delta_xy);
        }
      } catch (e) {
        console.error("Occurs error when cancel gesture: ", e);
      } finally {
        this.dispose();
      }
    }
  };
  e.prototype.handle_right_click = function (e) {
    if (this.target_block) {
      this.bring_block_to_front();
      this.utils.hide_chaff(!!this.flyout_);
      this.target_block.show_context_menu(e);
    } else {
      if (this.start_workspace && !this.flyout_) {
        this.utils.hide_chaff();
        this.start_workspace.show_context_menu(e);
      }
    }
    e.preventDefault();
    e.stopPropagation();
    this.dispose();
  };
  e.prototype.handle_ws_start = function (e, t) {
    if (!this.has_started_) {
      this.set_start_workspace(t);
      this.most_recent_event = e;
      this.do_start(e);
    }
  };
  e.prototype.handle_flyout_start = function (e, t) {
    if (!this.has_started_) {
      var n = t.get_workspace();
      if (void 0 != n) {
        this.set_start_flyout(t);
        this.handle_ws_start(e, n);
      }
    }
  };
  e.prototype.handle_block_start = function (e, t) {
    if (!this.has_started_) {
      this.set_start_block(t);
      this.most_recent_event = e;
    }
  };
  e.prototype.do_field_click = function (e) {
    if (void 0 != this.start_field) {
      if (this.events.is_enabled()) {
        this.events.fire(this.ui_event_factory({
          type: a.UIEventType.CLICK,
          workspace_id: this.start_field.source_block.workspace.id
        }));
      }
      this.start_field.focus(!0);
      this.start_field.show_editor(e);
      this.bring_block_to_front();
    } else {
      console.error("Click event without start field.");
    }
  };
  e.prototype.do_block_click = function () {
    if ((0, c.is_block_svg)(this.start_block) && (0, c.is_block_svg)(this.target_block)) {
      var e = this.events.get_group();
      if (this.flyout_ && this.flyout_.is_auto_close()) {
        if (void 0 != this.target_block && !this.target_block.disabled) {
          this.events.set_group(e || !0);
          var t = this.flyout_.create_block(this.target_block, !0, o.vec2.fromValues(this.mouse_down_xy[0], this.mouse_down_xy[1]));
          t.select();
          t.schedule_snap_and_bump();
          t.workspace.set_resizes_enabled(!0);
        }
      } else if (!this.widget_div.is_visible() && this.events.is_enabled()) {
        var n = this.start_block.id;
        var r = this.start_block.workspace.id;
        var i = this.start_block.get_root_block().id;
        this.events.fire(this.ui_event_factory({
          type: a.UIEventType.CLICK,
          workspace_id: r,
          block_id: n
        }));
        this.events.fire(this.ui_event_factory({
          type: a.UIEventType.STACK_CLICK,
          workspace_id: r,
          block_id: i
        }));
      }
      this.bring_block_to_front();
      this.events.set_group(e);
    }
  };
  e.prototype.do_workspace_click = function () {
    if (this.start_workspace) {
      if (this.runtime_data.selected) {
        this.runtime_data.selected.unselect();
      }
      if (this.events.is_enabled()) {
        this.events.fire(this.ui_event_factory({
          type: a.UIEventType.STACK_CLICK,
          workspace_id: this.start_workspace.id
        }));
      }
    }
  };
  e.prototype.bring_block_to_front = function () {
    if (this.target_block && this.target_block.workspace && !this.flyout_) {
      this.target_block.bring_to_front();
    }
  };
  e.prototype.set_start_field = function (e) {
    if (!this.start_field) {
      this.start_field = e;
    }
  };
  e.prototype.set_start_block = function (e) {
    var t;
    if (!this.start_block) {
      if ((0, c.is_block_svg)(e) && "param_color" === (null === (t = e.parent_block) || void 0 === t ? void 0 : t.element_type) && e.is_shadow()) {
        e = e.parent_block;
      }
      this.start_block = e;
      if ((0, c.is_block_svg)(e) && e.is_in_flyout && e != e.get_root_block()) {
        this.should_duplicate_on_drag = !1;
        this.set_target_block(e.get_root_block());
      } else {
        if ((0, c.is_block_svg)(e) && e.is_shadow() && ("param" === e.element_type || "param_color" === e.element_type)) {
          this.should_duplicate_on_drag = !0;
        }
        this.set_target_block(e);
      }
    }
  };
  e.prototype.set_target_block = function (e) {
    if ((0, c.is_block_svg)(e) && e.is_shadow() && !this.should_duplicate_on_drag) {
      this.set_target_block(e.get_parent());
    } else {
      this.target_block = e;
    }
  };
  e.prototype.set_start_workspace = function (e) {
    if (!this.start_workspace) {
      this.start_workspace = e;
    }
  };
  e.prototype.set_start_flyout = function (e) {
    if (!this.flyout_) {
      this.flyout_ = e;
    }
  };
  e.prototype.is_start_from_flyout = function () {
    return !!this.flyout_;
  };
  e.prototype.is_block_click = function () {
    return !!this.start_block && !this.has_exceeded_drag_radius && !this.is_field_click();
  };
  e.prototype.is_field_click = function () {
    return !!this.start_field && this.start_field.is_currently_editable() && !this.has_exceeded_drag_radius;
  };
  e.prototype.is_workspace_click = function () {
    return !this.start_block && !this.start_field && !this.has_exceeded_drag_radius;
  };
  e.prototype.is_dragging = function () {
    return this.is_dragging_workspace || this.is_dragging_block;
  };
  e.prototype.has_started = function () {
    return this.has_started_;
  };
  e.prototype.force_start_block_drag = function (e, t) {
    this.handle_block_start(e, t);
    this.handle_ws_start(e, t.get_workspace());
    this.is_dragging_block = !0;
    this.has_exceeded_drag_radius = !0;
    this.start_dragging_block();
  };
  e.prototype.duplicate_on_drag = function () {
    var e = void 0;
    if (void 0 != this.start_workspace) {
      if ((0, c.is_block_svg)(this.target_block)) {
        this.events.disable();
        try {
          this.start_workspace.set_resizes_enabled(!1);
          var t = this.xml.block_to_dom(this.target_block);
          if ("color_picker" === t.getAttribute("type")) {
            (e = this.xml.dom_to_block(t, this.start_workspace)).set_connections_hidden(!1);
          } else {
            e = this.xml.dom_to_block_headless(t, this.start_workspace);
          }
          e.init_svg();
          e.render();
          var n = this.target_block.get_relative_to_surface_xy();
          e.move_by(n);
          e.set_shadow(!1);
        } finally {
          this.events.enable();
        }
        if (e) {
          if (this.events.is_enabled()) {
            this.events.fire(this.create_event_factory({
              block: e
            }));
          }
          e.select();
          this.target_block = e;
        } else {
          console.error("Something went wrong while duplicating a block.");
        }
      } else {
        console.error("Try to drag without target block.");
      }
    } else {
      console.error("Try to drag without start workspace.");
    }
  };
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.events)], e.prototype, "events", void 0);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.runtime_data)], e.prototype, "runtime_data", void 0);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.touch_manager)], e.prototype, "touch_manager", void 0);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.utils)], e.prototype, "utils", void 0);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.widget_div)], e.prototype, "widget_div", void 0);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.xml)], e.prototype, "xml", void 0);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.theme)], e.prototype, "theme", void 0);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.CreateEvent)], e.prototype, "create_event_factory", void 0);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.UIEvent)], e.prototype, "ui_event_factory", void 0);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.WorkspaceElementDragger)], e.prototype, "element_dragger_factory", void 0);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.WorkspaceDragger)], e.prototype, "workspace_dragger_factory", void 0);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.Gesture = d;