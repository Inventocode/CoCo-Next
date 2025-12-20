/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-11
 */

"use strict"

var Xe
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$_276 from "./276"
import * as /* [auto-meaningful-name] */$_161 from "../../../../src/editor/ui/header/styles.module.css"
import /* [auto-meaningful-name] */_$_ from "../../../../src/editor/ui/header/styles.module.css"
import * as /* [auto-meaningful-name] */$_750 from "./750"
import /* [auto-meaningful-name] */_$_2 from "./750"
!function (e) {
  e[e.ERROR = 0] = "ERROR"
  e[e.WARN = 1] = "WARN"
}(Xe || (Xe = {}))
var ot = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$message = e.message
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var o = e$type === Xe.ERROR ? _$_2.error : _$_2.warn
  return React.createElement("div", {
    className: N(o, _$_2.container)
  }, React.createElement("span", {
    className: _$_2.message
  }, e$message), React.createElement("span", {
    className: _$_2.close,
    onClick: e$onClose
  }, React.createElement($_13_index.j, {
    type: "icon-close",
    className: _$_2.icon
  })))
})
export { Xe }
export { ot }
