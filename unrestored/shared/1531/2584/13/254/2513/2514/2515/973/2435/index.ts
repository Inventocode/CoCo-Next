/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2435
 */

var r = require("../974/index");
var i = require("../../../../../../785/104/2483/2484/2485/978/1152");
var o = require("./1153/index");
module.exports = function (e, t) {
  var n = this.__data__;
  if (n instanceof r) {
    var a = n.__data__;
    if (!i || a.length < 199) {
      a.push([e, t]);
      this.size = ++n.size;
      return this;
    }
    n = this.__data__ = new o(a);
  }
  n.set(e, t);
  this.size = n.size;
  return this;
};