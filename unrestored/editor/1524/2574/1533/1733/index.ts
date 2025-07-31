var r = require("../1738/194");
var o = require("../1735/1248");
var i = require("./1734");
var a = require("../1735/422");
for (var s in o) {
  var c = r[s];
  var l = c && c.prototype;
  if (l && l.forEach !== i) {
    try {
      a(l, "forEach", i);
    } catch (u) {
      l.forEach = i;
    }
  }
}