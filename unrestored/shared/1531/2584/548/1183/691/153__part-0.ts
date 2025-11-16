/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：153__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_19 from "../../../19"
import * as /* [auto-meaningful-name] */$$_$$_$$_54 from "../../../54"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import "../../../50/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_16_687 from "../../../16/687"
import /* [auto-meaningful-name] */_$$_$$_$$_16_ from "../../../16/687"
import * as /* [auto-meaningful-name] */$$_701_2591_index from "../701/2591/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_549_1186_315_2630_2624 from "../../../549/1186/315/2630/2624"
import * as /* [auto-meaningful-name] */$$_$$_$$_549_1186_682_2593 from "../../../549/1186/682/2593"
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
    var g = _React.forwardRef(function (e, t) {
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
      return _React.createElement(n, $$_$$_$$_19.a({
        ref: e$innerRef || t,
        classes: p
      }, _))
    })
    _$$_$$_$$_16_(g, n)
    return g
  }
}
export { d as "153__part-0__d" }
