import * as r from "../1623/309";
var o = Math.floor;
var i = "".replace;
var a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var s = /\$([$&'`]|\d{1,2})/g;
module.exports = function (e, t, n, c, l, u) {
  var d = n + e.length;
  var p = c.length;
  var f = s;
  if (void 0 !== l) {
    l = r(l);
    f = a;
  }
  return i.call(u, f, function (r, i) {
    var a;
    switch (i.charAt(0)) {
      case "$":
        return "$";
      case "&":
        return e;
      case "`":
        return t.slice(0, n);
      case "'":
        return t.slice(d);
      case "<":
        a = l[i.slice(1, -1)];
        break;
      default:
        var s = +i;
        if (0 === s) {
          return r;
        }
        if (s > p) {
          var u = o(s / 10);
          return 0 === u ? r : u <= p ? void 0 === c[u - 1] ? i.charAt(1) : c[u - 1] + i.charAt(1) : r;
        }
        a = c[s - 1];
    }
    return void 0 === a ? "" : a;
  });
};