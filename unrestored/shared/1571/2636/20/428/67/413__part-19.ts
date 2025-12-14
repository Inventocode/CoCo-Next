/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-19
 */

"use strict"

import { He } from "./413__part-18"
import * as /* [auto-meaningful-name] */$$_12 from "../12"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_$$_src_shared_widget_custom_storage from "../../../../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */$$_$$_$$_5 from "../../../5"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_313 from "../313"
function ze(e) {
  var /* [auto-meaningful-name] */e$widget = e.widget
  var /* [auto-meaningful-name] */e$forceRender = e.forceRender
  var /* [auto-meaningful-name] */e$onload = e.onload
  var /* [auto-meaningful-name] */e$widget$type = e$widget.type
  if (!e$widget.parentId || e$forceRender) {
    var i = ""
    if (e$widget.parentId) {
      var a = $$_12.b(e$widget.parentId)
      if ((null === a || undefined === a ? undefined : a.type) && [$$_$$_$$_5.x, $$_$$_$$_5.A].includes(a.type) && e$widget$type === $$_$$_$$_5.v) {
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
    var u = $$_$$_$$_$$_$$_$$_$$_src_shared_widget_custom_storage.f(e$widget$type)
    if (!u) {
      console.error("getWidget error", e$widget$type)
      return null
    }
    var /* [auto-meaningful-name] */u$types = u.types
    if ($$_$$_$$_$$_$$_$$_$$_src_shared_widget_custom_load.q(e$widget$type) && false === u$types.isInvisibleWidget) {
      var h = $$_$$_index.getWidgetInstance(e$widget.id)
      return h ? React.createElement("div", {
        key: e$widget.id,
        id: e$widget.id,
        "data-role": $$_$$_$$_5.M,
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
  var r = $$_12.b(e$widgetId)
  return r ? ze({
    widget: r,
    forceRender: true,
    onload: e$onload
  }) : (console.error("getWidget error"), null)
}
export { ze }
export { Ye }
