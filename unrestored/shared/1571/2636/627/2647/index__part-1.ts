/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2647__part-1
 */

"use strict"

var r
var a
import * as /* [auto-meaningful-name] */$$_$$_103 from "../../103"
import * as /* [auto-meaningful-name] */$$_$$_106 from "../../106"
import * as /* [auto-meaningful-name] */$$_$$_142 from "../../142"
import * as /* [auto-meaningful-name] */$$_$$_120 from "../../120"
import * as /* [auto-meaningful-name] */$$_$$_388 from "../../388"
import * as /* [auto-meaningful-name] */$$_$$_362 from "../../362"
import * as /* [auto-meaningful-name] */$$_$$_35 from "../../35"
import * as /* [auto-meaningful-name] */$$_$$_2646_1219_index from "../../2646/1219/index"
import /* [auto-meaningful-name] */$$_$$_2646_1219_index1 from "../../2646/1219/index"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_1221 from "../../1221"
import * as /* [auto-meaningful-name] */$$_$$_1220_index from "../../1220/index"
import /* [auto-meaningful-name] */$$_$$_1220_index1 from "../../1220/index"
import * as /* [auto-meaningful-name] */$_3308_index from "./3308/index"
import * as /* [auto-meaningful-name] */$$_$$_2646_index from "../../2646/index"
!function (e) {
  e[e.SMALL = 1] = "SMALL"
  e[e.MID_SMALL = 2] = "MID_SMALL"
  e[e.MID = 3] = "MID"
  e[e.LARGE = 4] = "LARGE"
}(r || (r = {}))
a = {}
$$_$$_35.a(a, r.SMALL, 270)
$$_$$_35.a(a, r.MID_SMALL, 324)
$$_$$_35.a(a, r.MID, 385)
$$_$$_35.a(a, r.LARGE, 450)
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
