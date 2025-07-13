"use strict";

import * as r from "../../../../1524/2574/1/index";
function i() {
  var e = require("../3131/2638");
  i = function () {
    return e;
  };
  return e;
}
exports.createConfigItem = function (e, t, n) {
  return void 0 !== n ? u.errback(e, t, n) : "function" === typeof t ? u.errback(e, void 0, n) : u.sync(e, t);
};
export { default } from "./3094/index";
import * as a from "./3094/index";
import * as s from "./2803/index";
import * as o from "./2683/index";
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
export { p as loadPartialConfig };
var f = s.loadPartialConfig.sync;
export { f as loadPartialConfigSync };
var d = s.loadPartialConfig.async;
export { d as loadPartialConfigAsync };
var h = c(l);
export { h as loadOptions };
var y = l.sync;
export { y as loadOptionsSync };
var m = l.async;
export { m as loadOptionsAsync };
var v = u.sync;
export { v as createConfigItemSync };
var g = u.async;
export { g as createConfigItemAsync };