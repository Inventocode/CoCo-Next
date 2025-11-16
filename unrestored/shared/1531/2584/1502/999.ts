/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：999
 */

"use strict"

import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_75_index from "../75/index"
import /* [auto-meaningful-name] */_$$_75_index from "../75/index"
import * as /* [auto-meaningful-name] */$_378 from "./378"
var s = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$didUpdate = e.didUpdate
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var /* [auto-meaningful-name] */e$children = e.children
  var c = React.useRef()
  React.useImperativeHandle(t, function () {
    return {}
  })
  var u = React.useRef(false)
  if (!u.current && $_378.a()) {
    c.current = e$getContainer()
    u.current = true
  }
  React.useEffect(function () {
    if (!(null === e$didUpdate || undefined === e$didUpdate)) {
      e$didUpdate(e)
    }
  })
  React.useEffect(function () {
    return function () {
      var /* [auto-meaningful-name] */c$current
      var /* [auto-meaningful-name] */c$current$parentNode
      if (!(null === (c$current = c.current) || undefined === c$current || null === (c$current$parentNode = c$current.parentNode) || undefined === c$current$parentNode)) {
        c$current$parentNode.removeChild(c.current)
      }
    }
  }, [])
  return c.current ? _$$_75_index.createPortal(e$children, c.current) : null
})
export { s as a }
export default s
