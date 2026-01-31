/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-165
 */

"use strict"

import { EA } from "./index__part-164"
import * as /* [auto-meaningful-name] */$_135 from "./135"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { useState } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_473 from "./473"
import /* [auto-meaningful-name] */$_4731 from "./473"
var CA = function (e) {
  var /* [auto-meaningful-name] */e$onSuccess = e.onSuccess
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$isEmpty = e.isEmpty
  var o = useState(false)
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var l = useDispatch()
  function u(t) {
    if (!e.isReadOnly) {
      s(true)
    }
  }
  function d() {
    if (!e.isReadOnly) {
      s(false)
    }
  }
  return React.createElement("div", {
    className: N($_4731.SoundDragContainer, a && $_4731.isDragging),
    onDrop: function (n) {
      if (!e.isReadOnly) {
        l($$_$$_$$_$$_src_editor_redux_common_actions.wf(n.dataTransfer.files, e$onSuccess, true))
        s(false)
      }
    },
    onDragEnter: u,
    onDragLeave: d
  }, e$children, e$isEmpty && React.createElement("div", {
    className: $_4731.SoundLayoutEmpty,
    onDragEnter: u,
    onDragLeave: d
  }, React.createElement("h5", null, $_710$a$formatMessage({
    id: "emptySoundLibraryTitle"
  })), React.createElement("div", {
    className: $_4731.emptyContent
  }, $_710$a$formatMessage({
    id: "emptySoundLibraryTips1"
  }), " ", React.createElement("br", null), $_710$a$formatMessage({
    id: "emptySoundLibraryTips2"
  }), " ", React.createElement("br", null), $_710$a$formatMessage({
    id: "emptySoundLibraryTips3"
  }), " ", React.createElement("br", null), $_710$a$formatMessage({
    id: "emptySoundLibraryTips4"
  }), " ", React.createElement("br", null))))
}
var TA = function (e) {
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var n = useDispatch()
  var r = useSelector(function (e) {
    return e.resource.soundFileList.reverse()
  })
  var o = useState("")
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = function (e) {
    s(e)
  }
  return React.createElement("div", {
    className: $_4731.soundLayout
  }, React.createElement("div", {
    className: $_4731.soundLayoutMain
  }, React.createElement(CA, {
    isReadOnly: e.readOnly,
    isEmpty: 0 === r.size
  }, React.createElement("div", {
    className: $_4731.imageLayoutList
  }, React.createElement("ul", null, React.createElement("li", {
    className: $_4731.uploadItem
  }, React.createElement($_13_index.B, {
    onChange: function (e) {
      if (e) {
        n($$_$$_$$_$$_src_editor_redux_common_actions.wf(e, undefined, true))
      }
    },
    multiple: true,
    accept: $_135.h
  }, React.createElement("div", {
    className: $_4731.content
  }, React.createElement($_13_index.j, {
    type: "icon-add2",
    className: $_4731.icon
  }), React.createElement("div", {
    className: $_4731.name
  }, $_710$a$formatMessage({
    id: "Resource.upload"
  }))))), r.map(function (e) {
    return React.createElement(EA, {
      key: e.id,
      id: e.id,
      name: e.name,
      cdnUrl: e.cdnUrl,
      source: e.source,
      duration: e.duration,
      extension: "",
      isPlaying: e.id === a,
      setSoundPlayingId: c
    })
  }))))))
}
export { TA }
