/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-32
 */

"use strict"

import { Pd } from "./index__part-31"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as kn from "./75"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */ResizeObserverPolyfill from "resize-observer-polyfill"
import * as /* [auto-meaningful-name] */$_1054 from "./1054"
import /* [auto-meaningful-name] */_$_ from "./1054"
var Wd = React.memo(function () {
  var e = _React.useRef(null)
  var t = _React.useRef(null)
  var n = _React.useRef(null)
  var r = $_16_index.e(function (e) {
    return e.common.stageRulerVisible
  })
  var o = $_16_index.e(function (e) {
    return e.common.stageScale
  })
  _React.useEffect(function () {
    if (n.current && r) {
      var i = Lodash.throttle(function () {
        if (n.current && t.current && e.current) {
          t.current.resize()
          e.current.resize()
          var /* [auto-meaningful-name] */n$current$offsetWidth = n.current.offsetWidth
          var /* [auto-meaningful-name] */n$current$offsetHeight = n.current.offsetHeight
          var a = (n$current$offsetWidth - kn.e * o) / 2
          a = a / o * -1
          var s = (n$current$offsetHeight - kn.d * o) / 2
          s = s / o * -1
          e.current.scroll(a)
          t.current.scroll(s)
          e.current.scrollGuides(s)
          t.current.scrollGuides(a)
        }
      }, 15)
      var a = new ResizeObserverPolyfill.default(i)
      a.observe(n.current)
      return function () {
        if (a) {
          a.disconnect()
        }
        a = null
      }
    }
  }, [r, o])
  return r ? React.createElement("div", {
    ref: n,
    className: _$_.container
  }, React.createElement("div", {
    className: _$_.vRuler
  }, React.createElement(Pd, {
    ref: function (e) {
      t.current = e
    },
    zoom: o,
    type: "vertical",
    unit: 100,
    backgroundColor: "transparent",
    lineColor: "#CCCCCC",
    textColor: "rgba(0, 0, 0, 0.5)",
    direction: "start",
    mainLineSize: 12,
    longLineSize: 8,
    shortLineSize: 4
  })), React.createElement("div", {
    className: _$_.hRuler
  }, React.createElement(Pd, {
    ref: function (t) {
      e.current = t
    },
    zoom: o,
    unit: 100,
    backgroundColor: "transparent",
    lineColor: "#CCCCCC",
    textColor: "rgba(0, 0, 0, 0.5)",
    direction: "start",
    mainLineSize: 12,
    longLineSize: 8,
    shortLineSize: 4
  }))) : null
})
export { Wd }
