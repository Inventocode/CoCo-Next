"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
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