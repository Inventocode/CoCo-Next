var r = require("./1398/index");
var i = require("./2469/index");
var o = require("./2475/index");
var a = require("./1155");
var s = require("./1405");
var c = require("./1406");
var u = require("./980");
module.exports = function (e, t) {
  return a(e) && s(t) ? c(u(e), t) : function (n) {
    var a = i(n, e);
    return undefined === a && a === t ? o(n, e) : r(t, a, 3);
  };
};