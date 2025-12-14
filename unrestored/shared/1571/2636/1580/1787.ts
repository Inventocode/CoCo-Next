/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1787
 */

"use strict"

require("./1705/86/index")({
  target: "URL",
  proto: true,
  enumerable: true
}, {
  toJSON: function () {
    return URL.prototype.toString.call(this)
  }
})
