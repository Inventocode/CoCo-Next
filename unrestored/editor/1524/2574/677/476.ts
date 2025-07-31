"use strict";

export { r as a };
export { o as b };
var r = "CONTACT_PICKER_WIDGET";
var o = {
  type: r,
  icon: "icon-widget-contact-picker",
  title: "widgetName",
  platforms: ["web", "android"],
  isGlobalWidget: !0,
  isInvisibleWidget: !0,
  properties: [{
    key: "contactName",
    label: "contactName",
    valueType: "string",
    defaultValue: "",
    readonly: !0
  }, {
    key: "phoneNumber",
    label: "phoneNumber",
    valueType: "string",
    defaultValue: "",
    readonly: !0
  }, {
    key: "phoneNumberList",
    label: "phoneNumberList",
    valueType: "array",
    defaultValue: [],
    readonly: !0,
    tooltip: "phoneNumberListTooltip"
  }, {
    key: "contactAvatar",
    label: "contactAvatar",
    valueType: "string",
    defaultValue: "",
    readonly: !0,
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
};
export default r;