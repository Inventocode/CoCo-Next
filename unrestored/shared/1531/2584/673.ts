/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：673
 */

"use strict"

export { r as messages }
export { c as types }
var r = {
  "zh-CN": {
    widget: "控件",
    widgetName: "图片框",
    fileId: "图片",
    onImagePress: "被点击",
    width: "宽度",
    height: "高度",
    backgroundColor: "背景颜色"
  }
}
import o = require("./6");
import i = require("./133/index");
import a = require("./5");
import s = require("./35");
var c = {
  type: a.v,
  icon: i.a,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [{
    key: "fileId",
    label: "fileId",
    valueType: "image",
    defaultValue: "",
    blockOptions: {
      setter: {
        func: "setImageWidgetImageId"
      },
      getter: {
        func: "getImageWidgetImageId"
      }
    }
  }, {
    key: "backgroundColor",
    label: "backgroundColor",
    valueType: "color",
    defaultValue: i.g
  }, o.a({}, s.i), {
    key: "__width",
    label: "width",
    valueType: "number",
    defaultValue: 100,
    blockOptions: {
      generateBlock: false
    }
  }, {
    key: "__height",
    label: "height",
    valueType: "number",
    defaultValue: 100,
    blockOptions: {
      generateBlock: false
    }
  }, {
    key: "__size",
    label: "",
    valueType: "number",
    defaultValue: 100,
    readonly: true,
    blockOptions: {
      setter: {
        keys: ["__height", "__width"]
      },
      getter: {
        keys: ["__height", "__width"]
      }
    }
  }],
  methods: [{
    key: "__setVisible",
    label: "__setVisible",
    params: [],
    blockOptions: {
      callMethodLabel: false,
      generateBlock: false
    }
  }],
  events: [{
    key: "onImagePress",
    label: "onImagePress",
    params: [],
    blockOptions: {
      icon: "%{BKY_BLOCK_TAB_ICON}"
    }
  }]
}
