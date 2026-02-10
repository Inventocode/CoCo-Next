/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-167
 */

"use strict"

import { IA } from "./index__part-166"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { useState } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_494 from "./494"
import /* [auto-meaningful-name] */$_4941 from "./494"
var RA = function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$isEmpty = e.isEmpty
  var r = useState(false)
  var o = $_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var c = useDispatch()
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
    className: N($_4941.IconDragContainer, i && $_4941.isDragging),
    onDragEnter: l,
    onDragLeave: u,
    onDrop: function (t) {
      if (!e.isReadOnly) {
        c($$_$$_$$_$$_src_editor_redux_common_actions.rf(t.dataTransfer.files))
        a(false)
      }
    }
  }, e$children, e$isEmpty && React.createElement("div", {
    className: $_4941.IconLayoutEmpty,
    onDragEnter: l,
    onDragLeave: u
  }, React.createElement("h5", null, $_710$a$formatMessage({
    id: "emptyIconLibraryTitle"
  })), React.createElement("div", {
    className: $_4941.emptyContent
  }, $_710$a$formatMessage({
    id: "emptyIconLibraryTips1"
  }), React.createElement("br", null), $_710$a$formatMessage({
    id: "emptyIconLibraryTips2"
  }), React.createElement("br", null), $_710$a$formatMessage({
    id: "emptyIconLibraryTips3"
  }), React.createElement("br", null))))
}
var kA = function (e) {
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var n = useSelector(function (e) {
    return e.resource.iconFileList.reverse()
  })
  var r = useDispatch()
  return React.createElement("div", {
    className: $_4941.iconLayout
  }, React.createElement(RA, {
    isReadOnly: e.readOnly,
    isEmpty: 0 === n.size
  }, React.createElement("div", {
    className: $_4941.iconLayoutMain
  }, React.createElement("div", {
    className: $_4941.uploadItem
  }, React.createElement($_13_index.B, {
    onChange: function (e) {
      if (e) {
        r($$_$$_$$_$$_src_editor_redux_common_actions.rf(e))
      }
    },
    multiple: true,
    accept: "image/svg+xml"
  }, React.createElement("div", {
    className: $_4941.content
  }, React.createElement($_13_index.j, {
    type: "icon-add2",
    className: $_4941.icon
  }), React.createElement("div", {
    className: $_4941.name
  }, $_710$a$formatMessage({
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
