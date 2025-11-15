/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：153
 */

"use strict"

import /* [auto-meaningful-name] */$$_$$_$$_19 = require("../../../19")
import /* [auto-meaningful-name] */$$_$$_$$_54 = require("../../../54")
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
require("../../../50/index")
import /* [auto-meaningful-name] */$$_$$_$$_16_687 = require("../../../16/687")
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
}($$_$$_$$_16_687)
import /* [auto-meaningful-name] */$$_701_2591_index = require("../701/2591/index")
import /* [auto-meaningful-name] */$$_$$_$$_549_1186_315_2630_2624 = require("../../../549/1186/315/2630/2624")
import /* [auto-meaningful-name] */$$_$$_$$_549_1186_682_2593 = require("../../../549/1186/682/2593")
var d = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  return function (n) {
    var /* [auto-meaningful-name] */t$defaultTheme = t.defaultTheme
    var /* [auto-meaningful-name] */t$withTheme = t.withTheme
    var d = undefined !== t$withTheme && t$withTheme
    var /* [auto-meaningful-name] */t$name = t.name
    var p = $$_$$_$$_54.a(t, ["defaultTheme", "withTheme", "name"])
    var _ = t$name
    var A = $$_701_2591_index.a(e, $$_$$_$$_19.a({
      defaultTheme: t$defaultTheme,
      Component: n,
      name: t$name || n.displayName,
      classNamePrefix: _
    }, p))
    var g = a.a.forwardRef(function (e, t) {
      e.classes
      var s
      var /* [auto-meaningful-name] */e$innerRef = e.innerRef
      var u = $$_$$_$$_54.a(e, ["classes", "innerRef"])
      var p = A($$_$$_$$_19.a({}, n.defaultProps, e))
      var _ = u
      if ("string" === typeof t$name || d) {
        s = $$_$$_$$_549_1186_682_2593.a() || t$defaultTheme
        if (t$name) {
          _ = $$_$$_$$_549_1186_315_2630_2624.a({
            theme: s,
            name: t$name,
            props: u
          })
        }
        if (d && !_.theme) {
          _.theme = s
        }
      }
      return a.a.createElement(n, $$_$$_$$_19.a({
        ref: e$innerRef || t,
        classes: p
      }, _))
    })
    c()(g, n)
    return g
  }
}
import /* [auto-meaningful-name] */$$_$$_$$_549_1186_682_786 = require("../../../549/1186/682/786")
var _a
_a = function (e, t) {
  return d(e, $$_$$_$$_19.a({
    defaultTheme: $$_$$_$$_549_1186_682_786.a
  }, t))
}
export { _a as a }
export default _a
