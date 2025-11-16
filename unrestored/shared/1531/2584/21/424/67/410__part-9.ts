/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：410__part-9
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_544_index from "../../../544/index"
var re = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  return React.createElement($$_$$_$$_544_index.a, Object.assign({}, e, {
    onLoad: function () {
      $$_$$_index.emitWebViewWidgetLoaded(t)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWebViewUrlLoaded"
      })
    },
    onLoading: function () {
      $$_$$_index.emitWebViewWidgetStartLoad(t)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWebViewUrlStartLoad"
      })
    },
    onError: function () {
      $$_$$_index.emitWebViewWidgetLoadError(t)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWebViewUrlLoadError"
      })
    }
  }))
}
export { re as "410__part-9__re" }
