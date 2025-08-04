var r = require("./1623/86");
var o = require("./1738/231");
var i = require("./1659/241");
var a = require("./1665/1241");
var s = require("./1659/386/index");
var c = require("./1660/495");
r({
  target: "Reflect",
  stat: !0
}, {
  get: function e(t, n) {
    var r;
    var l;
    var u = arguments.length < 3 ? t : arguments[2];
    return i(t) === u ? t[n] : (r = s.f(t, n)) ? a(r) ? r.value : void 0 === r.get ? void 0 : r.get.call(u) : o(l = c(t)) ? e(l, n, u) : void 0;
  }
});