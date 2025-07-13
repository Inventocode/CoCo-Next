"use strict";

export { s as a };
import * as r from "./364";
var i = Object(r.b)();
var o = "Sentry Logger ";
var a = function () {
  function e() {
    this._enabled = !1;
  }
  e.prototype.disable = function () {
    this._enabled = !1;
  };
  e.prototype.enable = function () {
    this._enabled = !0;
  };
  e.prototype.log = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    if (this._enabled) {
      Object(r.a)(function () {
        i.console.log(o + "[Log]: " + e.join(" "));
      });
    }
  };
  e.prototype.warn = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    if (this._enabled) {
      Object(r.a)(function () {
        i.console.warn(o + "[Warn]: " + e.join(" "));
      });
    }
  };
  e.prototype.error = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    if (this._enabled) {
      Object(r.a)(function () {
        i.console.error(o + "[Error]: " + e.join(" "));
      });
    }
  };
  return e;
}();
i.__SENTRY__ = i.__SENTRY__ || {};
var s = i.__SENTRY__.logger || (i.__SENTRY__.logger = new a());