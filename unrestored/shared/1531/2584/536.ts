/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：536
 */

"use strict"

import * as /* [auto-meaningful-name] */$_296 from "./296"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as s from "./8"
import c from "./8"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import "./13/636"
var _a
_a = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$onStep = e.onStep
  var /* [auto-meaningful-name] */e$max = e.max
  var /* [auto-meaningful-name] */e$min = e.min
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$label = e.label
  var f = $_296.a(e, ["onStep", "max", "min", "defaultValue", "disabled", "label"])
  var h = Number(e$max) <= Number(e$defaultValue)
  var m = Number(e$min) >= Number(e$defaultValue)
  var g = Number(e$defaultValue)
  var _ = React.useCallback(function (e) {
    if (!h && Lodash.isFunction(e$onStep)) {
      e$onStep("".concat(g + 1), e, "up")
    }
  }, [h, e$onStep, g])
  var v = React.useCallback(function (e) {
    if (!m && Lodash.isFunction(e$onStep)) {
      e$onStep("".concat(g - 1), e, "down")
    }
  }, [m, e$onStep, g])
  return _React.createElement($_13_index.k, Object.assign({}, f, {
    className: c(f.className, "coco-number-input-wrapper"),
    defaultValue: e$defaultValue,
    min: e$min,
    max: e$max,
    disabled: e$disabled,
    after: _React.createElement(_React.Fragment, null, _React.createElement("div", {
      className: c("coco-number-input-label")
    }, _React.createElement("span", null, e$label)), _React.createElement("div", {
      className: "coco-number-input"
    }, _React.createElement("span", {
      className: h || e$disabled ? "disable" : "",
      onClick: _
    }, _React.createElement($_13_index.j, {
      type: "icon-up"
    })), _React.createElement("span", {
      className: m || e$disabled ? "disable" : "",
      onClick: v
    }, _React.createElement($_13_index.j, {
      type: "icon-down"
    }))))
  }))
})
export { _a as a }
export default _a
