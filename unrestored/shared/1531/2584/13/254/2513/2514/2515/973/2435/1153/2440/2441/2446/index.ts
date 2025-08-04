var r = require("./976");
module.exports = function (e, t) {
  var n = this.__data__;
  this.size += this.has(e) ? 0 : 1;
  n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t;
  return this;
};