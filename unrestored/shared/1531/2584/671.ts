"use strict";

export { r as messages };
export { o as types };
var r = {
  "zh-CN": {
    widgetNameMsg: "\u751f\u6210\u4e8c\u7ef4\u7801",
    errorCorrectionLevelMsg: "\u5bb9\u9519\u7387",
    errorCorrectionLevelTooltipMsg: "\u5bb9\u9519\u7387\u8d8a\u9ad8\u7684\u4e8c\u7ef4\u7801\u56fe\u7247\uff0c\u53ef\u5728\u906e\u6321\u8d8a\u591a\u7684\u60c5\u51b5\u4e0b\u88ab\u626b\u63cf\u51fa\u6765\u3002",
    marginMsg: "\u8fb9\u7f18\u7559\u767d",
    marginLessThanMsg: "\u8fb9\u7f18\u7559\u767d\u53ea\u80fd\u8f93\u5165\u5c0f\u4e8e{ruleValue}\u7684\u6570\u5b57",
    marginGreaterThanMsg: "\u8fb9\u7f18\u7559\u767d\u53ea\u80fd\u8f93\u5165\u5927\u4e8e{ruleValue}\u7684\u6570\u5b57",
    darkMsg: "\u524d\u666f\u8272",
    lightMsg: "\u80cc\u666f\u8272",
    toDataUrlMsg: "\u751f\u6210\u4e8c\u7ef4\u7801",
    paramTextMsg: "\u6587\u672c",
    onDataUrlSuccessMsg: "\u751f\u6210\u6210\u529f",
    QRCodeImageMsg: "\u4e8c\u7ef4\u7801\u56fe\u7247",
    textIsEmpty: "\u6587\u672c\u4e0d\u80fd\u4e3a\u7a7a",
    tooLongText: "\u6587\u672c\u8fc7\u957f\uff0c\u65e0\u6cd5\u751f\u6210\u4e8c\u7ef4\u7801\uff0c\u8bf7\u5220\u51cf\u6587\u672c\u5185\u5bb9\u3002"
  }
};
var o = {
  type: "QRCODE_WIDGET",
  icon: "icon-widget-qrcode",
  title: "widgetNameMsg",
  platforms: ["web", "android", "ios"],
  isInvisibleWidget: !0,
  isGlobalWidget: !0,
  properties: [{
    key: "dark",
    label: "darkMsg",
    valueType: "color",
    defaultValue: "#000000"
  }, {
    key: "light",
    label: "lightMsg",
    valueType: "color",
    defaultValue: "#ffffff"
  }, {
    key: "margin",
    label: "marginMsg",
    valueType: "number",
    defaultValue: 10,
    unit: "px",
    validators: {
      lessThan: {
        value: 100,
        message: "marginLessThanMsg"
      },
      greaterThan: {
        value: 0,
        message: "marginGreaterThanMsg"
      }
    }
  }, {
    key: "errorCorrectionLevel",
    label: "errorCorrectionLevelMsg",
    valueType: "string",
    defaultValue: "25%",
    dropdown: [{
      label: "7%",
      value: "7%"
    }, {
      label: "15%",
      value: "15%"
    }, {
      label: "25%",
      value: "25%"
    }, {
      label: "30%",
      value: "30%"
    }],
    tooltip: "errorCorrectionLevelTooltipMsg"
  }, {
    key: "image",
    label: "QRCodeImageMsg",
    valueType: "string",
    defaultValue: "",
    readonly: !0
  }],
  methods: [{
    key: "textToDataUrl",
    label: "toDataUrlMsg",
    params: [{
      key: "text",
      label: "paramTextMsg",
      valueType: "string",
      checkType: ["string", "number", "boolean", "array"],
      defaultValue: "Hello"
    }]
  }, {
    key: "urlToDataUrl",
    label: "toDataUrlMsg",
    params: [{
      key: "text",
      label: "paramTextMsg",
      valueType: "string",
      checkType: ["string", "number", "boolean", "array"],
      defaultValue: "https://coco.codemao.cn/"
    }]
  }],
  events: [{
    key: "onDataUrlSuccess",
    label: "onDataUrlSuccessMsg",
    params: [{
      key: "dataUrl",
      label: "QRCodeImageMsg",
      valueType: "string"
    }]
  }]
};