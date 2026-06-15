/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：692__part-2
 */

"use strict"

import { b, x } from "./692__part-0"
import { T, D } from "./692__part-1"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_698 from /* 698 */"../../1048/698"
import * as /* [auto-meaningful-name] */Module_1030 from /* 1030 */"./1030"
import { Component, forwardRef, useRef, useCallback, createElement } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_107 from /* 107 */"../../107"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"../../40/index"
import * as /* [auto-meaningful-name] */Module_21 from /* 21 */"../../21"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../../35"
import * as /* [auto-meaningful-name] */Module_103 from /* 103 */"../../103"
import * as /* [auto-meaningful-name] */Module_106 from /* 106 */"../../106"
import * as /* [auto-meaningful-name] */Module_120 from /* 120 */"../../120"
import * as /* [auto-meaningful-name] */Module_140 from /* 140 */"../../140"
var N = function (e) {
  Module_120.a(n, e)
  var t = Module_140.a(n)
  function n() {
    Module_103.a(this, n)
    return t.apply(this, arguments)
  }
  Module_106.a(n, [
    {
      key: "render",
      value: function () {
        return this.props.children
      }
    }
  ])
  return n
}(Component)
var M = function (e) {
  var t = e
  function n(e) {
    return !(!e.motionName || !t)
  }
  if ("object" === Module_107.a(e)) {
    t = e.transitionSupport
  }
  var l = forwardRef(function (e, t) {
    var /* [auto-meaningful-name] */e$visible = e.visible
    var l = undefined === e$visible || e$visible
    var /* [auto-meaningful-name] */e$removeOnLeave = e.removeOnLeave
    var h = undefined === e$removeOnLeave || e$removeOnLeave
    var /* [auto-meaningful-name] */e$forceRender = e.forceRender
    var /* [auto-meaningful-name] */e$children = e.children
    var /* [auto-meaningful-name] */e$motionName = e.motionName
    var /* [auto-meaningful-name] */e$leavedClassName = e.leavedClassName
    var /* [auto-meaningful-name] */e$eventProps = e.eventProps
    var m = n(e)
    var y = useRef()
    var b = useRef()
    var w = D(m, l, function () {
      try {
        return Module_1030.a(y.current || b.current)
      } catch (e) {
        return null
      }
    }, e)
    var E = Module_40.a(w, 4)
    var C = E[0]
    var O = E[1]
    var k = E[2]
    var S = E[3]
    var B = useRef(S)
    if (S) {
      B.current = true
    }
    var I = useRef(t)
    I.current = t
    var R
    var F = useCallback(function (e) {
      y.current = e
      Module_698.b(I.current, e)
    }, [])
    var P = Module_21.a(Module_21.a({}, e$eventProps), {}, {
      visible: l
    })
    if (e$children) {
      if ("none" !== C && n(e)) {
        var M
        var L
        if ("prepare" === O) {
          L = "prepare"
        } else {
          if (T(O)) {
            L = "active"
          } else {
            if ("start" === O) {
              L = "start"
            }
          }
        }
        R = e$children(Module_21.a(Module_21.a({}, P), {}, {
          className: Classnames(x(e$motionName, C), (M = {}, Module_35.a(M, x(e$motionName, "".concat(C, "-").concat(L)), L), Module_35.a(M, e$motionName, "string" === typeof e$motionName), M)),
          style: k
        }), F)
      } else {
        R = S ? e$children(Module_21.a({}, P), F) : !h && B.current ? e$children(Module_21.a(Module_21.a({}, P), {}, {
          className: e$leavedClassName
        }), F) : e$forceRender ? e$children(Module_21.a(Module_21.a({}, P), {}, {
          style: {
            display: "none"
          }
        }), F) : null
      }
    } else {
      R = null
    }
    return createElement(N, {
      ref: b
    }, R)
  })
  l.displayName = "CSSMotion"
  return l
}(b)
export { M }
