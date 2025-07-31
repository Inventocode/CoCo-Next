"use strict";

var r = require("../../../../1524/2574/1/index");
function i() {
  var e = require("../3131/2638");
  i = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.createConfigItem = function (e, t, n) {
  return void 0 !== n ? u.errback(e, t, n) : "function" === typeof t ? u.errback(e, void 0, n) : u.sync(e, t);
};
exports.createConfigItemSync = exports.createConfigItemAsync = void 0;
Object.defineProperty(exports, "default", {
  enumerable: !0,
  get: function () {
    return a.default;
  }
});
exports.loadPartialConfigSync = exports.loadPartialConfigAsync = exports.loadPartialConfig = exports.loadOptionsSync = exports.loadOptionsAsync = exports.loadOptions = void 0;
var a = require("./3094/index");
var s = require("./2803/index");
var o = require("./2683/index");
var l = i()(r.mark(function e(t) {
  var n;
  var i;
  return r.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          return e.delegateYield((0, a.default)(t), "t0", 1);
        case 1:
          i = e.t0;
          return e.abrupt("return", null != (n = null == i ? void 0 : i.options) ? n : null);
        case 3:
        case "end":
          return e.stop();
      }
    }
  }, e);
}));
var u = i()(o.createConfigItem);
var c = function (e) {
  return function (t, n) {
    if (void 0 === n && "function" === typeof t) {
      n = t;
      t = void 0;
    }
    return n ? e.errback(t, n) : e.sync(t);
  };
};
var p = c(s.loadPartialConfig);
exports.loadPartialConfig = p;
var f = s.loadPartialConfig.sync;
exports.loadPartialConfigSync = f;
var d = s.loadPartialConfig.async;
exports.loadPartialConfigAsync = d;
var h = c(l);
exports.loadOptions = h;
var y = l.sync;
exports.loadOptionsSync = y;
var m = l.async;
exports.loadOptionsAsync = m;
var v = u.sync;
exports.createConfigItemSync = v;
var g = u.async;
exports.createConfigItemAsync = g;