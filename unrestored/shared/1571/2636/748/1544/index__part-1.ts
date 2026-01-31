/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1544__part-1
 */

"use strict"

import /* [auto-meaningful-name] */ReactDom from "react-dom"
import { forwardRef, useRef, useImperativeHandle, useEffect } from "react"
import * as /* [auto-meaningful-name] */$_1030 from "./1030"
import * as /* [auto-meaningful-name] */$$_$$_1048_698 from "../../1048/698"
import * as /* [auto-meaningful-name] */$_929 from "./929"
import * as /* [auto-meaningful-name] */$$_$$_2680_466 from "../../2680/466"
var b = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$didUpdate = e.didUpdate
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var /* [auto-meaningful-name] */e$children = e.children
  var o = useRef()
  useImperativeHandle(t, function () {
    return {}
  })
  var a = useRef(false)
  if (!a.current && $$_$$_2680_466.a()) {
    o.current = e$getContainer()
    a.current = true
  }
  useEffect(function () {
    if (!(null === e$didUpdate || undefined === e$didUpdate)) {
      e$didUpdate(e)
    }
  })
  useEffect(function () {
    return function () {
      var /* [auto-meaningful-name] */o$current
      var /* [auto-meaningful-name] */o$current$parentNode
      if (!(null === (o$current = o.current) || undefined === o$current || null === (o$current$parentNode = o$current.parentNode) || undefined === o$current$parentNode)) {
        o$current$parentNode.removeChild(o.current)
      }
    }
  }, [])
  return o.current ? ReactDom.createPortal(e$children, o.current) : null
})
export { b }
