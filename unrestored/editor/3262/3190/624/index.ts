var r = require("./1955");
var i = require("./1956");
var o = require("./1097/index");
var a = require("./1957");
module.exports = function (e, t) {
  return r(e) || i(e, t) || o(e, t) || a();
};