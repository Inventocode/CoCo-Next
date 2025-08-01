"use strict";

export { a };
var r = require("../301/203");
var i = require("../57/770");
var o = require("../36/461");
function a(e) {
  var t = "function" === typeof Map ? new Map() : void 0;
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
      return Object(o.a)(e, arguments, Object(r.a)(this).constructor);
    }
    a.prototype = Object.create(e.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    });
    return Object(i.a)(a, e);
  })(e);
}
export default a;