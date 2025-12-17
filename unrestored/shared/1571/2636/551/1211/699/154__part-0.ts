/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：154__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_19 from "../../../19"
import * as /* [auto-meaningful-name] */$$_$$_$$_54 from "../../../54"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import "../../../50/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_16_695 from "../../../16/695"
import /* [auto-meaningful-name] */_$$_$$_$$_16_ from "../../../16/695"
import * as /* [auto-meaningful-name] */$$_709_2643 from "../709/2643"
import * as /* [auto-meaningful-name] */$$_$$_$$_552_1214_316_2682_2677 from "../../../552/1214/316/2682/2677"
import * as /* [auto-meaningful-name] */$$_$$_$$_552_1214_690_2645 from "../../../552/1214/690/2645"
var d = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  return function (n) {
    var /* [auto-meaningful-name] */t$defaultTheme = t.defaultTheme
    var /* [auto-meaningful-name] */t$withTheme = t.withTheme
    var d = undefined !== t$withTheme && t$withTheme
    var /* [auto-meaningful-name] */t$name = t.name
    var p = $$_$$_$$_54.a(t, ["defaultTheme", "withTheme", "name"])
    var _ = t$name
    var A = $$_709_2643.a(e, $$_$$_$$_19.a({
      defaultTheme: t$defaultTheme,
      Component: n,
      name: t$name || n.displayName,
      classNamePrefix: _
    }, p))
    var g = _React.forwardRef(function (e, t) {
      e.classes
      var s
      var /* [auto-meaningful-name] */e$innerRef = e.innerRef
      var u = $$_$$_$$_54.a(e, ["classes", "innerRef"])
      var p = A($$_$$_$$_19.a({}, n.defaultProps, e))
      var _ = u
      if ("string" === typeof t$name || d) {
        s = $$_$$_$$_552_1214_690_2645.a() || t$defaultTheme
        if (t$name) {
          _ = $$_$$_$$_552_1214_316_2682_2677.a({
            theme: s,
            name: t$name,
            props: u
          })
        }
        if (d && !_.theme) {
          _.theme = s
        }
      }
      return _React.createElement(n, $$_$$_$$_19.a({
        ref: e$innerRef || t,
        classes: p
      }, _))
    })
    _$$_$$_$$_16_(g, n)
    return g
  }
}
export { d }
