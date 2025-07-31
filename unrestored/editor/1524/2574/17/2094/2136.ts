"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.WidgetDiv = void 0;
var r = require("../../1000/93");
var i = require("../../1000/134/index");
var o = require("../../125/index");
var a = require("../../125/714");
var s = function () {
  function e() {
    this.dispose_ = void 0;
  }
  e.prototype.create_dom = function () {
    if (void 0 == this.DIV) {
      this.DIV = (0, o.create_dom)("div", "blocklyWidgetDiv");
      document.body.appendChild(this.DIV);
    }
  };
  e.prototype.show = function (e, t) {
    if (this.hide(), this.owner_ = e, this.dispose_ = t, void 0 != this.DIV) {
      var n = (0, a.get_viewport_page_offset)(document);
      this.DIV.style.top = n[1] + "px";
      this.DIV.style.direction = "ltr";
      this.DIV.style.display = "block";
    }
  };
  e.prototype.hide = function () {
    if (this.is_visible()) {
      this.owner_ = void 0;
      if (this.dispose_) {
        this.dispose_();
      }
      this.dispose_ = void 0;
      this.hide_and_clear_dom();
    }
  };
  e.prototype.hide_and_clear_dom = function () {
    if (void 0 != this.DIV) {
      this.DIV.setAttribute("style", "display: none;");
      (0, o.remove_children)(this.DIV);
    }
  };
  e.prototype.is_visible = function () {
    return !!this.owner_;
  };
  e.prototype.hide_if_owner = function (e) {
    if (this.owner_ == e) {
      this.hide();
    }
  };
  e.prototype.position = function (e, t, n, r, i) {
    if (t < (r = r || (0, a.get_viewport_page_offset)(document))[1]) {
      t = r[1];
    }
    if (i) {
      if (e > (n = n || (0, o.get_viewport_size)()).width + r[0]) {
        e = n.width + r[0];
      }
    } else {
      if (e < r[0]) {
        e = r[0];
      }
    }
    if (void 0 != this.DIV) {
      this.DIV.style.left = e + "px";
      this.DIV.style.top = t + "px";
      this.DIV.style.height = "0px";
      this.DIV.setAttribute("tabindex", "-1");
      this.DIV.style.outline = "none";
      this.DIV.focus();
    }
  };
  e.prototype.position_with_anchor = function (e, t, n, r) {
    var i = this.calculate_y(e, t, n);
    var o = this.calculate_x(e, t, n, r);
    this.position_internal(o, i, n.height);
  };
  e.prototype.calculate_y = function (e, t, n) {
    return t.bottom + n.height >= e.bottom ? t.top - n.height : t.bottom;
  };
  e.prototype.calculate_x = function (e, t, n, r) {
    if (r) {
      var i = t.right - n.width;
      var o = Math.max(i, e.left);
      return Math.min(o, e.right - n.width);
    }
    o = Math.min(t.left, e.right - n.width);
    return Math.max(o, e.left);
  };
  e.prototype.position_internal = function (e, t, n) {
    if (void 0 != this.DIV) {
      this.DIV.style.left = e + "px";
      this.DIV.style.top = t + "px";
      this.DIV.style.height = n + "px";
    }
  };
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.WidgetDiv = s;