"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  for (var n = e.value.split(/\r\n|\n|\r/), i = 0, a = 0; a < n.length; a++) {
    if (n[a].match(/[^ \t]/)) {
      i = a;
    }
  }
  for (var s = "", o = 0; o < n.length; o++) {
    var l = n[o];
    var u = 0 === o;
    var c = o === n.length - 1;
    var p = o === i;
    var f = l.replace(/\t/g, " ");
    if (!u) {
      f = f.replace(/^[ ]+/, "");
    }
    if (!c) {
      f = f.replace(/[ ]+$/, "");
    }
    if (f) {
      if (!p) {
        f += " ";
      }
      s += f;
    }
  }
  if (s) {
    t.push((0, r.stringLiteral)(s));
  }
};
var r = require("../2639/index");