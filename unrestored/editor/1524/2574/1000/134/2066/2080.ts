"use strict";

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
export { r as ContainerSnapshot };