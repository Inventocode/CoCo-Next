/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2526
 */

var date$now = Date.now
module.exports = function (e) {
  var t = 0
  var r = 0
  return function () {
    var i = date$now()
    var o = 16 - (i - r)
    r = i
    if (o > 0) {
      if (++t >= 800) {
        return arguments[0]
      }
    } else {
      t = 0
    }
    return e.apply(undefined, arguments)
  }
}
