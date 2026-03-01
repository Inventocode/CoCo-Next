/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-6
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"./190"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"./141/index"
import * as /* [auto-meaningful-name] */Module_809 from /* 809 */"./809"
import /* [auto-meaningful-name] */Module_8091 from /* 809 */"./809"
var we = React1.memo(function (e) {
  var t
  var /* [auto-meaningful-name] */e$type = e.type
  var r = undefined === e$type ? "image-only" : e$type
  var /* [auto-meaningful-name] */e$text = e.text
  var i = undefined === e$text ? "" : e$text
  return React.createElement("div", {
    className: Module_8091.container
  }, React.createElement("div", {
    className: Classnames(Module_8091.image, (t = {}, Module_11.a(t, Module_8091.imageOnly, "image-only" === r), Module_11.a(t, Module_8091.imageText, "image-text" === r), t))
  }), i && React.createElement("div", {
    className: Module_8091.text
  }, i))
})
export { we }
