/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：410__part-17
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_28_index from "../../../28/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_548_index from "../../../548/index"
var Be = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var r = _React.useCallback(function (e) {
    var r = $$_$$_$$_28_index.k(e)
    $$_$$_index.emitDatePickerSelectDone(t, r.date, r.y, r.m, r.d)
    $$_$$_index.setWidgetAttribute(t, "timeStamp", new Date(e).getTime())
    $$_$$_$$_55.b.playerWidgetLog({
      widgetId: t,
      widgetType: e$type,
      message: "onWidgetSelected"
    })
  }, [t, e$type])
  return React.createElement($$_$$_$$_548_index.a, Object.assign({}, e, {
    onDatePickerChange: r
  }))
}
export { Be as "410__part-17__Be" }
