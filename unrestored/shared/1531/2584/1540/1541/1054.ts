var r = require("../1734/629/index");
var o = require("../1736/167");
module.exports = !!Object.getOwnPropertySymbols && !o(function () {
  var e = Symbol();
  return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41;
});