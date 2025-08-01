module.exports = function (e, t) {
  for (var n = 0, r = t.length, o = new e(r); r > n;) {
    o[n] = t[n++];
  }
  return o;
};