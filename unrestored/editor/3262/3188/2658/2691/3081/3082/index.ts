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
exports.addNamed = function (e, t, n, i) {
  return new r.default(e).addNamed(t, n, i);
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
    return i.default;
  }
});
var r = require("./3083/index");
var i = require("./2789");