import * as r from "./1791/955";
var i = Object.prototype.hasOwnProperty;
module.exports = function (e) {
  var t = this.__data__;
  if (r) {
    var n = t[e];
    return "__lodash_hash_undefined__" === n ? void 0 : n;
  }
  return i.call(t, e) ? t[e] : void 0;
};