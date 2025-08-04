var r = require("../../1736/194");
var o = require("../../1740/422");
var i = require("../332");
var a = require("./1056");
var s = require("../../1646/1058");
var c = require("../423/index");
var l = c.get;
var u = c.enforce;
var d = String(String).split("String");
(module.exports = function (e, t, n, s) {
  var c;
  var l = !!s && !!s.unsafe;
  var p = !!s && !!s.enumerable;
  var f = !!s && !!s.noTargetGet;
  if ("function" == typeof n) {
    if (!("string" != typeof t || i(n, "name"))) {
      o(n, "name", t);
    }
    if (!(c = u(n)).source) {
      c.source = d.join("string" == typeof t ? t : "");
    }
  }
  if (e !== r) {
    if (l) {
      if (!f && e[t]) {
        p = !0;
      }
    } else {
      delete e[t];
    }
    if (p) {
      e[t] = n;
    } else {
      o(e, t, n);
    }
  } else {
    if (p) {
      e[t] = n;
    } else {
      a(t, n);
    }
  }
})(Function.prototype, "toString", function () {
  return "function" == typeof this && l(this).source || s(this);
});