import * as r from "../1626/86/index";
import * as o from "../1534/815";
import * as i from "../1626/231";
import * as a from "../1738/332";
var s = require("../1534/300/index").f;
import * as c from "../1534/631";
import * as l from "../1534/1061";
import * as u from "../1534/814";
import * as d from "../1631/825";
var p = !1;
var f = u("meta");
var h = 0;
var m = Object.isExtensible || function () {
  return !0;
};
var g = function (e) {
  s(e, f, {
    value: {
      objectID: "O" + h++,
      weakData: {}
    }
  });
};
var _ = module.exports = {
  enable: function () {
    _.enable = function () {};
    p = !0;
    var e = c.f;
    var t = [].splice;
    var n = {};
    n[f] = 1;
    if (e(n).length) {
      c.f = function (n) {
        for (var r = e(n), o = 0, i = r.length; o < i; o++) {
          if (r[o] === f) {
            t.call(r, o, 1);
            break;
          }
        }
        return r;
      };
      r({
        target: "Object",
        stat: !0,
        forced: !0
      }, {
        getOwnPropertyNames: l.f
      });
    }
  },
  fastKey: function (e, t) {
    if (!i(e)) {
      return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
    }
    if (!a(e, f)) {
      if (!m(e)) {
        return "F";
      }
      if (!t) {
        return "E";
      }
      g(e);
    }
    return e[f].objectID;
  },
  getWeakData: function (e, t) {
    if (!a(e, f)) {
      if (!m(e)) {
        return !0;
      }
      if (!t) {
        return !1;
      }
      g(e);
    }
    return e[f].weakData;
  },
  onFreeze: function (e) {
    if (d && p && m(e) && !a(e, f)) {
      g(e);
    }
    return e;
  }
};
o[f] = !0;