"use strict";

export { r as a };
export { o as b };
var r = "SMS_SERVICE_WIDGET";
var o = {
  type: r,
  icon: "icon-widget-sms-service",
  title: "widgetName",
  platforms: ["web", "android"],
  isGlobalWidget: !0,
  isInvisibleWidget: !0,
  properties: [{
    key: "phoneNumber",
    label: "phoneNumber",
    valueType: "string",
    checkType: ["string", "number"],
    defaultValue: "",
    validators: {
      notEmpty: {
        value: !0,
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
        value: !0,
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
};