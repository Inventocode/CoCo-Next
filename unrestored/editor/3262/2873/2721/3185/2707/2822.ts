"use strict";

import * as r from "../../../../3190/494";
export default (function (e) {
  var t;
  var n = "";
  var o = r(e += "");
  try {
    for (o.s(); !(t = o.n()).done;) {
      var s = t.value;
      n += (0, i.isIdentifierChar)(s.codePointAt(0)) ? s : "-";
    }
  } catch (u) {
    o.e(u);
  } finally {
    o.f();
  }
  n = (n = n.replace(/^[-0-9]+/, "")).replace(/[-\s]+(.)?/g, function (e, t) {
    return t ? t.toUpperCase() : "";
  });
  if (!(0, a.default)(n)) {
    n = "_".concat(n);
  }
  return n || "_";
});
import * as a from "./2669/index";
import * as i from "./2669/2710/index";