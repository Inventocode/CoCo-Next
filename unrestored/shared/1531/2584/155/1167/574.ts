module.exports = function (e) {
  if (!e.webpackPolyfill) {
    var t = Object.create(e);
    if (!t.children) {
      t.children = [];
    }
    Object.defineProperty(t, "loaded", {
      enumerable: true,
      get: function () {
        return t.l;
      }
    });
    Object.defineProperty(t, "id", {
      enumerable: true,
      get: function () {
        return t.i;
      }
    });
    Object.defineProperty(t, "exports", {
      enumerable: true
    });
    t.webpackPolyfill = 1;
  }
  return t;
};