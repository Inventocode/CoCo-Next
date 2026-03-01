/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../../../90"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../11"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../6"
import * as /* [auto-meaningful-name] */Module_322 from /* 322 */"../../../322"
import * as /* [auto-meaningful-name] */Module_82 from /* 82 */"../../../82"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"../../../60"
import * as /* [auto-meaningful-name] */Module_114 from /* 114 */"../../../114"
import * as /* [auto-meaningful-name] */Module_218 from /* 218 */"../../../218"
import /* [auto-meaningful-name] */Module_2181 from /* 218 */"../../../218"
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
  var F = P ? e$attributes$textAlign : Module_60.a.CENTER
  var G = e$attributes$maxFontSize
  if (!P) {
    G = Module_82.l
  }
  var W = 2 * Module_82.r
  var U = 2 * Module_82.q
  if (e$attributes$backgroundMode === Module_114.a.IMAGE) {
    W = 2 * Module_82.j
    U = 2 * Module_82.i
  }
  var H = (e$size.width - W) / 1.5
  var V = (e$size.height - U) / 1.5
  var z = Math.min(H, V, G)
  z = Math.max(z, Module_82.o)
  z = Math.floor(z)
  var Y = React1.useMemo(function () {
    return function (e, t, n, r) {
      var o
      o = {}
      Module_11.a(o, Module_114.b.RECTANGLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 4
      })
      Module_11.a(o, Module_114.b.RECTANGLE_OUTLINE, {
        color: r ? "#e9e9e9" : t,
        border: "2px solid ".concat(r ? "#e9e9e9" : n),
        backgroundColor: "white",
        borderRadius: e / 4,
        padding: "0 10px"
      })
      Module_11.a(o, Module_114.b.CIRCLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 2
      })
      Module_11.a(o, Module_114.b.CIRCLE_OUTLINE, {
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
  K = e$attributes$backgroundMode === Module_114.a.IMAGE ? {
    color: e$attributes$disabled ? "#7E7E7E" : e$attributes$textColor,
    backgroundImage: "url(".concat(e$attributes$backgroundImage, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain" === e$attributes$imageResizeMode ? "contain" : "100% 100%"
  } : Y[e$attributes$templateMode]
  var q = Module_6.a({
    top: e$position.y,
    left: e$position.x,
    height: e$size.height,
    width: e$size.width,
    fontSize: z,
    fontFamily: e$attributes$fontFamily,
    justifyContent: F,
    opacity: undefined === e$opacity ? undefined : e$opacity / 100,
    filter: e$attributes$disabled && e$attributes$backgroundMode === Module_114.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined,
    padding: e$attributes$backgroundMode === Module_114.a.TEMPLATE || e$size.width < 2 * Module_82.j ? "0 ".concat(Module_82.r, "px") : "0 ".concat(Module_82.j, "px")
  }, K)
  return React.createElement("button", {
    id: r,
    className: Classnames(Module_90.b, Module_2181.buttonWidget, !e$attributes$disabled && Module_2181.transform, Module_11.a({}, Module_2181.hide, !e$visible)),
    "data-role": Src_editor_widget_builtIn_types.M,
    "data-widget-type": Src_editor_widget_builtIn_types.z,
    "data-min-width": Module_82.p,
    "data-max-width": Module_82.m,
    "data-min-height": Module_82.n,
    "data-max-height": Module_82.k,
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
    style: Module_6.a(Module_6.a({}, q), {}, {
      flexDirection: F === Module_60.a.RIGHT ? "row-reverse" : "row"
    })
  }, B && React.createElement("div", {
    className: Module_2181.iconWrapper,
    style: {
      color: e$attributes$disabled ? e$attributes$backgroundMode === Module_114.a.TEMPLATE ? K.color : "#7E7E7E" : e$attributes$iconColor
    }
  }, "string" === typeof e$iconFileOrUrl ? React.createElement("img", {
    style: {
      width: z,
      height: z
    },
    src: e$iconFileOrUrl,
    alt: ""
  }) : e$iconFileOrUrl && React.createElement(Module_322.a, {
    icon: e$iconFileOrUrl
  })), P && React.createElement("div", {
    className: Classnames(Module_2181.textWrapper, B && e$attributes$text && (F === Module_60.a.RIGHT ? Module_2181.iconToTextRightSpacing : Module_2181.iconToTextLeftSpacing))
  }, React.createElement("div", {
    className: Module_2181.text,
    style: {
      display: "flex",
      textAlign: F
    }
  }, React.createElement("span", null, e$attributes$text))))
}
export { P }
