var r = require("../../../../../../254/2513/2514/2515/973/index");
var i = require("../2468/1398/index");
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
      return false;
    }
  }
  for (; ++a < s;) {
    var l = (u = n[a])[0];
    var f = e[l];
    var d = u[1];
    if (c && u[2]) {
      if (undefined === f && !(l in e)) {
        return false;
      }
    } else {
      var h = new r();
      if (o) {
        var p = o(f, d, l, e, t, h);
      }
      if (!(undefined === p ? i(d, f, 3, o, h) : p)) {
        return false;
      }
    }
  }
  return true;
};