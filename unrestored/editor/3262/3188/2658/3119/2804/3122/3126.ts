"use strict";

var r = require("../../../../../../1524/2574/206/775/1049");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  return JSON.parse(JSON.stringify(e, a), s);
};
var i = "$$ babel internal serialized type" + Math.random();
function a(e, t) {
  var n;
  return "bigint" !== typeof t ? t : (r(n = {}, i, "BigInt"), r(n, "value", t.toString()), n);
}
function s(e, t) {
  return t && "object" === typeof t ? "BigInt" !== t[i] ? t : BigInt(t.value) : t;
}