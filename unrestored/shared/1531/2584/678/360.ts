/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：360
 */

"use strict"

export { SMS_SERVICE_WIDGET as a }
export { o as b }
var /* [auto-meaningful-name] */SMS_SERVICE_WIDGET = "SMS_SERVICE_WIDGET"
var o = {
  type: SMS_SERVICE_WIDGET,
  icon: "icon-widget-sms-service",
  title: "widgetName",
  platforms: ["web", "android"],
  isGlobalWidget: true,
  isInvisibleWidget: true,
  properties: [{
    key: "phoneNumber",
    label: "phoneNumber",
    valueType: "string",
    checkType: ["string", "number"],
    defaultValue: "",
    validators: {
      notEmpty: {
        value: true,
        message: "smsNumberNotEmpty"
      }
    }
  }, {
    key: "smsContent",
    label: "smsContent",
    valueType: "string",
    checkType: ["string", "number", "boolean"],
    editorType: "TextArea",
    defaultValue: "",
    validators: {
      notEmpty: {
        value: true,
        message: "smsContentNotEmpty"
      }
    }
  }],
  methods: [{
    key: "sendSms",
    label: "sendSms",
    params: [],
    tooltip: "sendSmsTooltip"
  }, {
    key: "openSms",
    label: "openSms",
    params: [],
    tooltip: "openSmsTooltip"
  }],
  events: [{
    key: "onSendSmsSuccess",
    label: "onSendSmsSuccess",
    params: [{
      key: "smsContent",
      label: "smsContent",
      valueType: "string"
    }, {
      key: "phoneNumber",
      label: "phoneNumber",
      valueType: "string"
    }],
    blockOptions: {
      icon: "%{BKY_BLOCK_SMS_ICON}"
    }
  }, {
    key: "onSendSmsFailed",
    label: "onSendSmsFailed",
    params: [{
      key: "smsContent",
      label: "smsContent",
      valueType: "string"
    }, {
      key: "phoneNumber",
      label: "phoneNumber",
      valueType: "string"
    }],
    blockOptions: {
      icon: "%{BKY_BLOCK_SMS_ICON}"
    }
  }, {
    key: "onReceiveSms",
    label: "onReceiveSms",
    params: [{
      key: "smsContent",
      label: "smsContent",
      valueType: "string"
    }, {
      key: "phoneNumber",
      label: "phoneNumber",
      valueType: "string"
    }],
    blockOptions: {
      icon: "%{BKY_BLOCK_SMS_ICON}"
    }
  }]
}
export default SMS_SERVICE_WIDGET
