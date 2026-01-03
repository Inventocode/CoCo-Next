/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-126
 */

"use strict"

import /* [auto-meaningful-name] */$_186 from "./186"
import qv from "./88"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_2680_index from "./2680/index"
var hw = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "templateType" : e$keyName
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var a = e$getValue(n)
  var s = e$getValue("templateRenderType")
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var l = $_16_index.d()
  var u = _React.useState(false)
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  function g(e) {
    if (e$onChange) {
      e$onChange("templateRenderType", e)
    }
  }
  function v(e) {
    if (e !== a) {
      l($$_$$_$$_$$_src_editor_redux_common_actions.Af(e$widgetId, e, function () {
        if (e$onChange) {
          e$onChange(n, e)
        }
        m(false)
      }))
    } else {
      m(false)
    }
  }
  return React.createElement("div", {
    className: N($_186.formItemWrapper, "templateType")
  }, React.createElement("div", {
    className: "coco-form-item coco-form-item-horizontal"
  }, $_710_index$a$formatMessage({
    id: "ListViewerWidget.templateType"
  }), React.createElement("div", {
    className: $_186.cardBox
  }, React.createElement("div", {
    onClick: g.bind(null, "tiled"),
    className: N($_186.cardItem, "tiled" === s && $_186.active)
  }, $_710_index$a$formatMessage({
    id: "ListViewerWidget.tiled"
  })), React.createElement("div", {
    onClick: g.bind(null, "card"),
    className: N($_186.cardItem, "card" === s && $_186.active)
  }, $_710_index$a$formatMessage({
    id: "ListViewerWidget.card"
  })))), React.createElement("div", {
    className: $_186.templateBox,
    onClick: function () {
      m(true)
    }
  }, React.createElement("img", {
    className: $_186.selectedTemplateImg,
    src: "https://static.bcmcdn.com/coco/image/".concat(a, ".png"),
    alt: ""
  })), React.createElement($_2680_index.a, {
    title: null,
    visible: p,
    footer: null,
    centered: true,
    style: {
      padding: 0
    },
    bodyStyle: {
      margin: "60px 0",
      padding: 0,
      background: "#eff2f8",
      borderRadius: "12px"
    },
    onCancel: function () {
      m(false)
    }
  }, React.createElement("div", {
    className: $_186.templateListTitle
  }, React.createElement("div", {
    className: $_186.title
  }, $_710_index$a$formatMessage({
    id: "ListViewerWidget.templateType"
  })), React.createElement($_13_index.j, {
    type: "icon-closed"
  })), React.createElement("div", {
    className: $_186.templateListBox
  }, Object.keys($$_$$_$$_$$_src_editor_widget_builtIn_types.o).map(function (e) {
    return React.createElement("div", {
      className: N($_186.templateItem, e === a && $_186.active),
      key: e,
      onClick: v.bind(null, e)
    }, e === a && React.createElement("div", {
      className: $_186.selectIconBox
    }, React.createElement($_13_index.j, {
      type: "icon-style-selected"
    })), React.createElement("img", {
      className: $_186.templateItemImg,
      src: "https://static.bcmcdn.com/coco/image/".concat(e, ".png"),
      alt: ""
    }))
  }))))
})
var mw = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "options" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var a = e$getValue(n)
  var s = e$formConfig.dropdown || []
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var l = _React.useState(a)
  var u = $_10_index.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = $_710_index$a$formatMessage({
    id: e$formConfig.label || "options"
  })
  var g = function (e) {
    p(e)
    if (e$onChange) {
      e$onChange(n, e)
    }
  }
  return React.createElement($_13_index.i, {
    className: N(qv.formItemWrapper),
    label: m,
    align: "horizontal"
  }, React.createElement("div", {
    className: qv.optionSwitch
  }, s.map(function (e) {
    return React.createElement("div", {
      key: e.label,
      onClick: g.bind(null, e.value),
      className: N(qv.option, d === e.value && qv.activeOption)
    }, React.createElement("span", null, e.label))
  })))
})
export { hw }
export { mw }
