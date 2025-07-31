"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
Object.defineProperty(exports, "ImportInjector", {
  enumerable: !0,
  get: function () {
    return r.default;
  }
});
exports.addDefault = function (e, t, n) {
  return new r.default(e).addDefault(t, n);
};
exports.addNamed = function (e, t, n, a) {
  return new r.default(e).addNamed(t, n, a);
};
exports.addNamespace = function (e, t, n) {
  return new r.default(e).addNamespace(t, n);
};
exports.addSideEffect = function (e, t, n) {
  return new r.default(e).addSideEffect(t, n);
};
Object.defineProperty(exports, "isModule", {
  enumerable: !0,
  get: function () {
    return a.default;
  }
});
var r = require("./3133/index");
var a = require("./2827");