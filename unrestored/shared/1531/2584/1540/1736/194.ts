(function (t) {
  var n = function (e) {
    return e && e.Math == Math && e;
  };
  module.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || function () {
    return this;
  }() || Function("return this")();
}).call(this, require("../../710/251"));