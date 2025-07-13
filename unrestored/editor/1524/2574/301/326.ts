"use strict";

import * as r from "../1000/93";
import * as i from "../1000/134/index";
import * as o from "../4/127";
import * as a from "../125/195/index";
import * as s from "../125/534";
import * as c from "../125/294";
import * as u from "../125/index";
import * as l from "../17/497/index";
var f = function (e) {
  function t(t) {
    var n = e.call(this, {
      text: t.opt_value && !isNaN(t.opt_value) ? String(t.opt_value) : "0",
      opt_validator: t.opt_validator
    }) || this;
    n.controller_option = void 0;
    n.controller = void 0;
    n.min_ = -1 / 0;
    n.max_ = 1 / 0;
    n.precision_ = 0;
    n.should_show_quote = !1;
    n.field_type = "FieldNumber";
    n.set_constraints(t.opt_min, t.opt_max, t.opt_precision);
    n.allow_text = void 0;
    n.controller_option = t.opt_controller || void 0;
    if (t.opt_controller) {
      n.set_controller_option(t.opt_controller);
    }
    return n;
  }
  var n;
  (0, r.__extends)(t, e);
  n = t;
  t.prototype.show_input_controller = function (e) {};
  t.prototype.hide_input_controller = function () {};
  t.prototype.init = function () {
    if (!this.field_group && this.source_block) {
      this.update_allow_text();
      this.field_group = (0, u.create_svg_element)("g", {});
      if (!this.visible_) {
        this.field_group.style.display = "none";
      }
      if (!this.source_block.is_shadow()) {
        this.border_rect = (0, u.create_svg_element)("rect", {
          rx: 4,
          ry: 4
        }, this.field_group);
        if (this.field_group) {
          this.field_group.classList.add("blocklyFieldTextInput");
        }
      }
      this.input_element = (0, u.create_svg_element)("g", {
        class: "blocklyInputElement"
      }, this.field_group);
      this.text_element = (0, u.create_svg_element)("text", {
        class: "blocklyText",
        "font-size": this.theme.font.SIZE,
        "dominant-baseline": "central"
      }, this.input_element);
      this.update_editable();
      this.source_block.get_svg_root().appendChild(this.field_group);
      this.bind_field_click_event();
      this.update_input();
      this.render_();
    }
  };
  t.prototype.set_constraints = function (e, t, n) {
    n = parseFloat(n);
    this.precision_ = isNaN(n) ? 0 : n;
    e = parseFloat(e);
    this.min_ = isNaN(e) ? -1 / 0 : e;
    t = parseFloat(t);
    this.max_ = isNaN(t) ? 1 / 0 : t;
    this.set_value(this.get_validated_value(this.get_value()));
  };
  t.prototype.get_validated_value = function (e) {
    if (!(0, c.is_valid_number)(e)) {
      return this.allow_text ? e : "";
    }
    var t = parseFloat(e);
    if (this.precision_ && (t = Math.round(t / Number(this.precision_)) * Number(this.precision_)), !this.exceptions || -1 === this.exceptions.indexOf(t)) {
      if (void 0 != this.mod_ && t !== 1 / 0 && t !== -1 / 0) {
        var n = Number(this.max_);
        var r = Number(this.min_);
        var i = n - r;
        t %= i;
        if (this.mod_) {
          if (t <= r) {
            t += i;
          } else {
            if (t > n) {
              t -= i;
            }
          }
        } else {
          if (t < r) {
            t += i;
          } else {
            if (t >= n) {
              t -= i;
            }
          }
        }
      }
      t = (0, c.clamp)(t, this.min_, this.max_);
    }
    return String(t);
  };
  t.prototype.set_allow_text = function (e) {
    if ("undefined" === typeof this.allow_text && void 0 !== e) {
      this.allow_text = e;
    }
  };
  t.prototype.update_allow_text = function () {
    var e;
    var t;
    if ("undefined" === typeof this.allow_text && (null === (e = this.source_block) || void 0 === e ? void 0 : e.parent_block)) {
      var r = !1;
      var i = this.source_block.parent_block;
      var o = null === (t = i.get_input_with_block(this.source_block)) || void 0 === t ? void 0 : t.name;
      if (n.WHITE_LIST_BLOCKS.includes(i.type) || Object.keys(n.WHITE_LIST_SPECIAL).includes(i.type) && n.WHITE_LIST_SPECIAL[i.type] === o) {
        r = !0;
      }
      this.set_allow_text(r);
    }
  };
  t.prototype.set_mod = function (e) {
    this.mod_ = e ? "true" === e : void 0;
  };
  t.prototype.set_exceptions = function (e) {
    this.exceptions = e || void 0;
  };
  t.prototype.widget_dispose = function () {
    var t = this;
    return function () {
      if (t.html_input) {
        var n = t.get_validated_value(t.html_input.value) || t.html_input.defaultValue;
        e.prototype.widget_dispose.call(t, n)();
        if (t.controller) {
          t.controller.hide();
        }
      }
    };
  };
  t.prototype.reset_text_element = function () {
    var e = this;
    if (this.input_element && this.text_element) {
      (0, u.remove_children)(this.input_element);
      var t = function () {
        if (l.is.safari() || l.is.mobile()) {
          e.text_element = (0, u.create_svg_element)("text", {
            class: "blocklyText",
            dy: ".4em",
            "font-size": e.theme.font.SIZE
          }, e.input_element);
        } else {
          e.text_element = (0, u.create_svg_element)("text", {
            class: "blocklyText",
            "dominant-baseline": "central",
            "font-size": e.theme.font.SIZE
          }, e.input_element);
        }
      };
      if (this.should_show_quote) {
        (0, u.create_svg_element)("path", {
          d: s.ICON.LEFT_QUOTA,
          transform: "translate(" + n.LEFT_QUOTE_X + ", " + n.QUOTE_Y + ")",
          class: "blocklyQuote"
        }, this.input_element);
        t();
        this.quote_right = (0, u.create_svg_element)("path", {
          d: s.ICON.RIGHT_QUOTA,
          class: "blocklyQuote"
        }, this.input_element);
      } else {
        delete this.quote_right;
        t();
      }
    }
  };
  t.prototype.add_quote_input = function () {
    var e;
    if (this.visible_ && this.text_element) {
      if (!this.quote_right) {
        this.reset_text_element();
      }
      (0, u.remove_children)(this.text_element);
      var t = document.createTextNode(this.get_display_text());
      this.text_element.appendChild(t);
      this.update_width();
      var r = n.LEFT_QUOTE_X + n.QUOTE_WIDTH + this.size_.width;
      if (!(null === (e = this.quote_right) || void 0 === e)) {
        e.setAttribute("transform", "translate(" + r + ", " + n.QUOTE_Y + ")");
      }
    } else {
      this.size_.width = 0;
    }
  };
  t.prototype.remove_quote_input = function () {
    if (this.quote_right) {
      this.reset_text_element();
    }
  };
  t.prototype.update_input = function () {
    this.should_show_quote = !!this.allow_text && !(0, c.is_valid_number)(this.get_display_text());
    if (this.should_show_quote) {
      this.add_quote_input();
    } else {
      this.remove_quote_input();
    }
  };
  t.prototype.set_text = function (e) {
    if (null !== e && (e = String(e)) !== this.text_) {
      this.text_ = e;
      this.update_input();
      this.force_rerender();
      if (this.controller) {
        this.controller.update_value(Number(e));
      }
    }
  };
  t.prototype.set_controller_option = function (e) {
    switch (this.controller_option = e, e.type) {
      case a.ControllerType.SLIDER:
        this.controller = this.slider_controller;
        break;
      case a.ControllerType.ANGLE_SCALE:
        this.controller = this.angle_controller;
        break;
      case a.ControllerType.COLOR_PICKER:
        this.controller = this.color_controller;
    }
  };
  t.prototype.get_controller_option = function () {
    return this.controller_option;
  };
  t.prototype.show_editor = function (e, t) {
    var n = this;
    if (!this.source_block) {
      throw new ReferenceError("source_block is undefined");
    }
    this.workspace_ = this.source_block.get_workspace();
    if (this.widget_div.show(this, function () {
      n.focus(!1);
      if (n.runtime_data.editing === n) {
        n.focus(!1);
      }
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
    if (this.controller && this.controller_option) {
      this.controller.show(this, this.controller_option);
    }
    return this.html_input;
  };
  t.QUOTE_WIDTH = 10;
  t.LEFT_QUOTE_X = -10;
  t.QUOTE_Y = 0;
  t.WHITE_LIST_BLOCKS = ["math_arithmetic", "logic_compare", "variables_set", "change_variable", "cloud_variables_set", "change_cloud_variable", "lists_append", "lists_index_of", "lists_is_exist", "cloud_lists_append", "cloud_lists_index_of", "cloud_lists_is_exist", "procedures_2_callnoreturn", "procedures_2_callreturn", "procedures_2_return_value", "wood_block_set", "wood_block_get", "auto_player_set_feature"];
  t.WHITE_LIST_SPECIAL = {
    lists_insert_value: "VALUE",
    lists_replace: "VALUE",
    cloud_lists_insert_value: "VALUE",
    cloud_lists_replace: "VALUE"
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.slider_controller)], t.prototype, "slider_controller", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.angle_controller)], t.prototype, "angle_controller", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.color_controller)], t.prototype, "color_controller", void 0);
  return t = n = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./374").FieldTextInput);
export { f as FieldNumber };