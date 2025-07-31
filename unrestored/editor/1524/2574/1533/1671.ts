var r = require("./1626/86/index");
var o = require("./935/437");
var i = require("./1728/257");
var a = require("./1738/310");
r({
  target: "String",
  stat: !0
}, {
  raw: function (e) {
    for (var t = o(e.raw), n = i(t.length), r = arguments.length, s = [], c = 0; n > c;) {
      s.push(a(t[c++]));
      if (c < r) {
        s.push(a(arguments[c]));
      }
    }
    return s.join("");
  }
});