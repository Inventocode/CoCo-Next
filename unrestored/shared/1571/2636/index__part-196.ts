/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-196
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_224 from /* 224 */"./224/index"
import * as /* [auto-meaningful-name] */Module_21 from /* 21 */"./21"
import { createElement, forwardRef } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_1543 from /* 1543 */"./1543/index"
var BM = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"
        }
      }
    ]
  },
  name: "ellipsis",
  theme: "outlined"
}
var FM = function (e, t) {
  return createElement(Module_224.a, Module_21.a(Module_21.a({}, e), {}, {
    ref: t,
    icon: BM
  }))
}
FM.displayName = "EllipsisOutlined"
var GM = forwardRef(FM)
export { GM }
