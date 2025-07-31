var r = require("./2414/index");
var i = require("./2458/index");
var o = require("../../1139/1387/971");
var a = require("../446");
var s = require("./2468/index");
module.exports = function (e) {
  return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? a(e) ? i(e[0], e[1]) : r(e) : s(e);
};