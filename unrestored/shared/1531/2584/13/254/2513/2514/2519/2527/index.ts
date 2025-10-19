/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2527
 */

var r = require("./851");
var i = require("./762/index");
var o = require("./1144");
var a = require("../../../../2533/1420/475");
module.exports = function (e, t, n) {
  if (!a(n)) {
    return false;
  }
  var s = typeof t;
  return !!("number" == s ? i(n) && o(t, n.length) : "string" == s && t in n) && r(n[t], e);
};