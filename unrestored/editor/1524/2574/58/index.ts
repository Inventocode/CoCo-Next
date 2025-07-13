"use strict";

export { a };
import * as r from "../301/203";
import * as i from "./988";
import * as o from "./685";
function a(e) {
  return function () {
    var t;
    var n = Object(r.a)(e);
    if (Object(i.a)()) {
      var a = Object(r.a)(this).constructor;
      t = Reflect.construct(n, arguments, a);
    } else {
      t = n.apply(this, arguments);
    }
    return Object(o.a)(this, t);
  };
}