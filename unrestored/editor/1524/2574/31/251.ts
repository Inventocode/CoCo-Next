var n;
n = function () {
  return this;
}();
try {
  n = n || new Function("return this")();
} catch (r) {
  if ("object" === typeof window) {
    n = window;
  }
}
module.exports = n;