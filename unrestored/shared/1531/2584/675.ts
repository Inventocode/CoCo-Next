"use strict";

export { r as messages };
export { c as types };
var r = {
  "zh-CN": {
    widget: "控件",
    widgetName: "画布",
    backgroundColor: "背景颜色"
  }
};
var o = require("./6");
var i = require("./5");
var a = require("./35");
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