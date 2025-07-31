var r = require("./2420/974");
var i = Array.prototype.splice;
module.exports = function (e) {
  var t = this.__data__;
  var n = r(t, e);
  return !(n < 0) && (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, !0);
};