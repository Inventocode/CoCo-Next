module.exports = function (e) {
  if (!e.webpackPolyfill) {
    e.deprecate = function () {};
    e.paths = [];
    if (!e.children) {
      e.children = [];
    }
    Object.defineProperty(e, "loaded", {
      enumerable: true,
      get: function () {
        return e.l;
      }
    });
    Object.defineProperty(e, "id", {
      enumerable: true,
      get: function () {
        return e.i;
      }
    });
    e.webpackPolyfill = 1;
  }
  return e;
};