/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-184
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_624 from /* 624 */"./624"
import /* [auto-meaningful-name] */Module_6241 from /* 624 */"./624"
var Rj = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$urls = e.urls
  var /* [auto-meaningful-name] */e$handleGroupItemClick = e.handleGroupItemClick
  var /* [auto-meaningful-name] */e$onVisibleChange = e.onVisibleChange
  var /* [auto-meaningful-name] */e$isGroupItemSelected = e.isGroupItemSelected
  var /* [auto-meaningful-name] */e$getTooltipContainer = e.getTooltipContainer
  var c = React.createElement("ul", {
    className: Module_6241.groupPopoverContent
  }, null === e$urls || undefined === e$urls ? undefined : e$urls.map(function (e, t) {
    return React.createElement("li", {
      onClick: function (t) {
        return e$handleGroupItemClick(t, e)
      },
      className: Classnames(e$isGroupItemSelected(e) && Module_6241.selected),
      key: t
    }, React.createElement("div", {
      className: Module_6241.playArea
    }, React.createElement("img", {
      alt: t.toString(),
      src: e
    })), React.createElement("div", {
      className: Module_6241.infoArea
    }, React.createElement("div", {
      className: Module_6241.nameArea
    }, t + 1), e$isGroupItemSelected(e) && React.createElement("div", {
      className: Classnames(Module_6241.btn, Module_6241.selectedIconWrap)
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-style-selected"
    }))))
  }))
  return React.createElement(Module_1213.a, {
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
    overlayClassName: Module_6241.groupPopover,
    onVisibleChange: e$onVisibleChange
  }, e$children)
})
export { Rj }
