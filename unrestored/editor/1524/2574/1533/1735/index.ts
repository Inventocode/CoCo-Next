var r = require("../1738/194");
var o = require("./1248");
var i = require("../935/index");
var a = require("./422");
var s = require("./247/index");
var c = s("iterator");
var l = s("toStringTag");
var u = i.values;
for (var d in o) {
  var p = r[d];
  var f = p && p.prototype;
  if (f) {
    if (f[c] !== u) {
      try {
        a(f, c, u);
      } catch (m) {
        f[c] = u;
      }
    }
    if (f[l] || a(f, l, d), o[d]) {
      for (var h in i) if (f[h] !== i[h]) {
        try {
          a(f, h, i[h]);
        } catch (m) {
          f[h] = i[h];
        }
      }
    }
  }
}