"use strict";

var r = require("./2387/index");
var i = require("./2390/index");
var o = require("./2392/index");
var a = r("%TypeError%");
var s = r("%WeakMap%", !0);
var c = r("%Map%", !0);
var u = i("WeakMap.prototype.get", !0);
var l = i("WeakMap.prototype.set", !0);
var f = i("WeakMap.prototype.has", !0);
var d = i("Map.prototype.get", !0);
var h = i("Map.prototype.set", !0);
var p = i("Map.prototype.has", !0);
var _ = function (e, t) {
  for (var n, r = e; null !== (n = r.next); r = n) {
    if (n.key === t) {
      r.next = n.next;
      n.next = e.next;
      e.next = n;
      return n;
    }
  }
};
module.exports = function () {
  var e;
  var t;
  var n;
  var r = {
    assert: function (e) {
      if (!r.has(e)) {
        throw new a("Side channel does not contain " + o(e));
      }
    },
    get: function (r) {
      if (s && r && ("object" === typeof r || "function" === typeof r)) {
        if (e) {
          return u(e, r);
        }
      } else if (c) {
        if (t) {
          return d(t, r);
        }
      } else if (n) {
        return function (e, t) {
          var n = _(e, t);
          return n && n.value;
        }(n, r);
      }
    },
    has: function (r) {
      if (s && r && ("object" === typeof r || "function" === typeof r)) {
        if (e) {
          return f(e, r);
        }
      } else if (c) {
        if (t) {
          return p(t, r);
        }
      } else if (n) {
        return function (e, t) {
          return !!_(e, t);
        }(n, r);
      }
      return !1;
    },
    set: function (r, i) {
      if (s && r && ("object" === typeof r || "function" === typeof r)) {
        if (!e) {
          e = new s();
        }
        l(e, r, i);
      } else {
        if (c) {
          if (!t) {
            t = new c();
          }
          h(t, r, i);
        } else {
          if (!n) {
            n = {
              key: {},
              next: null
            };
          }
          (function (e, t, n) {
            var r = _(e, t);
            if (r) {
              r.value = n;
            } else {
              e.next = {
                key: t,
                next: e.next,
                value: n
              };
            }
          })(n, r, i);
        }
      }
    }
  };
  return r;
};