/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：518
 */

"use strict";

export { o as a };
import r = require("../520/393");
import i = require("../215/293");
function o(e) {
  return function t(n, o) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return i.a(n) ? t : r.a(function (t) {
          return e(n, t);
        });
      default:
        return i.a(n) && i.a(o) ? t : i.a(n) ? r.a(function (t) {
          return e(t, o);
        }) : i.a(o) ? r.a(function (t) {
          return e(n, t);
        }) : e(n, o);
    }
  };
}
export default o;