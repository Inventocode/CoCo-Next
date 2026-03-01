/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1544__part-1
 */

"use strict"

import /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
import * as /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_1030 from /* 1030 */"./1030"
import * as /* [auto-meaningful-name] */Module_698 from /* 698 */"../../1048/698"
import * as /* [auto-meaningful-name] */Module_929 from /* 929 */"./929"
import * as /* [auto-meaningful-name] */Module_466 from /* 466 */"../../2680/466"
var b = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$didUpdate = e.didUpdate
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var /* [auto-meaningful-name] */e$children = e.children
  var o = React.useRef()
  React.useImperativeHandle(t, function () {
    return {}
  })
  var a = React.useRef(false)
  if (!a.current && Module_466.a()) {
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
  return o.current ? ReactDom.createPortal(e$children, o.current) : null
})
export { b }
