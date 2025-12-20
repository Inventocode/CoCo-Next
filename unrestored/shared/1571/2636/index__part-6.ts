/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-6
 */

"use strict"

import * as k from "./11"
import N from "./8"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_190 from "./190"
import * as /* [auto-meaningful-name] */$_141_index from "./141/index"
import * as /* [auto-meaningful-name] */$_809 from "./809"
import /* [auto-meaningful-name] */_$_ from "./809"
var we = _React.memo(function (e) {
  var t
  var /* [auto-meaningful-name] */e$type = e.type
  var r = undefined === e$type ? "image-only" : e$type
  var /* [auto-meaningful-name] */e$text = e.text
  var i = undefined === e$text ? "" : e$text
  return React.createElement("div", {
    className: _$_.container
  }, React.createElement("div", {
    className: N(_$_.image, (t = {}, k.a(t, _$_.imageOnly, "image-only" === r), k.a(t, _$_.imageText, "image-text" === r), t))
  }), i && React.createElement("div", {
    className: _$_.text
  }, i))
})
export { we }
