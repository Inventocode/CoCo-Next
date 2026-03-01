/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-167
 */

"use strict"

import { IA } from "./index__part-166"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_710 from /* 710 */"./710"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_494 from /* 494 */"./494"
import /* [auto-meaningful-name] */Module_4941 from /* 494 */"./494"
var RA = function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$isEmpty = e.isEmpty
  var r = React1.useState(false)
  var o = Module_10.a(r, 2)
  var i = o[0]
  var a = o[1]
  var /* [auto-meaningful-name] */Module_710$a$formatMessage = Module_710.a().formatMessage
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
    className: Classnames(Module_4941.IconDragContainer, i && Module_4941.isDragging),
    onDragEnter: l,
    onDragLeave: u,
    onDrop: function (t) {
      if (!e.isReadOnly) {
        c(Src_editor_redux_common_actions.rf(t.dataTransfer.files))
        a(false)
      }
    }
  }, e$children, e$isEmpty && React.createElement("div", {
    className: Module_4941.IconLayoutEmpty,
    onDragEnter: l,
    onDragLeave: u
  }, React.createElement("h5", null, Module_710$a$formatMessage({
    id: "emptyIconLibraryTitle"
  })), React.createElement("div", {
    className: Module_4941.emptyContent
  }, Module_710$a$formatMessage({
    id: "emptyIconLibraryTips1"
  }), React.createElement("br", null), Module_710$a$formatMessage({
    id: "emptyIconLibraryTips2"
  }), React.createElement("br", null), Module_710$a$formatMessage({
    id: "emptyIconLibraryTips3"
  }), React.createElement("br", null))))
}
var kA = function (e) {
  var /* [auto-meaningful-name] */Module_710$a$formatMessage = Module_710.a().formatMessage
  var n = useSelector(function (e) {
    return e.resource.iconFileList.reverse()
  })
  var r = useDispatch()
  return React.createElement("div", {
    className: Module_4941.iconLayout
  }, React.createElement(RA, {
    isReadOnly: e.readOnly,
    isEmpty: 0 === n.size
  }, React.createElement("div", {
    className: Module_4941.iconLayoutMain
  }, React.createElement("div", {
    className: Module_4941.uploadItem
  }, React.createElement(Src_shared_ui_components_index.B, {
    onChange: function (e) {
      if (e) {
        r(Src_editor_redux_common_actions.rf(e))
      }
    },
    multiple: true,
    accept: "image/svg+xml"
  }, React.createElement("div", {
    className: Module_4941.content
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add2",
    className: Module_4941.icon
  }), React.createElement("div", {
    className: Module_4941.name
  }, Module_710$a$formatMessage({
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
