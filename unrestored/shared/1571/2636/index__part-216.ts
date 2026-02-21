/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-216
 */

"use strict"

import { nb } from "./index__part-92"
import * as Tn from "./68"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useSelector, useDispatch, batch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_708 from "./708"
import /* [auto-meaningful-name] */$_7081 from "./708"
var qP = memo(function () {
  var e = useSelector(function (e) {
    return e.common.switchImageDialogInfo
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$imageOpenFileId = e.imageOpenFileId
  var /* [auto-meaningful-name] */e$imageCloseFileId = e.imageCloseFileId
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var a = useState("")
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useState("")
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = useState("")
  var v = $_10_index.a(g, 2)
  var b = v[0]
  var y = v[1]
  useEffect(function () {
    if (e$visible) {
      l(e$imageOpenFileId)
      m(e$imageCloseFileId)
    }
  }, [e$imageCloseFileId, e$imageOpenFileId, e$visible])
  var E = useDispatch()
  var O = function (e, t) {
    switch (t) {
      case "open":
        l(e.id)
        break
      case "close":
        m(e.id)
    }
  }
  function w(e) {
    if (e) {
      E($$_$$_$$_$$_src_editor_redux_common_actions.Zf(e, function (e) {
        O(e[0], b)
      }))
    }
  }
  function C() {
    E($$_$$_$$_$$_src_editor_redux_common_actions.wj(Tn.c.ImageLibrary, function (e) {
      var t = e[0]
      O(t, b)
      E($$_$$_$$_$$_src_editor_redux_common_actions.sh())
    }))
  }
  return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.f, {
    visible: e$visible,
    className: $_7081.sliderImageDialog,
    title: $_710$a$formatMessage({
      id: "switch.custom"
    }),
    onClose: function () {
      E($$_$$_$$_$$_src_editor_redux_common_actions.Hj({
        visible: false
      }))
    },
    footer: React.createElement($$_$$_$$_$$_src_shared_ui_components_index.d, {
      type: "primary",
      onClick: function () {
        batch(function () {
          E($$_$$_$$_$$_src_editor_redux_common_actions.Lg(e$widgetId, "backgroundOpenImage", c))
          E($$_$$_$$_$$_src_editor_redux_common_actions.Lg(e$widgetId, "backgroundCloseImage", p))
          E($$_$$_$$_$$_src_editor_redux_common_actions.Hj({
            visible: false
          }))
        })
      }
    }, $_710$a$formatMessage({
      id: "confirm"
    }))
  }, React.createElement("div", {
    className: $_7081.sliderImage
  }, React.createElement("div", {
    className: $_7081.imageInfo
  }, React.createElement("span", {
    className: $_7081.title
  }, $_710$a$formatMessage({
    id: "switch.replaceImage"
  })), React.createElement("div", {
    className: $_7081.imageList
  }, React.createElement("div", {
    className: $_7081.imageItem,
    onClick: function () {
      y("close")
    }
  }, React.createElement(nb, {
    onUploadFileChange: w,
    onResourceLibraryClick: C,
    fileId: p,
    style: {
      height: 240,
      width: 240,
      padding: "12px",
      marginBottom: "8px"
    }
  }), React.createElement("span", null, $_710$a$formatMessage({
    id: "switch.close"
  }))), React.createElement("div", {
    className: $_7081.imageItem,
    onClick: function () {
      y("open")
    }
  }, React.createElement(nb, {
    onUploadFileChange: w,
    onResourceLibraryClick: C,
    fileId: c,
    style: {
      height: 240,
      width: 240,
      padding: "12px",
      marginBottom: "8px"
    }
  }), React.createElement("span", null, $_710$a$formatMessage({
    id: "switch.open"
  })))))))
})
export { qP }
