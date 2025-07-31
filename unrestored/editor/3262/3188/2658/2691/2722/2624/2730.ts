"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function e(t) {
  for (var n = {}, a = {}, s = new Set(), o = [], l = 0; l < t.length; l++) {
    var u = t[l];
    if (u && !(o.indexOf(u) >= 0)) {
      if ((0, r.isAnyTypeAnnotation)(u)) {
        return [u];
      }
      if ((0, r.isFlowBaseAnnotation)(u)) {
        a[u.type] = u;
      } else if ((0, r.isUnionTypeAnnotation)(u)) {
        if (!s.has(u.types)) {
          t = t.concat(u.types);
          s.add(u.types);
        }
      } else if ((0, r.isGenericTypeAnnotation)(u)) {
        var c = i(u.id);
        if (n[c]) {
          var p = n[c];
          if (p.typeParameters) {
            if (u.typeParameters) {
              p.typeParameters.params = e(p.typeParameters.params.concat(u.typeParameters.params));
            }
          } else {
            p = u.typeParameters;
          }
        } else {
          n[c] = u;
        }
      } else {
        o.push(u);
      }
    }
  }
  for (var f = 0, d = Object.keys(a); f < d.length; f++) {
    var h = d[f];
    o.push(a[h]);
  }
  for (var y = 0, m = Object.keys(n); y < m.length; y++) {
    var v = m[y];
    o.push(n[v]);
  }
  return o;
};
var r = require("./2625");
function i(e) {
  return (0, r.isIdentifier)(e) ? e.name : "".concat(e.id.name, ".").concat(i(e.qualification));
}