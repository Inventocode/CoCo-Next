"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t, n) {
  if (!(0, r.isMemberExpression)(e)) {
    return !1;
  }
  var i;
  var a = Array.isArray(t) ? t : t.split(".");
  var s = [];
  for (i = e; (0, r.isMemberExpression)(i); i = i.object) {
    s.push(i.property);
  }
  if (s.push(i), s.length < a.length) {
    return !1;
  }
  if (!n && s.length > a.length) {
    return !1;
  }
  for (var o = 0, l = s.length - 1; o < a.length; o++, l--) {
    var u = s[l];
    var c = void 0;
    if ((0, r.isIdentifier)(u)) {
      c = u.name;
    } else if ((0, r.isStringLiteral)(u)) {
      c = u.value;
    } else {
      if (!(0, r.isThisExpression)(u)) {
        return !1;
      }
      c = "this";
    }
    if (a[o] !== c) {
      return !1;
    }
  }
  return !0;
};
var r = require("./2626");