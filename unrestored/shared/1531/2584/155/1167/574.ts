module.exports = function (e) {
  if (!e.webpackPolyfill) {
    var t = Object.create(e);
    if (!t.children) {
      t.children = [];
    }
    Object.defineProperty(t, "loaded", {
      enumerable: !0,
      get: function () {
        return t.l;
      },
      set: function (value) {
        t.l = value;
      }
    });
    Object.defineProperty(t, "id", {
      enumerable: !0,
      get: function () {
        return t.i;
      },
      set: function (value) {
        t.i = value;
      }
    });
    Object.defineProperty(t, "exports", {
      enumerable: !0
    });
    t.webpackPolyfill = 1;
  }
  return t;
};