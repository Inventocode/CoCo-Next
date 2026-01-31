/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-191
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { useState } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_938 from "./938"
import /* [auto-meaningful-name] */$_9381 from "./938"
var aN = function (e) {
  var /* [auto-meaningful-name] */e$onSuccess = e.onSuccess
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$isEmpty = e.isEmpty
  var i = useState(false)
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var u = useDispatch()
  return React.createElement("div", {
    className: N($_9381.ImageDragContainer, s && $_9381.isDragging),
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
      var /* [auto-meaningful-name] */n$dataTransfer
      var /* [auto-meaningful-name] */n$dataTransfer$files
      if (!(e.isReadOnly || 0 === (null === n || undefined === n || null === (n$dataTransfer = n.dataTransfer) || undefined === n$dataTransfer || null === (n$dataTransfer$files = n$dataTransfer.files) || undefined === n$dataTransfer$files ? undefined : n$dataTransfer$files.length))) {
        u($$_$$_$$_$$_src_editor_redux_common_actions.Zf(n.dataTransfer.files, e$onSuccess, true))
        c(false)
      }
    }
  }, e$children, e$isEmpty && React.createElement("div", {
    className: N($_9381.ImageLayoutEmpty, e$className)
  }, React.createElement($_13_index.j, {
    type: "icon-image-upload"
  }), React.createElement("h5", null, $_710$a$formatMessage({
    id: "emptyImageLibraryTitle"
  })), React.createElement("div", {
    className: $_9381.emptyContent
  }, $_710$a$formatMessage({
    id: "emptyImageLibraryTips1"
  }), " ", React.createElement("br", null), $_710$a$formatMessage({
    id: "emptyImageLibraryTips2"
  }), " ", React.createElement("br", null))))
}
export { aN }
