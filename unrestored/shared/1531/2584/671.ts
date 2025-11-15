/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：671
 */

"use strict"

export { r as messages }
export { o as types }
var r = {
  "zh-CN": {
    widgetNameMsg: "生成二维码",
    errorCorrectionLevelMsg: "容错率",
    errorCorrectionLevelTooltipMsg: "容错率越高的二维码图片，可在遮挡越多的情况下被扫描出来。",
    marginMsg: "边缘留白",
    marginLessThanMsg: "边缘留白只能输入小于{ruleValue}的数字",
    marginGreaterThanMsg: "边缘留白只能输入大于{ruleValue}的数字",
    darkMsg: "前景色",
    lightMsg: "背景色",
    toDataUrlMsg: "生成二维码",
    paramTextMsg: "文本",
    onDataUrlSuccessMsg: "生成成功",
    QRCodeImageMsg: "二维码图片",
    textIsEmpty: "文本不能为空",
    tooLongText: "文本过长，无法生成二维码，请删减文本内容。"
  }
}
var o = {
  type: "QRCODE_WIDGET",
  icon: "icon-widget-qrcode",
  title: "widgetNameMsg",
  platforms: ["web", "android", "ios"],
  isInvisibleWidget: true,
  isGlobalWidget: true,
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
    readonly: true
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
}
