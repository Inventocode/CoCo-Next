"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Tooltip = void 0;
var r = require("../../1001/93");
var i = require("../../1001/134/index");
var o = require("../../4/127");
var a = require("../../125/index");
var s = require("../../1001/213/index");
var c = require("../497/841");
var u = function () {
  function e() {
    this.visible = !1;
    this.blocked_ = !1;
    this.LIMIT = 50;
    this.mouse_out_pid_ = 0;
    this.show_pid_ = 0;
    this.last_x_ = 0;
    this.last_y_ = 0;
    this.poisoned_element_ = void 0;
    this.OFFSET_X = 0;
    this.OFFSET_Y = 10;
    this.RADIUS_OK = 20;
    this.HOVER_MS = 750;
    this.MARGINS = 5;
    this.DIV = void 0;
  }
  e.prototype.create_dom = function () {
    if (!this.DIV) {
      this.DIV = (0, a.create_dom)("div", "blocklyTooltipDiv");
      document.body.appendChild(this.DIV);
    }
    return this.DIV;
  };
  e.prototype.bind_mouse_event = function (e) {
    this.events.bind_event(e, "mouseover", void 0, this.on_mouse_over.bind(this));
    this.events.bind_event(e, "mouseout", void 0, this.on_mouse_out.bind(this));
    e.addEventListener("mousemove", this.on_mouse_move.bind(this), !1);
  };
  e.prototype.on_mouse_over = function (e) {
    if (!this.blocked_) {
      var t = e.target;
      if (t && t.tooltip) {
        if (this.element_ !== e.target) {
          this.hide();
          this.poisoned_element_ = void 0;
          this.element_ = t;
        }
        clearTimeout(this.mouse_out_pid_);
      }
    }
  };
  e.prototype.on_mouse_out = function (e) {
    var t = this;
    if (!(this.blocked_ || (0, a.is_in_same_shadow)(e.target, e.relatedTarget))) {
      this.mouse_out_pid_ = window.setTimeout(function () {
        t.element_ = void 0;
        t.poisoned_element_ = void 0;
        t.hide();
      }, 1);
      clearTimeout(this.show_pid_);
    }
  };
  e.prototype.on_mouse_move = function (e) {
    if (this.element_ && !this.blocked_) {
      if (this.visible) {
        var t = this.last_x_ - e.pageX;
        var n = this.last_y_ - e.pageY;
        if (Math.sqrt(t * t + n * n) > this.RADIUS_OK) {
          this.hide();
        }
      } else if (this.poisoned_element_ != this.element_) {
        clearTimeout(this.show_pid_);
        this.last_x_ = e.pageX;
        this.last_y_ = e.pageY;
        this.show_pid_ = window.setTimeout(this.show_.bind(this), this.HOVER_MS);
      }
    }
  };
  e.prototype.hide = function () {
    if (this.visible) {
      this.visible = !1;
      if (this.DIV) {
        this.DIV.style.display = "none";
      }
    }
    if (this.show_pid_) {
      clearTimeout(this.show_pid_);
    }
  };
  e.prototype.block = function () {
    this.hide();
    this.blocked_ = !0;
  };
  e.prototype.unblock = function () {
    this.blocked_ = !1;
  };
  e.prototype.show_ = function () {
    var e;
    if (!this.blocked_) {
      this.poisoned_element_ = this.element_;
      var t = this.DIV || this.create_dom();
      (0, a.remove_children)(t);
      for (var n = null === (e = this.element_) || void 0 === e ? void 0 : e.tooltip; (0, s.is_func)(n);) {
        n = n();
      }
      if (n) {
        for (var r = (n = (0, c.wrap)(n, this.LIMIT)).split("\n"), i = 0; i < r.length; i++) {
          var o = document.createElement("div");
          o.appendChild(document.createTextNode(r[i]));
          t.appendChild(o);
        }
        var u = (0, a.get_viewport_size)();
        t.style.display = "block";
        this.visible = !0;
        var l = this.last_x_;
        l += this.OFFSET_X;
        var f = this.last_y_ + this.OFFSET_Y;
        if (f + t.offsetHeight > u.height + window.scrollY) {
          f -= t.offsetHeight + 2 * this.OFFSET_Y;
        }
        if (l + t.offsetWidth > u.width + window.scrollX - 2 * this.MARGINS) {
          l = u.width - t.offsetWidth - 2 * this.MARGINS;
        }
        t.style.top = f + "px";
        t.style.left = l + "px";
      }
    }
  };
  e.prototype.get_element = function () {
    return this.element_;
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.events)], e.prototype, "events", void 0);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.widget_div)], e.prototype, "widget_div", void 0);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.Tooltip = u;