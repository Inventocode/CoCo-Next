import * as r from "../../../../../../../../../254/2503/2504/2505/2506/1147";
import * as i from "./2427/index";
import * as o from "../../../../../../../../../254/2518/2519/475";
import * as a from "../../../1390";
var s = /^\[object .+?Constructor\]$/;
var c = Function.prototype;
var u = Object.prototype;
var l = c.toString;
var f = u.hasOwnProperty;
var h = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
module.exports = function (e) {
  return !(!o(e) || i(e)) && (r(e) ? h : s).test(a(e));
};