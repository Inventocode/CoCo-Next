module.exports = function (e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  } else {
    e[t] = n;
  }
  return e;
};