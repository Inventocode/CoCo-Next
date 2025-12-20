/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-152
 */

"use strict"

import { VT } from "./index__part-151"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_622 from "./622"
import /* [auto-meaningful-name] */_$_ from "./622"
var KT = _React.memo(function () {
  var e = $_16_index.d()
  var t = $_16_index.e(function (e) {
    return e.project
  })
  var /* [auto-meaningful-name] */t$packageProgress = t.packageProgress
  var /* [auto-meaningful-name] */t$isPackaging = t.isPackaging
  var o = _React.useState(false)
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var l = _React.useRef(false)
  var u = function () {
    e($$_$$_$$_$$_src_shared_events_messagesWrapper.xf())
  }
  var d = _React.useCallback(function () {
    e($$_$$_$$_$$_src_shared_events_messagesWrapper.Vg())
    if (100 === t$packageProgress) {
      e($$_$$_$$_$$_src_shared_events_messagesWrapper.Hi(false))
    }
  }, [])
  _React.useEffect(function () {
    if (100 === t$packageProgress) {
      var e = setTimeout(function () {
        s(true)
      }, 1e3)
      return function () {
        return clearTimeout(e)
      }
    }
    s(false)
  }, [t$packageProgress])
  _React.useEffect(function () {
    var t = React.createElement("div", {
      className: N(_$_.completePackage),
      onClick: function (t) {
        if (!l.current) {
          e($$_$$_$$_$$_src_shared_events_messagesWrapper.Mi(true))
          t.stopPropagation()
        }
      }
    }, React.createElement($_13_index.j, {
      type: "icon-apk"
    }), React.createElement("p", {
      className: _$_.close,
      onClick: function (t) {
        e($$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
          onConfirm: function () {
            e($$_$$_$$_$$_src_shared_events_messagesWrapper.Li(false))
            e($$_$$_$$_$$_src_shared_events_messagesWrapper.Gh("PACKAGE_APK_ICON"))
          },
          onClose: d,
          allowText: $_710_index$a$formatMessage({
            id: "package.cancel"
          }),
          title: "",
          isDangerous: true,
          content: $_710_index$a$formatMessage({
            id: "package.deletePackage"
          })
        }))
        t.stopPropagation()
      }
    }, React.createElement($_13_index.j, {
      type: "icon-close"
    })))
    if (a) {
      e($$_$$_$$_$$_src_shared_events_messagesWrapper.Qh("PACKAGE_APK_ICON", {
        name: "PACKAGE_APK_ICON",
        content: t,
        visible: true
      }))
    }
    return function () {
      $$_$$_$$_$$_src_shared_events_messagesWrapper.Gh("PACKAGE_APK_ICON")
    }
  }, [e, $_710_index$a$formatMessage, d, a])
  return React.createElement(React.Fragment, null, React.createElement("div", null, !a && t$isPackaging && React.createElement("div", {
    className: _$_.packageProgress
  }, React.createElement("div", {
    className: _$_.circle
  }, React.createElement(VT, {
    percent: t$packageProgress,
    strokeWidth: 4,
    strokeColor: "#6E4FF4"
  }), React.createElement("p", {
    className: _$_.percentText
  }, t$packageProgress, React.createElement("span", {
    className: _$_.symbol
  }, "%")), React.createElement("p", {
    className: _$_.progressType
  }, 0 === t$packageProgress && $_710_index$a$formatMessage({
    id: "package.packagePendingText"
  }), $_710_index$a$formatMessage(100 === t$packageProgress ? {
    id: "package.packageComplete"
  } : {
    id: "package.isPackaging"
  }))), React.createElement("p", {
    className: _$_.close,
    onClick: function () {
      if (100 !== t$packageProgress) {
        e($$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
          onConfirm: u,
          onClose: d,
          allowText: $_710_index$a$formatMessage({
            id: "package.cancel"
          }),
          title: "",
          isDangerous: true,
          content: $_710_index$a$formatMessage({
            id: "package.cancelPackage"
          })
        }))
      } else {
        e($$_$$_$$_$$_src_shared_events_messagesWrapper.Ii(true))
        e($$_$$_$$_$$_src_shared_events_messagesWrapper.Li(false))
      }
    }
  }, React.createElement($_13_index.j, {
    type: "icon-close"
  })))))
})
export { KT }
