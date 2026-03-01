/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：42__part-1
 */

"use strict"

import { _ } from "./index__part-0"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"../33"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../../src/shared/widget/custom/load"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../90"
var b = new Map()
var y = new Map()
var E = []
function O(e) {
  var /* [auto-meaningful-name] */e$widget = e.widget
  var /* [auto-meaningful-name] */e$forceRender = e.forceRender
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var a = undefined === e$zIndex ? 0 : e$zIndex
  if (e$forceRender || !e$widget.parentId) {
    var l = Module_33.Db(e$widget.type)
    if (!l) {
      return null
    }
    var /* [auto-meaningful-name] */l$component = l.component
    if (Src_shared_widget_custom_load.q(e$widget.type) && !l.isInvisibleWidget) {
      var p = new l$component(Module_6.a(Module_6.a({}, e$widget.attributes), {}, {
        __widgetId: e$widget.id,
        __widgetType: e$widget.type,
        __width: e$widget.size.width,
        __height: e$widget.size.height
      }))
      return React.createElement(_, {
        key: e$widget.id,
        widgetId: e$widget.id,
        widgetType: e$widget.type,
        render: function () {
          return React.createElement("div", {
            id: e$widget.id,
            style: {
              position: "absolute",
              left: e$widget.position.x,
              top: e$widget.position.y,
              display: e$widget.visible ? "block" : "none",
              width: e$widget.size.width,
              height: e$widget.size.height,
              opacity: l.isInvisibleWidget || undefined === e$widget.opacity ? undefined : e$widget.opacity / 100
            },
            className: Classnames(Module_90.b),
            "data-role": Src_editor_widget_builtIn_types.M
          }, React.createElement("div", {
            style: {
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 1e4
            }
          }), p.render())
        }
      })
    }
    return React.createElement(_, {
      key: e$widget.id,
      widgetId: e$widget.id,
      widgetType: e$widget.type,
      render: function (e, n, r) {
        return React.createElement(l$component, Object.assign({}, e$widget, {
          onChange: e,
          onEdit: n,
          zIndex: a,
          selected: r
        }))
      }
    })
  }
}
function w(e, t) {
  var n = Module_33.Cb(e)
  return n ? O({
    widget: n,
    forceRender: true,
    zIndex: t
  }) : null
}
function C(e) {
  var t = Module_33.Cb(e)
  return t ? O({
    widget: t,
    forceRender: true
  }) : null
}
function T(e, t, n, o) {
  var i
  var a = Module_33.Cb(e)
  if (!a) {
    return null
  }
  var s = Src_shared_tools_index.q(a)
  var c = Module_33.Cb(s.parentId || "")
  if (!c) {
    console.error("getParentWidget error")
    return null
  }
  var d = c
  if (d.attributes.disabled && s.type === Src_editor_widget_builtIn_types.H) {
    if (["titleSlot"].includes(t)) {
      s.attributes.color = "#7C7C7C"
    } else {
      s.attributes.color = "#CACACA"
    }
  }
  if (undefined === n) {
    return O({
      widget: s,
      forceRender: true
    })
  }
  var p = null === (i = d.attributes.templateSlotMap[t]) || undefined === i ? undefined : i.dataBindings
  if (o && p) {
    var f = o[p]
    if (s.type === Src_editor_widget_builtIn_types.H) {
      s.attributes.content = f || ""
    }
    if (s.type === Src_editor_widget_builtIn_types.v && f && Module_33.Fb(f)) {
      s.attributes.fileId = f
    }
  }
  return O({
    widget: Module_6.a({}, s),
    forceRender: true
  })
}
export { b }
export { y }
export { E }
export { O }
export { w }
export { C }
export { T }
