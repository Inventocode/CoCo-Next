/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-1
 */

"use strict"

import { E } from "./413__part-0"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_545 from /* 545 */"../../../545"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../index"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../55"
var T = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$parentId = e.parentId
  function o() {
    Module_20.emitWidgetEvent(e$type, "onTextPress", t)
    Module_20.emitTextPress(t)
    Module_55.b.playerWidgetLog({
      widgetId: e$parentId ? t.replace(/_\d+$/, "") : t,
      widgetType: e$type,
      message: "onWidgetPress"
    })
  }
  return e$parentId ? React.createElement(Module_545.a, Object.assign({}, e, {
    onClick: o
  })) : React.createElement(E, Object.assign({}, e, {
    onClick: o
  }))
}
export { T }
