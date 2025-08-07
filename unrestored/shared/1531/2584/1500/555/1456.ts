"use strict";

exports.a = function (e) {
  if (!e) {
    return false;
  }
  if (e.offsetParent) {
    return true;
  }
  if (e.getBBox) {
    var t = e.getBBox();
    if (t.width || t.height) {
      return true;
    }
  }
  if (e.getBoundingClientRect) {
    var n = e.getBoundingClientRect();
    if (n.width || n.height) {
      return true;
    }
  }
  return false;
};