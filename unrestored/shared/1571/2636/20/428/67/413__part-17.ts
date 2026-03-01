/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-17
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../../28/index"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../55"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_551 from /* 551 */"../../../551/index"
var Be = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var r = React1.useCallback(function (e) {
    var r = Module_28.k(e)
    Module_20.emitDatePickerSelectDone(t, r.date, r.y, r.m, r.d)
    Module_20.setWidgetAttribute(t, "timeStamp", new Date(e).getTime())
    Module_55.b.playerWidgetLog({
      widgetId: t,
      widgetType: e$type,
      message: "onWidgetSelected"
    })
  }, [t, e$type])
  return React.createElement(Module_551.a, Object.assign({}, e, {
    onDatePickerChange: r
  }))
}
export { Be }
