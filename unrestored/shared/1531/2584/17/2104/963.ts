"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.WorkspaceElement = void 0;
var r = require("../../1001/93");
var i = require("../259");
var o = require("../../4/127");
var a = require("../../125/195/index");
var s = require("../../125/index");
var c = require("./1325/755");
var u = function () {
  function e(e) {
    this.id = "";
    this.width = 0;
    this.height = 0;
    this.rendered = !1;
    this.deletable_ = !0;
    this.movable_ = !0;
    this.editable_ = !0;
    this.disabled = !1;
    this.location_ = i.vec2.create();
    this.visibility_ = a.BlockVisibility.VISIBLE;
    this.event_initialized = !1;
    this.svg_group = (0, s.create_svg_element)("g", {});
    this.svg_group.translate_ = "";
    this.workspace = e;
    this.is_in_flyout = e.is_flyout;
    this.RTL = e.RTL;
  }
  e.prototype.get_svg_root = function () {
    return this.svg_group;
  };
  e.prototype.set_workspace = function (e) {
    this.workspace = e;
  };
  e.prototype.get_workspace = function () {
    return this.workspace;
  };
  e.prototype.set_deletable = function (e) {
    this.deletable_ = e;
  };
  e.prototype.is_deletable = function () {
    return this.deletable_ && !(this.workspace && this.workspace.get_options().readOnly);
  };
  e.prototype.set_delete_style = function (e) {
    if (void 0 != this.svg_group) {
      if (e) {
        (0, s.add_class_if_necessary)(this.svg_group, "blocklyDraggingDelete");
      } else {
        (0, s.remove_class_if_necessary)(this.svg_group, "blocklyDraggingDelete");
      }
    } else {
      console.warn("Cannot set delete style for block without init.");
    }
  };
  e.prototype.set_movable = function (e) {
    this.movable_ = e;
  };
  e.prototype.is_movable = function () {
    return this.movable_;
  };
  e.prototype.update_movable = function () {
    if (void 0 == this.svg_group) {
      throw new ReferenceError("Cannot update movable to block without svg group.");
    }
    var e = this.svg_group.classList;
    if (this.is_movable()) {
      e.add("blocklyDraggable");
    } else {
      e.remove("blocklyDraggable");
    }
  };
  e.prototype.set_editable = function (e) {
    this.editable_ = e;
  };
  e.prototype.is_editable = function () {
    return this.editable_;
  };
  e.prototype.set_disabled = function (e) {
    this.disabled = e;
  };
  e.prototype.get_location = function () {
    return this.location_;
  };
  e.prototype.move_by = function (e) {
    var t;
    if (this.events.is_enabled()) {
      t = this.move_event_factory({
        block: this
      });
    }
    var n = this.get_relative_to_surface_xy();
    this.translate(i.vec2.add(this.location_, n, e));
    if (t) {
      t.record_new();
    }
    this.workspace.resize_contents();
    if (t) {
      this.events.fire(t);
    }
  };
  e.prototype.dispose = function (e, t) {
    if (this.workspace) {
      var n = this.workspace;
      if (this.runtime_data.selected === this) {
        this.unselect();
        n.cancel_current_gesture();
      }
      if (this.context_menu.current_block == this) {
        this.context_menu.hide();
      }
      if (t && this.rendered) {
        this.block_animations.dispose_ui_effect(this);
      }
      this.rendered = !1;
      (0, s.remove_node)(this.svg_group);
      (0, s.remove_children)(this.svg_group);
      n.resize_contents();
    }
  };
  e.prototype.on_mouse_down = function (e) {
    if (this.workspace) {
      var t = this.workspace.get_gesture(e);
      if (t) {
        t.handle_block_start(e, this);
      }
    }
  };
  Object.defineProperty(e.prototype, "use_drag_surface", {
    get: function () {
      return !!this.workspace.get_block_drag_surface();
    },
    enumerable: !1,
    configurable: !0
  });
  e.prototype.get_relative_to_surface_xy = function () {
    var e;
    var t;
    var n = this.use_drag_surface ? null === (e = this.workspace.get_block_drag_surface()) || void 0 === e ? void 0 : e.get_group() : void 0;
    var r = this.svg_group;
    if (void 0 == r) {
      return i.vec2.create();
    }
    var o = i.vec2.create();
    do {
      if (i.vec2.add(o, o, this.utils.get_relative_xy(r)), this.use_drag_surface && (null === (t = this.workspace.get_block_drag_surface()) || void 0 === t ? void 0 : t.get_current_block()) == r) {
        var a = this.workspace.get_block_drag_surface().get_surface_translation();
        i.vec2.add(o, o, [a[0], a[1]]);
      }
      r = r.parentNode;
    } while (r && r != this.workspace.get_canvas() && r != n);
    return o;
  };
  e.prototype.translate = function (e) {
    var t = this.svg_group;
    if (void 0 == t) {
      throw new ReferenceError("Block should have svg root when translating.");
    }
    t.setAttribute("transform", "translate(" + e[0] + ", " + e[1] + ")");
    this.location_ = e;
  };
  e.prototype.move_off_drag_surface = function (e) {
    var t;
    if (this.svg_group && this.workspace.svg_block_canvas_) {
      var n = this.svg_group.getAttribute("filter");
      if (n && n.includes(c.FILTER.DRAG_SHADOW)) {
        this.svg_group.removeAttribute("filter");
      }
      if (this.use_drag_surface) {
        this.translate(e);
        if (!(null === (t = this.workspace.get_block_drag_surface()) || void 0 === t)) {
          t.clear_and_hide(this.workspace.svg_block_canvas_);
        }
      } else {
        this.location_ = e;
      }
    }
  };
  e.prototype.set_mouse_through_style = function (e) {
    if (void 0 != this.svg_group) {
      if (e) {
        (0, s.add_class_if_necessary)(this.svg_group, "blocklyDraggingMouseThrough");
      } else {
        (0, s.remove_class_if_necessary)(this.svg_group, "blocklyDraggingMouseThrough");
      }
    } else {
      console.warn("Cannot set the style for block without init.");
    }
  };
  e.prototype.set_dragging = function (e) {
    if (void 0 != this.svg_group) {
      var t = this.svg_group;
      if (e) {
        t.translate_ = "";
        t.skew_ = "";
        (0, s.add_class_if_necessary)(t, "blocklyDragging");
      } else {
        (0, s.remove_class_if_necessary)(t, "blocklyDragging");
      }
    } else {
      console.warn("Cannot set delete style for block without init.");
    }
  };
  e.prototype.move_during_drag = function (e) {
    var t;
    if (this.svg_group) {
      if (this.use_drag_surface) {
        if (!(null === (t = this.workspace.get_block_drag_surface()) || void 0 === t)) {
          t.translate_surface(e[0], e[1]);
        }
      } else {
        this.svg_group.translate_ = "translate(" + e[0] + ", " + e[1] + ")";
        this.svg_group.setAttribute("transform", this.svg_group.translate_ + this.svg_group.skew_);
      }
    }
  };
  e.prototype.bring_to_front = function () {
    var e = this.svg_group;
    if (void 0 != e && void 0 != e.parentNode) {
      e.parentNode.appendChild(e);
    }
  };
  e.prototype.select = function () {
    if (this.runtime_data.selected != this) {
      var e = void 0;
      if (this.runtime_data.selected) {
        e = this.runtime_data.selected.id;
        this.events.disable();
        try {
          this.runtime_data.selected.unselect();
        } catch (n) {
          console.error(n);
        } finally {
          this.events.enable();
        }
      }
      var t = this.ui_event_factory({
        type: a.UIEventType.SELECTED,
        workspace_id: this.workspace.id,
        old_value: e,
        new_value: this.id
      });
      this.runtime_data.selected = this;
      this.events.fire(t);
    }
  };
  e.prototype.unselect = function () {
    if (this.runtime_data.selected == this) {
      var e = this.ui_event_factory({
        type: a.UIEventType.SELECTED,
        workspace_id: this.workspace.id,
        old_value: this.id,
        new_value: void 0
      });
      this.runtime_data.selected = void 0;
      this.events.fire(e);
    }
  };
  e.prototype.move_to_drag_surface = function () {
    var e;
    if (this.svg_group) {
      if (this.use_drag_surface) {
        var t = this.get_relative_to_surface_xy();
        this.clear_transform_attributes();
        var n = this.workspace.get_block_drag_surface();
        if (!(null === n || void 0 === n)) {
          n.translate_surface(t[0], t[1]);
        }
        if (!(null === n || void 0 === n)) {
          n.set_blocks_and_show(this.svg_group);
        }
      } else if (!(null === (e = this.workspace.svg_block_canvas_) || void 0 === e)) {
        e.appendChild(this.svg_group);
      }
    }
  };
  e.prototype.clear_transform_attributes = function () {
    if (this.svg_group) {
      (0, s.remove_attribute)(this.svg_group, "transform");
    }
  };
  e.prototype.get_bounding_rectangle = function () {
    var e = this.get_relative_to_surface_xy();
    var t = this.get_height_width();
    return {
      topLeft: e,
      bottomRight: i.vec2.fromValues(e[0] + t.width, e[1] + t.height)
    };
  };
  e.prototype.get_height_width = function () {
    return {
      height: this.height,
      width: this.width
    };
  };
  e.prototype.get_visibility = function () {
    return this.visibility_;
  };
  e.prototype.init_events = function () {
    if (!this.workspace.get_options().readOnly && !this.event_initialized) {
      var e = this.get_svg_root();
      if (void 0 != e) {
        this.events.bind_event_with_checks(e, "mousedown", this, this.on_mouse_down);
        this.event_initialized = !0;
      }
    }
  };
  e.prototype.get_top_parent = function () {
    return this;
  };
  e.prototype.for_each_descendant_element = function (e) {
    e(this);
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.context_menu)], e.prototype, "context_menu", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.runtime_data)], e.prototype, "runtime_data", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.block_animations)], e.prototype, "block_animations", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.events)], e.prototype, "events", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.utils)], e.prototype, "utils", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.theme)], e.prototype, "theme", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.MoveEvent)], e.prototype, "move_event_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.CreateEvent)], e.prototype, "create_event_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.DeleteEvent)], e.prototype, "delete_event_factory", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.UIEvent)], e.prototype, "ui_event_factory", void 0);
  return e;
}();
exports.WorkspaceElement = u;