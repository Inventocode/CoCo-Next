"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = function () {
  function e() {}
  e.of = function (t, n) {
    var r = new e();
    r.bindings = t;
    r.middleware = n;
    return r;
  };
  return e;
}();
exports.ContainerSnapshot = r;