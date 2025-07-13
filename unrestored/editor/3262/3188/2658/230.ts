function n(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1;
    r.configurable = !0;
    if ("value" in r) {
      r.writable = !0;
    }
    Object.defineProperty(e, r.key, r);
  }
}
module.exports = function (e, t, r) {
  if (t) {
    n(e.prototype, t);
  }
  if (r) {
    n(e, r);
  }
  return e;
};