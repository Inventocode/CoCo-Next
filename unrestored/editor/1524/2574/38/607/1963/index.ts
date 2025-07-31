var r = require("../../../../../3262/3188/2658/2679/529");
var i = require("../../../../../3262/3188/2658/2679/356/1098");
var o = require("./1964");
var a = require("./1965");
function s(t) {
  var n = "function" === typeof Map ? new Map() : void 0;
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
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    });
    return i(t, e);
  };
  return s(t);
}
module.exports = s;