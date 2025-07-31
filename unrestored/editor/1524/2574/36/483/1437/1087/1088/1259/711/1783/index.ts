var r = require("../../../../../835/1085/index");
var i = require("./1786/index");
var o = require("../../../../../../1436/1830/638");
var a = require("../../../../../../1435/1772/959/1258");
var s = /^\[object .+?Constructor\]$/;
var c = Function.prototype;
var u = Object.prototype;
var l = c.toString;
var f = u.hasOwnProperty;
var h = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
module.exports = function (e) {
  return !(!o(e) || i(e)) && (r(e) ? h : s).test(a(e));
};