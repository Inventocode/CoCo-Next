var r = require("./1099");
var i = require("../357/1298");
function o(t, n, a) {
  if (i()) {
    module.exports = o = Reflect.construct;
  } else {
    module.exports = o = function (e, t, n) {
      var i = [null];
      i.push.apply(i, t);
      var o = new (Function.bind.apply(e, i))();
      if (n) {
        r(o, n.prototype);
      }
      return o;
    };
  }
  return o.apply(null, arguments);
}
module.exports = o;