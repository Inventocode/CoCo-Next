/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：302
 */

"use strict";

export { o as press };
import r = require("animejs");
function o(e) {
  return [r.default({
    targets: "#".concat(e),
    scale: [{
      value: .9,
      duration: 100
    }, {
      value: 1,
      duration: 200
    }]
  })];
}