/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：25
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */$_919 from "./919"
import * as /* [auto-meaningful-name] */$_1482 from "./1482"
import * as /* [auto-meaningful-name] */$_779 from "./779"
function a(e) {
  return function (e) {
    if (Array.isArray(e)) {
      return $_919.a(e)
    }
  }(e) || $_1482.a(e) || $_779.a(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
export default a
