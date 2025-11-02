/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：153
 */

"use strict"

import r = require("../../../../19");
import i = require("../../../../54");
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
require("../../../../50/index")
import s = require("../../../../16/687");
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
import u = require("../../701/2591");
import l = require("./2624");
import f = require("../../../../549/1186/682/2593");
var d = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  return function (n) {
    var t$defaultTheme = t.defaultTheme
    var t$withTheme = t.withTheme
    var d = undefined !== t$withTheme && t$withTheme
    var t$name = t.name
    var p = i.a(t, ["defaultTheme", "withTheme", "name"])
    var _ = t$name
    var A = u.a(e, r.a({
      defaultTheme: t$defaultTheme,
      Component: n,
      name: t$name || n.displayName,
      classNamePrefix: _
    }, p))
    var g = a.a.forwardRef(function (e, t) {
      e.classes
      var s
      var e$innerRef = e.innerRef
      var u = i.a(e, ["classes", "innerRef"])
      var p = A(r.a({}, n.defaultProps, e))
      var _ = u
      if ("string" === typeof t$name || d) {
        s = f.a() || t$defaultTheme
        if (t$name) {
          _ = l.a({
            theme: s,
            name: t$name,
            props: u
          })
        }
        if (d && !_.theme) {
          _.theme = s
        }
      }
      return a.a.createElement(n, r.a({
        ref: e$innerRef || t,
        classes: p
      }, _))
    })
    c()(g, n)
    return g
  }
}
import h = require("../../701/786/index");
var _a
_a = function (e, t) {
  return d(e, r.a({
    defaultTheme: h.a
  }, t))
}
export { _a as a }
export default _a
