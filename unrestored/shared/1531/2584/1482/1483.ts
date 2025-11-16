/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1483
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_702 from "../702"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as a from "../8"
import s from "../8"
import * as /* [auto-meaningful-name] */$_154 from "./154"
import /* [auto-meaningful-name] */_$_ from "./154"
var _a
_a = function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$index = e.index
  var /* [auto-meaningful-name] */e$onSelect = e.onSelect
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */$$_702$a$formatMessage = $$_702.a().formatMessage
  function d(e) {
    if (e$onSelect) {
      e$onSelect(e$index, e)
    }
  }
  return _React.createElement("div", {
    className: _$_.typeSelectionList,
    style: {
      left: e$position.x,
      top: e$position.y,
      display: e$visible ? "block" : "none"
    }
  }, _React.createElement("div", {
    onClick: d.bind(null, "number"),
    className: s("number" === e$type && _$_.active)
  }, $$_702$a$formatMessage({
    id: "storageItemNumber"
  })), _React.createElement("div", {
    onClick: d.bind(null, "string"),
    className: s("string" === e$type && _$_.active)
  }, $$_702$a$formatMessage({
    id: "storageItemString"
  })))
}
export { _a as a }
export default _a
