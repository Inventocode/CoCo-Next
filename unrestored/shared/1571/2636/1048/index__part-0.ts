/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1048__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_103 from "../103"
import * as /* [auto-meaningful-name] */$$_106 from "../106"
import * as /* [auto-meaningful-name] */$$_142 from "../142"
import * as /* [auto-meaningful-name] */$$_120 from "../120"
import * as /* [auto-meaningful-name] */$$_140 from "../140"
import "react"
import * as /* [auto-meaningful-name] */$_1033 from "./1033"
import * as /* [auto-meaningful-name] */$_698 from "./698"
import * as /* [auto-meaningful-name] */$_416 from "./416"
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
      h[n] = $_416.a(i)
    }
  }
  h[n] = $_416.a(i)
  return n
}
p.cancel = function (e) {
  if (undefined !== e) {
    $_416.a.cancel(h[e])
    delete h[e]
  }
}
p.ids = h
export { p }
