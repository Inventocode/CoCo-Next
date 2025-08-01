"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.FieldTextInput = void 0;
var r = require("../1001/93");
var i = require("../1001/134/index");
var o = require("../4/127");
var a = require("../125/294");
var s = require("../125/index");
var c = require("../125/474");
var u = function (e) {
  function t(t) {
    var n = e.call(this, t.text, t.opt_validator) || this;
    n.field_type = "FieldTextInput";
    n.spellcheck_ = !0;
    n.is_composition_inputting = !1;
    n.on_start_composition = function () {
      n.is_composition_inputting = !0;
    };
    n.on_end_composition = function () {
      n.is_composition_inputting = !1;
    };
    n.size_ = new a.Size(0, 30);
    return n;
  }
  var n;
  (0, r.__extends)(t, e);
  n = t;
  t.prototype.resize_editor = function () {
    var e;
    if (this.source_block && this.workspace_) {
      var t;
      var n;
      var r = this.widget_div.DIV;
      if (this.field_group && r) {
        if (this.source_block.is_shadow()) {
          t = {
            width: this.source_block.width,
            height: this.source_block.height
          };
          n = (0, s.get_page_offset)(this.source_block.svg_group);
        } else {
          t = (0, s.get_size_attr)(this.border_rect || this.field_group);
          n = (0, s.get_page_offset)(this.field_group);
        }
        r.style.width = t.width + "px";
        r.style.height = t.height + "px";
        r.style.left = n[0] + "px";
        r.style.top = n[1] + "px";
        r.style.transformOrigin = "top left";
        r.style.transform = "scale(" + (null !== (e = this.workspace_.get_scale()) && void 0 !== e ? e : 1) + ")";
      }
    }
  };
  t.prototype.show_editor = function (e, t) {
    var n = this;
    if (!this.source_block) {
      throw new ReferenceError("source_block is undefined");
    }
    this.workspace_ = this.source_block.get_workspace();
    if (this.widget_div.show(this, function () {
      n.focus(!1);
      if (t) {
        t();
      }
      n.widget_dispose()();
    }), void 0 == this.widget_div.DIV) {
      throw new Error("DIV is undefined");
    }
    this.html_input = this.widget_create();
    this.bind_input_events();
    this.html_input.focus();
    this.html_input.select();
    return this.html_input;
  };
  t.prototype.update_width = function () {
    if (this.text_element && this.source_block) {
      var e = this.utils.get_cached_width(this.text_element);
      if (!this.source_block.is_shadow()) {
        var t = e >= this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD ? this.theme.renderer.TEXT_PADDING_IN_FIELD : (this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD + 2 * this.theme.renderer.TEXT_PADDING_IN_FIELD - e) / 2;
        this.text_element.setAttribute("x", "" + t);
        e += 2 * t;
      }
      this.size_.width = e;
    }
  };
  t.prototype.update_height = function () {
    var t;
    e.prototype.update_height.call(this);
    if (!(null === (t = this.text_element) || void 0 === t)) {
      t.setAttribute("y", String(this.size_.height / 2));
    }
  };
  t.prototype.layout = function (e, t) {
    if (this.field_group && this.text_element) {
      e[0] += this.render_sep;
      this.field_group.setAttribute("transform", "translate(" + e[0] + ", " + (e[1] + (t - this.size_.height) / 2) + ")");
      e[0] += this.size_.width;
    }
  };
  t.prototype.validate_ = function () {
    var e = "true";
    if (this.html_input) {
      if (this.source_block) {
        e = this.call_validator(this.html_input.value);
      }
      if (void 0 == e) {
        (0, s.add_class)(this.html_input, "blocklyInvalidInput");
      } else {
        (0, s.remove_class)(this.html_input, "blocklyInvalidInput");
      }
    }
  };
  t.prototype.widget_dispose = function (e) {
    var t = this;
    return function () {
      var n;
      var r;
      if (t.source_block && t.workspace_ && t.html_input) {
        if (!e) {
          e = t.html_input.value;
        }
        var i;
        var o = t.events.get_group();
        t.events.set_group(o || !0);
        if (e !== t.html_input.defaultValue && t.events.is_enabled()) {
          i = t.change_event_factory("field", {
            block: t.source_block,
            old_value: t.html_input.defaultValue,
            new_value: e,
            name: t.name
          });
        }
        t.set_text(e);
        if (null === (n = t.source_block) || void 0 === n ? void 0 : n.rendered) {
          t.source_block.render();
        }
        if (t.html_input.onKeyDownWrapper_) {
          t.events.unbind_event(t.html_input.onKeyDownWrapper_);
        }
        if (t.html_input.onKeyUpWrapper_) {
          t.events.unbind_event(t.html_input.onKeyUpWrapper_);
        }
        if (t.html_input.onKeyPressWrapper_) {
          t.events.unbind_event(t.html_input.onKeyPressWrapper_);
        }
        if (t.html_input.onInputWrapper_) {
          t.events.unbind_event(t.html_input.onInputWrapper_ || []);
        }
        if (t.html_input.onWorkspaceChangeWrapper_) {
          if (!(null === (r = t.workspace_) || void 0 === r)) {
            r.remove_change_listener(t.html_input.onWorkspaceChangeWrapper_);
          }
        }
        if (t.html_input.on_composition_start_wrapper_) {
          t.events.unbind_event(t.html_input.on_composition_start_wrapper_);
        }
        if (t.html_input.on_composition_end_wrapper_) {
          t.events.unbind_event(t.html_input.on_composition_end_wrapper_);
        }
        delete t.html_input;
        var a = t.widget_div.DIV.style;
        a.width = "auto";
        a.height = "auto";
        a.fontSize = "";
        a.transition = "";
        a.boxShadow = "";
        a.borderRadius = "";
        if (i) {
          t.events.fire(i);
        }
        t.events.set_group(!1);
      }
    };
  };
  t.prototype.on_html_input_keydown = function (e) {
    var t;
    if (this.html_input) {
      if (13 == e.keyCode) {
        this.widget_div.hide();
      } else {
        if (27 == e.keyCode) {
          this.html_input.value = this.html_input.defaultValue;
          this.widget_div.hide();
        } else {
          if (9 == e.keyCode) {
            this.widget_div.hide();
            if (!(null === (t = this.source_block) || void 0 === t)) {
              t.tab(this, !e.shiftKey);
            }
            e.preventDefault();
          }
        }
      }
    }
  };
  t.prototype.on_html_input_change = function () {
    var e;
    if (this.html_input) {
      var t = this.html_input.value;
      if (t !== this.html_input.oldValue_) {
        this.html_input.oldValue_ = t;
        this.set_value(t);
        this.validate_();
      } else {
        if (c.is.webkit()) {
          if (!(null === (e = this.source_block) || void 0 === e)) {
            e.render();
          }
        }
      }
      this.resize_editor();
    }
  };
  t.prototype.widget_create = function (e, t) {
    var r;
    if (void 0 === e) {
      e = "input";
    }
    if (void 0 === t) {
      t = "blocklyHtmlInput";
    }
    var i = this.widget_div.DIV;
    if (!this.source_block || !this.workspace_ || !i) {
      throw new Error("Trying to create a field editor without a source block.");
    }
    var o = (0, s.create_dom)(e, t);
    if (o.setAttribute("spellcheck", String(this.spellcheck_)), o.style.fontSize = n.FONTSIZE + "pt", o.value = o.defaultValue = this.text_, o.oldValue_ = void 0, o.style.webkitAppearance = "none", i.appendChild(o), this.resize_editor(), this.validate_(), "dark" === this.source_block.workspace.options.theme) {
      return o;
    }
    if (this.source_block.is_shadow()) {
      i.style.borderRadius = n.FONTSIZE + "pt";
      o.style.borderRadius = n.FONTSIZE + "pt";
      var a = (null === (r = this.source_block.parent_block) || void 0 === r ? void 0 : r.get_colour()) || "#fff";
      o.style.boxShadow = "inset " + a + " 0px 0px 0px 2px";
    } else {
      i.style.borderRadius = "4px";
      o.style.borderRadius = "4px";
      a = this.source_block.get_colour() || "#fff";
      o.style.boxShadow = "inset " + a + " 0px 0px 0px 2px";
    }
    i.style.transition = "box-shadow 0.25s ease 0s";
    i.style.boxShadow = "rgba(255, 255, 255, 1) 0px 0px 0px 3px";
    return o;
  };
  t.prototype.bind_input_events = function () {
    var e;
    if (this.html_input) {
      this.html_input.onKeyDownWrapper_ = this.events.bind_event_with_checks(this.html_input, "keydown", this, this.on_html_input_keydown);
      this.html_input.onKeyUpWrapper_ = this.events.bind_event_with_checks(this.html_input, "keyup", this, this.on_html_input_change);
      this.html_input.onKeyPressWrapper_ = this.events.bind_event_with_checks(this.html_input, "keypress", this, this.on_html_input_change);
      this.html_input.onInputWrapper_ = this.events.bind_event(this.html_input, "input", this, this.on_html_input_change);
      this.html_input.onWorkspaceChangeWrapper_ = this.resize_editor.bind(this);
      if (!(null === (e = this.workspace_) || void 0 === e)) {
        e.add_change_listener(this.html_input.onWorkspaceChangeWrapper_);
      }
      this.html_input.on_composition_start_wrapper_ = this.events.bind_event_with_checks(this.html_input, "compositionstart", this, this.on_start_composition);
      this.html_input.on_composition_end_wrapper_ = this.events.bind_event_with_checks(this.html_input, "compositionend", this, this.on_end_composition);
    }
  };
  t.prototype.set_spell_check = function (e) {
    this.spellcheck_ = e;
  };
  t.prototype.set_value = function (t) {
    if (void 0 != t) {
      if (this.source_block) {
        var n = this.call_validator(t);
        if (void 0 != n) {
          t = n;
        }
      }
      e.prototype.set_value.call(this, t);
    }
  };
  t.prototype.init = function () {
    var t;
    e.prototype.init.call(this, !0);
    if (null === (t = this.source_block) || void 0 === t ? void 0 : t.is_shadow()) {
      this.source_block.get_svg_root().classList.add("blocklyShadowTextInput");
    }
    if (this.field_group) {
      this.field_group.classList.add("blocklyFieldTextInput");
    }
  };
  t.FONTSIZE = 12;
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.widget_div)], t.prototype, "widget_div", void 0);
  return t = n = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./500").Field);
exports.FieldTextInput = u;