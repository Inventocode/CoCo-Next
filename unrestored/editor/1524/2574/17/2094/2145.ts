"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.BlockDragSurfaceSvg = void 0;
var r = require("../../1000/93");
var i = require("../../1000/134/index");
var o = require("../../125/259");
var a = require("../../4/127");
var s = require("../../125/index");
var c = require("../../125/534");
var u = function () {
  function e(e) {
    this.SVG_ = void 0;
    this.drag_group_ = void 0;
    this.container_ = void 0;
    this.scale_ = 1;
    this.surface_xy_ = void 0;
    this.container_ = e;
    this.create_dom();
  }
  e.prototype.create_dom = function () {
    if (!this.SVG_) {
      this.SVG_ = (0, s.create_svg_element)("svg", {
        xmlns: c.SVG_NS,
        "xmlns:html": c.HTML_NS,
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        class: "blocklyBlockDragSurface"
      }, this.container_);
      this.drag_group_ = (0, s.create_svg_element)("g", {}, this.SVG_);
    }
  };
  e.prototype.set_blocks_and_show = function (e) {
    this.clear_additions();
    if (void 0 != this.drag_group_ && 0 !== this.drag_group_.childNodes.length) {
      console.error("Already dragging a block.");
    }
    if (this.drag_group_ && this.SVG_) {
      this.drag_group_.appendChild(e);
      this.SVG_.style.display = "block";
      this.surface_xy_ = o.vec2.fromValues(0, 0);
    }
  };
  e.prototype.translate_and_scale_group = function (e, t, n) {
    this.scale_ = n;
    var r = e.toFixed(0);
    var i = t.toFixed(0);
    if (this.drag_group_) {
      this.drag_group_.setAttribute("transform", "translate(" + r + ", " + i + ") scale(" + n + ")");
    }
  };
  e.prototype.set_scale = function (e) {
    if (this.scale_ = e, this.drag_group_) {
      var t = this.drag_group_.getAttribute("transform");
      var n = "scale(" + e + ")";
      this.drag_group_.setAttribute("transform", t ? t.replace(/scale\([0-9\.]+\)/, n) : n);
    }
  };
  e.prototype.translate_surface_internal = function () {
    if (void 0 == this.surface_xy_) {
      throw new Error("surfaceXY_ can not be undefined");
    }
    if (void 0 == this.SVG_) {
      throw new Error("SVG_ can not be undefined");
    }
    var e = this.surface_xy_[0];
    var t = this.surface_xy_[1];
    var n = e.toFixed(0);
    var r = t.toFixed(0);
    this.SVG_.style.display = "block";
    (0, s.set_css_transform)(this.SVG_, "translate3d(" + n + "px, " + r + "px, 0px)");
  };
  e.prototype.translate_surface = function (e, t) {
    this.surface_xy_ = o.vec2.fromValues(e * this.scale_, t * this.scale_);
    this.translate_surface_internal();
  };
  e.prototype.get_surface_translation = function () {
    var e = this.utils.get_relative_xy(this.SVG_);
    return o.vec2.fromValues(e[0] / this.scale_, e[1] / this.scale_);
  };
  e.prototype.get_group = function () {
    return this.drag_group_;
  };
  e.prototype.get_current_block = function () {
    if (this.drag_group_) {
      return this.drag_group_.firstChild;
    }
  };
  e.prototype.clear_and_hide = function (e) {
    var t = this.get_current_block();
    if (e) {
      if (void 0 != t) {
        e.appendChild(t);
      }
    } else {
      if (this.drag_group_ && void 0 != t) {
        this.drag_group_.removeChild(t);
      }
    }
    if (this.SVG_) {
      this.SVG_.style.display = "none";
    }
    if (this.drag_group_) {
      this.clear_additions();
      if (0 !== this.drag_group_.childNodes.length) {
        console.error("Drag group was not cleared.");
      }
    }
    this.surface_xy_ = void 0;
  };
  e.prototype.clear_additions = function () {
    if (this.drag_group_) {
      for (var e = this.drag_group_.childElementCount - 1; e >= 0; e--) {
        var t = this.drag_group_.children[e];
        if (!t.classList.contains("blocklyDraggable")) {
          (0, s.remove_node)(t);
        }
      }
    }
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.utils)], e.prototype, "utils", void 0);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.BlockDragSurfaceSvg = u;