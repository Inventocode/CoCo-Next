"use strict";

export { i as a };
import * as r from "./337";
function i(e, t) {
  if (null == e) {
    return {};
  }
  var n;
  var i;
  var o = Object(r.a)(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++) {
      n = a[i];
      if (!(t.indexOf(n) >= 0)) {
        if (Object.prototype.propertyIsEnumerable.call(e, n)) {
          o[n] = e[n];
        }
      }
    }
  }
  return o;
}