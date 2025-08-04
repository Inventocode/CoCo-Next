var r = require("./833/index");
var i = require("../../../1442/1779/638");
module.exports = function (e) {
  if (!i(e)) {
    return !1;
  }
  var t = r(e);
  return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
};