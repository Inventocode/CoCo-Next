"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Field = void 0;
var r = require("tslib");
var i = require("inversify");
var o = require("@kitten-team/gl-matrix");
var a = require("../4/127");
var s = require("../125/195/index");
var c = require("../125/294");
var u = require("../125/index");
var l = require("../17/497/index");
var f = function () {
  function e(e, t) {
    var n;
    if (void 0 === e) {
      e = "";
    }
    this.field_type = "Field";
    this.editable = !0;
    this.visible_ = !0;
    this.size_ = new c.Size(0, 0);
    this.text_ = "";
    this.name = void 0;
    this.margin_left = this.theme.renderer.SEP_SPACE_X;
    this.render_sep = this.margin_left;
    this.validator_ = void 0;
    this.set_value(e);
    this.validator_ = t;
    this.max_display_length = (null === (n = this.workspace_db.current) || void 0 === n ? void 0 : n.get_options().field_max_length) || 50;
    this.value_before_editing = void 0;
  }
  e.prototype.set_validator = function (e) {
    this.validator_ = e;
  };
  e.prototype.get_validator = function () {
    return this.validator_;
  };
  e.prototype.set_value = function (e, t) {
    var n;
    var r = this.get_value();
    if (r != e) {
      if (this.source_block && this.events.is_enabled() && this.runtime_data.editing !== this) {
        n = this.change_event_factory("field", {
          block: this.source_block,
          old_value: r,
          new_value: e,
          name: this.name
        });
      }
      this.set_text(e);
      if (n) {
        this.events.fire(n);
      }
    }
  };
  e.prototype.set_text = function (e) {
    if (e !== this.text_) {
      this.text_ = e;
      this.force_rerender();
    }
  };
  e.prototype.force_rerender = function () {
    this.size_.width = 0;
    if (this.source_block && this.source_block.rendered) {
      if (this.source_block.is_collapsed()) {
        this.source_block.update_collapsed(!0);
      } else {
        this.source_block.render();
      }
    }
  };
  e.prototype.get_text = function () {
    return this.text_;
  };
  e.prototype.get_value = function () {
    return this.text_;
  };
  e.prototype.init = function (e, t) {
    if (void 0 === e) {
      e = !0;
    }
    if (!this.field_group && this.source_block) {
      this.field_group = (0, u.create_svg_element)("g", {});
      if (!this.visible_) {
        this.field_group.style.display = "none";
      }
      if (!this.source_block.is_shadow()) {
        this.border_rect = (0, u.create_svg_element)("rect", {
          rx: 4,
          ry: 4
        }, this.field_group);
      }
      if (e) {
        this.input_element = (0, u.create_svg_element)("g", {
          class: "blocklyInputElement"
        }, this.field_group);
        if (l.is.safari() || l.is.mobile()) {
          this.text_element = (0, u.create_svg_element)("text", {
            class: "blocklyText",
            dy: ".4em",
            "font-size": this.theme.font.SIZE
          }, this.input_element);
        } else {
          this.text_element = (0, u.create_svg_element)("text", {
            class: "blocklyText",
            "dominant-baseline": "central",
            "font-size": this.theme.font.SIZE
          }, this.input_element);
        }
      }
      this.update_editable();
      if (void 0 != this.source_block) {
        var n = this.source_block.get_svg_root();
        if (void 0 == n) {
          throw new ReferenceError("Field should have svg root when init.");
        }
        n.appendChild(this.field_group);
      }
      this.bind_field_click_event();
      if (!t) {
        this.render_();
      }
    }
  };
  e.prototype.bind_field_click_event = function () {
    if (this.field_group && this.source_block) {
      var e = this.source_block.is_shadow() ? this.field_group.parentElement : this.field_group;
      if (e) {
        this.mouse_down_wrapper = this.events.bind_event_with_checks(e, "mouseup", this, this.on_mouse_down);
      } else {
        console.warn("Field has no parent element.");
      }
    }
  };
  e.prototype.get_scaled_bbox = function () {
    if (void 0 == this.source_block) {
      throw new ReferenceError("Field has not been insert to workspace.");
    }
    var e = this.source_block.get_workspace();
    if (void 0 == e) {
      throw new ReferenceError("Field's source block has not been insert to workspace.");
    }
    if (!this.field_group) {
      return new c.Size(0, 0);
    }
    var t = (0, u.get_size_attr)(this.border_rect || this.field_group);
    var n = e.get_scale();
    return new c.Size(t.width * n, t.height * n);
  };
  e.prototype.update_editable = function () {
    var e = this.field_group;
    if (this.editable && e) {
      if (!this.source_block || !this.field_group) {
        throw new Error("no necessary elements.");
      }
      if (this.source_block.is_editable()) {
        (0, u.add_class)(e, "blocklyEditable");
        (0, u.remove_class)(e, "blocklyNonEditable");
      } else {
        (0, u.add_class)(e, "blocklyNonEditable");
        (0, u.remove_class)(e, "blocklyEditable");
        this.field_group.style.cursor = "";
      }
    }
  };
  e.prototype.on_mouse_down = function (e) {
    if (this.source_block && this.source_block.get_workspace() && !this.source_block.is_in_flyout) {
      if (this.tooltip) {
        this.tooltip.hide();
      }
      var t = this.source_block.get_workspace().get_gesture(e);
      if (t) {
        t.set_start_field(this);
      }
    }
  };
  e.prototype.is_currently_editable = function () {
    return this.editable && !!this.source_block && this.source_block.is_editable();
  };
  e.prototype.get_size = function () {
    if (!this.size_.width) {
      this.render_();
    }
    return this.size_;
  };
  e.prototype.layout = function (e, t) {
    if (void 0 != this.field_group) {
      e[0] += this.render_sep;
      var n = e[0];
      var r = e[1] + (t - this.size_.height) / 2;
      var i = (0, u.get_translate)(this.field_group);
      if (!(i && i.x === n && i.y === r)) {
        this.field_group.setAttribute("transform", "translate(" + n + "," + r + ")");
      }
      e[0] += this.size_.width;
    }
  };
  e.prototype.dispose = function () {
    if (this.mouse_down_wrapper) {
      this.events.unbind_event(this.mouse_down_wrapper);
      this.mouse_down_wrapper = void 0;
    }
    delete this.source_block;
    if (void 0 != this.field_group) {
      (0, u.remove_node)(this.field_group);
      this.field_group = void 0;
    }
    if (this.input_element || this.text_element) {
      if (this.input_element) {
        (0, u.remove_node)(this.input_element);
      }
      if (this.text_element) {
        (0, u.remove_node)(this.text_element);
      }
      delete this.text_element;
      delete this.input_element;
    }
    this.validator_ = void 0;
  };
  e.prototype.render_ = function () {
    var e;
    var t;
    if (this.visible_) {
      if (this.image_element) {
        this.size_.width = parseFloat(this.image_element.getAttribute("width") || "0") || 0;
      } else {
        if (this.text_element) {
          (0, u.remove_children)(this.text_element);
          this.text_element.appendChild(document.createTextNode(this.get_display_text()));
          this.update_width();
          this.update_height();
          if (!(null === (e = this.border_rect) || void 0 === e)) {
            e.setAttribute("width", "" + this.size_.width);
          }
          if (!(null === (t = this.border_rect) || void 0 === t)) {
            t.setAttribute("height", "" + this.size_.height);
          }
        } else {
          this.size_.width = 0;
        }
      }
    } else {
      this.size_.width = 0;
    }
  };
  e.prototype.update_width = function () {
    if (this.text_element) {
      this.size_.width = this.utils.get_cached_width(this.text_element);
    }
  };
  e.prototype.update_height = function () {
    if (this.source_block) {
      this.size_.height = this.source_block.is_shadow() ? this.theme.renderer.SHADOW_FIELD_HEIGHT : this.theme.renderer.FIELD_HEIGHT;
    }
  };
  e.prototype.get_absolute_xy = function () {
    var e = this.border_rect || this.field_group;
    return e ? (0, u.get_page_offset)(e) : o.vec2.create();
  };
  e.prototype.get_svg_root = function () {
    return this.field_group;
  };
  e.prototype.show_editor = function (e, t) {
    throw new ReferenceError("show_editor 不能在 field 中调用，需要由子类实现");
  };
  e.prototype.set_visible = function (e) {
    if (this.visible_ != e) {
      this.visible_ = e;
      var t = this.get_svg_root();
      var n = this.input_element || this.text_element;
      if (t) {
        t.style.display = e ? "block" : "none";
        this.render_();
      }
      if (n) {
        n.style.display = e ? "block" : "none";
        this.render_();
      }
    }
  };
  e.prototype.get_display_text = function () {
    var e = this.text_;
    return e ? (e.length > this.max_display_length && (e = e.substring(0, this.max_display_length - 2) + "…"), e = e.replace(/\s/g, " ")) : " ";
  };
  e.prototype.call_validator = function (e) {
    if (void 0 != e) {
      if (!this.validator_) {
        return e;
      }
      var t = this.validator_.call(this, e);
      if (void 0 != t) {
        return t;
      }
    }
  };
  e.prototype.set_html_input_value = function (e) {
    if (this.html_input) {
      this.html_input.value = e;
    }
  };
  e.prototype.focus = function (e) {
    if (void 0 === e) {
      e = !0;
    }
    if (this.source_block) {
      var t = this.runtime_data.editing;
      if (e) {
        this.value_before_editing = this.get_value();
        this.runtime_data.editing = this;
      } else {
        this.value_before_editing = void 0;
        this.runtime_data.editing = void 0;
      }
      var n = this.runtime_data.editing;
      if (t && t !== n && this.events.is_enabled()) {
        if (t.value_before_editing) {
          t.value_before_editing = void 0;
        }
        this.events.fire(this.ui_event_factory({
          type: s.UIEventType.FIELD_FOCUS_CHANGE,
          workspace_id: this.source_block.workspace.id,
          old_value: this.name,
          new_value: void 0,
          block_id: this.source_block.id
        }));
      }
      if (n && n !== t && this.events.is_enabled()) {
        this.events.fire(this.ui_event_factory({
          type: s.UIEventType.FIELD_FOCUS_CHANGE,
          workspace_id: this.source_block.workspace.id,
          old_value: void 0,
          new_value: this.name,
          block_id: this.source_block.id
        }));
      }
    }
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.events)], e.prototype, "events", void 0);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.theme)], e.prototype, "theme", void 0);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.utils)], e.prototype, "utils", void 0);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.workspace_db)], e.prototype, "workspace_db", void 0);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.runtime_data)], e.prototype, "runtime_data", void 0);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.tooltip)], e.prototype, "tooltip", void 0);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.ChangeEvent)], e.prototype, "change_event_factory", void 0);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.UIEvent)], e.prototype, "ui_event_factory", void 0);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.Field = f;