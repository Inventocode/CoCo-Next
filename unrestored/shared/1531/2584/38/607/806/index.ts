var r = require("./1965/index");
var i = require("./1966");
var o = require("./1098");
var a = require("./1967");
module.exports = function (e) {
  return r(e) || i(e) || o(e) || a();
};