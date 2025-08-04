var r = require("./1262");
module.exports = function (e, t, n) {
  if ("__proto__" == t && r) {
    r(e, t, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    });
  } else {
    e[t] = n;
  }
};