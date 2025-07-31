var r = require("./1260/index");
var i = require("./1807/index");
var o = require("../835/index");
module.exports = function (e) {
  return o(e) ? r(e) : i(e);
};