/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1503__part-1
 */

"use strict"

import /* [auto-meaningful-name] */$$_$$_75_index from "../../75/index"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_1009 from "./1009"
import * as /* [auto-meaningful-name] */$$_$$_1026_690 from "../../1026/690"
import * as /* [auto-meaningful-name] */$_916 from "./916"
import * as /* [auto-meaningful-name] */$$_$$_2627_462 from "../../2627/462"
var b = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$didUpdate = e.didUpdate
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var /* [auto-meaningful-name] */e$children = e.children
  var o = React.useRef()
  React.useImperativeHandle(t, function () {
    return {}
  })
  var a = React.useRef(false)
  if (!a.current && $$_$$_2627_462.a()) {
    o.current = e$getContainer()
    a.current = true
  }
  React.useEffect(function () {
    if (!(null === e$didUpdate || undefined === e$didUpdate)) {
      e$didUpdate(e)
    }
  })
  React.useEffect(function () {
    return function () {
      var /* [auto-meaningful-name] */o$current
      var /* [auto-meaningful-name] */o$current$parentNode
      if (!(null === (o$current = o.current) || undefined === o$current || null === (o$current$parentNode = o$current.parentNode) || undefined === o$current$parentNode)) {
        o$current$parentNode.removeChild(o.current)
      }
    }
  }, [])
  return o.current ? $$_$$_75_index.createPortal(e$children, o.current) : null
})
export { b as "1503__part-1__b" }
