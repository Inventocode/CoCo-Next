/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-189
 */

"use strict"

import { fj, hj } from "./index__part-181"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_625 from "./625"
import /* [auto-meaningful-name] */_$_ from "./625"
var Xj = _React.memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$md5 = e.md5
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$cdnUrl = e.cdnUrl
  var /* [auto-meaningful-name] */e$isSelect = e.isSelect
  var /* [auto-meaningful-name] */e$isAdded = e.isAdded
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  return React.createElement("li", {
    onClick: function (i) {
      if (!e$isAdded) {
        e.selectHandler({
          id: t,
          md5: e$md5,
          name: e$name,
          cdnUrl: e$cdnUrl,
          type: fj.Icon,
          selectFrom: hj.Mall
        }, i)
      }
    },
    key: t,
    className: N(_$_.iconMallItem, e$isSelect && _$_.selected)
  }, React.createElement("div", {
    className: _$_.playArea
  }, React.createElement("img", {
    alt: e$name,
    src: e$cdnUrl
  })), React.createElement("div", {
    className: _$_.infoArea
  }, React.createElement("div", {
    className: _$_.nameArea
  }, e$name), e$isAdded ? React.createElement("div", {
    className: _$_.add
  }, $_710_index$a$formatMessage({
    id: "Resource.Added"
  })) : React.createElement("div", {
    className: N(_$_.btn, _$_.unselect)
  }, React.createElement($_13_index.j, {
    type: "icon-style-selected"
  }))))
})
export { Xj }
