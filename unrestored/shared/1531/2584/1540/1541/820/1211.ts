var r = require("../../1745/332");
var o = require("../../936/437");
var i = require("../../1722/817").indexOf;
var a = require("../816");
module.exports = function (e, t) {
  var n;
  var s = o(e);
  var c = 0;
  var l = [];
  for (n in s) if (!r(a, n) && r(s, n)) {
    l.push(n);
  }
  for (; t.length > c;) {
    if (r(s, n = t[c++])) {
      if (!~i(l, n)) {
        l.push(n);
      }
    }
  }
  return l;
};