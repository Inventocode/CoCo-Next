var r = require("./1633/86/index");
var o = require("./1745/272");
var i = require("./1663/1059");
var a = require("./936/437");
var s = require("./1541/386/index");
var c = require("./1557/707");
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