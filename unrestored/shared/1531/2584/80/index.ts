/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：80
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */$_907 from "./907"
import * as /* [auto-meaningful-name] */$_995 from "./995"
import * as /* [auto-meaningful-name] */$$_33_771 from "../33/771"
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
