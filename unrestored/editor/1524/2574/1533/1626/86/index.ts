import * as r from "../../1738/194";
var o = require("../../1534/386").f;
import * as i from "../../1735/422";
import * as a from "../../1738/398";
import * as s from "./1055";
import * as c from "../../1537/1207";
import * as l from "../../1660/817";
module.exports = function (e, t) {
  var n;
  var u;
  var d;
  var p;
  var f;
  var h = e.target;
  var m = e.global;
  var g = e.stat;
  if (n = m ? r : g ? r[h] || s(h, {}) : (r[h] || {}).prototype) {
    for (u in t) {
      if (p = t[u], d = e.noTargetGet ? (f = o(n, u)) && f.value : n[u], !l(m ? u : h + (g ? "." : "#") + u, e.forced) && void 0 !== d) {
        if (typeof p === typeof d) {
          continue;
        }
        c(p, d);
      }
      if (e.sham || d && d.sham) {
        i(p, "sham", !0);
      }
      a(n, u, p, e);
    }
  }
};