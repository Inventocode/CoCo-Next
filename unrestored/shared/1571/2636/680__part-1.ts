/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：680__part-1
 */

"use strict"

import * as o from "./6"
import * as /* [auto-meaningful-name] */$_133 from "./133"
import * as a from "./5"
import * as s from "./33"
var c = {
  type: a.v,
  icon: $_133.a,
  title: "widgetName",
  platforms: ["web", "android", "ios"],
  isGlobalWidget: false,
  isInvisibleWidget: false,
  properties: [
    {
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
      defaultValue: $_133.g
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
    }
  ],
  methods: [
    {
      key: "__setVisible",
      label: "__setVisible",
      params: [],
      blockOptions: {
        callMethodLabel: false,
        generateBlock: false
      }
    }
  ],
  events: [
    {
      key: "onImagePress",
      label: "onImagePress",
      params: [],
      blockOptions: {
        icon: "%{BKY_BLOCK_TAB_ICON}"
      }
    }
  ]
}
export { c }
