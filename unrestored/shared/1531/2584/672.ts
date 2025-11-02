/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：672
 */

"use strict"

export { r as messages }
export { u as types }
var r = {
  "zh-CN": {
    widget: "控件",
    widgetName: "按钮",
    button: "按钮",
    text: "文本 ",
    textContent: "文本 内容 ",
    textColor: "文本 颜色 ",
    backgroundColor: "模版 颜色",
    maxFontSize: "文本 最大字号 ",
    textAlign: "文本 对齐方式 ",
    left: "居左",
    center: "居中",
    right: "居右",
    icon: "图标",
    iconId: "图标 图形 ",
    iconColor: "图标 颜色 ",
    templateMode: "背景框 样式 为 模板",
    backgroundImage: "背景框 样式 为 图片",
    set: "设置",
    show: "显示",
    hide: "隐藏",
    width: "宽度",
    height: "高度",
    mode: "样式",
    general: "通用",
    returnValue: "返回值",
    color: "颜色 为",
    sizeType: "尺寸大小",
    rectangleFill: "矩形填充",
    rectangleOutline: "矩形边框",
    circleFill: "圆形填充",
    circleOutline: "圆形边框",
    onButtonPress: "被",
    pressMsg: "点击",
    pressInMsg: "按下",
    pressOutMsg: "松开",
    outOfRange: "嵌入积木数值超过取值范围"
  }
}
import o = require("./6");
import i = require("./5");
import a = require("./60");
import s = require("./82");
import c = require("./116");
import l = require("./9");
var u = {
  type: i.z,
  icon: s.g,
  title: "widgetName",
  contentTextField: "text",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  hasAnyWidget: true,
  properties: [o.a({}, l.n), o.a({}, l.l), {
    key: "ButtonTextGroup",
    label: "ButtonTextGroup",
    valueType: "string",
    editorType: "ButtonTextGroup",
    defaultValue: "",
    blockOptions: {
      generateBlock: false
    }
  }, {
    key: "ButtonIconGroup",
    label: "ButtonIconGroup",
    valueType: "string",
    editorType: "ButtonIconGroup",
    defaultValue: "",
    blockOptions: {
      generateBlock: false
    }
  }, {
    key: "ButtonBackground",
    label: "ButtonBackground",
    valueType: "string",
    editorType: "ButtonBackground",
    defaultValue: "",
    blockOptions: {
      generateBlock: false
    }
  }, {
    key: "textVisible",
    label: "text",
    valueType: "boolean",
    defaultValue: true,
    hidePropertyEditor: true,
    dropdown: [{
      label: "show",
      value: true
    }, {
      label: "hide",
      value: false
    }],
    blockOptions: {
      getter: {
        generateBlock: false
      },
      setter: {
        line: "text"
      }
    }
  }, {
    key: "text",
    label: "textContent",
    valueType: "string",
    checkType: ["string", "number", "boolean", "array"],
    defaultValue: "按钮",
    hidePropertyEditor: true,
    blockOptions: {
      getter: {
        line: "returnValue"
      }
    }
  }, {
    key: "textColor",
    label: "textColor",
    valueType: "color",
    defaultValue: s.e,
    hidePropertyEditor: true
  }, {
    key: "maxFontSize",
    label: "maxFontSize",
    valueType: "number",
    defaultValue: s.h,
    hidePropertyEditor: true,
    blockOptions: {
      getter: {
        generateBlock: false
      }
    },
    validators: {
      greaterThan: {
        value: s.o,
        message: "outOfRange"
      },
      lessThan: {
        value: s.l,
        message: "outOfRange"
      },
      isInteger: true
    }
  }, {
    key: "textAlign",
    label: "textAlign",
    valueType: "string",
    defaultValue: a.a.CENTER,
    hidePropertyEditor: true,
    dropdown: [{
      label: "left",
      value: a.a.LEFT
    }, {
      label: "center",
      value: a.a.CENTER
    }, {
      label: "right",
      value: a.a.RIGHT
    }],
    blockOptions: {
      getter: {
        generateBlock: false
      }
    }
  }, {
    key: "iconVisible",
    label: "icon",
    valueType: "boolean",
    defaultValue: false,
    hidePropertyEditor: true,
    dropdown: [{
      label: "show",
      value: true
    }, {
      label: "hide",
      value: false
    }],
    blockOptions: {
      getter: {
        generateBlock: false
      },
      setter: {
        line: "icon"
      }
    }
  }, {
    key: "iconId",
    label: "iconId",
    valueType: "icon",
    defaultValue: "",
    hidePropertyEditor: true,
    blockOptions: {
      getter: {
        generateBlock: false
      }
    }
  }, {
    key: "iconColor",
    label: "iconColor",
    valueType: "color",
    defaultValue: s.d,
    hidePropertyEditor: true,
    blockOptions: {
      getter: {
        generateBlock: false
      }
    }
  }, {
    key: "fontFamily",
    label: "fontFamily",
    valueType: "string",
    defaultValue: s.b,
    hidePropertyEditor: true,
    blockOptions: {
      generateBlock: false
    }
  }, {
    key: "allowMinFontSize",
    label: "allowMinFontSize",
    valueType: "number",
    defaultValue: s.o,
    hidePropertyEditor: true,
    blockOptions: {
      generateBlock: false
    }
  }, {
    key: "allowMaxFontSize",
    label: "allowMaxFontSize",
    valueType: "number",
    defaultValue: s.l,
    hidePropertyEditor: true,
    blockOptions: {
      generateBlock: false
    }
  }, {
    key: "backgroundMode",
    label: "backgroundMode",
    valueType: "string",
    defaultValue: c.a.TEMPLATE,
    hidePropertyEditor: true,
    blockOptions: {
      generateBlock: false
    }
  }, {
    key: "templateMode",
    label: "templateMode",
    valueType: "string",
    defaultValue: c.b.RECTANGLE_FILL,
    hidePropertyEditor: true,
    blockOptions: {
      generateBlock: false
    }
  }, {
    key: "backgroundColor",
    label: "backgroundColor",
    valueType: "color",
    defaultValue: s.a,
    hidePropertyEditor: true,
    blockOptions: {
      setter: {
        generateBlock: false
      },
      getter: {
        generateBlock: true
      }
    }
  }, {
    key: "backgroundImage",
    label: "backgroundImage",
    valueType: "string",
    defaultValue: s.f,
    hidePropertyEditor: true,
    blockOptions: {
      generateBlock: false
    }
  }, {
    key: "imageResizeMode",
    label: "imageResizeMode",
    valueType: "string",
    defaultValue: c.c.CONTAIN,
    hidePropertyEditor: true,
    blockOptions: {
      generateBlock: false
    }
  }, o.a(o.a({}, l.m), {}, {
    blockOptions: {
      setter: {
        line: "general"
      }
    }
  }), {
    key: "__width",
    label: "width",
    valueType: "number",
    defaultValue: 120,
    blockOptions: {
      generateBlock: false
    },
    validators: {
      lessThan: s.m,
      greaterThan: s.p
    }
  }, {
    key: "__height",
    label: "height",
    valueType: "number",
    defaultValue: 40,
    blockOptions: {
      generateBlock: false
    },
    validators: {
      lessThan: s.k,
      greaterThan: s.n
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
  }],
  methods: [{
    key: "setTemplateMode",
    label: "templateMode",
    blockOptions: {
      callMethodLabel: "set",
      order: 30008.2,
      color: "#E76CEA",
      line: "mode"
    },
    params: [{
      key: "text",
      label: "",
      valueType: "string",
      checkType: ["string"],
      defaultValue: c.b.RECTANGLE_FILL,
      dropdown: [{
        label: "rectangleFill",
        value: c.b.RECTANGLE_FILL,
        image: "https://static.codemao.cn/coco/image/button-rect-fill-template.png",
        isHideFieldImage: true
      }, {
        label: "rectangleOutline",
        value: c.b.RECTANGLE_OUTLINE,
        image: "https://static.codemao.cn/coco/image/button-rect-outline-template.png",
        isHideFieldImage: true
      }, {
        label: "circleFill",
        value: c.b.CIRCLE_FILL,
        image: "https://static.codemao.cn/coco/image/button-circle-fill-template.png",
        isHideFieldImage: true
      }, {
        label: "circleOutline",
        value: c.b.CIRCLE_OUTLINE,
        image: "https://static.codemao.cn/coco/image/button-circle-outline-template.png",
        isHideFieldImage: true
      }]
    }, {
      key: "backgroundColor",
      label: "color",
      valueType: "color",
      defaultValue: s.a
    }]
  }, {
    key: "setBackgroundImage",
    label: "backgroundImage",
    blockOptions: {
      callMethodLabel: "set",
      order: 30008.3,
      color: "#E76CEA"
    },
    params: [{
      key: "text",
      label: "",
      valueType: "image",
      checkType: ["string"],
      defaultValue: "default"
    }]
  }],
  events: [{
    key: "onButtonPress",
    label: "onButtonPress",
    subTypes: [{
      key: "pressType",
      dropdown: [{
        label: "pressMsg",
        value: "Press"
      }, {
        label: "pressInMsg",
        value: "PressIn"
      }, {
        label: "pressOutMsg",
        value: "PressOut"
      }]
    }],
    params: [],
    blockOptions: {
      icon: "%{BKY_BLOCK_TAB_ICON}"
    }
  }]
}
