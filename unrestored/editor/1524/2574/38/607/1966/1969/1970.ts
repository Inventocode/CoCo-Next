exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;
exports.search = function (e, n, r, i) {
  if (0 === n.length) {
    return -1;
  }
  var o = function e(n, r, i, o, a, s) {
    var c = Math.floor((r - n) / 2) + n;
    var u = a(i, o[c], !0);
    return 0 === u ? c : u > 0 ? r - c > 1 ? e(c, r, i, o, a, s) : s == t.LEAST_UPPER_BOUND ? r < o.length ? r : -1 : c : c - n > 1 ? e(n, c, i, o, a, s) : s == t.LEAST_UPPER_BOUND ? c : n < 0 ? -1 : n;
  }(-1, n.length, e, n, r, i || t.GREATEST_LOWER_BOUND);
  if (o < 0) {
    return -1;
  }
  for (; o - 1 >= 0 && 0 === r(n[o], n[o - 1], !0);) {
    --o;
  }
  return o;
};