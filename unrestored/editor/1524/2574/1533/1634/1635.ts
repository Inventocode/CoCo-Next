"use strict";

var r = require("./1064");
var o = require("../1250/824");
module.exports = r ? {}.toString : function () {
  return "[object " + o(this) + "]";
};