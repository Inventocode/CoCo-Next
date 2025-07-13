"use strict";

export default (function (e, t) {
  if (null == e || !e.length) {
    return;
  }
  var n = [];
  var a = (0, r.default)(e, t, n);
  if (!a) {
    return;
  }
  for (var i = 0, o = n; i < o.length; i++) {
    var s = o[i];
    t.push(s);
  }
  return a;
});
import * as r from "./3166";