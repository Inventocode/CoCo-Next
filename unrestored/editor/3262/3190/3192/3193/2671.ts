"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  if ("string" !== typeof e) {
    return !1;
  }
  if (t && ((0, r.isKeyword)(e) || (0, r.isStrictReservedWord)(e, !0))) {
    return !1;
  }
  return (0, r.isIdentifierName)(e);
};
var r = require("./2841/2715/index");