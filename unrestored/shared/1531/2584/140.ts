/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：140
 */

"use strict";

export { o as a };
import r = require("./273");
import i = require("./322");
function o(e) {
  var t = function () {
    if ("undefined" === typeof Reflect || !Reflect.construct) {
      return false;
    }
    if (Reflect.construct.sham) {
      return false;
    }
    if ("function" === typeof Proxy) {
      return true;
    }
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }();
  return function () {
    var n;
    var o = r.a(e);
    if (t) {
      var a = r.a(this).constructor;
      n = Reflect.construct(o, arguments, a);
    } else {
      n = o.apply(this, arguments);
    }
    return i.a(this, n);
  };
}
export default o;