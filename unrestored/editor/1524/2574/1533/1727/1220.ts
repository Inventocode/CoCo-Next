var n = Math.floor;
var r = function (e, t) {
  for (var n, r, o = e.length, i = 1; i < o;) {
    for (r = i, n = e[i]; r && t(e[r - 1], n) > 0;) {
      e[r] = e[--r];
    }
    if (r !== i++) {
      e[r] = n;
    }
  }
  return e;
};
var o = function (e, t, n) {
  for (var r = e.length, o = t.length, i = 0, a = 0, s = []; i < r || a < o;) {
    if (i < r && a < o) {
      s.push(n(e[i], t[a]) <= 0 ? e[i++] : t[a++]);
    } else {
      s.push(i < r ? e[i++] : t[a++]);
    }
  }
  return s;
};
module.exports = function e(t, i) {
  var a = t.length;
  var s = n(a / 2);
  return a < 8 ? r(t, i) : o(e(t.slice(0, s), i), e(t.slice(s), i), i);
};