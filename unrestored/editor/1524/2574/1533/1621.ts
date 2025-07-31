var r = require("./1626/86/index");
var o = require("./1738/272");
var i = require("./1656/1058");
var a = require("./935/437");
var s = require("./1534/386");
var c = require("./1550/707");
r({
  target: "Object",
  stat: !0,
  sham: !o
}, {
  getOwnPropertyDescriptors: function (e) {
    for (var t, n, r = a(e), o = s.f, l = i(r), u = {}, d = 0; l.length > d;) {
      if (void 0 !== (n = o(r, t = l[d++]))) {
        c(u, t, n);
      }
    }
    return u;
  }
});