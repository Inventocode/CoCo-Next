"use strict";

var n = require("./588");
var o = function () {
  function t() {}
  t.setGridSampler = function (e) {
    t.gridSampler = e;
  };
  t.getInstance = function () {
    return t.gridSampler;
  };
  t.gridSampler = new n.a();
  return t;
}();
exports.a = o;