"use strict";

export { i as a };
import * as r from "./203";
function i(e, t, n) {
  return (i = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
    var i = function (e, t) {
      for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Object(r.a)(e));) {
        ;
      }
      return e;
    }(e, t);
    if (i) {
      var o = Object.getOwnPropertyDescriptor(i, t);
      return o.get ? o.get.call(n) : o.value;
    }
  })(e, t, n || e);
}