var r = require("../1970/529");
var i = require("./1298");
var o = require("./1968/index");
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