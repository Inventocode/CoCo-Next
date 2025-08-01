var r = require("../../../../../../1444/836/1086");
var i = require("./1793/index");
var o = require("../../../../638");
var a = require("../../../1261");
var s = /^\[object .+?Constructor\]$/;
var c = Function.prototype;
var u = Object.prototype;
var l = c.toString;
var f = u.hasOwnProperty;
var d = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
module.exports = function (e) {
  return !(!o(e) || i(e)) && (r(e) ? d : s).test(a(e));
};