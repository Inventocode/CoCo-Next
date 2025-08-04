"use strict";

export { r as messages };
export { u as types };
var r = {
  "zh-CN": {
    widget: "控件",
    widgetName: "输入框",
    widthMsg: "宽度 ",
    heightMsg: "高度",
    hasErrorMessageLabel: "是否 报错",
    placeholderContent: "提示文案",
    inputContent: "输入文案",
    fontSize: "字号",
    textAlign: "对齐方式",
    left: "居左",
    center: "居中",
    right: "居右",
    outlinedNormal: "线框",
    containedNormal: "底色",
    containedRound: "圆角",
    outlinedFlat: "横线",
    color: "颜色 为",
    templateMode: "的 背景框 样式 为 模板",
    backgroundImage: "的 背景框 样式 为 图片",
    errorMessageContent: "报错文案",
    contentColor: "的 颜色",
    outOfRange: "嵌入积木数值超过取值范围",
    set: "设置"
  }
};
var o = require("./6");
var i = require("./97");
var a = require("./5");
var s = require("./35");
var c = require("./77");
var l = require("./60");
var u = {
  type: a.w,
  icon: i.b,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: !1,
  isInvisibleWidget: !1,
  properties: [Object(o.a)({}, s.h), {
    key: "__width",
    label: "widthMsg",
    valueType: "number",
    defaultValue: 100,
    blockOptions: {
      generateBlock: !1
    },
    validators: {
      greaterThan: i.m
    }
  }, {
    key: "__height",
    label: "heightMsg",
    valueType: "number",
    defaultValue: 100,
    blockOptions: {
      generateBlock: !1
    },
    validators: {
      greaterThan: i.l
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
  }, {
    key: "hasErrorMessage",
    label: "hasErrorMessageLabel",
    valueType: "boolean",
    defaultValue: !1,
    blockOptions: {
      getter: {
        func: "checkIfInputWidgetHasErrorMessage"
      }
    }
  }, {
    key: "placeholderColor",
    label: "placeholderContent",
    valueType: "color",
    defaultValue: i.n,
    blockOptions: {
      generateBlock: !1
    }
  }, {
    key: "valueColor",
    label: "inputContent",
    valueType: "color",
    defaultValue: i.o,
    blockOptions: {
      generateBlock: !1
    }
  }, {
    key: "contentColor",
    label: "contentColor",
    valueType: "color",
    defaultValue: i.n,
    readonly: !0,
    blockOptions: {
      setter: {
        keys: ["valueColor", "placeholderColor"]
      },
      getter: {
        keys: ["valueColor", "placeholderColor"]
      }
    }
  }, {
    key: "fontSize",
    label: "fontSize",
    valueType: "number",
    defaultValue: i.g,
    validators: {
      greaterThan: {
        value: l.n,
        message: "outOfRange"
      },
      isInteger: !0
    }
  }, {
    key: "textAlign",
    label: "textAlign",
    valueType: "string",
    defaultValue: l.a.LEFT,
    dropdown: [{
      label: "left",
      value: l.a.LEFT
    }, {
      label: "center",
      value: l.a.CENTER
    }, {
      label: "right",
      value: l.a.RIGHT
    }],
    blockOptions: {
      getter: {
        generateBlock: !1
      }
    }
  }, {
    key: "errorMessage",
    label: "errorMessageContent",
    valueType: "string",
    defaultValue: "",
    blockOptions: {
      setter: {
        generateBlock: !1
      }
    }
  }],
  methods: [{
    key: "setTemplateMode",
    label: "templateMode",
    blockOptions: {
      callMethodLabel: "set",
      color: "#E76CEA"
    },
    params: [{
      key: "text",
      label: "",
      valueType: "string",
      checkType: ["string"],
      defaultValue: c.c.OUTLINED_NORMAL,
      dropdown: [{
        label: "outlinedNormal",
        value: c.c.OUTLINED_NORMAL,
        image: "https://static.codemao.cn/coco/image/input-outline-normal-template.png",
        isHideFieldImage: !0
      }, {
        label: "containedNormal",
        value: c.c.CONTAINED_NORMAL,
        image: "https://static.codemao.cn/coco/image/input-contain-normal-template.png",
        isHideFieldImage: !0
      }, {
        label: "containedRound",
        value: c.c.CONTAINED_ROUND,
        image: "https://static.codemao.cn/coco/image/input-contain-round-template.png",
        isHideFieldImage: !0
      }, {
        label: "outlinedFlat",
        value: c.c.OUTLINED_FLAT,
        image: "https://static.codemao.cn/coco/image/input-outline-flat-template.png",
        isHideFieldImage: !0
      }]
    }, {
      key: "backgroundColor",
      label: "color",
      valueType: "color",
      defaultValue: i.c
    }]
  }, {
    key: "setBackgroundImage",
    label: "backgroundImage",
    blockOptions: {
      callMethodLabel: "set",
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
  events: []
};