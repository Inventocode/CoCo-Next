/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-38
 */

"use strict"

import { Xd, Qd } from "./index__part-34"
import { op } from "./index__part-36"
import { vp } from "./index__part-37"
import * as /* [auto-meaningful-name] */$_545 from "./545"
import * as /* [auto-meaningful-name] */$_146 from "./146"
import * as Qu from "./60"
import * as An from "./5"
import * as wn from "./90"
import /* [auto-meaningful-name] */Color from "color"
import * as D from "./6"
import * as k from "./11"
import N from "./8"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_239 from "./239"
import /* [auto-meaningful-name] */_$_ from "./239"
function Ep(e, t, n) {
  var r = e
  if ("center" === n) {
    r = e + t / 2
  } else {
    if ("flex-end" === n) {
      r = e + t
    }
  }
  return Math.floor(r)
}
var Op = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$selected = e.selected
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var c = undefined === e$opacity ? 100 : e$opacity
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$content = e$attributes.content
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$fontFamily = e$attributes.fontFamily
  var /* [auto-meaningful-name] */e$attributes$fontSize = e$attributes.fontSize
  var /* [auto-meaningful-name] */e$attributes$justifyContent = e$attributes.justifyContent
  var /* [auto-meaningful-name] */e$attributes$sizeAdaptive = e$attributes.sizeAdaptive
  var /* [auto-meaningful-name] */e$attributes$textAlign = e$attributes.textAlign
  var /* [auto-meaningful-name] */e$attributes$overflow = e$attributes.overflow
  var E = undefined === e$attributes$overflow ? "hidden" : e$attributes$overflow
  var O = _React.useRef(null)
  var w = _React.useRef(null)
  var C = _React.useRef(null)
  var T = _React.useRef(Ep(e$position.y, e$size.height, e$attributes$justifyContent))
  var A = _React.useState(false)
  var I = $_10_index.a(A, 2)
  var j = I[0]
  var R = I[1]
  _React.useEffect(function () {
    if (j && e$selected && w.current) {
      var /* [auto-meaningful-name] */w$current = w.current
      w$current.focus()
      var /* [auto-meaningful-name] */w$current$value$length = w$current.value.length
      w$current.setSelectionRange(w$current$value$length, w$current$value$length)
    }
  }, [j, e$selected])
  _React.useEffect(function () {
    if (!e$selected) {
      R(false)
    }
  }, [e$selected])
  var x = e$attributes$sizeAdaptive !== An.q.FIXED
  _React.useEffect(function () {
    if (x && O.current && e$onChange) {
      var /* [auto-meaningful-name] */O$current = O.current
      var t = Math.floor(O$current.clientHeight)
      if (t !== e$size.height) {
        e$onChange("size", {
          height: t
        })
        var r = Ep(e$position.y, t, e$attributes$justifyContent)
        if (r !== T.current) {
          if (e$onChange) {
            e$onChange("position", {
              y: e$position.y + T.current - r
            })
          }
          T.current = r
        }
      }
    }
  }, [e$attributes$fontSize, e$attributes$fontFamily, x, e$attributes$content, e$onChange, e$size.height])
  _React.useEffect(function () {
    var e = Ep(e$position.y, e$size.height, e$attributes$justifyContent)
    T.current = e
  }, [e$attributes$justifyContent, e$onChange, e$position.y, e$size.height])
  var M = {
    width: e$size.width,
    height: e$attributes$sizeAdaptive & An.q.AUTO_HEIGHT ? "auto" : e$size.height,
    minWidth: "".concat($_146.m, "px"),
    minHeight: "".concat($_146.l, "px"),
    backgroundColor: Color(e$attributes$backgroundColor).toString(),
    color: Color(e$attributes$color).toString(),
    fontFamily: e$attributes$fontFamily,
    fontSize: e$attributes$fontSize,
    justifyContent: e$attributes$justifyContent,
    textAlign: e$attributes$textAlign,
    top: e$position.y,
    left: e$position.x,
    opacity: c / 100
  }
  return React.createElement(React.Fragment, null, React.createElement("div", {
    id: t,
    "data-widget-type": An.H,
    "data-role": An.M,
    className: N(wn.b, _$_.textWidget, k.a({}, _$_.hide, !e$visible)),
    "data-min-width": $_146.m,
    "data-min-height": $_146.l,
    ref: C,
    style: D.a(D.a({}, M), {}, {
      visibility: j ? "hidden" : "visible"
    }),
    onClick: function () {
      var /* [auto-meaningful-name] */C$current
      if ((null === (C$current = C.current) || undefined === C$current ? undefined : C$current.dataset.clickType) === Qu.d.CLICK && e$selected) {
        R(true)
      }
    }
  }, React.createElement("div", {
    style: {
      overflow: E
    }
  }, React.createElement("span", {
    className: _$_.content
  }, e$attributes$content + "\n"))), React.createElement("div", {
    "data-role": An.M,
    ref: O,
    className: N(wn.b, _$_.textWidget, "coco-widget-editor", k.a({}, _$_.hide, !e$visible)),
    onMouseDown: function (e) {
      e.stopPropagation()
    },
    style: D.a(D.a({}, M), {}, {
      visibility: j ? "visible" : "hidden",
      zIndex: 2
    })
  }, React.createElement(vp, {
    className: _$_.content,
    onBlur: function () {
      R(false)
    },
    value: e$attributes$content,
    onChange: function (e) {
      if (e$onChange) {
        e$onChange("content", e.target.value)
      }
    },
    ref: w
  })))
}
var wp = function (e) {
  return e.parentId ? React.createElement($_545.a, e) : React.createElement(Op, e)
}
var Cp = {
  icon: $_146.b,
  title: "",
  type: An.H,
  previewAreaWidgetTitle: "TextWidget.widgetName",
  component: wp,
  editConfig: Xd,
  childWidgetEditConfig: Qd,
  blockConfig: op,
  contentTextField: "content",
  isInvisibleWidget: $_146.i,
  hasAnyWidget: true,
  widget: {
    isGlobalWidget: $_146.h,
    size: {
      width: $_146.c,
      height: $_146.a
    },
    attributes: {
      sizeAdaptive: An.q.AUTO_HEIGHT,
      backgroundColor: $_146.d,
      color: $_146.e,
      fontFamily: $_146.f,
      fontSize: $_146.g,
      justifyContent: "flex-start",
      textAlign: "center",
      content: "%{COCO_defaultTextWidgetContent}",
      overflow: "hidden"
    }
  }
}
export { Cp }
