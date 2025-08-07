var r = require("./529");
var i = require("./1099");
var o = require("./1971");
var a = require("./1972");
function s(t) {
  var n = "function" === typeof Map ? new Map() : undefined;
  module.exports = s = function (e) {
    if (null === e || !o(e)) {
      return e;
    }
    if ("function" !== typeof e) {
      throw new TypeError("Super expression must either be null or a function");
    }
    if ("undefined" !== typeof n) {
      if (n.has(e)) {
        return n.get(e);
      }
      n.set(e, t);
    }
    function t() {
      return a(e, arguments, r(this).constructor);
    }
    t.prototype = Object.create(e.prototype, {
      constructor: {
        value: t,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return i(t, e);
  };
  return s(t);
}
module.exports = s;