"use strict";

(function (e, r) {
  function i() {
    return "[object process]" === Object.prototype.toString.call("undefined" !== typeof e ? e : 0);
  }
  function o(e, t) {
    return e.require(t);
  }
  function a(e) {
    var t;
    try {
      t = o(r, e);
    } catch (i) {}
    try {
      var n = o(r, "process").cwd;
      t = o(r, n() + "/node_modules/" + e);
    } catch (i) {}
    return t;
  }
  Object.defineProperty(exports, "b", {
    get: function () {
      return i;
    },
    enumerable: true
  });
  Object.defineProperty(exports, "a", {
    get: function () {
      return o;
    },
    enumerable: true
  });
  Object.defineProperty(exports, "c", {
    get: function () {
      return a;
    },
    enumerable: true
  });
}).call(this, require("../../710/368"), require("../../155/1167/574")(module));