var r = require("../../../../../785/104/2411/2412/718/index");
var i = require("../../../../2528/2529/475");
module.exports = function (e) {
  if (!i(e)) {
    return !1;
  }
  var t = r(e);
  return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
};