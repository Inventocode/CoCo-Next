import * as r from "../1738/194";
import * as o from "./1248";
import * as i from "../935/index";
import * as a from "./422";
import * as s from "./247/index";
var c = s("iterator");
var l = s("toStringTag");
var u = i.values;
for (var d in o) {
  var p = r[d];
  var f = p && p.prototype;
  if (f) {
    if (f[c] !== u) {
      try {
        a(f, c, u);
      } catch (m) {
        f[c] = u;
      }
    }
    if (f[l] || a(f, l, d), o[d]) {
      for (var h in i) if (f[h] !== i[h]) {
        try {
          a(f, h, i[h]);
        } catch (m) {
          f[h] = i[h];
        }
      }
    }
  }
}