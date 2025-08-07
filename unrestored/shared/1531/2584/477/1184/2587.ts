"use strict";

(function (e) {
  Object.defineProperty(exports, "a", {
    get: function () {
      return c;
    },
    enumerable: true
  });
  Object.defineProperty(exports, "b", {
    get: function () {
      return u;
    },
    enumerable: true
  });
  var r = require("./394");
  var i = require("../340/2592/904");
  var o = {
    nowSeconds: function () {
      return Date.now() / 1e3;
    }
  };
  var a = i.b() ? function () {
    try {
      return i.a(e, "perf_hooks").performance;
    } catch (t) {
      return;
    }
  }() : function () {
    var e = r.e().performance;
    if (e && e.now) {
      return {
        now: function () {
          return e.now();
        },
        timeOrigin: Date.now() - e.now()
      };
    }
  }();
  var s = undefined === a ? o : {
    nowSeconds: function () {
      return (a.timeOrigin + a.now()) / 1e3;
    }
  };
  var c = o.nowSeconds.bind(o);
  var u = s.nowSeconds.bind(s);
  !function () {
    var e = r.e().performance;
    if (e && e.now) {
      var t = e.now();
      var n = Date.now();
      var i = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5;
      var o = i < 36e5;
      var a = e.timing && e.timing.navigationStart;
      var s = "number" === typeof a ? Math.abs(a + t - n) : 36e5;
      return o || s < 36e5 ? i <= s ? ("timeOrigin", e.timeOrigin) : ("navigationStart", a) : ("dateNow", n);
    }
    "none";
  }();
}).call(this, require("../../155/1167/574")(module));