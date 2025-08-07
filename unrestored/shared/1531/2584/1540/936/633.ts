var r = require("../1742/247/index");
var o = require("../1654/575/index");
var i = require("../1623/300");
var a = r("unscopables");
var s = Array.prototype;
if (undefined == s[a]) {
  i.f(s, a, {
    configurable: true,
    value: o(null)
  });
}
module.exports = function (e) {
  s[a][e] = true;
};