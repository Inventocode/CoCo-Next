"use strict";

var r = require("./1065");
var o = require("../1253/825");
module.exports = r ? {}.toString : function () {
  return "[object " + o(this) + "]";
};