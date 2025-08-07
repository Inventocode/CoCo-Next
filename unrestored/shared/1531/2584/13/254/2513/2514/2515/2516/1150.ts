var r = require("../../../../../785/104/2411/1395/718/index");
var i = require("../../../../2533/1420/475");
module.exports = function (e) {
  if (!i(e)) {
    return false;
  }
  var t = r(e);
  return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
};