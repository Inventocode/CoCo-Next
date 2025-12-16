/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-133
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
import * as D from "./6"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_526 from "./526"
import /* [auto-meaningful-name] */_$_ from "./526"
var Yw = _React.memo(function (e) {
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
    className: N(_$_.formItemWrapper, _$_.tableData)
  }, React.createElement("div", {
    className: "coco-form-item coco-form-item-horizontal"
  }, React.createElement("div", {
    className: _$_.label
  }, $_710_index$a$formatMessage({
    id: "TableDataWidget.data"
  })), React.createElement("div", {
    className: _$_.data
  }, React.createElement("span", {
    className: _$_.length
  }, $_710_index$a$formatMessage({
    id: "column"
  }), ":", Object.keys(a.header).length), React.createElement("span", {
    className: _$_.length
  }, $_710_index$a$formatMessage({
    id: "row"
  }), ":", a.data.length))), React.createElement("div", {
    className: _$_.imageBox
  }, React.createElement("img", {
    className: _$_.image,
    src: "https://static.bcmcdn.com/coco/image/edit_grid_data_image.png",
    alt: ""
  }), React.createElement("div", {
    className: _$_.edit
  }, React.createElement("div", {
    className: _$_.btn,
    onClick: function () {
      c($$_$$_$$_$$_src_shared_events_messagesWrapper.zj({
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
