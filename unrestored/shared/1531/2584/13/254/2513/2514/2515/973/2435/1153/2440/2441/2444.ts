var r = require("./2446/976");
var i = Object.prototype.hasOwnProperty;
module.exports = function (e) {
  var t = this.__data__;
  if (r) {
    var n = t[e];
    return "__lodash_hash_undefined__" === n ? undefined : n;
  }
  return i.call(t, e) ? t[e] : undefined;
};