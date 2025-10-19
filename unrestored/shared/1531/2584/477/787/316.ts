/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：316
 */

"use strict";

function r(e) {
  switch (Object.prototype.toString.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return true;
    default:
      return d(e, Error);
  }
}
function i(e) {
  return "[object String]" === Object.prototype.toString.call(e);
}
function o(e) {
  return null === e || "object" !== typeof e && "function" !== typeof e;
}
function a(e) {
  return "[object Object]" === Object.prototype.toString.call(e);
}
function s(e) {
  return "undefined" !== typeof Event && d(e, Event);
}
function c(e) {
  return "undefined" !== typeof Element && d(e, Element);
}
function u(e) {
  return "[object RegExp]" === Object.prototype.toString.call(e);
}
function l(e) {
  return Boolean(e && e.then && "function" === typeof e.then);
}
function f(e) {
  return a(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
function d(e, t) {
  try {
    return e instanceof t;
  } catch (n) {
    return false;
  }
}
export { r as b };
export { i as h };
export { o as f };
export { a as e };
export { s as c };
export { c as a };
export { u as g };
export { l as j };
export { f as i };
export { d };
export default c;