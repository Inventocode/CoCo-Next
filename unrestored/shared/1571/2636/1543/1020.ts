/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1020
 */

"use strict"

import { forwardRef, useRef, useImperativeHandle, useEffect } from "react"
import * as /* [auto-meaningful-name] */ReactDom from "react-dom"
import /* [auto-meaningful-name] */ReactDom1 from "react-dom"
import * as /* [auto-meaningful-name] */$_378 from "./378"
var s = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$didUpdate = e.didUpdate
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var /* [auto-meaningful-name] */e$children = e.children
  var c = useRef()
  useImperativeHandle(t, function () {
    return {}
  })
  var u = useRef(false)
  if (!u.current && $_378.a()) {
    c.current = e$getContainer()
    u.current = true
  }
  useEffect(function () {
    if (!(null === e$didUpdate || undefined === e$didUpdate)) {
      e$didUpdate(e)
    }
  })
  useEffect(function () {
    return function () {
      var /* [auto-meaningful-name] */c$current
      var /* [auto-meaningful-name] */c$current$parentNode
      if (!(null === (c$current = c.current) || undefined === c$current || null === (c$current$parentNode = c$current.parentNode) || undefined === c$current$parentNode)) {
        c$current$parentNode.removeChild(c.current)
      }
    }
  }, [])
  return c.current ? ReactDom1.createPortal(e$children, c.current) : null
})
export { s as a }
export default s
