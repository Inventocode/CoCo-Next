"use strict";

export default (function e(t) {
  for (var n = {}, i = {}, o = new Set(), s = [], u = 0; u < t.length; u++) {
    var l = t[u];
    if (l && !(s.indexOf(l) >= 0)) {
      if ((0, r.isAnyTypeAnnotation)(l)) {
        return [l];
      }
      if ((0, r.isFlowBaseAnnotation)(l)) {
        i[l.type] = l;
      } else if ((0, r.isUnionTypeAnnotation)(l)) {
        if (!o.has(l.types)) {
          t = t.concat(l.types);
          o.add(l.types);
        }
      } else if ((0, r.isGenericTypeAnnotation)(l)) {
        var p = a(l.id);
        if (n[p]) {
          var f = n[p];
          if (f.typeParameters) {
            if (l.typeParameters) {
              f.typeParameters.params = e(f.typeParameters.params.concat(l.typeParameters.params));
            }
          } else {
            f = l.typeParameters;
          }
        } else {
          n[p] = l;
        }
      } else {
        s.push(l);
      }
    }
  }
  for (var d = 0, c = Object.keys(i); d < c.length; d++) {
    var y = c[d];
    s.push(i[y]);
  }
  for (var T = 0, m = Object.keys(n); T < m.length; T++) {
    var S = m[T];
    s.push(n[S]);
  }
  return s;
});
import * as r from "./2627";
function a(e) {
  return (0, r.isIdentifier)(e) ? e.name : "".concat(e.id.name, ".").concat(a(e.qualification));
}