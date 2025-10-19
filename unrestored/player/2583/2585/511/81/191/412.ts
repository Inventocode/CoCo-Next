/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：412
 */

"use strict";

var r = require("../63");
var i = function () {
  function t() {}
  t.prototype.exp = function (t) {
    return this.expTable[t];
  };
  t.prototype.log = function (t) {
    if (0 === t) {
      throw new r.a();
    }
    return this.logTable[t];
  };
  t.addOrSubtract = function (t, e) {
    return t ^ e;
  };
  return t;
}();
exports.a = i;