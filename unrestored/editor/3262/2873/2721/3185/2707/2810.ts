"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t, n) {
  if (!(0, r.isMemberExpression)(e)) {
    return !1;
  }
  var a;
  var i = Array.isArray(t) ? t : t.split(".");
  var o = [];
  for (a = e; (0, r.isMemberExpression)(a); a = a.object) {
    o.push(a.property);
  }
  if (o.push(a), o.length < i.length) {
    return !1;
  }
  if (!n && o.length > i.length) {
    return !1;
  }
  for (var s = 0, u = o.length - 1; s < i.length; s++, u--) {
    var l = o[u];
    var p = void 0;
    if ((0, r.isIdentifier)(l)) {
      p = l.name;
    } else if ((0, r.isStringLiteral)(l)) {
      p = l.value;
    } else {
      if (!(0, r.isThisExpression)(l)) {
        return !1;
      }
      p = "this";
    }
    if (i[s] !== p) {
      return !1;
    }
  }
  return !0;
};
var r = require("./2627");