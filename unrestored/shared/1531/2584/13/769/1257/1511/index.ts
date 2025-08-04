var r = require("./1761");
var i = require("./1762");
var o = require("./1763/index");
var a = require("./1764");
module.exports = function (e) {
  return r(e) || i(e) || o(e) || a();
};