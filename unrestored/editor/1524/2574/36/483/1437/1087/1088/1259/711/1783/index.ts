import * as r from "../../../../../835/1085/index";
import * as i from "./1786/index";
import * as o from "../../../../../../1436/1830/638";
import * as a from "../../../../../../1435/1772/959/1258";
var s = /^\[object .+?Constructor\]$/;
var c = Function.prototype;
var u = Object.prototype;
var l = c.toString;
var f = u.hasOwnProperty;
var h = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
module.exports = function (e) {
  return !(!o(e) || i(e)) && (r(e) ? h : s).test(a(e));
};