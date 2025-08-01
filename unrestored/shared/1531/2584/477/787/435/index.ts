"use strict";

(function (e) {
  exports.b = o;
  exports.a = a;
  var r = require("../../../36/483/39");
  require("../1168");
  var i = require("../316");
  require("./1435");
  require("../1508/986");
  require("../736");
  function o(e, t, n) {
    if (t in e) {
      var r = e[t];
      var i = n(r);
      if ("function" === typeof i) {
        try {
          i.prototype = i.prototype || {};
          Object.defineProperties(i, {
            __sentry_original__: {
              enumerable: !1,
              value: r
            }
          });
        } catch (o) {}
      }
      e[t] = i;
    }
  }
  function a(e) {
    var t;
    var n;
    if (Object(i.e)(e)) {
      var o = e;
      var s = {};
      try {
        for (var c = Object(r.g)(Object.keys(o)), u = c.next(); !u.done; u = c.next()) {
          var l = u.value;
          if ("undefined" !== typeof o[l]) {
            s[l] = a(o[l]);
          }
        }
      } catch (f) {
        t = {
          error: f
        };
      } finally {
        try {
          if (u && !u.done && (n = c.return)) {
            n.call(c);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return s;
    }
    return Array.isArray(e) ? e.map(a) : e;
  }
}).call(this, require("../../../31/251"));