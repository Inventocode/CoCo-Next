/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：549
 */

import "./index__part-0"
import { r } from "./index__part-1"
var b = false
import /* [auto-meaningful-name] */$_159 from "./159"
import * as /* [auto-meaningful-name] */$$_77 from "../77"
import * as /* [auto-meaningful-name] */$$_15 from "../15"
import * as /* [auto-meaningful-name] */$$_90 from "../90"
import * as p from "../../../../../src/editor/widget/built-in/types"
import d from "../8"
import /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as /* [auto-meaningful-name] */$$_11 from "../11"
var _a
_a = function (e) {
  var t = _React.useRef(null)
  var n = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$onSliderChange = e.onSliderChange
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$onEndToSlid = e.onEndToSlid
  var /* [auto-meaningful-name] */e$onStartToSlid = e.onStartToSlid
  var /* [auto-meaningful-name] */e$isEditState = e.isEditState
  var /* [auto-meaningful-name] */e$selected = e.selected
  var S = undefined !== e$selected && e$selected
  var /* [auto-meaningful-name] */e$handleImageUrl = e.handleImageUrl
  var /* [auto-meaningful-name] */e$backgroundImageUrl = e.backgroundImageUrl
  var /* [auto-meaningful-name] */e$trackImageUrl = e.trackImageUrl
  var /* [auto-meaningful-name] */e$attributes$maxValue = e$attributes.maxValue
  var /* [auto-meaningful-name] */e$attributes$step = e$attributes.step
  var /* [auto-meaningful-name] */e$attributes$minValue = e$attributes.minValue
  var /* [auto-meaningful-name] */e$attributes$direction = e$attributes.direction
  var D = undefined === e$attributes$direction ? $$_77.b.HORIZONTAL : e$attributes$direction
  var /* [auto-meaningful-name] */e$attributes$sliderType = e$attributes.sliderType
  var L = undefined === e$attributes$sliderType ? $$_77.d.TEMPLATE : e$attributes$sliderType
  var /* [auto-meaningful-name] */e$attributes$handleImageRatio = e$attributes.handleImageRatio
  var B = undefined === e$attributes$handleImageRatio ? 2 : e$attributes$handleImageRatio
  var /* [auto-meaningful-name] */e$attributes$backgroundImageDirection = e$attributes.backgroundImageDirection
  var G = undefined === e$attributes$backgroundImageDirection ? $$_77.b.HORIZONTAL : e$attributes$backgroundImageDirection
  var /* [auto-meaningful-name] */e$attributes$trackImageDirection = e$attributes.trackImageDirection
  var U = undefined === e$attributes$trackImageDirection ? $$_77.b.HORIZONTAL : e$attributes$trackImageDirection
  var H = e$attributes.handleImageDirection || $$_77.b.HORIZONTAL
  var /* [auto-meaningful-name] */e$attributes$mode = e$attributes.mode
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$value = e$attributes.value
  var q = _React.useRef(null)
  var X = _React.useRef(null)
  var Q = _React.useRef(r.UP)
  var Z = _React.useState(false)
  var J = $$_10_index.a(Z, 2)
  var $ = J[0]
  var ee = J[1]
  var te = _React.useState(0)
  var ne = $$_10_index.a(te, 2)
  var re = ne[0]
  var oe = ne[1]
  var ie = _React.useState(0)
  var ae = $$_10_index.a(ie, 2)
  var se = ae[0]
  var ce = ae[1]
  var le = _React.useState(0)
  var ue = $$_10_index.a(le, 2)
  var de = ue[0]
  var pe = ue[1]
  var fe = _React.useState(0)
  var he = $$_10_index.a(fe, 2)
  var me = he[0]
  var ge = he[1]
  var _e = _React.useState("")
  var ve = $$_10_index.a(_e, 2)
  var be = ve[0]
  var ye = ve[1]
  var Ee = _React.useState("")
  var Oe = $$_10_index.a(Ee, 2)
  var we = Oe[0]
  var Ce = Oe[1]
  var Te = _React.useRef(1)
  var Se = _React.useRef(1)
  _React.useEffect(function () {
    if (e$trackImageUrl) {
      Te.current = Te.current + 1
      var /* [auto-meaningful-name] */Te$current = Te.current
      $$_15.gb(e$trackImageUrl, U === $$_77.b.HORIZONTAL ? -90 : 90).then(function (t) {
        if (!(Te.current > Te$current)) {
          ye(t)
        }
      }).catch(function () {
        return ye("")
      })
    }
  }, [e$trackImageUrl, U])
  _React.useEffect(function () {
    if (e$backgroundImageUrl) {
      Se.current = Se.current + 1
      var /* [auto-meaningful-name] */Se$current = Se.current
      $$_15.gb(e$backgroundImageUrl, G === $$_77.b.HORIZONTAL ? -90 : 90).then(function (t) {
        if (!(Se.current > Se$current)) {
          Ce(t)
        }
      }).catch(function () {
        return Ce("")
      })
    }
  }, [e$backgroundImageUrl, G])
  _React.useEffect(function () {
    if (L === $$_77.d.IMAGE) {
      ee(true)
    } else {
      ee(false)
    }
  }, [L])
  _React.useEffect(function () {
    var /* [auto-meaningful-name] */e$size$height = e$size.height
    if (D === $$_77.b.VERTICAL) {
      e$size$height = e$size.width
    }
    if (L === $$_77.d.IMAGE) {
      oe(e$size$height * B)
      ce(e$size$height * B)
      pe(0)
      return void ge(0)
    }
    if (e$attributes$mode === $$_77.c.DEFAULT) {
      oe(1.4 * e$size$height)
      ce(1.4 * e$size$height)
      pe(e$size$height / 3.2)
      ge(1.4 * e$size$height / 2)
    } else {
      if (e$attributes$mode === $$_77.c.PRIMARY) {
        if (D === $$_77.b.VERTICAL) {
          oe(e$size$height)
          ce(1.6 * e$size$height)
        } else {
          oe(1.6 * e$size$height)
          ce(e$size$height)
        }
        pe(e$size$height / 10)
        ge(e$size$height / 2.5)
      }
    }
  }, [L, e$attributes$mode, e$size, B, D])
  var Ae = function (e) {
    var t = function (e) {
      var t = Color(e).toString()
      return {
        default: {
          stepBackgroundColor: $$_15.hb(t, .2),
          handleBorderColor: t,
          trackBackgroundColor: t
        },
        disabled: {
          stepBackgroundColor: $$_15.hb("#ccc", .2),
          handleBorderColor: "#ccc",
          trackBackgroundColor: "#ccc"
        }
      }
    }(e$attributes$color)
    return e ? t.disabled : t.default
  }(e$attributes$disabled)
  function Ie(e, t) {
    return t / e * 100 + "%"
  }
  var je = _React.useCallback(function (e, n) {
    var /* [auto-meaningful-name] */t$current
    var /* [auto-meaningful-name] */q$current = q.current
    var /* [auto-meaningful-name] */X$current = X.current
    var /* [auto-meaningful-name] */_t$current = t.current
    var s = null === (t$current = t.current) || undefined === t$current ? undefined : t$current.getClientRects()[0]
    if (!s) {
      return e$attributes$value
    }
    var c = Math.max(e$attributes$maxValue - e$attributes$minValue, 1)
    if (q$current && X$current && _t$current) {
      if (D === $$_77.b.HORIZONTAL) {
        var /* [auto-meaningful-name] */_t$current$getClientRects0$width = _t$current.getClientRects()[0].width
        var /* [auto-meaningful-name] */q$current$offsetWidth = q$current.offsetWidth
        var d = _t$current$getClientRects0$width / (c / e$attributes$step)
        var p = Math.max(Math.min(e - s.left, _t$current$getClientRects0$width), 0)
        var f = p / d >= c / e$attributes$step ? Math.ceil(p / d) : Math.round(p / d)
        p = f * d
        var h = Math.min(e$attributes$step * f + e$attributes$minValue, e$attributes$maxValue)
        var m = Ie(_t$current$getClientRects0$width, p = Math.min(p, _t$current$getClientRects0$width))
        q$current.style.left = "calc(".concat(m, " - ").concat(q$current$offsetWidth / 2, "px)")
        X$current.style.width = m
        return h
      }
      var /* [auto-meaningful-name] */_t$current$getClientRects0$height = _t$current.getClientRects()[0].height
      var /* [auto-meaningful-name] */q$current$offsetHeight = q$current.offsetHeight
      var b = _t$current$getClientRects0$height / (c / e$attributes$step)
      var y = Math.max(Math.min(s.bottom - n, _t$current$getClientRects0$height), 0)
      var E = y / b >= c / e$attributes$step ? Math.ceil(y / b) : Math.round(y / b)
      y = E * b
      var O = Math.min(e$attributes$step * E + e$attributes$minValue, e$attributes$maxValue)
      var w = Ie(_t$current$getClientRects0$height, y = Math.min(y, _t$current$getClientRects0$height))
      q$current.style.bottom = "calc(".concat(w, " - ").concat(q$current$offsetHeight / 2, "px)")
      X$current.style.height = w
      return O
    }
    return e$attributes$value
  }, [D, e$attributes$maxValue, e$attributes$minValue, e$attributes$step, e$attributes$value])
  var Ne = _React.useCallback(function (e) {
    if ($$_15.W()) {
      b = true
      if (!e$attributes$disabled) {
        if (e$onStartToSlid) {
          e$onStartToSlid(e$attributes$value)
        }
      }
    }
  }, [e$attributes$disabled, e$onStartToSlid, e$attributes$value])
  var Re = _React.useCallback(function (e) {
    if ($$_15.W() && !e$attributes$disabled) {
      b = true
      var t = je(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
      if (e$onSliderChange) {
        e$onSliderChange(t)
      }
    }
  }, [e$attributes$disabled, je, e$onSliderChange])
  var ke = _React.useCallback(function () {
    b = false
    if (!e$attributes$disabled) {
      if (e$onEndToSlid) {
        e$onEndToSlid(e$attributes$value)
      }
    }
  }, [e$attributes$disabled, e$onEndToSlid, e$attributes$value])
  _React.useLayoutEffect(function () {
    var /* [auto-meaningful-name] */X$current = X.current
    var /* [auto-meaningful-name] */q$current = q.current
    var /* [auto-meaningful-name] */t$current = t.current
    var o = Math.max(e$attributes$maxValue - e$attributes$minValue, 1)
    if (X$current && q$current && t$current) {
      if (D === $$_77.b.HORIZONTAL) {
        var /* [auto-meaningful-name] */t$current$offsetWidth = t$current.offsetWidth
        var /* [auto-meaningful-name] */q$current$offsetWidth = q$current.offsetWidth
        var s = (e$attributes$value - e$attributes$minValue) / o * t$current$offsetWidth
        if (e$attributes$value === e$attributes$maxValue && e$attributes$minValue === e$attributes$maxValue) {
          s = 1 / o * t$current$offsetWidth
        }
        var c = Ie(t$current$offsetWidth, s)
        q$current.style.left = "calc(".concat(c, " - ").concat(q$current$offsetWidth / 2, "px)")
        q$current.style.bottom = "auto"
        X$current.style.width = c
        X$current.style.height = "100%"
      } else {
        var /* [auto-meaningful-name] */t$current$offsetHeight = t$current.offsetHeight
        var /* [auto-meaningful-name] */q$current$offsetHeight = q$current.offsetHeight
        var d = (e$attributes$value - e$attributes$minValue) / o * t$current$offsetHeight
        if (e$attributes$value === e$attributes$maxValue && e$attributes$minValue === e$attributes$maxValue) {
          d = 1 / o * t$current$offsetHeight
        }
        var p = Ie(t$current$offsetHeight, d)
        q$current.style.bottom = "calc(".concat(p, " - ").concat(q$current$offsetHeight / 2, "px)")
        q$current.style.left = "auto"
        X$current.style.width = "100%"
        X$current.style.height = p
      }
    }
  }, [re, se, e$attributes$maxValue, e$attributes$minValue, e$attributes$value, D, $, e$size])
  _React.useEffect(function () {
    if (!$$_15.W()) {
      var e = e$attributes$value
      var t = e$attributes$value
      var n = $$_15.p(function () {
        if (e$onSliderChange) {
          e$onSliderChange(e)
        }
      }, 60)
      var /* [auto-meaningful-name] */q$current = q.current
      if (q$current) {
        if (!(null === q$current || undefined === q$current)) {
          q$current.addEventListener("mousedown", a, {
            passive: false
          })
        }
      }
      return function () {
        if (!(null === q$current || undefined === q$current)) {
          q$current.removeEventListener("mousedown", a)
        }
      }
    }
    function i(o) {
      if (Q.current === r.DOWN) {
        e = je(o.clientX, o.clientY)
        if (t !== e) {
          t = e
          if (e$onSliderChange) {
            if (e$isEditState) {
              n()
            } else {
              e$onSliderChange(e)
            }
          }
        }
      }
    }
    function a(e) {
      if (!(e$attributes$disabled || e$isEditState && !S)) {
        e.preventDefault()
        e.stopPropagation()
        Q.current = r.DOWN
        if (e$onStartToSlid) {
          e$onStartToSlid(e$attributes$value)
        }
        document.addEventListener("mousemove", i, {
          passive: false
        })
        document.addEventListener("mouseup", s, {
          passive: false
        })
        document.addEventListener("mouseleave", s, {
          passive: false
        })
      }
    }
    function s(t) {
      t.stopPropagation()
      Q.current = r.UP
      if (e$onEndToSlid) {
        e$onEndToSlid(e)
      }
      document.removeEventListener("mousemove", i)
      document.removeEventListener("mouseup", s)
      document.removeEventListener("mouseleave", s)
    }
  }, [e$attributes$disabled, je, n, e$isEditState, e$onEndToSlid, e$onSliderChange, e$onStartToSlid, S, e$attributes$value])
  return React.createElement("div", {
    id: n,
    "data-role": p.M,
    "data-widget-type": p.E,
    className: d($$_90.b, $$_11.a({}, $_159.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$size.height,
      width: e$size.width,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled && $ ? "saturate(0)" : undefined
    }
  }, React.createElement("div", {
    className: $_159.sliderBox
  }, React.createElement("div", {
    className: $_159.main,
    ref: t,
    style: {
      borderRadius: $ ? 0 : D === $$_77.b.HORIZONTAL ? e$size.height / 2 : e$size.width / 2,
      backgroundColor: $ ? "transparent" : "#fff"
    }
  }, React.createElement("div", {
    className: d($_159.step, D === $$_77.b.VERTICAL && $_159.vertical),
    style: {
      width: "100%",
      height: "100%",
      borderRadius: $ ? 0 : D === $$_77.b.HORIZONTAL ? e$size.height / 2 : e$size.width / 2,
      backgroundColor: $ ? undefined : Ae.stepBackgroundColor,
      backgroundImage: $ ? "url(".concat(G === D ? e$backgroundImageUrl : we, ")") : undefined
    }
  }, React.createElement("div", {
    className: d($_159.trackBox, D === $$_77.b.HORIZONTAL ? $_159.horizontalTrackBox : $_159.verticalTrackBox),
    ref: X,
    style: {
      backgroundColor: $ ? undefined : Ae.trackBackgroundColor
    }
  }, React.createElement("div", {
    className: $_159.track,
    style: {
      width: D === $$_77.b.HORIZONTAL ? e$size.width : "100%",
      height: D === $$_77.b.HORIZONTAL ? "100%" : e$size.height,
      backgroundImage: $ ? "url(".concat(U === D ? e$trackImageUrl : be, ")") : undefined
    }
  }))), React.createElement("div", {
    onTouchStart: Ne,
    onTouchMove: Re,
    onTouchEnd: ke,
    ref: q,
    className: d($_159.handle, $ ? $_159.imageHandle : $_159.templateHandle, H === D ? $_159.horizontalHandle : $_159.verticalHandle, H === $$_77.b.HORIZONTAL && D === $$_77.b.VERTICAL ? $_159.verticalRotate : $_159.horizontalRotate, e$isEditState && !S && $_159.handleNotSelected),
    style: {
      width: re,
      height: se,
      borderWidth: de,
      borderRadius: me,
      borderColor: Ae.handleBorderColor,
      color: $$_15.hb(Ae.handleBorderColor, .3),
      backgroundImage: $ ? "url(".concat(e$handleImageUrl, ")") : undefined
    }
  }, !$ && e$attributes$mode === $$_77.c.PRIMARY && React.createElement("div", {
    className: $_159.handleInner,
    style: {
      color: Ae.handleBorderColor
    }
  })))))
}
export { _a as a }
export { b }
export default _a
