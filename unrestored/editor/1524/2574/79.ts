"use strict";

export { r as a };
export { o as b };
export { i as e };
export { a as d };
export { s as c };
export { c as f };
var r = "EXTENSION_";
var o = "UNSAFE_EXTENSION_";
function i(e) {
  return e.startsWith(r);
}
function a(e) {
  return e.startsWith(o) || e.startsWith(r);
}
function s(e, t) {
  var n = e;
  if (!a(e)) {
    n = "".concat(t ? r : o).concat(n);
  }
  return n = n.toUpperCase();
}
function c(e, t) {
  var n = e;
  if (a(e)) {
    n = e.replace(t ? r : o, "");
  }
  return n;
}
export default r;