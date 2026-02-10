/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：563
 */

"use strict"

export { o as a }
import { useLayoutEffect, useEffect, useRef, useCallback } from "react"
var i = "undefined" !== typeof window ? useLayoutEffect : useEffect
function o(e) {
  var t = useRef(e)
  i(function () {
    t.current = e
  })
  return useCallback(function () {
    return t.current.apply(undefined, arguments)
  }, [])
}
export default o
