"use strict";

(function (e) {
  Object.defineProperty(exports, "b", {
    get: function () {
      return o;
    },
    enumerable: true
  });
  Object.defineProperty(exports, "c", {
    get: function () {
      return a;
    },
    enumerable: true
  });
  Object.defineProperty(exports, "a", {
    get: function () {
      return s;
    },
    enumerable: true
  });
  var r = require("./521");
  require("./736");
  var i = {};
  function o() {
    return Object(r.b)() ? e : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : i;
  }
  function a() {
    var e = o();
    var t = e.crypto || e.msCrypto;
    if (void 0 !== t && t.getRandomValues) {
      var n = new Uint16Array(8);
      t.getRandomValues(n);
      n[3] = 4095 & n[3] | 16384;
      n[4] = 16383 & n[4] | 32768;
      var r = function (e) {
        for (var t = e.toString(16); t.length < 4;) {
          t = "0" + t;
        }
        return t;
      };
      return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7]);
    }
    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var t = 16 * Math.random() | 0;
      return ("x" === e ? t : 3 & t | 8).toString(16);
    });
  }
  function s(e) {
    var t = o();
    if (!("console" in t)) {
      return e();
    }
    var n = t.console;
    var r = {};
    ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
      if (e in t.console && n[e].__sentry_original__) {
        r[e] = n[e];
        n[e] = n[e].__sentry_original__;
      }
    });
    var i = e();
    Object.keys(r).forEach(function (e) {
      n[e] = r[e];
    });
    return i;
  }
}).call(this, require("../../31/251"));