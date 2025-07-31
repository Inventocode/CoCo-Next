"use strict";

var r = require("../1731/937");
var o = require("./1226");
module.exports = r("Map", function (e) {
  return function () {
    return e(this, arguments.length ? arguments[0] : void 0);
  };
}, o);