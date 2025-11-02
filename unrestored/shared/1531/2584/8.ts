/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：8
 */

var r
!function () {
  "use strict"

  var $hasOwnProperty = {}.hasOwnProperty
  function i() {
    for (var e = [], t = 0; t < arguments.length; t++) {
      var r = arguments[t]
      if (r) {
        var o = typeof r
        if ("string" === o || "number" === o) {
          e.push(r)
        } else if (Array.isArray(r) && r.length) {
          var a = i.apply(null, r)
          if (a) {
            e.push(a)
          }
        } else if ("object" === o) {
          for (var s in r) if ($hasOwnProperty.call(r, s) && r[s]) {
            e.push(s)
          }
        }
      }
    }
    return e.join(" ")
  }
  if (module.exports) {
    i.default = i
    module.exports = i
  } else {
    if (!(undefined === (r = function () {
      return i
    }.apply(exports, [])))) {
      module.exports = r
    }
  }
}()
