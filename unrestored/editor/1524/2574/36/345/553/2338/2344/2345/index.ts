import * as r from "../../761";
import * as i from "./2346";
exports.mul = function (e, t) {
  for (var n = r.alloc(e.length + t.length - 1), o = 0; o < e.length; o++) {
    for (var a = 0; a < t.length; a++) {
      n[o + a] ^= i.mul(e[o], t[a]);
    }
  }
  return n;
};
exports.mod = function (e, t) {
  for (var n = r.from(e); n.length - t.length >= 0;) {
    for (var o = n[0], a = 0; a < t.length; a++) {
      n[a] ^= i.mul(t[a], o);
    }
    for (var s = 0; s < n.length && 0 === n[s];) {
      s++;
    }
    n = n.slice(s);
  }
  return n;
};
exports.generateECPolynomial = function (e) {
  for (var n = r.from([1]), o = 0; o < e; o++) {
    n = t.mul(n, [1, i.exp(o)]);
  }
  return n;
};