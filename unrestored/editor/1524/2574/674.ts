"use strict";

export { r as messages };
export { u as types };
var r = {
  "zh-CN": {
    widget: "\u63a7\u4ef6",
    widgetName: "\u8f93\u5165\u6846",
    widthMsg: "\u5bbd\u5ea6 ",
    heightMsg: "\u9ad8\u5ea6",
    hasErrorMessageLabel: "\u662f\u5426 \u62a5\u9519",
    placeholderContent: "\u63d0\u793a\u6587\u6848",
    inputContent: "\u8f93\u5165\u6587\u6848",
    fontSize: "\u5b57\u53f7",
    textAlign: "\u5bf9\u9f50\u65b9\u5f0f",
    left: "\u5c45\u5de6",
    center: "\u5c45\u4e2d",
    right: "\u5c45\u53f3",
    outlinedNormal: "\u7ebf\u6846",
    containedNormal: "\u5e95\u8272",
    containedRound: "\u5706\u89d2",
    outlinedFlat: "\u6a2a\u7ebf",
    color: "\u989c\u8272 \u4e3a",
    templateMode: "\u7684 \u80cc\u666f\u6846 \u6837\u5f0f \u4e3a \u6a21\u677f",
    backgroundImage: "\u7684 \u80cc\u666f\u6846 \u6837\u5f0f \u4e3a \u56fe\u7247",
    errorMessageContent: "\u62a5\u9519\u6587\u6848",
    contentColor: "\u7684 \u989c\u8272",
    outOfRange: "\u5d4c\u5165\u79ef\u6728\u6570\u503c\u8d85\u8fc7\u53d6\u503c\u8303\u56f4",
    set: "\u8bbe\u7f6e"
  }
};
import * as o from "./6";
import * as i from "./97";
import * as a from "./5";
import * as s from "./35/index";
import * as c from "./77";
import * as l from "./60";
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