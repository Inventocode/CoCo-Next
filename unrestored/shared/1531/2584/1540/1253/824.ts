/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：824
 */

var r = require("./825");
var o = require("../936/823");
var i = require("../1742/247/index")("iterator");
module.exports = function (e) {
  if (undefined != e) {
    return e[i] || e["@@iterator"] || o[r(e)];
  }
};