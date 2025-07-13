import * as r from "../1623/309";
import * as o from "../1728/257";
import * as i from "../1250/933";
import * as a from "../1250/823";
import * as s from "../1738/1214/1063";
import * as c from "../1250/632";
var l = require("../1707/258/index").aTypedArrayConstructor;
module.exports = function (e) {
  var t;
  var n;
  var u;
  var d;
  var p;
  var f;
  var h = r(e);
  var m = arguments.length;
  var g = m > 1 ? arguments[1] : void 0;
  var _ = void 0 !== g;
  var v = a(h);
  if (void 0 != v && !s(v)) {
    for (f = (p = i(h, v)).next, h = []; !(d = f.call(p)).done;) {
      h.push(d.value);
    }
  }
  for (_ && m > 2 && (g = c(g, arguments[2], 2)), n = o(h.length), u = new (l(this))(n), t = 0; n > t; t++) {
    u[t] = _ ? g(h[t], t) : h[t];
  }
  return u;
};