/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：539
 */

"use strict"

import * as /* [auto-meaningful-name] */$_295 from "./295"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import { memo, useCallback } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as s from "./8"
import c from "./8"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import "./13/640"
var _a
_a = memo(function (e) {
  var /* [auto-meaningful-name] */e$onStep = e.onStep
  var /* [auto-meaningful-name] */e$max = e.max
  var /* [auto-meaningful-name] */e$min = e.min
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$label = e.label
  var f = $_295.a(e, ["onStep", "max", "min", "defaultValue", "disabled", "label"])
  var h = Number(e$max) <= Number(e$defaultValue)
  var m = Number(e$min) >= Number(e$defaultValue)
  var g = Number(e$defaultValue)
  var _ = useCallback(function (e) {
    if (!h && Lodash.isFunction(e$onStep)) {
      e$onStep("".concat(g + 1), e, "up")
    }
  }, [h, e$onStep, g])
  var v = useCallback(function (e) {
    if (!m && Lodash.isFunction(e$onStep)) {
      e$onStep("".concat(g - 1), e, "down")
    }
  }, [m, e$onStep, g])
  return React1.createElement($_13_index.k, Object.assign({}, f, {
    className: c(f.className, "coco-number-input-wrapper"),
    defaultValue: e$defaultValue,
    min: e$min,
    max: e$max,
    disabled: e$disabled,
    after: React1.createElement(React1.Fragment, null, React1.createElement("div", {
      className: c("coco-number-input-label")
    }, React1.createElement("span", null, e$label)), React1.createElement("div", {
      className: "coco-number-input"
    }, React1.createElement("span", {
      className: h || e$disabled ? "disable" : "",
      onClick: _
    }, React1.createElement($_13_index.j, {
      type: "icon-up"
    })), React1.createElement("span", {
      className: m || e$disabled ? "disable" : "",
      onClick: v
    }, React1.createElement($_13_index.j, {
      type: "icon-down"
    }))))
  }))
})
export { _a as a }
export default _a
