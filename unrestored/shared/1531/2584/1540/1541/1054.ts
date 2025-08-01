var r = require("../1734/629");
var o = require("../1633/167");
module.exports = !!Object.getOwnPropertySymbols && !o(function () {
  var e = Symbol();
  return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41;
});