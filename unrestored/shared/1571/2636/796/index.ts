/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：796
 */

"use strict"

export { l as a }
import { memo } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_710 from "../710"
import * as /* [auto-meaningful-name] */$$_13_index from "../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */$_751 from "./751"
import /* [auto-meaningful-name] */$_7511 from "./751"
function l(e) {
  var /* [auto-meaningful-name] */e$onCancel = e.onCancel
  var /* [auto-meaningful-name] */e$onOk = e.onOk
  var /* [auto-meaningful-name] */e$title = e.title
  var s = undefined === e$title ? "saveTipsTitle" : e$title
  var /* [auto-meaningful-name] */e$desc = e.desc
  var u = undefined === e$desc ? "saveTipsDesc" : e$desc
  var /* [auto-meaningful-name] */$$_710$a$formatMessage = $$_710.a().formatMessage
  return React1.createElement("div", {
    className: $_7511.saveTipsWrapper
  }, React1.createElement("div", {
    className: $_7511.saveTipsMask
  }), React1.createElement("div", {
    className: $_7511.saveTipsContent
  }, React1.createElement("div", {
    className: $_7511.name
  }, $$_710$a$formatMessage({
    id: s
  })), React1.createElement("div", {
    className: $_7511.description
  }, $$_710$a$formatMessage({
    id: u
  })), React1.createElement("div", {
    className: $_7511.actions
  }, React1.createElement($$_13_index.d, {
    onClick: e$onCancel
  }, $$_710$a$formatMessage({
    id: "notSave"
  })), React1.createElement($$_13_index.d, {
    type: "primary",
    onClick: e$onOk
  }, $$_710$a$formatMessage({
    id: "save"
  })))))
}
var _b
_b = memo(l)
export { _b as b }
export default l
