"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Grid = void 0;
var r = require("../../1001/93");
var i = require("../../1001/134/index");
var o = require("../../125/index");
var a = require("../../125/474");
var s = function () {
  function e(e) {
    this.scale = 1;
    var t = e.svg_defs;
    var n = e.svg_rnd;
    var r = e.gridOptions;
    this.spacing = r.spacing;
    this.step = r.step;
    this.snap_to_grid = r.snap;
    this.grid_pattern = (0, o.create_svg_element)("pattern", {
      id: "blocklyGridPattern" + n,
      patternUnits: "userSpaceOnUse",
      fill: "transparent"
    }, t);
    this.bg_rect = (0, o.create_svg_element)("rect", {
      class: "blinkGridPatternBg",
      fill: "transparent"
    }, this.grid_pattern);
    this.outer_rect = (0, o.create_svg_element)("path", {
      class: "blinkGridPatternOuter",
      stroke: "rgb(136, 136, 136)"
    }, this.grid_pattern);
    this.inner_lines = (0, o.create_svg_element)("path", {
      class: "blinkGridPatternInner",
      stroke: "rgb(136, 136, 136)"
    }, this.grid_pattern);
    this.update();
  }
  e.prototype.should_snap = function () {
    return this.snap_to_grid;
  };
  e.prototype.move_to = function (e, t) {
    this.grid_pattern.setAttribute("x", String(e));
    this.grid_pattern.setAttribute("y", String(t));
    if (a.is.ie() || a.is.edge()) {
      this.set_scale(this.scale);
    }
  };
  e.prototype.get_spacing = function () {
    return this.spacing;
  };
  e.prototype.get_pattern_id = function () {
    return this.grid_pattern.id;
  };
  e.prototype.dispose = function () {
    (0, o.remove_node)(this.grid_pattern);
  };
  e.prototype.update = function () {
    var e = this.spacing * this.scale || 10;
    var t = e * this.step;
    this.grid_pattern.setAttribute("width", t.toString());
    this.grid_pattern.setAttribute("height", t.toString());
    this.bg_rect.setAttribute("width", t.toString());
    this.bg_rect.setAttribute("height", t.toString());
    this.outer_rect.setAttribute("d", "M " + t + " 0 L 0 0 0 " + t);
    for (var n = [], r = [], i = 1; i < this.step; i++) {
      n.push("M 0 " + i * e + " L " + t + " " + i * e);
      r.push("M " + i * e + " 0 L " + i * e + " " + t);
    }
    this.inner_lines.setAttribute("d", n.join(" ") + r.join(" "));
  };
  e.prototype.set_scale = function (e) {
    this.scale = e;
    this.update();
  };
  e.prototype.set_color = function (e, t) {
    this.bg_rect.setAttribute("fill", e);
    this.outer_rect.setAttribute("stroke", t);
    this.inner_lines.setAttribute("stroke", t);
  };
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.Grid = s;