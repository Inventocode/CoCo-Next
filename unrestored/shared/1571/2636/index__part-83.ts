/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-83
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_148 from /* 148 */"./148"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_679 from /* 679 */"./679"
import * as /* [auto-meaningful-name] */Module_680 from /* 680 */"./680"
import * as /* [auto-meaningful-name] */Module_681 from /* 681 */"./681"
var k_ = {
  "zh-CN": {
    widget: "控件",
    widgetName: "单选框",
    optionCountMsg: "选项数量"
  }
}
var x_ = {
  type: Src_editor_widget_builtIn_types.C,
  icon: Module_148.a,
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
    }, Module_6.a({}, Module_33.h)
  ],
  methods: [],
  events: []
}
export { k_ }
export { x_ }
