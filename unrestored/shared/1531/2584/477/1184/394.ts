"use strict";

(function (e) {
  Object.defineProperty(exports, "e", {
    get: function () {
      return o;
    },
    enumerable: true
  });
  Object.defineProperty(exports, "i", {
    get: function () {
      return a;
    },
    enumerable: true
  });
  Object.defineProperty(exports, "h", {
    get: function () {
      return s;
    },
    enumerable: true
  });
  Object.defineProperty(exports, "d", {
    get: function () {
      return c;
    },
    enumerable: true
  });
  Object.defineProperty(exports, "c", {
    get: function () {
      return u;
    },
    enumerable: true
  });
  Object.defineProperty(exports, "b", {
    get: function () {
      return l;
    },
    enumerable: true
  });
  Object.defineProperty(exports, "a", {
    get: function () {
      return f;
    },
    enumerable: true
  });
  Object.defineProperty(exports, "f", {
    get: function () {
      return d;
    },
    enumerable: true
  });
  Object.defineProperty(exports, "g", {
    get: function () {
      return h;
    },
    enumerable: true
  });
  var r = require("../340/2592/904");
  require("./737");
  var i = {};
  function o() {
    return r.b() ? e : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : i;
  }
  function a() {
    var e = o();
    var t = e.crypto || e.msCrypto;
    if (undefined !== t && t.getRandomValues) {
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
    if (!e) {
      return {};
    }
    var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t) {
      return {};
    }
    var n = t[6] || "";
    var r = t[8] || "";
    return {
      host: t[4],
      path: t[5],
      protocol: t[2],
      relative: t[5] + n + r
    };
  }
  function c(e) {
    if (e.message) {
      return e.message;
    }
    if (e.exception && e.exception.values && e.exception.values[0]) {
      var t = e.exception.values[0];
      return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || e.event_id || "<unknown>";
    }
    return e.event_id || "<unknown>";
  }
  function u(e) {
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
  function l(e, t, n) {
    e.exception = e.exception || {};
    e.exception.values = e.exception.values || [];
    e.exception.values[0] = e.exception.values[0] || {};
    e.exception.values[0].value = e.exception.values[0].value || t || "";
    e.exception.values[0].type = e.exception.values[0].type || n || "Error";
  }
  function f(e, t) {
    if (undefined === t) {
      t = {};
    }
    try {
      e.exception.values[0].mechanism = e.exception.values[0].mechanism || {};
      Object.keys(t).forEach(function (n) {
        e.exception.values[0].mechanism[n] = t[n];
      });
    } catch (n) {}
  }
  function d() {
    try {
      return document.location.href;
    } catch (e) {
      return "";
    }
  }
  function h(e, t) {
    if (!t) {
      return 6e4;
    }
    var n = parseInt("" + t, 10);
    if (!isNaN(n)) {
      return 1e3 * n;
    }
    var r = Date.parse("" + t);
    return isNaN(r) ? 6e4 : r - e;
  }
}).call(this, require("../../710/251"));