/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：548
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_11 from "../11"
import { useEffect } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */Color1 from "color"
import * as c from "../8"
import l from "../8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_90 from "../90"
import * as /* [auto-meaningful-name] */$$_131 from "../131"
import * as /* [auto-meaningful-name] */$$_15 from "../../../../../src/shared/tools"
import * as h from "../9"
import * as /* [auto-meaningful-name] */$$_53 from "../53"
import * as /* [auto-meaningful-name] */$$_163 from "../163"
import * as /* [auto-meaningful-name] */$_201 from "./201"
import /* [auto-meaningful-name] */$_2011 from "./201"
var _a
_a = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$onSwitch = e.onSwitch
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$isEditState = e.isEditState
  var /* [auto-meaningful-name] */e$attributes$mode = e$attributes.mode
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$value = e$attributes.value
  var /* [auto-meaningful-name] */e$attributes$backgroundMode = e$attributes.backgroundMode
  var /* [auto-meaningful-name] */e$attributes$backgroundOpenImage = e$attributes.backgroundOpenImage
  var /* [auto-meaningful-name] */e$attributes$backgroundCloseImage = e$attributes.backgroundCloseImage
  var /* [auto-meaningful-name] */e$attributes$imageResizeMode = e$attributes.imageResizeMode
  var N = React1.useRef(null)
  var R = React1.useRef(null)
  var k = React1.useRef(false)
  var x = function () {
    var e = function (e, t) {
      var n
      var o = Color1(t).toString()
      return (n = {}, $$_11.a(n, $$_163.c.DEFAULT, {
        turnOn: {
          backgroundColor: $$_15.hb(o, .3),
          handleColor: o
        },
        turnOff: {
          backgroundColor: $$_15.hb("#000", .2),
          handleColor: "#ffffff"
        },
        disabled: {
          backgroundColor: $$_15.hb("#000", .1),
          handleColor: "#ffffff"
        }
      }), $$_11.a(n, $$_163.c.PRIMARY, {
        turnOn: {
          backgroundColor: o,
          handleColor: "#ffffff"
        },
        turnOff: {
          backgroundColor: $$_15.hb("#000", .2),
          handleColor: "#ffffff"
        },
        disabled: {
          backgroundColor: $$_15.hb("#000", .1),
          handleColor: "#ffffff"
        }
      }), n)[e]
    }(e$attributes$mode, e$attributes$color)
    return e$attributes$disabled ? e.disabled : e$attributes$value ? e.turnOn : e.turnOff
  }()
  var D = h.hb(e$attributes$backgroundOpenImage)
  var M = $$_15.U(e$attributes$backgroundOpenImage) ? e$attributes$backgroundOpenImage : D ? (null === D || undefined === D ? undefined : D.source) || (null === D || undefined === D ? undefined : D.cdnUrl) : $$_131.b
  var L = h.hb(e$attributes$backgroundCloseImage)
  var P = $$_15.U(e$attributes$backgroundCloseImage) ? e$attributes$backgroundCloseImage : L ? (null === L || undefined === L ? undefined : L.source) || (null === L || undefined === L ? undefined : L.cdnUrl) : $$_131.a
  var B = React1.createElement("div", {
    ref: R,
    style: {
      backgroundSize: "contain" === e$attributes$imageResizeMode ? "contain" : "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: e$size.height,
      width: e$size.width
    }
  })
  useEffect(function () {
    if (e$attributes$backgroundMode === $$_163.a.IMAGE && !k.current) {
      var /* [auto-meaningful-name] */R$current = R.current
      if (!R$current) {
        return
      }
      R$current.style.backgroundImage = "url(".concat(e$attributes$value ? M : P, ")")
      return function () {
        R$current.style.backgroundImage = "none"
      }
    }
  }, [M, P, e$attributes$backgroundMode, e$attributes$value])
  return React1.createElement("div", {
    id: t,
    "data-role": $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.M,
    "data-widget-type": $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.F,
    "data-min-width": $$_131.j,
    "data-max-width": $$_53.o,
    "data-min-height": $$_131.i,
    "data-max-height": $$_53.m,
    className: l($_2011.switchWidget, $$_90.b, $$_11.a({}, $_2011.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$size.height,
      width: e$size.width,
      minWidth: "".concat($$_131.j, "px"),
      minHeight: "".concat($$_131.i, "px"),
      maxWidth: "".concat($$_53.o, "px"),
      maxHeight: "".concat($$_53.m, "px"),
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled && e$attributes$backgroundMode === $$_163.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined
    },
    onClick: function (t) {
      if (!e$attributes$disabled) {
        if (e$onSwitch) {
          e$onSwitch(!e$attributes$value)
        }
        if (e$attributes$backgroundMode === $$_163.a.TEMPLATE) {
          var /* [auto-meaningful-name] */N$current
          if (!(null === (N$current = N.current) || undefined === N$current)) {
            N$current.classList.add($_2011.leftAnimation)
          }
          setTimeout(function () {
            var /* [auto-meaningful-name] */N$current1
            if (!(null === (N$current1 = N.current) || undefined === N$current1)) {
              N$current1.classList.remove($_2011.leftAnimation)
            }
          }, 100)
        } else {
          var /* [auto-meaningful-name] */R$current = R.current
          if (!h.s(e.id) && e$isEditState || !R$current) {
            return
          }
          R$current.classList.add($_2011.imageAnimationFirstHalf)
          k.current = true
          setTimeout(function () {
            R$current.classList.remove($_2011.imageAnimationFirstHalf)
            R$current.classList.add($_2011.imageAnimationSecondHalf)
            R$current.style.backgroundImage = "url(".concat(e$attributes$value ? P : M, ")")
            setTimeout(function () {
              R$current.classList.remove($_2011.imageAnimationSecondHalf)
              k.current = false
            }, 100)
          }, 100)
        }
      }
    }
  }, e$attributes$backgroundMode === $$_163.a.IMAGE ? B : function () {
    var /* [auto-meaningful-name] */e$size$width = e$size.width
    var /* [auto-meaningful-name] */e$size$height = e$size.height
    e$size$height = (e$size$width = Math.min(e$size$width, e$size$height * $$_131.k)) / $$_131.k
    return React1.createElement("div", {
      className: $_2011.templateWrapper,
      style: {
        width: e$size$width,
        height: e$size$height
      }
    }, e$attributes$mode === $$_163.c.DEFAULT ? React1.createElement("div", {
      className: $_2011.default,
      style: {
        backgroundColor: x.backgroundColor,
        borderRadius: e$size$height / 2
      }
    }, React1.createElement("div", {
      ref: N,
      className: l($_2011.handle),
      style: {
        height: e$size$height,
        width: e$size$height,
        backgroundColor: x.handleColor,
        left: e$attributes$value ? "calc(100% - ".concat(e$size$height, "px)") : 0
      }
    })) : React1.createElement("div", {
      className: $_2011.primary,
      style: {
        borderRadius: e$size$height / 2,
        backgroundColor: x.backgroundColor,
        height: e$size$height,
        width: e$size$width
      }
    }, React1.createElement("div", {
      className: l($_2011.handle),
      style: {
        backgroundColor: x.handleColor,
        height: e$size$height,
        width: e$size$height,
        left: e$attributes$value ? "calc(100% - ".concat(e$size$height, "px)") : 0
      }
    })))
  }())
}
export { _a as a }
export default _a
