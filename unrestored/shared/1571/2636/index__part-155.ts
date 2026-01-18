/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-155
 */

"use strict"

import { SS } from "./index__part-154"
import * as D from "./6"
import N from "./8"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_705 from "./705"
import /* [auto-meaningful-name] */$_7051 from "./705"
var jS = function (e) {
  return e > 0 ? 1 : -1
}
var NS = function (e, t, n) {
  return [t || 0, e, n || e].sort(function (e, t) {
    return e - t
  })[1]
}
var RS = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$resizable = e.resizable
  var /* [auto-meaningful-name] */e$placements = e.placements
  var /* [auto-meaningful-name] */e$onResize = e.onResize
  var i = e.width && NS(e.width, e.minWidth, e.maxWidth)
  var a = e.height && NS(e.height, e.minHeight, e.maxHeight)
  var s = React1.useState(i)
  var c = $_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = React1.useState(a)
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var _ = React1.useState(false)
  var v = $_10_index.a(_, 2)
  var b = v[0]
  var y = v[1]
  var E = React1.useState()
  var O = $_10_index.a(E, 2)
  var w = O[0]
  var C = O[1]
  var T = !!w
  var A = function () {
    C(undefined)
  }
  var I = function (e) {
    if (e.target instanceof HTMLElement && e.target.parentElement) {
      var /* [auto-meaningful-name] */e$clientX = e.clientX
      var /* [auto-meaningful-name] */e$clientY = e.clientY
      var /* [auto-meaningful-name] */e$target = e.target
      var /* [auto-meaningful-name] */e$target$offsetTop = e$target.offsetTop
      var /* [auto-meaningful-name] */e$target$offsetLeft = e$target.offsetLeft
      var a = e.target.parentElement.getBoundingClientRect()
      return {
        clientX: e$clientX,
        clientY: e$clientY,
        offsetTop: e$target$offsetTop,
        offsetLeft: e$target$offsetLeft,
        height: a.height,
        width: a.width
      }
    }
  }
  var j = function (e) {
    return function (t) {
      if (0 === e.offsetLeft) {
        R(t, e)
      } else {
        k(t, e)
      }
    }
  }
  var R = function (t, n) {
    var r = jS(n.offsetTop)
    var i = t.clientY - n.clientY
    var a = NS(n.height + r * i, e.minHeight, e.maxHeight)
    g(a)
    if (e$onResize) {
      e$onResize(a)
    }
  }
  var k = function (t, n) {
    var r = jS(n.offsetLeft)
    var i = t.clientX - n.clientX
    var a = NS(n.width + r * i, e.minWidth, e.maxWidth)
    u(a)
    if (e$onResize) {
      e$onResize(a)
    }
  }
  return React.createElement(SS, {
    className: N(e.className, $_7051.layout, e$resizable ? $_7051.resizable : undefined, T ? $_7051.resizing : undefined),
    style: D.a(D.a({}, e.style), {}, {
      width: l,
      height: m
    })
  }, e$children, e$resizable && e$placements && e$placements.length ? React.createElement("div", {
    className: N($_7051.resizer, b ? $_7051.row : $_7051.col),
    onMouseDown: function (e) {
      var t = I(e)
      if (t) {
        y(0 === t.offsetLeft)
        C(function () {
          return j(t)
        })
      }
    },
    onMouseMove: w,
    onMouseUp: A,
    onMouseLeave: A
  }, e$placements.map(function (e) {
    return React.createElement("div", {
      key: e,
      className: $_7051[e.toLowerCase()]
    })
  })) : null)
})
export { RS }
