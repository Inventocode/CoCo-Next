/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-84
 */

"use strict"

import * as /* [auto-meaningful-name] */$_172 from "./172"
import * as /* [auto-meaningful-name] */$_127 from "./127"
import * as /* [auto-meaningful-name] */$_149 from "./149"
import * as /* [auto-meaningful-name] */$_131 from "./131"
import * as /* [auto-meaningful-name] */$_262 from "./262"
import * as /* [auto-meaningful-name] */$_200 from "./200"
import * as Jd from "./33"
import * as An from "../../../../src/editor/widget/built-in/types"
import * as D from "./6"
import * as /* [auto-meaningful-name] */$_682 from "./682"
var M_ = {
  "zh-CN": {
    widget: "控件",
    widgetName: "角色",
    rotation: "方向"
  }
}
var L_ = {
  type: An.a,
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
    }, D.a({}, Jd.i)
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
  type: An.g,
  icon: $_200.e,
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
    }, D.a({}, Jd.h)
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
  type: An.L,
  icon: $_262.a,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [
    D.a({}, Jd.h), {
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
  type: An.F,
  icon: $_131.e,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [
    D.a({}, Jd.h), {
      key: "__width",
      label: "widthMsg",
      valueType: "number",
      defaultValue: 100,
      blockOptions: {
        generateBlock: false
      },
      validators: {
        greaterThan: $_131.j
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
        greaterThan: $_131.i
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
  type: An.E,
  icon: $_149.d,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [
    D.a({}, Jd.h), {
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
  type: An.x,
  icon: $_127.i,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [D.a({}, Jd.h)],
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
  type: An.A,
  icon: $_172.g,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [D.a({}, Jd.h)],
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
