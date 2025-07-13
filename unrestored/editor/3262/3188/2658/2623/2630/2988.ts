"use strict";

export default (function () {
  var e = this;
  var t = r.BUILDER_KEYS[e];
  var n = arguments.length;
  if (n > t.length) {
    throw new Error("".concat(e, ": Too many arguments passed. Received ").concat(n, " but can receive no more than ").concat(t.length));
  }
  for (var a = {
      type: e
    }, s = 0; s < t.length; ++s) {
    var o = t[s];
    var l = r.NODE_FIELDS[e][o];
    var u = void 0;
    if (s < n) {
      u = arguments[s];
    }
    if (void 0 === u) {
      u = Array.isArray(l.default) ? [] : l.default;
    }
    a[o] = u;
  }
  for (var c in a) (0, i.default)(a, c, a[c]);
  return a;
});
import * as r from "../2634/index";
import * as i from "../2700";