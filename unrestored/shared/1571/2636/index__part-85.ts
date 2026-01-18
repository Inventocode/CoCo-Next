/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-85
 */

"use strict"

import * as ng from "./64"
import * as Jd from "./33"
import * as Qu from "./60"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as wn from "./90"
import * as te from "./15"
import * as D from "./6"
import * as k from "./11"
import N from "./8"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_322 from "./322"
import * as Q_ from "./82"
import * as /* [auto-meaningful-name] */$_114 from "./114"
import * as /* [auto-meaningful-name] */$_218 from "./218"
import /* [auto-meaningful-name] */$_2181 from "./218"
var tv = function (e) {
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$size = e.size
  var r = e.id
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$selected = e.selected
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$attributes$textVisible = e$attributes.textVisible
  var /* [auto-meaningful-name] */e$attributes$text = e$attributes.text
  var /* [auto-meaningful-name] */e$attributes$fontFamily = e$attributes.fontFamily
  var /* [auto-meaningful-name] */e$attributes$maxFontSize = e$attributes.maxFontSize
  var /* [auto-meaningful-name] */e$attributes$textColor = e$attributes.textColor
  var /* [auto-meaningful-name] */e$attributes$textAlign = e$attributes.textAlign
  var /* [auto-meaningful-name] */e$attributes$iconVisible = e$attributes.iconVisible
  var /* [auto-meaningful-name] */e$attributes$iconId = e$attributes.iconId
  var /* [auto-meaningful-name] */e$attributes$iconColor = e$attributes.iconColor
  var /* [auto-meaningful-name] */e$attributes$backgroundMode = e$attributes.backgroundMode
  var /* [auto-meaningful-name] */e$attributes$templateMode = e$attributes.templateMode
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$backgroundImage = e$attributes.backgroundImage
  var /* [auto-meaningful-name] */e$attributes$imageResizeMode = e$attributes.imageResizeMode
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var A = e$attributes$textVisible ? e$attributes$textAlign : Qu.a.CENTER
  var I = React1.useState(false)
  var j = $_10_index.a(I, 2)
  var R = j[0]
  var x = j[1]
  var M = React1.useState(false)
  var L = $_10_index.a(M, 2)
  var P = L[0]
  var B = L[1]
  var F = React1.useRef(null)
  var G = React1.useRef(null)
  React1.useEffect(function () {
    var /* [auto-meaningful-name] */F$current = F.current
    if (F$current && R) {
      F$current.innerText = e$attributes$text
      ng.b(F$current)
    }
  }, [R])
  React1.useEffect(function () {
    if (!e$selected) {
      x(false)
    }
  }, [e$selected])
  var W = e$attributes$maxFontSize
  if (!e$attributes$textVisible) {
    W = Q_.l
  }
  var U = 2 * Q_.r
  var H = 2 * Q_.q
  if (e$attributes$backgroundMode === $_114.a.IMAGE) {
    U = 2 * Q_.j
    H = 2 * Q_.i
  }
  var V = (e$size.width - U) / 1.5
  var z = (e$size.height - H) / 1.5
  var Y = Math.min(V, z, W)
  Y = Math.max(Y, Q_.o)
  Y = Math.floor(Y)
  var K = Jd.hb(e$attributes$backgroundImage)
  var q = te.U(e$attributes$backgroundImage) ? e$attributes$backgroundImage : K ? (null === K || undefined === K ? undefined : K.source) || (null === K || undefined === K ? undefined : K.cdnUrl) : Q_.f
  var X = React1.useMemo(function () {
    return function (e, t, n, r) {
      var o
      o = {}
      k.a(o, $_114.b.RECTANGLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 4
      })
      k.a(o, $_114.b.RECTANGLE_OUTLINE, {
        color: r ? "#e9e9e9" : t,
        border: "2px solid ".concat(r ? "#e9e9e9" : n),
        backgroundColor: "white",
        borderRadius: e / 4,
        padding: "0 10px"
      })
      k.a(o, $_114.b.CIRCLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 2
      })
      k.a(o, $_114.b.CIRCLE_OUTLINE, {
        color: r ? "#e9e9e9" : t,
        border: "2px solid ".concat(r ? "#e9e9e9" : n),
        backgroundColor: "white",
        borderRadius: e / 2,
        padding: "0 10px"
      })
      return o
    }(e$size.height, e$attributes$textColor, e$attributes$backgroundColor, e$attributes$disabled)
  }, [e$attributes$backgroundColor, e$attributes$disabled, e$size.height, e$attributes$textColor])
  var Q = undefined
  Q = e$attributes$backgroundMode === $_114.a.IMAGE ? {
    color: e$attributes$disabled ? "#7E7E7E" : e$attributes$textColor,
    backgroundImage: "url(".concat(q, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain" === e$attributes$imageResizeMode ? "contain" : "100% 100%"
  } : X[e$attributes$templateMode]
  var Z = D.a({
    top: e$position.y,
    left: e$position.x,
    height: e$size.height,
    lineHeight: "".concat(e$size.height, "px"),
    width: e$size.width,
    minWidth: "".concat(Q_.p, "px"),
    minHeight: "".concat(Q_.n, "px"),
    maxWidth: "".concat(Q_.m, "px"),
    maxHeight: "".concat(Q_.k, "px"),
    fontSize: Y,
    fontFamily: e$attributes$fontFamily,
    justifyContent: A,
    opacity: undefined === e$opacity ? undefined : e$opacity / 100,
    filter: e$attributes$disabled && e$attributes$backgroundMode === $_114.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined,
    padding: e$attributes$backgroundMode === $_114.a.TEMPLATE || e$size.width < 2 * Q_.j ? "0 ".concat(Q_.r, "px") : "0 ".concat(Q_.j, "px")
  }, Q)
  return React.createElement(React.Fragment, null, React.createElement("button", {
    id: r,
    className: N(wn.b, $_2181.buttonWidget, k.a({}, $_2181.hide, !e$visible)),
    "data-role": $$_$$_$$_$$_src_editor_widget_builtIn_types.M,
    "data-widget-type": $$_$$_$$_$$_src_editor_widget_builtIn_types.z,
    "data-min-width": Q_.p,
    "data-max-width": Q_.m,
    "data-min-height": Q_.n,
    "data-max-height": Q_.k,
    ref: G,
    onClick: function () {
      if (e$selected && e$attributes$textVisible) {
        var /* [auto-meaningful-name] */G$current
        var /* [auto-meaningful-name] */F$current = F.current
        if ((null === (G$current = G.current) || undefined === G$current ? undefined : G$current.dataset.clickType) === Qu.d.CLICK) {
          if (F$current && !P) {
            ng.b(F$current)
          }
          x(true)
          B(true)
        }
      }
    },
    onDoubleClick: function (e) {
      e.stopPropagation()
      var /* [auto-meaningful-name] */F$current = F.current
      if (F$current) {
        ng.c(F$current)
      }
    },
    style: D.a(D.a({}, Z), {}, {
      flexDirection: A === Qu.a.RIGHT ? "row-reverse" : "row"
    })
  }, e$attributes$iconVisible && React.createElement("div", {
    className: $_2181.iconWrapper,
    style: {
      color: e$attributes$disabled ? e$attributes$backgroundMode === $_114.a.TEMPLATE ? Q.color : "#7E7E7E" : e$attributes$iconColor
    }
  }, React.createElement($_322.a, {
    icon: Jd.fb(e$attributes$iconId)
  })), e$attributes$textVisible && React.createElement("div", {
    className: N($_2181.textWrapper, e$attributes$iconVisible && (e$attributes$text || R) && (A === Qu.a.RIGHT ? $_2181.iconToTextRightSpacing : $_2181.iconToTextLeftSpacing))
  }, React.createElement("div", {
    className: $_2181.input,
    style: {
      display: R ? "flex" : "none"
    }
  }, React.createElement("span", {
    className: $_2181.contentEditable,
    contentEditable: true,
    ref: F,
    onBlur: function (e) {
      if (e$onChange) {
        e$onChange("text", e.target.innerText)
      }
      B(false)
      x(false)
    },
    onKeyDown: function (e) {
      if (13 === e.keyCode) {
        e.currentTarget.blur()
        x(false)
      }
    },
    onClick: function (e) {
      e.stopPropagation()
      if (!P) {
        var /* [auto-meaningful-name] */F$current = F.current
        if (F$current) {
          ng.b(F$current)
        }
        B(true)
      }
    },
    onPaste: function (e) {
      if ((null === e || undefined === e ? undefined : e.clipboardData) && document.execCommand) {
        e.preventDefault()
        var t = e.clipboardData.getData("text/plain")
        document.execCommand("insertText", false, t.replace(/\n/g, ""))
      }
    }
  })), React.createElement("div", {
    className: $_2181.text,
    style: {
      display: R ? "none" : "flex",
      textAlign: A
    }
  }, React.createElement("span", null, e$attributes$text)))))
}
export { tv }
