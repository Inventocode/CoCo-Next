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
import * as r from "./2703";
import * as i from "./3070/2787";
import * as a from "./3070/2788";