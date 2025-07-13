import * as r from "../1727/629";
import * as o from "../1626/167";
module.exports = !!Object.getOwnPropertySymbols && !o(function () {
  var e = Symbol();
  return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41;
});