/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1747
 */

"use strict";

require("./1623/86")({
  target: "URL",
  proto: true,
  enumerable: true
}, {
  toJSON: function () {
    return URL.prototype.toString.call(this);
  }
});