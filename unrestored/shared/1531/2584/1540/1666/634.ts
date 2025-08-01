var r = require("./241");
var o = require("./1221");
module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
  var e;
  var t = !1;
  var n = {};
  try {
    (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []);
    t = n instanceof Array;
  } catch (i) {}
  return function (n, i) {
    r(n);
    o(i);
    if (t) {
      e.call(n, i);
    } else {
      n.__proto__ = i;
    }
    return n;
  };
}() : void 0);