/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-82
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_83 from /* 83 */"./83"
import * as /* [auto-meaningful-name] */Module_314 from /* 314 */"./314"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Module_146 from /* 146 */"./146"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_683 from /* 683 */"./683"
import * as /* [auto-meaningful-name] */Module_684 from /* 684 */"./684/index"
import * as /* [auto-meaningful-name] */Module_685 from /* 685 */"./685/index"
import * as /* [auto-meaningful-name] */Module_686 from /* 686 */"./686"
import * as /* [auto-meaningful-name] */Module_678 from /* 678 */"./678"
import * as /* [auto-meaningful-name] */Module_687 from /* 687 */"./687"
import * as /* [auto-meaningful-name] */Module_688 from /* 688 */"./688"
var T_ = {
  "zh-CN": {
    widget: "控件",
    widgetName: "文本",
    content: "文本",
    color: "文本颜色",
    backgroundColor: "背景颜色",
    textAlign: "水平对齐",
    justifyContent: "垂直对齐",
    fontSize: "字号",
    textAlignLeftMsg: "居左",
    textAlignRightMsg: "居右",
    textAlignCenterMsg: "居中",
    textVerticalTopMsg: "居上",
    textVerticalCenterMsg: "居中",
    textVerticalBottomMsg: "居下",
    onTextPress: "被点击",
    width: "宽度",
    height: "高度"
  }
}
var S_ = {
  type: Src_editor_widget_builtIn_types.H,
  icon: Module_146.b,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [
    {
      key: "content",
      label: "content",
      valueType: "string",
      defaultValue: "content",
      blockOptions: {
        setter: {
          func: "setTextWidgetContent"
        },
        getter: {
          func: "getTextWidgetContent"
        }
      }
    }, {
      key: "color",
      label: "color",
      valueType: "color",
      defaultValue: "#000000ff",
      blockOptions: {
        setter: {
          generateBlock: false,
          func: "setTextWidgetFontColor"
        },
        getter: {
          generateBlock: false,
          func: "getTextWidgetFontColor"
        }
      }
    }, {
      key: "backgroundColor",
      label: "backgroundColor",
      valueType: "color",
      defaultValue: "#000000ff",
      blockOptions: {
        setter: {
          generateBlock: false,
          func: "setTextWidgetBackgroundColor"
        },
        getter: {
          generateBlock: false,
          func: "getTextWidgetBackgroundColor"
        }
      }
    }, {
      key: "textColor",
      label: "",
      valueType: "color",
      defaultValue: "#000000ff",
      readonly: true,
      blockOptions: {
        setter: {
          keys: ["color", "backgroundColor"]
        },
        getter: {
          keys: ["color", "backgroundColor"]
        }
      }
    }, {
      key: "textAlign",
      label: "textAlign",
      valueType: "string",
      defaultValue: "left",
      dropdown: [
        {
          label: "textAlignLeftMsg",
          value: "left"
        }, {
          label: "textAlignCenterMsg",
          value: "center"
        }, {
          label: "textAlignRightMsg",
          value: "right"
        }
      ],
      blockOptions: {
        setter: {
          func: "setTextWidgetHorizontalAlignment"
        },
        getter: {
          generateBlock: false
        }
      }
    }, {
      key: "justifyContent",
      label: "justifyContent",
      valueType: "string",
      defaultValue: "flex-start",
      dropdown: [
        {
          label: "textVerticalTopMsg",
          value: "flex-start"
        }, {
          label: "textVerticalCenterMsg",
          value: "center"
        }, {
          label: "textVerticalBottomMsg",
          value: "flex-end"
        }
      ],
      blockOptions: {
        setter: {
          func: "setTextWidgetVerticalAlignment"
        },
        getter: {
          generateBlock: false
        }
      }
    }, {
      key: "fontSize",
      label: "fontSize",
      valueType: "number",
      defaultValue: 16,
      blockOptions: {
        setter: {
          func: "setTextWidgetFontSize"
        },
        getter: {
          func: "getTextWidgetFontSize"
        }
      },
      validators: {
        greaterThan: Module_60.n
      }
    }, Module_6.a({}, Module_33.i), {
      key: "__width",
      label: "width",
      valueType: "number",
      defaultValue: 100,
      blockOptions: {
        generateBlock: false
      },
      validators: {
        lessThan: Module_146.k,
        greaterThan: Module_146.m
      }
    }, {
      key: "__height",
      label: "height",
      valueType: "number",
      defaultValue: 100,
      blockOptions: {
        generateBlock: false
      },
      validators: {
        lessThan: Module_146.j,
        greaterThan: Module_146.l
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
    }, {
      key: "__position",
      label: "",
      valueType: "number",
      defaultValue: 100,
      blockOptions: {
        setter: {
          space: 50
        }
      }
    }
  ],
  methods: [
    {
      key: "__setVisible",
      label: "__setVisible",
      params: [],
      blockOptions: {
        callMethodLabel: false,
        generateBlock: false
      }
    }
  ],
  events: [
    {
      key: "onTextPress",
      label: "onTextPress",
      params: [],
      blockOptions: {
        icon: "%{BKY_BLOCK_TAB_ICON}"
      }
    }
  ]
}
var A_ = {
  "zh-CN": {
    widget: "控件",
    widgetName: "按钮",
    button: "按钮",
    text: "文本",
    mode: "样式",
    color: "颜色",
    sizeType: "尺寸大小",
    containedTextMsg: "底色白字",
    outlinedTextMsg: "白底彩字",
    containedIconMsg: "底色图标",
    outlinedIconMsg: "白底图标",
    sizeTypeTinyMsg: "超小",
    sizeTypeSmallMsg: "小",
    sizeTypeMediumMsg: "中",
    sizeTypeLargeMsg: "大",
    sizeTypeHugeMsg: "超大",
    onButtonPress: "被",
    pressMsg: "点击",
    pressInMsg: "按下",
    pressOutMsg: "松开"
  }
}
var I_ = {
  type: Src_editor_widget_builtIn_types.d,
  icon: Module_314.d,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [
    {
      key: "text",
      label: "text",
      valueType: "string",
      defaultValue: "button",
      blockOptions: {
        setter: {
          func: "setButtonWidgetText"
        },
        getter: {
          func: "getButtonWidgetText"
        }
      }
    }, {
      key: "mode",
      label: "mode",
      valueType: "string",
      defaultValue: Module_83.b.CONTAINED_TEXT,
      dropdown: [
        {
          label: "containedTextMsg",
          value: Module_83.b.CONTAINED_TEXT
        }, {
          label: "outlinedTextMsg",
          value: Module_83.b.OUTLINED_TEXT
        }, {
          label: "containedIconMsg",
          value: Module_83.b.CONTAINED_ICON
        }, {
          label: "outlinedIconMsg",
          value: Module_83.b.OUTLINED_ICON
        }
      ],
      blockOptions: {
        setter: {
          func: "setButtonWidgetMode"
        },
        getter: {
          generateBlock: false
        }
      }
    }, {
      key: "color",
      label: "color",
      valueType: "color",
      defaultValue: "#148cefff",
      blockOptions: {
        setter: {
          func: "setButtonWidgetColor"
        },
        getter: {
          func: "getButtonWidgetColor"
        }
      }
    }, Module_6.a({}, Module_33.i), {
      key: "sizeType",
      label: "sizeType",
      valueType: "string",
      defaultValue: Module_83.c.MEDIUM,
      dropdown: [
        {
          label: "sizeTypeTinyMsg",
          value: Module_83.c.TINY
        }, {
          label: "sizeTypeSmallMsg",
          value: Module_83.c.SMALL
        }, {
          label: "sizeTypeMediumMsg",
          value: Module_83.c.MEDIUM
        }, {
          label: "sizeTypeLargeMsg",
          value: Module_83.c.LARGE
        }, {
          label: "sizeTypeHugeMsg",
          value: Module_83.c.HUGE
        }
      ],
      blockOptions: {
        setter: {
          func: "setButtonWidgetSizeType"
        },
        getter: {
          generateBlock: false
        }
      }
    }, Module_6.a({}, Module_33.j), Module_6.a({}, Module_33.h)
  ],
  methods: [
    {
      key: "__setVisible",
      label: "__setVisible",
      params: [],
      blockOptions: {
        callMethodLabel: false
      }
    }, {
      key: "__setDisabled",
      label: "__setDisabled",
      params: [],
      blockOptions: {
        callMethodLabel: false
      }
    }
  ],
  events: [
    {
      key: "onButtonPress",
      label: "onButtonPress",
      subTypes: [
        {
          key: "pressType",
          dropdown: [
            {
              label: "pressMsg",
              value: "Press"
            }, {
              label: "pressInMsg",
              value: "PressIn"
            }, {
              label: "pressOutMsg",
              value: "PressOut"
            }
          ]
        }
      ],
      params: [],
      blockOptions: {
        icon: "%{BKY_BLOCK_TAB_ICON}"
      }
    }
  ]
}
export { T_ }
export { S_ }
export { A_ }
export { I_ }
