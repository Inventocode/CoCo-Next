/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-20
 */

"use strict"

import { cn } from "./index__part-19"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_806 from "./806"
import /* [auto-meaningful-name] */$_8061 from "./806"
var dn = React1.memo(function (e) {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$save = e.save
  var i = $_16_index.d()
  return React.createElement(cn, {
    className: $_8061.container,
    networkErrorVisible: e$visible,
    onRetry: e$save,
    onCancelRetry: e$onClose
  }, React.createElement("h3", null, $_710_index$a$formatMessage({
    id: "saveProject.failDialogTitle"
  })), React.createElement("ul", null, React.createElement("li", null, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "saveProject.failDialogTips1"
  }))), React.createElement("li", null, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "saveProject.failDialogTips2"
  }), React.createElement("button", {
    type: "button",
    className: $_8061.saveBtn,
    onClick: function () {
      i($$_$$_$$_$$_src_editor_redux_common_actions.Of())
      e$onClose()
    }
  }, $_710_index$a$formatMessage({
    id: "saveProject.failDialogSaveLocalTips"
  })), $_710_index$a$formatMessage({
    id: "saveProject.failDialogTips3"
  })))))
})
var pn = React1.memo(function (e) {
  var t = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var r = $_16_index.e(function (e) {
    return e.project
  })
  var /* [auto-meaningful-name] */r$packageProgress = r.packageProgress
  var /* [auto-meaningful-name] */r$packageTaskLabel = r.packageTaskLabel
  var /* [auto-meaningful-name] */r$isPackaging = r.isPackaging
  var s = React1.useState(false)
  var c = $_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  React1.useEffect(function () {
    u(!(!r$packageTaskLabel || -1 !== r$packageProgress || r$isPackaging))
  }, [r$isPackaging, r$packageProgress, r$packageTaskLabel])
  return React.createElement(cn, {
    networkErrorVisible: l,
    onRetry: function () {
      u(false)
      t($$_$$_$$_$$_src_editor_redux_common_actions.Ki(0))
      $$_$$_$$_$$_src_editor_redux_common_actions.Nf(t, $$_$$_$$_$$_src_editor_redux_common_actions.jg())
      t($$_$$_$$_$$_src_editor_redux_common_actions.Li(true))
    },
    onCancelRetry: function () {
      u(false)
    }
  }, React.createElement("h3", null, $_710_index$a$formatMessage({
    id: "package.buildFailedTitle"
  })), React.createElement("ul", null, React.createElement("li", null, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "package.buildFailedTips1"
  }))), React.createElement("li", null, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "package.buildFailedTips2"
  }))), React.createElement("li", null, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "package.buildFailedTips3"
  }))), React.createElement("li", null, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "package.buildFailedTips41"
  }), React.createElement("a", {
    href: "https://ozbws9i1yf.feishu.cn/share/base/form/shrcn5xCRSVjUiO4YnIrNRRdUDd",
    target: "_blank",
    rel: "noopener noreferrer"
  }, $_710_index$a$formatMessage({
    id: "feedback"
  })), $_710_index$a$formatMessage({
    id: "package.buildFailedTips42"
  })))))
})
var fn = React1.memo(function (e) {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$save = e.save
  var i = $_16_index.d()
  return React.createElement(cn, {
    className: $_8061.container,
    networkErrorVisible: e$visible,
    onRetry: e$save,
    onCancelRetry: e$onClose
  }, React.createElement("h3", null, $_710_index$a$formatMessage({
    id: "package.networkErrorTitle"
  })), React.createElement("ul", null, React.createElement("li", null, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "package.networkErrorTips1"
  }))), React.createElement("li", null, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "package.networkErrorTips2"
  }), React.createElement("button", {
    type: "button",
    className: $_8061.saveBtn,
    onClick: function () {
      i($$_$$_$$_$$_src_editor_redux_common_actions.Of())
    }
  }, $_710_index$a$formatMessage({
    id: "saveProject.failDialogSaveLocalTips"
  })), $_710_index$a$formatMessage({
    id: "package.networkErrorTips3"
  })))))
})
export { dn }
export { pn }
export { fn }
