"use strict";

export { o as a };
import * as r from "./10/index";
function o(e) {
  for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      line: 1,
      column: 0
    }, n = t.line, o = t.column, i = 0, a = 1; i >= 0 && i < e.length && a < n;) {
    if ((i = e.indexOf("\n", i + 1)) >= 0 && "\r" === e.charAt(i)) {
      i++;
    }
    a++;
  }
  i = Math.min(i + o + 2, e.length - 1);
  for (var s = ""; i >= 0;) {
    var c = e.charAt(i);
    if ("/" === c && "*" === s) {
      break;
    }
    s = c;
    i--;
  }
  var l = {};
  if (-1 === i) {
    return l;
  }
  var u = /\/\* ([^/*]+) \*\//.exec(e.substr(i));
  if (u) {
    var d = u[1];
    d.split(";").forEach(function (e) {
      var t = e.split("=");
      var n = Object(r.a)(t, 2);
      var o = n[0];
      var i = n[1];
      if (o && i) {
        l[o] = i;
      }
    });
  }
  return l;
}