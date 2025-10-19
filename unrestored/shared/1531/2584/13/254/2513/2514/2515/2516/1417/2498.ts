/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2498
 */

var r = require("../../../../../2533/1420/475");
var i = Object.create;
var o = function () {
  function e() {}
  return function (t) {
    if (!r(t)) {
      return {};
    }
    if (i) {
      return i(t);
    }
    e.prototype = t;
    var n = new e();
    e.prototype = undefined;
    return n;
  };
}();
module.exports = o;