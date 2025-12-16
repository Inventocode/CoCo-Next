/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-167
 */

"use strict"

import { IA } from "./index__part-166"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_494 from "./494"
import /* [auto-meaningful-name] */_$_ from "./494"
var RA = function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$isEmpty = e.isEmpty
  var r = _React.useState(false)
  var o = $_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var c = $_16_index.d()
  function l(t) {
    if (!e.isReadOnly) {
      a(true)
    }
  }
  function u() {
    if (!e.isReadOnly) {
      a(false)
    }
  }
  return React.createElement("div", {
    className: N(_$_.IconDragContainer, i && _$_.isDragging),
    onDragEnter: l,
    onDragLeave: u,
    onDrop: function (t) {
      if (!e.isReadOnly) {
        c($$_$$_$$_$$_src_shared_events_messagesWrapper.rf(t.dataTransfer.files))
        a(false)
      }
    }
  }, e$children, e$isEmpty && React.createElement("div", {
    className: _$_.IconLayoutEmpty,
    onDragEnter: l,
    onDragLeave: u
  }, React.createElement("h5", null, $_710_index$a$formatMessage({
    id: "emptyIconLibraryTitle"
  })), React.createElement("div", {
    className: _$_.emptyContent
  }, $_710_index$a$formatMessage({
    id: "emptyIconLibraryTips1"
  }), React.createElement("br", null), $_710_index$a$formatMessage({
    id: "emptyIconLibraryTips2"
  }), React.createElement("br", null), $_710_index$a$formatMessage({
    id: "emptyIconLibraryTips3"
  }), React.createElement("br", null))))
}
var kA = function (e) {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var n = $_16_index.e(function (e) {
    return e.resource.iconFileList.reverse()
  })
  var r = $_16_index.d()
  return React.createElement("div", {
    className: _$_.iconLayout
  }, React.createElement(RA, {
    isReadOnly: e.readOnly,
    isEmpty: 0 === n.size
  }, React.createElement("div", {
    className: _$_.iconLayoutMain
  }, React.createElement("div", {
    className: _$_.uploadItem
  }, React.createElement($_13_index.B, {
    onChange: function (e) {
      if (e) {
        r($$_$$_$$_$$_src_shared_events_messagesWrapper.rf(e))
      }
    },
    multiple: true,
    accept: "image/svg+xml"
  }, React.createElement("div", {
    className: _$_.content
  }, React.createElement($_13_index.j, {
    type: "icon-add2",
    className: _$_.icon
  }), React.createElement("div", {
    className: _$_.name
  }, $_710_index$a$formatMessage({
    id: "Resource.upload"
  }))))), n.map(function (e) {
    return React.createElement(IA, {
      key: e.id,
      id: e.id,
      cdnUrl: e.cdnUrl,
      source: e.source,
      name: e.name
    })
  }))))
}
export { kA }
