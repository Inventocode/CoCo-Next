"use strict";

export default (function (e, t) {
  if (null == e || !e.length) {
    return;
  }
  var n = [];
  var i = (0, r.default)(e, t, n);
  if (!i) {
    return;
  }
  for (var a = 0, s = n; a < s.length; a++) {
    var o = s[a];
    t.push(o);
  }
  return i;
});
import * as r from "./3016";