"use strict";

export default (function (e, t, n) {
  if (n && "Identifier" === e.type && "ObjectProperty" === t.type && "ObjectExpression" === n.type) {
    return !1;
  }
  var a = r.default.keys[t.type];
  if (a) {
    for (var i = 0; i < a.length; i++) {
      var o = a[i];
      var s = t[o];
      if (Array.isArray(s)) {
        if (s.indexOf(e) >= 0) {
          return !0;
        }
      } else if (s === e) {
        return !0;
      }
    }
  }
  return !1;
});
import * as r from "./2687";