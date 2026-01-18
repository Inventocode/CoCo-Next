/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-133
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as D from "./6"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_526 from "./526"
import /* [auto-meaningful-name] */$_5261 from "./526"
var Yw = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "db" : e$keyName
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var a = e$getValue(n)
  var s = e$getValue("title")
  var c = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  function u() {
    e$onChange("updatedAt", Date.now())
  }
  return React.createElement("div", {
    className: N($_5261.formItemWrapper, $_5261.tableData)
  }, React.createElement("div", {
    className: "coco-form-item coco-form-item-horizontal"
  }, React.createElement("div", {
    className: $_5261.label
  }, $_710_index$a$formatMessage({
    id: "TableDataWidget.data"
  })), React.createElement("div", {
    className: $_5261.data
  }, React.createElement("span", {
    className: $_5261.length
  }, $_710_index$a$formatMessage({
    id: "column"
  }), ":", Object.keys(a.header).length), React.createElement("span", {
    className: $_5261.length
  }, $_710_index$a$formatMessage({
    id: "row"
  }), ":", a.data.length))), React.createElement("div", {
    className: $_5261.imageBox
  }, React.createElement("img", {
    className: $_5261.image,
    src: "https://static.bcmcdn.com/coco/image/edit_grid_data_image.png",
    alt: ""
  }), React.createElement("div", {
    className: $_5261.edit
  }, React.createElement("div", {
    className: $_5261.btn,
    onClick: function () {
      c($$_$$_$$_$$_src_editor_redux_common_actions.zj({
        grid: D.a({
          id: e$widgetId,
          name: s
        }, a),
        onClose: u
      }))
    }
  }, $_710_index$a$formatMessage({
    id: "edit"
  })))))
})
export { Yw }
