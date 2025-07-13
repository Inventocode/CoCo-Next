exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;
exports.search = function (e, n, r, i) {
  if (0 === n.length) {
    return -1;
  }
  var a = function e(n, r, i, a, s, o) {
    var l = Math.floor((r - n) / 2) + n;
    var u = s(i, a[l], !0);
    return 0 === u ? l : u > 0 ? r - l > 1 ? e(l, r, i, a, s, o) : o == t.LEAST_UPPER_BOUND ? r < a.length ? r : -1 : l : l - n > 1 ? e(n, l, i, a, s, o) : o == t.LEAST_UPPER_BOUND ? l : n < 0 ? -1 : n;
  }(-1, n.length, e, n, r, i || t.GREATEST_LOWER_BOUND);
  if (a < 0) {
    return -1;
  }
  for (; a - 1 >= 0 && 0 === r(n[a], n[a - 1], !0);) {
    --a;
  }
  return a;
};