"use strict";

import * as r from "../../1000/93";
import * as i from "../../1000/134/index";
import * as o from "../../125/index";
var a = function (e) {
  function t(t) {
    var n = e.call(this, t) || this;
    n.padding_y = 3;
    n.line_height = 22;
    n.padding_x = 0;
    n.field_type = "FieldMultilineInput";
    n.max_length = t.max_length;
    n.max_width = t.max_width;
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.get_display_text = function () {
    return this.text_ ? this.text_ : "\xa0";
  };
  t.prototype.render_ = function () {
    var e;
    var t;
    var n = this;
    if (this.visible_ && this.text_element && this.source_block) {
      (0, o.remove_children)(this.text_element);
      this.text_element.setAttribute("text-anchor", "start");
      this.text_element.setAttribute("dominant-baseline", "central");
      var r = this.get_display_text();
      this.utils.start_text_cache();
      var i = 0;
      var a = (0, o.create_svg_element)("tspan");
      this.text_element.appendChild(a);
      for (var s = 0, c = Array.from(r), u = 0; u < c.length; u++) {
        a.textContent = c.slice(s, u + 1).join("").replace(/\n/g, "").replace(/\s/g, "\xa0");
        var l = this.utils.get_cached_width(a);
        i = Math.max(i, l);
        var f = c[u];
        var h = c[u + 1];
        var d = void 0 !== this.max_width && l >= this.max_width && void 0 !== c[u + 1];
        if ("\n" === f || d) {
          a = (0, o.create_svg_element)("tspan");
          this.text_element.appendChild(a);
          if (d && "\n" === h) {
            u++;
          }
          s = u + 1;
        }
      }
      this.utils.stop_text_cache();
      this.padding_x = 0;
      if (!this.source_block.is_shadow()) {
        this.padding_x = i >= this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD ? this.theme.renderer.TEXT_PADDING_IN_FIELD : (this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD + 2 * this.theme.renderer.TEXT_PADDING_IN_FIELD - i) / 2;
      }
      var p = this.padding_y;
      Array.from(this.text_element.children).forEach(function (e) {
        e.setAttribute("x", "" + n.padding_x);
        e.setAttribute("y", "" + (p + n.line_height / 2));
        p += n.line_height;
      });
      p += this.padding_y;
      this.size_.height = p;
      this.size_.width = i + 2 * this.padding_x;
      if (!(null === (e = this.border_rect) || void 0 === e)) {
        e.setAttribute("width", String(this.size_.width));
      }
      if (!(null === (t = this.border_rect) || void 0 === t)) {
        t.setAttribute("height", String(this.size_.height));
      }
    } else {
      this.size_.width = 0;
    }
  };
  t.prototype.widget_create = function () {
    if (!this.source_block) {
      throw new Error("[FieldMultilineInput] Trying to create widget before init on a block. ");
    }
    this.html_input = e.prototype.widget_create.call(this, "textarea", "blocklyHtmlTextarea");
    this.html_input.style.lineHeight = this.line_height + "px";
    this.html_input.style.paddingTop = this.source_block.is_shadow() && this.source_block.height <= this.theme.renderer.MIN_HEIGHT_SHADOW ? (this.source_block.height - this.line_height) / 2 + "px" : this.padding_y + "px";
    if (this.source_block.is_shadow()) {
      this.html_input.style.paddingLeft = "23px";
      this.html_input.style.paddingRight = 23 * .8 + "px";
    } else {
      this.html_input.style.paddingLeft = this.padding_x + "px";
      this.html_input.style.paddingRight = .8 * this.padding_x + "px";
    }
    return this.html_input;
  };
  t.prototype.on_html_input_keydown = function (t) {
    if ("Enter" !== t.key) {
      e.prototype.on_html_input_keydown.call(this, t);
    }
  };
  t.prototype.on_html_input_change = function () {
    if (this.html_input && this.source_block) {
      if (!this.is_composition_inputting && this.max_length && this.html_input.value.length > this.max_length) {
        this.html_input.value = this.html_input.value.substr(0, this.max_length);
      }
      e.prototype.on_html_input_change.call(this);
      this.html_input.style.paddingTop = this.source_block.is_shadow() && this.source_block.height <= this.theme.renderer.MIN_HEIGHT_SHADOW ? (this.source_block.height - this.line_height) / 2 + "px" : this.padding_y + "px";
      if (!this.source_block.is_shadow()) {
        this.html_input.style.paddingLeft = this.padding_x + "px";
        this.html_input.style.paddingRight = this.padding_x + "px";
      }
    }
  };
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("../../301/374").FieldTextInput);
export { a as FieldMultilineInput };