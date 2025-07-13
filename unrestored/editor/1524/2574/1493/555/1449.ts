"use strict";

exports.a = function (e) {
  if (!e) {
    return !1;
  }
  if (e.offsetParent) {
    return !0;
  }
  if (e.getBBox) {
    var t = e.getBBox();
    if (t.width || t.height) {
      return !0;
    }
  }
  if (e.getBoundingClientRect) {
    var n = e.getBoundingClientRect();
    if (n.width || n.height) {
      return !0;
    }
  }
  return !1;
};