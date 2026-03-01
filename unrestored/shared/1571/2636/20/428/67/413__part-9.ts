/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-9
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../55"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_547 from /* 547 */"../../../547/index"
var re = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  return React.createElement(Module_547.a, Object.assign({}, e, {
    onLoad: function () {
      Module_20.emitWebViewWidgetLoaded(t)
      Module_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWebViewUrlLoaded"
      })
    },
    onLoading: function () {
      Module_20.emitWebViewWidgetStartLoad(t)
      Module_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWebViewUrlStartLoad"
      })
    },
    onError: function () {
      Module_20.emitWebViewWidgetLoadError(t)
      Module_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWebViewUrlLoadError"
      })
    }
  }))
}
export { re }
