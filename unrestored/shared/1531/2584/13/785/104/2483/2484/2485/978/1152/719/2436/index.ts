var r = require("../../../../../../../../../254/2513/2514/2515/2516/1150");
var i = require("./2437/index");
var o = require("../../../../../../../../../254/2528/2529/475");
var a = require("../../../1397");
var s = /^\[object .+?Constructor\]$/;
var c = Function.prototype;
var u = Object.prototype;
var l = c.toString;
var f = u.hasOwnProperty;
var d = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
module.exports = function (e) {
  return !(!o(e) || i(e)) && (r(e) ? d : s).test(a(e));
};