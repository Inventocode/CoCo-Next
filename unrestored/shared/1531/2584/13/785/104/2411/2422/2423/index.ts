var r = require("./2424/index");
var i = require("./2468/index");
var o = require("../../../2503/1142/1394/972");
var a = require("../../2412/446");
var s = require("./2478/index");
module.exports = function (e) {
  return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? a(e) ? i(e[0], e[1]) : r(e) : s(e);
};