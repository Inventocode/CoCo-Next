"use strict";

export { o as e };
export { a as f };
export { s as a };
export { c };
export { u as b };
export { l as d };
var r;
var i = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (t.hasOwnProperty(n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
!function (e) {
  e.FORMAT_ERROR = "FORMAT_ERROR";
  e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER";
  e.INVALID_CONFIG = "INVALID_CONFIG";
  e.MISSING_DATA = "MISSING_DATA";
  e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
}(r || (r = {}));
var o = function (e) {
  function t(n, r, i) {
    var o = e.call(this, "[React Intl Error " + n + "] " + r + " \n" + (i ? "\n" + i.message + "\n" + i.stack : "")) || this;
    o.code = n;
    if ("function" === typeof Error.captureStackTrace) {
      Error.captureStackTrace(o, t);
    }
    return o;
  }
  i(t, e);
  return t;
}(Error);
var a = function (e) {
  function t(t, n) {
    return e.call(this, "UNSUPPORTED_FORMATTER", t, n) || this;
  }
  i(t, e);
  return t;
}(o);
var s = function (e) {
  function t(t, n) {
    return e.call(this, "INVALID_CONFIG", t, n) || this;
  }
  i(t, e);
  return t;
}(o);
var c = function (e) {
  function t(t, n) {
    return e.call(this, "MISSING_DATA", t, n) || this;
  }
  i(t, e);
  return t;
}(o);
var u = function (e) {
  function t(t, n, r, i) {
    var o = e.call(this, "FORMAT_ERROR", t + " \nLocale: " + n + "\nMessageID: " + (null === r || void 0 === r ? void 0 : r.id) + "\nDefault Message: " + (null === r || void 0 === r ? void 0 : r.defaultMessage) + "\nDescription: " + (null === r || void 0 === r ? void 0 : r.description) + " \n", i) || this;
    o.descriptor = r;
    return o;
  }
  i(t, e);
  return t;
}(o);
var l = function (e) {
  function t(t, n) {
    var r = e.call(this, "MISSING_TRANSLATION", 'Missing message: "' + t.id + '" for locale "' + n + '", using ' + (t.defaultMessage ? "default message" : "id") + " as fallback.") || this;
    r.descriptor = t;
    return r;
  }
  i(t, e);
  return t;
}(o);
export default s;