/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：79
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */Module_920 from /* 920 */"./920"
import * as /* [auto-meaningful-name] */Module_1016 from /* 1016 */"./1016"
import * as /* [auto-meaningful-name] */Module_782 from /* 782 */"../40/782"
function a(e) {
  return function (e) {
    if (Array.isArray(e)) {
      return Module_920.a(e)
    }
  }(e) || Module_1016.a(e) || Module_782.a(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
export default a
