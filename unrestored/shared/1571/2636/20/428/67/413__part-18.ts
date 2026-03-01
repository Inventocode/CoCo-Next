/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-18
 */

"use strict"

import { T } from "./413__part-1"
import { j } from "./413__part-2"
import { F } from "./413__part-4"
import { V } from "./413__part-5"
import { Z } from "./413__part-6"
import { $ } from "./413__part-7"
import { te } from "./413__part-8"
import { re } from "./413__part-9"
import { ae } from "./413__part-10"
import { le } from "./413__part-11"
import { ve } from "./413__part-12"
import { we } from "./413__part-13"
import { Ie } from "./413__part-14"
import { xe } from "./413__part-15"
import { Le } from "./413__part-16"
import { Be } from "./413__part-17"
import * as /* [auto-meaningful-name] */Module_428 from /* 428 */"../index"
import * as /* [auto-meaningful-name] */Module_95 from /* 95 */"../../../95"
import /* [auto-meaningful-name] */Module_290 from /* 290 */"../../../290"
import * as /* [auto-meaningful-name] */Module_76 from /* 76 */"../../../76"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../10/index"
import * as /* [auto-meaningful-name] */Module_112 from /* 112 */"../../../34/347/112"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../6"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../../28/index"
import * as /* [auto-meaningful-name] */Module_242 from /* 242 */"../242"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../55"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../11"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import /* [auto-meaningful-name] */Color from /* 51 */"color"
import * as /* [auto-meaningful-name] */Module_552 from /* 552 */"../../../552/index"
var Ge = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var r = React1.useCallback(function (e) {
    var r = Module_28.k(e)
    Module_20.emitTimePickerSelectDone(t, r.time, r.h, r.min, r.s)
    Module_20.setWidgetAttribute(t, "timeStamp", new Date(e).getTime())
    Module_55.b.playerWidgetLog({
      widgetId: t,
      widgetType: e$type,
      message: "onWidgetSelected"
    })
  }, [t, e$type])
  return React.createElement(Module_552.a, Object.assign({}, e, {
    onDatePickerChange: r
  }))
}
var We
var Ue = function () {
  return null
}
We = {}
Module_11.a(We, Src_editor_widget_builtIn_types.H, T)
Module_11.a(We, Src_editor_widget_builtIn_types.d, j)
Module_11.a(We, Src_editor_widget_builtIn_types.z, F)
Module_11.a(We, Src_editor_widget_builtIn_types.v, V)
Module_11.a(We, Src_editor_widget_builtIn_types.w, function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$placeholder = e$attributes.placeholder
  var /* [auto-meaningful-name] */e$attributes$errorMessage = e$attributes.errorMessage
  var /* [auto-meaningful-name] */e$attributes$value = e$attributes.value
  var /* [auto-meaningful-name] */e$attributes$textAlign = e$attributes.textAlign
  var b = undefined === e$attributes$textAlign ? "left" : e$attributes$textAlign
  var /* [auto-meaningful-name] */e$attributes$placeholderColor = e$attributes.placeholderColor
  var /* [auto-meaningful-name] */e$attributes$valueColor = e$attributes.valueColor
  var /* [auto-meaningful-name] */e$attributes$fontFamily = e$attributes.fontFamily
  var /* [auto-meaningful-name] */e$attributes$fontSize = e$attributes.fontSize
  var /* [auto-meaningful-name] */e$attributes$backgroundMode = e$attributes.backgroundMode
  var /* [auto-meaningful-name] */e$attributes$templateMode = e$attributes.templateMode
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$backgroundImage = e$attributes.backgroundImage
  var /* [auto-meaningful-name] */e$attributes$imageResizeMode = e$attributes.imageResizeMode
  var /* [auto-meaningful-name] */e$size$width = e$size.width
  var /* [auto-meaningful-name] */e$size$height = e$size.height
  var M = React1.useState(e$attributes$placeholder)
  var L = Module_10.a(M, 2)
  var P = L[0]
  var F = L[1]
  var G = React1.useState(false)
  var W = Module_10.a(G, 2)
  var U = W[0]
  var H = W[1]
  var V = React1.useMemo(function () {
    var e = e$attributes$errorMessage ? Module_95.d : e$attributes$backgroundColor
    try {
      return Color(e.toString()).toString()
    } catch (r) {
      Module_55.b.widgetError({
        widgetId: t,
        widgetType: e$type,
        message: "player/colorError"
      })
      return ""
    }
  }, [e$attributes$backgroundColor, e$attributes$errorMessage, t, e$type])
  var K = Module_112.b(e$attributes$backgroundImage) || Module_95.a
  var J = React1.useMemo(function () {
    if (!U || e$attributes$backgroundMode === Module_76.a.IMAGE) {
      return {}
    }
    var e = undefined !== e$attributes$errorMessage ? Module_95.d : V
    return function (e, t) {
      var n
      return (n = {}, Module_11.a(n, Module_76.c.OUTLINED_NORMAL, {
        borderColor: t
      }), Module_11.a(n, Module_76.c.CONTAINED_NORMAL, {
        background: Z(t, .3)
      }), Module_11.a(n, Module_76.c.CONTAINED_ROUND, {
        background: Z(t, .3)
      }), Module_11.a(n, Module_76.c.OUTLINED_FLAT, {
        borderBottomColor: t
      }), n)[e]
    }(e$attributes$templateMode, e)
  }, [U, e$attributes$backgroundMode, e$attributes$errorMessage, V, e$attributes$templateMode])
  var $ = undefined
  var ee = React1.useMemo(function () {
    return function (e, t, n) {
      var r
      return (r = {}, Module_11.a(r, Module_76.c.OUTLINED_NORMAL, {
        background: "rgba(255, 255, 255)",
        borderRadius: "4px",
        border: "2px solid ".concat(Z(t, .5)),
        borderColor: Z(t, .5)
      }), Module_11.a(r, Module_76.c.CONTAINED_NORMAL, {
        background: Z(t, .14),
        borderRadius: "4px"
      }), Module_11.a(r, Module_76.c.CONTAINED_ROUND, {
        background: Z(t, .14),
        borderRadius: "".concat(n / 2, "px")
      }), Module_11.a(r, Module_76.c.OUTLINED_FLAT, {
        borderBottom: "2px solid ".concat(Z(t, .5)),
        borderBottomColor: Z(t, .5)
      }), r)[e]
    }(e$attributes$templateMode, V, e$size$height)
  }, [V, e$size$height, e$attributes$templateMode])
  if (e$attributes$backgroundMode === Module_76.a.IMAGE) {
    $ = {
      backgroundImage: "url(".concat(K, ")"),
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "contain" === e$attributes$imageResizeMode ? "contain" : "100% 100%",
      padding: "6px ".concat(20, "px")
    }
  } else {
    $ = Module_6.a(Module_6.a({}, ee), {}, {
      padding: "6px ".concat(14, "px")
    })
  }
  var te = React1.useMemo(function () {
    if (e$attributes$disabled) {
      return function (e) {
        var t
        return (t = {}, Module_11.a(t, Module_76.c.OUTLINED_NORMAL, {
          color: "#CCCCCC",
          borderColor: "#E9E9E9"
        }), Module_11.a(t, Module_76.c.CONTAINED_NORMAL, {
          background: "#E7E7E7",
          color: "#FFFFFF"
        }), Module_11.a(t, Module_76.c.CONTAINED_ROUND, {
          background: "#E7E7E7",
          color: "#FFFFFF"
        }), Module_11.a(t, Module_76.c.OUTLINED_FLAT, {
          color: "#CCCCCC",
          borderBottomColor: "#E9E9E9"
        }), t)[e]
      }(e$attributes$templateMode)
    }
  }, [e$attributes$templateMode, e$attributes$disabled])
  React1.useEffect(function () {
    F(e$attributes$placeholder)
  }, [e$attributes$placeholder])
  React1.useEffect(function () {
    var e
    if (!(null === (e = document.getElementById(t)) || undefined === e)) {
      e.style.setProperty("--input-placeholder-color", e$attributes$placeholderColor)
    }
  }, [t, e$attributes$placeholderColor])
  return React.createElement("div", {
    id: t,
    className: Classnames(Module_290.inputWidget, e$attributes$backgroundMode === Module_76.a.TEMPLATE && e$attributes$templateMode !== Module_76.c.OUTLINED_FLAT && Module_290.inputWidgetUnderpainting),
    "data-role": Src_editor_widget_builtIn_types.M,
    "data-type": Src_editor_widget_builtIn_types.w,
    style: Module_6.a(Module_6.a(Module_6.a({
      top: e$position.y,
      left: e$position.x,
      height: e$size$height,
      width: e$size$width,
      visibility: e$visible ? undefined : "hidden",
      pointerEvents: e$visible ? undefined : "none",
      fontSize: e$attributes$fontSize,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled && e$attributes$backgroundMode === Module_76.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined,
      fontFamily: e$attributes$fontFamily,
      color: e$attributes$valueColor
    }, $), J), te)
  }, React.createElement("div", {
    className: Classnames(Module_290.inputWidgetInputWrapper)
  }, React.createElement("input", {
    placeholder: P,
    value: e$attributes$value,
    onChange: function (e) {
      var /* [auto-meaningful-name] */e$target$value = e.target.value
      Module_428.Yh(t, e$target$value)
      Module_20.emitInputChange(t)
    },
    onBlur: function () {
      if (!e$attributes$disabled) {
        H(false)
        F(e$attributes$placeholder)
        Module_242.a(t)
        Module_20.emitInputBlur(t)
        Module_55.b.playerWidgetLog({
          widgetId: t,
          widgetType: e$type,
          message: "onInputBlur"
        })
      }
    },
    onFocus: function () {
      if (!e$attributes$disabled) {
        F("")
        Module_20.emitInputFocus(t)
        H(true)
        Module_55.b.playerWidgetLog({
          widgetId: t,
          widgetType: e$type,
          message: "onInputFocus"
        })
      }
    },
    disabled: e$attributes$disabled,
    style: {
      textAlign: b,
      color: e$attributes$disabled ? Module_95.o : e$attributes$valueColor,
      fontFamily: e$attributes$fontFamily
    }
  }), undefined !== e$attributes$errorMessage && React.createElement("span", {
    className: Module_290.errorMessage,
    style: {
      color: Module_95.d
    }
  }, e$attributes$errorMessage), e$attributes$disabled && React.createElement("div", {
    className: Module_290.mask
  })))
})
Module_11.a(We, Src_editor_widget_builtIn_types.C, $)
Module_11.a(We, Src_editor_widget_builtIn_types.g, te)
Module_11.a(We, Src_editor_widget_builtIn_types.L, re)
Module_11.a(We, Src_editor_widget_builtIn_types.F, ae)
Module_11.a(We, Src_editor_widget_builtIn_types.E, le)
Module_11.a(We, Src_editor_widget_builtIn_types.x, ve)
Module_11.a(We, Src_editor_widget_builtIn_types.A, we)
Module_11.a(We, Src_editor_widget_builtIn_types.f, Ie)
Module_11.a(We, Src_editor_widget_builtIn_types.c, xe)
Module_11.a(We, Src_editor_widget_builtIn_types.a, Le)
Module_11.a(We, Src_editor_widget_builtIn_types.b, Audio)
Module_11.a(We, Src_editor_widget_builtIn_types.n, Be)
Module_11.a(We, Src_editor_widget_builtIn_types.J, Ge)
Module_11.a(We, Src_editor_widget_builtIn_types.e, Ue)
Module_11.a(We, Src_editor_widget_builtIn_types.t, Ue)
Module_11.a(We, Src_editor_widget_builtIn_types.K, Ue)
Module_11.a(We, Src_editor_widget_builtIn_types.I, Ue)
Module_11.a(We, Src_editor_widget_builtIn_types.u, Ue)
Module_11.a(We, Src_editor_widget_builtIn_types.i, Ue)
Module_11.a(We, Src_editor_widget_builtIn_types.y, Ue)
Module_11.a(We, Src_editor_widget_builtIn_types.B, Ue)
Module_11.a(We, Src_editor_widget_builtIn_types.l, Ue)
Module_11.a(We, Src_editor_widget_builtIn_types.m, Ue)
Module_11.a(We, Src_editor_widget_builtIn_types.h, Ue)
Module_11.a(We, Src_editor_widget_builtIn_types.G, Ue)
Module_11.a(We, Src_editor_widget_builtIn_types.j, Ue)
Module_11.a(We, Src_editor_widget_builtIn_types.k, Ue)
var He = We
export { He }
