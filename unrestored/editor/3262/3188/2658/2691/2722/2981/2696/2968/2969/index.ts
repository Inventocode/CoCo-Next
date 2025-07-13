"use strict";

export default (function (e, t, n) {
  var s;
  t = e.code(t);
  return function (o) {
    var l = (0, r.normalizeReplacements)(o);
    if (!s) {
      s = (0, i.default)(e, t, n);
    }
    return e.unwrap((0, a.default)(s, l));
  };
});
import * as r from "../2697";
import * as i from "./2756";
import * as a from "./2757";