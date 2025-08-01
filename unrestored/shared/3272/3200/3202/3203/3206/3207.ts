"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  for (var n = e.value.split(/\r\n|\n|\r/), a = 0, i = 0; i < n.length; i++) {
    if (n[i].match(/[^ \t]/)) {
      a = i;
    }
  }
  for (var o = "", s = 0; s < n.length; s++) {
    var u = n[s];
    var l = 0 === s;
    var p = s === n.length - 1;
    var f = s === a;
    var d = u.replace(/\t/g, " ");
    if (!l) {
      d = d.replace(/^[ ]+/, "");
    }
    if (!p) {
      d = d.replace(/[ ]+$/, "");
    }
    if (d) {
      if (!f) {
        d += " ";
      }
      o += d;
    }
  }
  if (o) {
    t.push((0, r.stringLiteral)(o));
  }
};
var r = require("../2642/index");