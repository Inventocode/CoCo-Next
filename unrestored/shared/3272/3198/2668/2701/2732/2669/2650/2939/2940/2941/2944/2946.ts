function n(e, t, n) {
  var r = e[t];
  e[t] = e[n];
  e[n] = r;
}
function r(e, t, i, a) {
  if (i < a) {
    var s = i - 1;
    n(e, (c = i, p = a, Math.round(c + Math.random() * (p - c))), a);
    for (var o = e[a], l = i; l < a; l++) {
      if (t(e[l], o) <= 0) {
        n(e, s += 1, l);
      }
    }
    n(e, s + 1, l);
    var u = s + 1;
    r(e, t, i, u - 1);
    r(e, t, u + 1, a);
  }
  var c;
  var p;
}
exports.quickSort = function (e, t) {
  r(e, t, 0, e.length - 1);
};