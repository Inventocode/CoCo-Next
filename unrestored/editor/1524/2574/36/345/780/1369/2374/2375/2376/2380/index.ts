"use strict";

var r = require("./1380");
var i = require("./2381");
var o = i(r("String.prototype.indexOf"));
module.exports = function (e, t) {
  var n = r(e, !!t);
  return "function" === typeof n && o(e, ".prototype.") > -1 ? i(n) : n;
};