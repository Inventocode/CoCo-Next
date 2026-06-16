/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：307__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_69 from /* 69 */"./69/index"
import * as /* [auto-meaningful-name] */Module_22 from /* 22 */"./22"
import * as /* [auto-meaningful-name] */Module_77 from /* 77 */"./77"
import * as /* [auto-meaningful-name] */Module_186 from /* 186 */"./186"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"./90"
import * as /* [auto-meaningful-name] */Module_5 from /* 5 */"./5"
var I = Object.setPrototypeOf || ({
  __proto__: []
} instanceof Array ? function (e, t) {
    e.__proto__ = t
    return e
  } : function (e, t) {
    for (var n in t) if (!Object.prototype.hasOwnProperty.call(e, n)) {
      e[n] = t[n]
    }
    return e
  })
var N = function (e) {
  function t(t) {
    var /* [auto-meaningful-name] */this$constructor = this.constructor
    var r = e.call(this, t) || this
    r.message = t
    r.name = this$constructor.prototype.constructor.name
    I(r, this$constructor.prototype)
    return r
  }
  Module_5.b(t, e)
  return t
}(Error)
export { N }
