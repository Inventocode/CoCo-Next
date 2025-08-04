function n(t) {
  if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) {
    module.exports = n = function (e) {
      return typeof e;
    };
  } else {
    module.exports = n = function (e) {
      return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
  }
  return n(t);
}
module.exports = n;