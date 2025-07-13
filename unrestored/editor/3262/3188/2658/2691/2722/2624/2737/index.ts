"use strict";

import * as r from "../../../../../../3190/494";
export default (function (e) {
  var t;
  var n = "";
  var s = r(e += "");
  try {
    for (s.s(); !(t = s.n()).done;) {
      var o = t.value;
      n += (0, a.isIdentifierChar)(o.codePointAt(0)) ? o : "-";
    }
  } catch (l) {
    s.e(l);
  } finally {
    s.f();
  }
  n = (n = n.replace(/^[-0-9]+/, "")).replace(/[-\s]+(.)?/g, function (e, t) {
    return t ? t.toUpperCase() : "";
  });
  if (!(0, i.default)(n)) {
    n = "_".concat(n);
  }
  return n || "_";
});
import * as i from "../2661";
import * as a from "./2674/index";