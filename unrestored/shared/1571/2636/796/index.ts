/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：796
 */

"use strict"

export { l as a }
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_710_index from "../710/index"
import * as /* [auto-meaningful-name] */$$_13_index from "../13/index"
import * as /* [auto-meaningful-name] */$_751 from "./751"
import /* [auto-meaningful-name] */_$_ from "./751"
function l(e) {
  var /* [auto-meaningful-name] */e$onCancel = e.onCancel
  var /* [auto-meaningful-name] */e$onOk = e.onOk
  var /* [auto-meaningful-name] */e$title = e.title
  var s = undefined === e$title ? "saveTipsTitle" : e$title
  var /* [auto-meaningful-name] */e$desc = e.desc
  var u = undefined === e$desc ? "saveTipsDesc" : e$desc
  var /* [auto-meaningful-name] */$$_710_index$a$formatMessage = $$_710_index.a().formatMessage
  return _React.createElement("div", {
    className: _$_.saveTipsWrapper
  }, _React.createElement("div", {
    className: _$_.saveTipsMask
  }), _React.createElement("div", {
    className: _$_.saveTipsContent
  }, _React.createElement("div", {
    className: _$_.name
  }, $$_710_index$a$formatMessage({
    id: s
  })), _React.createElement("div", {
    className: _$_.description
  }, $$_710_index$a$formatMessage({
    id: u
  })), _React.createElement("div", {
    className: _$_.actions
  }, _React.createElement($$_13_index.d, {
    onClick: e$onCancel
  }, $$_710_index$a$formatMessage({
    id: "notSave"
  })), _React.createElement($$_13_index.d, {
    type: "primary",
    onClick: e$onOk
  }, $$_710_index$a$formatMessage({
    id: "save"
  })))))
}
var _b
_b = React.memo(l)
export { _b as b }
export default l
