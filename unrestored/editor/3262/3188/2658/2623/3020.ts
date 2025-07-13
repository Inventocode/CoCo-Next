"use strict";

import * as r from "../../../3190/494";
export default (function (e, t) {
  if (!e || !t) {
    return e;
  }
  var n;
  var s = r(i.INHERIT_KEYS.optional);
  try {
    for (s.s(); !(n = s.n()).done;) {
      var o = n.value;
      if (null == e[o]) {
        e[o] = t[o];
      }
    }
  } catch (h) {
    s.e(h);
  } finally {
    s.f();
  }
  for (var l = 0, u = Object.keys(t); l < u.length; l++) {
    var c = u[l];
    if ("_" === c[0] && "__clone" !== c) {
      e[c] = t[c];
    }
  }
  var p;
  var f = r(i.INHERIT_KEYS.force);
  try {
    for (f.s(); !(p = f.n()).done;) {
      var d = p.value;
      e[d] = t[d];
    }
  } catch (h) {
    f.e(h);
  } finally {
    f.f();
  }
  (0, a.default)(e, t);
  return e;
});
import * as i from "./2649";
import * as a from "./2769";