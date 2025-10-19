/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1008
 */

"use strict";

function r(e) {
  var t;
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 166;
  function r() {
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) {
      i[o] = arguments[o];
    }
    var a = this;
    var s = function () {
      e.apply(a, i);
    };
    clearTimeout(t);
    t = setTimeout(s, n);
  }
  r.clear = function () {
    clearTimeout(t);
  };
  return r;
}
export { r as a };
export default r;