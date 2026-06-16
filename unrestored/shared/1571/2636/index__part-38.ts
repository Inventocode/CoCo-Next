/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-38
 */

"use strict"

import { Xd, Qd } from "./index__part-34"
import { op } from "./index__part-36"
import { vp } from "./index__part-37"
import * as /* [auto-meaningful-name] */Module_545 from /* 545 */"./545"
import * as /* [auto-meaningful-name] */Module_146 from /* 146 */"./146"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"./90"
import /* [auto-meaningful-name] */Color from /* 51 */"color"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useRef, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_239 from /* 239 */"./239"
import /* [auto-meaningful-name] */Module_2391 from /* 239 */"./239"
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
  var O = useRef(null)
  var w = useRef(null)
  var C = useRef(null)
  var T = useRef(Ep(e$position.y, e$size.height, e$attributes$justifyContent))
  var A = useState(false)
  var I = Module_10.a(A, 2)
  var j = I[0]
  var R = I[1]
  useEffect(function () {
    if (j && e$selected && w.current) {
      var /* [auto-meaningful-name] */w$current = w.current
      w$current.focus()
      var /* [auto-meaningful-name] */w$current$value$length = w$current.value.length
      w$current.setSelectionRange(w$current$value$length, w$current$value$length)
    }
  }, [j, e$selected])
  useEffect(function () {
    if (!e$selected) {
      R(false)
    }
  }, [e$selected])
  var x = e$attributes$sizeAdaptive !== Src_editor_widget_builtIn_types.q.FIXED
  useEffect(function () {
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
  useEffect(function () {
    var e = Ep(e$position.y, e$size.height, e$attributes$justifyContent)
    T.current = e
  }, [e$attributes$justifyContent, e$onChange, e$position.y, e$size.height])
  var M = {
    width: e$size.width,
    height: e$attributes$sizeAdaptive & Src_editor_widget_builtIn_types.q.AUTO_HEIGHT ? "auto" : e$size.height,
    minWidth: "".concat(Module_146.m, "px"),
    minHeight: "".concat(Module_146.l, "px"),
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
    "data-widget-type": Src_editor_widget_builtIn_types.H,
    "data-role": Src_editor_widget_builtIn_types.M,
    className: Classnames(Module_90.b, Module_2391.textWidget, Module_11.a({}, Module_2391.hide, !e$visible)),
    "data-min-width": Module_146.m,
    "data-min-height": Module_146.l,
    ref: C,
    style: Module_6.a(Module_6.a({}, M), {}, {
      visibility: j ? "hidden" : "visible"
    }),
    onClick: function () {
      var /* [auto-meaningful-name] */C$current
      if ((null === (C$current = C.current) || undefined === C$current ? undefined : C$current.dataset.clickType) === Module_60.d.CLICK && e$selected) {
        R(true)
      }
    }
  }, React.createElement("div", {
    style: {
      overflow: E
    }
  }, React.createElement("span", {
    className: Module_2391.content
  }, e$attributes$content + "\n"))), React.createElement("div", {
    "data-role": Src_editor_widget_builtIn_types.M,
    ref: O,
    className: Classnames(Module_90.b, Module_2391.textWidget, "coco-widget-editor", Module_11.a({}, Module_2391.hide, !e$visible)),
    onMouseDown: function (e) {
      e.stopPropagation()
    },
    style: Module_6.a(Module_6.a({}, M), {}, {
      visibility: j ? "visible" : "hidden",
      zIndex: 2
    })
  }, React.createElement(vp, {
    className: Module_2391.content,
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
  return e.parentId ? React.createElement(Module_545.a, e) : React.createElement(Op, e)
}
var Cp = {
  icon: Module_146.b,
  title: "",
  type: Src_editor_widget_builtIn_types.H,
  previewAreaWidgetTitle: "TextWidget.widgetName",
  component: wp,
  editConfig: Xd,
  childWidgetEditConfig: Qd,
  blockConfig: op,
  contentTextField: "content",
  isInvisibleWidget: Module_146.i,
  hasAnyWidget: true,
  widget: {
    isGlobalWidget: Module_146.h,
    size: {
      width: Module_146.c,
      height: Module_146.a
    },
    attributes: {
      sizeAdaptive: Src_editor_widget_builtIn_types.q.AUTO_HEIGHT,
      backgroundColor: Module_146.d,
      color: Module_146.e,
      fontFamily: Module_146.f,
      fontSize: Module_146.g,
      justifyContent: "flex-start",
      textAlign: "center",
      content: "%{COCO_defaultTextWidgetContent}",
      overflow: "hidden"
    }
  }
}
export { Cp }
