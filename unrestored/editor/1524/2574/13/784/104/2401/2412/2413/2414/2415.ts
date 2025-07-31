var r = require("../../../../../../254/2503/2504/2505/972/index");
var i = require("../2458/1391/index");
module.exports = function (e, t, n, o) {
  var a = n.length;
  var s = a;
  var c = !o;
  if (null == e) {
    return !s;
  }
  for (e = Object(e); a--;) {
    var u = n[a];
    if (c && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) {
      return !1;
    }
  }
  for (; ++a < s;) {
    var l = (u = n[a])[0];
    var f = e[l];
    var h = u[1];
    if (c && u[2]) {
      if (void 0 === f && !(l in e)) {
        return !1;
      }
    } else {
      var d = new r();
      if (o) {
        var p = o(f, h, l, e, t, d);
      }
      if (!(void 0 === p ? i(h, f, 3, o, d) : p)) {
        return !1;
      }
    }
  }
  return !0;
};