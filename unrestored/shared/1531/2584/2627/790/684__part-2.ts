/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：684__part-2
 */

"use strict"

import { "684__part-0__b" as b, "684__part-0__x" as x } from "./684__part-0"
import { "684__part-1__T" as T, "684__part-1__D" as D } from "./684__part-1"
import /* [auto-meaningful-name] */$$_$$_8 from "../../8"
import * as /* [auto-meaningful-name] */$$_$$_1026_690 from "../../1026/690"
import * as /* [auto-meaningful-name] */$$_$$_739_1503_1009 from "../../739/1503/1009"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_108 from "../../108"
import * as /* [auto-meaningful-name] */$$_$$_33_index from "../../33/index"
import * as /* [auto-meaningful-name] */$$_$$_20 from "../../20"
import * as /* [auto-meaningful-name] */$$_$$_29 from "../../29"
import * as /* [auto-meaningful-name] */$$_$$_95 from "../../95"
import * as /* [auto-meaningful-name] */$$_$$_96 from "../../96"
import * as /* [auto-meaningful-name] */$$_$$_120 from "../../120"
import * as /* [auto-meaningful-name] */$$_$$_140 from "../../140"
var N = function (e) {
  $$_$$_120.a(n, e)
  var t = $$_$$_140.a(n)
  function n() {
    $$_$$_95.a(this, n)
    return t.apply(this, arguments)
  }
  $$_$$_96.a(n, [{
    key: "render",
    value: function () {
      return this.props.children
    }
  }])
  return n
}(React.Component)
var M = function (e) {
  var t = e
  function n(e) {
    return !(!e.motionName || !t)
  }
  if ("object" === $$_$$_108.a(e)) {
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
        return $$_$$_739_1503_1009.a(y.current || b.current)
      } catch (e) {
        return null
      }
    }, e)
    var E = $$_$$_33_index.a(w, 4)
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
    var F
    var R = React.useCallback(function (e) {
      y.current = e
      $$_$$_1026_690.b(I.current, e)
    }, [])
    var P = $$_$$_20.a($$_$$_20.a({}, e$eventProps), {}, {
      visible: l
    })
    if (e$children) {
      if ("none" !== C && n(e)) {
        var M
        var j
        if ("prepare" === O) {
          j = "prepare"
        } else {
          if (T(O)) {
            j = "active"
          } else {
            if ("start" === O) {
              j = "start"
            }
          }
        }
        F = e$children($$_$$_20.a($$_$$_20.a({}, P), {}, {
          className: $$_$$_8(x(e$motionName, C), (M = {}, $$_$$_29.a(M, x(e$motionName, "".concat(C, "-").concat(j)), j), $$_$$_29.a(M, e$motionName, "string" === typeof e$motionName), M)),
          style: k
        }), R)
      } else {
        F = S ? e$children($$_$$_20.a({}, P), R) : !h && B.current ? e$children($$_$$_20.a($$_$$_20.a({}, P), {}, {
          className: e$leavedClassName
        }), R) : e$forceRender ? e$children($$_$$_20.a($$_$$_20.a({}, P), {}, {
          style: {
            display: "none"
          }
        }), R) : null
      }
    } else {
      F = null
    }
    return React.createElement(N, {
      ref: b
    }, F)
  })
  l.displayName = "CSSMotion"
  return l
}(b)
export { M as "684__part-2__M" }
