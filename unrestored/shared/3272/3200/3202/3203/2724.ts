"use strict";

var r = require("../../494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  if (e === t) {
    return !0;
  }
  if (a.ALIAS_KEYS[t]) {
    return !1;
  }
  var n = a.FLIPPED_ALIAS_KEYS[t];
  if (n) {
    if (n[0] === e) {
      return !0;
    }
    var i;
    var o = r(n);
    try {
      for (o.s(); !(i = o.n()).done;) {
        var s = i.value;
        if (e === s) {
          return !0;
        }
      }
    } catch (u) {
      o.e(u);
    } finally {
      o.f();
    }
  }
  return !1;
};
var a = require("./2646/index");