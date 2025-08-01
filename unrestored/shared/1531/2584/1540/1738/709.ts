var r = require("../1633/86/index");
var o = require("../1541/816");
var i = require("../1633/231");
var a = require("../1745/332");
var s = require("../1541/300").f;
var c = require("../1541/631");
var l = require("../1541/1062");
var u = require("../1541/815");
var d = require("../1638/826");
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