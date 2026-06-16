/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-84
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_172 from /* 172 */"./172"
import * as /* [auto-meaningful-name] */Module_127 from /* 127 */"./127"
import * as /* [auto-meaningful-name] */Module_149 from /* 149 */"./149"
import * as /* [auto-meaningful-name] */Module_131 from /* 131 */"./131"
import * as /* [auto-meaningful-name] */Module_262 from /* 262 */"./262"
import * as /* [auto-meaningful-name] */Module_200 from /* 200 */"./200"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_682 from /* 682 */"./682"
var M_ = {
  "zh-CN": {
    widget: "控件",
    widgetName: "角色",
    rotation: "方向"
  }
}
var L_ = {
  type: Src_editor_widget_builtIn_types.a,
  icon: "icon-widget-actor",
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [
    {
      key: "rotation",
      label: "rotation",
      valueType: "number",
      defaultValue: 0,
      blockDefaultValue: 90
    }, Module_6.a({}, Module_33.i)
  ],
  methods: [],
  events: []
}
var P_ = {
  "zh-CN": {
    widget: "控件",
    widgetName: "多选框",
    optionCountMsg: "选项数量"
  }
}
var B_ = {
  type: Src_editor_widget_builtIn_types.g,
  icon: Module_200.e,
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
          func: "getCheckboxWidgetOptionCount"
        }
      }
    }, Module_6.a({}, Module_33.h)
  ],
  methods: [],
  events: []
}
var F_ = {
  "zh-CN": {
    widget: "控件",
    widgetName: "网页框",
    widthMsg: "宽度 ",
    heightMsg: "高度"
  }
}
var G_ = {
  type: Src_editor_widget_builtIn_types.L,
  icon: Module_262.a,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [
    Module_6.a({}, Module_33.h), {
      key: "__width",
      label: "widthMsg",
      valueType: "number",
      defaultValue: 100,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "__height",
      label: "heightMsg",
      valueType: "number",
      defaultValue: 100,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "__size",
      label: "",
      valueType: "number",
      defaultValue: 100,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ["__height", "__width"]
        },
        getter: {
          keys: ["__height", "__width"]
        }
      }
    }
  ],
  methods: [],
  events: []
}
var W_ = {
  "zh-CN": {
    widget: "控件",
    widgetName: "开关",
    widthMsg: "宽度 ",
    heightMsg: "高度"
  }
}
var U_ = {
  type: Src_editor_widget_builtIn_types.F,
  icon: Module_131.e,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [
    Module_6.a({}, Module_33.h), {
      key: "__width",
      label: "widthMsg",
      valueType: "number",
      defaultValue: 100,
      blockOptions: {
        generateBlock: false
      },
      validators: {
        greaterThan: Module_131.j
      }
    }, {
      key: "__height",
      label: "heightMsg",
      valueType: "number",
      defaultValue: 100,
      blockOptions: {
        generateBlock: false
      },
      validators: {
        greaterThan: Module_131.i
      }
    }, {
      key: "__size",
      label: "",
      valueType: "number",
      defaultValue: 100,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ["__height", "__width"]
        },
        getter: {
          keys: ["__height", "__width"]
        }
      }
    }
  ],
  methods: [],
  events: []
}
var H_ = {
  "zh-CN": {
    widget: "控件",
    widgetName: "滑动条",
    widthMsg: "宽度 ",
    heightMsg: "高度"
  }
}
var V_ = {
  type: Src_editor_widget_builtIn_types.E,
  icon: Module_149.d,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [
    Module_6.a({}, Module_33.h), {
      key: "__width",
      label: "widthMsg",
      valueType: "number",
      defaultValue: 100,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "__height",
      label: "heightMsg",
      valueType: "number",
      defaultValue: 100,
      blockOptions: {
        generateBlock: false
      }
    }, {
      key: "__size",
      label: "",
      valueType: "number",
      defaultValue: 100,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ["__height", "__width"]
        },
        getter: {
          keys: ["__height", "__width"]
        }
      }
    }
  ],
  methods: [],
  events: []
}
var z_ = {
  "zh-CN": {
    widget: "控件",
    widgetName: "列表数据框"
  }
}
var Y_ = {
  type: Src_editor_widget_builtIn_types.x,
  icon: Module_127.i,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [Module_6.a({}, Module_33.h)],
  methods: [],
  events: []
}
var K_ = {
  "zh-CN": {
    widget: "控件",
    widgetName: "列表数据框"
  }
}
var q_ = {
  type: Src_editor_widget_builtIn_types.A,
  icon: Module_172.g,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [Module_6.a({}, Module_33.h)],
  methods: [],
  events: []
}
export { M_ }
export { L_ }
export { P_ }
export { B_ }
export { F_ }
export { G_ }
export { W_ }
export { U_ }
export { H_ }
export { V_ }
export { z_ }
export { Y_ }
export { K_ }
export { q_ }
