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
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_624 from "./624"
import /* [auto-meaningful-name] */_$_ from "./624"
var Rj = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$urls = e.urls
  var /* [auto-meaningful-name] */e$handleGroupItemClick = e.handleGroupItemClick
  var /* [auto-meaningful-name] */e$onVisibleChange = e.onVisibleChange
  var /* [auto-meaningful-name] */e$isGroupItemSelected = e.isGroupItemSelected
  var /* [auto-meaningful-name] */e$getTooltipContainer = e.getTooltipContainer
  var c = React.createElement("ul", {
    className: _$_.groupPopoverContent
  }, null === e$urls || undefined === e$urls ? undefined : e$urls.map(function (e, t) {
    return React.createElement("li", {
      onClick: function (t) {
        return e$handleGroupItemClick(t, e)
      },
      className: N(e$isGroupItemSelected(e) && _$_.selected),
      key: t
    }, React.createElement("div", {
      className: _$_.playArea
    }, React.createElement("img", {
      alt: t.toString(),
      src: e
    })), React.createElement("div", {
      className: _$_.infoArea
    }, React.createElement("div", {
      className: _$_.nameArea
    }, t + 1), e$isGroupItemSelected(e) && React.createElement("div", {
      className: N(_$_.btn, _$_.selectedIconWrap)
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
    overlayClassName: _$_.groupPopover,
    onVisibleChange: e$onVisibleChange
  }, e$children)
})
export { Rj }
