/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：549
 */

import "./index__part-0"
import { r } from "./index__part-1"
var b = false
import /* [auto-meaningful-name] */Module_159 from /* 159 */"./159"
import * as /* [auto-meaningful-name] */Module_77 from /* 77 */"../77"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../90"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useRef, useState, useEffect, useCallback, useLayoutEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../10/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../11"
var _a
_a = function (e) {
  var t = useRef(null)
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
  var D = undefined === e$attributes$direction ? Module_77.b.HORIZONTAL : e$attributes$direction
  var /* [auto-meaningful-name] */e$attributes$sliderType = e$attributes.sliderType
  var L = undefined === e$attributes$sliderType ? Module_77.d.TEMPLATE : e$attributes$sliderType
  var /* [auto-meaningful-name] */e$attributes$handleImageRatio = e$attributes.handleImageRatio
  var B = undefined === e$attributes$handleImageRatio ? 2 : e$attributes$handleImageRatio
  var /* [auto-meaningful-name] */e$attributes$backgroundImageDirection = e$attributes.backgroundImageDirection
  var G = undefined === e$attributes$backgroundImageDirection ? Module_77.b.HORIZONTAL : e$attributes$backgroundImageDirection
  var /* [auto-meaningful-name] */e$attributes$trackImageDirection = e$attributes.trackImageDirection
  var U = undefined === e$attributes$trackImageDirection ? Module_77.b.HORIZONTAL : e$attributes$trackImageDirection
  var H = e$attributes.handleImageDirection || Module_77.b.HORIZONTAL
  var /* [auto-meaningful-name] */e$attributes$mode = e$attributes.mode
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$value = e$attributes.value
  var q = useRef(null)
  var X = useRef(null)
  var Q = useRef(r.UP)
  var Z = useState(false)
  var J = Module_10.a(Z, 2)
  var $ = J[0]
  var ee = J[1]
  var te = useState(0)
  var ne = Module_10.a(te, 2)
  var re = ne[0]
  var oe = ne[1]
  var ie = useState(0)
  var ae = Module_10.a(ie, 2)
  var se = ae[0]
  var ce = ae[1]
  var le = useState(0)
  var ue = Module_10.a(le, 2)
  var de = ue[0]
  var pe = ue[1]
  var fe = useState(0)
  var he = Module_10.a(fe, 2)
  var me = he[0]
  var ge = he[1]
  var _e = useState("")
  var ve = Module_10.a(_e, 2)
  var be = ve[0]
  var ye = ve[1]
  var Ee = useState("")
  var Oe = Module_10.a(Ee, 2)
  var we = Oe[0]
  var Ce = Oe[1]
  var Te = useRef(1)
  var Se = useRef(1)
  useEffect(function () {
    if (e$trackImageUrl) {
      Te.current = Te.current + 1
      var /* [auto-meaningful-name] */Te$current = Te.current
      Src_shared_tools_index.gb(e$trackImageUrl, U === Module_77.b.HORIZONTAL ? -90 : 90).then(function (t) {
        if (!(Te.current > Te$current)) {
          ye(t)
        }
      }).catch(function () {
        return ye("")
      })
    }
  }, [e$trackImageUrl, U])
  useEffect(function () {
    if (e$backgroundImageUrl) {
      Se.current = Se.current + 1
      var /* [auto-meaningful-name] */Se$current = Se.current
      Src_shared_tools_index.gb(e$backgroundImageUrl, G === Module_77.b.HORIZONTAL ? -90 : 90).then(function (t) {
        if (!(Se.current > Se$current)) {
          Ce(t)
        }
      }).catch(function () {
        return Ce("")
      })
    }
  }, [e$backgroundImageUrl, G])
  useEffect(function () {
    if (L === Module_77.d.IMAGE) {
      ee(true)
    } else {
      ee(false)
    }
  }, [L])
  useEffect(function () {
    var /* [auto-meaningful-name] */e$size$height = e$size.height
    if (D === Module_77.b.VERTICAL) {
      e$size$height = e$size.width
    }
    if (L === Module_77.d.IMAGE) {
      oe(e$size$height * B)
      ce(e$size$height * B)
      pe(0)
      return void ge(0)
    }
    if (e$attributes$mode === Module_77.c.DEFAULT) {
      oe(1.4 * e$size$height)
      ce(1.4 * e$size$height)
      pe(e$size$height / 3.2)
      ge(1.4 * e$size$height / 2)
    } else {
      if (e$attributes$mode === Module_77.c.PRIMARY) {
        if (D === Module_77.b.VERTICAL) {
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
          stepBackgroundColor: Src_shared_tools_index.hb(t, .2),
          handleBorderColor: t,
          trackBackgroundColor: t
        },
        disabled: {
          stepBackgroundColor: Src_shared_tools_index.hb("#ccc", .2),
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
  var je = useCallback(function (e, n) {
    var /* [auto-meaningful-name] */t$current
    var /* [auto-meaningful-name] */q$current = q.current
    var /* [auto-meaningful-name] */X$current = X.current
    var /* [auto-meaningful-name] */t$current1 = t.current
    var s = null === (t$current = t.current) || undefined === t$current ? undefined : t$current.getClientRects()[0]
    if (!s) {
      return e$attributes$value
    }
    var c = Math.max(e$attributes$maxValue - e$attributes$minValue, 1)
    if (q$current && X$current && t$current1) {
      if (D === Module_77.b.HORIZONTAL) {
        var /* [auto-meaningful-name] */t$current1$getClientRects0$width = t$current1.getClientRects()[0].width
        var /* [auto-meaningful-name] */q$current$offsetWidth = q$current.offsetWidth
        var d = t$current1$getClientRects0$width / (c / e$attributes$step)
        var p = Math.max(Math.min(e - s.left, t$current1$getClientRects0$width), 0)
        var f = p / d >= c / e$attributes$step ? Math.ceil(p / d) : Math.round(p / d)
        p = f * d
        var h = Math.min(e$attributes$step * f + e$attributes$minValue, e$attributes$maxValue)
        var m = Ie(t$current1$getClientRects0$width, p = Math.min(p, t$current1$getClientRects0$width))
        q$current.style.left = "calc(".concat(m, " - ").concat(q$current$offsetWidth / 2, "px)")
        X$current.style.width = m
        return h
      }
      var /* [auto-meaningful-name] */t$current1$getClientRects0$height = t$current1.getClientRects()[0].height
      var /* [auto-meaningful-name] */q$current$offsetHeight = q$current.offsetHeight
      var b = t$current1$getClientRects0$height / (c / e$attributes$step)
      var y = Math.max(Math.min(s.bottom - n, t$current1$getClientRects0$height), 0)
      var E = y / b >= c / e$attributes$step ? Math.ceil(y / b) : Math.round(y / b)
      y = E * b
      var O = Math.min(e$attributes$step * E + e$attributes$minValue, e$attributes$maxValue)
      var w = Ie(t$current1$getClientRects0$height, y = Math.min(y, t$current1$getClientRects0$height))
      q$current.style.bottom = "calc(".concat(w, " - ").concat(q$current$offsetHeight / 2, "px)")
      X$current.style.height = w
      return O
    }
    return e$attributes$value
  }, [D, e$attributes$maxValue, e$attributes$minValue, e$attributes$step, e$attributes$value])
  var Ne = useCallback(function (e) {
    if (Src_shared_tools_index.W()) {
      b = true
      if (!e$attributes$disabled) {
        if (e$onStartToSlid) {
          e$onStartToSlid(e$attributes$value)
        }
      }
    }
  }, [e$attributes$disabled, e$onStartToSlid, e$attributes$value])
  var Re = useCallback(function (e) {
    if (Src_shared_tools_index.W() && !e$attributes$disabled) {
      b = true
      var t = je(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
      if (e$onSliderChange) {
        e$onSliderChange(t)
      }
    }
  }, [e$attributes$disabled, je, e$onSliderChange])
  var ke = useCallback(function () {
    b = false
    if (!e$attributes$disabled) {
      if (e$onEndToSlid) {
        e$onEndToSlid(e$attributes$value)
      }
    }
  }, [e$attributes$disabled, e$onEndToSlid, e$attributes$value])
  useLayoutEffect(function () {
    var /* [auto-meaningful-name] */X$current = X.current
    var /* [auto-meaningful-name] */q$current = q.current
    var /* [auto-meaningful-name] */t$current = t.current
    var o = Math.max(e$attributes$maxValue - e$attributes$minValue, 1)
    if (X$current && q$current && t$current) {
      if (D === Module_77.b.HORIZONTAL) {
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
  useEffect(function () {
    if (!Src_shared_tools_index.W()) {
      var e = e$attributes$value
      var t = e$attributes$value
      var n = Src_shared_tools_index.p(function () {
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
    "data-role": Src_editor_widget_builtIn_types.M,
    "data-widget-type": Src_editor_widget_builtIn_types.E,
    className: Classnames(Module_90.b, Module_11.a({}, Module_159.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$size.height,
      width: e$size.width,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled && $ ? "saturate(0)" : undefined
    }
  }, React.createElement("div", {
    className: Module_159.sliderBox
  }, React.createElement("div", {
    className: Module_159.main,
    ref: t,
    style: {
      borderRadius: $ ? 0 : D === Module_77.b.HORIZONTAL ? e$size.height / 2 : e$size.width / 2,
      backgroundColor: $ ? "transparent" : "#fff"
    }
  }, React.createElement("div", {
    className: Classnames(Module_159.step, D === Module_77.b.VERTICAL && Module_159.vertical),
    style: {
      width: "100%",
      height: "100%",
      borderRadius: $ ? 0 : D === Module_77.b.HORIZONTAL ? e$size.height / 2 : e$size.width / 2,
      backgroundColor: $ ? undefined : Ae.stepBackgroundColor,
      backgroundImage: $ ? "url(".concat(G === D ? e$backgroundImageUrl : we, ")") : undefined
    }
  }, React.createElement("div", {
    className: Classnames(Module_159.trackBox, D === Module_77.b.HORIZONTAL ? Module_159.horizontalTrackBox : Module_159.verticalTrackBox),
    ref: X,
    style: {
      backgroundColor: $ ? undefined : Ae.trackBackgroundColor
    }
  }, React.createElement("div", {
    className: Module_159.track,
    style: {
      width: D === Module_77.b.HORIZONTAL ? e$size.width : "100%",
      height: D === Module_77.b.HORIZONTAL ? "100%" : e$size.height,
      backgroundImage: $ ? "url(".concat(U === D ? e$trackImageUrl : be, ")") : undefined
    }
  }))), React.createElement("div", {
    onTouchStart: Ne,
    onTouchMove: Re,
    onTouchEnd: ke,
    ref: q,
    className: Classnames(Module_159.handle, $ ? Module_159.imageHandle : Module_159.templateHandle, H === D ? Module_159.horizontalHandle : Module_159.verticalHandle, H === Module_77.b.HORIZONTAL && D === Module_77.b.VERTICAL ? Module_159.verticalRotate : Module_159.horizontalRotate, e$isEditState && !S && Module_159.handleNotSelected),
    style: {
      width: re,
      height: se,
      borderWidth: de,
      borderRadius: me,
      borderColor: Ae.handleBorderColor,
      color: Src_shared_tools_index.hb(Ae.handleBorderColor, .3),
      backgroundImage: $ ? "url(".concat(e$handleImageUrl, ")") : undefined
    }
  }, !$ && e$attributes$mode === Module_77.c.PRIMARY && React.createElement("div", {
    className: Module_159.handleInner,
    style: {
      color: Ae.handleBorderColor
    }
  })))))
}
export { _a as a }
export { b }
export default _a
