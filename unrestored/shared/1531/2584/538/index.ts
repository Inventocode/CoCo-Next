/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：538
 */

"use strict"

import r = require("../10/index");
import React = require("react");
var i = function __importDefault(module) {
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
import a = require("../8");
var s = function __importDefault(module) {
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
}(a)
require("./866")
var _a
_a = React.memo(function (e) {
  var e$onChange = e.onChange
  var e$checked = e.checked
  var a = React.useState(e$checked)
  var c = r.a(a, 2)
  var l = c[0]
  var u = c[1]
  React.useEffect(function () {
    u(!!e$checked)
  }, [e$checked])
  return i.a.createElement("div", {
    className: s()("coco-switch", l && "coco-switch-checked"),
    onClick: function () {
      u(!l)
      if (e$onChange) {
        e$onChange(!l)
      }
    }
  }, i.a.createElement("div", {
    className: s()("coco-switch-handle", l && "coco-switch-handle-checked")
  }))
})
export { _a as a }
export default _a
