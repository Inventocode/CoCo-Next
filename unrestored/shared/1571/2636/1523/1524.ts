/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1524
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_710 from "../710"
import "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as a from "../8"
import s from "../8"
import * as /* [auto-meaningful-name] */$_155 from "./155"
import /* [auto-meaningful-name] */$_1551 from "./155"
var _a
_a = function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$index = e.index
  var /* [auto-meaningful-name] */e$onSelect = e.onSelect
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */$$_710$a$formatMessage = $$_710.a().formatMessage
  function d(e) {
    if (e$onSelect) {
      e$onSelect(e$index, e)
    }
  }
  return React1.createElement("div", {
    className: $_1551.typeSelectionList,
    style: {
      left: e$position.x,
      top: e$position.y,
      display: e$visible ? "block" : "none"
    }
  }, React1.createElement("div", {
    onClick: d.bind(null, "number"),
    className: s("number" === e$type && $_1551.active)
  }, $$_710$a$formatMessage({
    id: "storageItemNumber"
  })), React1.createElement("div", {
    onClick: d.bind(null, "string"),
    className: s("string" === e$type && $_1551.active)
  }, $$_710$a$formatMessage({
    id: "storageItemString"
  })))
}
export { _a as a }
export default _a
