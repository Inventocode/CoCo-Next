/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2430
 */

var r = require("./2427/975");
module.exports = function (e, t) {
  var n = this.__data__;
  var i = r(n, e);
  if (i < 0) {
    ++this.size;
    n.push([e, t]);
  } else {
    n[i][1] = t;
  }
  return this;
};