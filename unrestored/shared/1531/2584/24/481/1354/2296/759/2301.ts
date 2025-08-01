module.exports = function (e, t, n) {
  var r = e.byteLength;
  t = t || 0;
  n = n || r;
  if (e.slice) {
    return e.slice(t, n);
  }
  if (t < 0) {
    t += r;
  }
  if (n < 0) {
    n += r;
  }
  if (n > r) {
    n = r;
  }
  if (t >= r || t >= n || 0 === r) {
    return new ArrayBuffer(0);
  }
  for (var i = new Uint8Array(e), o = new Uint8Array(n - t), a = t, s = 0; a < n; a++, s++) {
    o[s] = i[a];
  }
  return o.buffer;
};