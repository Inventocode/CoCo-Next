/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：536
 */

"use strict"

import r = require("./296");
import Lodash = require("lodash");
import React = require("react");
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
import s = require("./8");
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
import l = require("./13/index");
require("./13/636")
var _a
_a = React.memo(function (e) {
  var e$onStep = e.onStep
  var e$max = e.max
  var e$min = e.min
  var e$defaultValue = e.defaultValue
  var e$disabled = e.disabled
  var e$label = e.label
  var f = r.a(e, ["onStep", "max", "min", "defaultValue", "disabled", "label"])
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
  return a.a.createElement(l.k, Object.assign({}, f, {
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
    }, a.a.createElement(l.j, {
      type: "icon-up"
    })), a.a.createElement("span", {
      className: m || e$disabled ? "disable" : "",
      onClick: v
    }, a.a.createElement(l.j, {
      type: "icon-down"
    }))))
  }))
})
export { _a as a }
export default _a
