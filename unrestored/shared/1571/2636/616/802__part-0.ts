/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：802__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../19"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../35"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"../40/index"
import * as /* [auto-meaningful-name] */Module_107 from /* 107 */"../107"
import { createElement } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_486 from /* 486 */"../486"
import * as /* [auto-meaningful-name] */Module_801 from /* 801 */"../801/index"
import * as /* [auto-meaningful-name] */Module_103 from /* 103 */"../103"
var p = function e(t) {
  Module_103.a(this, e)
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
  return createElement(Module_801.a, null, function (t) {
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
    var g = Classnames1(h, (n = {}, Module_35.a(n, "".concat(h, "-").concat(A), A), Module_35.a(n, "".concat(h, "-rtl"), "rtl" === t$direction), n), e$className)
    return createElement("div", Module_19.a({}, d, {
      className: g
    }))
  })
}
export { A }
