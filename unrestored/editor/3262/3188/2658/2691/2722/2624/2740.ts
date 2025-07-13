"use strict";

import * as r from "../../../../../3190/494";
export default (function (e) {
  var t;
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  var i = n.preserveComments ? a : s;
  var o = r(i);
  try {
    for (o.s(); !(t = o.n()).done;) {
      var l = t.value;
      if (null != e[l]) {
        e[l] = void 0;
      }
    }
  } catch (m) {
    o.e(m);
  } finally {
    o.f();
  }
  for (var u = 0, c = Object.keys(e); u < c.length; u++) {
    var p = c[u];
    if ("_" === p[0] && null != e[p]) {
      e[p] = void 0;
    }
  }
  var f;
  var d = Object.getOwnPropertySymbols(e);
  var h = r(d);
  try {
    for (h.s(); !(f = h.n()).done;) {
      var y = f.value;
      e[y] = null;
    }
  } catch (m) {
    h.e(m);
  } finally {
    h.f();
  }
});
import * as i from "./2647";
var a = ["tokens", "start", "end", "loc", "raw", "rawValue"];
var s = i.COMMENT_KEYS.concat(["comments"]).concat(a);