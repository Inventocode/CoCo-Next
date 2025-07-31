"use strict";

var r = require("../../../../2873/2721/805/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  for (var t = {}, n = {}, i = new Set(), o = [], s = 0; s < e.length; s++) {
    var u = e[s];
    if (u && !(o.indexOf(u) >= 0)) {
      if ((0, a.isTSAnyKeyword)(u)) {
        return [u];
      }
      if ((0, a.isTSBaseType)(u)) {
        n[u.type] = u;
      } else {
        if ((0, a.isTSUnionType)(u)) {
          if (!i.has(u.types)) {
            e.push.apply(e, r(u.types));
            i.add(u.types);
          }
        } else {
          o.push(u);
        }
      }
    }
  }
  for (var l = 0, p = Object.keys(n); l < p.length; l++) {
    var f = p[l];
    o.push(n[f]);
  }
  for (var d = 0, c = Object.keys(t); d < c.length; d++) {
    var y = c[d];
    o.push(t[y]);
  }
  return o;
};
var a = require("../2628");