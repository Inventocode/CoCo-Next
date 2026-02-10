/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-127
 */

"use strict"

import { py } from "./index__part-102"
import qv from "./88"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_189 from "./189"
var _w = memo(function (e) {
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var r = e$getValue("style") || $_189.b.styleA
  var o = e$getValue("themeColor")
  var i = (0, $_710.a().formatMessage)({
    id: e$formConfig.label || "previewImage"
  })
  var a = {
    backgroundColor: o
  }
  return React.createElement($_13_index.i, {
    className: qv.formItemWrapper,
    label: i,
    align: "vertical"
  }, React.createElement("div", {
    className: qv.dialog
  }, React.createElement("div", {
    className: qv.dialogContent
  }, React.createElement("div", {
    className: qv.titleWrapper,
    style: r === $_189.b.styleB ? {
      paddingLeft: "24px"
    } : {
      paddingLeft: "101px"
    }
  }, React.createElement("div", {
    className: qv.title,
    style: a
  }), React.createElement("div", {
    className: qv.title,
    style: a
  })), React.createElement("div", {
    className: qv.textWrapper
  }, React.createElement("div", {
    className: N(qv.line, qv.firstLine),
    style: a
  }), React.createElement("div", {
    className: N(qv.line, qv.secondLine),
    style: a
  })), r === $_189.b.styleA ? React.createElement("div", {
    className: qv.buttonWrapper
  }, React.createElement("div", {
    className: N(qv.button, qv.secondary)
  }, "BUTTON"), React.createElement("div", {
    className: N(qv.button, qv.primary),
    style: a
  }, "BUTTON")) : React.createElement("div", {
    className: qv.textButtonWrapper
  }, React.createElement("div", {
    className: qv.secondary
  }, "BUTTON"), React.createElement("div", {
    className: qv.primary,
    style: {
      color: o
    }
  }, "BUTTON")))))
})
var vw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "options" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var a = e$getValue(n)
  var s = e$formConfig.dropdown || []
  var c = (0, $_710.a().formatMessage)({
    id: e$formConfig.label || "options"
  })
  return React.createElement($_13_index.i, {
    className: N(qv.formItemWrapper),
    label: c,
    align: "horizontal"
  }, React.createElement(py, {
    onChange: function (e) {
      if (e$onChange) {
        e$onChange(n, e)
      }
    },
    value: a,
    optionLabelProp: "label",
    listHeight: 160,
    suffixIcon: React.createElement($_13_index.j, {
      type: "icon-dropdown-down"
    })
  }, s.map(function (e) {
    return React.createElement(py.Option, {
      value: e.value,
      key: e.value,
      label: e.label
    }, e.label)
  })))
})
var bw = memo(function (e) {
  var /* [auto-meaningful-name] */e$formConfig$url = e.formConfig.url
  return e$formConfig$url ? React.createElement("div", {
    style: {
      textAlign: "center",
      position: "absolute",
      height: "50px",
      lineHeight: "50px",
      background: "#fff",
      width: "100%",
      bottom: 0
    }
  }, React.createElement("a", {
    href: e$formConfig$url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "如何使用？")) : null
})
export { _w }
export { vw }
export { bw }
