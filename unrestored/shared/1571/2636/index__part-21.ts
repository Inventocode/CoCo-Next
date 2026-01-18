/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-21
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_566 from "./566"
import /* [auto-meaningful-name] */$_5661 from "./566"
var gn = React1.memo(function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = $_16_index.d()
  var n = $_16_index.e(function (e) {
    return e.common.projectSaveProgressDialog
  })
  var /* [auto-meaningful-name] */n$visible = n.visible
  var /* [auto-meaningful-name] */n$progress = n.progress
  return React.createElement($_13_index.f, {
    visible: n$visible,
    className: $_5661.container,
    onClose: function () {
      t($$_$$_$$_$$_src_editor_redux_common_actions.Qi(false))
    }
  }, React.createElement("div", {
    className: $_5661.main
  }, React.createElement("div", {
    className: $_5661.progress
  }, React.createElement("div", {
    className: $_5661.progressText,
    style: {
      width: "".concat(n$progress, "%")
    }
  }, "".concat(n$progress, "%")), React.createElement("div", {
    className: $_5661.progressBg
  }, React.createElement("div", {
    className: $_5661.progressInner,
    style: {
      width: "".concat(n$progress, "%")
    }
  }))), React.createElement("div", null, React.createElement("p", {
    className: $_5661.text
  }, $_710_index$a$formatMessage({
    id: "ProjectSaveProgressDialog.content"
  }))), React.createElement("div", {
    className: $_5661.footer
  }, React.createElement($_13_index.d, {
    type: "primary",
    className: $_5661.cancelBtn,
    onClick: function () {
      t($$_$$_$$_$$_src_editor_redux_common_actions.yf())
    }
  }, $_710_index$a$formatMessage({
    id: "ProjectSaveProgressDialog.cancelSave"
  })))))
})
export { gn }
