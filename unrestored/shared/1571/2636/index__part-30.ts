/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-30
 */

"use strict"

import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_1513 from "./1513"
import /* [auto-meaningful-name] */_$_ from "./1513"
var ld = {
  name: "WidgetSize",
  render: function (e) {
    var t = e.getRect()
    return React.createElement("div", {
      key: "WidgetSize",
      className: _$_.container,
      style: {
        left: t.width + 10,
        top: t.height + 10
      }
    }, Math.round(t.offsetWidth), " x ", Math.round(t.offsetHeight))
  }
}
export { ld }
