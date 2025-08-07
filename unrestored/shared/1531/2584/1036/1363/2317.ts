"use strict";

function r() {
  if (!r.quiet) {
    for (var e = require("../../206/776/2210/1108/index"), t = e.inspect, i = function (e) {
        return "string" === typeof e ? e : t(e, {
          depth: 10,
          colors: true
        });
      }, o = Array(r.prefix).fill("  ").join(""), a = arguments.length, s = new Array(a), c = 0; c < a; c++) {
      s[c] = arguments[c];
    }
    console.log(o + s.map(i).join(" "));
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = r;
r.quiet = true;
r.prefix = 0;