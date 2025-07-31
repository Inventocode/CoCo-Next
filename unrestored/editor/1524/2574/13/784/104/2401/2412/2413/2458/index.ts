var r = require("./1391/index");
var i = require("./2459");
var o = require("./2465/index");
var a = require("../2468/1152");
var s = require("./1398");
var c = require("./1399");
var u = require("../2468/979");
module.exports = function (e, t) {
  return a(e) && s(t) ? c(u(e), t) : function (n) {
    var a = i(n, e);
    return void 0 === a && a === t ? o(n, e) : r(t, a, 3);
  };
};