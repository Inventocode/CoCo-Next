var r = require("../1680/473");
var o = require("./310");
var i = require("../1675/421");
var a = function (e) {
  return function (t, n) {
    var a;
    var s;
    var c = o(i(t));
    var l = r(n);
    var u = c.length;
    return l < 0 || l >= u ? e ? "" : void 0 : (a = c.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === u || (s = c.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? c.charAt(l) : a : e ? c.slice(l, l + 2) : s - 56320 + (a - 55296 << 10) + 65536;
  };
};
module.exports = {
  codeAt: a(!1),
  charAt: a(!0)
};