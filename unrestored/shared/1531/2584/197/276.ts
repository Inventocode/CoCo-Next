/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：276
 */

"use strict";

export { a };
import r = require("../301/203");
import i = require("../57/770");
import o = require("../36/461");
function a(e) {
  var t = "function" === typeof Map ? new Map() : undefined;
  return (a = function (e) {
    if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) {
      return e;
    }
    var n;
    if ("function" !== typeof e) {
      throw new TypeError("Super expression must either be null or a function");
    }
    if ("undefined" !== typeof t) {
      if (t.has(e)) {
        return t.get(e);
      }
      t.set(e, a);
    }
    function a() {
      return o.a(e, arguments, r.a(this).constructor);
    }
    a.prototype = Object.create(e.prototype, {
      constructor: {
        value: a,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return i.a(a, e);
  })(e);
}
export default a;