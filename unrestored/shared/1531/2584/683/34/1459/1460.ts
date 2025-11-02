/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1460
 */

"use strict"

exports.a = function (e) {
  var this$constructor = this.constructor
  return this.then(function (n) {
    return this$constructor.resolve(e()).then(function () {
      return n
    })
  }, function (n) {
    return this$constructor.resolve(e()).then(function () {
      return this$constructor.reject(n)
    })
  })
}
