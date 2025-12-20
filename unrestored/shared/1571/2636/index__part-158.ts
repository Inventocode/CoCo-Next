/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-158
 */

"use strict"

import { nI } from "./index__part-170"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_474 from "./474"
import /* [auto-meaningful-name] */_$_ from "./474"
var GS = function (e, t) {
  var n = React.createElement("div", {
    className: _$_.screenIcon
  }, React.createElement($_13_index.j, {
    className: "coco-iconfont-screen-bg",
    type: e >= 9 ? "icon-screen-variable-plus" : "icon-screen-variable"
  }), React.createElement("span", {
    className: N(_$_.iconNumber, e >= 9 ? _$_.iconFat : _$_.iconThin, e > 0 && e < 9 ? _$_.iconMiddle : "")
  }, e + 1))
  var r = React.createElement("div", {
    className: _$_.tips
  }, null === t || undefined === t ? undefined : t.title)
  return t ? React.createElement($_748_index.a, {
    placement: "bottom",
    trigger: ["hover"],
    title: r
  }, n) : n
}
var WS = React.memo(function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = _React.useRef(null)
  var /* [auto-meaningful-name] */React$useContextNI$setBulkSelectVisible = React.useContext(nI).setBulkSelectVisible
  return React.createElement("div", {
    className: N(_$_.wrapper)
  }, React.createElement("div", {
    className: N(_$_.header)
  }, React.createElement("div", {
    className: N(_$_.addButton),
    ref: t
  }, React.createElement("div", {
    className: N(_$_.AddIcon),
    onClick: function () {
      React$useContextNI$setBulkSelectVisible(true)
    }
  }, React.createElement("div", {
    className: _$_.icon
  }, React.createElement($_13_index.j, {
    type: "icon-add"
  })), React.createElement("div", {
    className: N(_$_.addText)
  }, $_710_index$a$formatMessage({
    id: "DataWatch.addData"
  }))))))
})
export { GS }
export { WS }
