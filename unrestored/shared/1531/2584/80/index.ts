/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：80
 */

"use strict";

export { a };
import r = require("./907");
import i = require("./995");
import o = require("../33/771");
function a(e) {
  return function (e) {
    if (Array.isArray(e)) {
      return r.a(e);
    }
  }(e) || i.a(e) || o.a(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
export default a;