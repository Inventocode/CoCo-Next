/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：802__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_19 from "../../19"
import * as /* [auto-meaningful-name] */$$_$$_35 from "../../35"
import * as /* [auto-meaningful-name] */$$_$$_40_index from "../../40/index"
import * as /* [auto-meaningful-name] */$$_$$_107 from "../../107"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_8 from "../../8"
import /* [auto-meaningful-name] */$$_$$_81 from "../../8"
import * as /* [auto-meaningful-name] */$$_$$_486 from "../../486"
import * as /* [auto-meaningful-name] */$$_$$_801_index from "../../801/index"
import * as /* [auto-meaningful-name] */$$_$$_103 from "../../103"
var p = function e(t) {
  $$_$$_103.a(this, e)
  this.error = new Error("unreachable case: ".concat(JSON.stringify(t)))
}
var _ = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var i = 0
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
      if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
        n[r[i]] = e[r[i]]
      }
    }
  }
  return n
}
var A = function (e) {
  return React.createElement($$_$$_801_index.a, null, function (t) {
    var n
    var /* [auto-meaningful-name] */t$getPrefixCls = t.getPrefixCls
    var /* [auto-meaningful-name] */t$direction = t.direction
    var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
    var /* [auto-meaningful-name] */e$size = e.size
    var /* [auto-meaningful-name] */e$className = e.className
    var d = _(e, ["prefixCls", "size", "className"])
    var h = t$getPrefixCls("btn-group", e$prefixCls)
    var A = ""
    switch (e$size) {
      case "large":
        A = "lg"
        break
      case "small":
        A = "sm"
        break
      case "middle":
      case undefined:
        break
      default:
        console.warn(new p(e$size).error)
    }
    var g = $$_$$_81(h, (n = {}, $$_$$_35.a(n, "".concat(h, "-").concat(A), A), $$_$$_35.a(n, "".concat(h, "-rtl"), "rtl" === t$direction), n), e$className)
    return React.createElement("div", $$_$$_19.a({}, d, {
      className: g
    }))
  })
}
export { A }
