"use strict";

var r = require("./588");
var i = function () {
  function t() {}
  t.setGridSampler = function (e) {
    t.gridSampler = e;
  };
  t.getInstance = function () {
    return t.gridSampler;
  };
  t.gridSampler = new r.a();
  return t;
}();
exports.a = i;