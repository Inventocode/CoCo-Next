/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：357
 */

var r = require("../1970/529");
var i = require("./1298");
var o = require("./1968/index");
module.exports = function (e) {
  return function () {
    var t;
    var n = r(e);
    if (i()) {
      var a = r(this).constructor;
      t = Reflect.construct(n, arguments, a);
    } else {
      t = n.apply(this, arguments);
    }
    return o(this, t);
  };
};