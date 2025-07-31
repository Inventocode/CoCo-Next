"use strict";

export { r as messages };
export { u as types };
var r = {
  "zh-CN": {
    widget: "\u63a7\u4ef6",
    widgetName: "\u6309\u94ae",
    button: "\u6309\u94ae",
    text: "\u6587\u672c ",
    textContent: "\u6587\u672c \u5185\u5bb9 ",
    textColor: "\u6587\u672c \u989c\u8272 ",
    backgroundColor: "\u6a21\u7248 \u989c\u8272",
    maxFontSize: "\u6587\u672c \u6700\u5927\u5b57\u53f7 ",
    textAlign: "\u6587\u672c \u5bf9\u9f50\u65b9\u5f0f ",
    left: "\u5c45\u5de6",
    center: "\u5c45\u4e2d",
    right: "\u5c45\u53f3",
    icon: "\u56fe\u6807",
    iconId: "\u56fe\u6807 \u56fe\u5f62 ",
    iconColor: "\u56fe\u6807 \u989c\u8272 ",
    templateMode: "\u80cc\u666f\u6846 \u6837\u5f0f \u4e3a \u6a21\u677f",
    backgroundImage: "\u80cc\u666f\u6846 \u6837\u5f0f \u4e3a \u56fe\u7247",
    set: "\u8bbe\u7f6e",
    show: "\u663e\u793a",
    hide: "\u9690\u85cf",
    width: "\u5bbd\u5ea6",
    height: "\u9ad8\u5ea6",
    mode: "\u6837\u5f0f",
    general: "\u901a\u7528",
    returnValue: "\u8fd4\u56de\u503c",
    color: "\u989c\u8272 \u4e3a",
    sizeType: "\u5c3a\u5bf8\u5927\u5c0f",
    rectangleFill: "\u77e9\u5f62\u586b\u5145",
    rectangleOutline: "\u77e9\u5f62\u8fb9\u6846",
    circleFill: "\u5706\u5f62\u586b\u5145",
    circleOutline: "\u5706\u5f62\u8fb9\u6846",
    onButtonPress: "\u88ab",
    pressMsg: "\u70b9\u51fb",
    pressInMsg: "\u6309\u4e0b",
    pressOutMsg: "\u677e\u5f00",
    outOfRange: "\u5d4c\u5165\u79ef\u6728\u6570\u503c\u8d85\u8fc7\u53d6\u503c\u8303\u56f4"
  }
};
var o = require("./6");
var i = require("./5");
var a = require("./60");
var s = require("./82");
var c = require("./116");
var l = require("./9");
var u = {
  type: i.z,
  icon: s.g,
  title: "widgetName",
  contentTextField: "text",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: !1,
  isInvisibleWidget: !1,
  hasAnyWidget: !0,
  properties: [Object(o.a)({}, l.n), Object(o.a)({}, l.l), {
    key: "ButtonTextGroup",
    label: "ButtonTextGroup",
    valueType: "string",
    editorType: "ButtonTextGroup",
    defaultValue: "",
    blockOptions: {
      generateBlock: !1
    }
  }, {
    key: "ButtonIconGroup",
    label: "ButtonIconGroup",
    valueType: "string",
    editorType: "ButtonIconGroup",
    defaultValue: "",
    blockOptions: {
      generateBlock: !1
    }
  }, {
    key: "ButtonBackground",
    label: "ButtonBackground",
    valueType: "string",
    editorType: "ButtonBackground",
    defaultValue: "",
    blockOptions: {
      generateBlock: !1
    }
  }, {
    key: "textVisible",
    label: "text",
    valueType: "boolean",
    defaultValue: !0,
    hidePropertyEditor: !0,
    dropdown: [{
      label: "show",
      value: !0
    }, {
      label: "hide",
      value: !1
    }],
    blockOptions: {
      getter: {
        generateBlock: !1
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
    defaultValue: "\u6309\u94ae",
    hidePropertyEditor: !0,
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
    hidePropertyEditor: !0
  }, {
    key: "maxFontSize",
    label: "maxFontSize",
    valueType: "number",
    defaultValue: s.h,
    hidePropertyEditor: !0,
    blockOptions: {
      getter: {
        generateBlock: !1
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
      isInteger: !0
    }
  }, {
    key: "textAlign",
    label: "textAlign",
    valueType: "string",
    defaultValue: a.a.CENTER,
    hidePropertyEditor: !0,
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
        generateBlock: !1
      }
    }
  }, {
    key: "iconVisible",
    label: "icon",
    valueType: "boolean",
    defaultValue: !1,
    hidePropertyEditor: !0,
    dropdown: [{
      label: "show",
      value: !0
    }, {
      label: "hide",
      value: !1
    }],
    blockOptions: {
      getter: {
        generateBlock: !1
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
    hidePropertyEditor: !0,
    blockOptions: {
      getter: {
        generateBlock: !1
      }
    }
  }, {
    key: "iconColor",
    label: "iconColor",
    valueType: "color",
    defaultValue: s.d,
    hidePropertyEditor: !0,
    blockOptions: {
      getter: {
        generateBlock: !1
      }
    }
  }, {
    key: "fontFamily",
    label: "fontFamily",
    valueType: "string",
    defaultValue: s.b,
    hidePropertyEditor: !0,
    blockOptions: {
      generateBlock: !1
    }
  }, {
    key: "allowMinFontSize",
    label: "allowMinFontSize",
    valueType: "number",
    defaultValue: s.o,
    hidePropertyEditor: !0,
    blockOptions: {
      generateBlock: !1
    }
  }, {
    key: "allowMaxFontSize",
    label: "allowMaxFontSize",
    valueType: "number",
    defaultValue: s.l,
    hidePropertyEditor: !0,
    blockOptions: {
      generateBlock: !1
    }
  }, {
    key: "backgroundMode",
    label: "backgroundMode",
    valueType: "string",
    defaultValue: c.a.TEMPLATE,
    hidePropertyEditor: !0,
    blockOptions: {
      generateBlock: !1
    }
  }, {
    key: "templateMode",
    label: "templateMode",
    valueType: "string",
    defaultValue: c.b.RECTANGLE_FILL,
    hidePropertyEditor: !0,
    blockOptions: {
      generateBlock: !1
    }
  }, {
    key: "backgroundColor",
    label: "backgroundColor",
    valueType: "color",
    defaultValue: s.a,
    hidePropertyEditor: !0,
    blockOptions: {
      setter: {
        generateBlock: !1
      },
      getter: {
        generateBlock: !0
      }
    }
  }, {
    key: "backgroundImage",
    label: "backgroundImage",
    valueType: "string",
    defaultValue: s.f,
    hidePropertyEditor: !0,
    blockOptions: {
      generateBlock: !1
    }
  }, {
    key: "imageResizeMode",
    label: "imageResizeMode",
    valueType: "string",
    defaultValue: c.c.CONTAIN,
    hidePropertyEditor: !0,
    blockOptions: {
      generateBlock: !1
    }
  }, Object(o.a)(Object(o.a)({}, l.m), {}, {
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
      generateBlock: !1
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
      generateBlock: !1
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
    readonly: !0,
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
        isHideFieldImage: !0
      }, {
        label: "rectangleOutline",
        value: c.b.RECTANGLE_OUTLINE,
        image: "https://static.codemao.cn/coco/image/button-rect-outline-template.png",
        isHideFieldImage: !0
      }, {
        label: "circleFill",
        value: c.b.CIRCLE_FILL,
        image: "https://static.codemao.cn/coco/image/button-circle-fill-template.png",
        isHideFieldImage: !0
      }, {
        label: "circleOutline",
        value: c.b.CIRCLE_OUTLINE,
        image: "https://static.codemao.cn/coco/image/button-circle-outline-template.png",
        isHideFieldImage: !0
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
};