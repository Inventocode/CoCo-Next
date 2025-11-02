/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：999
 */

"use strict"

import React = require("react");
import i = require("../75/index");
var o = function __importDefault(module) {
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
}(i)
import a = require("./378");
var s = React.forwardRef(function (e, t) {
  var e$didUpdate = e.didUpdate
  var e$getContainer = e.getContainer
  var e$children = e.children
  var c = React.useRef()
  React.useImperativeHandle(t, function () {
    return {}
  })
  var u = React.useRef(false)
  if (!u.current && a.a()) {
    c.current = e$getContainer()
    u.current = true
  }
  React.useEffect(function () {
    if (!(null === e$didUpdate || undefined === e$didUpdate)) {
      e$didUpdate(e)
    }
  })
  React.useEffect(function () {
    return function () {
      var /* [auto-meaningful-name] */c$current
      var /* [auto-meaningful-name] */c$current$parentNode
      if (!(null === (c$current = c.current) || undefined === c$current || null === (c$current$parentNode = c$current.parentNode) || undefined === c$current$parentNode)) {
        c$current$parentNode.removeChild(c.current)
      }
    }
  }, [])
  return c.current ? o.a.createPortal(e$children, c.current) : null
})
export { s as a }
export default s
