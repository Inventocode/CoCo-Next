/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：559__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../19"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../35"
import * as /* [auto-meaningful-name] */Module_21 from /* 21 */"../21"
import * as /* [auto-meaningful-name] */Module_79 from /* 79 */"../79/index"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"../40/index"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../54"
import { useState, useRef, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_1041 from /* 1041 */"./1041"
import /* [auto-meaningful-name] */Module_10411 from /* 1041 */"./1041"
function m(e, t) {
  var n = t || {}
  var /* [auto-meaningful-name] */n$defaultValue = n.defaultValue
  var /* [auto-meaningful-name] */n$value = n.value
  var /* [auto-meaningful-name] */n$onChange = n.onChange
  var /* [auto-meaningful-name] */n$postState = n.postState
  var c = useState(function () {
    return undefined !== n$value ? n$value : undefined !== n$defaultValue ? "function" === typeof n$defaultValue ? n$defaultValue() : n$defaultValue : "function" === typeof e ? e() : e
  })
  var u = Module_40.a(c, 2)
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
