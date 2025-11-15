/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：476
 */

"use strict"

export { CONTACT_PICKER_WIDGET as a }
export { o as b }
var /* [auto-meaningful-name] */CONTACT_PICKER_WIDGET = "CONTACT_PICKER_WIDGET"
var o = {
  type: CONTACT_PICKER_WIDGET,
  icon: "icon-widget-contact-picker",
  title: "widgetName",
  platforms: ["web", "android"],
  isGlobalWidget: true,
  isInvisibleWidget: true,
  properties: [{
    key: "contactName",
    label: "contactName",
    valueType: "string",
    defaultValue: "",
    readonly: true
  }, {
    key: "phoneNumber",
    label: "phoneNumber",
    valueType: "string",
    defaultValue: "",
    readonly: true
  }, {
    key: "phoneNumberList",
    label: "phoneNumberList",
    valueType: "array",
    defaultValue: [],
    readonly: true,
    tooltip: "phoneNumberListTooltip"
  }, {
    key: "contactAvatar",
    label: "contactAvatar",
    valueType: "string",
    defaultValue: "",
    readonly: true,
    tooltip: "contactAvatarTooltip"
  }],
  methods: [{
    key: "pickContact",
    label: "pickContact",
    params: []
  }],
  events: [{
    key: "onContactPickerSelected",
    label: "onContactPickerSelected",
    params: [{
      key: "contactName",
      label: "contactName",
      valueType: "string"
    }, {
      key: "phoneNumber",
      label: "phoneNumber",
      valueType: "string"
    }]
  }]
}
export default CONTACT_PICKER_WIDGET
