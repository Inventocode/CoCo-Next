/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1048__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_103 from /* 103 */"../103"
import * as /* [auto-meaningful-name] */Module_106 from /* 106 */"../106"
import * as /* [auto-meaningful-name] */Module_142 from /* 142 */"../142"
import * as /* [auto-meaningful-name] */Module_120 from /* 120 */"../120"
import * as /* [auto-meaningful-name] */Module_140 from /* 140 */"../140"
import * as /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_1033 from /* 1033 */"./1033"
import * as /* [auto-meaningful-name] */Module_698 from /* 698 */"./698"
import * as /* [auto-meaningful-name] */Module_416 from /* 416 */"./416"
var d = 0
var h = {}
function p(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1
  var n = d++
  var r = t
  function i() {
    if ((r -= 1) <= 0) {
      e()
      delete h[n]
    } else {
      h[n] = Module_416.a(i)
    }
  }
  h[n] = Module_416.a(i)
  return n
}
p.cancel = function (e) {
  if (undefined !== e) {
    Module_416.a.cancel(h[e])
    delete h[e]
  }
}
p.ids = h
export { p }
