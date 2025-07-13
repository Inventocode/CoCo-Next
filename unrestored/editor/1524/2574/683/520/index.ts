"use strict";

import * as r from "./907";
function i(e, t, n, o) {
  var a;
  var s = function (r) {
    for (var a = t.length, s = 0; s < a;) {
      if (e === t[s]) {
        return n[s];
      }
      s += 1;
    }
    for (var c in t[s + 1] = e, n[s + 1] = r, e) r[c] = o ? i(e[c], t, n, !0) : e[c];
    return r;
  };
  switch (Object(r.a)(e)) {
    case "Object":
      return s({});
    case "Array":
      return s([]);
    case "Date":
      return new Date(e.valueOf());
    case "RegExp":
      a = e;
      return new RegExp(a.source, (a.global ? "g" : "") + (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.sticky ? "y" : "") + (a.unicode ? "u" : ""));
    default:
      return e;
  }
}
import * as o from "../215/393";
var a = Object(o.a)(function (e) {
  return null != e && "function" === typeof e.clone ? e.clone() : i(e, [], [], !0);
});
export { a };