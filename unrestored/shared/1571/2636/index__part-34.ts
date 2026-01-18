/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-34
 */

"use strict"

import * as Qu from "./60"
import * as /* [auto-meaningful-name] */$_196 from "./196"
import /* [auto-meaningful-name] */$_1961 from "./196"
import * as /* [auto-meaningful-name] */$_146 from "./146"
var Xd = [
  {
    type: "WidgetTitle",
    hasDisableOrVisible: true
  }, {
    type: "VisibleSwitch"
  }, {
    type: "TextWidgetTextGroup"
  }, {
    type: "BackgroundColor"
  }, {
    type: "AntSwitch",
    label: "textOverflow",
    key: "overflow",
    convert: function (e) {
      return undefined === e || "hidden" === e
    },
    reverse: function (e) {
      return e ? "hidden" : "visible"
    }
  }, {
    type: "Align"
  }, {
    type: "WidgetOpacity"
  }, {
    type: "Size",
    sizeRange: [[$_146.m, Qu.l], [$_146.l, Qu.g]]
  }, {
    type: "Coordinate"
  }
]
var Qd = [
  {
    type: "WidgetTitle",
    hasDisableOrVisible: true
  }, {
    type: "VisibleSwitch"
  }, {
    type: "TextArea"
  }, {
    type: "FontFamily"
  }, [
    {
      type: "Color",
      label: "textColor"
    }, {
      type: "BackgroundColor"
    }
  ], {
    type: "HorizontalAlign"
  }
]
export { Xd }
export { Qd }
