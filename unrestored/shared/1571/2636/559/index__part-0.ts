/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：559__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_35 from "../35"
import * as /* [auto-meaningful-name] */$$_21 from "../21"
import * as /* [auto-meaningful-name] */$$_79_index from "../79/index"
import * as /* [auto-meaningful-name] */$$_40_index from "../40/index"
import * as /* [auto-meaningful-name] */$$_54 from "../54"
import { useState, useRef, useEffect } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Classnames from "classnames"
import /* [auto-meaningful-name] */Classnames1 from "classnames"
import * as /* [auto-meaningful-name] */$_1041 from "./1041"
import /* [auto-meaningful-name] */$_10411 from "./1041"
function m(e, t) {
  var n = t || {}
  var /* [auto-meaningful-name] */n$defaultValue = n.defaultValue
  var /* [auto-meaningful-name] */n$value = n.value
  var /* [auto-meaningful-name] */n$onChange = n.onChange
  var /* [auto-meaningful-name] */n$postState = n.postState
  var c = useState(function () {
    return undefined !== n$value ? n$value : undefined !== n$defaultValue ? "function" === typeof n$defaultValue ? n$defaultValue() : n$defaultValue : "function" === typeof e ? e() : e
  })
  var u = $$_40_index.a(c, 2)
  var d = u[0]
  var p = u[1]
  var f = undefined !== n$value ? n$value : d
  if (n$postState) {
    f = n$postState(f)
  }
  var h = useRef(true)
  useEffect(function () {
    if (h.current) {
      h.current = false
    } else {
      if (undefined === n$value) {
        p(n$value)
      }
    }
  }, [n$value])
  return [
    f, function (e) {
      p(e)
      if (f !== e && n$onChange) {
        n$onChange(e, f)
      }
    }
  ]
}
var g = {}
function _(e, t) {
  0
}
function v(e, t, n) {
  if (!(t || g[n])) {
    e(false, n)
    g[n] = true
  }
}
var b = function (e, t) {
  v(_, e, t)
}
export { m }
export { b }
