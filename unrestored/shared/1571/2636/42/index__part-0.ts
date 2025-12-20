/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：42__part-0
 */

"use strict"

import * as r from "../6"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as a from "../8"
import s from "../8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_15 from "../15"
import * as u from "../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as /* [auto-meaningful-name] */$$_16_index from "../16/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../../src/editor/events/main/messages-wrapper"
import "./859"
import * as h from "../9"
import * as /* [auto-meaningful-name] */$_676_index from "./676/index"
import * as /* [auto-meaningful-name] */$$_33 from "../33"
var _ = function (e) {
  var /* [auto-meaningful-name] */e$render = e.render
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$widgetType = e.widgetType
  var a = React.useState()
  var s = $$_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var _ = $$_16_index.d()
  var v = $$_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  var b = v === e$widgetId
  var y = React.useCallback(function (e, t, r, o) {
    _($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Lg(e$widgetId, e, t, r, o))
  }, [_, e$widgetId])
  var /* [auto-meaningful-name] */CocoWidgetWrapper = "coco-widget-wrapper"
  if (!(e$widgetType !== u.a && e$widgetType !== u.c)) {
    CocoWidgetWrapper = ""
  }
  var O = h.qb(e$widgetId)
  if ((null === O || undefined === O ? undefined : O.type) && [u.x, u.A].includes(O.type)) {
    CocoWidgetWrapper += " coco-child-widget"
    if (e$widgetType === u.v) {
      CocoWidgetWrapper += " coco-child-widget-full"
    }
    if (e$widgetId === v) {
      CocoWidgetWrapper += " coco-child-widget-selected"
    }
  }
  return _React.createElement("div", {
    className: CocoWidgetWrapper
  }, c && _React.createElement($_676_index.a, c), e$render(y, function (e, t, r) {
    if ($$_33.r(e$widgetId)) {
      l({
        target: e,
        callback: t,
        options: r
      })
    }
  }, b))
}
export { _ }
