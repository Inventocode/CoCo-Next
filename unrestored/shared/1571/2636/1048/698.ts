/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：698
 */

"use strict"

export { o as b }
export { a }
export { s as c }
import * as /* [auto-meaningful-name] */$$_107 from "../107"
import * as /* [auto-meaningful-name] */$$_241_index from "../241/index"
function o(e, t) {
  if ("function" === typeof e) {
    e(t)
  } else {
    if ("object" === $$_107.a(e) && e && "current" in e) {
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
  var r = $$_241_index.isMemo(e) ? e.type.type : e.type
  return !("function" === typeof r && !(null === (r$prototype = r.prototype) || undefined === r$prototype ? undefined : r$prototype.render)) && !("function" === typeof e && !(null === (e$prototype = e.prototype) || undefined === e$prototype ? undefined : e$prototype.render))
}
export default a
