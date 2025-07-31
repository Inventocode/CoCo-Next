var r = require("./718/index");
var i = require("./1148/index");
var o = require("./535");
var a = Function.prototype;
var s = Object.prototype;
var c = a.toString;
var u = s.hasOwnProperty;
var l = c.call(Object);
module.exports = function (e) {
  if (!o(e) || "[object Object]" != r(e)) {
    return !1;
  }
  var t = i(e);
  if (null === t) {
    return !0;
  }
  var n = u.call(t, "constructor") && t.constructor;
  return "function" == typeof n && n instanceof n && c.call(n) == l;
};