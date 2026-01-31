/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-136
 */

"use strict"

import { hb, mb } from "./index__part-94"
import { Lw } from "./index__part-130"
import * as /* [auto-meaningful-name] */$_286 from "./286"
import * as /* [auto-meaningful-name] */$_277 from "./277"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_383 from "./383"
import /* [auto-meaningful-name] */$_3831 from "./383"
var tC = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var o = e$getValue("drawProcess") || false
  var i = e$getValue("drawSpeed")
  var a = undefined === i ? $_277.b : i
  function s(e) {
    e$onChange("drawSpeed", Number(e))
  }
  return React.createElement("div", {
    className: N($_3831.formItemWrapper, $_3831.brushWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: $_3831.processWrapper
  }, React.createElement("div", null, React.createElement("span", null, $_710$a$formatMessage({
    id: "drawProcess"
  })), React.createElement($_1213.a, {
    overlayClassName: $_3831.helpPopover,
    placement: "rightTop",
    title: "绘图过程是什么？",
    content: React.createElement("div", null, "这是对绘画过程的解释内容，待定。这是对绘画过程的解释内容， 待定。这是对绘画过程的解释内容，待定。")
  }, React.createElement("span", null, React.createElement($_13_index.j, {
    type: "icon-help-circle",
    className: $_3831.helpIcon
  })))), React.createElement(Lw, {
    defaultChecked: o,
    onChange: function (e) {
      e$onChange("drawProcess", e)
    }
  })), o && React.createElement("div", {
    className: $_3831.speedWrapper
  }, React.createElement("span", null, $_710$a$formatMessage({
    id: "drawSpeed"
  })), React.createElement($_13_index.o, {
    className: $_3831.speedInput,
    label: $_710$a$formatMessage({
      id: "drawSpeedUnit"
    }),
    type: "number",
    defaultValue: a,
    max: $_277.d,
    min: $_277.f,
    onBlur: s,
    onStep: s
  })))
})
var nC = [
  {
    value: $_286.a.ARROW,
    renderContent: function (e) {
      return React.createElement("div", {
        className: $_3831.cursorArrow,
        style: {
          color: e
        }
      }, React.createElement($_13_index.j, {
        type: "icon-brush-arrow"
      }))
    }
  }, {
    value: $_286.a.CIRCLE,
    renderContent: function (e) {
      return React.createElement("div", {
        className: $_3831.cursorCircle,
        style: {
          backgroundColor: e,
          outlineColor: e
        }
      })
    }
  }, {
    value: $_286.a.NONE,
    renderContent: function (e) {
      return React.createElement("div", {
        className: $_3831.cursorNone
      }, "空")
    }
  }
]
var rC = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "color" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var a = e$getValue(n)
  var s = e$getValue("cursorShape") || $_286.a.NONE
  return React.createElement("div", {
    className: N($_3831.formItemWrapper, $_3831.colorWrapper, "coco-form-item", "coco-form-item-horizontal")
  }, React.createElement("div", {
    className: $_3831.brushPenColor
  }, React.createElement("span", null, $_710$a$formatMessage({
    id: "brushPenColor"
  })), React.createElement(mb, {
    width: 43,
    keyName: n,
    onChange: e$onChange,
    color: a
  })), React.createElement("div", {
    className: $_3831.brushPenCursor
  }, React.createElement("span", null, $_710$a$formatMessage({
    id: "brushCursorShape"
  })), React.createElement(hb, {
    value: s,
    modeList: nC,
    onChange: function (e) {
      if (e !== s && e$onChange) {
        e$onChange("cursorShape", e)
      }
    },
    params: [a]
  }, nC.map(function (e) {
    return React.createElement($_13_index.p, {
      key: e.value,
      value: e.value,
      className: $_3831.cursorOption
    }, e.renderContent(a))
  }))))
})
export { tC }
export { rC }
