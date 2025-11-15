/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：25
 */

"use strict"

export { a }
import /* [auto-meaningful-name] */$_906 = require("./906")
import /* [auto-meaningful-name] */$_1441 = require("./1441")
import /* [auto-meaningful-name] */$_768 = require("./768")
function a(e) {
  return function (e) {
    if (Array.isArray(e)) {
      return $_906.a(e)
    }
  }(e) || $_1441.a(e) || $_768.a(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
export default a
