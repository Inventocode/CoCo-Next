import * as r from "../1738/194";
import * as o from "../1735/1248";
import * as i from "./1734";
import * as a from "../1735/422";
for (var s in o) {
  var c = r[s];
  var l = c && c.prototype;
  if (l && l.forEach !== i) {
    try {
      a(l, "forEach", i);
    } catch (u) {
      l.forEach = i;
    }
  }
}