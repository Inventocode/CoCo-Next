/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：70
 */

"use strict";

export { i as c };
export { r as b };
export { o as a };
export { a as d };
var r;
var o;
var i = "PHONE_DIALER_WIDGET";
!function (e) {
  e.IDEL = "IDEL";
  e.RINGING = "RINGING";
  e.OFFHOOK = "OFFHOOK";
}(r || (r = {}));
(function (e) {
  e[e.INCOMING_CALL_REFUSE_END = 1] = "INCOMING_CALL_REFUSE_END";
  e[e.INCOMING_CALL_CONNECT_END = 2] = "INCOMING_CALL_CONNECT_END";
  e[e.DIAL_OUT_CALL_END = 3] = "DIAL_OUT_CALL_END";
})(o || (o = {}));
var a = {
  type: i,
  icon: "icon-widget-phone-dialer",
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
        message: "phoneNumberNotEmpty"
      }
    }
  }],
  methods: [{
    key: "callNumber",
    label: "callNumber",
    params: [],
    tooltip: "callNumberTooltip"
  }, {
    key: "dialNumber",
    label: "dialNumber",
    params: [],
    tooltip: "dialNumberTooltip"
  }],
  events: [{
    key: "onReceivePhoneCall",
    label: "onReceivePhoneCall",
    params: [],
    blockOptions: {
      icon: "%{BKY_BLOCK_PHONE_ICON}"
    }
  }, {
    key: "onConnectReceivePhoneCall",
    label: "onConnectReceivePhoneCall",
    params: [],
    blockOptions: {
      icon: "%{BKY_BLOCK_PHONE_ICON}"
    }
  }, {
    key: "onPhoneCallStart",
    label: "onPhoneCallStart",
    params: [],
    blockOptions: {
      icon: "%{BKY_BLOCK_PHONE_ICON}"
    }
  }, {
    key: "onPhoneCallEnd",
    label: "onPhoneCallEnd",
    params: [{
      key: "state",
      label: "state",
      valueType: "number"
    }],
    tooltip: "onPhoneCallEndTooltip",
    blockOptions: {
      icon: "%{BKY_BLOCK_PHONE_ICON}"
    }
  }]
};
export default o;