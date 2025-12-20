/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-83
 */

"use strict"

import * as /* [auto-meaningful-name] */$_148 from "./148"
import * as Jd from "./33"
import * as An from "../../../../src/editor/widget/built-in/types"
import * as D from "./6"
import * as /* [auto-meaningful-name] */$_679 from "./679"
import * as /* [auto-meaningful-name] */$_680 from "./680"
import * as /* [auto-meaningful-name] */$_681 from "./681"
var k_ = {
  "zh-CN": {
    widget: "控件",
    widgetName: "单选框",
    optionCountMsg: "选项数量"
  }
}
var x_ = {
  type: An.C,
  icon: $_148.a,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [
    {
      key: "optionCount",
      label: "optionCountMsg",
      valueType: "number",
      defaultValue: 2,
      blockOptions: {
        getter: {
          func: "getRadioWidgetOptionCount"
        }
      }
    }, D.a({}, Jd.h)
  ],
  methods: [],
  events: []
}
export { k_ }
export { x_ }
