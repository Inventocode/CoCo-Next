var r = require("./1412");
module.exports = function (e, t, n) {
  if ("__proto__" == t && r) {
    r(e, t, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    });
  } else {
    e[t] = n;
  }
};