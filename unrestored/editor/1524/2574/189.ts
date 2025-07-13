"use strict";

var r;
export { r as b };
export { o as a };
export { i as c };
(function (e) {
  e.styleA = "styleA";
  e.styleB = "styleB";
})(r || (r = {}));
var o = "DIALOG_WIDGET";
var i = {
  type: o,
  icon: "icon-dialog",
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: !0,
  isInvisibleWidget: !0,
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
      generateBlock: !1
    }
  }, {
    key: "themeColor",
    label: "themeColor",
    valueType: "color",
    editorType: "Color",
    defaultValue: "#2B4BF2",
    blockOptions: {
      generateBlock: !1
    }
  }, {
    key: "previewImage",
    label: "previewImage",
    valueType: "string",
    editorType: "PreviewImage",
    defaultValue: "",
    blockOptions: {
      generateBlock: !1
    }
  }, {
    key: "title",
    label: "title",
    valueType: "string",
    editorType: "TextInput",
    defaultValue: "",
    readonly: !0
  }, {
    key: "text",
    label: "text",
    valueType: "string",
    editorType: "TextInput",
    defaultValue: "",
    readonly: !0
  }, {
    key: "image",
    label: "image",
    valueType: "string",
    editorType: "TextInput",
    defaultValue: "",
    readonly: !0
  }, {
    key: "selectedOption",
    label: "selectedOption",
    valueType: "string",
    editorType: "TextInput",
    defaultValue: "",
    readonly: !0
  }, {
    key: "inputText",
    label: "inputText",
    valueType: "string",
    editorType: "TextInput",
    defaultValue: "",
    readonly: !0
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
      defaultValue: "\u786e\u5b9a"
    }, {
      key: "setImage",
      label: "setImage",
      valueType: "image",
      defaultValue: ""
    }, {
      key: "setShowCancelButton",
      label: "setShowCancelButton",
      valueType: "boolean",
      defaultValue: !0
    }],
    blockOptions: {
      inputsInline: !1
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
      defaultValue: "\u9009\u98791"
    }, {
      key: "setOption2",
      label: "setOption2",
      valueType: "string",
      checkType: ["string", "boolean", "number", "array"],
      defaultValue: "\u9009\u98792"
    }, {
      key: "setShowCancelButton",
      label: "setShowCancelButton",
      valueType: "boolean",
      defaultValue: !0
    }],
    blockOptions: {
      inputsInline: !1
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
      defaultValue: "\u8bf7\u8f93\u5165\u5185\u5bb9"
    }, {
      key: "setShowCancelButton",
      label: "setShowCancelButton",
      valueType: "boolean",
      defaultValue: !0
    }],
    blockOptions: {
      inputsInline: !1
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
};