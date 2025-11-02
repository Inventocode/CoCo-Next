/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：189
 */

"use strict"

var r
export { r as b }
export { o as a }
export { i as c };
(function (e) {
  e.styleA = "styleA"
  e.styleB = "styleB"
})(r || (r = {}))
var o = "DIALOG_WIDGET"
var i = {
  type: o,
  icon: "icon-dialog",
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: true,
  isInvisibleWidget: true,
  properties: [{
    key: "style",
    label: "style",
    valueType: "string",
    editorType: "OptionSwitch",
    defaultValue: r.styleA,
    dropdown: [{
      label: "styleA",
      value: r.styleA
    }, {
      label: "styleB",
      value: r.styleB
    }],
    blockOptions: {
      generateBlock: false
    }
  }, {
    key: "themeColor",
    label: "themeColor",
    valueType: "color",
    editorType: "Color",
    defaultValue: "#2B4BF2",
    blockOptions: {
      generateBlock: false
    }
  }, {
    key: "previewImage",
    label: "previewImage",
    valueType: "string",
    editorType: "PreviewImage",
    defaultValue: "",
    blockOptions: {
      generateBlock: false
    }
  }, {
    key: "title",
    label: "title",
    valueType: "string",
    editorType: "TextInput",
    defaultValue: "",
    readonly: true
  }, {
    key: "text",
    label: "text",
    valueType: "string",
    editorType: "TextInput",
    defaultValue: "",
    readonly: true
  }, {
    key: "image",
    label: "image",
    valueType: "string",
    editorType: "TextInput",
    defaultValue: "",
    readonly: true
  }, {
    key: "selectedOption",
    label: "selectedOption",
    valueType: "string",
    editorType: "TextInput",
    defaultValue: "",
    readonly: true
  }, {
    key: "inputText",
    label: "inputText",
    valueType: "string",
    editorType: "TextInput",
    defaultValue: "",
    readonly: true
  }],
  methods: [{
    key: "message",
    label: "message",
    params: [{
      key: "setTitle",
      label: "setTitle",
      valueType: "multilineString",
      checkType: ["string", "boolean", "number", "array"],
      defaultValue: ""
    }, {
      key: "setText",
      label: "setText",
      valueType: "multilineString",
      checkType: ["string", "boolean", "number", "array"],
      defaultValue: ""
    }, {
      key: "setButtonText",
      label: "setButtonText",
      valueType: "string",
      checkType: ["string", "boolean", "number", "array"],
      defaultValue: "确定"
    }, {
      key: "setImage",
      label: "setImage",
      valueType: "image",
      defaultValue: ""
    }, {
      key: "setShowCancelButton",
      label: "setShowCancelButton",
      valueType: "boolean",
      defaultValue: true
    }],
    blockOptions: {
      inputsInline: false
    }
  }, {
    key: "select",
    label: "select",
    params: [{
      key: "setTitle",
      label: "setTitle",
      valueType: "multilineString",
      checkType: ["string", "boolean", "number", "array"],
      defaultValue: ""
    }, {
      key: "setText",
      label: "setText",
      valueType: "multilineString",
      checkType: ["string", "boolean", "number", "array"],
      defaultValue: ""
    }, {
      key: "setOption1",
      label: "setOption1",
      valueType: "string",
      checkType: ["string", "boolean", "number", "array"],
      defaultValue: "选项1"
    }, {
      key: "setOption2",
      label: "setOption2",
      valueType: "string",
      checkType: ["string", "boolean", "number", "array"],
      defaultValue: "选项2"
    }, {
      key: "setShowCancelButton",
      label: "setShowCancelButton",
      valueType: "boolean",
      defaultValue: true
    }],
    blockOptions: {
      inputsInline: false
    }
  }, {
    key: "prompt",
    label: "prompt",
    params: [{
      key: "setTitle",
      label: "setTitle",
      valueType: "multilineString",
      checkType: ["string", "boolean", "number", "array"],
      defaultValue: ""
    }, {
      key: "setText",
      label: "setText",
      valueType: "multilineString",
      checkType: ["string", "boolean", "number", "array"],
      defaultValue: ""
    }, {
      key: "setInputPlaceHolder",
      label: "setInputPlaceHolder",
      valueType: "string",
      checkType: ["string", "boolean", "number", "array"],
      defaultValue: "请输入内容"
    }, {
      key: "setShowCancelButton",
      label: "setShowCancelButton",
      valueType: "boolean",
      defaultValue: true
    }],
    blockOptions: {
      inputsInline: false
    }
  }],
  events: [{
    key: "onClickButton",
    label: "onClickButton",
    params: [{
      key: "buttonText",
      label: "buttonText",
      valueType: "string"
    }]
  }, {
    key: "onSelectOption",
    label: "onSelectOption",
    params: [{
      key: "selectedOption",
      label: "selectedOption",
      valueType: "string"
    }]
  }, {
    key: "onCancelSelection",
    label: "onCancelSelection",
    params: []
  }, {
    key: "onFinishInput",
    label: "onFinishInput",
    params: [{
      key: "inputText",
      label: "inputText",
      valueType: "string"
    }]
  }, {
    key: "onCancelInput",
    label: "onCancelInput",
    params: []
  }]
}
export default o
