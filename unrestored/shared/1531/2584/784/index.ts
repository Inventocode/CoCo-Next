/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：784
 */

"use strict"

export { l as a }
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_702 from "../702"
import * as /* [auto-meaningful-name] */$$_13_index from "../13/index"
import * as /* [auto-meaningful-name] */$_742 from "./742"
import /* [auto-meaningful-name] */_$_ from "./742"
function l(e) {
  var /* [auto-meaningful-name] */e$onCancel = e.onCancel
  var /* [auto-meaningful-name] */e$onOk = e.onOk
  var /* [auto-meaningful-name] */e$title = e.title
  var s = undefined === e$title ? "saveTipsTitle" : e$title
  var /* [auto-meaningful-name] */e$desc = e.desc
  var u = undefined === e$desc ? "saveTipsDesc" : e$desc
  var /* [auto-meaningful-name] */$$_702$a$formatMessage = $$_702.a().formatMessage
  return _React.createElement("div", {
    className: _$_.saveTipsWrapper
  }, _React.createElement("div", {
    className: _$_.saveTipsMask
  }), _React.createElement("div", {
    className: _$_.saveTipsContent
  }, _React.createElement("div", {
    className: _$_.name
  }, $$_702$a$formatMessage({
    id: s
  })), _React.createElement("div", {
    className: _$_.description
  }, $$_702$a$formatMessage({
    id: u
  })), _React.createElement("div", {
    className: _$_.actions
  }, _React.createElement($$_13_index.d, {
    onClick: e$onCancel
  }, $$_702$a$formatMessage({
    id: "notSave"
  })), _React.createElement($$_13_index.d, {
    type: "primary",
    onClick: e$onOk
  }, $$_702$a$formatMessage({
    id: "save"
  })))))
}
var _b
_b = React.memo(l)
export { _b as b }
export default l
