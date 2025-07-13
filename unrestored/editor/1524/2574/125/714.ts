"use strict";

import * as r from "./259";
import * as i from "./index";
import * as o from "./474";
function a(e) {
  var t = e.offsetWidth;
  var n = e.offsetHeight;
  var r = o.is.webkit() && !t && !n;
  if ((void 0 != t || r) && e.getBoundingClientRect) {
    var i = e.getBoundingClientRect();
    return {
      width: i.right - i.left,
      height: i.bottom - i.top
    };
  }
  return {
    width: t,
    height: n
  };
}
function s(e, t) {
  return c(e, t) || function (e, t) {
    return e.currentStyle ? e.currentStyle[t] : void 0;
  }(e, t) || e.style && e.style[Number(t)];
}
function c(e, t) {
  var n = (0, i.get_owner_document)(e);
  if (n.defaultView && n.defaultView.getComputedStyle) {
    var r = n.defaultView.getComputedStyle(e, void 0);
    if (r) {
      return r[Number(t)] || r.getPropertyValue(t) || "";
    }
  }
  return "";
}
exports.get_viewport_page_offset = function (e) {
  var t = e.body;
  var n = e.documentElement;
  var i = t.scrollLeft || n.scrollLeft;
  var o = t.scrollTop || n.scrollTop;
  return r.vec2.fromValues(i, o);
};
exports.get_size = function (e) {
  return function (e, t) {
    if ("none" != s(t, "display")) {
      return e(t);
    }
    var n = t.style;
    var r = n.display;
    var i = n.visibility;
    var o = n.position;
    n.visibility = "hidden";
    n.position = "absolute";
    n.display = "inline";
    var a = e(t);
    n.display = r;
    n.position = o;
    n.visibility = i;
    return a;
  }(a, e);
};
export { s as get_style };
export { c as get_computed_style };
exports.adjust_bboxes_for_rtl = function (e, t, n) {
  t.left += n.width;
  t.right += n.width;
  e.left += n.width;
  e.right += n.width;
};