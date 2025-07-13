"use strict";

export { o as a };
import * as r from "../57/770";
import * as i from "../58/988";
function o(e, t, n) {
  return (o = Object(i.a)() ? Reflect.construct : function (e, t, n) {
    var i = [null];
    i.push.apply(i, t);
    var o = new (Function.bind.apply(e, i))();
    if (n) {
      Object(r.a)(o, n.prototype);
    }
    return o;
  }).apply(null, arguments);
}