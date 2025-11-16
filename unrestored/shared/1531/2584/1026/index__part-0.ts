/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1026__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_95 from "../95"
import * as /* [auto-meaningful-name] */$$_96 from "../96"
import * as /* [auto-meaningful-name] */$$_103 from "../103"
import * as /* [auto-meaningful-name] */$$_120 from "../120"
import * as /* [auto-meaningful-name] */$$_140 from "../140"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_1011 from "./1011"
import * as /* [auto-meaningful-name] */$_690 from "./690"
import * as /* [auto-meaningful-name] */$_413 from "./413"
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
      h[n] = $_413.a(i)
    }
  }
  h[n] = $_413.a(i)
  return n
}
p.cancel = function (e) {
  if (undefined !== e) {
    $_413.a.cancel(h[e])
    delete h[e]
  }
}
p.ids = h
export { p as "1026__part-0__p" }
