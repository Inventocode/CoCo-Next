/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：536
 */

"use strict"

import /* [auto-meaningful-name] */$_296 = require("./296")
import /* [auto-meaningful-name] */Lodash = require("lodash")
import /* [auto-meaningful-name] */React = require("react")
var a = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(React)
import s = require("./8")
var c = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(s)
import /* [auto-meaningful-name] */$_13_index = require("./13/index")
require("./13/636")
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
  return a.a.createElement($_13_index.k, Object.assign({}, f, {
    className: c()(f.className, "coco-number-input-wrapper"),
    defaultValue: e$defaultValue,
    min: e$min,
    max: e$max,
    disabled: e$disabled,
    after: a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
      className: c()("coco-number-input-label")
    }, a.a.createElement("span", null, e$label)), a.a.createElement("div", {
      className: "coco-number-input"
    }, a.a.createElement("span", {
      className: h || e$disabled ? "disable" : "",
      onClick: _
    }, a.a.createElement($_13_index.j, {
      type: "icon-up"
    })), a.a.createElement("span", {
      className: m || e$disabled ? "disable" : "",
      onClick: v
    }, a.a.createElement($_13_index.j, {
      type: "icon-down"
    }))))
  }))
})
export { _a as a }
export default _a
