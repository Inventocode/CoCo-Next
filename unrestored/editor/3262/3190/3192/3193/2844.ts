"use strict";

import * as r from "../../494";
export default (function (e) {
  var t;
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  var a = n.preserveComments ? i : o;
  var s = r(a);
  try {
    for (s.s(); !(t = s.n()).done;) {
      var u = t.value;
      if (null != e[u]) {
        e[u] = void 0;
      }
    }
  } catch (m) {
    s.e(m);
  } finally {
    s.f();
  }
  for (var l = 0, p = Object.keys(e); l < p.length; l++) {
    var f = p[l];
    if ("_" === f[0] && null != e[f]) {
      e[f] = void 0;
    }
  }
  var d;
  var c = Object.getOwnPropertySymbols(e);
  var y = r(c);
  try {
    for (y.s(); !(d = y.n()).done;) {
      var T = d.value;
      e[T] = null;
    }
  } catch (m) {
    y.e(m);
  } finally {
    y.f();
  }
});
import * as a from "./2653";
var i = ["tokens", "start", "end", "loc", "raw", "rawValue"];
var o = a.COMMENT_KEYS.concat(["comments"]).concat(i);