"use strict";

import * as r from "../../../../../../2873/2721/805/index";
export default (function (e) {
  for (var t = {}, n = {}, a = new Set(), s = [], o = 0; o < e.length; o++) {
    var l = e[o];
    if (l && !(s.indexOf(l) >= 0)) {
      if ((0, i.isTSAnyKeyword)(l)) {
        return [l];
      }
      if ((0, i.isTSBaseType)(l)) {
        n[l.type] = l;
      } else {
        if ((0, i.isTSUnionType)(l)) {
          if (!a.has(l.types)) {
            e.push.apply(e, r(l.types));
            a.add(l.types);
          }
        } else {
          s.push(l);
        }
      }
    }
  }
  for (var u = 0, c = Object.keys(n); u < c.length; u++) {
    var p = c[u];
    s.push(n[p]);
  }
  for (var f = 0, d = Object.keys(t); f < d.length; f++) {
    var h = d[f];
    s.push(t[h]);
  }
  return s;
});
import * as i from "../2625";