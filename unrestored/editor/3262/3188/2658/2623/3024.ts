"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t, n) {
  if (n && "Identifier" === e.type && "ObjectProperty" === t.type && "ObjectExpression" === n.type) {
    return !1;
  }
  var i = r.default.keys[t.type];
  if (i) {
    for (var a = 0; a < i.length; a++) {
      var s = i[a];
      var o = t[s];
      if (Array.isArray(o)) {
        if (o.indexOf(e) >= 0) {
          return !0;
        }
      } else if (o === e) {
        return !0;
      }
    }
  }
  return !1;
};
var r = require("./2677");