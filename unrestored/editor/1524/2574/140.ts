"use strict";

export { o as a };
import * as r from "./273";
import * as i from "./322";
function o(e) {
  var t = function () {
    if ("undefined" === typeof Reflect || !Reflect.construct) {
      return !1;
    }
    if (Reflect.construct.sham) {
      return !1;
    }
    if ("function" === typeof Proxy) {
      return !0;
    }
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return !0;
    } catch (e) {
      return !1;
    }
  }();
  return function () {
    var n;
    var o = Object(r.a)(e);
    if (t) {
      var a = Object(r.a)(this).constructor;
      n = Reflect.construct(o, arguments, a);
    } else {
      n = o.apply(this, arguments);
    }
    return Object(i.a)(this, n);
  };
}