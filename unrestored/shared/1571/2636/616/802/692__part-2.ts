/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：692__part-2
 */

"use strict"

import { b, x } from "./692__part-0"
import { T, D } from "./692__part-1"
import /* [auto-meaningful-name] */$$_$$_8 from "../../8"
import * as /* [auto-meaningful-name] */$$_$$_1048_698 from "../../1048/698"
import * as /* [auto-meaningful-name] */$$_$$_748_1544_1030 from "../../748/1544/1030"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_107 from "../../107"
import * as /* [auto-meaningful-name] */$$_$$_40_index from "../../40/index"
import * as /* [auto-meaningful-name] */$$_$$_21 from "../../21"
import * as /* [auto-meaningful-name] */$$_$$_35 from "../../35"
import * as /* [auto-meaningful-name] */$$_$$_103 from "../../103"
import * as /* [auto-meaningful-name] */$$_$$_106 from "../../106"
import * as /* [auto-meaningful-name] */$$_$$_120 from "../../120"
import * as /* [auto-meaningful-name] */$$_$$_140 from "../../140"
var N = function (e) {
  $$_$$_120.a(n, e)
  var t = $$_$$_140.a(n)
  function n() {
    $$_$$_103.a(this, n)
    return t.apply(this, arguments)
  }
  $$_$$_106.a(n, [
    {
      key: "render",
      value: function () {
        return this.props.children
      }
    }
  ])
  return n
}(React.Component)
var M = function (e) {
  var t = e
  function n(e) {
    return !(!e.motionName || !t)
  }
  if ("object" === $$_$$_107.a(e)) {
    t = e.transitionSupport
  }
  var l = React.forwardRef(function (e, t) {
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
    var y = React.useRef()
    var b = React.useRef()
    var w = D(m, l, function () {
      try {
        return $$_$$_748_1544_1030.a(y.current || b.current)
      } catch (e) {
        return null
      }
    }, e)
    var E = $$_$$_40_index.a(w, 4)
    var C = E[0]
    var O = E[1]
    var k = E[2]
    var S = E[3]
    var B = React.useRef(S)
    if (S) {
      B.current = true
    }
    var I = React.useRef(t)
    I.current = t
    var R
    var F = React.useCallback(function (e) {
      y.current = e
      $$_$$_1048_698.b(I.current, e)
    }, [])
    var P = $$_$$_21.a($$_$$_21.a({}, e$eventProps), {}, {
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
        R = e$children($$_$$_21.a($$_$$_21.a({}, P), {}, {
          className: $$_$$_8(x(e$motionName, C), (M = {}, $$_$$_35.a(M, x(e$motionName, "".concat(C, "-").concat(L)), L), $$_$$_35.a(M, e$motionName, "string" === typeof e$motionName), M)),
          style: k
        }), F)
      } else {
        R = S ? e$children($$_$$_21.a({}, P), F) : !h && B.current ? e$children($$_$$_21.a($$_$$_21.a({}, P), {}, {
          className: e$leavedClassName
        }), F) : e$forceRender ? e$children($$_$$_21.a($$_$$_21.a({}, P), {}, {
          style: {
            display: "none"
          }
        }), F) : null
      }
    } else {
      R = null
    }
    return React.createElement(N, {
      ref: b
    }, R)
  })
  l.displayName = "CSSMotion"
  return l
}(b)
export { M }
