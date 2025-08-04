"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.ColorController = void 0;
var r = require("tslib");
var i = require("inversify");
var o = require("../../../125/294");
var a = require("../../../1001/577");
var s = require("../../../125/195/index");
var c = require("../../../4/127");
var u = function (e) {
  function t() {
    var t = e.call(this) || this;
    t.color_handle_element = null;
    t.current_color_panel_element = null;
    t.color_review_element = null;
    t.color_strip_width = 182;
    t.min = 0;
    t.max = 100;
    return t;
  }
  (0, r.__extends)(t, e);
  t.prototype.show = function (e, t) {
    var n;
    var r = (null === (n = e.source_block) || void 0 === n ? void 0 : n.is_shadow()) ? e.source_block.parent_block : e.source_block;
    if (r) {
      this.owner = e;
      this.color_format = t.color_format;
      this.line = t.line;
      this.color = r.color_;
      if (this.color_format && this.line && this.color) {
        this.init();
        this.update_color();
        this.container.style.display = "block";
        this.position();
      }
    }
  };
  t.prototype.hide = function () {
    var e;
    this.container.style.display = "none";
    if (!(null === (e = this.color_element) || void 0 === e)) {
      e.remove();
    }
  };
  t.prototype.init = function () {
    var e = this;
    this.color_element = document.createElement("div");
    this.color_element.classList.add("blockly-controller", "color-controller");
    this.color_element.setAttribute("tabindex", "-1");
    var t = document.createElement("div");
    var n = "";
    var r = this.Blink.Msg;
    if (this.color_format === s.EColorControllerFormat.HSVA) {
      n = this.create_color_panel([["h", "H " + r.HUE], ["s", "S " + r.SATURATION], ["v", "V " + r.BRIGHTNESS], ["a", "A " + r.OPACITY]]);
    } else {
      if (this.color_format === s.EColorControllerFormat.RGBA) {
        n = this.create_color_panel([["r", "R " + r.RED], ["g", "G " + r.GREEN], ["b", "B " + r.BLUE], ["a", "A " + r.OPACITY]]);
      }
    }
    t.innerHTML = n;
    t.classList.add("color-panel");
    this.color_element.appendChild(t);
    t.childNodes.forEach(function (t) {
      var n;
      var r;
      var i;
      var o = t;
      e.set_color_panel_item_left(o);
      o.addEventListener("mousedown", e.bind_color_strip_event.bind(e, o));
      if (!(null === (n = o.querySelector(".color-handle")) || void 0 === n)) {
        n.addEventListener("mousedown", e.bind_color_event.bind(e));
      }
      if (!(null === (r = o.querySelector(".color-strip-panel")) || void 0 === r)) {
        r.addEventListener("mousedown", e.bind_color_event.bind(e));
      }
      o.querySelector(".color-strip-panel").addEventListener("mouseup", e.set_color_handle_position.bind(e));
      if ((null === (i = e.line) || void 0 === i ? void 0 : i.toLowerCase()) === o.getAttribute("data")) {
        e.color_handle_element = o.querySelector(".color-handle");
        e.current_color_panel_element = o.querySelector(".color-strip-panel");
      }
    });
    var i = "\n      <div>\n        " + r.COLOR_PREVIEW + "\n      </div>\n      <div class=\"color-preview\">\n      </div>\n    ";
    var o = document.createElement("div");
    o.classList.add("preview-panel");
    o.innerHTML = i;
    this.color_review_element = o.querySelector(".color-preview");
    this.color_element.appendChild(o);
    this.container.appendChild(this.color_element);
    document.body.appendChild(this.container);
  };
  t.prototype.update_color = function () {
    if (this.color && this.color_element && this.color_format && this.line && this.owner && "number" === typeof this.owner.min_ && "number" === typeof this.owner.max_) {
      this.min = this.owner.min_;
      this.max = this.owner.max_;
      var e = this.field_to_color_value(Number(this.owner.get_value()), this.min, this.max);
      this.set_color_value(e);
      this.update_dropdown_color();
    }
  };
  t.prototype.set_color_panel_item_left = function (e) {
    var t;
    var n;
    var r;
    var i;
    var o;
    var a;
    var s = null === (n = null === (t = this.owner) || void 0 === t ? void 0 : t.source_block) || void 0 === n ? void 0 : n.parent_block;
    var c = e.getAttribute("data");
    var u = e.querySelector(".color-handle");
    if (s && c && u) {
      var l = this.get_field_value(s, c.toUpperCase());
      var f = (null === (a = null === (o = null === (i = null === (r = s.get_input_target_block(c.toUpperCase())) || void 0 === r ? void 0 : r.output_connection) || void 0 === i ? void 0 : i.target_connection) || void 0 === o ? void 0 : o.get_shadow_dom()) || void 0 === a ? void 0 : a.firstChild).getAttribute("constraints");
      if (f) {
        var d = f.split(",");
        var h = d[0];
        var p = d[1];
        var _ = this.field_to_color_value(l, h, p);
        u.style.left = _ + "px";
      }
    }
  };
  t.prototype.create_color_panel = function (e) {
    return e.map(function (e) {
      return "<div data=\"" + e[0] + "\" id=\"" + e[0] + "_panel\" class=\"color-panel-item\">\n    <div class=\"color-label\">" + e[1] + "</div>\n    <div class=\"color-strip-panel\">\n      <div id=\"" + e[0] + "_panel_strip\" class=\"color-strip\"></div>\n      <div class=\"color-handle\"></div>\n    </div>\n  </div>";
    }).join("");
  };
  t.prototype.get_linear_gradient_rgba = function (e, t, n) {
    var i = (0, r.__assign)({}, e);
    var o = (0, r.__assign)({}, e);
    i[t] = 0;
    o[t] = n;
    return "linear-gradient(90deg, " + (0, a.rgba_to_hex)(i) + ", " + (0, a.rgba_to_hex)(o) + ")";
  };
  t.prototype.get_linear_gradient_hsva = function (e, t, n) {
    var i;
    var o;
    var s = null === (o = null === (i = this.owner) || void 0 === i ? void 0 : i.source_block) || void 0 === o ? void 0 : o.parent_block;
    if (!s) {
      return "";
    }
    var c = {
      h: this.get_field_value(s, "H"),
      s: this.get_field_value(s, "S"),
      v: this.get_field_value(s, "V")
    };
    if ("h" === t) {
      return "linear-gradient(90deg, \n        " + (0, a.rgba_to_hex)((0, a.hsva_to_rgba)((0, r.__assign)((0, r.__assign)({}, c), {
        a: e.a,
        h: 0
      }))) + ",\n        " + (0, a.rgba_to_hex)((0, a.hsva_to_rgba)((0, r.__assign)((0, r.__assign)({}, c), {
        a: e.a,
        h: 60
      }))) + ",\n        " + (0, a.rgba_to_hex)((0, a.hsva_to_rgba)((0, r.__assign)((0, r.__assign)({}, c), {
        a: e.a,
        h: 120
      }))) + ",\n        " + (0, a.rgba_to_hex)((0, a.hsva_to_rgba)((0, r.__assign)((0, r.__assign)({}, c), {
        a: e.a,
        h: 180
      }))) + ",\n        " + (0, a.rgba_to_hex)((0, a.hsva_to_rgba)((0, r.__assign)((0, r.__assign)({}, c), {
        a: e.a,
        h: 240
      }))) + ",\n        " + (0, a.rgba_to_hex)((0, a.hsva_to_rgba)((0, r.__assign)((0, r.__assign)({}, c), {
        a: e.a,
        h: 300
      }))) + ",\n        " + (0, a.rgba_to_hex)((0, a.hsva_to_rgba)((0, r.__assign)((0, r.__assign)({}, c), {
        a: e.a,
        h: 360
      }))) + ")";
    }
    var u = (0, r.__assign)((0, r.__assign)({}, c), {
      a: e.a
    });
    var l = (0, r.__assign)((0, r.__assign)({}, c), {
      a: e.a
    });
    u[t] = 0;
    l[t] = n;
    return "linear-gradient(90deg, " + (0, a.rgba_to_hex)((0, a.hsva_to_rgba)(u)) + ", " + (0, a.rgba_to_hex)((0, a.hsva_to_rgba)(l)) + ")";
  };
  t.prototype.update_dropdown_color = function () {
    var e = this;
    var t = this.color;
    if (t) {
      if (this.color_review_element) {
        this.color_review_element.style.background = t.toString();
      }
      var n = "rgba";
      var r = [["r", 255], ["g", 255], ["b", 255], ["a", 1]];
      if (this.color_format === s.EColorControllerFormat.HSVA) {
        n = "hsva";
        r = [["h", 360], ["s", 100], ["v", 100], ["a", 1]];
      }
      r.forEach(function (r) {
        var i;
        var o;
        var a;
        var s;
        var c;
        var u = document.getElementById(r[0] + "_panel_strip");
        if (u) {
          if (!(null === (s = null === (a = null === (o = null === (i = e.owner) || void 0 === i ? void 0 : i.source_block) || void 0 === o ? void 0 : o.parent_block) || void 0 === a ? void 0 : a.get_input_target_block(r[0].toString().toUpperCase())) || void 0 === s ? void 0 : s.get_field_value("NUM"))) {
            var l = document.getElementById(r[0] + "_panel");
            l.style.opacity = "0.2";
            if (!(null === (c = null === l || void 0 === l ? void 0 : l.querySelector(".color-handle")) || void 0 === c)) {
              c.remove();
            }
            u.style.cursor = "not-allowed";
          }
          u.style.background = "rgba" === n ? e.get_linear_gradient_rgba(t, r[0], r[1]) : e.get_linear_gradient_hsva(t, r[0], r[1]);
        }
      });
    }
  };
  t.prototype.update_value = function (e) {
    var t;
    var n;
    if (this.color && this.line) {
      if ("A" === this.line) {
        this.color.a = e / 100;
      } else if (this.color_format === s.EColorControllerFormat.RGBA) {
        this.color[this.line.toLowerCase()] = e;
      } else if (this.color_format === s.EColorControllerFormat.HSVA) {
        var r = null === (n = null === (t = this.owner) || void 0 === t ? void 0 : t.source_block) || void 0 === n ? void 0 : n.parent_block;
        if (!r) {
          return;
        }
        var i = this.get_field_value(r, "H");
        var o = this.get_field_value(r, "S");
        var c = this.get_field_value(r, "V");
        if (!i || !o || !c) {
          return;
        }
        var u = {
          h: i,
          s: o,
          v: c
        };
        u[this.line.toLowerCase()] = e;
        var l = (0, a.hsv_to_rgb)(u);
        var f = l[0];
        var d = l[1];
        var h = l[2];
        this.color.r = f;
        this.color.g = d;
        this.color.b = h;
      }
      var p = this.field_to_color_value(e, this.min, this.max);
      this.set_color_value(p);
      this.update_dropdown_color();
    }
  };
  t.prototype.get_field_value = function (e, t) {
    var n;
    var r;
    var i;
    var o;
    var a;
    return (null === (n = e.get_input_target_block(t)) || void 0 === n ? void 0 : n.get_field_value("NUM")) || (null === (a = null === (o = null === (i = null === (r = e.get_input_target_block(t)) || void 0 === r ? void 0 : r.output_connection) || void 0 === i ? void 0 : i.target_connection) || void 0 === o ? void 0 : o.get_shadow_dom()) || void 0 === a ? void 0 : a.textContent);
  };
  t.prototype.field_to_color_value = function (e, t, n) {
    var r = (0, o.clamp)(e, t, n);
    var i = t < 0 ? r - t : r;
    var a = n - t;
    return Math.round(i / a * this.color_strip_width);
  };
  t.prototype.bind_color_strip_event = function (e) {
    var t;
    var n;
    var r;
    var i;
    var o = e.getAttribute("data");
    if (o) {
      var a = null === (i = null === (r = null === (n = null === (t = this.owner) || void 0 === t ? void 0 : t.source_block) || void 0 === n ? void 0 : n.parent_block) || void 0 === r ? void 0 : r.get_input_target_block(o.toUpperCase())) || void 0 === i ? void 0 : i.get_field("NUM");
      if (a) {
        this.owner = a;
        this.line = o.toUpperCase();
        this.color_handle_element = e.querySelector(".color-handle");
        this.current_color_panel_element = e.querySelector(".color-strip-panel");
        this.update_color();
      } else {
        this.color_handle_element = null;
      }
    }
  };
  t.prototype.bind_color_event = function (e) {
    var t = this;
    e.preventDefault();
    if (this.current_color_panel_element) {
      this.current_color_panel_item_left = this.current_color_panel_element.getBoundingClientRect().left;
      var n = this.move_color_handle.bind(this);
      document.addEventListener("mousemove", n);
      document.addEventListener("mouseup", function e() {
        t.current_color_panel_item_left = void 0;
        document.removeEventListener("mousemove", n);
        document.removeEventListener("mouseup", e);
      });
    }
  };
  t.prototype.move_color_handle = function (e) {
    e.stopPropagation();
    this.update_color_and_field_value(e.clientX);
  };
  t.prototype.set_color_handle_position = function (e) {
    if (this.current_color_panel_element) {
      this.current_color_panel_item_left = this.current_color_panel_element.getBoundingClientRect().left;
      this.update_color_and_field_value(e.clientX);
    }
  };
  t.prototype.update_color_and_field_value = function (e) {
    var t;
    var n;
    if (this.current_color_panel_item_left && this.color_handle_element) {
      var r = (null === (n = null === (t = this.owner) || void 0 === t ? void 0 : t.source_block) || void 0 === n ? void 0 : n.get_workspace().get_scale()) || 1;
      var i = (e - this.current_color_panel_item_left) / r;
      var a = (0, o.clamp)(i, 0, this.color_strip_width);
      var s = this.max - this.min;
      var c = Math.round(a / this.color_strip_width * s);
      var u = this.min < 0 ? c + this.min : c;
      this.set_color_value(a);
      if (this.owner) {
        this.owner.set_html_input_value(u.toString());
        this.owner.on_html_input_change();
        if (this.owner.get_value() !== u.toString()) {
          this.owner.set_value(u.toString());
        }
      }
    }
  };
  t.prototype.set_color_value = function (e) {
    if (this.color_handle_element) {
      this.color_handle_element.style.left = e + "px";
    }
  };
  (0, r.__decorate)([(0, c.lazy_inject)(c.BINDING.Blink)], t.prototype, "Blink", void 0);
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./1106").Controller);
exports.ColorController = u;