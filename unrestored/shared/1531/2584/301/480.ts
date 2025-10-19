/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：480
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.draw_arrow = exports.position_dropdown = undefined;
var r = require("@kitten-team/gl-matrix");
var i = require("../125/index");
var o = require("../125/714");
exports.position_dropdown = function (e, t) {
  var n = t.get_svg_root();
  if (!t.source_block || !n) {
    return r.vec2.create();
  }
  var a = (0, i.get_viewport_size)();
  var s = (0, o.get_viewport_page_offset)(document);
  var c = t.source_block.is_shadow() ? (0, i.get_page_offset)(t.source_block.get_svg_root()) : (0, i.get_page_offset)(t.border_rect || n);
  var u = t.source_block.get_workspace().get_scale();
  var l = t.source_block.is_shadow() ? {
    width: t.source_block.width * u,
    height: t.source_block.height * u
  } : {
    width: t.get_size().width * u,
    height: t.get_size().height * u
  };
  var f = t.source_block.is_shadow() ? t.source_block.parent_block : t.source_block;
  if (!f) {
    return r.vec2.create();
  }
  var d = t.source_block.workspace.options.dropdown;
  var h = d.menu.scalable ? Math.max(u, 1) : 1;
  if (e.parentElement) {
    e.parentElement.style.transform = "scale(" + h + ")";
    e.parentElement.style.transformOrigin = "left top";
  }
  var p = (0, o.get_size)(e);
  var _ = document.createElement("div");
  _.classList.add("dropdown-triangle");
  var A = f.inputList.find(function (e) {
    return e.fieldRow.indexOf(t) > -1;
  });
  var g = ((((null === A || undefined === A ? undefined : A.height) || f.first_row_height) + 2) * u - l.height) / 2;
  if (c[1] <= a.height / 2 + s[1]) {
    c[1] += l.height + g;
    e.classList.add("lower");
    _.classList.add("lower");
  } else {
    c[1] -= p.height + g;
    e.classList.add("upper");
    _.classList.add("upper");
    _.style.top = p.height + "px";
  }
  (0, i.insert_before)(_, e);
  if ("first" === d.menu.align) {
    var v = t.image_element ? Number(t.image_element.getAttribute("x")) : t.text_element ? Number(t.text_element.getAttribute("x")) : NaN;
    v = isNaN(v) ? d.padding : v;
    var m = e.firstElementChild ? parseFloat((0, o.get_computed_style)(e.firstElementChild, "padding-left")) : -v * u;
    c[0] = c[0] + v * u - m * h;
    c[0] = Math.min(c[0], a.width + s[0] - p.width);
  } else if ("center" === d.menu.align) {
    if (e.parentElement) {
      e.parentElement.style.transform = "scale(" + h + ") translateX(-50%)";
    }
    c[0] += l.width / 2;
    c[0] = Math.min(c[0], a.width + s[0] - p.width / 2);
    c[0] = Math.max(c[0], s[0] + p.width / 2);
  } else {
    if ("left" === d.menu.align) {
      c[0] = Math.min(c[0], a.width + s[0] - p.width);
    }
  }
  return c;
};
exports.draw_arrow = function (e) {
  if (undefined === e) {
    e = "triangle";
  }
  var t = (0, i.create_svg_element)("g", {
    class: "blocklyDropdownArrow"
  });
  if ("line" === e) {
    (0, i.create_svg_element)("path", {
      d: "M5.99695526,7.90416306 L9.03751442,4.8636039 C9.38898628,4.51213203 9.95883476,4.51213203 10.3103066,4.8636039 C10.6617785,5.21507576 10.6617785,5.78492424 10.3103066,6.1363961 L6.63335137,9.81335137 C6.2818795,10.1648232 5.71203102,10.1648232 5.36055916,9.81335137 L1.6836039,6.1363961 C1.33213203,5.78492424 1.33213203,5.21507576 1.6836039,4.8636039 C2.03507576,4.51213203 2.60492424,4.51213203 2.9563961,4.8636039 L5.99695526,7.90416306 Z"
    }, t);
  } else {
    (0, i.create_svg_element)("path", {
      d: "M2.49351315,4 L9.50652922,4 C9.77906561,4 10,4.24184373 10,4.54017309 C10,4.65100154 9.96885725,4.75914782 9.91079624,4.84994202 L6.4042882,9.76954945 C6.24799884,10.0139504 5.94030478,10.0733882 5.71703428,9.90230757 C5.66983808,9.86614356 5.62879151,9.82121232 5.59575417,9.76954945 L2.08924613,4.84994202 C1.93295678,4.60554109 1.98725573,4.26872671 2.21052624,4.09764605 C2.29347055,4.03409011 2.39226671,4 2.49351315,4 Z"
    }, t);
  }
  return t;
};