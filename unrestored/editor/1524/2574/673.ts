"use strict";

export { r as messages };
export { c as types };
var r = {
  "zh-CN": {
    widget: "\u63a7\u4ef6",
    widgetName: "\u56fe\u7247\u6846",
    fileId: "\u56fe\u7247",
    onImagePress: "\u88ab\u70b9\u51fb",
    width: "\u5bbd\u5ea6",
    height: "\u9ad8\u5ea6",
    backgroundColor: "\u80cc\u666f\u989c\u8272"
  }
};
var o = require("./6");
var i = require("./133");
var a = require("./5");
var s = require("./35/index");
var c = {
  type: a.v,
  icon: i.a,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: !1,
  isInvisibleWidget: !1,
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
  }, Object(o.a)({}, s.i), {
    key: "__width",
    label: "width",
    valueType: "number",
    defaultValue: 100,
    blockOptions: {
      generateBlock: !1
    }
  }, {
    key: "__height",
    label: "height",
    valueType: "number",
    defaultValue: 100,
    blockOptions: {
      generateBlock: !1
    }
  }, {
    key: "__size",
    label: "",
    valueType: "number",
    defaultValue: 100,
    readonly: !0,
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
      callMethodLabel: !1,
      generateBlock: !1
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
};