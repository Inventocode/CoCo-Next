/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：560
 */

"use strict"

export { o as a }
import * as /* [auto-meaningful-name] */React from "react"
var i = "undefined" !== typeof window ? React.useLayoutEffect : React.useEffect
function o(e) {
  var t = React.useRef(e)
  i(function () {
    t.current = e
  })
  return React.useCallback(function () {
    return t.current.apply(undefined, arguments)
  }, [])
}
export default o
