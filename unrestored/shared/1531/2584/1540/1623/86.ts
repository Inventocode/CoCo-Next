var r = require("../1736/194");
var o = require("../1659/386/index").f;
var i = require("../1740/422");
var a = require("../1745/398/index");
var s = require("../1745/398/1056");
var c = require("../1544/1210");
var l = require("../1667/818");
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
      p = t[u];
      d = e.noTargetGet ? (f = o(n, u)) && f.value : n[u];
      if (!l(m ? u : h + (g ? "." : "#") + u, e.forced) && undefined !== d) {
        if (typeof p === typeof d) {
          continue;
        }
        c(p, d);
      }
      if (e.sham || d && d.sham) {
        i(p, "sham", true);
      }
      a(n, u, p, e);
    }
  }
};