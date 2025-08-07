"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlyoutButton = undefined;
var r = require("tslib");
var i = require("inversify");
var o = require("@kitten-team/gl-matrix");
var a = require("../../4/127");
var s = require("../../125/index");
var c = function () {
  function e(e) {
    var t = this;
    this.position_ = o.vec2.fromValues(0, 0);
    this.svg_group = undefined;
    this.width = 0;
    this.width_ratio = undefined;
    this.height = 0;
    this.margin_right = 0;
    this.on_mouse_up = function (e) {
      var n;
      var r = null === (n = t.target_workspace) || undefined === n ? undefined : n.get_gesture(e);
      if (r) {
        r.cancel();
      }
      if (t.callback_) {
        t.callback_(t, e);
      }
    };
    this.workspace_ = e.workspace;
    this.target_workspace = e.target_workspace;
    this.text_ = e.xml.getAttribute("text") || "";
    this.position_ = o.vec2.fromValues(0, 0);
    this.is_label = e.is_label;
    this.flyout_padding_left = e.flyout_padding_left;
    this.flyout_padding_right = e.flyout_padding_right;
    this.callback_ = undefined;
    var n = e.xml;
    var r = e.target_workspace;
    var i = n.getAttribute("callbackkey");
    if (this.is_label && i) {
      console.warn("Labels should not have callbacks. Label text: " + this.text_);
    }
    if (!this.is_label) {
      if (i && r.get_button_callback(i)) {
        this.callback_ = r.get_button_callback(i);
      } else {
        console.warn("Buttons should have callbacks. Button text: " + this.text_);
      }
    }
    this.relation = n.getAttribute("relation") || undefined;
    this.css_class = n.getAttribute("web-class") || undefined;
    this.default_display = n.getAttribute("display") || undefined;
    this.type = n.getAttribute("type") || undefined;
    this.height = parseInt(n.getAttribute("height") || "0") || this.height;
    var a = n.getAttribute("width");
    if (a) {
      var s = a.match(/[0-9]+%/);
      if (s && s[0]) {
        this.width_ratio = parseInt(s[0]) / 100;
      } else {
        this.width = parseInt(a) || 0;
      }
    }
    if ("line" === this.type) {
      this.width_ratio = this.width_ratio || 1;
      this.height = this.height || 11;
    }
    var c = function (e) {
      if ("string" === typeof e) {
        var t = parseFloat(e);
        return isNaN(t) ? undefined : t;
      }
    };
    this.position = n.getAttribute("position") || "relative";
    this.left = c(n.getAttribute("left"));
    this.top = c(n.getAttribute("top"));
    this.right = c(n.getAttribute("right"));
    this.bottom = c(n.getAttribute("bottom"));
    this.align = n.getAttribute("align") || undefined;
    this.inline = n.getAttribute("inline") || undefined;
    this.margin_right = c(n.getAttribute("margin_right")) || 0;
    this.img_url = n.getAttribute("img_url") || undefined;
    this.img_width = c(n.getAttribute("img_width")) || 0;
    this.img_height = c(n.getAttribute("img_height")) || 0;
    this.img_margin_right = c(n.getAttribute("img_margin_right")) || 0;
    this.vertical_padding = c(n.getAttribute("vertical_padding")) || 0;
    this.option = n.getAttribute("option") || undefined;
    this.title = n.getAttribute("title") || undefined;
  }
  e.prototype.get_svg_group = function () {
    return this.svg_group;
  };
  e.prototype.get_target_workspace = function () {
    return this.target_workspace;
  };
  e.prototype.show = function (e) {
    if (undefined === e) {
      e = true;
    }
    if (this.svg_group) {
      this.svg_group.setAttribute("display", e ? "block" : "none");
      if (e && this.update_callback) {
        this.update_callback(this);
      }
    }
  };
  e.prototype.move_to = function (e, t) {
    if (this.workspace_) {
      var n = "fixed" === this.position ? this.workspace_.get_scale() : 1;
      this.position_ = o.vec2.fromValues(e * n, t * n);
      this.update_transform();
    }
  };
  e.prototype.update_transform = function () {
    if (this.svg_group && this.workspace_) {
      var e = "fixed" === this.position ? ", scale(" + this.workspace_.get_scale() + ")" : "";
      this.svg_group.setAttribute("transform", "translate(" + this.position_[0] + ", " + this.position_[1] + ")" + e);
    }
  };
  e.prototype.detach = function () {
    if (this.svg_group) {
      (0, s.remove_node)(this.svg_group);
    }
    this.workspace_ = undefined;
  };
  e.prototype.retach = function (e) {
    this.workspace_ = e;
    if (this.svg_group && this.workspace_.svg_block_canvas_) {
      this.workspace_.svg_block_canvas_.appendChild(this.svg_group);
    }
  };
  e.prototype.dispose = function () {
    if (this.on_mouse_up_wrapper) {
      this.event.unbind_event(this.on_mouse_up_wrapper);
    }
    if (this.svg_group) {
      (0, s.remove_node)(this.svg_group);
      this.svg_group = undefined;
    }
    delete this.workspace_;
    delete this.target_workspace;
  };
  e.prototype.create_dom = function (e) {
    var t;
    var n;
    var r;
    var i;
    var o;
    var a;
    var c;
    var u = this;
    var l = function () {
      if (u.svg_group) {
        if (!u.is_label) {
          u.svg_group.classList.add("blocklyFlyoutClickable");
        }
        u.update_transform();
        u.on_mouse_up_wrapper = u.event.bind_event_with_checks(u.svg_group, "mouseup", u, u.on_mouse_up);
        if (u.width <= 0 && !u.width_ratio || u.height <= 0) {
          console.warn("[FlyoutButton] A button without width or height declaration may cause layout error. ", "Please indicate both width and height in the xml of button type: [" + u.type + "].");
        }
      }
    };
    var f = null === (t = this.target_workspace) || undefined === t ? undefined : t.get_custom_flyout_button(this.type || "");
    if (f) {
      var d = f(e);
      if (d instanceof Element) {
        this.svg_group = d;
      } else {
        var h = d.svg_group;
        var p = d.update_callback;
        this.svg_group = h;
        this.update_callback = p;
      }
      if (!(null === (r = null === (n = this.workspace_) || undefined === n ? undefined : n.svg_block_canvas_) || undefined === r)) {
        r.appendChild(this.svg_group);
      }
      if (this.svg_group.cachedWidth_) {
        this.width = this.svg_group.cachedWidth_;
      }
      if (this.svg_group.cachedHeight_) {
        this.height = this.svg_group.cachedHeight_;
      }
      l();
      return this.svg_group;
    }
    switch (this.type) {
      case "line":
        if ("number" !== typeof e) {
          throw Error("Flyout line should be draw when reflow. ");
        }
        this.svg_group = (0, s.create_svg_element)("g", {
          class: "blocklyLine"
        });
        if (!(null === (o = null === (i = this.workspace_) || undefined === i ? undefined : i.svg_block_canvas_) || undefined === o)) {
          o.appendChild(this.svg_group);
        }
        var _ = (0, s.create_svg_element)("rect", {
          rx: 0,
          ry: 0,
          height: 0,
          width: 0
        }, this.svg_group);
        this.width = e - this.flyout_padding_left - this.flyout_padding_right;
        _.setAttribute("y", "5");
        _.setAttribute("width", "" + this.width);
        _.setAttribute("height", "1");
        break;
      case "normal":
      default:
        if ("normal" !== this.type) {
          console.warn("Flyout button type [" + this.type + "] is not defined. ", "Rendering " + this + " as a normal button. ");
        }
        var A = this.height || 32,
          g = this.vertical_padding;
        this.svg_group = (0, s.create_svg_element)("g", {
          class: this.css_class
        });
        if (!(null === (c = null === (a = this.workspace_) || undefined === a ? undefined : a.svg_block_canvas_) || undefined === c)) {
          c.appendChild(this.svg_group);
        }
        var v = (0, s.create_svg_element)("rect", {
          class: "flyoutButtonNormalRect",
          rx: 4,
          ry: 4
        }, this.svg_group);
        if (this.img_url) {
          (0, s.create_svg_element)("image", {
            class: "flyoutButtonNormalIcon",
            height: this.img_height,
            width: this.img_width,
            x: g,
            y: (A - this.img_height) / 2
          }, this.svg_group).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.img_url);
          g += this.img_width + this.img_margin_right;
        }
        if (this.text_) {
          var m;
          (m = (0, s.create_svg_element)("text", {
            class: "blocklyText",
            "dominant-baseline": "middle",
            x: g,
            y: A / 2 + 1
          }, this.svg_group)).textContent = this.text_;
          var y = 0;
          try {
            y = m.getComputedTextLength();
          } catch (b) {
            y = 8 * this.text_.length;
          }
          g += y;
        }
        if (g += this.vertical_padding, v.setAttribute("width", "" + g), v.setAttribute("height", "" + A), this.width = g, this.height = A, this.option) {
          (m = (0, s.create_svg_element)("text", {
            class: "blocklyButtonTip",
            "dominant-baseline": "middle",
            x: g + 3,
            y: A / 2 + 1
          }, this.svg_group)).textContent = "* " + this.option;
        }
        if (this.title) {
          (0, s.create_svg_element)("title", {}, this.svg_group).textContent = this.title;
        }
    }
    l();
    return this.svg_group;
  };
  e.MARGIN = 5;
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.events)], e.prototype, "event", undefined);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.FlyoutButton = c;