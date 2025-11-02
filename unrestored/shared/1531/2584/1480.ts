/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1480
 */

"use strict"

export { i as a }
import r = require("./33/index");
import React = require("react");
function i(e, t) {
  var n = t || {}
  var n$defaultValue = n.defaultValue
  var n$value = n.value
  var n$onChange = n.onChange
  var n$postState = n.postState
  var l = React.useState(function () {
    return undefined !== n$value ? n$value : undefined !== n$defaultValue ? "function" === typeof n$defaultValue ? n$defaultValue() : n$defaultValue : "function" === typeof e ? e() : e
  })
  var u = r.a(l, 2)
  var d = u[0]
  var p = u[1]
  var f = undefined !== n$value ? n$value : d
  if (n$postState) {
    f = n$postState(f)
  }
  var h = React.useRef(true)
  React.useEffect(function () {
    if (h.current) {
      h.current = false
    } else {
      if (undefined === n$value) {
        p(n$value)
      }
    }
  }, [n$value])
  return [f, function (e) {
    p(e)
    if (f !== e && n$onChange) {
      n$onChange(e, f)
    }
  }]
}
export default i
