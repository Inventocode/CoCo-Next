/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_90 from "../../../90"
import /* [auto-meaningful-name] */$$_$$_$$_8 from "../../../8"
import * as /* [auto-meaningful-name] */$$_$$_$$_11 from "../../../11"
import * as /* [auto-meaningful-name] */$$_$$_$$_5 from "../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_6 from "../../../6"
import * as /* [auto-meaningful-name] */$$_$$_$$_322 from "../../../322"
import * as /* [auto-meaningful-name] */$$_$$_$$_82 from "../../../82"
import * as /* [auto-meaningful-name] */$$_$$_$$_60 from "../../../60"
import * as /* [auto-meaningful-name] */$$_$$_$$_114 from "../../../114"
import * as /* [auto-meaningful-name] */$$_$$_$$_218 from "../../../218"
import /* [auto-meaningful-name] */_$$_$$_$$_ from "../../../218"
var P = function (e) {
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$size = e.size
  var r = e.id
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$iconFileOrUrl = e.iconFileOrUrl
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onMouseDown = e.onMouseDown
  var /* [auto-meaningful-name] */e$onMouseUp = e.onMouseUp
  var /* [auto-meaningful-name] */e$attributes$textVisible = e$attributes.textVisible
  var /* [auto-meaningful-name] */e$attributes$text = e$attributes.text
  var /* [auto-meaningful-name] */e$attributes$fontFamily = e$attributes.fontFamily
  var /* [auto-meaningful-name] */e$attributes$maxFontSize = e$attributes.maxFontSize
  var /* [auto-meaningful-name] */e$attributes$textColor = e$attributes.textColor
  var /* [auto-meaningful-name] */e$attributes$textAlign = e$attributes.textAlign
  var /* [auto-meaningful-name] */e$attributes$iconVisible = e$attributes.iconVisible
  var /* [auto-meaningful-name] */e$attributes$iconColor = e$attributes.iconColor
  var /* [auto-meaningful-name] */e$attributes$backgroundMode = e$attributes.backgroundMode
  var /* [auto-meaningful-name] */e$attributes$templateMode = e$attributes.templateMode
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$backgroundImage = e$attributes.backgroundImage
  var /* [auto-meaningful-name] */e$attributes$imageResizeMode = e$attributes.imageResizeMode
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var P = "true" === e$attributes$textVisible.toString()
  var B = "true" === e$attributes$iconVisible.toString()
  var F = P ? e$attributes$textAlign : $$_$$_$$_60.a.CENTER
  var G = e$attributes$maxFontSize
  if (!P) {
    G = $$_$$_$$_82.l
  }
  var W = 2 * $$_$$_$$_82.r
  var U = 2 * $$_$$_$$_82.q
  if (e$attributes$backgroundMode === $$_$$_$$_114.a.IMAGE) {
    W = 2 * $$_$$_$$_82.j
    U = 2 * $$_$$_$$_82.i
  }
  var H = (e$size.width - W) / 1.5
  var V = (e$size.height - U) / 1.5
  var z = Math.min(H, V, G)
  z = Math.max(z, $$_$$_$$_82.o)
  z = Math.floor(z)
  var Y = _React.useMemo(function () {
    return function (e, t, n, r) {
      var o
      o = {}
      $$_$$_$$_11.a(o, $$_$$_$$_114.b.RECTANGLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 4
      })
      $$_$$_$$_11.a(o, $$_$$_$$_114.b.RECTANGLE_OUTLINE, {
        color: r ? "#e9e9e9" : t,
        border: "2px solid ".concat(r ? "#e9e9e9" : n),
        backgroundColor: "white",
        borderRadius: e / 4,
        padding: "0 10px"
      })
      $$_$$_$$_11.a(o, $$_$$_$$_114.b.CIRCLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 2
      })
      $$_$$_$$_11.a(o, $$_$$_$$_114.b.CIRCLE_OUTLINE, {
        color: r ? "#e9e9e9" : t,
        border: "2px solid ".concat(r ? "#e9e9e9" : n),
        backgroundColor: "white",
        borderRadius: e / 2,
        padding: "0 10px"
      })
      return o
    }(e$size.height, e$attributes$textColor, e$attributes$backgroundColor, e$attributes$disabled)
  }, [e$attributes$backgroundColor, e$attributes$disabled, e$size.height, e$attributes$textColor])
  var K = undefined
  K = e$attributes$backgroundMode === $$_$$_$$_114.a.IMAGE ? {
    color: e$attributes$disabled ? "#7E7E7E" : e$attributes$textColor,
    backgroundImage: "url(".concat(e$attributes$backgroundImage, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain" === e$attributes$imageResizeMode ? "contain" : "100% 100%"
  } : Y[e$attributes$templateMode]
  var q = $$_$$_$$_6.a({
    top: e$position.y,
    left: e$position.x,
    height: e$size.height,
    width: e$size.width,
    fontSize: z,
    fontFamily: e$attributes$fontFamily,
    justifyContent: F,
    opacity: undefined === e$opacity ? undefined : e$opacity / 100,
    filter: e$attributes$disabled && e$attributes$backgroundMode === $$_$$_$$_114.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined,
    padding: e$attributes$backgroundMode === $$_$$_$$_114.a.TEMPLATE || e$size.width < 2 * $$_$$_$$_82.j ? "0 ".concat($$_$$_$$_82.r, "px") : "0 ".concat($$_$$_$$_82.j, "px")
  }, K)
  return React.createElement("button", {
    id: r,
    className: $$_$$_$$_8($$_$$_$$_90.b, _$$_$$_$$_.buttonWidget, !e$attributes$disabled && _$$_$$_$$_.transform, $$_$$_$$_11.a({}, _$$_$$_$$_.hide, !e$visible)),
    "data-role": $$_$$_$$_5.M,
    "data-widget-type": $$_$$_$$_5.z,
    "data-min-width": $$_$$_$$_82.p,
    "data-max-width": $$_$$_$$_82.m,
    "data-min-height": $$_$$_$$_82.n,
    "data-max-height": $$_$$_$$_82.k,
    onClick: function () {
      if (e$onClick) {
        e$onClick()
      }
    },
    onMouseDown: function () {
      if (e$onMouseDown) {
        e$onMouseDown()
      }
    },
    onMouseUp: function () {
      if (e$onMouseUp) {
        e$onMouseUp()
      }
    },
    style: $$_$$_$$_6.a($$_$$_$$_6.a({}, q), {}, {
      flexDirection: F === $$_$$_$$_60.a.RIGHT ? "row-reverse" : "row"
    })
  }, B && React.createElement("div", {
    className: _$$_$$_$$_.iconWrapper,
    style: {
      color: e$attributes$disabled ? e$attributes$backgroundMode === $$_$$_$$_114.a.TEMPLATE ? K.color : "#7E7E7E" : e$attributes$iconColor
    }
  }, "string" === typeof e$iconFileOrUrl ? React.createElement("img", {
    style: {
      width: z,
      height: z
    },
    src: e$iconFileOrUrl,
    alt: ""
  }) : e$iconFileOrUrl && React.createElement($$_$$_$$_322.a, {
    icon: e$iconFileOrUrl
  })), P && React.createElement("div", {
    className: $$_$$_$$_8(_$$_$$_$$_.textWrapper, B && e$attributes$text && (F === $$_$$_$$_60.a.RIGHT ? _$$_$$_$$_.iconToTextRightSpacing : _$$_$$_$$_.iconToTextLeftSpacing))
  }, React.createElement("div", {
    className: _$$_$$_$$_.text,
    style: {
      display: "flex",
      textAlign: F
    }
  }, React.createElement("span", null, e$attributes$text))))
}
export { P }
