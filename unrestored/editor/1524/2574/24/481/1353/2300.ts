module.exports = function (e, t) {
  for (var n = [], r = (t = t || 0) || 0; r < e.length; r++) {
    n[r - t] = e[r];
  }
  return n;
};