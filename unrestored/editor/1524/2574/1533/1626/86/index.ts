var r = require("../../1738/194");
var o = require("../../1534/386").f;
var i = require("../../1735/422");
var a = require("../../1738/398");
var s = require("./1055");
var c = require("../../1537/1207");
var l = require("../../1660/817");
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