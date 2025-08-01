"use strict";

var r = require("../1739/938");
var o = require("./1229");
module.exports = r("Set", function (e) {
  return function () {
    return e(this, arguments.length ? arguments[0] : void 0);
  };
}, o);