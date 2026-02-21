/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-6
 */

"use strict"

import * as k from "./11"
import /* [auto-meaningful-name] */Classnames from "classnames"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_190 from "./190"
import * as /* [auto-meaningful-name] */$_141_index from "./141/index"
import * as /* [auto-meaningful-name] */$_809 from "./809"
import /* [auto-meaningful-name] */$_8091 from "./809"
var we = memo(function (e) {
  var t
  var /* [auto-meaningful-name] */e$type = e.type
  var r = undefined === e$type ? "image-only" : e$type
  var /* [auto-meaningful-name] */e$text = e.text
  var i = undefined === e$text ? "" : e$text
  return React.createElement("div", {
    className: $_8091.container
  }, React.createElement("div", {
    className: Classnames($_8091.image, (t = {}, k.a(t, $_8091.imageOnly, "image-only" === r), k.a(t, $_8091.imageText, "image-text" === r), t))
  }), i && React.createElement("div", {
    className: $_8091.text
  }, i))
})
export { we }
