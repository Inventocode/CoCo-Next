/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1032
 */

"use strict"

var r
export { o as a }
var i = new Uint8Array(16)
function o() {
  if (!r && !(r = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) {
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported")
  }
  return r(i)
}
export default o
