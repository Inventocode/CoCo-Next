module.exports = function (e) {
  if (!e.webpackPolyfill) {
    e.deprecate = function () {};
    e.paths = [];
    if (!e.children) {
      e.children = [];
    }
    Object.defineProperty(e, "loaded", {
      enumerable: !0,
      get: function () {
        return e.l;
      },
      set: function (value) {
        e.l = value;
      }
    });
    Object.defineProperty(e, "id", {
      enumerable: !0,
      get: function () {
        return e.i;
      },
      set: function (value) {
        e.i = value;
      }
    });
    e.webpackPolyfill = 1;
  }
  return e;
};