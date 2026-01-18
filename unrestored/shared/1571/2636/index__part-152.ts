/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-152
 */

"use strict"

import { VT } from "./index__part-151"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_622 from "./622"
import /* [auto-meaningful-name] */$_6221 from "./622"
var KT = React1.memo(function () {
  var e = $_16_index.d()
  var t = $_16_index.e(function (e) {
    return e.project
  })
  var /* [auto-meaningful-name] */t$packageProgress = t.packageProgress
  var /* [auto-meaningful-name] */t$isPackaging = t.isPackaging
  var o = React1.useState(false)
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var l = React1.useRef(false)
  var u = function () {
    e($$_$$_$$_$$_src_editor_redux_common_actions.xf())
  }
  var d = React1.useCallback(function () {
    e($$_$$_$$_$$_src_editor_redux_common_actions.Vg())
    if (100 === t$packageProgress) {
      e($$_$$_$$_$$_src_editor_redux_common_actions.Hi(false))
    }
  }, [])
  React1.useEffect(function () {
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
  React1.useEffect(function () {
    var t = React.createElement("div", {
      className: N($_6221.completePackage),
      onClick: function (t) {
        if (!l.current) {
          e($$_$$_$$_$$_src_editor_redux_common_actions.Mi(true))
          t.stopPropagation()
        }
      }
    }, React.createElement($_13_index.j, {
      type: "icon-apk"
    }), React.createElement("p", {
      className: $_6221.close,
      onClick: function (t) {
        e($$_$$_$$_$$_src_editor_redux_common_actions.zh({
          onConfirm: function () {
            e($$_$$_$$_$$_src_editor_redux_common_actions.Li(false))
            e($$_$$_$$_$$_src_editor_redux_common_actions.Gh("PACKAGE_APK_ICON"))
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
      e($$_$$_$$_$$_src_editor_redux_common_actions.Qh("PACKAGE_APK_ICON", {
        name: "PACKAGE_APK_ICON",
        content: t,
        visible: true
      }))
    }
    return function () {
      $$_$$_$$_$$_src_editor_redux_common_actions.Gh("PACKAGE_APK_ICON")
    }
  }, [e, $_710_index$a$formatMessage, d, a])
  return React.createElement(React.Fragment, null, React.createElement("div", null, !a && t$isPackaging && React.createElement("div", {
    className: $_6221.packageProgress
  }, React.createElement("div", {
    className: $_6221.circle
  }, React.createElement(VT, {
    percent: t$packageProgress,
    strokeWidth: 4,
    strokeColor: "#6E4FF4"
  }), React.createElement("p", {
    className: $_6221.percentText
  }, t$packageProgress, React.createElement("span", {
    className: $_6221.symbol
  }, "%")), React.createElement("p", {
    className: $_6221.progressType
  }, 0 === t$packageProgress && $_710_index$a$formatMessage({
    id: "package.packagePendingText"
  }), $_710_index$a$formatMessage(100 === t$packageProgress ? {
    id: "package.packageComplete"
  } : {
    id: "package.isPackaging"
  }))), React.createElement("p", {
    className: $_6221.close,
    onClick: function () {
      if (100 !== t$packageProgress) {
        e($$_$$_$$_$$_src_editor_redux_common_actions.zh({
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
        e($$_$$_$$_$$_src_editor_redux_common_actions.Ii(true))
        e($$_$$_$$_$$_src_editor_redux_common_actions.Li(false))
      }
    }
  }, React.createElement($_13_index.j, {
    type: "icon-close"
  })))))
})
export { KT }
