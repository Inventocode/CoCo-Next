/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413
 */

"use strict";

export { c as a };
var r = function (e) {
  return +setTimeout(e, 16);
};
var i = function (e) {
  return clearTimeout(e);
};
if ("undefined" !== typeof window && "requestAnimationFrame" in window) {
  r = function (e) {
    return window.requestAnimationFrame(e);
  };
  i = function (e) {
    return window.cancelAnimationFrame(e);
  };
}
var o = 0;
var a = new Map();
function s(e) {
  a.delete(e);
}
function c(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1;
  var n = o += 1;
  function i(t) {
    if (0 === t) {
      s(n);
      e();
    } else {
      var o = r(function () {
        i(t - 1);
      });
      a.set(n, o);
    }
  }
  i(t);
  return n;
}
c.cancel = function (e) {
  var t = a.get(e);
  s(t);
  return i(t);
};
export default c;