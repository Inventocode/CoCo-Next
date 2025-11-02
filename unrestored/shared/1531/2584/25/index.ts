/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：25
 */

"use strict"

export { a }
import r = require("./906");
import i = require("./1441");
import o = require("../10/768");
function a(e) {
  return function (e) {
    if (Array.isArray(e)) {
      return r.a(e)
    }
  }(e) || i.a(e) || o.a(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
export default a
