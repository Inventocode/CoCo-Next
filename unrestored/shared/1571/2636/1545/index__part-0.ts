/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1545__part-0
 */

"use strict"

import { forwardRef, createElement } from "react"
import * as o from "../8"
import i from "../8"
import * as /* [auto-meaningful-name] */$_800 from "./800"
function s(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    if (t) {
      r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })
    }
    n.push.apply(n, r)
  }
  return n
}
function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    if (t % 2) {
      s(Object(n), true).forEach(function (t) {
        l(e, t, n[t])
      })
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      } else {
        s(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
      }
    }
  }
  return e
}
function l(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    })
  } else {
    e[t] = n
  }
  return e
}
var u = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$offset = e.offset
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$onInnerResize = e.onInnerResize
  var p = {}
  var f = {
    display: "flex",
    flexDirection: "column"
  }
  if (undefined !== e$offset) {
    p = {
      height: e$height,
      position: "relative",
      overflow: "hidden"
    }
    f = c(c({}, f), {}, {
      transform: "translateY(".concat(e$offset, "px)"),
      position: "absolute",
      left: 0,
      right: 0,
      top: 0
    })
  }
  return createElement("div", {
    style: p
  }, createElement($_800.a, {
    onResize: function (e) {
      if (e.offsetHeight && e$onInnerResize) {
        e$onInnerResize()
      }
    }
  }, createElement("div", {
    style: f,
    className: i(l({}, "".concat(e$prefixCls, "-holder-inner"), e$prefixCls)),
    ref: t
  }, e$children)))
})
u.displayName = "Filler"
var d = u
export { d }
