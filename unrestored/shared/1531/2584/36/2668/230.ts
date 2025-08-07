function n(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false;
    r.configurable = true;
    if ("value" in r) {
      r.writable = true;
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