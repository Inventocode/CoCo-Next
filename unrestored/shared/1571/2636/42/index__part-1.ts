/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：42__part-1
 */

"use strict"

import { _ } from "./index__part-0"
import * as /* [auto-meaningful-name] */$$_33 from "../33"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_15 from "../../../../../src/shared/tools"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import s from "../8"
import /* [auto-meaningful-name] */React from "react"
import * as r from "../6"
import * as /* [auto-meaningful-name] */$$_90 from "../90"
var b = new Map()
var y = new Map()
var E = []
function O(e) {
  var /* [auto-meaningful-name] */e$widget = e.widget
  var /* [auto-meaningful-name] */e$forceRender = e.forceRender
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var a = undefined === e$zIndex ? 0 : e$zIndex
  if (e$forceRender || !e$widget.parentId) {
    var l = $$_33.Db(e$widget.type)
    if (!l) {
      return null
    }
    var /* [auto-meaningful-name] */l$component = l.component
    if ($$_$$_$$_$$_$$_src_shared_widget_custom_load.q(e$widget.type) && !l.isInvisibleWidget) {
      var p = new l$component(r.a(r.a({}, e$widget.attributes), {}, {
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
            className: s($$_90.b),
            "data-role": $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.M
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
  var n = $$_33.Cb(e)
  return n ? O({
    widget: n,
    forceRender: true,
    zIndex: t
  }) : null
}
function C(e) {
  var t = $$_33.Cb(e)
  return t ? O({
    widget: t,
    forceRender: true
  }) : null
}
function T(e, t, n, o) {
  var i
  var a = $$_33.Cb(e)
  if (!a) {
    return null
  }
  var s = $$_15.q(a)
  var c = $$_33.Cb(s.parentId || "")
  if (!c) {
    console.error("getParentWidget error")
    return null
  }
  var d = c
  if (d.attributes.disabled && s.type === $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.H) {
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
    if (s.type === $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.H) {
      s.attributes.content = f || ""
    }
    if (s.type === $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.v && f && $$_33.Fb(f)) {
      s.attributes.fileId = f
    }
  }
  return O({
    widget: r.a({}, s),
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
