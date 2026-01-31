/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1542__part-1
 */

"use strict"

import { forwardRef, useRef, useImperativeHandle, useEffect } from "react"
import * as /* [auto-meaningful-name] */ReactDom from "react-dom"
import /* [auto-meaningful-name] */ReactDom1 from "react-dom"
function m() {
  return !("undefined" === typeof window || !window.document || !window.document.createElement)
}
var y
var b = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$didUpdate = e.didUpdate
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var /* [auto-meaningful-name] */e$children = e.children
  var a = useRef()
  useImperativeHandle(t, function () {
    return {}
  })
  var s = useRef(false)
  if (!s.current && m()) {
    a.current = e$getContainer()
    s.current = true
  }
  useEffect(function () {
    if (!(null === e$didUpdate || undefined === e$didUpdate)) {
      e$didUpdate(e)
    }
  })
  useEffect(function () {
    return function () {
      var /* [auto-meaningful-name] */a$current
      var /* [auto-meaningful-name] */a$current$parentNode
      if (!(null === (a$current = a.current) || undefined === a$current || null === (a$current$parentNode = a$current.parentNode) || undefined === a$current$parentNode)) {
        a$current$parentNode.removeChild(a.current)
      }
    }
  }, [])
  return a.current ? ReactDom1.createPortal(e$children, a.current) : null
})
function w(e) {
  if ("undefined" === typeof document) {
    return 0
  }
  if (e || undefined === y) {
    var t = document.createElement("div")
    t.style.width = "100%"
    t.style.height = "200px"
    var n = document.createElement("div")
    var /* [auto-meaningful-name] */n$style = n.style
    n$style.position = "absolute"
    n$style.top = "0"
    n$style.left = "0"
    n$style.pointerEvents = "none"
    n$style.visibility = "hidden"
    n$style.width = "200px"
    n$style.height = "150px"
    n$style.overflow = "hidden"
    n.appendChild(t)
    document.body.appendChild(n)
    var /* [auto-meaningful-name] */t$offsetWidth = t.offsetWidth
    n.style.overflow = "scroll"
    var /* [auto-meaningful-name] */t$offsetWidth1 = t.offsetWidth
    if (t$offsetWidth === t$offsetWidth1) {
      t$offsetWidth1 = n.clientWidth
    }
    document.body.removeChild(n)
    y = t$offsetWidth - t$offsetWidth1
  }
  return y
}
var E = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  if (!e) {
    return {}
  }
  var /* [auto-meaningful-name] */t$element = t.element
  var r = undefined === t$element ? document.body : t$element
  var i = {}
  var o = Object.keys(e)
  o.forEach(function (e) {
    i[e] = r.style[e]
  })
  o.forEach(function (t) {
    r.style[t] = e[t]
  })
  return i
}
var x = {}
var C = function (e) {
  if (document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth || e) {
    var t = new RegExp("".concat("ant-scrolling-effect"), "g")
    var /* [auto-meaningful-name] */document$body$className = document.body.className
    if (e) {
      if (!t.test(document$body$className)) {
        return
      }
      E(x)
      x = {}
      return void (document.body.className = document$body$className.replace(t, "").trim())
    }
    var r = w()
    if (r && (x = E({
      position: "relative",
      width: "calc(100% - ".concat(r, "px)")
    }), !t.test(document$body$className))) {
      var i = "".concat(document$body$className, " ").concat("ant-scrolling-effect")
      document.body.className = i.trim()
    }
  }
}
export { m }
export { b }
export { w }
export { E }
export { C }
