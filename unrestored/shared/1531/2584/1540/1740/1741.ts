/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1741
 */

"use strict";

var r = require("../1733/399").forEach;
var o = require("../1568/708")("forEach");
module.exports = o ? [].forEach : function (e) {
  return r(this, e, arguments.length > 1 ? arguments[1] : undefined);
};