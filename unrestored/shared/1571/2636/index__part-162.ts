/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-162
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_355 from "./355"
import /* [auto-meaningful-name] */$_3551 from "./355"
var dA = function (e) {
  var /* [auto-meaningful-name] */e$onSuccess = e.onSuccess
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$isEmpty = e.isEmpty
  var i = React1.useState(false)
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var u = $_16_index.d()
  return React.createElement("div", {
    className: N($_3551.ImageDragContainer, s && $_3551.isDragging),
    onDragEnter: function (t) {
      if (!e.isReadOnly) {
        c(true)
      }
    },
    onDragLeave: function () {
      if (!e.isReadOnly) {
        c(false)
      }
    },
    onDrop: function (n) {
      if (!e.isReadOnly) {
        u($$_$$_$$_$$_src_editor_redux_common_actions.Zf(n.dataTransfer.files, e$onSuccess, true))
        c(false)
      }
    }
  }, e$children, e$isEmpty && React.createElement("div", {
    className: N($_3551.ImageLayoutEmpty, e$className)
  }, React.createElement("h5", null, $_710_index$a$formatMessage({
    id: "emptyImageLibraryTitle"
  })), React.createElement("div", {
    className: $_3551.emptyContent
  }, $_710_index$a$formatMessage({
    id: "emptyImageLibraryTips1"
  }), " ", React.createElement("br", null), $_710_index$a$formatMessage({
    id: "emptyImageLibraryTips2"
  }), " ", React.createElement("br", null), $_710_index$a$formatMessage({
    id: "emptyImageLibraryTips3"
  }), " ", React.createElement("br", null))))
}
export { dA }
