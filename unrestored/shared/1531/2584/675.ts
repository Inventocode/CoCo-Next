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
import o = require("./6");
import i = require("./5");
import a = require("./35");
import s = require("./245");
var c = {
  type: i.f,
  icon: "icon-widget-canvas",
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [{
    key: "backgroundColor",
    label: "backgroundColor",
    valueType: "color",
    defaultValue: s.a
  }, o.a({}, a.i)],
  methods: [],
  events: []
};