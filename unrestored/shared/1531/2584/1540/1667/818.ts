var r = require("../1633/167");
var o = /#|\.prototype\./;
var i = function (e, t) {
  var n = s[a(e)];
  return n == l || n != c && ("function" == typeof t ? r(t) : !!t);
};
var a = i.normalize = function (e) {
  return String(e).replace(o, ".").toLowerCase();
};
var s = i.data = {};
var c = i.NATIVE = "N";
var l = i.POLYFILL = "P";
module.exports = i;