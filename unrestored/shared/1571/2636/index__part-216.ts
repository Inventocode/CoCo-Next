/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-216
 */

"use strict"

import { nb } from "./index__part-92"
import * as Tn from "./68"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_708 from "./708"
import /* [auto-meaningful-name] */_$_ from "./708"
var qP = _React.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.common.switchImageDialogInfo
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$imageOpenFileId = e.imageOpenFileId
  var /* [auto-meaningful-name] */e$imageCloseFileId = e.imageCloseFileId
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var a = _React.useState("")
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = _React.useState("")
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = _React.useState("")
  var v = $_10_index.a(g, 2)
  var b = v[0]
  var y = v[1]
  _React.useEffect(function () {
    if (e$visible) {
      l(e$imageOpenFileId)
      m(e$imageCloseFileId)
    }
  }, [e$imageCloseFileId, e$imageOpenFileId, e$visible])
  var E = $_16_index.d()
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
      E($$_$$_$$_$$_src_shared_events_messagesWrapper.Zf(e, function (e) {
        O(e[0], b)
      }))
    }
  }
  function C() {
    E($$_$$_$$_$$_src_shared_events_messagesWrapper.wj(Tn.c.ImageLibrary, function (e) {
      var t = e[0]
      O(t, b)
      E($$_$$_$$_$$_src_shared_events_messagesWrapper.sh())
    }))
  }
  return React.createElement($_13_index.f, {
    visible: e$visible,
    className: _$_.sliderImageDialog,
    title: $_710_index$a$formatMessage({
      id: "switch.custom"
    }),
    onClose: function () {
      E($$_$$_$$_$$_src_shared_events_messagesWrapper.Hj({
        visible: false
      }))
    },
    footer: React.createElement($_13_index.d, {
      type: "primary",
      onClick: function () {
        $_16_index.b(function () {
          E($$_$$_$$_$$_src_shared_events_messagesWrapper.Lg(e$widgetId, "backgroundOpenImage", c))
          E($$_$$_$$_$$_src_shared_events_messagesWrapper.Lg(e$widgetId, "backgroundCloseImage", p))
          E($$_$$_$$_$$_src_shared_events_messagesWrapper.Hj({
            visible: false
          }))
        })
      }
    }, $_710_index$a$formatMessage({
      id: "confirm"
    }))
  }, React.createElement("div", {
    className: _$_.sliderImage
  }, React.createElement("div", {
    className: _$_.imageInfo
  }, React.createElement("span", {
    className: _$_.title
  }, $_710_index$a$formatMessage({
    id: "switch.replaceImage"
  })), React.createElement("div", {
    className: _$_.imageList
  }, React.createElement("div", {
    className: _$_.imageItem,
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
  }), React.createElement("span", null, $_710_index$a$formatMessage({
    id: "switch.close"
  }))), React.createElement("div", {
    className: _$_.imageItem,
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
  }), React.createElement("span", null, $_710_index$a$formatMessage({
    id: "switch.open"
  })))))))
})
export { qP }
