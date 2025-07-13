import * as r from "./194";
import * as o from "../1735/422";
import * as i from "./332";
import * as a from "../1626/86/1055";
import * as s from "../1639/1057";
import * as c from "./423/index";
var l = c.get;
var u = c.enforce;
var d = String(String).split("String");
(module.exports = function (e, t, n, s) {
  var c;
  var l = !!s && !!s.unsafe;
  var p = !!s && !!s.enumerable;
  var f = !!s && !!s.noTargetGet;
  if ("function" == typeof n) {
    if (!("string" != typeof t || i(n, "name"))) {
      o(n, "name", t);
    }
    if (!(c = u(n)).source) {
      c.source = d.join("string" == typeof t ? t : "");
    }
  }
  if (e !== r) {
    if (l) {
      if (!f && e[t]) {
        p = !0;
      }
    } else {
      delete e[t];
    }
    if (p) {
      e[t] = n;
    } else {
      o(e, t, n);
    }
  } else {
    if (p) {
      e[t] = n;
    } else {
      a(t, n);
    }
  }
})(Function.prototype, "toString", function () {
  return "function" == typeof this && l(this).source || s(this);
});