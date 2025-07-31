"use strict";

var r = require("../../../../../3190/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  if (e === t) {
    return !0;
  }
  var n = i.PLACEHOLDERS_ALIAS[e];
  if (n) {
    var a;
    var s = r(n);
    try {
      for (s.s(); !(a = s.n()).done;) {
        var o = a.value;
        if (t === o) {
          return !0;
        }
      }
    } catch (l) {
      s.e(l);
    } finally {
      s.f();
    }
  }
  return !1;
};
var i = require("./2633/index");