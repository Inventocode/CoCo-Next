/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-184
 */

"use strict"

import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_624 from "./624"
import /* [auto-meaningful-name] */$_6241 from "./624"
var Rj = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$urls = e.urls
  var /* [auto-meaningful-name] */e$handleGroupItemClick = e.handleGroupItemClick
  var /* [auto-meaningful-name] */e$onVisibleChange = e.onVisibleChange
  var /* [auto-meaningful-name] */e$isGroupItemSelected = e.isGroupItemSelected
  var /* [auto-meaningful-name] */e$getTooltipContainer = e.getTooltipContainer
  var c = React.createElement("ul", {
    className: $_6241.groupPopoverContent
  }, null === e$urls || undefined === e$urls ? undefined : e$urls.map(function (e, t) {
    return React.createElement("li", {
      onClick: function (t) {
        return e$handleGroupItemClick(t, e)
      },
      className: N(e$isGroupItemSelected(e) && $_6241.selected),
      key: t
    }, React.createElement("div", {
      className: $_6241.playArea
    }, React.createElement("img", {
      alt: t.toString(),
      src: e
    })), React.createElement("div", {
      className: $_6241.infoArea
    }, React.createElement("div", {
      className: $_6241.nameArea
    }, t + 1), e$isGroupItemSelected(e) && React.createElement("div", {
      className: N($_6241.btn, $_6241.selectedIconWrap)
    }, React.createElement($_13_index.j, {
      type: "icon-style-selected"
    }))))
  }))
  return React.createElement($_1213.a, {
    content: c,
    placement: "rightTop",
    getTooltipContainer: e$getTooltipContainer,
    autoAdjustOverflow: false,
    title: "选择图片帧",
    trigger: "click",
    visible: e$visible,
    align: {
      overflow: {
        adjustX: true,
        adjustY: false
      },
      offset: [-5, 0]
    },
    overlayClassName: $_6241.groupPopover,
    onVisibleChange: e$onVisibleChange
  }, e$children)
})
export { Rj }
