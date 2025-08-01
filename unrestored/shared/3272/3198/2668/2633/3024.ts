"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = s;
var r = require("./2636");
var i = require("./2660");
var a = require("./2783");
function s(e) {
  var t;
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.key;
  return "method" === e.kind ? s.increment() + "" : (t = (0, r.isIdentifier)(n) ? n.name : (0, r.isStringLiteral)(n) ? JSON.stringify(n.value) : JSON.stringify((0, a.default)((0, i.default)(n))), e.computed && (t = "[".concat(t, "]")), e.static && (t = "static:".concat(t)), t);
}
s.uid = 0;
s.increment = function () {
  return s.uid >= Number.MAX_SAFE_INTEGER ? s.uid = 0 : s.uid++;
};