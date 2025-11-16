/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：410__part-1
 */

"use strict"

import { "410__part-0__E" as E } from "./410__part-0"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_542 from "../../../542"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
var T = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$parentId = e.parentId
  function o() {
    $$_$$_index.emitWidgetEvent(e$type, "onTextPress", t)
    $$_$$_index.emitTextPress(t)
    $$_$$_$$_55.b.playerWidgetLog({
      widgetId: e$parentId ? t.replace(/_\d+$/, "") : t,
      widgetType: e$type,
      message: "onWidgetPress"
    })
  }
  return e$parentId ? React.createElement($$_$$_$$_542.a, Object.assign({}, e, {
    onClick: o
  })) : React.createElement(E, Object.assign({}, e, {
    onClick: o
  }))
}
export { T as "410__part-1__T" }
