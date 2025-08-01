"use strict";

export { r as messages };
export { c as types };
var r = {
  "zh-CN": {
    widget: "\u63a7\u4ef6",
    widgetName: "\u753b\u5e03",
    backgroundColor: "\u80cc\u666f\u989c\u8272"
  }
};
var o = require("./6");
var i = require("./5");
var a = require("./35/index");
var s = require("./245");
var c = {
  type: i.f,
  icon: "icon-widget-canvas",
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: !1,
  isInvisibleWidget: !1,
  properties: [{
    key: "backgroundColor",
    label: "backgroundColor",
    valueType: "color",
    defaultValue: s.a
  }, Object(o.a)({}, a.i)],
  methods: [],
  events: []
};