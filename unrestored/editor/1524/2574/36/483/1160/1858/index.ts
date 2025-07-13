import * as r from "./1859/index";
import * as i from "../../1440/1096";
import * as o from "./1861/index";
var a = /^[-+]0x[0-9a-f]+$/i;
var s = /^0b[01]+$/i;
var c = /^0o[0-7]+$/i;
var u = parseInt;
module.exports = function (e) {
  if ("number" == typeof e) {
    return e;
  }
  if (o(e)) {
    return NaN;
  }
  if (i(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = i(t) ? t + "" : t;
  }
  if ("string" != typeof e) {
    return 0 === e ? e : +e;
  }
  e = r(e);
  var n = s.test(e);
  return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e;
};