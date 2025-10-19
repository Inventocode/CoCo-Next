/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2446
 */

var r = require("./976");
module.exports = function (e, t) {
  var n = this.__data__;
  this.size += this.has(e) ? 0 : 1;
  n[e] = r && undefined === t ? "__lodash_hash_undefined__" : t;
  return this;
};