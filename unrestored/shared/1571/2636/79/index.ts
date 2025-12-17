/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：79
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */$_920 from "./920"
import * as /* [auto-meaningful-name] */$_1016 from "./1016"
import * as /* [auto-meaningful-name] */$$_40_782 from "../40/782"
function a(e) {
  return function (e) {
    if (Array.isArray(e)) {
      return $_920.a(e)
    }
  }(e) || $_1016.a(e) || $$_40_782.a(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
export default a
