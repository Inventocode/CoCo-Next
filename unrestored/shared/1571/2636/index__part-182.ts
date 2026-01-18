/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-182
 */

"use strict"

import { fj, hj } from "./index__part-181"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_815 from "./815"
import /* [auto-meaningful-name] */$_8151 from "./815"
var bj = React1.memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$source = e.source
  var /* [auto-meaningful-name] */e$cdnUrl = e.cdnUrl
  var /* [auto-meaningful-name] */e$md5 = e.md5
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$isSelect = e.isSelect
  var /* [auto-meaningful-name] */e$selectHandler = e.selectHandler
  return React.createElement("div", {
    className: N($_8151.IconLibraryItem, e$isSelect && $_8151.selected),
    onClick: function () {
      e$selectHandler({
        id: t,
        name: e$name,
        md5: e$md5,
        type: fj.Icon,
        cdnUrl: e$cdnUrl,
        selectFrom: hj.Library
      })
    }
  }, React.createElement("div", {
    className: $_8151.icon
  }, React.createElement($_13_index.j, {
    type: "icon-style-selected"
  })), React.createElement("div", {
    className: $_8151.content
  }, React.createElement("img", {
    alt: e$name,
    src: e$cdnUrl || e$source
  })), React.createElement("div", {
    className: $_8151.footer
  }, e$name, ".svg"))
})
export { bj }
