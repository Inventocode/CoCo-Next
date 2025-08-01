var r = require("./1962");
var i = require("./1963");
var o = require("./1098/index");
var a = require("./1964");
module.exports = function (e, t) {
  return r(e) || i(e, t) || o(e, t) || a();
};