/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：80
 */

"use strict"

export { a }
import /* [auto-meaningful-name] */$_907 = require("./907")
import /* [auto-meaningful-name] */$_995 = require("./995")
import /* [auto-meaningful-name] */$$_33_771 = require("../33/771")
function a(e) {
  return function (e) {
    if (Array.isArray(e)) {
      return $_907.a(e)
    }
  }(e) || $_995.a(e) || $$_33_771.a(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
export default a
