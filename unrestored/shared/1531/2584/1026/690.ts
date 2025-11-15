/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：690
 */

"use strict"

export { o as b }
export { a }
export { s as c }
import /* [auto-meaningful-name] */$$_108 = require("../108")
import /* [auto-meaningful-name] */$$_242_index = require("../242/index")
function o(e, t) {
  if ("function" === typeof e) {
    e(t)
  } else {
    if ("object" === $$_108.a(e) && e && "current" in e) {
      e.current = t
    }
  }
}
function a() {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
    t[n] = arguments[n]
  }
  return function (e) {
    t.forEach(function (t) {
      o(t, e)
    })
  }
}
function s(e) {
  var /* [auto-meaningful-name] */r$prototype
  var /* [auto-meaningful-name] */e$prototype
  var r = $$_242_index.isMemo(e) ? e.type.type : e.type
  return !("function" === typeof r && !(null === (r$prototype = r.prototype) || undefined === r$prototype ? undefined : r$prototype.render)) && !("function" === typeof e && !(null === (e$prototype = e.prototype) || undefined === e$prototype ? undefined : e$prototype.render))
}
export default a
