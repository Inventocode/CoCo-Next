/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-160
 */

"use strict"

import { WS } from "./index__part-158"
import { JS } from "./index__part-159"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_569 from "./569"
import /* [auto-meaningful-name] */$_5691 from "./569"
import * as /* [auto-meaningful-name] */$_936 from "./936"
import /* [auto-meaningful-name] */$_9361 from "./936"
var rA = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$toast = e.toast
  var r = undefined === e$toast ? "" : e$toast
  var /* [auto-meaningful-name] */e$showIcon = e.showIcon
  var i = undefined !== e$showIcon && e$showIcon
  var /* [auto-meaningful-name] */e$setVisible = e.setVisible
  var s = $_16_index.d()
  var c = React1.useRef(null)
  React1.useEffect(function () {
    if (c.current) {
      clearTimeout(c.current)
    }
    if (e$visible) {
      c.current = window.setTimeout(function () {
        e$setVisible(false)
      }, 3e3)
    }
  }, [s, e$visible, r, e$setVisible])
  return e$visible ? React.createElement("div", {
    className: $_9361.toastWrapper
  }, React.createElement("div", {
    className: $_9361.toast
  }, i && React.createElement($_13_index.j, {
    type: "icon-alert-success",
    className: $_9361.icon
  }), React.createElement("div", {
    className: $_9361.textWrapper
  }, "已重置为初始数据"))) : null
})
var oA = React1.memo(function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = $_16_index.d()
  var n = $_16_index.e(function (e) {
    return e.dataWatch.dataWatchToast
  })
  var r = function () {
    t($$_$$_$$_$$_src_editor_redux_common_actions.Vi(undefined))
  }
  var o = function () {
    window.open("https://codemao-guide.yuque.com/bfiekm/sbo5kh/mhfhe11vyex2f0w4?singleDoc#", "_blank")
  }
  return React.createElement("div", {
    className: N($_5691.wrapper)
  }, React.createElement("div", {
    className: N($_5691.flexSc, $_5691.header)
  }, React.createElement("h3", {
    className: $_5691.title
  }, $_710_index$a$formatMessage({
    id: "dataWatch"
  })), React.createElement("div", {
    className: $_5691.toast
  }, React.createElement(rA, {
    visible: n.visible,
    toast: n.toast || "",
    showIcon: true,
    setVisible: function () {
      return t($$_$$_$$_$$_src_editor_redux_common_actions.nh())
    }
  })), React.createElement("span", {
    className: N($_5691.closeBtn, "DevToolCloseButton"),
    onClick: r
  }, React.createElement($_13_index.j, {
    type: "icon-close-bold"
  }))), React.createElement("div", {
    className: N($_5691.content)
  }, React.createElement("div", {
    className: $_5691.shadowContent
  }, React.createElement(WS, null), React.createElement(JS, null), React.createElement("div", {
    className: N($_5691.help),
    onClick: o
  }, "看看怎么用？"))))
})
export { rA }
export { oA }
