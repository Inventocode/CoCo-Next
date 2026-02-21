/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-152
 */

"use strict"

import { VT } from "./index__part-151"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useRef, useCallback, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_622 from "./622"
import /* [auto-meaningful-name] */$_6221 from "./622"
var KT = memo(function () {
  var e = useDispatch()
  var t = useSelector(function (e) {
    return e.project
  })
  var /* [auto-meaningful-name] */t$packageProgress = t.packageProgress
  var /* [auto-meaningful-name] */t$isPackaging = t.isPackaging
  var o = useState(false)
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var l = useRef(false)
  var u = function () {
    e($$_$$_$$_$$_src_editor_redux_common_actions.xf())
  }
  var d = useCallback(function () {
    e($$_$$_$$_$$_src_editor_redux_common_actions.Vg())
    if (100 === t$packageProgress) {
      e($$_$$_$$_$$_src_editor_redux_common_actions.Hi(false))
    }
  }, [])
  useEffect(function () {
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
  useEffect(function () {
    var t = React.createElement("div", {
      className: Classnames($_6221.completePackage),
      onClick: function (t) {
        if (!l.current) {
          e($$_$$_$$_$$_src_editor_redux_common_actions.Mi(true))
          t.stopPropagation()
        }
      }
    }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
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
          allowText: $_710$a$formatMessage({
            id: "package.cancel"
          }),
          title: "",
          isDangerous: true,
          content: $_710$a$formatMessage({
            id: "package.deletePackage"
          })
        }))
        t.stopPropagation()
      }
    }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
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
  }, [e, $_710$a$formatMessage, d, a])
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
  }, 0 === t$packageProgress && $_710$a$formatMessage({
    id: "package.packagePendingText"
  }), $_710$a$formatMessage(100 === t$packageProgress ? {
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
          allowText: $_710$a$formatMessage({
            id: "package.cancel"
          }),
          title: "",
          isDangerous: true,
          content: $_710$a$formatMessage({
            id: "package.cancelPackage"
          })
        }))
      } else {
        e($$_$$_$$_$$_src_editor_redux_common_actions.Ii(true))
        e($$_$$_$$_$$_src_editor_redux_common_actions.Li(false))
      }
    }
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-close"
  })))))
})
export { KT }
