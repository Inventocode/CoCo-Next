/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1541__part-2
 */

"use strict"

import { useState, useRef, useEffect } from "react"
import * as /* [auto-meaningful-name] */$$_40_index from "../40/index"
import * as /* [auto-meaningful-name] */Classnames from "classnames"
import /* [auto-meaningful-name] */Classnames1 from "classnames"
function v(e, t) {
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
export { v }
