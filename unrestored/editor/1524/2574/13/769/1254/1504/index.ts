var r = require("./1754/index");
var i = require("./1755");
var o = require("./1756");
var a = require("./1757");
module.exports = function (e) {
  return r(e) || i(e) || o(e) || a();
};