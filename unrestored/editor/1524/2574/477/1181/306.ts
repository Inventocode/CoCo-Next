"use strict";

function r(e) {
  switch (Object.prototype.toString.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return _(e, Error);
  }
}
function i(e) {
  return "[object ErrorEvent]" === Object.prototype.toString.call(e);
}
function o(e) {
  return "[object DOMError]" === Object.prototype.toString.call(e);
}
function a(e) {
  return "[object DOMException]" === Object.prototype.toString.call(e);
}
function s(e) {
  return "[object String]" === Object.prototype.toString.call(e);
}
function c(e) {
  return null === e || "object" !== typeof e && "function" !== typeof e;
}
function u(e) {
  return "[object Object]" === Object.prototype.toString.call(e);
}
function l(e) {
  return "undefined" !== typeof Event && _(e, Event);
}
function f(e) {
  return "undefined" !== typeof Element && _(e, Element);
}
function h(e) {
  return "[object RegExp]" === Object.prototype.toString.call(e);
}
function d(e) {
  return Boolean(e && e.then && "function" === typeof e.then);
}
function p(e) {
  return u(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
function _(e, t) {
  try {
    return e instanceof t;
  } catch (n) {
    return !1;
  }
}
export { r as d };
export { i as e };
export { o as a };
export { a as b };
export { s as k };
export { c as i };
export { u as h };
export { l as f };
export { f as c };
export { h as j };
export { d as m };
export { p as l };
export { _ as g };