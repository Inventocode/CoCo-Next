/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-19
 */

"use strict"

import { He } from "./413__part-18"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"../12"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../index"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_storage from /* 96 */"../../../../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_313 from /* 313 */"../313"
function ze(e) {
  var /* [auto-meaningful-name] */e$widget = e.widget
  var /* [auto-meaningful-name] */e$forceRender = e.forceRender
  var /* [auto-meaningful-name] */e$onload = e.onload
  var /* [auto-meaningful-name] */e$widget$type = e$widget.type
  if (!e$widget.parentId || e$forceRender) {
    var i = ""
    if (e$widget.parentId) {
      var a = Module_12.b(e$widget.parentId)
      if ((null === a || undefined === a ? undefined : a.type) && [Src_editor_widget_builtIn_types.x, Src_editor_widget_builtIn_types.A].includes(a.type) && e$widget$type === Src_editor_widget_builtIn_types.v) {
        i += "coco-child-widget-full"
      }
    }
    if (e$widget$type in He) {
      var l = He[e$widget$type]
      return React.createElement("div", {
        key: e$widget.id,
        className: i
      }, React.createElement(l, Object.assign({}, e$widget, {
        onload: e$onload
      })))
    }
    var u = Src_shared_widget_custom_storage.f(e$widget$type)
    if (!u) {
      console.error("getWidget error", e$widget$type)
      return null
    }
    var /* [auto-meaningful-name] */u$types = u.types
    if (Src_shared_widget_custom_load.q(e$widget$type) && false === u$types.isInvisibleWidget) {
      var h = Module_20.getWidgetInstance(e$widget.id)
      return h ? React.createElement("div", {
        key: e$widget.id,
        id: e$widget.id,
        "data-role": Src_editor_widget_builtIn_types.M,
        "data-widget-type": e$widget.type,
        style: {
          position: "absolute",
          left: e$widget.position.x,
          top: e$widget.position.y,
          display: e$widget.visible ? "block" : "none",
          width: e$widget.size.width,
          height: e$widget.size.height,
          opacity: undefined === e$widget.opacity ? undefined : e$widget.opacity / 100
        }
      }, h.render()) : (console.error("getWidgetInstance error", e$widget$type, e$widget.id), null)
    }
  }
}
function Ye(e) {
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$onload = e.onload
  var r = Module_12.b(e$widgetId)
  return r ? ze({
    widget: r,
    forceRender: true,
    onload: e$onload
  }) : (console.error("getWidget error"), null)
}
export { ze }
export { Ye }
