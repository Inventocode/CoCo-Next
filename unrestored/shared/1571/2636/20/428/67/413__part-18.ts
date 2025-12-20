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
import * as /* [auto-meaningful-name] */$$_index from "../index"
import * as /* [auto-meaningful-name] */$$_$$_$$_95 from "../../../95"
import /* [auto-meaningful-name] */$$_$$_$$_290 from "../../../290"
import * as /* [auto-meaningful-name] */$$_$$_$$_76 from "../../../76"
import * as /* [auto-meaningful-name] */$$_$$_$$_10_index from "../../../10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_34_347_112 from "../../../34/347/112"
import * as /* [auto-meaningful-name] */$$_$$_$$_6 from "../../../6"
import * as /* [auto-meaningful-name] */$$_$$_$$_28_index from "../../../28/index"
import * as /* [auto-meaningful-name] */$$_242 from "../242"
import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import /* [auto-meaningful-name] */$$_$$_$$_8 from "../../../8"
import * as /* [auto-meaningful-name] */$$_$$_$$_11 from "../../../11"
import * as /* [auto-meaningful-name] */$$_$$_$$_5 from "../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import /* [auto-meaningful-name] */Color from "color"
import * as /* [auto-meaningful-name] */$$_$$_$$_552_index from "../../../552/index"
var Ge = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var r = _React.useCallback(function (e) {
    var r = $$_$$_$$_28_index.k(e)
    $$_$$_index.emitTimePickerSelectDone(t, r.time, r.h, r.min, r.s)
    $$_$$_index.setWidgetAttribute(t, "timeStamp", new Date(e).getTime())
    $$_$$_$$_55.b.playerWidgetLog({
      widgetId: t,
      widgetType: e$type,
      message: "onWidgetSelected"
    })
  }, [t, e$type])
  return React.createElement($$_$$_$$_552_index.a, Object.assign({}, e, {
    onDatePickerChange: r
  }))
}
var We
var Ue = function () {
  return null
}
We = {}
$$_$$_$$_11.a(We, $$_$$_$$_5.H, T)
$$_$$_$$_11.a(We, $$_$$_$$_5.d, j)
$$_$$_$$_11.a(We, $$_$$_$$_5.z, F)
$$_$$_$$_11.a(We, $$_$$_$$_5.v, V)
$$_$$_$$_11.a(We, $$_$$_$$_5.w, function (e) {
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
  var M = _React.useState(e$attributes$placeholder)
  var L = $$_$$_$$_10_index.a(M, 2)
  var P = L[0]
  var F = L[1]
  var G = _React.useState(false)
  var W = $$_$$_$$_10_index.a(G, 2)
  var U = W[0]
  var H = W[1]
  var V = _React.useMemo(function () {
    var e = e$attributes$errorMessage ? $$_$$_$$_95.d : e$attributes$backgroundColor
    try {
      return Color(e.toString()).toString()
    } catch (r) {
      $$_$$_$$_55.b.widgetError({
        widgetId: t,
        widgetType: e$type,
        message: "player/colorError"
      })
      return ""
    }
  }, [e$attributes$backgroundColor, e$attributes$errorMessage, t, e$type])
  var K = $$_$$_$$_34_347_112.b(e$attributes$backgroundImage) || $$_$$_$$_95.a
  var J = _React.useMemo(function () {
    if (!U || e$attributes$backgroundMode === $$_$$_$$_76.a.IMAGE) {
      return {}
    }
    var e = undefined !== e$attributes$errorMessage ? $$_$$_$$_95.d : V
    return function (e, t) {
      var n
      return (n = {}, $$_$$_$$_11.a(n, $$_$$_$$_76.c.OUTLINED_NORMAL, {
        borderColor: t
      }), $$_$$_$$_11.a(n, $$_$$_$$_76.c.CONTAINED_NORMAL, {
        background: Z(t, .3)
      }), $$_$$_$$_11.a(n, $$_$$_$$_76.c.CONTAINED_ROUND, {
        background: Z(t, .3)
      }), $$_$$_$$_11.a(n, $$_$$_$$_76.c.OUTLINED_FLAT, {
        borderBottomColor: t
      }), n)[e]
    }(e$attributes$templateMode, e)
  }, [U, e$attributes$backgroundMode, e$attributes$errorMessage, V, e$attributes$templateMode])
  var $ = undefined
  var ee = _React.useMemo(function () {
    return function (e, t, n) {
      var r
      return (r = {}, $$_$$_$$_11.a(r, $$_$$_$$_76.c.OUTLINED_NORMAL, {
        background: "rgba(255, 255, 255)",
        borderRadius: "4px",
        border: "2px solid ".concat(Z(t, .5)),
        borderColor: Z(t, .5)
      }), $$_$$_$$_11.a(r, $$_$$_$$_76.c.CONTAINED_NORMAL, {
        background: Z(t, .14),
        borderRadius: "4px"
      }), $$_$$_$$_11.a(r, $$_$$_$$_76.c.CONTAINED_ROUND, {
        background: Z(t, .14),
        borderRadius: "".concat(n / 2, "px")
      }), $$_$$_$$_11.a(r, $$_$$_$$_76.c.OUTLINED_FLAT, {
        borderBottom: "2px solid ".concat(Z(t, .5)),
        borderBottomColor: Z(t, .5)
      }), r)[e]
    }(e$attributes$templateMode, V, e$size$height)
  }, [V, e$size$height, e$attributes$templateMode])
  if (e$attributes$backgroundMode === $$_$$_$$_76.a.IMAGE) {
    $ = {
      backgroundImage: "url(".concat(K, ")"),
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "contain" === e$attributes$imageResizeMode ? "contain" : "100% 100%",
      padding: "6px ".concat(20, "px")
    }
  } else {
    $ = $$_$$_$$_6.a($$_$$_$$_6.a({}, ee), {}, {
      padding: "6px ".concat(14, "px")
    })
  }
  var te = _React.useMemo(function () {
    if (e$attributes$disabled) {
      return function (e) {
        var t
        return (t = {}, $$_$$_$$_11.a(t, $$_$$_$$_76.c.OUTLINED_NORMAL, {
          color: "#CCCCCC",
          borderColor: "#E9E9E9"
        }), $$_$$_$$_11.a(t, $$_$$_$$_76.c.CONTAINED_NORMAL, {
          background: "#E7E7E7",
          color: "#FFFFFF"
        }), $$_$$_$$_11.a(t, $$_$$_$$_76.c.CONTAINED_ROUND, {
          background: "#E7E7E7",
          color: "#FFFFFF"
        }), $$_$$_$$_11.a(t, $$_$$_$$_76.c.OUTLINED_FLAT, {
          color: "#CCCCCC",
          borderBottomColor: "#E9E9E9"
        }), t)[e]
      }(e$attributes$templateMode)
    }
  }, [e$attributes$templateMode, e$attributes$disabled])
  _React.useEffect(function () {
    F(e$attributes$placeholder)
  }, [e$attributes$placeholder])
  _React.useEffect(function () {
    var e
    if (!(null === (e = document.getElementById(t)) || undefined === e)) {
      e.style.setProperty("--input-placeholder-color", e$attributes$placeholderColor)
    }
  }, [t, e$attributes$placeholderColor])
  return React.createElement("div", {
    id: t,
    className: $$_$$_$$_8($$_$$_$$_290.inputWidget, e$attributes$backgroundMode === $$_$$_$$_76.a.TEMPLATE && e$attributes$templateMode !== $$_$$_$$_76.c.OUTLINED_FLAT && $$_$$_$$_290.inputWidgetUnderpainting),
    "data-role": $$_$$_$$_5.M,
    "data-type": $$_$$_$$_5.w,
    style: $$_$$_$$_6.a($$_$$_$$_6.a($$_$$_$$_6.a({
      top: e$position.y,
      left: e$position.x,
      height: e$size$height,
      width: e$size$width,
      visibility: e$visible ? undefined : "hidden",
      pointerEvents: e$visible ? undefined : "none",
      fontSize: e$attributes$fontSize,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled && e$attributes$backgroundMode === $$_$$_$$_76.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined,
      fontFamily: e$attributes$fontFamily,
      color: e$attributes$valueColor
    }, $), J), te)
  }, React.createElement("div", {
    className: $$_$$_$$_8($$_$$_$$_290.inputWidgetInputWrapper)
  }, React.createElement("input", {
    placeholder: P,
    value: e$attributes$value,
    onChange: function (e) {
      var /* [auto-meaningful-name] */e$target$value = e.target.value
      $$_index.Yh(t, e$target$value)
      $$_$$_index.emitInputChange(t)
    },
    onBlur: function () {
      if (!e$attributes$disabled) {
        H(false)
        F(e$attributes$placeholder)
        $$_242.a(t)
        $$_$$_index.emitInputBlur(t)
        $$_$$_$$_55.b.playerWidgetLog({
          widgetId: t,
          widgetType: e$type,
          message: "onInputBlur"
        })
      }
    },
    onFocus: function () {
      if (!e$attributes$disabled) {
        F("")
        $$_$$_index.emitInputFocus(t)
        H(true)
        $$_$$_$$_55.b.playerWidgetLog({
          widgetId: t,
          widgetType: e$type,
          message: "onInputFocus"
        })
      }
    },
    disabled: e$attributes$disabled,
    style: {
      textAlign: b,
      color: e$attributes$disabled ? $$_$$_$$_95.o : e$attributes$valueColor,
      fontFamily: e$attributes$fontFamily
    }
  }), undefined !== e$attributes$errorMessage && React.createElement("span", {
    className: $$_$$_$$_290.errorMessage,
    style: {
      color: $$_$$_$$_95.d
    }
  }, e$attributes$errorMessage), e$attributes$disabled && React.createElement("div", {
    className: $$_$$_$$_290.mask
  })))
})
$$_$$_$$_11.a(We, $$_$$_$$_5.C, $)
$$_$$_$$_11.a(We, $$_$$_$$_5.g, te)
$$_$$_$$_11.a(We, $$_$$_$$_5.L, re)
$$_$$_$$_11.a(We, $$_$$_$$_5.F, ae)
$$_$$_$$_11.a(We, $$_$$_$$_5.E, le)
$$_$$_$$_11.a(We, $$_$$_$$_5.x, ve)
$$_$$_$$_11.a(We, $$_$$_$$_5.A, we)
$$_$$_$$_11.a(We, $$_$$_$$_5.f, Ie)
$$_$$_$$_11.a(We, $$_$$_$$_5.c, xe)
$$_$$_$$_11.a(We, $$_$$_$$_5.a, Le)
$$_$$_$$_11.a(We, $$_$$_$$_5.b, Audio)
$$_$$_$$_11.a(We, $$_$$_$$_5.n, Be)
$$_$$_$$_11.a(We, $$_$$_$$_5.J, Ge)
$$_$$_$$_11.a(We, $$_$$_$$_5.e, Ue)
$$_$$_$$_11.a(We, $$_$$_$$_5.t, Ue)
$$_$$_$$_11.a(We, $$_$$_$$_5.K, Ue)
$$_$$_$$_11.a(We, $$_$$_$$_5.I, Ue)
$$_$$_$$_11.a(We, $$_$$_$$_5.u, Ue)
$$_$$_$$_11.a(We, $$_$$_$$_5.i, Ue)
$$_$$_$$_11.a(We, $$_$$_$$_5.y, Ue)
$$_$$_$$_11.a(We, $$_$$_$$_5.B, Ue)
$$_$$_$$_11.a(We, $$_$$_$$_5.l, Ue)
$$_$$_$$_11.a(We, $$_$$_$$_5.m, Ue)
$$_$$_$$_11.a(We, $$_$$_$$_5.h, Ue)
$$_$$_$$_11.a(We, $$_$$_$$_5.G, Ue)
$$_$$_$$_11.a(We, $$_$$_$$_5.j, Ue)
$$_$$_$$_11.a(We, $$_$$_$$_5.k, Ue)
var He = We
export { He }
