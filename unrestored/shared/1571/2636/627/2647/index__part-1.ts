/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2647__part-1
 */

"use strict"

var r
var a
import * as /* [auto-meaningful-name] */Module_103 from /* 103 */"../../103"
import * as /* [auto-meaningful-name] */Module_106 from /* 106 */"../../106"
import * as /* [auto-meaningful-name] */Module_142 from /* 142 */"../../142"
import * as /* [auto-meaningful-name] */Module_120 from /* 120 */"../../120"
import * as /* [auto-meaningful-name] */Module_388 from /* 388 */"../../388"
import * as /* [auto-meaningful-name] */Module_362 from /* 362 */"../../362"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../../35"
import * as /* [auto-meaningful-name] */Module_1219 from /* 1219 */"../../2646/1219/index"
import /* [auto-meaningful-name] */Module_12191 from /* 1219 */"../../2646/1219/index"
import /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_1221 from /* 1221 */"../../1221"
import * as /* [auto-meaningful-name] */Module_1220 from /* 1220 */"../../1220/index"
import /* [auto-meaningful-name] */Module_12201 from /* 1220 */"../../1220/index"
import * as /* [auto-meaningful-name] */Module_3308 from /* 3308 */"./3308/index"
import * as /* [auto-meaningful-name] */Module_2646 from /* 2646 */"../../2646/index"
!function (e) {
  e[e.SMALL = 1] = "SMALL"
  e[e.MID_SMALL = 2] = "MID_SMALL"
  e[e.MID = 3] = "MID"
  e[e.LARGE = 4] = "LARGE"
}(r || (r = {}))
a = {}
Module_35.a(a, r.SMALL, 270)
Module_35.a(a, r.MID_SMALL, 324)
Module_35.a(a, r.MID, 385)
Module_35.a(a, r.LARGE, 450)
var k = a
var E = function () {
  return k[function () {
    var /* [auto-meaningful-name] */window$innerWidth = window.innerWidth
    return window$innerWidth <= 1024 ? r.SMALL : window$innerWidth <= 1440 ? r.MID_SMALL : window$innerWidth <= 1660 ? r.MID : r.LARGE
  }()] + 40
}
var C = function () {
  return (E() - 40) * (16 / 9)
}
var S = function () {
  return Math.max(.3 * window.innerHeight, 314)
}
export { E }
export { C }
export { S }
