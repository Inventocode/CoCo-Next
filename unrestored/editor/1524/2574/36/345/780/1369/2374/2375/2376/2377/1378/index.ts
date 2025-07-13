"use strict";

(function (t) {
  var r = t.Symbol;
  var i = require("./2378");
  module.exports = function () {
    return "function" === typeof r && "function" === typeof Symbol && "symbol" === typeof r("foo") && "symbol" === typeof Symbol("bar") && i();
  };
}).call(this, require("../../../../../../../../../31/251"));