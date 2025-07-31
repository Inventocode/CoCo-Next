var r = require("../529");
var i = require("./1295");
var o = require("./1961/index");
module.exports = function (e) {
  return function () {
    var t;
    var n = r(e);
    if (i()) {
      var a = r(this).constructor;
      t = Reflect.construct(n, arguments, a);
    } else {
      t = n.apply(this, arguments);
    }
    return o(this, t);
  };
};